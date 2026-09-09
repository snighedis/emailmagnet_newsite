import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { italianSlugs } from "@/i18n/slugs";

const ORIGIN = "https://www.dentokudev.com";

type Entry = { url: string; alternates?: { languages?: Record<string, string> } };

describe("sitemap and the slug map agree", () => {
  const entries = sitemap() as Entry[];
  const byUrl = (url: string) => entries.find((entry) => entry.url === url);

  it("lists every localised page in both languages with a matching hreflang pair", () => {
    for (const [en, it] of Object.entries(italianSlugs)) {
      const enUrl = `${ORIGIN}${en === "/" ? "" : en}`;
      const itUrl = `${ORIGIN}/it${it === "/" ? "" : it}`;
      expect(byUrl(enUrl)?.alternates?.languages, en).toEqual({ en: enUrl, it: itUrl });
      expect(byUrl(itUrl)?.alternates?.languages, it).toEqual({ en: enUrl, it: itUrl });
    }
  });

  it("emits exactly one Italian entry per slug-map row and no other /it URL", () => {
    const italian = entries.filter((entry) => /\/it(\/|$)/.test(entry.url));
    expect(italian).toHaveLength(Object.keys(italianSlugs).length);
  });

  it("leaves English-only pages without alternates", () => {
    expect(byUrl(`${ORIGIN}/blog`)?.alternates).toBeUndefined();
    expect(byUrl(`${ORIGIN}/emailmagnet`)?.alternates).toBeUndefined();
  });

  it("keeps the home as the top-priority URL in both languages", () => {
    expect(byUrl(ORIGIN)).toMatchObject({ priority: 1 });
    expect(byUrl(`${ORIGIN}/it`)).toMatchObject({ priority: 1 });
  });
});
