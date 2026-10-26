import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Brief } from "@/components/marketing/brief";
import { ContactMailtoForm } from "@/components/marketing/contact-mailto-form";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { Button } from "@/components/ui/button";
import { getCopy, getPageCopy } from "@/copy";
import { siteConfig } from "@/data/site";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildContactPointSchema } from "@/lib/schema";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).contact;
  return createMetadata({ title: meta.title, description: meta.description, path: "/contact", lang });
}

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
const d = (n: number) => ({ "--d": n }) as CSSProperties;

/** The real Chrome Web Store score, as on the homepage's brief. */
const STORE_RATING = 5.0;

/**
 * Contact (docs/adr/0002 as amended; redesign ticket 11, "two ways"): the title
 * on the column line with both ways named beside it, the homepage's brief on the
 * tone step, the free form with what happens after it, then the products for
 * support questions. No proposal card: the brief it points to is on this page.
 */
export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).contact;
  const { brief, proof } = getPageCopy(lang).home;
  const { products } = getCopy(lang).site;
  const rating = STORE_RATING.toLocaleString(lang === "it" ? "it-IT" : "en-US", { minimumFractionDigits: 1 });

  return (
    <>
      <JsonLd data={buildContactPointSchema(lang, copy.contactPointName)} />
      <JsonLd
        data={buildBreadcrumbSchema(
          [
            { name: "Dentoku Dev", href: "/" },
            { name: copy.breadcrumb, href: "/contact" },
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
            <p className="t-lead text-ink max-w-[34ch]">{copy.standfirst}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Button asChild size="xl">
                <a href="#hours">{copy.briefCta}</a>
              </Button>
              <a href="#write" className="text-link text-ink text-base font-medium">
                {copy.writeCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The first way: the homepage's brief, on the one tone step */}
      <section id="hours" className="bg-surface-muted scroll-mt-16">
        <div className="page-x axis gap-y-8 py-20 md:py-28">
          <div className="space-y-3 lg:col-start-2">
            <h2 data-reveal className="t-2 text-ink">
              {brief.title}
            </h2>
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[52ch]">
              {brief.lede}
            </p>
          </div>
          <div data-reveal style={d(2)} className="lg:col-start-2">
            <Brief copy={brief} lang={lang} layout="stack" />
          </div>
          <p
            data-reveal
            className="t-body text-ink max-w-[34ch] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-end lg:pr-12"
          >
            {proof.audience} {proof.rating.replace("{rating}", rating)}
          </p>
        </div>
      </section>

      {/* The second way: the free form, with what happens after it beside it */}
      <section id="write" className="bg-background scroll-mt-16">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <div className="space-y-8 lg:sticky lg:top-24 lg:self-start lg:pr-12">
            <div className="space-y-4">
              <h2 data-reveal className="t-2 text-ink">
                {copy.write.title}
              </h2>
              <p data-reveal style={d(1)} className="t-lead text-ink max-w-[40ch]">
                {copy.write.lead}
              </p>
              <p data-reveal style={d(2)} className="t-body text-ink">
                {copy.write.direct}{" "}
                <a href={`mailto:${siteConfig.supportEmail}`} className="text-link font-medium">
                  {siteConfig.supportEmail}
                </a>
              </p>
            </div>
            <div data-reveal style={d(3)} className="space-y-4">
              <h3 className="t-lead text-ink font-semibold">{copy.write.nextTitle}</h3>
              {copy.write.next.map((step) => (
                <p key={step.lead} className="t-body text-ink max-w-[40ch]">
                  <strong className="font-semibold">{step.lead}</strong> {step.body}
                </p>
              ))}
            </div>
          </div>
          <div data-reveal style={d(2)} className="max-w-[44rem]">
            <ContactMailtoForm supportEmail={siteConfig.supportEmail} className="bg-surface-muted p-6 md:p-10" />
          </div>
        </div>
      </section>

      <div className="bg-background">
        <ProductShowcase
          products={products}
          lang={lang}
          title={copy.products.title}
          caption={copy.products.caption}
          overviewLink={copy.products.overviewLink}
        />
      </div>
    </>
  );
}
