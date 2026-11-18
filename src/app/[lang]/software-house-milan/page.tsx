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

const path = "/software-house-milan";

export async function generateMetadata({ params }: PageProps<"/[lang]/software-house-milan">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).milan;
  return createMetadata({ title: meta.title, description: meta.description, path, lang });
}

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
const d = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * The Milan page (the home's "printed annual" system, as on the quote page):
 * the title on the column line with the standfirst beside it, as on the home
 * and About, and under the title a Milan street with the first call over it;
 * what the studio builds; the honest difference from a software house beside
 * Corso Sempione; how it starts (the free video call) on the orange field; the
 * products as proof; the questions; the proposal card.
 */
export default async function SoftwareHouseMilanPage({ params }: PageProps<"/[lang]/software-house-milan">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).milan;
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
                name: "milanTram",
                alt: copy.photos.hero,
                sizes: "(min-width: 1024px) 55vw, 100vw",
                position: "50% 60%",
                priority: true,
                ratio: "aspect-[16/10]",
                side: "left",
              }}
            >
              <RowsCard {...copy.call} />
            </OnPhoto>
          </div>
        </div>
      </section>

      {/* What the studio builds: the heading held on the left, the four jobs as run-ins */}
      <section aria-labelledby="build-heading" className="bg-surface-muted">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start lg:pr-12">
            <h2 id="build-heading" data-reveal className="t-3 text-ink">
              {copy.build.heading}
            </h2>
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[40ch]">
              {copy.build.lead}
            </p>
          </div>
          <div className="max-w-[40rem] space-y-10">
            {copy.build.items.map((item, i) => (
              <div key={item.lead} data-reveal style={d(i)} className="space-y-2">
                <p className="t-lead text-ink">
                  <strong className="font-semibold">{item.lead}</strong> {item.body}
                </p>
                {item.link ? (
                  <LocaleLink href={item.link.href} className="text-link text-ink text-base font-medium">
                    {item.link.label}
                  </LocaleLink>
                ) : null}
              </div>
            ))}
            <p data-reveal style={d(4)} className="t-3 t-3-compact text-ink">
              {copy.build.more}
            </p>
          </div>
        </div>
      </section>

      {/* The difference from a software house, beside Corso Sempione */}
      <section aria-labelledby="difference-heading" className="bg-background">
        <div className="page-x grid gap-12 py-20 md:py-32 lg:grid-cols-[minmax(0,1fr)_var(--axis)] lg:gap-0">
          <div className="max-w-[40rem] space-y-10 lg:pr-16">
            <h2 id="difference-heading" data-reveal className="t-2 text-ink">
              {copy.difference.heading}
            </h2>
            {copy.difference.items.map((item, i) => (
              <p key={item.lead} data-reveal style={d(i)} className="t-lead text-ink">
                <strong className="font-semibold">{item.lead}</strong> {item.body}
              </p>
            ))}
            <p data-reveal style={d(4)} className="t-3 t-3-compact text-ink">
              {copy.difference.note}
            </p>
          </div>
          <div data-reveal style={d(1)} className="bg-surface-muted aspect-[4/5] lg:sticky lg:top-24 lg:self-start">
            <Photo
              name="milanStreet"
              alt={copy.photos.street}
              sizes="(min-width: 1024px) 40vw, 100vw"
              position="50% 40%"
            />
          </div>
        </div>
      </section>

      {/* How it starts: the free video call set large on the orange field, the tram beside it */}
      <section aria-labelledby="visit-heading" className="bg-brand text-ink">
        <div className="page-x axis gap-y-12 py-20 md:py-32">
          <div data-reveal className="aspect-[3/4] max-w-[30rem] bg-ink/10 lg:mr-14">
            <Photo
              name="milanUmbrella"
              alt={copy.photos.tram}
              sizes="(min-width: 1024px) 35vw, 100vw"
              position="60% 50%"
            />
          </div>
          <div className="space-y-10 lg:self-center">
            <h2 id="visit-heading" data-reveal className="t-3">
              {copy.visit.heading}
            </h2>
            <p data-reveal style={d(1)} className="t-2">
              {copy.visit.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <div className="max-w-[40rem] space-y-6">
              {copy.visit.items.map((item, i) => (
                <p key={item.lead} data-reveal style={d(i + 2)} className="t-lead">
                  <strong className="font-semibold">{item.lead}</strong> {item.body}
                </p>
              ))}
            </div>
            <p data-reveal style={d(4)}>
              <LocaleLink href={copy.visit.contact.href} className="text-link text-base font-semibold">
                {copy.visit.contact.label}
              </LocaleLink>
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
            <FaqAccordion items={copy.faq.items} name="milan-faq" />
          </div>
        </div>
      </section>

      <PhotoCredits
        names={["milanTram", "milanStreet", "milanUmbrella"]}
        label={copy.photos.creditLabel}
        source={copy.photos.creditSource}
      />

      <ProposalClose closing={closing} actionHref={localizedHref(lang, "/#brief")} />
    </>
  );
}
