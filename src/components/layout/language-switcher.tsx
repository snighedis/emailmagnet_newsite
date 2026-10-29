"use client";

import { usePathname } from "next/navigation";
import { locales } from "@/i18n/config";
import { useCopy, useLocale } from "@/i18n/locale-context";
import { LANG_COOKIE, LANG_COOKIE_MAX_AGE } from "@/i18n/preference";
import { switchTarget } from "@/i18n/switcher";
import { cn } from "@/lib/utils";

/**
 * Link to the same page in the other language. A real anchor with hreflang,
 * rendered on the server, so crawlers see the pair in the HTML; no JS
 * navigation, the URL alone chooses the language of the page. Points at the twin
 * page when one exists, otherwise at the other language's home. The click also
 * remembers the choice in the `lang` cookie, which only the bare home "/" reads
 * (see src/proxy.ts), so an Italian browser that picked English stays in English.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const lang = useLocale();
  const pathname = usePathname();
  const { languageSwitcher } = useCopy().common;
  const other = locales.find((candidate) => candidate !== lang) ?? lang;

  return (
    <a
      href={switchTarget(lang, pathname)}
      hrefLang={other}
      lang={other}
      rel="alternate"
      onClick={() => {
        document.cookie = `${LANG_COOKIE}=${other}; path=/; max-age=${LANG_COOKIE_MAX_AGE}; samesite=lax`;
      }}
      aria-label={languageSwitcher.ariaLabel}
      className={cn(
        "focus-visible:ring-brand inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-stone-700 outline-none transition hover:text-stone-950 focus-visible:ring-2",
        className,
      )}
    >
      {languageSwitcher.label}
    </a>
  );
}
