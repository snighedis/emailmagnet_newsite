import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { RelatedLinks, d } from "@/components/marketing/editorial";
import { getCopy, getPageCopy } from "@/copy";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { buildBreadcrumbSchema } from "@/lib/schema";

type LegalPageProps = {
  lang: Locale;
  /** English path of the page, e.g. "/terms". */
  path: string;
  title: string;
  children: React.ReactNode;
};

const labels: Record<
  Locale,
  { draft: string; readEnglish: string; others: string; othersAria: string; questions: string; pages: Record<string, string> }
> = {
  en: {
    draft: "",
    readEnglish: "",
    others: "Other legal pages",
    othersAria: "Legal pages",
    questions: "Questions about these terms or your data:",
    pages: { "/privacy": "Privacy Policy", "/terms": "Terms of Service", "/cookies": "Cookie Policy" },
  },
  it: {
    draft:
      "Traduzione in attesa di revisione legale. In caso di conflitto prevale la versione inglese.",
    readEnglish: "Leggi la versione inglese",
    others: "Le altre note legali",
    othersAria: "Note legali",
    questions: "Domande su queste condizioni o sui tuoi dati:",
    pages: { "/privacy": "Informativa sulla privacy", "/terms": "Termini di servizio", "/cookies": "Cookie Policy" },
  },
};

/**
 * Shared shell of the three legal pages, in the homepage's system: the title on
 * the column line with, on translations, the draft notice beside it; the text
 * on the line with the other legal pages and the contact to its left; the
 * products at the foot. The prose itself lives in src/copy/{en,it}/legal/*.tsx
 * and is restyled by .legal-prose (globals.css), so its words never change here.
 */
export function LegalPage({ lang, path, title, children }: LegalPageProps) {
  const label = labels[lang];
  const { products } = getCopy(lang).site;
  const { portfolio } = getPageCopy(lang).about;
  const others = Object.entries(label.pages)
    .filter(([href]) => href !== path)
    .map(([href, name]) => ({ href, label: name }));

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema(
          [
            { name: "Dentoku Dev", href: "/" },
            { name: title, href: path },
          ],
          lang,
        )}
      />
      <HomeReveal />

      <section className="bg-background">
        <div className="page-x axis gap-y-8 pt-12 pb-16 md:pt-20 md:pb-24">
          <h1 className="t-display text-ink lg:col-start-2 lg:row-start-1">{title}</h1>
          {lang !== "en" ? (
            <p
              role="note"
              data-reveal
              style={d(1)}
              className="bg-brand text-ink t-body p-5 lg:col-start-1 lg:row-start-1 lg:mr-12 lg:self-end"
            >
              {label.draft}{" "}
              <a href={path} hrefLang="en" lang="en" className="text-link font-semibold">
                {label.readEnglish}
              </a>
              .
            </p>
          ) : null}
        </div>
      </section>

      <article className="bg-background">
        <div className="page-x axis gap-y-12 pb-20 md:pb-32">
          <aside className="t-body text-ink space-y-8 lg:sticky lg:top-24 lg:self-start lg:pr-12">
            <RelatedLinks title={label.others} ariaLabel={label.othersAria} links={others} />
            <p className="max-w-[34ch]">
              {label.questions}{" "}
              <a href={`mailto:${siteConfig.supportEmail}`} className="text-link font-medium">
                {siteConfig.supportEmail}
              </a>
            </p>
          </aside>
          <div className="legal-prose max-w-[48rem] min-w-0">{children}</div>
        </div>
      </article>

      <ProductShowcase
        products={products}
        lang={lang}
        title={portfolio.title}
        caption={portfolio.description}
        overviewLink={portfolio.overviewLink}
      />
    </>
  );
}
