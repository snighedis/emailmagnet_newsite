import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Dentoku Dev is a product studio building focused Chrome extensions, Shopify apps, and lightweight software products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          as="h1"
          eyebrow="About Dentoku Dev"
          title="A product studio for focused software tools"
          description={siteConfig.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            ["What it is", "Dentoku Dev is the parent company and product studio behind focused software products including EmailMagnet."],
            ["What we build", "The portfolio includes Chrome extensions, Shopify apps, and focused software tools under one company brand."],
            ["How products are organized", "Each product has its own route, metadata, schema, and support path so users can understand it immediately."],
            ["Why it exists", "Dentoku Dev builds practical tools that remove friction from daily browser, business, and commerce workflows."],
          ].map(([title, copy]) => (
            <Card key={title} className="rounded-xl border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
