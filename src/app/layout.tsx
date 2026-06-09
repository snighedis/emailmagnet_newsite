import type { Metadata } from "next";
import { Geist, Geist_Mono, Spectral } from "next/font/google";
import { AnalyticsGate } from "@/components/analytics/analytics-gate";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/data/site";
import {
  buildOrganizationSchema,
  buildWebsiteSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/marketing/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Spectral — SIL Open Font License 1.1 (commercial use + self-hosting allowed).
// Used for headings/titles site-wide; Geist remains the body/UI font.
const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dentoku Dev Chrome and Shopify Apps",
    template: "%s | Dentoku",
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Dentoku Dev software studio",
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
    title: "Dentoku Dev software studio",
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
      className={`${geistSans.variable} ${geistMono.variable} ${spectral.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebsiteSchema()} />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieBanner />
        <AnalyticsGate gaId={siteConfig.googleAnalyticsId} adsId={siteConfig.googleAdsId} />
      </body>
    </html>
  );
}
