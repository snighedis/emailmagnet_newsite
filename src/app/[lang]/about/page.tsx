import type { Metadata } from "next";
import { JsonLd } from "@/components/marketing/json-ld";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { Section } from "@/components/marketing/section";
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

export default async function AboutPage({ params }: PageProps<"/[lang]/about">) {
  const lang = await resolveLang(params);
  const copy = getPageCopy(lang).about;
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
      <Section variant="soft" containerClassName="max-w-5xl">
          <div className="max-w-3xl space-y-5">
            <Eyebrow index="01">{copy.eyebrow}</Eyebrow>
            <h1 className="type-h1 text-ink">{copy.title}</h1>
            <p className="type-lead">{copy.description}</p>
          </div>
          <div className="border-brand mt-10 border-l-2 bg-brand-soft/60 py-5 pr-5 pl-6">
            <h2 className="type-label text-ink">{copy.shortAnswer.title}</h2>
            <p className="mt-2 leading-8 text-stone-700">{copy.shortAnswer.body}</p>
            <p className="mt-4 leading-8 text-stone-700">
              {copy.shortAnswer.founder.before}{" "}
              <LocaleLink href={founderConfig.href} className="font-semibold text-eyebrow hover:underline">
                {copy.shortAnswer.founder.link}
              </LocaleLink>
              {copy.shortAnswer.founder.after}
            </p>
          </div>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 md:grid-cols-2">
            {copy.cards.map((card, index) => (
              <li key={card.title} className="bg-white p-6 md:p-8">
                <p className="font-mono text-xs text-stone-500">0{index + 1}</p>
                <h2 className="type-h3 text-ink mt-3">{card.title}</h2>
                <p className="mt-3 leading-7 text-stone-600">{card.body}</p>
              </li>
            ))}
          </ol>

          <section className="mt-20 border-t border-stone-200 pt-16">
            <h2 className="type-h2 text-ink">{copy.portfolio.title}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-stone-600">{copy.portfolio.description}</p>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-stone-200 bg-white">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">{copy.portfolio.caption}</caption>
                <thead className="bg-stone-50 text-stone-950">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">{copy.portfolio.columns.product}</th>
                    <th scope="col" className="px-4 py-3 font-semibold">{copy.portfolio.columns.category}</th>
                    <th scope="col" className="px-4 py-3 font-semibold">{copy.portfolio.columns.solves}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 text-stone-700">
                  {products.map((product) => (
                    <tr key={product.href}>
                      <th scope="row" className="px-4 py-4 font-semibold text-stone-950">
                        <LocaleLink href={product.href} className="hover:text-eyebrow">
                          {product.name}
                        </LocaleLink>
                      </th>
                      <td className="px-4 py-4">{product.category}</td>
                      <td className="px-4 py-4">{product.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
      </Section>
    </>
  );
}
