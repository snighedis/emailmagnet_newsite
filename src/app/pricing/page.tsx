import { PricingCards } from "@/components/marketing/pricing-cards";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SupportBlock } from "@/components/marketing/support-block";
import { pricingPlans } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "EmailMagnet pricing includes a Free plan and a PRO plan with $19 lifetime access, unlimited extraction, autosave, bulk extraction, and priority support.",
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
      <section className="bg-[#fff7f2] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            as="h1"
            eyebrow="EmailMagnet pricing"
            title="Pay once. Extract forever."
            description="Choose the Free plan to start, or unlock PRO for lifetime access with no monthly subscription."
          />
          <div className="mt-12">
            <PricingCards plans={pricingPlans} />
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-600">
            Pricing and limits are based on the current EmailMagnet product offer. Billing details
            are shown during checkout.
          </p>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">EmailMagnet pricing comparison</caption>
              <thead className="bg-slate-50 text-slate-950">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Plan</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Best for</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Limits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">Free</td>
                  <td className="px-4 py-4">Trying EmailMagnet and occasional extraction</td>
                  <td className="px-4 py-4">200 emails per month, 100 emails per export</td>
                </tr>
                <tr>
                  <td className="px-4 py-4 font-medium text-slate-950">PRO</td>
                  <td className="px-4 py-4">Recurring research, prospecting, and bulk extraction</td>
                  <td className="px-4 py-4">Unlimited extraction and unlimited export size</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <SupportBlock />
    </>
  );
}
