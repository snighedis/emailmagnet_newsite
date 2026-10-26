import { PricingCards } from "@/components/marketing/pricing-cards";
import { JsonLd } from "@/components/marketing/json-ld";
import { Section } from "@/components/marketing/section";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SupportBlock } from "@/components/marketing/support-block";
import { pricingPlans } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "EmailMagnet Pricing Plans",
  description:
    "EmailMagnet pricing includes a Free plan and a PRO plan with $19 lifetime access, autosave, bulk extraction, and priority support. No extraction or export limits on either plan.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ])}
      />
      <Section variant="peach" containerClassName="max-w-6xl">
        <SectionHeading
          as="h1"
          eyebrow="EmailMagnet pricing"
          title="Pay once. Extract forever."
          description="Choose the Free plan to start, or unlock PRO for lifetime access with no monthly subscription."
        />
        <div className="mt-12">
          <PricingCards plans={pricingPlans} />
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-stone-600">
          Pricing and features are based on the current EmailMagnet product offer. Billing details
          are shown during checkout.
        </p>
        <div className="shadow-soft mt-10 overflow-hidden rounded-2xl border border-stone-200/80 bg-white">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">EmailMagnet pricing comparison</caption>
            <thead className="text-ink bg-stone-50">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Plan</th>
                <th scope="col" className="px-4 py-3 font-semibold">Best for</th>
                <th scope="col" className="px-4 py-3 font-semibold">What you get</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-stone-700">
              <tr>
                <td className="px-4 py-4 font-medium text-stone-950">Free</td>
                <td className="px-4 py-4">Trying EmailMagnet and occasional extraction</td>
                <td className="px-4 py-4">Extraction and CSV/TXT export, no monthly or per-export limit</td>
              </tr>
              <tr>
                <td className="px-4 py-4 font-medium text-stone-950">PRO</td>
                <td className="px-4 py-4">Recurring research, prospecting, and bulk extraction</td>
                <td className="px-4 py-4">Everything in Free, plus autosave, bulk extraction, and priority support</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
      <SupportBlock />
    </>
  );
}
