import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import { productPortfolio, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Dentoku Dev, the product studio behind EmailMagnet, ClickPilot AI, Volume Control PRO, and focused software for browser workflows.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />
      <JsonLd data={buildItemListSchema("Dentoku Dev product portfolio", productPortfolio)} />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            as="h1"
            eyebrow="About Dentoku Dev"
            title="Dentoku Dev builds focused Chrome extensions, Shopify apps, and productivity tools"
            description={siteConfig.description}
          />
          <div className="mt-10 rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">Short answer</h2>
            <p className="mt-2 leading-8 text-slate-700">
              Dentoku Dev is the product studio behind EmailMagnet, ClickPilot AI, Volume Control
              PRO, and Countdown321. The studio builds small, practical software products for
              browser, ecommerce, and business workflows.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              [
                "What Dentoku Dev is",
                "Dentoku Dev is a product studio based in Milan, Italy. It owns and maintains a portfolio of focused software products rather than a single broad SaaS platform.",
              ],
              [
                "What the studio builds",
                "The portfolio includes Chrome extensions for browser workflows, Shopify apps for ecommerce stores, and lightweight utilities for practical business tasks.",
              ],
              [
                "How products are organized",
                "Each product has a dedicated page, support path, metadata, and structured content so users can quickly understand what the product does and who it is for.",
              ],
              [
                "Who the products are for",
                "Dentoku Dev products are built for operators, founders, merchants, researchers, and teams that want focused tools without unnecessary platform complexity.",
              ],
            ].map(([title, copy]) => (
              <Card key={title} className="rounded-xl border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-slate-950">Dentoku Dev product portfolio</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              The portfolio is intentionally split into clear product entities. This makes support,
              documentation, pricing, and product discovery easier to understand.
            </p>
            <div className="mt-8 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Dentoku Dev products and use cases</caption>
                <thead className="bg-slate-50 text-slate-950">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Product</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Category</th>
                    <th scope="col" className="px-4 py-3 font-semibold">What it solves</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {productPortfolio.map((product) => (
                    <tr key={product.href}>
                      <th scope="row" className="px-4 py-4 font-semibold text-slate-950">
                        <Link href={product.href} className="hover:text-[#c43618]">
                          {product.name}
                        </Link>
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
