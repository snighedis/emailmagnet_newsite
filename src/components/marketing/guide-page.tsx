import type { CSSProperties } from "react";
import {
  FramedPhoto,
  PrimaryAction,
  RowTable,
  ShortAnswer,
  SideSection,
  d,
  type Action,
} from "@/components/marketing/editorial";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { getCopy, getPageCopy } from "@/copy";
import { relatedResourceLinks } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";

/** The product a guide is about, its page and its store picture. */
type Product = { name: string; href: string; picture: { src: string; alt: string; width: number; height: number } };

const PRODUCTS: Record<string, Product> = {
  emailmagnet: {
    name: "EmailMagnet",
    href: "/emailmagnet",
    picture: {
      src: "/brand/emailmagnet-one-click.webp",
      alt: "EmailMagnet's popup listing the business emails found on a web page, with CSV and TXT export",
      width: 1280,
      height: 800,
    },
  },
  clickpilot: {
    name: "ClickPilot AI",
    href: "/clickpilot-ai",
    picture: {
      src: "/brand/clickpilot-ai-showcase.png",
      alt: "Text selected in a Gmail window with ClickPilot AI's actions below it: Fix Grammar, Translate, Explain easy",
      width: 1280,
      height: 800,
    },
  },
  volume: {
    name: "Volume Control PRO",
    href: "/volume-control-pro",
    picture: {
      src: "/brand/volume-control-landscape-en.webp",
      alt: "Volume Control PRO's popup with the volume slider at 150%, beside the line Every tab, up to 600%",
      width: 1600,
      height: 1000,
    },
  },
  countdown: {
    name: "Countdown321",
    href: "/countdown321",
    picture: {
      src: "/brand/countdown321-hero.webp",
      alt: "Countdown321 timer styles: product page cards and an announcement bar counting down",
      width: 1600,
      height: 900,
    },
  },
};

/** Which product a guide belongs to, from the name its page passes in. */
export function productFor(label: string): Product {
  if (label.includes("Volume Control")) return PRODUCTS.volume;
  if (label.includes("Countdown321")) return PRODUCTS.countdown;
  if (label.includes("ClickPilot")) return PRODUCTS.clickpilot;
  return PRODUCTS.emailmagnet;
}

/** An in-page anchor from a section title. */
const anchor = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export type GuidePageProps = {
  product: Product;
  title: string;
  /** The sentence under the title. */
  standfirst?: string;
  answer?: string;
  list: { title: string; items: readonly string[] };
  table?: readonly { intent: string; fit: string; page: string }[];
  sections?: readonly { title: string; body: string }[];
  action: Action;
  currentHref?: string;
};

/**
 * The search guides (redesign: the SEO pages in the homepage's system). The
 * title on the column line with the product's own store picture whole in a
 * wide frame under it, the quick
 * answer on the tone step, the list and the search table, the text with its
 * index on the left, the related resources, then the products and the proposal.
 */
export function GuidePage({ product, title, standfirst, answer, list, table, sections = [], action, currentHref }: GuidePageProps) {
  const { products } = getCopy("en").site;
  const { home } = getPageCopy("en");
  const related = relatedResourceLinks.filter((link) => link.href !== currentHref).slice(0, 6);

  return (
    <>
      <HomeReveal />

      <section className="bg-background">
        <div className="page-x axis gap-y-8 pt-12 pb-14 md:pt-20 md:pb-16">
          <div className="space-y-6 lg:col-start-2 lg:row-start-1">
            <h1 className="t-article text-ink">{title}</h1>
            {standfirst ? (
              <p data-reveal style={d(1)} className="t-lead text-ink max-w-[52ch]">
                {standfirst}
              </p>
            ) : null}
          </div>
          <div
            data-reveal
            style={d(2)}
            className="t-body text-ink space-y-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:pr-12"
          >
            <LocaleLink href={product.href} className="text-link block w-fit font-medium">
              {product.name}
            </LocaleLink>
            <PrimaryAction action={action} />
          </div>
        </div>
        <div className="page-x pb-20 md:pb-28">
          <figure data-reveal style={d(3)}>
            <FramedPhoto
              src={product.picture.src}
              alt={product.picture.alt}
              frame="aspect-[16/10] lg:aspect-[21/9]"
              eager
            />
          </figure>
        </div>
      </section>

      {answer ? <ShortAnswer title="Quick answer" body={answer} long={answer.length > 140} /> : null}

      <SideSection title={list.title} tone={answer ? "background" : "muted"}>
        <ul className="t-lead text-ink grid list-disc gap-x-12 gap-y-4 pl-6 md:grid-cols-2">
          {list.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {table?.length ? (
          <div className="mt-14">
            <RowTable
              caption={`${product.name}: search intents and the page for each`}
              columns={["Search intent", "Product fit", "Recommended page"]}
              rows={table.map(
                (row) =>
                  [
                    row.intent,
                    row.fit,
                    <LocaleLink key={row.page} href={row.page} className="text-link font-medium">
                      {row.page}
                    </LocaleLink>,
                  ] as const,
              )}
            />
          </div>
        ) : null}
      </SideSection>

      {sections.length ? (
        <section className={answer ? "bg-surface-muted" : "bg-background"}>
          <div className="page-x axis gap-y-10 py-20 md:py-32">
            <nav aria-label="On this page" className="space-y-3 lg:sticky lg:top-24 lg:self-start lg:pr-12">
              <h2 className="t-lead text-ink font-semibold">On this page</h2>
              <ul className="t-body text-ink space-y-2">
                {sections.map((section) => (
                  <li key={section.title}>
                    <a href={`#${anchor(section.title)}`} className="text-link">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="max-w-[62ch] space-y-14">
              {sections.map((section, i) => (
                <section key={section.title} id={anchor(section.title)} className="scroll-mt-24">
                  <h2 data-reveal style={d(i % 2) as CSSProperties} className="t-3 text-ink">
                    {section.title}
                  </h2>
                  <p data-reveal style={d((i % 2) + 1)} className="t-lead text-ink mt-4">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {related.length ? (
        <section className="bg-brand text-ink">
          <div className="page-x axis gap-y-10 py-20 md:py-28">
            <div className="space-y-6 lg:pr-12">
              <h2 data-reveal className="t-2">
                Keep reading
              </h2>
              <div data-reveal style={d(1)}>
                <LocaleLink
                  href={action.href}
                  className="bg-ink hover:bg-ink-soft inline-flex h-12 items-center px-6 text-base font-semibold text-white transition-colors duration-[180ms] active:scale-[0.98] motion-reduce:active:scale-100"
                >
                  {action.label}
                </LocaleLink>
              </div>
            </div>
            <nav data-reveal style={d(2)} aria-label="Related resources" className="space-y-5">
              <h3 className="t-3">Related resources</h3>
              <ul className="t-lead grid gap-x-12 gap-y-3 md:grid-cols-2">
                {related.map((link) => (
                  <li key={link.href}>
                    <LocaleLink href={link.href} className="text-link">
                      {link.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      ) : null}

      <ProductShowcase
        products={products}
        lang="en"
        title={home.products.title}
        caption={home.products.caption}
        overviewLink={home.products.overviewLink}
      />

      <ProposalClose closing={home.closing} actionHref="/#brief" />
    </>
  );
}
