import Link from "next/link";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import { faqItems } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Answers to common EmailMagnet questions about how it works, reliability, legality, free plan restrictions, and lifetime PRO access.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <section className="bg-white py-20">
      <JsonLd data={buildFaqSchema(faqItems)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "FAQ", href: "/faq" },
        ])}
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <SectionHeading
            as="h1"
            align="left"
            eyebrow="FAQ"
            title="EmailMagnet frequently asked questions"
            description="Concise answers about EmailMagnet, exports, pricing, reliability, and responsible use."
          />
          <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">Short answer</h2>
            <p className="mt-2 leading-7 text-slate-700">
              EmailMagnet is a Chrome extension by Dentoku Dev for finding and extracting emails
              from websites while browsing. It has a Free plan for light use and a PRO plan for
              unlimited extraction, autosave, bulk extraction, and priority support.
            </p>
          </div>
          <nav aria-label="FAQ related pages" className="mt-8">
            <h2 className="text-lg font-semibold text-slate-950">Related pages</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/emailmagnet" className="font-medium text-[#c43618] hover:underline">
                  EmailMagnet product page
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="font-medium text-[#c43618] hover:underline">
                  EmailMagnet pricing
                </Link>
              </li>
              <li>
                <Link href="/docs/responsible-use" className="font-medium text-[#c43618] hover:underline">
                  Responsible use guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-medium text-[#c43618] hover:underline">
                  Contact Dentoku Dev
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <FaqList items={faqItems} />
      </div>
    </section>
  );
}
