/**
 * Tells IndexNow (Bing, Yandex and the other engines that share it) which pages
 * changed, so they recrawl them now instead of on their own schedule. ChatGPT
 * search leans on Bing, so this is also how a change reaches AI answers sooner.
 *
 *   node scripts/indexnow.mjs <url> [<url> ...]      submit these pages
 *   node scripts/indexnow.mjs --changed --state f    submit the pages whose content
 *                                                    changed since the hashes in f
 *   add --dry-run to print what would be sent
 *
 * The key is public by design: IndexNow checks that public/<key>.txt holds it.
 * --changed is what .github/workflows/indexnow.yml runs after every production
 * deploy. It reads the live sitemap, hashes each page's title, meta description
 * and <main> text, and submits only the pages whose hash moved. Without a state
 * file (first run, or the cache expired) it submits every page once.
 */
import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";

const KEY = "c58796b90e7a31b68b7d50db547f3382";
const HOST = "www.dentokudev.com";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const changed = args.includes("--changed");
const stateIndex = args.indexOf("--state");
const statePath = stateIndex >= 0 ? args[stateIndex + 1] : null;
const urls = args.filter((a, i) => !a.startsWith("--") && !(stateIndex >= 0 && i === stateIndex + 1));

async function get(url) {
  const res = await fetch(url, { headers: { "user-agent": "dentokudev-indexnow" }, redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

/** What a reader and a crawler see change: title, description, main text. */
function fingerprint(html) {
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "";
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const main = (html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? html)
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return createHash("sha256").update(`${title}\n${description}\n${main}`).digest("hex");
}

async function changedUrls() {
  const sitemap = await get(`${ORIGIN}/sitemap.xml`);
  const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const before = statePath && existsSync(statePath) ? JSON.parse(readFileSync(statePath, "utf8")) : {};
  const after = {};
  for (const page of pages) {
    try {
      after[page] = fingerprint(await get(page));
    } catch (error) {
      console.warn(`skipped ${page}: ${error.message}`);
      if (before[page]) after[page] = before[page];
    }
  }
  if (statePath && !dryRun) writeFileSync(statePath, JSON.stringify(after, null, 1));
  return Object.keys(after).filter((page) => before[page] !== after[page]);
}

const list = changed ? await changedUrls() : urls;
const valid = list.filter((u) => new URL(u).host === HOST);
if (valid.length !== list.length) console.warn(`ignored ${list.length - valid.length} URL(s) outside ${HOST}`);
if (valid.length === 0) {
  console.log("Nothing changed, nothing to submit.");
  process.exit(0);
}

console.log(`${dryRun ? "Would submit" : "Submitting"} ${valid.length} URL(s):\n${valid.join("\n")}`);
if (dryRun) process.exit(0);

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${ORIGIN}/${KEY}.txt`, urlList: valid.slice(0, 10000) }),
});
// 200 and 202 mean accepted; 403 means the key file is not live; 422 a URL outside the host.
console.log(`IndexNow answered ${res.status} ${res.statusText}`);
if (res.status !== 200 && res.status !== 202) process.exit(1);
