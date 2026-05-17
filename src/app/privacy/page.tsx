import { JsonLd } from "@/components/marketing/json-ld";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Read the EmailMagnet privacy policy for data categories, browser extension handling, retention, user rights, responsible use, and support contact details.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ])}
      />
      <article className="mx-auto max-w-3xl px-4 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950">Privacy Policy</h1>
        <p className="mt-6 leading-8 text-slate-600">
          Effective date: May 12, 2026. This Privacy Policy explains how Dentoku Dev handles
          personal data when you use the EmailMagnet website, support channels, and checkout flow.
        </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Who controls your data</h2>
      <p className="mt-3 leading-8 text-slate-600">
        Dentoku Dev is the data controller for personal data processed through this website and
        related support communication.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Data we collect</h2>
      <p className="mt-3 leading-8 text-slate-600">
        Depending on your interaction, we may process contact details such as your name and email
        address, support messages, billing and transaction records from payment providers, and
        technical website logs used for security and reliability.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">How we use data</h2>
      <p className="mt-3 leading-8 text-slate-600">
        We use personal data to provide support, process purchases, deliver product updates,
        protect service integrity, and maintain legal and accounting records.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Legal bases</h2>
      <p className="mt-3 leading-8 text-slate-600">
        Where applicable under GDPR, processing is based on contract performance, legitimate
        interest in operating and securing the service, legal obligations, and consent where
        required.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Data sharing</h2>
      <p className="mt-3 leading-8 text-slate-600">
        We do not sell personal data. We may share data with trusted service providers that support
        payments, hosting, analytics, or customer support, only to the extent needed to operate
        EmailMagnet.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Retention</h2>
      <p className="mt-3 leading-8 text-slate-600">
        We keep personal data only for as long as needed to deliver services, meet legal
        obligations, resolve disputes, and enforce our agreements.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Your rights</h2>
      <p className="mt-3 leading-8 text-slate-600">
        You may request access, correction, deletion, or portability of your personal data, and
        object to or restrict certain processing where permitted by law.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">International transfers</h2>
      <p className="mt-3 leading-8 text-slate-600">
        If data is transferred outside your region, we use appropriate safeguards required by
        applicable law.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Changes to this policy</h2>
      <p className="mt-3 leading-8 text-slate-600">
        We may update this policy when product, legal, or operational requirements change. The
        latest version is always published on this page.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Contact</h2>
      <p className="mt-3 leading-8 text-slate-600">
        Privacy requests and questions: support@dentokudev.com
      </p>
      </article>
    </>
  );
}
