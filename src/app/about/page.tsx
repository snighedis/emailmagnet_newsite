import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "EmailMagnet is a Chrome Extension by Dentoku Dev that helps users find and extract emails from websites while browsing.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          as="h1"
          eyebrow="About EmailMagnet"
          title="A practical Chrome Extension for faster email discovery"
          description={siteConfig.description}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            ["What it is", "EmailMagnet is a Chrome Extension for finding and extracting email addresses from websites while browsing."],
            ["Who it is for", "It is for users who research websites, prepare contact lists, or want to reduce repetitive email copy-paste work."],
            ["Problem it solves", "Manual email collection is slow and repetitive. EmailMagnet shortens the workflow into a browser-based extraction step."],
            ["Why it exists", "Dentoku Dev builds browser tools that remove friction from daily work and repetitive web workflows."],
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
