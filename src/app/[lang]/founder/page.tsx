import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { Button } from "@/components/ui/button";
import { getCopy, getPageCopy } from "@/copy";
import { founderConfig, siteConfig } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFounderSchema, buildPersonSchema } from "@/lib/schema";

export async function generateMetadata({ params }: PageProps<"/[lang]/founder">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).founder;
  return createMetadata({ title: meta.title, description: meta.description, path: founderConfig.href, lang });
}

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
const d = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * Founder (docs/adr/0002 as amended; the homepage's "printed annual" system).
 * There is no portrait yet, so the name is the headline (tasteskill shape "The
 * name"): set large on the column line, with the role, what he does and one
 * action beside it. Then the short answer on the tone step, how he works as
 * reading text, the shared products grid and the proposal card.
 */
export default async function FounderPage({ params }: PageProps<"/[lang]/founder">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).founder;
  const { closing } = getPageCopy(lang).home;
  const { products } = getCopy(lang).site;
  const shortAnswer = copy.shortAnswer.body
    .replace("{location}", copy.location)
    .replace("{name}", founderConfig.name)
    .replace("{role}", copy.role);
  const nameLines = founderConfig.name.split(" ");

  return (
    <>
      <JsonLd data={buildFounderSchema(lang, copy.description)} />
      <JsonLd data={buildPersonSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema(
          [
            { name: siteConfig.name, href: "/" },
            { name: copy.breadcrumb, href: founderConfig.href },
          ],
          lang,
        )}
      />
      <HomeReveal />

      <section className="bg-background">
        <div className="page-x axis gap-y-8 pt-12 pb-20 md:pt-20 md:pb-28">
          <h1 className="t-display lines text-ink lg:col-start-2 lg:row-start-1">
            {nameLines.map((line, i) => (
              <span key={line} className="line">
                <span data-line style={{ "--i": i } as CSSProperties}>
                  {line}
                  {i < nameLines.length - 1 ? " " : null}
                </span>
              </span>
            ))}
          </h1>
          <div data-reveal style={d(3)} className="space-y-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:pr-12">
            <div className="space-y-2">
              <p className="text-ink text-base font-semibold">{copy.role}</p>
              <p className="t-lead text-ink max-w-[34ch]">{copy.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button asChild size="xl">
                <LocaleLink href={copy.primaryCta.href}>{copy.primaryCta.label}</LocaleLink>
              </Button>
              <LocaleLink href="/about" className="text-link text-ink text-base font-medium">
                {copy.studioLink}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>

      {/* The short answer, set large on the one tone step */}
      <section className="bg-surface-muted">
        <div className="page-x axis gap-y-6 py-20 md:py-28">
          <h2 data-reveal className="t-3 text-ink">
            {copy.shortAnswer.title}
          </h2>
          <p data-reveal style={d(1)} className="t-3 t-3-compact text-ink max-w-[54ch]">
            {shortAnswer}
          </p>
        </div>
      </section>

      {/* How he works: reading text in two columns on the column line, bold run-ins */}
      <section className="bg-background">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <h2 data-reveal className="t-3 text-ink">
            {copy.proofPoints.heading}
          </h2>
          <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
            {copy.proofPoints.items.map((item, i) => (
              <p key={item.title} data-reveal style={d(i)} className="t-body text-ink max-w-[40ch]">
                <strong className="font-semibold">{item.title}</strong> {item.description}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Experience: a real list, years on the left in tabular figures, newest first */}
      <section className="bg-surface-muted">
        <div className="page-x axis gap-y-8 py-20 md:py-28">
          <div className="space-y-4 lg:pr-12">
            <h2 data-reveal className="t-3 text-ink">
              {copy.experience.heading}
            </h2>
            <p data-reveal style={d(1)} className="t-body text-ink max-w-[36ch]">
              {copy.experience.intro}
            </p>
          </div>
          <ol className="space-y-7">
            {founderConfig.experience.map((job, i) => (
              <li
                key={`${job.company}-${job.from}`}
                data-reveal
                style={d(i)}
                className="grid gap-x-8 gap-y-1 sm:grid-cols-[9rem_minmax(0,1fr)]"
              >
                <p className="text-base text-stone-600 tabular-nums">
                  {job.from}–{job.to ?? copy.experience.present}
                </p>
                <div>
                  <p className="text-ink font-heading text-[22px] leading-tight">{job.role}</p>
                  <p className="text-ink mt-1 text-base">
                    {job.company}, {job.place[lang === "it" ? "it" : "en"]}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProductShowcase
        products={products}
        lang={lang}
        title={copy.products.title}
        caption={copy.products.description}
        overviewLink={copy.products.overviewLink}
      />

      <ProposalClose closing={closing} actionHref={lang === "it" ? "/it#brief" : "/#brief"} />
    </>
  );
}
