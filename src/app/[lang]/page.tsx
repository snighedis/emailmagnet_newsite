import Image from "next/image";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { JsonLd } from "@/components/marketing/json-ld";
import { HomeHero } from "@/components/marketing/home-hero";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { Button } from "@/components/ui/button";
import { getCopy, getPageCopy } from "@/copy";
import { inShowcaseOrder, productPicture } from "@/data/product-pictures";
import { LocaleLink } from "@/i18n/locale-link";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildItemListSchema } from "@/lib/schema";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).home;
  const metadata = createMetadata({ title: meta.title, description: meta.description, path: "/", lang });
  // The home keeps the layout's default title verbatim, outside the "%s | Dentoku" template.
  return { ...metadata, title: { absolute: meta.title } };
}

type HomeCopy = ReturnType<typeof getPageCopy>["home"];
type Products = ReturnType<typeof getCopy>["site"]["products"];
type HomeSectionKey = "automate" | "process" | "products" | "explore" | "faq";

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
const d = (n: number) => ({ "--d": n }) as CSSProperties;

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).home;
  const { products } = getCopy(lang).site;
  // The order follows each language's argument (redesign tickets 05 and 08): the
  // Italian consulting funnel leads with what we automate; the English page keeps
  // the products first and the row of guides, which are English-only pages.
  const order: HomeSectionKey[] =
    lang === "it"
      ? ["automate", "process", "products", "faq"]
      : ["products", "automate", "process", "explore", "faq"];

  return (
    <>
      {/* The film's poster is the masthead and the LCP element. */}
      <link rel="preload" as="image" href={copy.heroVideo.poster} fetchPriority="high" />
      <JsonLd data={buildItemListSchema(copy.itemListName, products)} />
      <HomeReveal />

      <HomeHero copy={copy} lang={lang} />

      {order.map((key) => (
        <HomeSection key={key} id={key} copy={copy} products={products} lang={lang} />
      ))}

      {/* The close (tasteskill blueprint "The reply card"): the written proposal as a
          paper card lying on the ink field, tilted and cropped by the section's
          bottom edge, with the line it starts from left to fill in. The footer
          continues the same ink field. */}
      <section className="bg-ink text-ink-foreground overflow-hidden">
        <div className="page-x grid gap-12 pt-20 md:pt-28 lg:grid-cols-12 lg:items-end">
          <p data-reveal className="t-lead max-w-[34ch] text-white/85 lg:col-span-4 lg:mb-28">
            {copy.closing.aside}
          </p>
          <div data-reveal style={d(1)} className="lg:col-span-7 lg:col-start-6 lg:justify-self-end">
            <div className="bg-background text-ink mx-auto flex w-[90%] translate-y-[60px] rotate-1 flex-col justify-center px-8 pt-8 pb-[92px] text-center sm:px-12 sm:pt-12 sm:pb-[108px] lg:aspect-[7/5] lg:w-[44vw] lg:rotate-2">
              <h2 className="t-3">{copy.closing.title}</h2>
              <p className="t-lead mt-6">
                {copy.closing.fill[0]}{" "}
                <span aria-hidden="true" className="border-ink/50 inline-block w-[3.5em] translate-y-[0.15em] border-b-2" />{" "}
                {copy.closing.fill[1]}
              </p>
              <p className="t-body mt-3 text-stone-700">{copy.closing.description}</p>
              <a
                href={copy.closing.primary.href}
                className="bg-ink hover:bg-ink-soft mt-8 flex h-14 w-full items-center justify-center text-base font-semibold text-white transition-colors duration-[180ms] active:scale-[0.98] motion-reduce:active:scale-100"
              >
                {copy.closing.primary.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HomeSection({
  id,
  copy,
  products,
  lang,
}: {
  id: HomeSectionKey;
  copy: HomeCopy;
  products: Products;
  lang: string;
}) {
  if (id === "automate") {
    const { automate } = copy;
    return (
      <section id="services" aria-labelledby="automate-heading" className="bg-background scroll-mt-16">
        <div className="page-x py-20 md:py-32">
          <h2 id="automate-heading" className="sr-only">
            {automate.heading}
          </h2>
          <p data-reveal className="t-3 text-ink max-w-[52ch]">
            {automate.statement}
          </p>
          <div className="axis mt-16 md:mt-24">
            <div className="grid gap-x-14 gap-y-10 md:grid-cols-2 lg:col-start-2">
              {automate.items.map((item, i) => (
                <div key={item.title} data-reveal style={d(i)} className="t-body text-ink max-w-[40ch] space-y-2">
                  <p>
                    <strong className="font-semibold">{item.title}</strong> {item.does}
                  </p>
                  <p className="text-stone-600">
                    {automate.staysLabel} {item.stays}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (id === "process") {
    // A full page of the one orange, ink type on it (4.68:1). The four stages step
    // across the grid; each line opens with its order word, so nothing is numbered.
    const steps = copy.process.steps;
    const indent = ["lg:ml-0", "lg:ml-[16.66%]", "lg:ml-[33.33%]", "lg:ml-[50%]"];
    const indentPhone = ["ml-0", "ml-[6vw]", "ml-[12vw]", "ml-[18vw]"];
    return (
      <section id="process" aria-label={copy.process.heading} className="bg-brand text-ink scroll-mt-16">
        <ol className="page-x space-y-10 py-20 md:space-y-14 md:py-32">
          {steps.map((step, i) => {
            const Heading = i === 0 ? "h2" : "h3";
            return (
              <li key={step.title} data-reveal style={d(i)} className={`${indentPhone[i]} ${indent[i]}`}>
                <Heading className="t-2 whitespace-nowrap max-sm:whitespace-normal">{step.title}</Heading>
                <p className="t-body mt-3 max-w-[38ch]">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </section>
    );
  }

  if (id === "products") {
    const { products: p } = copy;
    // Each product's own 16:10 store image filling its tile, in the showcase
    // order (src/data/product-pictures.ts); the shared product list is unchanged.
    const ordered = inShowcaseOrder(products);
    return (
      <section className="bg-background">
        <div className="page-x axis gap-y-6 pt-20 md:pt-32">
          <h2 data-reveal className="t-2 text-ink lg:col-start-2">
            {p.title}
          </h2>
          <p data-reveal style={d(1)} className="t-lead text-ink max-w-[52ch] lg:col-start-2">
            {p.caption}
          </p>
        </div>
        <ul className="page-x mt-12 grid gap-x-8 gap-y-14 md:mt-16 md:grid-cols-2">
          {ordered.map((product, i) => {
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
                        className="object-cover transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.02] motion-reduce:transition-none"
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
          <LocaleLink href="/overview" className="text-link text-ink text-base font-medium">
            {p.overviewLink}
          </LocaleLink>
        </div>
      </section>
    );
  }

  if (id === "explore") {
    const { explore } = copy;
    return (
      <section className="bg-surface-muted">
        <div className="page-x axis gap-y-4 py-16 md:py-20">
          <h2 data-reveal className="t-3 text-ink">
            {explore.title}
          </h2>
          <p data-reveal style={d(1)} className="t-lead text-ink max-w-[60ch]">
            {explore.lead}{" "}
            {explore.links.map((link, i) => (
              <span key={link.href}>
                <LocaleLink href={link.href} title={link.description} className="text-link lowercase">
                  {link.title}
                </LocaleLink>
                {i < explore.links.length - 2 ? ", " : i === explore.links.length - 2 ? " and " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>
    );
  }

  // FAQ (tasteskill blueprint "Accordion of filled tiles"): each question a filled
  // tile, one open at a time in the accent colour. Native <details>, so every
  // answer is in the HTML for crawlers and works without script.
  return (
    <section className="bg-background">
      <div className="page-x grid gap-10 py-20 md:py-32 lg:grid-cols-12 lg:gap-8">
        <h2 data-reveal className="t-2 text-ink lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          {copy.faq.title}
        </h2>
        <div data-reveal style={d(1)} className="space-y-1.5 lg:col-span-8 lg:space-y-2">
          {copy.faq.items.map((item, i) => (
            <details
              key={item.question}
              name="home-faq"
              open={i === 0}
              className="faq-item bg-surface-muted open:bg-brand not-open:hover:bg-[#e7e7e4] text-ink group transition-colors duration-[240ms]"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 text-[18px] leading-snug font-medium select-none md:min-h-18 md:px-6 md:text-[20px] [&::-webkit-details-marker]:hidden">
                {item.question}
                <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                  <span className="bg-ink absolute top-1/2 left-0 h-[3px] w-4 -translate-y-1/2" />
                  <span className="bg-ink absolute top-0 left-1/2 h-4 w-[3px] -translate-x-1/2 transition-transform duration-[240ms] ease-[var(--ease-out)] group-open:rotate-90 motion-reduce:transition-none" />
                </span>
              </summary>
              <p className="faq-answer t-body max-w-[52ch] px-5 pb-6 md:px-6">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
