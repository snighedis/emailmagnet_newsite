import Link from "next/link";
import { BadgeCheck, Code2, ExternalLink, Layers3, MailCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import { founderConfig, productPortfolio, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFounderSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Dentoku Dev Founder Led Studio",
  description:
    "Learn about the founder-led Dentoku Dev studio behind EmailMagnet, ClickPilot AI, Countdown321, and focused software tools.",
  path: founderConfig.href,
});

const proofPoints = [
  {
    title: "Product ownership",
    description:
      "Dentoku Dev product pages, docs, pricing, and support paths are maintained under one studio entity rather than anonymous single-purpose pages.",
    icon: Layers3,
  },
  {
    title: "Browser workflow focus",
    description:
      "EmailMagnet, ClickPilot AI, and Volume Control PRO all start from the same operating idea: reduce repetitive browser work with narrow, understandable tools.",
    icon: Code2,
  },
  {
    title: "Responsible product content",
    description:
      "Documentation and blog content cover practical use, export workflows, privacy considerations, and responsible contact handling.",
    icon: BadgeCheck,
  },
];

export default function FounderPage() {
  return (
    <>
      <JsonLd data={buildFounderSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: siteConfig.name, href: "/" },
          { name: "Founder", href: founderConfig.href },
        ])}
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading
            as="h1"
            eyebrow="Founder"
            title={founderConfig.name}
            description={founderConfig.description}
          />
          <div className="mt-10 rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">Short answer</h2>
            <p className="mt-2 leading-8 text-slate-700">
              Dentoku Dev is a founder-led software studio based in {founderConfig.location}. The
              studio builds focused products for browser, ecommerce, AI writing, and practical
              business workflows without exposing a public founder profile.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {proofPoints.map((point) => (
              <Card key={point.title} className="rounded-xl border-slate-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-slate-950">{point.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-slate-950">Products maintained by Dentoku Dev</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              The portfolio is intentionally made of small, specific products. Each tool has a
              dedicated product page, support route, and documentation path so users can understand
              what the product does before installing or buying.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {productPortfolio.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="rounded-xl border border-slate-200 p-5 transition hover:border-[#ff5c35] hover:bg-slate-50"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">
                    {product.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">{product.name}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-start gap-3">
              <MailCheck className="mt-1 h-5 w-5 shrink-0 text-teal-700" />
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Contact and support</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Product support and business questions should go through Dentoku Dev support so
                  each request can be connected to the right product.
                </p>
                <Link
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-[#c43618] hover:underline"
                >
                  {siteConfig.supportEmail}
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
