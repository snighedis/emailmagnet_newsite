import { JsonLd } from "@/components/marketing/json-ld";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Privacy Policy – Dentoku Dev",
  description:
    "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.",
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
        <p className="text-sm font-semibold uppercase tracking-wide text-eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950">Privacy Policy</h1>
        <p className="mt-6 leading-8 text-slate-600">
          Last updated: June 9, 2026. This Privacy Policy describes how Dentoku Dev ("{`"we"`}",
          "{`"us"`}", or "{`"our"`}") processes personal data when you visit dentokudev.com, purchase or
          use EmailMagnet, or engage us for digital consulting services. It is issued pursuant to
          Art. 13 of Regulation (EU) 2016/679 ("{`"GDPR"`}") and the Italian Personal Data Protection
          Code (D.Lgs. 196/2003, as amended by D.Lgs. 101/2018).
        </p>

        {/* 1. Data Controller */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">1. Data Controller</h2>
        <p className="mt-3 leading-8 text-slate-600">
          The data controller is Dentoku Dev (Nicola Orlandi, sole trader / ditta individuale),
          Via Bullona 8, 20154 Milano, Italy — P.IVA IT13625480960.
        </p>
        <p className="mt-3 leading-8 text-slate-600">
          Contact for data protection matters:{" "}
          <a href="mailto:support@dentokudev.com" className="underline underline-offset-2">
            support@dentokudev.com
          </a>
          . A designated Data Protection Officer is not mandatory for our current processing
          activities; we handle all privacy requests directly.
        </p>

        {/* 2. Categories of Personal Data */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">2. Personal Data We Process</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Depending on how you interact with us, we may process the following categories of
          personal data:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 leading-8 text-slate-600">
          <li>
            <strong>Identity and contact data</strong> — name, email address, and (for consulting
            clients) company name, VAT number, billing address.
          </li>
          <li>
            <strong>Transactional data</strong> — purchase records, licence keys, and invoices
            related to EmailMagnet PRO or consulting engagements.
          </li>
          <li>
            <strong>Payment data</strong> — processed by Stripe, Inc. (EmailMagnet PRO) and
            Gumroad, Inc. (ClickPilotAI) on our behalf; we do not store full card numbers or
            bank account details.
          </li>
          <li>
            <strong>Support and communications data</strong> — emails, messages, and attachments
            exchanged with our support address.
          </li>
          <li>
            <strong>Technical and usage data</strong> — IP address, browser type, referral URL,
            and server access logs collected automatically when you visit our website.
          </li>
          <li>
            <strong>Cookies and tracking data</strong> — as described in Section 7 below.
          </li>
        </ul>
        <p className="mt-4 leading-8 text-slate-600">
          We do not intentionally collect special-category data (Art. 9 GDPR) or data concerning
          criminal convictions. We do not knowingly process personal data of persons under 16
          years of age; if you believe a minor has submitted data to us, contact us for prompt
          deletion.
        </p>

        {/* 3. Purposes and Legal Bases */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          3. Purposes and Legal Bases
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          We process personal data only where a legal basis under Art. 6 GDPR applies:
        </p>

        <div className="mt-6 space-y-6">
          <div>
            <p className="font-semibold text-slate-900">
              a) Performance of a contract (Art. 6(1)(b) GDPR)
            </p>
            <p className="mt-1 leading-8 text-slate-600">
              Processing your name, email, and billing information to deliver EmailMagnet PRO
              access, issue invoices, and fulfil digital consulting engagements you have
              requested. Without this data the service cannot be provided.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">
              b) Compliance with a legal obligation (Art. 6(1)(c) GDPR)
            </p>
            <p className="mt-1 leading-8 text-slate-600">
              Retaining billing records and invoices as required by Italian tax and accounting
              law (D.P.R. 633/1972 on VAT; D.P.R. 600/1973 on income tax), for a period of ten
              years from the date of each document.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">
              c) Legitimate interests (Art. 6(1)(f) GDPR)
            </p>
            <p className="mt-1 leading-8 text-slate-600">
              Operating, securing, and improving our website and services; detecting and
              preventing fraud and abuse; maintaining server access logs for security and
              forensic purposes (retained for up to 90 days); and sending transactional
              communications about your existing purchases. Our legitimate interests are balanced
              against your rights; you may object as described in Section 8.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">d) Consent (Art. 6(1)(a) GDPR)</p>
            <p className="mt-1 leading-8 text-slate-600">
              Where we send optional marketing communications or deploy non-essential cookies, we
              do so only on the basis of your freely given, specific, and informed consent, which
              you may withdraw at any time without affecting prior processing.
            </p>
          </div>
        </div>

        {/* 4. Third-Party Processors */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          4. Sub-Processors and Data Sharing
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          We do not sell, rent, or trade personal data. We engage the following categories of
          processors under written data-processing agreements:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 leading-8 text-slate-600">
          <li>
            <strong>Payment processing</strong> — Stripe, Inc. (USA) for EmailMagnet PRO;
            Gumroad, Inc. (USA) for ClickPilotAI. Both process billing and payment data under
            their own privacy policies and the SCCs they have adopted as processors.
          </li>
          <li>
            <strong>Cloud hosting and CDN</strong> — Vercel Inc. (USA); hosts the website and
            API under SCCs.
          </li>
          <li>
            <strong>Analytics</strong> — Google LLC (Google Analytics 4, USA); anonymised
            website usage statistics under SCCs and IP anonymisation.
          </li>
          <li>
            <strong>Email delivery</strong> — transactional email sent via a provider under a
            DPA; used only for licence delivery, support replies, and mandatory service notices.
          </li>
        </ul>
        <p className="mt-4 leading-8 text-slate-600">
          We may also disclose data to public authorities when required by law, court order, or
          to protect our legal rights.
        </p>

        {/* 5. International Transfers */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">5. International Transfers</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Some sub-processors listed above are established in the United States, which does not
          benefit from an adequacy decision for all transfer scenarios. Transfers are covered by
          the Standard Contractual Clauses adopted by the European Commission (Decision 2021/914)
          and, where applicable, by the EU–U.S. Data Privacy Framework. You may request copies
          of the applicable transfer safeguards by writing to{" "}
          <a href="mailto:support@dentokudev.com" className="underline underline-offset-2">
            support@dentokudev.com
          </a>
          .
        </p>

        {/* 6. Retention */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">6. Retention Periods</h2>
        <div className="mt-4 space-y-3 leading-8 text-slate-600">
          <p>
            <strong>Purchase and billing records</strong> — 10 years from the date of the
            transaction, as required by Italian fiscal law.
          </p>
          <p>
            <strong>Support correspondence</strong> — retained until the support case is closed
            and for a further 2 years for quality assurance; deleted thereafter unless a legal
            claim is pending.
          </p>
          <p>
            <strong>Marketing consent records</strong> — until you withdraw consent, plus 1 year
            to demonstrate the consent was valid.
          </p>
          <p>
            <strong>Website server logs</strong> — up to 90 days, then automatically purged.
          </p>
          <p>
            <strong>Consulting engagement records</strong> — 5 years from project completion,
            unless a longer retention is necessary for legal disputes or contractual guarantees.
          </p>
        </div>

        {/* 7. Cookies */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">7. Cookies and Tracking</h2>
        <p className="mt-3 leading-8 text-slate-600">
          We use strictly necessary cookies to operate the website (session management,
          security). With your consent, we also deploy analytics cookies (Google Analytics 4)
          to understand aggregate traffic patterns. No cookies are used for behavioural
          advertising. You can manage or withdraw cookie consent at any time through the cookie
          banner or your browser settings. For detailed information see our{" "}
          <a href="/cookies" className="underline underline-offset-2">
            Cookie Policy
          </a>
          .
        </p>

        {/* 8. Your Rights */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">8. Your Rights</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Under the GDPR (Arts. 15–22) and, for Italian residents, the Italian Privacy Code, you
          have the following rights with respect to your personal data:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 leading-8 text-slate-600">
          <li>
            <strong>Right of access (Art. 15)</strong> — obtain confirmation of whether we
            process your data and receive a copy.
          </li>
          <li>
            <strong>Right to rectification (Art. 16)</strong> — request correction of inaccurate
            or incomplete data.
          </li>
          <li>
            <strong>Right to erasure / "right to be forgotten" (Art. 17)</strong> — request
            deletion of your data where no legitimate retention basis remains.
          </li>
          <li>
            <strong>Right to restriction (Art. 18)</strong> — request that processing be
            restricted in certain circumstances.
          </li>
          <li>
            <strong>Right to data portability (Art. 20)</strong> — receive your data in a
            structured, machine-readable format where processing is based on consent or
            contract.
          </li>
          <li>
            <strong>Right to object (Art. 21)</strong> — object to processing based on
            legitimate interests or to direct marketing at any time.
          </li>
          <li>
            <strong>Right to withdraw consent (Art. 7(3))</strong> — where processing is based
            on consent, withdraw it at any time without affecting the lawfulness of prior
            processing.
          </li>
          <li>
            <strong>Rights related to automated decision-making (Art. 22)</strong> — we do not
            make decisions with significant legal or similarly significant effects based solely
            on automated processing.
          </li>
        </ul>
        <p className="mt-4 leading-8 text-slate-600">
          To exercise any of the above rights, email{" "}
          <a href="mailto:support@dentokudev.com" className="underline underline-offset-2">
            support@dentokudev.com
          </a>{" "}
          with sufficient detail to identify your request. We will respond within 30 days
          (extendable by a further 60 days for complex requests, with notice). We do not charge
          a fee for reasonable requests.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          If you believe your rights have not been upheld, you have the right to lodge a
          complaint with the Italian supervisory authority, the{" "}
          <strong>Garante per la protezione dei dati personali</strong>, Piazza di Monte Citorio
          121, 00186 Roma — tel. +39 06 696771 —{" "}
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            garanteprivacy.it
          </a>
          . You may also file a complaint with the supervisory authority of your country of
          residence within the EU.
        </p>

        {/* 9. Security */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">9. Security Measures</h2>
        <p className="mt-3 leading-8 text-slate-600">
          We implement appropriate technical and organisational measures pursuant to Art. 32
          GDPR, including HTTPS/TLS in transit, access controls, and regular review of
          processing activities. In the event of a personal data breach that is likely to result
          in a high risk to your rights and freedoms, we will notify you without undue delay as
          required by Art. 34 GDPR.
        </p>

        {/* 10. Changes */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          10. Changes to This Policy
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          We may revise this policy to reflect changes in our processing activities, applicable
          law, or supervisory guidance. Material changes will be notified by email to active
          users or by a notice on this page at least 30 days before taking effect. The{" "}
          <strong>Last updated</strong> date at the top of this page indicates the version
          currently in force.
        </p>

        {/* 11. Contact */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">11. Contact</h2>
        <p className="mt-3 leading-8 text-slate-600">
          All privacy-related requests, complaints, and questions:{" "}
          <a href="mailto:support@dentokudev.com" className="underline underline-offset-2">
            support@dentokudev.com
          </a>
          . We aim to acknowledge requests within 5 business days.
        </p>
      </article>
    </>
  );
}
