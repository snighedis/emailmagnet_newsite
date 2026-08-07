import type { Metadata } from "next";
import { Fira_Sans_Condensed, Geist_Mono, Inter, Newsreader } from "next/font/google";
import { AnalyticsGate } from "@/components/analytics/analytics-gate";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { ExitIntentModal } from "@/components/marketing/exit-intent-modal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/data/site";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/marketing/json-ld";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const firaSansCondensed = Fira_Sans_Condensed({
  variable: "--font-fira-condensed",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

// Newsreader — SIL Open Font License 1.1 (commercial use + self-hosting allowed).
// Used for headings/titles site-wide; Inter is the body/UI font.
// No `weight`: Newsreader has a variable axis, so omitting it ships ONE variable
// file instead of four static cuts. Listing weights explicitly forfeits that.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${newsreader.variable} ${firaSansCondensed.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebsiteSchema()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieBanner />
        <ExitIntentModal />
        <AnalyticsGate gaId={siteConfig.googleAnalyticsId} adsId={siteConfig.googleAdsId} />
      </body>
    </html>
  );
}
