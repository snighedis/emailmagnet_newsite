"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { CommonCopy } from "@/copy/en/common";
import type { SiteCopy } from "@/copy/en/site";
import { defaultLocale, type Locale } from "./config";

/**
 * Locale and chrome copy for client components. Provided once by SiteShell
 * from the `[lang]` route param; `unstable_rootParams` was removed in Next 16,
 * so this context is how deep client components learn the locale, and how the
 * header, cookie banner, forms and the 404 page get their strings without a
 * props chain (not-found.tsx receives no params at all).
 *
 * Only types are imported from the copy modules: the values arrive as a prop
 * from the server, so the client bundle never contains the other language.
 */
export type ChromeCopyValue = { common: CommonCopy; site: SiteCopy };

type LocaleContextValue = { lang: Locale; copy: ChromeCopyValue | null };

const LocaleContext = createContext<LocaleContextValue>({ lang: defaultLocale, copy: null });

export function LocaleProvider({
  lang,
  copy,
  children,
}: {
  lang: Locale;
  copy: ChromeCopyValue;
  children: ReactNode;
}) {
  return <LocaleContext.Provider value={{ lang, copy }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext).lang;
}

export function useCopy(): ChromeCopyValue {
  const { copy } = useContext(LocaleContext);
  if (!copy) {
    throw new Error("useCopy() must be used inside LocaleProvider (rendered by SiteShell).");
  }
  return copy;
}
