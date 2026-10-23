import Link from "next/link";
import { BrandLockup } from "@/components/brand/logo";
import type { ChromeCopy } from "@/copy";
import { siteConfig } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";
import { CookiePreferencesButton } from "@/components/ui/cookie-preferences-button";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/**
 * Server component: receives the resolved copy from SiteShell rather than
 * reading context. Internal links go through LocaleLink so that, on an
 * Italian page, a link to a localised page opens its Italian twin.
 */
export function SiteFooter({ copy }: { copy: ChromeCopy }) {
  const { common, site } = copy;
  return (
    <footer className="bg-surface-soft border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <LocaleLink href="/" className="inline-flex items-center text-lg text-stone-950">
              <BrandLockup label={common.footer.logoAlt} />
            </LocaleLink>
            <p className="mt-1 max-w-sm text-sm leading-6 text-stone-600">{site.footerTagline}</p>
            <div className="mt-6 flex items-center gap-2">
              <Link
                href={siteConfig.social.linkedin}
                aria-label={common.footer.linkedinAria}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-600 transition hover:border-stone-300 hover:text-stone-950"
              >
                <LinkedInIcon className="h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.social.x}
                aria-label={common.footer.xAria}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-white text-stone-600 transition hover:border-stone-300 hover:text-stone-950"
              >
                <XIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {site.footerColumns.map((column) => (
            <div key={column.label}>
              <h2 className="text-sm font-semibold text-stone-950">{column.label}</h2>
              <ul className="mt-4 space-y-3 text-sm text-stone-600">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <LocaleLink href={item.href} className="transition hover:text-stone-950">
                      {item.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-stone-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{common.footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <CookiePreferencesButton className="transition hover:text-stone-950" />
            <span>
              {siteConfig.companyName}, {site.location}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
