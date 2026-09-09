import type { Metadata } from "next";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import { getPageCopy } from "@/copy";
import { LocaleLink } from "@/i18n/locale-link";
import { resolveLang } from "@/i18n/params";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";

export async function generateMetadata({ params }: PageProps<"/[lang]/faq">): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getPageCopy(lang).faq;
  return createMetadata({ title: meta.title, description: meta.description, path: "/faq", lang });
}

export default async function FaqPage({ params }: PageProps<"/[lang]/faq">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).faq;

  return (
    <section className="bg-white py-20">
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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <SectionHeading
            as="h1"
            align="left"
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">{copy.shortAnswer.title}</h2>
            <p className="mt-2 leading-7 text-slate-700">{copy.shortAnswer.body}</p>
          </div>
          <nav aria-label={copy.related.ariaLabel} className="mt-8">
            <h2 className="text-lg font-semibold text-slate-950">{copy.related.title}</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {copy.related.links.map((link) => (
                <li key={link.href}>
                  <LocaleLink href={link.href} className="font-medium text-eyebrow hover:underline">
                    {link.label}
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <FaqList items={copy.items} />
      </div>
    </section>
  );
}
