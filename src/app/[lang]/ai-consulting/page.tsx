import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { OnPhoto } from "@/components/marketing/automation-fragment";
import { FaqAccordion } from "@/components/marketing/faq-accordion";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { Photo, PhotoCredits } from "@/components/marketing/photo";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { RowsCard } from "@/components/marketing/rows-card";
import { Button } from "@/components/ui/button";
import { getCopy, getPageCopy } from "@/copy";
import { localizedHref } from "@/i18n/href";
import { LocaleLink } from "@/i18n/locale-link";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema, buildServicePageSchema } from "@/lib/schema";

const path = "/ai-consulting";

export async function generateMetadata({ params }: PageProps<"/[lang]/ai-consulting">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).ai;
  return createMetadata({ title: meta.title, description: meta.description, path, lang });
}

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
const d = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * AI consulting (the home's "printed annual" system, as on the Milan and quote
 * pages): the title on the column line with the standfirst beside it and the
 * first call's count over an atelier; the definition, written to be quoted,
 * with the loop of the hours; AI prepares and you decide, beside the paperwork;
 * what changes compared with a consultant, by negation; after delivery, on the
 * orange field; where the data goes; three things to insist
 * on; no hours, no project, on the ink field; the products as proof; the
 * price ranges as a table; the questions; the proposal card.
 */
export default async function AiConsultingPage({ params }: PageProps<"/[lang]/ai-consulting">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).ai;
  const { closing, products: productsCopy } = getPageCopy(lang).home;
  const { products } = getCopy(lang).site;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema(
          [
            { name: "Dentoku Dev", href: "/" },
            { name: copy.breadcrumb, href: path },
          ],
          lang,
        )}
      />
      <JsonLd
        data={buildServicePageSchema({ name: copy.breadcrumb, description: copy.meta.description, path }, lang)}
      />
      <JsonLd data={buildFaqSchema(copy.faq.items, lang)} />
      <HomeReveal />

      <section className="bg-background">
        <div className="page-x axis gap-y-8 pt-12 pb-16 md:pt-20 md:pb-24">
          <h1 className="t-display lines text-ink lg:col-start-2 lg:row-start-1">
            {copy.title.map((line, i) => (
              <span key={line} className="line">
                <span data-line style={{ "--i": i } as CSSProperties}>
                  {line}
                  {i < copy.title.length - 1 ? " " : null}
                </span>
              </span>
            ))}
          </h1>
          <div data-reveal style={d(3)} className="space-y-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:pr-12">
            <p className="t-lead text-ink max-w-[38ch]">{copy.standfirst}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button asChild size="xl">
                <a href={localizedHref(lang, copy.primaryCta.href)}>{copy.primaryCta.label}</a>
              </Button>
              <LocaleLink href={copy.secondaryCta.href} className="text-link text-ink text-base font-medium">
                {copy.secondaryCta.label}
              </LocaleLink>
            </div>
          </div>
          <div className="mt-4 lg:col-start-2 lg:row-start-2 lg:mt-8">
            <OnPhoto
              photo={{
                name: "aiAtelier",
                alt: copy.photos.hero,
                sizes: "(min-width: 1024px) 55vw, 100vw",
                position: "60% 45%",
                priority: true,
                ratio: "aspect-[16/10]",
                side: "left",
              }}
            >
              <RowsCard {...copy.card} />
            </OnPhoto>
          </div>
        </div>
      </section>

      {/* The definition, written to be quoted, with the four facts beside it */}
      <section aria-labelledby="definition-heading" className="bg-surface-muted">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <h2 id="definition-heading" data-reveal className="t-2 text-ink lg:self-start lg:pr-12">
            {copy.definition.heading}
          </h2>
          <div className="space-y-12">
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[56ch] lg:text-[22px] lg:leading-[1.5]">
              {copy.definition.body}
            </p>
            <dl data-reveal style={d(2)} className="grid max-w-[52rem] gap-x-12 gap-y-8 sm:grid-cols-2">
              {copy.definition.facts.map((fact) => (
                <div key={fact.term} className="space-y-1">
                  <dt className="t-lead text-ink font-semibold">{fact.term}</dt>
                  <dd className="t-body text-ink">{fact.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* What AI does and what stays with a person, beside the paperwork */}
      <section aria-labelledby="split-heading" className="bg-background">
        <div className="page-x axis gap-y-12 py-20 md:py-32">
          <div data-reveal className="bg-surface-muted aspect-[4/3] lg:sticky lg:top-24 lg:mr-16 lg:self-start">
            <Photo
              name="aiDocuments"
              alt={copy.photos.documents}
              sizes="(min-width: 1024px) 38vw, 100vw"
              position="55% 50%"
            />
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 id="split-heading" data-reveal className="t-2 text-ink">
                {copy.split.heading}
              </h2>
              <p data-reveal style={d(1)} className="t-lead text-ink max-w-[46ch]">
                {copy.split.lead}
              </p>
            </div>
            <div className="grid gap-12 sm:grid-cols-2 sm:gap-10">
              {[copy.split.does, copy.split.stays].map((list, i) => (
                <div key={list.title} data-reveal style={d(i + 2)} className="space-y-5">
                  <h3 className="t-3 text-ink">{list.title}</h3>
                  <ul className="space-y-4">
                    {list.items.map((item) => (
                      <li key={item} className="t-lead text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The difference, defined by what the studio is not: four pairs set large */}
      <section aria-labelledby="contrast-heading" className="bg-surface-muted">
        <div className="page-x space-y-12 py-20 md:space-y-16 md:py-32">
          <div className="space-y-4">
            <h2 id="contrast-heading" data-reveal className="t-2 text-ink max-w-[22ch]">
              {copy.contrast.heading}
            </h2>
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[52ch]">
              {copy.contrast.lead}
            </p>
          </div>
          <ul className="grid gap-x-16 gap-y-10 md:grid-cols-2">
            {copy.contrast.items.map((item, i) => (
              <li key={item.not} data-reveal style={d(i % 2)} className="space-y-1">
                <p className="t-lead text-muted-foreground">{item.not}</p>
                <p className="t-3 text-ink max-w-[24ch]">{item.is}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* After delivery: continuity, beside the shopkeeper on the phone */}
      <section aria-labelledby="after-heading" className="bg-brand text-ink">
        <div className="page-x axis gap-y-12 py-20 md:py-32">
          <div data-reveal className="bg-ink/10 aspect-[4/5] max-w-[30rem] lg:mr-14">
            <Photo
              name="aiShop"
              alt={copy.photos.shop}
              sizes="(min-width: 1024px) 35vw, 100vw"
              position="72% 40%"
            />
          </div>
          <div className="space-y-10 lg:self-center">
            <h2 id="after-heading" data-reveal className="t-2">
              {copy.after.heading}
            </h2>
            <div className="max-w-[40rem] space-y-6">
              {copy.after.items.map((item, i) => (
                <p key={item.lead} data-reveal style={d(i + 1)} className="t-lead">
                  <strong className="font-semibold">{item.lead}</strong> {item.body}
                </p>
              ))}
            </div>
            <p data-reveal style={d(4)}>
              <LocaleLink href={copy.after.link.href} className="text-link text-base font-semibold">
                {copy.after.link.label}
              </LocaleLink>
            </p>
          </div>
        </div>
      </section>

      {/* Where the data goes: four statements, two by two */}
      <section aria-labelledby="data-heading" className="bg-background">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <h2 id="data-heading" data-reveal className="t-2 text-ink lg:self-start lg:pr-12">
            {copy.data.heading}
          </h2>
          <div className="grid max-w-[52rem] gap-x-12 gap-y-10 sm:grid-cols-2">
            {copy.data.items.map((item, i) => (
              <div key={item.lead} data-reveal style={d(i)} className="space-y-2">
                <h3 className="t-lead text-ink font-semibold">{item.lead}</h3>
                <p className="t-body text-ink">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three things to insist on from any AI supplier, in three columns */}
      <section aria-labelledby="demands-heading" className="bg-surface-muted">
        <div className="page-x space-y-12 py-20 md:space-y-16 md:py-32">
          <div className="space-y-4">
            <h2 id="demands-heading" data-reveal className="t-2 text-ink max-w-[22ch]">
              {copy.demands.heading}
            </h2>
            <p data-reveal style={d(1)} className="t-lead text-ink">
              {copy.demands.lead}
            </p>
          </div>
          <ul className="grid gap-x-12 gap-y-12 md:grid-cols-3">
            {copy.demands.items.map((item, i) => (
              <li key={item.lead} data-reveal style={d(i)} className="space-y-3">
                <h3 className="t-3 text-ink">{item.lead}</h3>
                <p className="t-body text-ink max-w-[36ch]">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* No hours, no project: on the ink field */}
      <section aria-labelledby="no-heading" className="bg-ink text-white">
        <div className="page-x axis gap-y-8 py-20 md:py-32">
          <h2 id="no-heading" data-reveal className="t-2 lg:pr-12">
            {copy.no.heading}
          </h2>
          <div className="space-y-5 lg:self-end">
            <p data-reveal style={d(1)} className="t-3 lg:max-w-[34ch]">
              {copy.no.body}
            </p>
            <p data-reveal style={d(2)} className="t-lead">
              {copy.no.note}
            </p>
          </div>
        </div>
      </section>

      <div className="bg-background">
        <ProductShowcase
          products={products}
          lang={lang}
          title={copy.products.title}
          caption={copy.products.caption}
          overviewLink={productsCopy.overviewLink}
        />
      </div>

      {/* The price ranges as a table, next to the questions: filled tiles on the muted field */}
      <section aria-labelledby="pricing-heading" className="bg-surface-muted">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <div className="space-y-4 lg:self-start lg:pr-12">
            <h2 id="pricing-heading" data-reveal className="t-2 text-ink">
              {copy.pricing.heading}
            </h2>
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[36ch]">
              {copy.pricing.lead}
            </p>
          </div>
          <div data-reveal style={d(1)} className="max-w-[52rem]">
            <table className="text-ink w-full border-separate border-spacing-y-2 text-left max-sm:block">
              <caption className="sr-only">{copy.pricing.heading}</caption>
              <thead className="sr-only">
                <tr>
                  {copy.pricing.columns.map((column) => (
                    <th key={column} scope="col">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="max-sm:grid max-sm:gap-2">
                {copy.pricing.rows.map(([service, price]) => (
                  <tr key={service} className="bg-background max-sm:flex max-sm:flex-col max-sm:py-4">
                    <th scope="row" className="t-lead px-5 font-normal sm:py-6 md:px-7">
                      {service}
                    </th>
                    <td className="t-3 px-5 tabular-nums sm:py-6 sm:text-right sm:whitespace-nowrap md:px-7">
                      {price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The questions: the home's accordion of filled tiles, native <details> */}
      <section aria-labelledby="faq-heading" className="bg-background">
        <div className="page-x grid gap-10 py-20 md:py-32 lg:grid-cols-12 lg:gap-8">
          <h2
            id="faq-heading"
            data-reveal
            className="t-3 text-ink lg:sticky lg:top-24 lg:col-span-4 lg:self-start lg:pr-8"
          >
            {copy.faq.title}
          </h2>
          <div data-reveal style={d(1)} className="space-y-1.5 lg:col-span-8 lg:space-y-2">
            <FaqAccordion items={copy.faq.items} name="ai-faq" />
          </div>
        </div>
      </section>

      <PhotoCredits
        names={["aiAtelier", "aiDocuments", "aiShop"]}
        label={copy.photos.creditLabel}
        source={copy.photos.creditSource}
      />

      <ProposalClose closing={closing} actionHref={localizedHref(lang, "/#brief")} />
    </>
  );
}
