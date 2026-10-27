"use client";

import type { CSSProperties } from "react";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { Button } from "@/components/ui/button";
import { useCopy, useLocale } from "@/i18n/locale-context";
import { LocaleLink } from "@/i18n/locale-link";

/**
 * Shared by app/global-not-found.tsx (URLs matching no route) and
 * app/[lang]/not-found.tsx (notFound() thrown while rendering a route, e.g.
 * an Italian URL for a page that only exists in English). not-found.tsx gets
 * no params, so the locale and the strings come from LocaleProvider, which
 * SiteShell renders around both.
 */
export function NotFoundContent() {
  const { common, site } = useCopy();
  const { notFound } = common;
  const lang = useLocale();
  return (
    <>
      <HomeReveal />
      <section className="bg-background">
        <div className="page-x axis gap-y-8 pt-12 pb-4 md:pt-20">
          <h1
            data-reveal
            className="t-display text-ink lg:col-start-2 lg:row-start-1"
          >
            {notFound.title}
          </h1>
          <div
            data-reveal
            style={{ "--d": 1 } as CSSProperties}
            className="space-y-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:pr-12"
          >
            <p className="t-lead text-ink max-w-[34ch]">{notFound.body}</p>
            <Button asChild size="xl">
              <LocaleLink href="/">{notFound.home}</LocaleLink>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-background">
        <div className="page-x axis gap-y-8 pt-20 md:pt-28">
          <h2 data-reveal className="t-2 text-ink lg:pr-12">
            {notFound.pagesTitle}
          </h2>
          <ul className="grid gap-2 md:grid-cols-2">
            {notFound.pages.map((page, i) => (
              <li
                key={page.href}
                data-reveal
                style={{ "--d": i + 1 } as CSSProperties}
                className="bg-surface-muted text-ink"
              >
                <LocaleLink href={page.href} className="group block p-6 md:p-8">
                  <span className="t-3 block underline-offset-[0.2em] group-hover:underline">
                    {page.label}
                  </span>
                  <span className="t-body mt-2 block">{page.description}</span>
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ProductShowcase
        products={site.products}
        lang={lang}
        title={notFound.productsTitle}
        caption={notFound.productsCaption}
        overviewLink={notFound.productsLink}
      />
    </>
  );
}
