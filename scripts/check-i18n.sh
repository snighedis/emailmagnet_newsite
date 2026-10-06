#!/usr/bin/env bash
# Locale routing smoke test. Usage: scripts/check-i18n.sh [base-url]
# Default base URL: http://localhost:3000. Exits non-zero on the first failed
# group of checks, after printing every failure in it.
#
# Derives the expected Italian pages from src/i18n/slugs.ts, so adding a row
# there is enough to have it covered.
set -u
BASE="${1:-http://localhost:3000}"
BASE="${BASE%/}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ORIGIN="https://www.dentokudev.com"
fail=0

ok()   { printf '  ok    %s\n' "$1"; }
bad()  { printf '  FAIL  %s\n' "$1"; fail=1; }
code() { curl -s -o /dev/null -w '%{http_code}' "$BASE$1"; }
loc()  { curl -s -o /dev/null -w '%{redirect_url}' "$BASE$1" | sed "s#^$BASE##"; }

# English path -> Italian slug, from the single source of truth.
PAIRS=$(sed -n 's#^ *"\(/[^"]*\)": "\(/[^"]*\)",.*#\1 \2#p' "$ROOT/src/i18n/slugs.ts")
[ -n "$PAIRS" ] || { echo "could not read src/i18n/slugs.ts"; exit 2; }

echo "== Localised pages ($BASE)"
while read -r en it; do
  itpath="/it${it%/}"; [ "$it" = "/" ] && itpath="/it"
  enurl="$ORIGIN${en%/}"; [ "$en" = "/" ] && enurl="$ORIGIN"
  for path in "$en" "$itpath"; do
    html=$(curl -s "$BASE$path")
    lang=$([ "$path" = "$itpath" ] && echo it || echo en)
    status=$(code "$path")
    [ "$status" = "200" ] && ok "$path 200" || bad "$path returned $status"
    echo "$html" | grep -q "<html lang=\"$lang\"" && ok "$path lang=$lang" || bad "$path missing lang=\"$lang\""
    for hl in en it x-default; do
      echo "$html" | grep -q "hrefLang=\"$hl\"" || bad "$path missing hreflang $hl"
    done
    echo "$html" | grep -q "hrefLang=\"it\" href=\"$ORIGIN$itpath\"" && ok "$path hreflang it -> $itpath" || bad "$path hreflang it does not point at $itpath"
    echo "$html" | grep -q "hrefLang=\"en\" href=\"$enurl\"" || bad "$path hreflang en does not point at $enurl"
  done
done <<< "$PAIRS"

echo "== Redirects and 404s"
check_redirect() { local got; got=$(loc "$1"); [ "$got" = "$2" ] && ok "$1 -> $2" || bad "$1 redirects to '$got', expected $2"; }
check_redirect /en/about /about
check_redirect /en /
check_redirect /it/about /it/chi-siamo
[ "$(code /it/blog)" = "404" ] && ok "/it/blog 404 (English-only page)" || bad "/it/blog should be 404"
[ "$(code /fr/x)" = "404" ] && ok "/fr/x 404" || bad "/fr/x should be 404"
[ "$(code /nonexistent-page)" = "404" ] && ok "/nonexistent-page 404" || bad "/nonexistent-page should be 404"

echo "== Metadata files and assets are not rewritten"
for path in /sitemap.xml /robots.txt /favicon.ico; do
  [ "$(code "$path")" = "200" ] && ok "$path 200" || bad "$path not 200"
done

echo "== Sitemap"
sitemap=$(curl -s "$BASE/sitemap.xml")
expected=$(echo "$PAIRS" | wc -l | tr -d ' ')
found=$(echo "$sitemap" | grep -o "<loc>$ORIGIN/it[^<]*</loc>" | wc -l | tr -d ' ')
[ "$found" = "$expected" ] && ok "$found /it URLs, one per slug-map row" || bad "$found /it URLs in sitemap, expected $expected"
echo "$sitemap" | grep -q 'hreflang="it"' && ok "xhtml:link alternates present" || bad "no hreflang alternates in sitemap"

echo
if [ "$fail" = 0 ]; then echo "All i18n checks passed."; else echo "Some i18n checks failed."; fi
exit "$fail"
