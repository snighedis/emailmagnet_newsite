/**
 * English path -> Italian URL segment. The single source of truth for which pages
 * exist in Italian: the proxy, hreflang, the sitemap, the language switcher and
 * `localizedHref` all read this map, so a page is live in Italian if and only if
 * it has a row here. That is what guarantees hreflang and the sitemap can never
 * point at a 404. Add a row in the same commit that ships the Italian page.
 *
 * Keys are English paths as they appear in the filesystem (`/about`). Values are
 * the Italian segment without the `/it` prefix; `"/"` maps to the Italian home.
 *
 * Must stay free of React and `server-only`: `src/proxy.ts` imports it.
 */
export const italianSlugs: Record<string, string> = {
  "/": "/",
  "/about": "/chi-siamo",
  "/founder": "/fondatore",
  "/contact": "/contatti",
  "/faq": "/domande-frequenti",
  "/privacy": "/privacy",
  "/terms": "/termini",
  "/cookies": "/cookie",
};

const reverse: Record<string, string> = Object.fromEntries(
  Object.entries(italianSlugs).map(([en, it]) => [it, en]),
);

const has = (map: Record<string, string>, key: string) =>
  Object.prototype.hasOwnProperty.call(map, key);

export function hasItalianTwin(enPath: string): boolean {
  return has(italianSlugs, enPath);
}

/** Italian segment for an English path, or null when the page has no Italian twin. */
export function englishToItalianPath(enPath: string): string | null {
  return has(italianSlugs, enPath) ? italianSlugs[enPath] : null;
}

/** English path for an Italian segment, or null when it is not a known Italian slug. */
export function italianToEnglishPath(itPath: string): string | null {
  return has(reverse, itPath) ? reverse[itPath] : null;
}

/** Public Italian URL path, e.g. "/it/chi-siamo"; the root becomes "/it". */
export function italianUrlPath(enPath: string): string {
  const slug = italianSlugs[enPath];
  if (slug === undefined) {
    throw new Error(`No Italian twin for ${enPath}; add it to italianSlugs first.`);
  }
  return slug === "/" ? "/it" : `/it${slug}`;
}
