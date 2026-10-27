import Image from "next/image";
import type { CSSProperties } from "react";
import type { getCopy } from "@/copy";
import { inShowcaseOrder, productPicture } from "@/data/product-pictures";
import { LocaleLink } from "@/i18n/locale-link";

type Products = ReturnType<typeof getCopy>["site"]["products"];

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
const d = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * The products as a two-by-two grid of their 16:10 store images, each filling
 * its tile, with name, store and one line on what it does. Shared by the
 * homepage and the About page; the order comes from src/data/product-pictures.ts.
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
   * On a product page: its own href, so the grid never shows the page you are on.
   * The other products then sit back at 40% saturation and take full colour
   * when pointed at, wherever the device can hover.
   */
  exclude?: string;
  /** How many products to show, in showcase order. */
  limit?: number;
}) {
  const shown = inShowcaseOrder(products.filter((product) => product.href !== exclude)).slice(0, limit);
  return (
    <section className="bg-background">
      <div className="page-x axis gap-y-6 pt-20 md:pt-32">
        <h2 data-reveal className="t-2 text-ink lg:col-start-2">
          {title}
        </h2>
        <p data-reveal style={d(1)} className="t-lead text-ink max-w-[52ch] lg:col-start-2">
          {caption}
        </p>
      </div>
      <ul className="page-x mt-12 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-2">
        {shown.map((product, i) => {
          const picture = productPicture(product.name, lang);
          const store = product.externalUrl?.includes("shopify.com") ? "Shopify App Store" : "Chrome Web Store";
          return (
            <li key={product.href} data-reveal style={d(i % 2)} className="group">
              <LocaleLink href={product.href} className="block">
                <span className="bg-surface-muted relative block aspect-[16/10] overflow-hidden">
                  {picture ? (
                    <Image
                      src={picture}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 46vw, 92vw"
                      className={`object-cover transition-[transform,filter] duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.02] motion-reduce:transition-none ${exclude ? "tile-muted" : ""}`}
                    />
                  ) : null}
                </span>
                <span className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="t-3 text-ink">{product.name}</span>
                  {/* Store names are never translated (AGENTS.md) */}
                  <span className="text-sm text-stone-600">{store}</span>
                </span>
                <span className="t-body text-ink mt-2 block max-w-[52ch]">{product.description}</span>
              </LocaleLink>
            </li>
          );
        })}
      </ul>
      <div className="page-x pt-12 pb-20 md:pb-32">
        {overviewLink ? (
          <LocaleLink href="/overview" className="text-link text-ink text-base font-medium">
            {overviewLink}
          </LocaleLink>
        ) : null}
      </div>
    </section>
  );
}
