import type { Locale } from "./config";
import {
  englishToItalianPath,
  hasItalianTwin,
  italianToEnglishPath,
  italianUrlPath,
} from "./slugs";

/**
 * Where the language switcher points from the current page. A page with a
 * twin goes to its twin; a page without one goes to the other language's home,
 * which is honest (the switcher never lands on a 404) and keeps the switcher
 * visible on every page.
 *
 * `pathname` comes from usePathname(), which during the server render is the
 * path AFTER the proxy rewrite (`/en/about`, or `/it/about` for the public
 * `/it/chi-siamo`) and in the browser is the public URL. Both forms must give
 * the same answer, or the anchor would change on hydration.
 */
export function switchTarget(lang: Locale, pathname: string): string {
  if (lang === "en") {
    const path = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    return englishToItalianPath(path) ? italianUrlPath(path) : "/it";
  }
  const rest = pathname === "/it" ? "/" : pathname.startsWith("/it/") ? pathname.slice(3) : pathname;
  // Public Italian slug (browser) or English filesystem segment (server render).
  return italianToEnglishPath(rest) ?? (hasItalianTwin(rest) ? rest : "/");
}
