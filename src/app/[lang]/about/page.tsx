import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            as="h1"
            eyebrow={copy.eyebrow}
            title={copy.title}
            description={copy.description}
          />
          <div className="mt-10 rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">{copy.shortAnswer.title}</h2>
            <p className="mt-2 leading-8 text-slate-700">{copy.shortAnswer.body}</p>
            <p className="mt-4 leading-8 text-slate-700">
              {copy.shortAnswer.founder.before}{" "}
              <LocaleLink href={founderConfig.href} className="font-semibold text-eyebrow hover:underline">
                {copy.shortAnswer.founder.link}
              </LocaleLink>
              {copy.shortAnswer.founder.after}
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {copy.cards.map((card) => (
              <Card key={card.title} className="rounded-xl border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-slate-950">{card.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-slate-950">{copy.portfolio.title}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">{copy.portfolio.description}</p>
            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">{copy.portfolio.caption}</caption>
                <thead className="bg-slate-50 text-slate-950">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">{copy.portfolio.columns.product}</th>
                    <th scope="col" className="px-4 py-3 font-semibold">{copy.portfolio.columns.category}</th>
                    <th scope="col" className="px-4 py-3 font-semibold">{copy.portfolio.columns.solves}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {products.map((product) => (
                    <tr key={product.href}>
                      <th scope="row" className="px-4 py-4 font-semibold text-slate-950">
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
        </div>
      </section>
    </>
  );
}
