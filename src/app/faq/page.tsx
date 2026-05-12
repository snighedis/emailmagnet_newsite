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
        <SectionHeading
          as="h1"
          align="left"
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Concise answers about EmailMagnet, exports, pricing, reliability, and responsible use."
        />
        <FaqList items={faqItems} />
      </div>
    </section>
  );
}
