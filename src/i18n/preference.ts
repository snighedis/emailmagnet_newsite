import { hasLocale, type Locale } from "./config";

/**
 * The reader's language, for the one place the site guesses it: a visit to the bare
 * home "/". Nothing here may import React or `server-only`: `src/proxy.ts` imports it.
 */

/** Set by the language switcher when a reader picks a language by hand. */
export const LANG_COOKIE = "lang";
export const LANG_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

/** The language a reader chose by hand, if the cookie holds one we serve. */
export function chosenLocale(cookie: string | undefined): Locale | null {
  return cookie && hasLocale(cookie) ? cookie : null;
}

/**
 * The first language in an Accept-Language header that we serve, by quality.
 * "it-IT,it;q=0.9,en;q=0.8" -> "it"; "en-US,en;q=0.9,it;q=0.8" -> "en"; none -> null.
 * Crawlers send no header or English, so they always get null or "en".
 */
export function browserLocale(header: string | null): Locale | null {
  if (!header) return null;
  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { lang: tag.trim().toLowerCase().split("-")[0], q: q ? Number(q.slice(2)) : 1, index };
    })
    .filter(({ q }) => q > 0)
    .sort((a, b) => b.q - a.q || a.index - b.index);
  return ranked.map(({ lang }) => lang).find(hasLocale) ?? null;
}
