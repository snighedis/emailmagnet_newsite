"use client";

import { usePathname } from "next/navigation";
import { locales } from "@/i18n/config";
import { useCopy, useLocale } from "@/i18n/locale-context";
import { switchTarget } from "@/i18n/switcher";
import { cn } from "@/lib/utils";

/**
 * Link to the same page in the other language. A real anchor with hreflang,
 * rendered on the server, so crawlers see the pair in the HTML; no cookie,
 * no JS navigation, the URL alone chooses the language. Points at the twin
 * page when one exists, otherwise at the other language's home.
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
      aria-label={languageSwitcher.ariaLabel}
      className={cn(
        "focus-visible:ring-brand inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-slate-700 outline-none transition hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2",
        className,
      )}
    >
      {languageSwitcher.label}
    </a>
  );
}
