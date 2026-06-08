import { JsonLd } from "@/components/marketing/json-ld";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "EmailMagnet Terms of Service",
  description:
    "Review the EmailMagnet terms of service covering product access, billing, acceptable use, responsible extraction, limitations, and legal responsibilities.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Terms of Service", href: "/terms" },
        ])}
      />
      <article className="mx-auto max-w-3xl px-4 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950">Terms of Service</h1>
        <p className="mt-6 leading-8 text-slate-600">
          Effective date: May 12, 2026. These Terms of Service govern your access to and use of
          EmailMagnet and related Dentoku Dev services.
        </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">1. Eligibility and acceptance</h2>
      <p className="mt-3 leading-8 text-slate-600">
        By using EmailMagnet, you confirm that you have legal capacity to enter this agreement and
        that you will comply with these terms and all applicable laws.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">2. Acceptable use</h2>
      <p className="mt-3 leading-8 text-slate-600">
        You are responsible for using EmailMagnet in compliance with privacy, anti-spam, and
        outreach laws, including GDPR and CAN-SPAM where applicable. You must not use the product
        for unlawful data harvesting, harassment, or abusive outreach.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">3. Accounts and security</h2>
      <p className="mt-3 leading-8 text-slate-600">
        You are responsible for maintaining the confidentiality of your account, extension
        environment, and related access credentials, and for all activity under your account.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">4. Plans, billing, and taxes</h2>
      <p className="mt-3 leading-8 text-slate-600">
        EmailMagnet PRO is sold as lifetime access through the current checkout flow. Pricing,
        taxes, and billing details are shown before purchase is completed. You authorize payment
        processing according to the checkout terms.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">5. Intellectual property</h2>
      <p className="mt-3 leading-8 text-slate-600">
        EmailMagnet, its code, branding, and content are owned by Dentoku Dev or its licensors.
        These terms grant a limited, non-exclusive, non-transferable license to use the service as
        provided.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">6. Service availability</h2>
      <p className="mt-3 leading-8 text-slate-600">
        We may update, improve, or discontinue features to maintain service quality, security, and
        product direction. We do not guarantee uninterrupted availability.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">7. Warranty disclaimer</h2>
      <p className="mt-3 leading-8 text-slate-600">
        EmailMagnet is provided on an as-is and as-available basis, without warranties of any kind
        except where such disclaimers are not permitted by law.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">8. Limitation of liability</h2>
      <p className="mt-3 leading-8 text-slate-600">
        To the maximum extent permitted by law, Dentoku Dev is not liable for indirect,
        consequential, or special damages arising from use of the service.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">9. Termination</h2>
      <p className="mt-3 leading-8 text-slate-600">
        We may suspend or terminate access if these terms are violated or if required for legal,
        operational, or security reasons.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">10. Changes to these terms</h2>
      <p className="mt-3 leading-8 text-slate-600">
        We may revise these terms periodically. Updated terms become effective when posted on this
        page.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">11. Contact</h2>
      <p className="mt-3 leading-8 text-slate-600">
        Questions about these terms: support@dentokudev.com
      </p>
      </article>
    </>
  );
}
