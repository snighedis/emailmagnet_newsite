import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { Button } from "@/components/ui/button";
import { getCopy, getPageCopy } from "@/copy";
import { emailMagnetConfig } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";

export async function generateMetadata({ params }: PageProps<"/[lang]/faq">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).faq;
  return createMetadata({ title: meta.title, description: meta.description, path: "/faq", lang });
}

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
const d = (n: number) => ({ "--d": n }) as CSSProperties;

/**
 * FAQ (docs/adr/0002 as amended; the homepage's "printed annual" system): the
 * title on the column line with the standfirst and the store action beside it,
 * the short answer set large, the questions as the homepage's accordion of
 * filled tiles with the related pages beside them, the products, the proposal.
 */
export default async function FaqPage({ params }: PageProps<"/[lang]/faq">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).faq;
  const { about, home } = getPageCopy(lang);
  const { products } = getCopy(lang).site;

  return (
    <>
      <JsonLd data={buildFaqSchema(copy.items, lang)} />
      <JsonLd
        data={buildBreadcrumbSchema(
          [
            { name: "Dentoku Dev", href: "/" },
            { name: copy.breadcrumb, href: "/faq" },
          ],
          lang,
        )}
      />
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
            <p className="t-lead text-ink max-w-[34ch]">{copy.description}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button asChild size="xl">
                <a href={emailMagnetConfig.secondaryCta.href} target="_blank" rel="noopener noreferrer">
                  {copy.storeCta}
                </a>
              </Button>
              <LocaleLink href={emailMagnetConfig.href} className="text-link text-ink text-base font-medium">
                {copy.related.links[0].label}
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
          <div className="space-y-6">
            <p data-reveal style={d(1)} className="t-3 t-3-compact text-ink max-w-[54ch]">
              {copy.shortAnswer.body}
            </p>
            <p data-reveal style={d(2)} className="t-lead text-ink max-w-[52ch]">
              {copy.shortAnswer.plans}
            </p>
          </div>
        </div>
      </section>

      {/* The questions: the homepage's accordion of filled tiles, one open at a
          time in the accent. Native <details>, so every answer is in the HTML. */}
      <section className="bg-background">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <div className="space-y-8 lg:sticky lg:top-24 lg:self-start lg:pr-12">
            <h2 data-reveal className="t-2 text-ink">
              {copy.questionsTitle}
            </h2>
            <nav data-reveal style={d(1)} aria-label={copy.related.ariaLabel} className="space-y-3">
              <h3 className="t-lead text-ink font-semibold">{copy.related.title}</h3>
              <ul className="t-body text-ink space-y-2">
                {copy.related.links.map((link) => (
                  <li key={link.href}>
                    <LocaleLink href={link.href} className="text-link">
                      {link.label}
                    </LocaleLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div data-reveal style={d(2)} className="space-y-1.5 lg:space-y-2">
            {copy.items.map((item, i) => (
              <details
                key={item.question}
                name="faq"
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
                <p className="faq-answer t-body max-w-[60ch] px-5 pb-6 md:px-6">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-background">
        <ProductShowcase
          products={products}
          lang={lang}
          title={about.portfolio.title}
          caption={about.portfolio.description}
          overviewLink={about.portfolio.overviewLink}
        />
      </div>

      <ProposalClose closing={home.closing} actionHref={lang === "it" ? "/it#brief" : "/#brief"} />
    </>
  );
}
