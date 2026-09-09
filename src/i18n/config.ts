/**
 * Locale configuration. English is served at the site root; Italian under /it.
 * Nothing here may import React or `server-only`: `src/proxy.ts` imports it.
 */
export const locales = ["en", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Open Graph locale strings (underscore form, as og:locale expects). */
export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  it: "it_IT",
};

/** BCP 47 tags for Intl APIs and <html lang>. */
export const bcp47: Record<Locale, string> = {
  en: "en-US",
  it: "it-IT",
};
