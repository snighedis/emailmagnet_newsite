import type { Locale } from "./config";
import { englishToItalianPath, italianToEnglishPath, italianUrlPath } from "./slugs";

/**
 * Where the language switcher points from the current page. A page with a
 * twin goes to its twin; a page without one goes to the other language's home,
 * which is honest (the switcher never lands on a 404) and keeps the switcher
 * visible on every page.
 */
export function switchTarget(lang: Locale, pathname: string): string {
  if (lang === "en") {
    return englishToItalianPath(pathname) ? italianUrlPath(pathname) : "/it";
  }
  const rest = pathname === "/it" ? "/" : pathname.startsWith("/it/") ? pathname.slice(3) : pathname;
  return italianToEnglishPath(rest) ?? "/";
}
