import { AnalyticsGate } from "@/components/analytics/analytics-gate";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ExitIntentModal } from "@/components/marketing/exit-intent-modal";
import { JsonLd } from "@/components/marketing/json-ld";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { getCopy } from "@/copy";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { LocaleProvider } from "@/i18n/locale-context";
import { fontClassNames } from "@/lib/fonts";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/schema";

/**
 * The whole document: <html>, fonts, header, footer, cookie banner,
 * exit-intent, analytics. Rendered by the [lang] root layout for every page,
 * and by app/global-not-found.tsx for URLs that match no route at all. That
 * page bypasses every layout by design (Next composes the routing-level 404
 * from the app root, where there is no layout once the root layout lives
 * under [lang]), so it needs the same shell from a shared component.
 *
 * The chrome copy is resolved here, once per document, and handed to client
 * components through LocaleProvider. Global CSS is imported by the two app
 * files, not here: Next only accepts global stylesheet imports from files
 * inside the app directory.
 */
export function SiteShell({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  const copy = getCopy(lang);

  return (
    <html
      lang={lang}
      // Next 16 no longer suppresses CSS scroll-behavior during navigations
      // unless told to; without this every route change would animate the
      // scroll to top.
      data-scroll-behavior="smooth"
      className={`${fontClassNames} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebsiteSchema(lang, copy.site.description)} />
        <LocaleProvider lang={lang} copy={copy}>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter copy={copy} />
          <CookieBanner />
          <ExitIntentModal />
        </LocaleProvider>
        <AnalyticsGate gaId={siteConfig.googleAnalyticsId} adsId={siteConfig.googleAdsId} />
      </body>
    </html>
  );
}
