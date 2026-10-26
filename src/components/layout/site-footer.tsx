import Link from "next/link";
import { BrandLockup } from "@/components/brand/logo";
import type { ChromeCopy } from "@/copy";
import { siteConfig } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";
import { CookiePreferencesButton } from "@/components/ui/cookie-preferences-button";

/**
 * Server component: receives the resolved copy from SiteShell rather than
 * reading context. Internal links go through LocaleLink so that, on an
 * Italian page, a link to a localised page opens its Italian twin.
 */
export function SiteFooter({ copy }: { copy: ChromeCopy }) {
  const { common, site } = copy;
  const [user, domain] = siteConfig.supportEmail.split("@");
  // A designed close, not a sitemap (tasteskill blueprint "Contact as the
  // headline"): an ink field, the address set as the display line, then every
  // link the old footer carried, compact, in columns under it.
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="page-x pt-10 pb-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-md space-y-2 text-[14px] leading-6 text-white/80">
            <LocaleLink href="/" className="inline-flex items-center text-lg text-white">
              <BrandLockup label={common.footer.logoAlt} />
            </LocaleLink>
            <p>{site.footerTagline}</p>
            <p>
              {siteConfig.companyName}, {site.location}
            </p>
          </div>
          <a href="#" className="text-link text-[14px] text-white">
            {common.footer.backToTop}
          </a>
        </div>

        <div className="mt-24 md:mt-40">
          <p className="t-lead text-white/80">{common.footer.contactLead}</p>
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="t-display mt-3 block text-white transition-colors duration-[180ms] hover:text-brand"
          >
            {user}
            <wbr />@{domain}
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-24 md:grid-cols-4">
          {site.footerColumns.map((column) => (
            <div key={column.label}>
              <h2 className="text-[14px] font-semibold text-white">{column.label}</h2>
              <ul className="mt-3 space-y-1.5 text-[14px] leading-6 text-white/75">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <LocaleLink href={item.href} className="text-link hover:text-white">
                      {item.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 text-[14px] text-white/70 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link href={siteConfig.social.linkedin} aria-label={common.footer.linkedinAria} className="text-link hover:text-white">
              LinkedIn
            </Link>
            <Link href={siteConfig.social.x} aria-label={common.footer.xAria} className="text-link hover:text-white">
              X
            </Link>
            <CookiePreferencesButton className="text-link hover:text-white" />
          </div>
          <p>{common.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
