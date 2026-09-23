import { Eyebrow } from "@/components/marketing/eyebrow";
import { JsonLd } from "@/components/marketing/json-ld";
import type { Locale } from "@/i18n/config";
import { buildBreadcrumbSchema } from "@/lib/schema";

type LegalPageProps = {
  lang: Locale;
  /** English path of the page, e.g. "/terms". */
  path: string;
  title: string;
  children: React.ReactNode;
};

const labels: Record<Locale, { eyebrow: string; draft: string; readEnglish: string }> = {
  en: { eyebrow: "Legal", draft: "", readEnglish: "" },
  it: {
    eyebrow: "Note legali",
    draft:
      "Traduzione in attesa di revisione legale. In caso di conflitto prevale la versione inglese.",
    readEnglish: "Leggi la versione inglese",
  },
};

/**
 * Shared shell of the three legal pages: breadcrumb, article column, title
 * and, on translations, the draft notice. The prose itself lives in
 * src/copy/{en,it}/legal/*.tsx.
 */
export function LegalPage({ lang, path, title, children }: LegalPageProps) {
  const label = labels[lang];
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
      <article className="mx-auto max-w-3xl px-4 py-12 md:py-20">
        <Eyebrow>{label.eyebrow}</Eyebrow>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950">{title}</h1>
        {lang !== "en" ? (
          <p
            role="note"
            className="border-brand/30 bg-brand-soft text-ink mt-6 rounded-lg border px-4 py-3 text-sm leading-6"
          >
            {label.draft}{" "}
            <a href={path} hrefLang="en" lang="en" className="font-semibold underline underline-offset-2">
              {label.readEnglish}
            </a>
            .
          </p>
        ) : null}
        {children}
      </article>
    </>
  );
}
