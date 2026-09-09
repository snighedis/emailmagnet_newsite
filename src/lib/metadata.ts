import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { ogLocale, type Locale } from "@/i18n/config";
import { hasItalianTwin, italianUrlPath } from "@/i18n/slugs";

type MetadataInput = {
  title: string;
  description: string;
  /** ALWAYS the English path. The Italian URL is derived from the slug map. */
  path?: string;
  /**
   * Pass explicitly on localised pages (both the English and the Italian
   * variant). When omitted the output is the legacy single-locale shape, so the
   * existing call sites on not-yet-localised pages are byte-for-byte unchanged.
   */
  lang?: Locale;
  imageAlt?: string;
};

const defaultImageAlt: Record<Locale, string> = {
  en: "Dentoku Dev software studio preview",
  it: "Anteprima dello studio software Dentoku Dev",
};

export function createMetadata({
  title,
  description,
  path = "/",
  lang,
  imageAlt,
}: MetadataInput): Metadata {
  const enUrl = new URL(path, siteConfig.url).toString();

  // hreflang is emitted only when the caller opted in AND an Italian twin
  // exists, so the pair can never reference a page that is not live.
  const localised = lang !== undefined && hasItalianTwin(path);
  const itUrl = localised ? new URL(italianUrlPath(path), siteConfig.url).toString() : null;
  const canonical = lang === "it" && itUrl ? itUrl : enUrl;

  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  const image = new URL(siteConfig.socialImage, siteConfig.url).toString();
  const alt = imageAlt ?? defaultImageAlt[lang ?? "en"];

  return {
    title,
    description,
    alternates: {
      canonical,
      ...(itUrl ? { languages: { en: enUrl, it: itUrl, "x-default": enUrl } } : {}),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      ...(lang !== undefined
        ? {
            locale: ogLocale[lang],
            ...(itUrl ? { alternateLocale: [ogLocale[lang === "it" ? "en" : "it"]] } : {}),
          }
        : {}),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
