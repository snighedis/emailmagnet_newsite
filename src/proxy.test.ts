import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { config, proxy } from "./proxy";

const ORIGIN = "https://www.dentokudev.com";

function run(path: string, headers: Record<string, string> = {}) {
  const response = proxy(new NextRequest(`${ORIGIN}${path}`, { headers }));
  return {
    status: response.status,
    // NextResponse.rewrite() and .next() communicate through these headers.
    rewrite: response.headers.get("x-middleware-rewrite"),
    next: response.headers.get("x-middleware-next"),
    location: response.headers.get("location"),
    vary: response.headers.get("vary"),
  };
}

describe("proxy: English at the root", () => {
  it("rewrites the home to /en without changing the public URL", () => {
    expect(run("/")).toMatchObject({ status: 200, rewrite: `${ORIGIN}/en` });
  });

  it("rewrites every other English path to /en/<path>", () => {
    expect(run("/about").rewrite).toBe(`${ORIGIN}/about`.replace("/about", "/en/about"));
    expect(run("/blog/some-post").rewrite).toBe(`${ORIGIN}/en/blog/some-post`);
  });

  it("keeps the query string", () => {
    expect(run("/contact?topic=hiring").rewrite).toBe(`${ORIGIN}/en/contact?topic=hiring`);
  });

  it("sends unknown locales down the English tree, where nothing matches and the global 404 answers", () => {
    expect(run("/fr/x").rewrite).toBe(`${ORIGIN}/en/fr/x`);
  });
});

describe("proxy: /en is never a public URL", () => {
  it("308s /en to the root", () => {
    expect(run("/en")).toMatchObject({ status: 308, location: `${ORIGIN}/` });
  });

  it("308s /en/<path> to /<path>", () => {
    expect(run("/en/about")).toMatchObject({ status: 308, location: `${ORIGIN}/about` });
  });

  it("does not treat /english as the /en prefix", () => {
    expect(run("/english").rewrite).toBe(`${ORIGIN}/en/english`);
  });
});

describe("proxy: Italian under /it", () => {
  it("serves the Italian home from /it", () => {
    expect(run("/it")).toMatchObject({ status: 200, rewrite: `${ORIGIN}/it` });
  });

  it("translates an Italian slug into the English filesystem segment", () => {
    expect(run("/it/chi-siamo").rewrite).toBe(`${ORIGIN}/it/about`);
    expect(run("/it/contatti").rewrite).toBe(`${ORIGIN}/it/contact`);
  });

  it("308s an English slug under /it to its Italian twin", () => {
    expect(run("/it/about")).toMatchObject({ status: 308, location: `${ORIGIN}/it/chi-siamo` });
  });

  it("lets a path with no Italian twin through, for the (en-only) layout to 404", () => {
    expect(run("/it/blog")).toMatchObject({ status: 200, next: "1", rewrite: null });
    expect(run("/it/volume-control-pro").next).toBe("1");
  });

  it("does not treat /italy as the /it prefix", () => {
    expect(run("/italy").rewrite).toBe(`${ORIGIN}/en/italy`);
  });
});

describe("proxy matcher", () => {
  const pattern = new RegExp(`^${config.matcher[0].replace(/^\//, "/")}$`);

  it("excludes API routes, Next internals, metadata files and assets", () => {
    for (const path of [
      "/api/contact",
      "/_next/static/chunks/x.js",
      "/favicon.ico",
      "/sitemap.xml",
      "/robots.txt",
      "/brand/logo.png",
      "/clickpilot-ai-demo.mp4",
      "/llms.txt",
    ]) {
      expect(pattern.test(path), path).toBe(false);
    }
  });

  it("matches every page-like path", () => {
    for (const path of ["/", "/about", "/it", "/it/chi-siamo", "/blog/some-post", "/en/about"]) {
      expect(pattern.test(path), path).toBe(true);
    }
  });
});

describe("proxy: the bare home guesses the language", () => {
  const italian = { "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7" };

  it("sends an Italian browser from / to /it, temporarily, keeping the query", () => {
    expect(run("/", italian)).toMatchObject({ status: 307, location: `${ORIGIN}/it` });
    expect(run("/?utm_source=card", italian).location).toBe(`${ORIGIN}/it?utm_source=card`);
  });

  it("keeps an English browser, or one that ranks Italian second, on the English home", () => {
    expect(run("/", { "accept-language": "en-US,en;q=0.9,it;q=0.8" }).rewrite).toBe(`${ORIGIN}/en`);
    expect(run("/", { "accept-language": "de-DE,de;q=0.9,en;q=0.8" }).rewrite).toBe(`${ORIGIN}/en`);
  });

  it("keeps a reader with no Accept-Language (a crawler) on the English home", () => {
    expect(run("/")).toMatchObject({ status: 200, rewrite: `${ORIGIN}/en` });
  });

  it("follows Italian ranked first by quality, not by position", () => {
    expect(run("/", { "accept-language": "en;q=0.5,it;q=0.9" }).location).toBe(`${ORIGIN}/it`);
  });

  it("lets a choice made with the switcher win over the browser", () => {
    expect(run("/", { ...italian, cookie: "lang=en" }).rewrite).toBe(`${ORIGIN}/en`);
    expect(run("/", { "accept-language": "en-US", cookie: "lang=it" }).location).toBe(`${ORIGIN}/it`);
  });

  it("ignores a cookie with a language we do not serve", () => {
    expect(run("/", { ...italian, cookie: "lang=fr" }).location).toBe(`${ORIGIN}/it`);
  });

  it("tells caches that the redirect depends on the reader", () => {
    expect(run("/", italian).vary).toBe("Accept-Language, Cookie");
  });

  it("never redirects any other English URL", () => {
    expect(run("/about", italian).rewrite).toBe(`${ORIGIN}/en/about`);
    expect(run("/emailmagnet", italian).rewrite).toBe(`${ORIGIN}/en/emailmagnet`);
  });
});
