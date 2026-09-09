import "server-only";
import type { Locale } from "@/i18n/config";
import { common as commonEn, type CommonCopy } from "./en/common";
import { site as siteEn, type SiteCopy } from "./en/site";
import { common as commonIt } from "./it/common";
import { site as siteIt } from "./it/site";
import { about as aboutEn, type AboutCopy } from "./en/about";
import { contact as contactEn, type ContactCopy } from "./en/contact";
import { faq as faqEn, type FaqCopy } from "./en/faq";
import { founder as founderEn, type FounderCopy } from "./en/founder";
import { home as homeEn, type HomeCopy } from "./en/home";
import { about as aboutIt } from "./it/about";
import { contact as contactIt } from "./it/contact";
import { faq as faqIt } from "./it/faq";
import { founder as founderIt } from "./it/founder";
import { home as homeIt } from "./it/home";

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

/**
 * Page copy, server-side only: pages resolve their own module and never hand
 * it to the client as a whole.
 */
export type PageCopy = {
  home: HomeCopy;
  about: AboutCopy;
  founder: FounderCopy;
  contact: ContactCopy;
  faq: FaqCopy;
};

const pages: Record<Locale, PageCopy> = {
  en: { home: homeEn, about: aboutEn, founder: founderEn, contact: contactEn, faq: faqEn },
  it: { home: homeIt, about: aboutIt, founder: founderIt, contact: contactIt, faq: faqIt },
};

export function getPageCopy(lang: Locale): PageCopy {
  return pages[lang];
}
