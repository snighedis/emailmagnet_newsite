import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { JsonLd } from "@/components/marketing/json-ld";
import { HomeHero } from "@/components/marketing/home-hero";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { getCopy, getPageCopy } from "@/copy";
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
      {/* The film's poster is the masthead and the LCP element: one cut per width. */}
      <link rel="preload" as="image" href={copy.heroVideo.poster} media="(min-width: 48rem)" fetchPriority="high" />
      <link rel="preload" as="image" href={copy.heroVideo.phone.poster} media="(max-width: 47.99rem)" fetchPriority="high" />
      <JsonLd data={buildItemListSchema(copy.itemListName, products)} />
      <HomeReveal />

      <HomeHero copy={copy} lang={lang} />

      {order.map((key) => (
        <HomeSection key={key} id={key} copy={copy} products={products} lang={lang} />
      ))}

      <ProposalClose closing={copy.closing} />
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
    // On a tablet each stage is 60% wide and the stair runs margin to margin, so
    // the last stage closes the right edge instead of leaving half the field empty.
    const indentTablet = ["md:ml-0", "md:ml-[13.33%]", "md:ml-[26.66%]", "md:ml-[40%]"];
    return (
      <section id="process" aria-label={copy.process.heading} className="bg-brand text-ink scroll-mt-16">
        <ol className="page-x space-y-10 py-20 md:space-y-14 md:py-32">
          {steps.map((step, i) => {
            const Heading = i === 0 ? "h2" : "h3";
            return (
              <li
                key={step.title}
                data-reveal
                style={d(i)}
                className={`${indentPhone[i]} ${indentTablet[i]} ${indent[i]} md:w-[60%] lg:w-auto`}
              >
                <Heading className="t-2 whitespace-nowrap max-sm:whitespace-normal">{step.title}</Heading>
                <p className="t-body mt-3 max-w-[38ch] md:max-w-none lg:max-w-[38ch]">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </section>
    );
  }

  if (id === "products") {
    const { products: p } = copy;
    return (
      <ProductShowcase
        products={products}
        lang={lang}
        title={p.title}
        caption={p.caption}
        overviewLink={p.overviewLink}
      />
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
