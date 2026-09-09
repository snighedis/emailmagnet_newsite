import { NextResponse, type NextRequest } from "next/server";
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
 *
 * No Accept-Language redirect on purpose: crawlers and English readers are
 * never bounced; the language is only ever chosen through the URL.
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
