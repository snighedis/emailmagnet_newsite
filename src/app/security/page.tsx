import { ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Security",
  description:
    "EmailMagnet security overview with privacy-minded data handling notes for browser-based email extraction workflows.",
  path: "/security",
});

const securityItems = [
  {
    title: "Data handling summary",
    copy: "EmailMagnet is designed around browser-based email extraction from website content. Keep extracted data handling aligned with the product documentation and applicable privacy rules.",
  },
  {
    title: "Privacy-minded workflow",
    copy: "The site avoids unsupported claims. Privacy, permission, and extension data details should be kept clear and updated as the product evolves.",
  },
  {
    title: "Future security details",
    copy: "Extension permissions, retention details, subprocessors, vulnerability reporting, and audit notes should be kept current as the product evolves.",
  },
];

export default function SecurityPage() {
  return (
    <section className="bg-[#f3fbfa] py-20">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          as="h1"
          eyebrow="Security"
          title="Clear security and privacy information"
          description="This page establishes a maintainable security surface for EmailMagnet without inventing unsupported claims."
        />
        <div className="mt-12 grid gap-5">
          {securityItems.map((item) => (
            <Card key={item.title} className="rounded-xl border-teal-100 bg-white shadow-sm">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-2 leading-7 text-slate-600">{item.copy}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
