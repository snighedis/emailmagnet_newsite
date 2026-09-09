import { describe, expect, it } from "vitest";
import { localizedHref } from "./href";
import {
  englishToItalianPath,
  hasItalianTwin,
  italianSlugs,
  italianToEnglishPath,
  italianUrlPath,
} from "./slugs";

describe("italianSlugs map", () => {
  it("is bijective: no two English paths share an Italian slug", () => {
    const values = Object.values(italianSlugs);
    expect(new Set(values).size).toBe(values.length);
  });

  it("uses clean, lowercase, slash-prefixed segments on both sides", () => {
    for (const [en, it] of Object.entries(italianSlugs)) {
      expect(en.startsWith("/")).toBe(true);
      expect(it.startsWith("/")).toBe(true);
      expect(it).toBe(it.toLowerCase());
      expect(it).not.toMatch(/\s/);
      expect(it.startsWith("/it")).toBe(false); // the prefix is added by italianUrlPath
    }
  });

  it("round-trips every entry through both lookups", () => {
    for (const en of Object.keys(italianSlugs)) {
      const it = englishToItalianPath(en);
      expect(it).not.toBeNull();
      expect(italianToEnglishPath(it as string)).toBe(en);
    }
  });

  it("maps the root to /it and other pages to /it/<slug>", () => {
    expect(italianUrlPath("/")).toBe("/it");
    expect(italianUrlPath("/about")).toBe("/it/chi-siamo");
  });

  it("refuses to build a URL for a page with no Italian twin", () => {
    expect(hasItalianTwin("/blog")).toBe(false);
    expect(englishToItalianPath("/blog")).toBeNull();
    expect(() => italianUrlPath("/blog")).toThrow();
  });
});

describe("localizedHref", () => {
  it("leaves English hrefs untouched", () => {
    expect(localizedHref("en", "/about")).toBe("/about");
    expect(localizedHref("en", "/blog")).toBe("/blog");
  });

  it("swaps to the Italian URL when a twin exists", () => {
    expect(localizedHref("it", "/about")).toBe("/it/chi-siamo");
    expect(localizedHref("it", "/")).toBe("/it");
  });

  it("keeps the English URL when the page has no Italian twin", () => {
    expect(localizedHref("it", "/blog")).toBe("/blog");
    expect(localizedHref("it", "/volume-control-pro")).toBe("/volume-control-pro");
  });

  it("preserves hash fragments", () => {
    expect(localizedHref("it", "/#services")).toBe("/it#services");
    expect(localizedHref("en", "/#services")).toBe("/#services");
  });

  it("passes external, mailto and relative hrefs through unchanged", () => {
    expect(localizedHref("it", "https://example.com/x")).toBe("https://example.com/x");
    expect(localizedHref("it", "mailto:support@dentokudev.com")).toBe(
      "mailto:support@dentokudev.com",
    );
    expect(localizedHref("it", "#top")).toBe("#top");
  });
});
