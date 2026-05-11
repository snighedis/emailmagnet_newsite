import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Docs",
  description:
    "EmailMagnet documentation hub placeholder for installation, exporting, autosave, bulk extraction, and responsible use.",
  path: "/docs",
});

const docs = [
  ["getting-started", "Getting started", "Install EmailMagnet and understand the basic extraction workflow."],
  ["exporting-emails", "Exporting emails", "Placeholder documentation for CSV and TXT export workflows."],
  ["responsible-use", "Responsible use", "Guidance placeholder for compliance-minded email extraction."],
];

export default function DocsPage() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          as="h1"
          eyebrow="Docs"
          title="EmailMagnet documentation"
          description="A scalable documentation structure is ready for installation guides, export help, and product education."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {docs.map(([slug, title, description]) => (
            <Link key={slug} href={`/docs/${slug}`}>
              <Card className="h-full rounded-xl border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
