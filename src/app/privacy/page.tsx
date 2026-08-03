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
          Last updated: August 3, 2026. This Privacy Policy describes how Dentoku Dev ("{`"we"`}",
          "{`"us"`}", or "{`"our"`}") processes personal data when you visit dentokudev.com, purchase or
          use EmailMagnet, or engage us for digital consulting services. It is issued pursuant to
          Art. 13 of Regulation (EU) 2016/679 ("{`"GDPR"`}") and the Italian Personal Data Protection
          Code (D.Lgs. 196/2003, as amended by D.Lgs. 101/2018).
        </p>

        {/* 1. Data Controller */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">1. Data Controller</h2>
        <p className="mt-3 leading-8 text-slate-600">
          The data controller is Dentoku Dev (Nicola Orlandi, sole trader / ditta individuale),
          Via Bullona 8, 20154 Milano, Italy, P.IVA IT13625480960.
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
            <strong>Identity and contact data</strong>: name, email address, and (for consulting
            clients) company name, VAT number, billing address.
          </li>
          <li>
            <strong>Transactional data</strong>: purchase records, licence keys, and invoices
            related to EmailMagnet PRO or consulting engagements.
          </li>
          <li>
            <strong>Payment data</strong>: processed by Stripe, Inc. (EmailMagnet PRO) and
            Gumroad, Inc. (ClickPilotAI) on our behalf; we do not store full card numbers or
            bank account details.
          </li>
          <li>
            <strong>Support and communications data</strong>: emails, messages, and attachments
            exchanged with our support address.
          </li>
          <li>
            <strong>Technical and usage data</strong>: IP address, browser type, referral URL,
            and server access logs collected automatically when you visit our website.
          </li>
          <li>
            <strong>Cookies and tracking data</strong>: as described in Section 7 below.
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
            <strong>Payment processing</strong>: Stripe, Inc. (USA) for EmailMagnet PRO;
            Gumroad, Inc. (USA) for ClickPilotAI. Both process billing and payment data under
            their own privacy policies and the SCCs they have adopted as processors.
          </li>
          <li>
            <strong>Cloud hosting and CDN</strong>: Vercel Inc. (USA); hosts the website and
            API under SCCs.
          </li>
          <li>
            <strong>Analytics</strong>: Google LLC (Google Analytics 4, USA); anonymised
            website usage statistics under SCCs and IP anonymisation.
          </li>
          <li>
            <strong>AI support chat</strong>: Chatbase, Inc. (USA); powers the optional AI
            assistant chat widget. If you open the chat, the messages you send are processed to
            generate automated replies. Loaded only with your analytics consent, under SCCs.
          </li>
          <li>
            <strong>Email delivery</strong>: transactional email sent via a provider under a
            DPA; used only for licence delivery, support replies, and mandatory service notices.
          </li>
          <li>
            <strong>Newsletter &amp; email marketing</strong>: Loops, Inc. (USA); stores the email
            address you submit through our newsletter and lead-magnet forms to send guides and
            product updates, on the basis of your consent. Processed under SCCs; you can
            unsubscribe at any time via the link in every email.
          </li>
        </ul>

        <h3 className="mt-8 text-lg font-semibold text-slate-950">
          AI assistant transparency (EU AI Act)
        </h3>
        <p className="mt-3 leading-8 text-slate-600">
          Our website offers an optional support chat that is an{" "}
          <strong>artificial intelligence system</strong>, not a human agent. In line with Article
          50 of Regulation (EU) 2024/1689 (the AI Act), we disclose this clearly before you
          interact with it. Replies are generated automatically and may be inaccurate or
          incomplete; they do not constitute professional, legal, or binding advice. Please do not
          share sensitive personal data in the chat, and contact{" "}
          <a href="mailto:support@dentokudev.com" className="underline underline-offset-2">
            support@dentokudev.com
          </a>{" "}
          for anything important. The assistant does not make automated decisions producing legal
          or similarly significant effects about you (Art. 22 GDPR).
        </p>
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
            <strong>Purchase and billing records</strong>: 10 years from the date of the
            transaction, as required by Italian fiscal law.
          </p>
          <p>
            <strong>Support correspondence</strong>: retained until the support case is closed
            and for a further 2 years for quality assurance; deleted thereafter unless a legal
            claim is pending.
          </p>
          <p>
            <strong>Marketing consent records</strong>: until you withdraw consent, plus 1 year
            to demonstrate the consent was valid.
          </p>
          <p>
            <strong>Website server logs</strong>: up to 90 days, then automatically purged.
          </p>
          <p>
            <strong>Consulting engagement records</strong>: 5 years from project completion,
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
            <strong>Right of access (Art. 15)</strong>: obtain confirmation of whether we
            process your data and receive a copy.
          </li>
          <li>
            <strong>Right to rectification (Art. 16)</strong>: request correction of inaccurate
            or incomplete data.
          </li>
          <li>
            <strong>Right to erasure / "right to be forgotten" (Art. 17)</strong>: request
            deletion of your data where no legitimate retention basis remains.
          </li>
          <li>
            <strong>Right to restriction (Art. 18)</strong>: request that processing be
            restricted in certain circumstances.
          </li>
          <li>
            <strong>Right to data portability (Art. 20)</strong>: receive your data in a
            structured, machine-readable format where processing is based on consent or
            contract.
          </li>
          <li>
            <strong>Right to object (Art. 21)</strong>: object to processing based on
            legitimate interests or to direct marketing at any time.
          </li>
          <li>
            <strong>Right to withdraw consent (Art. 7(3))</strong>: where processing is based
            on consent, withdraw it at any time without affecting the lawfulness of prior
            processing.
          </li>
          <li>
            <strong>Rights related to automated decision-making (Art. 22)</strong>: we do not
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
          121, 00186 Roma, tel. +39 06 696771,{" "}
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

        {/* 11. EmailMagnet Browser Extension */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          11. EmailMagnet Browser Extension
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          This section describes how the EmailMagnet browser extension (&quot;the
          extension&quot;) handles data, in addition to the general practices above.
        </p>
        <div className="mt-4 space-y-3 leading-8 text-slate-600">
          <p>
            <strong>Single purpose.</strong> The extension has one purpose: to detect and extract
            publicly visible email addresses from web pages you choose to scan.
          </p>
          <p>
            <strong>What the extension accesses.</strong>{" "}
            When you click to scan a page, or run the automation feature over a list of URLs you
            provide, the extension reads that page&apos;s content solely to identify email
            addresses. It does not read pages you do not actively scan, and it does not monitor
            your general browsing.
          </p>
          <p>
            <strong>Data collected and where it goes.</strong>
          </p>
        </div>
        <ul className="mt-4 list-disc pl-6 space-y-2 leading-8 text-slate-600">
          <li>
            Extracted email addresses and the URL of the page they were found on are stored
            locally in your browser (
            <code className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[0.95em] text-slate-800">
              chrome.storage
            </code>
            ).
          </li>
          <li>
            If you are a PRO user and enable Autosave, those extracted email addresses and their
            source page URLs are transmitted over HTTPS to our backend API (hosted by Vercel
            Inc., USA) to save them to your account.
          </li>
          <li>
            Your PRO activation token is sent to our backend to validate your licence and to
            process payment via Stripe, Inc.
          </li>
        </ul>
        <div className="mt-4 space-y-3 leading-8 text-slate-600">
          <p>
            <strong>Anonymous usage statistics.</strong>{" "}
            To understand how the extension is used and where people get stuck, EmailMagnet sends
            anonymous usage events to our own backend (hosted by Vercel Inc., USA). An event
            records only which action occurred (for example that the extension was installed, that
            the popup was opened, that a scan found results, or that the upgrade page was viewed),
            together with the extension version, your browser&apos;s interface language, and a
            random identifier generated at installation. That identifier is not derived from you
            or your device and is used solely to count distinct installations. These events never
            include page URLs, extracted email addresses, page content, or any personal data. We
            use no third-party analytics services, and we neither sell nor share this data.
          </p>
          <p>
            <strong>What the extension does NOT do.</strong> It does not collect your browsing
            history beyond the pages you actively scan; it does not capture keystrokes,
            passwords, form inputs, or page content unrelated to email detection; it contains no
            third-party advertising or analytics trackers and loads no remote code; the only usage
            data collected is the anonymous, first-party statistics described above.
          </p>
          <p>
            <strong>Limited use.</strong> Data handled by the extension is used only to provide
            the email-extraction feature to you. We do not sell it, do not use it for
            advertising, and do not transfer it to third parties other than the service providers
            strictly necessary to operate the feature (hosting and transactional email delivery),
            which act as our processors.
          </p>
          <p>
            <strong>Data you extract about third parties.</strong> Email addresses you extract
            belong to third parties. You are the controller of how you subsequently use them and
            are responsible for complying with applicable law (including the GDPR and anti-spam
            legislation such as the CAN-SPAM Act) when contacting them.
          </p>
          <p>
            <strong>Retention and deletion.</strong>{" "}
            Locally stored results can be cleared at any time from within the extension.
            Cloud-saved results (PRO) can be deleted using the extension&apos;s delete function.
            Uninstalling the extension removes all locally stored data.
          </p>
          <p>
            <strong>Permissions.</strong> The extension requests access to the active tab and
            scripting to scan the current page on demand; access to our backend domain to save
            results and validate your licence; and, only if you start the automation feature,
            optional access to the sites in your list.
          </p>
        </div>

        {/* 12. ClickPilot AI Browser Extension */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          12. ClickPilot AI Browser Extension
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          This section describes how the ClickPilot AI browser extension handles data. Its data
          flow is different from EmailMagnet&apos;s, because the text you process never reaches us.
        </p>
        <div className="mt-4 space-y-3 leading-8 text-slate-600">
          <p>
            <strong>What it does.</strong> ClickPilot AI is an artificial intelligence system that
            works inside text fields in your browser: it can fix, rewrite, summarize, translate,
            and run custom shortcuts on text you select.
          </p>
          <p>
            <strong>Where your text goes.</strong>{" "}
            The extension uses your own OpenAI API key (BYOK). When you run an action, the selected
            text is sent from your browser directly to OpenAI, under your own OpenAI account and
            your own agreement with OpenAI, L.L.C. It does not pass through our servers and we
            never receive, store, or process it. For that data flow you are the one who decides
            what is sent, and OpenAI acts under its own terms and privacy policy, not as our
            processor.
          </p>
          <p>
            <strong>What we do receive.</strong> Your PRO licence purchase is processed by Gumroad,
            Inc. and we hold the resulting purchase and licence records, as described in Sections 2
            and 4 above. Your OpenAI API key is stored locally in your browser and is never
            transmitted to us.
          </p>
          <p>
            <strong>AI transparency.</strong> Outputs are generated by an artificial intelligence
            system and may be inaccurate, incomplete, or biased. Review and edit them before you
            send or publish anything. They do not constitute professional, legal, or binding
            advice, and the extension does not make automated decisions producing legal or
            similarly significant effects about you (Art. 22 GDPR).
          </p>
          <p>
            <strong>Your responsibility for what you process.</strong>{" "}
            If you use the extension on text that contains other people&apos;s personal data, you
            decide to send that data to OpenAI under your own account, and you are responsible for
            having a lawful basis to do so.
          </p>
        </div>

        {/* 13. Contact */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">13. Contact</h2>
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
