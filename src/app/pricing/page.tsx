import { PricingCards } from "@/components/marketing/pricing-cards";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SupportBlock } from "@/components/marketing/support-block";
import { pricingPlans } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Pricing",
  description:
    "EmailMagnet pricing includes a Free plan and a PRO plan with $19 lifetime access, unlimited extraction, autosave, bulk extraction, and priority support.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
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
            Pricing and limits are based on the current EmailMagnet site. Placeholder: add tax,
            refund, and billing policy details when available.
          </p>
        </div>
      </section>
      <SupportBlock />
    </>
  );
}
