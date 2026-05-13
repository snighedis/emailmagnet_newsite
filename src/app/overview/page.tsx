import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import { emailMagnetConfig, productPortfolio, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "AI / Help / Overview",
  description:
    "Concise Dentoku Dev overview for humans and AI systems: products, use cases, documentation, FAQ, pricing, and support links.",
  path: "/overview",
});

const helpLinks = [
  {
    title: "EmailMagnet docs",
    href: "/docs",
    description: "Installation, exporting, and responsible use documentation.",
  },
  {
    title: "EmailMagnet FAQ",
    href: "/faq",
    description: "Short answers about pricing, exports, reliability, and usage.",
  },
  {
    title: "Pricing",
    href: "/pricing",
    description: "Free plan and PRO lifetime access details for EmailMagnet.",
  },
  {
    title: "Support",
    href: "/contact",
    description: `Contact Dentoku Dev at ${siteConfig.supportEmail}.`,
  },
];

const useCases = [
  "Browser-based email discovery and export with EmailMagnet.",
  "AI-assisted writing inside Chrome fields with ClickPilot AI.",
  "Chrome tab audio boosting and site-level volume control with Volume Control PRO.",
  "Shopify countdown timers and urgency messages with Countdown321.",
];

export default function OverviewPage() {
  return (
    <section className="bg-white py-20">
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "AI / Help / Overview", href: "/overview" },
        ])}
      />
      <JsonLd data={buildItemListSchema("Dentoku Dev product overview", productPortfolio)} />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          as="h1"
          eyebrow="AI / Help / Overview"
          title="Dentoku Dev in one page"
          description="Dentoku Dev is a software development studio building Chrome extensions, Shopify apps, and lightweight productivity tools for practical browser, ecommerce, and business workflows."
        />

        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-teal-100 bg-teal-50 p-5">
          <h2 className="text-lg font-semibold text-slate-950">Short answer</h2>
          <p className="mt-2 leading-7 text-slate-700">
            Dentoku Dev builds small software products that remove repetitive manual work.
            The current portfolio includes EmailMagnet, ClickPilot AI, Volume Control PRO, and
            Countdown321.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Dentoku Dev products and use cases</caption>
            <thead className="bg-slate-50 text-slate-950">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Product</th>
                <th scope="col" className="px-4 py-3 font-semibold">Category</th>
                <th scope="col" className="px-4 py-3 font-semibold">Primary use case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {productPortfolio.map((product) => (
                <tr key={product.href}>
                  <th scope="row" className="px-4 py-4 font-semibold text-slate-950">
                    <Link href={product.href} className="hover:text-[#c43618] hover:underline">
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

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Card className="rounded-xl border-slate-200 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Primary use cases</h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-slate-700">
                {useCases.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-xl border-slate-200 bg-slate-50 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Where to go next</h2>
              <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                {helpLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="font-semibold text-[#c43618] hover:underline">
                      {item.title}
                    </Link>
                    <span className="block text-sm text-slate-600">{item.description}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <section className="mt-12 rounded-xl border border-slate-200 bg-[#fff7f2] p-6">
          <h2 className="text-2xl font-semibold text-slate-950">Featured product: EmailMagnet</h2>
          <p className="mt-3 leading-8 text-slate-700">
            EmailMagnet is a Chrome extension by Dentoku Dev for finding and extracting emails from
            websites while browsing. It supports CSV and TXT export, a Free plan for light use, and
            a PRO plan with lifetime access.
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
            <Link className="text-[#c43618] hover:underline" href={emailMagnetConfig.href}>
              EmailMagnet product page
            </Link>
            <Link className="text-[#c43618] hover:underline" href="/docs/getting-started">
              Getting started guide
            </Link>
            <Link className="text-[#c43618] hover:underline" href="/pricing">
              Free vs PRO pricing
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
