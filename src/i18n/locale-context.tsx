"use client";

import { createContext, useContext, type ReactNode } from "react";
import { defaultLocale, type Locale } from "./config";

/**
 * The current locale for client components. Provided once by the root layout
 * from the `[lang]` route param; `unstable_rootParams` was removed in Next 16,
 * so this context is how deep client components learn the locale.
 */
const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({ lang, children }: { lang: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={lang}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
