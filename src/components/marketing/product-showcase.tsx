import Image from "next/image";
import type { CSSProperties } from "react";
import type { getCopy } from "@/copy";
import { inShowcaseOrder, productPicture } from "@/data/product-pictures";
import { LocaleLink } from "@/i18n/locale-link";

type Products = ReturnType<typeof getCopy>["site"]["products"];

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
const d = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * The products as proof, set quietly (owner, 18 Nov 2026: the pictures were too
 * large; competitors show their work as text with a small picture or none): the
 * title and caption on the left of the column line, and on its right one row
 * per product, a small 16:10 store image beside its name, store and one line.
 * The same rows hold two, three or four products, so product pages (limit,
 * exclude) never leave a hole. Shared by the homepage and the inner pages; the
 * order comes from src/data/product-pictures.ts.
 */
export function ProductShowcase({
  products,
  lang,
  title,
  caption,
  overviewLink,
  exclude,
  limit,
}: {
  products: Products;
  lang: string;
  title: string;
  caption: string;
  /** Empty on the overview itself, which the link would point back to. */
  overviewLink: string;
  /**
   * On a product page: its own href, so the list never shows the page you are on.
   * The other products then sit back at 40% saturation and take full colour
   * when pointed at, wherever the device can hover.
   */
  exclude?: string;
  /** How many products to show, in showcase order. */
  limit?: number;
  /** Kept for callers from before the rows layout; every list is compact now. */
  compact?: boolean;
}) {
  const shown = inShowcaseOrder(products.filter((product) => product.href !== exclude)).slice(0, limit);
  return (
    <section className="bg-background">
      <div className="page-x axis gap-y-10 py-20 md:py-32">
        <div className="space-y-5 lg:sticky lg:top-24 lg:self-start lg:pr-16">
          <h2 data-reveal className="t-3 text-ink max-w-[22ch]">
            {title}
          </h2>
          <p data-reveal style={d(1)} className="t-lead text-ink max-w-[44ch]">
            {caption}
          </p>
          {overviewLink ? (
            <p data-reveal style={d(2)}>
              <LocaleLink href="/overview" className="text-link text-ink text-base font-medium">
                {overviewLink}
              </LocaleLink>
            </p>
          ) : null}
        </div>
        <ul className="space-y-3">
          {shown.map((product, i) => {
            const picture = productPicture(product.name, lang);
            const store = product.externalUrl?.includes("shopify.com") ? "Shopify App Store" : "Chrome Web Store";
            return (
              <li key={product.href} data-reveal style={d(i)} className="group">
                <LocaleLink
                  href={product.href}
                  className="hover:bg-surface-muted grid grid-cols-[7rem_minmax(0,1fr)] items-center gap-x-5 p-2 transition-colors duration-200 sm:grid-cols-[11rem_minmax(0,1fr)] md:-mx-2 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-x-8"
                >
                  <span className="bg-surface-muted relative block aspect-[16/10] overflow-hidden">
                    {picture ? (
                      <Image
                        src={picture}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 13rem, (min-width: 640px) 11rem, 7rem"
                        className={`object-cover transition-[transform,filter] duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03] motion-reduce:transition-none ${exclude ? "tile-muted" : ""}`}
                      />
                    ) : null}
                  </span>
                  <span className="min-w-0 space-y-1">
                    <span className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5">
                      <span className="text-ink font-heading text-[20px] leading-tight font-medium sm:text-[24px]">
                        {product.name}
                      </span>
                      {/* Store names are never translated (AGENTS.md) */}
                      <span className="text-sm text-stone-600">{store}</span>
                    </span>
                    <span className="t-body text-ink hidden sm:block">{product.description}</span>
                  </span>
                </LocaleLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
