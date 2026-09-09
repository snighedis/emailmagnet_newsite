import type { Locale } from "./config";
import { englishToItalianPath } from "./slugs";

/**
 * Resolve an internal English href for the given locale. English hrefs are
 * returned unchanged. For Italian, a page with an Italian twin gets its `/it`
 * URL; a page without one keeps its English URL, which is the honest outcome:
 * the visitor lands on the English page and the switcher stays visible.
 * External URLs, mailto: links and hash-only anchors pass through untouched.
 */
export function localizedHref(lang: Locale, enHref: string): string {
  if (lang === "en" || !enHref.startsWith("/")) return enHref;

  const hashIndex = enHref.indexOf("#");
  const path = hashIndex >= 0 ? enHref.slice(0, hashIndex) : enHref;
  const hash = hashIndex >= 0 ? enHref.slice(hashIndex) : "";

  const it = englishToItalianPath(path || "/");
  if (it === null) return enHref;

  const base = it === "/" ? "/it" : `/it${it}`;
  return `${base}${hash}`;
}
