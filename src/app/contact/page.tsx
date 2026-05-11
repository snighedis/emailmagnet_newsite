import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildContactPointSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact EmailMagnet support for product questions, billing help, and Chrome Extension support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-[#fff7f2] py-20">
      <JsonLd data={buildContactPointSchema()} />
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Email Us"
          description="Need support? Contact EmailMagnet by email for product questions, billing help, or account support."
        />
        <Card className="mt-12 rounded-xl border-slate-200 bg-white shadow-sm">
          <CardContent className="space-y-6 p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-[#ff5c35]/10 text-[#c43618]">
              <Mail className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-950">Need support?</h2>
            <p className="text-lg text-slate-600">{siteConfig.supportEmail}</p>
            <p className="text-sm text-slate-500">
              Support details are handled by email while the product documentation expands.
            </p>
            <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
              <Link href={`mailto:${siteConfig.supportEmail}`}>Email support</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
