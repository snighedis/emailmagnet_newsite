import { NextResponse, type NextRequest } from "next/server";
import { browserLocale, chosenLocale, LANG_COOKIE } from "@/i18n/preference";
import { englishToItalianPath, italianToEnglishPath } from "@/i18n/slugs";

/**
 * Locale routing. English stays at the root of the domain (no URL an
 * English page has ever had changes), Italian lives under /it with
 * translated slugs. The filesystem only knows English segments under
 * `app/[lang]/`, so this proxy translates public URLs into them:
 *
 *   /about            -> rewrite  /en/about        (URL stays /about)
 *   /it/chi-siamo     -> rewrite  /it/about
 *   /it/about         -> 308      /it/chi-siamo    (one URL per page)
 *   /it/blog          -> pass     (en-only) layout -> 404
 *   /en/about         -> 308      /about           (/en is never public)
 *   /fr/x             -> rewrite  /en/fr/x         -> no route -> global 404
 *   /  (Italian)      -> 307      /it
 *
 * The bare home is the one URL that guesses the language, because most of
 * the studio's clients are Italian and arrive by typing the domain. A reader
 * who picked a language with the switcher (the `lang` cookie) gets that one;
 * otherwise a browser whose first served language is Italian goes to /it.
 * The redirect is temporary, so "/" stays the English home for search
 * engines, and crawlers, which send no Italian Accept-Language, never see it.
 * Every other URL already names its language and is never redirected.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/it" || pathname.startsWith("/it/")) {
    const rest = pathname.slice(3) || "/";
    const english = italianToEnglishPath(rest);
    if (english) {
      url.pathname = english === "/" ? "/it" : `/it${english}`;
      return NextResponse.rewrite(url);
    }
    const italian = englishToItalianPath(rest);
    if (italian && italian !== rest) {
      url.pathname = `/it${italian}`;
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  if (pathname === "/") {
    const lang =
      chosenLocale(request.cookies.get(LANG_COOKIE)?.value) ??
      browserLocale(request.headers.get("accept-language"));
    if (lang === "it") {
      url.pathname = "/it";
      const response = NextResponse.redirect(url, 307);
      // The same URL answers differently per reader: no cache may hand this redirect to all.
      response.headers.set("Vary", "Accept-Language, Cookie");
      return response;
    }
  }

  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except API routes, Next internals, the metadata files served
  // from src/app and any path with an extension (assets under public/).
  // The proxy runs BEFORE the public/ filesystem lookup, so a matcher that
  // let /brand/logo.png through would rewrite it to /en/brand/logo.png.
  matcher: ["/((?!api|_next|favicon\\.ico|sitemap\\.xml|robots\\.txt|.*\\..*).*)"],
};
