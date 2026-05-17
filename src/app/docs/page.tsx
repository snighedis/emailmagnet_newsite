import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "EmailMagnet Documentation",
  description:
    "Use the EmailMagnet documentation hub to install the Chrome extension, run your first extraction, export CSV or TXT files, and work responsibly.",
  path: "/docs",
});

const docs = [
  {
    slug: "getting-started",
    title: "Getting started",
    description: "Install EmailMagnet in Chrome, open a relevant website, extract visible emails, and export your first clean contact list in minutes.",
    bestFor: "New users who want to understand the basic browser workflow.",
  },
  {
    slug: "exporting-emails",
    title: "Exporting emails",
    description: "Choose CSV or TXT exports in EmailMagnet, review detected addresses, and prepare cleaner contact lists for spreadsheets or handoff.",
    bestFor: "Users preparing spreadsheets, CRM imports, or lightweight email lists.",
  },
  {
    slug: "responsible-use",
    title: "Responsible use",
    description: "Use EmailMagnet responsibly by checking source context, qualifying addresses, respecting privacy rules, and avoiding automatic outreach.",
    bestFor: "Teams that need source context, qualification, and responsible contact handling.",
  },
];

export default function DocsPage() {
  return (
    <section className="bg-slate-50 py-20">
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Docs", href: "/docs" },
        ])}
      />
      <JsonLd
        data={buildItemListSchema(
          "EmailMagnet documentation",
          docs.map((doc) => ({
            name: doc.title,
            href: `/docs/${doc.slug}`,
            description: doc.description,
          })),
        )}
      />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          as="h1"
          eyebrow="Docs"
          title="EmailMagnet documentation"
          description="Clear guides for setup, exports, and responsible usage."
        />
        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-teal-100 bg-white p-5 text-center">
          <h2 className="text-lg font-semibold text-slate-950">Short answer</h2>
          <p className="mt-2 leading-7 text-slate-600">
            EmailMagnet docs explain how to install the Chrome extension, extract emails from
            website pages, export results, and use collected contact data responsibly.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {docs.map((doc) => (
            <Link key={doc.slug} href={`/docs/${doc.slug}`}>
              <Card className="h-full rounded-xl border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-slate-950">{doc.title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{doc.description}</p>
                  <p className="mt-5 text-sm leading-6 text-slate-500">{doc.bestFor}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <section className="mt-16 rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-2xl font-semibold text-slate-950">Recommended reading order</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-slate-600">
            <li>Start with getting started to understand the extraction workflow.</li>
            <li>Read exporting emails before moving contacts into another tool.</li>
            <li>Review responsible use before outreach, recruiting, or sales follow-up.</li>
          </ol>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
            <Link className="text-[#c43618] hover:underline" href="/emailmagnet">
              EmailMagnet product page
            </Link>
            <Link className="text-[#c43618] hover:underline" href="/faq">
              EmailMagnet FAQ
            </Link>
            <Link className="text-[#c43618] hover:underline" href="/pricing">
              EmailMagnet pricing
            </Link>
            <Link className="text-[#c43618] hover:underline" href="/contact">
              Contact support
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
}
