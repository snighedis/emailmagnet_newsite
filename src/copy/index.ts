import "server-only";
import type { Locale } from "@/i18n/config";
import { common as commonEn, type CommonCopy } from "./en/common";
import { site as siteEn, type SiteCopy } from "./en/site";
import { common as commonIt } from "./it/common";
import { site as siteIt } from "./it/site";

/**
 * Copy for the global chrome, per locale. `server-only` makes any client
 * component that imports this module fail the build: client components get
 * the current locale's copy through LocaleProvider (`useCopy()`), so the
 * Italian strings never ship in the JavaScript bundle of an English page.
 */
export type ChromeCopy = {
  common: CommonCopy;
  site: SiteCopy;
};

const copy: Record<Locale, ChromeCopy> = {
  en: { common: commonEn, site: siteEn },
  it: { common: commonIt, site: siteIt },
};

export function getCopy(lang: Locale): ChromeCopy {
  return copy[lang];
}
