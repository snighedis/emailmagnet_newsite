import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { Button } from "@/components/ui/button";
import { getCopy, getPageCopy } from "@/copy";
import { founderConfig } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";

export async function generateMetadata({ params }: PageProps<"/[lang]/about">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).about;
  return createMetadata({ title: meta.title, description: meta.description, path: "/about", lang });
}

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
const d = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * About (docs/adr/0002 as amended; the homepage's "printed annual" system):
 * the title on the column line with the standfirst beside it, the short answer
 * set large, the principles as one reading column with run-ins, the products
 * grid shared with the homepage, and the proposal card as the close.
 */
export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).about;
  const { closing } = getPageCopy(lang).home;
  const { products } = getCopy(lang).site;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema(
          [
            { name: "Dentoku Dev", href: "/" },
            { name: copy.breadcrumb, href: "/about" },
          ],
          lang,
        )}
      />
      <JsonLd data={buildItemListSchema(copy.itemListName, products)} />
      <HomeReveal />

      <section className="bg-background">
        <div className="page-x axis gap-y-8 pt-12 pb-20 md:pt-20 md:pb-28">
          <h1 className="t-display lines text-ink lg:col-start-2 lg:row-start-1">
            {copy.title.map((line, i) => (
              <span key={line} className="line">
                <span data-line style={{ "--i": i } as CSSProperties}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <div data-reveal style={d(3)} className="space-y-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:pr-12">
            <p className="t-lead text-ink max-w-[34ch]">{copy.standfirst}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button asChild size="xl">
                <LocaleLink href={copy.primaryCta.href}>{copy.primaryCta.label}</LocaleLink>
              </Button>
              <LocaleLink href={founderConfig.href} className="text-link text-ink text-base font-medium">
                {copy.founderLink}
              </LocaleLink>
            </div>
          </div>
        </div>
      </section>

      {/* The short answer, set large on the one tone step */}
      <section className="bg-surface-muted">
        <div className="page-x axis gap-y-6 py-20 md:py-28">
          <h2 data-reveal className="t-3 text-ink">
            {copy.statement.heading}
          </h2>
          <div className="space-y-6">
            <p data-reveal style={d(1)} className="t-3 text-ink max-w-[44ch]">
              {copy.statement.body}
            </p>
            <p data-reveal style={d(2)} className="t-lead text-ink">
              {copy.statement.founder.before}{" "}
              <LocaleLink href={founderConfig.href} className="text-link font-medium">
                {copy.statement.founder.link}
              </LocaleLink>
              {copy.statement.founder.after}
            </p>
          </div>
        </div>
      </section>

      {/* Principles: one reading column on the column line, bold run-ins, no markers */}
      <section className="bg-background">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <h2 data-reveal className="t-3 text-ink lg:sticky lg:top-24 lg:self-start">
            {copy.principles.heading}
          </h2>
          <div className="max-w-[38rem] space-y-10">
            {copy.principles.items.map((item, i) => (
              <p key={item.lead} data-reveal style={d(i)} className="t-lead text-ink">
                <strong className="font-semibold">{item.lead}</strong> {item.body}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-background">
        <ProductShowcase
          products={products}
          lang={lang}
          title={copy.portfolio.title}
          caption={copy.portfolio.description}
          overviewLink={copy.portfolio.overviewLink}
        />
      </div>

      <ProposalClose closing={closing} actionHref={lang === "it" ? "/it#brief" : "/#brief"} />
    </>
  );
}
