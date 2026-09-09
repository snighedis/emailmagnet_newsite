import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/data/site";
import { defaultLocale, hasLocale, locales } from "@/i18n/config";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dentoku Dev: Custom Software, Chrome Extensions and Shopify Apps",
    template: "%s | Dentoku",
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  // Single source of truth for crawl/snippet directives — all routes inherit
  // this via Next's metadata merge, so createMetadata() must NOT redefine it.
  // max-snippet/-image-preview/-video-preview let Search + AI features surface
  // full text and large media previews.
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Dentoku Dev: Custom Software, Chrome Extensions and Shopify Apps",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: siteConfig.socialImage,
        width: 1200,
        height: 630,
        alt: "Dentoku Dev software studio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentoku Dev: Custom Software, Chrome Extensions and Shopify Apps",
    description: siteConfig.description,
    images: [siteConfig.socialImage],
  },
};

// Every locale is prerendered for every route. Pages that are not localised
// yet live under the (en-only) route group, whose layout turns the Italian
// variant into a 404 at build time, so "/it/<anything>" can never leak an
// English page under an Italian URL.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// A [lang] value outside generateStaticParams is a routing-level miss, served
// by app/global-not-found.tsx as a fully rendered 404. Without this, a dotted
// single-segment path such as /foo.txt (which the proxy matcher skips) would
// match [lang] itself and reach the render-time guard instead.
export const dynamicParams = false;

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang: requested } = await params;
  // hasLocale narrows the string param. An unknown locale is unreachable
  // through the proxy (every non-/it path is rewritten to /en), and a root
  // layout has no boundary above it to catch a throw, so fall back to English
  // rather than notFound().
  const lang = hasLocale(requested) ? requested : defaultLocale;

  return <SiteShell lang={lang}>{children}</SiteShell>;
}
