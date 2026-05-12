import { Mail } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildContactPointSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Dentoku Dev for product support, general questions, partnerships, billing requests, and product feedback.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-[#fff7f2] py-20">
      <JsonLd data={buildContactPointSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          title="Contact Dentoku Dev"
          description="Use one inbox for customer support, general product questions, partnership requests, billing help, and feedback about Dentoku Dev products."
        />
        <Card className="mt-12 rounded-xl border-slate-200 bg-white shadow-sm">
          <CardContent className="space-y-6 p-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-[#ff5c35]/10 text-[#c43618]">
              <Mail className="h-7 w-7" />
            </div>
            <h2 className="text-2xl font-semibold text-slate-950">Support, partnerships, and general inquiries</h2>
            <p className="text-lg text-slate-600">{siteConfig.supportEmail}</p>
            <p className="mx-auto max-w-2xl text-sm leading-6 text-slate-500">
              This email is monitored for EmailMagnet support, Dentoku Dev product questions,
              partnership requests, billing help, and general business inquiries. Typical response
              time is within one business day.
            </p>
            <ul className="mx-auto grid max-w-2xl gap-2 text-left text-sm text-slate-600 sm:grid-cols-2">
              {[
                "Customer support",
                "Billing and account questions",
                "Product feedback",
                "Partnership and business inquiries",
              ].map((item) => (
                <li key={item} className="rounded-md bg-slate-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
              <Link href={`mailto:${siteConfig.supportEmail}`}>Email Dentoku Dev</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
