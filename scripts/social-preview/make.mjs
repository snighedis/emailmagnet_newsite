/**
 * The link preview (Open Graph / Twitter image), one per language, 1200x630.
 *
 *   node scripts/social-preview/make.mjs
 *
 * Writes public/brand/dentoku-social-preview-{en,it}.png. The picture is the home's
 * first screen in small: the headline in Newsreader on the page ground, and the
 * film's opening card with the orange dot. Its words are the live home copy
 * (homeHero in src/data/site.ts and the Italian hero), so change them there first,
 * then run this again. Needs Google Chrome.
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// The wordmark outlines, read from the logo component so the two never drift.
const logo = readFileSync(join(root, "src/components/brand/logo.tsx"), "utf8");
const wordmark = logo.match(/const WORDMARK =\s*"([^"]+)"/)[1];

const copy = {
  en: {
    headline: ["Repetitive work,", "done by software."],
    card: "Emails to answer",
    rows: ["Quote request", "Documents for the tax return", "Can I come by on Thursday?"],
  },
  it: {
    headline: ["Il lavoro ripetitivo", "lo fa il software."],
    card: "Email da rispondere",
    rows: ["Richiesta preventivo", "Documenti per la dichiarazione", "Posso passare giovedì?"],
  },
};

const fonts = (name) => `url("${join(import.meta.dirname, "fonts", name)}") format("woff2")`;
const page = ({ headline, card, rows }) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
  @font-face { font-family: "Newsreader"; font-weight: 500; src: ${fonts("newsreader-500.woff2")}; }
  @font-face { font-family: "Inter"; font-weight: 500; src: ${fonts("inter-500.woff2")}; }
  @font-face { font-family: "Inter"; font-weight: 600; src: ${fonts("inter-600.woff2")}; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; background: #fbfbfa; }
  body { position: relative; font-family: "Inter", sans-serif; font-weight: 500; color: #11212f; }
  .lockup { position: absolute; left: 64px; top: 60px; display: flex; align-items: center; gap: 18px; }
  .lockup img { width: 54px; height: auto; }
  .lockup svg { height: 21px; width: auto; }
  h1 { position: absolute; left: 64px; bottom: 64px; width: 600px; font-family: "Newsreader", serif;
       font-weight: 500; font-size: 80px; line-height: 0.98; letter-spacing: -0.035em; }
  .card { position: absolute; right: 64px; bottom: 64px; width: 432px; background: #fff;
          border-radius: 18px; box-shadow: 0 24px 64px rgba(17, 33, 47, 0.16); padding: 40px 36px; }
  .card-head { font-weight: 600; font-size: 32px; line-height: 1.1; letter-spacing: -0.02em; white-space: nowrap; }
  .rows { margin-top: 36px; }
  .row:last-child { margin-bottom: 0; }
  .row { height: 64px; margin-bottom: 12px; border-radius: 12px; background: #f1f1ef; padding: 0 20px;
         display: flex; align-items: center; font-size: 21px; white-space: nowrap; overflow: hidden; }
  .dot { position: absolute; right: 36px; top: 40px; width: 26px; height: 26px; border-radius: 50%; background: #f05423; }
</style></head><body>
  <div class="lockup">
    <img src="${join(root, "public/brand/dentoku-dev-mark.png")}" alt="">
    <svg viewBox="0 0 564.6 72.4"><path d="${wordmark}" fill="#11212f"/></svg>
  </div>
  <h1>${headline[0]}<br>${headline[1]}</h1>
  <div class="card">
    <div class="card-head">${card}</div>
    <div class="dot"></div>
    <div class="rows">${rows.map((r) => `<div class="row">${r}</div>`).join("")}</div>
  </div>
</body></html>`;

const work = mkdtempSync(join(tmpdir(), "social-preview-"));
for (const [lang, words] of Object.entries(copy)) {
  const html = join(work, `${lang}.html`);
  writeFileSync(html, page(words));
  const out = join(root, `public/brand/dentoku-social-preview-${lang}.png`);
  execFileSync(chrome, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
    "--window-size=1200,630", "--virtual-time-budget=3000", "--allow-file-access-from-files",
    `--screenshot=${out}`, `file://${html}`,
  ], { stdio: "ignore" });
  console.log(out.replace(root + "/", ""));
}
