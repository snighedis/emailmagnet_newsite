import { describe, expect, it } from "vitest";
import { createMetadata } from "./metadata";

const ORIGIN = "https://www.dentokudev.com";

type Alternates = { canonical?: string; languages?: Record<string, string> };
type OpenGraph = { url?: string; locale?: string; alternateLocale?: string[] };

const alternates = (m: ReturnType<typeof createMetadata>) => m.alternates as Alternates;
const og = (m: ReturnType<typeof createMetadata>) => m.openGraph as OpenGraph;

describe("createMetadata without lang (legacy single-locale shape)", () => {
  const m = createMetadata({ title: "Blog", description: "d", path: "/blog" });

  it("emits a plain canonical and no hreflang", () => {
    expect(alternates(m).canonical).toBe(`${ORIGIN}/blog`);
    expect(alternates(m).languages).toBeUndefined();
  });

  it("emits no og:locale, so existing pages are byte-identical", () => {
    expect(og(m).locale).toBeUndefined();
    expect(og(m).alternateLocale).toBeUndefined();
  });
});

describe("createMetadata on a page with an Italian twin", () => {
  it("Italian variant: canonical is the Italian URL, hreflang pair plus x-default", () => {
    const m = createMetadata({ title: "Chi siamo", description: "d", path: "/about", lang: "it" });
    expect(alternates(m).canonical).toBe(`${ORIGIN}/it/chi-siamo`);
    expect(alternates(m).languages).toEqual({
      en: `${ORIGIN}/about`,
      it: `${ORIGIN}/it/chi-siamo`,
      "x-default": `${ORIGIN}/about`,
    });
    expect(og(m).url).toBe(`${ORIGIN}/it/chi-siamo`);
    expect(og(m).locale).toBe("it_IT");
    expect(og(m).alternateLocale).toEqual(["en_US"]);
  });

  it("English variant: canonical stays the English URL, same hreflang pair", () => {
    const m = createMetadata({ title: "About", description: "d", path: "/about", lang: "en" });
    expect(alternates(m).canonical).toBe(`${ORIGIN}/about`);
    expect(alternates(m).languages?.it).toBe(`${ORIGIN}/it/chi-siamo`);
    expect(alternates(m).languages?.["x-default"]).toBe(`${ORIGIN}/about`);
    expect(og(m).locale).toBe("en_US");
    expect(og(m).alternateLocale).toEqual(["it_IT"]);
  });

  it("root: the Italian home is /it, not /it/", () => {
    const m = createMetadata({ title: "Home", description: "d", path: "/", lang: "it" });
    expect(alternates(m).canonical).toBe(`${ORIGIN}/it`);
  });
});

describe("createMetadata with lang on a page WITHOUT an Italian twin", () => {
  const m = createMetadata({ title: "Blog", description: "d", path: "/blog", lang: "en" });

  it("never emits an hreflang pointing at a page that does not exist", () => {
    expect(alternates(m).canonical).toBe(`${ORIGIN}/blog`);
    expect(alternates(m).languages).toBeUndefined();
    expect(og(m).alternateLocale).toBeUndefined();
  });

  it("still declares its own og:locale", () => {
    expect(og(m).locale).toBe("en_US");
  });
});
