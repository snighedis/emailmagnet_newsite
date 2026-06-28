import Link from "next/link";
import Image from "next/image";
import { footerNav, siteConfig } from "@/data/site";
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

export function SiteFooter() {
  return (
    <footer className="bg-surface-soft border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2 font-semibold text-slate-950">
              <Image
                src={siteConfig.logo}
                alt="Dentoku Dev logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                unoptimized
              />
              <span className="font-brand uppercase text-lg tracking-normal">Dentoku Dev</span>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-slate-600">{siteConfig.description}</p>
            <a
              href="https://shipveryfast.dev/?ref=dentokudev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 rounded-[10px] border border-[#e7e3da] bg-white px-3.5 py-2 text-sm leading-none whitespace-nowrap"
            >
              <span className="font-medium text-[#78716c]">Built with</span>
              {/* Hosted by ShipVeryFast (CORS-open, full quality, auto-updating); plain
                  img since next/image doesn't paint reliably in this build. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://shipveryfast.dev/logo.png"
                alt="ShipVeryFast"
                width={17}
                height={22}
                className="block"
                decoding="async"
              />
              <span className="font-bold tracking-[-0.2px] text-[#1c1917]">
                Ship<span className="text-[#f45a1b]">Very</span>Fast
              </span>
            </a>
            <div className="flex items-center gap-2 pt-1">
              <Link
                href={siteConfig.social.linkedin}
                aria-label="Dentoku Dev on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
              >
                <LinkedInIcon className="h-4 w-4" />
              </Link>
              <Link
                href={siteConfig.social.x}
                aria-label="Dentoku Dev on X"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-950"
              >
                <XIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {Object.entries(footerNav).map(([label, items]) => (
            <div key={label}>
              <h2 className="text-sm font-semibold text-slate-950">{label}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-slate-950">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dentoku Dev. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <CookiePreferencesButton className="transition hover:text-slate-950" />
            <span>
              {siteConfig.companyName}, {siteConfig.location}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
