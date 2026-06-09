import { JsonLd } from "@/components/marketing/json-ld";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Terms of Service – Dentoku Dev",
  description:
    "Terms governing access to EmailMagnet and Dentoku Dev digital consulting services, including billing, acceptable use, right of withdrawal, and Italian governing law.",
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
          Last updated: June 9, 2026. These Terms of Service ("{`"Terms"`}") form a binding
          agreement between you ("{`"User"`}" or "{`"Client"`}") and Dentoku Dev (Nicola Orlandi,
          sole trader / ditta individuale, Via Bullona 8, 20154 Milano, Italy — P.IVA
          IT13625480960) ("{`"Dentoku Dev"`}",
          "{`"we"`}", or "{`"us"`}") and govern your access to and use of EmailMagnet, this website,
          and any digital consulting services we provide.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          By creating an account, completing a purchase, or engaging our consulting services,
          you confirm that you have read, understood, and accepted these Terms. If you are acting
          on behalf of a company or other legal entity, you warrant that you have authority to
          bind that entity.
        </p>

        {/* 1. Services */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">1. Services</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Dentoku Dev provides two categories of services:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 leading-8 text-slate-600">
          <li>
            <strong>Software products</strong> — currently EmailMagnet, a browser extension
            available in a free tier and a one-time purchase ("{`"PRO"`}") tier with lifetime
            access to the features described on the product page at time of purchase.
          </li>
          <li>
            <strong>Digital consulting</strong> — strategy, implementation, and advisory services
            for small and medium-sized businesses, delivered under a separate written engagement
            agreement or proposal ("{`"SOW"`}") accepted by both parties. Where a SOW conflicts
            with these Terms, the SOW prevails for that engagement.
          </li>
        </ul>

        {/* 2. Eligibility */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">2. Eligibility</h2>
        <p className="mt-3 leading-8 text-slate-600">
          You must be at least 18 years of age (or the age of majority in your jurisdiction) and
          have full legal capacity to enter into a contract. If purchasing on behalf of a
          business, you represent that the business is duly incorporated and that you are
          authorised to bind it. Our services are not directed at consumers under 16.
        </p>

        {/* 3. Accounts */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">3. Accounts and Access</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Where account creation is required, you are responsible for maintaining the
          confidentiality of your credentials and for all activity that occurs under your
          account. You must notify us immediately at{" "}
          <a href="mailto:support@dentokudev.com" className="underline underline-offset-2">
            support@dentokudev.com
          </a>{" "}
          if you suspect unauthorised access. We are not liable for losses caused by your
          failure to keep credentials secure.
        </p>

        {/* 4. Pricing, Billing, and Taxes */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          4. Pricing, Billing, and Taxes
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          All prices are displayed in EUR and are inclusive of Italian VAT (IVA) where
          applicable to the transaction. The applicable total, including any taxes, is shown
          before you confirm purchase. EmailMagnet PRO is processed by Stripe, Inc.;
          ClickPilotAI is processed by Gumroad, Inc. By completing checkout you also accept
          the terms and privacy policy of the applicable payment processor.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          <strong>EmailMagnet PRO — lifetime access.</strong> A one-time payment grants you a
          perpetual, non-exclusive, non-transferable licence to use EmailMagnet PRO features as
          they exist at time of purchase and as we continue to develop them. "{`"Lifetime"`}" means
          for as long as we operate EmailMagnet as a product; we will provide reasonable advance
          notice (minimum 60 days) if we decide to discontinue the product permanently.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          <strong>Consulting fees.</strong> Rates, milestones, and payment schedules for
          consulting engagements are set out in the applicable SOW. Unless otherwise agreed,
          invoices are payable within 30 days of issuance. Late payments accrue interest at the
          rate provided by D.Lgs. 231/2002 (Italian late-payment legislation, applicable to
          B2B transactions).
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          We reserve the right to change pricing for new purchases. Existing lifetime licence
          holders are not affected by price changes.
        </p>

        {/* 5. Right of Withdrawal (B2C) */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          5. Right of Withdrawal (Consumer Purchases)
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          If you are a <strong>consumer</strong> (a natural person acting outside of any trade,
          business, or profession) resident in the European Union, you normally have a 14-day
          right of withdrawal from distance contracts under D.Lgs. 206/2005 (Codice del
          Consumo) and Directive 2011/83/EU.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          For <strong>digital content not supplied on a tangible medium</strong> (such as
          EmailMagnet PRO licence delivery), you expressly agree, before purchase is completed,
          that performance of the contract begins immediately upon payment confirmation and that
          you thereby <strong>waive your right of withdrawal</strong> pursuant to Art. 59(1)(o)
          of Directive 2011/83/EU and Art. 59(m) of D.Lgs. 206/2005. This waiver is clearly
          presented and confirmed in the checkout flow prior to payment.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          If the waiver was not properly obtained, or if you have a legitimate complaint about a
          defective product, contact us at{" "}
          <a href="mailto:support@dentokudev.com" className="underline underline-offset-2">
            support@dentokudev.com
          </a>{" "}
          and we will evaluate your case promptly. We offer a{" "}
          <strong>30-day satisfaction refund</strong> as a commercial courtesy for first-time
          purchases, at our discretion.
        </p>

        {/* 6. Acceptable Use */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">6. Acceptable Use</h2>
        <p className="mt-3 leading-8 text-slate-600">You agree not to:</p>
        <ul className="mt-4 list-disc pl-6 space-y-2 leading-8 text-slate-600">
          <li>
            Use EmailMagnet or any Dentoku Dev service to collect, process, or transmit personal
            data in violation of applicable privacy law, including GDPR, the Italian Privacy
            Code, CAN-SPAM, CASL, or other applicable anti-spam legislation.
          </li>
          <li>
            Use automated means to scrape, harvest, or extract data in a manner that violates
            the terms of service of third-party platforms, exceeds your authorised access, or
            constitutes unlawful data processing.
          </li>
          <li>
            Resell, sublicence, reverse-engineer, or create derivative works of any Dentoku Dev
            software without express written consent.
          </li>
          <li>
            Attempt to circumvent technical protection measures, access restricted areas, or
            interfere with the operation of our infrastructure.
          </li>
          <li>
            Use the services for harassment, abusive outreach, transmission of malware, or any
            unlawful purpose.
          </li>
        </ul>
        <p className="mt-4 leading-8 text-slate-600">
          You are solely responsible for ensuring that your use of the services complies with all
          laws applicable to you, including data protection, electronic communications, and
          consumer protection legislation. We are not liable for your compliance failures.
        </p>

        {/* 7. Intellectual Property */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          7. Intellectual Property
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          All intellectual property rights in the EmailMagnet software, website, brand, and
          documentation are owned by or licensed to Dentoku Dev and are protected by Italian and
          international copyright law (L. 633/1941 and Directive 2009/24/EC on software
          protection). These Terms grant you a limited licence to use the services; they do not
          transfer any ownership.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          <strong>Consulting deliverables.</strong> Unless the applicable SOW states otherwise,
          intellectual property in deliverables produced for consulting clients transfers to the
          client upon receipt of full payment. Dentoku Dev retains a non-exclusive licence to
          use such deliverables for portfolio and case study purposes (excluding confidential
          information) unless the client objects in writing.
        </p>

        {/* 8. Confidentiality */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">8. Confidentiality</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Each party agrees to keep confidential any non-public information disclosed by the
          other party in connection with consulting engagements that is marked confidential or
          that a reasonable person would consider confidential given the circumstances.
          Confidential information may only be disclosed to personnel who need it to perform the
          engagement and must not be used for any other purpose. This obligation survives
          termination for 3 years. It does not apply to information that is or becomes publicly
          available through no fault of the receiving party, or that must be disclosed by law or
          court order (with prompt notice to the disclosing party where permitted).
        </p>

        {/* 9. Service Availability */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">9. Service Availability</h2>
        <p className="mt-3 leading-8 text-slate-600">
          We aim for high availability but do not guarantee uninterrupted access. We may perform
          scheduled maintenance, apply security patches, or modify features without prior notice
          where urgency requires it. We will endeavour to notify users of planned downtime in
          advance. Third-party platforms (browser extension stores, payment providers) operate
          independently; outages or policy changes on those platforms are outside our control.
        </p>

        {/* 10. Warranties and Disclaimer */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          10. Warranties and Disclaimer
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          We warrant that EmailMagnet will perform materially in accordance with its published
          documentation for 90 days following your initial purchase. For consulting services, we
          warrant that work will be performed with reasonable skill and care.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          Except as stated above and to the maximum extent permitted by applicable law, the
          services are provided "{`"as is"`}" and "{`"as available"`}" without warranties of
          merchantability, fitness for a particular purpose, or non-infringement. We do not
          warrant that the services will be error-free or that results obtained will meet your
          requirements. Nothing in these Terms excludes or limits warranties that cannot be
          excluded under mandatory Italian consumer protection law.
        </p>

        {/* 11. Limitation of Liability */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          11. Limitation of Liability
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          To the maximum extent permitted by applicable law, Dentoku Dev's total aggregate
          liability to you for any claim arising out of or in connection with these Terms,
          whether in contract, tort, or otherwise, is limited to the greater of: (a) the amount
          you paid to us in the 12 months preceding the claim; or (b) EUR 100.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          In no event will Dentoku Dev be liable for loss of profits, loss of revenue, loss of
          data, loss of business opportunities, or indirect, consequential, special, or punitive
          damages, even if advised of the possibility of such losses.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          <strong>Consumer notice.</strong> Nothing in this Section excludes or limits liability
          for death or personal injury caused by negligence, fraud, or any other liability that
          cannot be excluded under mandatory Italian law, including rights under D.Lgs. 206/2005
          for consumers.
        </p>

        {/* 12. Termination */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">12. Termination</h2>
        <p className="mt-3 leading-8 text-slate-600">
          <strong>By you.</strong> You may stop using our services at any time. Deletion of your
          data is governed by our Privacy Policy.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          <strong>By us.</strong> We may suspend or terminate your access with immediate effect
          if you materially breach these Terms (including acceptable use violations), if required
          by law or court order, or for serious security reasons. We will give reasonable prior
          notice where circumstances permit. Termination does not entitle you to a refund of
          amounts already paid, except where required by law.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          Provisions that by their nature should survive (intellectual property, confidentiality,
          limitation of liability, governing law) continue in effect after termination.
        </p>

        {/* 13. Governing Law and Jurisdiction */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          13. Governing Law and Jurisdiction
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          These Terms are governed by and construed in accordance with Italian law, excluding
          its conflict-of-law rules. For <strong>B2B disputes</strong>, the exclusive
          jurisdiction is the competent court of Milano, Italy. For{" "}
          <strong>consumer disputes</strong>, mandatory Italian and EU rules on jurisdiction
          apply; consumer users resident in the EU may bring proceedings before the courts of
          their place of residence pursuant to Art. 18 of Regulation (EU) 1215/2012
          (Brussels I Recast).
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          Where Italian law requires an attempt at out-of-court settlement before litigation,
          the parties agree to participate in mediation pursuant to D.Lgs. 28/2010. For EU
          consumers, disputes may also be submitted through the European Commission's Online
          Dispute Resolution platform at{" "}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            ec.europa.eu/consumers/odr
          </a>
          .
        </p>

        {/* 14. Changes */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          14. Changes to These Terms
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          We may revise these Terms to reflect changes in law, product, or operations. For
          material changes affecting existing users, we will provide at least 30 days' advance
          notice by email or prominent notice on this page. Continued use after the effective
          date constitutes acceptance of the revised Terms. If you do not accept the revised
          Terms, you may stop using the services; for paid products, contact us within 30 days
          of the change notice to discuss your options.
        </p>

        {/* 15. Miscellaneous */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">15. Miscellaneous</h2>
        <p className="mt-3 leading-8 text-slate-600">
          <strong>Entire agreement.</strong> These Terms, together with any applicable SOW and
          our Privacy Policy, constitute the entire agreement between you and Dentoku Dev
          regarding the services and supersede all prior agreements or understandings.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          <strong>Severability.</strong> If any provision is held unenforceable, the remaining
          provisions continue in full force; the unenforceable provision will be modified to the
          minimum extent necessary to make it enforceable.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          <strong>Waiver.</strong> Failure to enforce any provision is not a waiver of our right
          to enforce it later.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          <strong>Force majeure.</strong> Neither party is liable for failure to perform
          obligations caused by circumstances beyond its reasonable control (including natural
          disasters, acts of government, or widespread infrastructure failures), provided the
          affected party gives prompt notice and uses reasonable efforts to mitigate.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          <strong>Language.</strong> These Terms are provided in English. Where required by
          Italian law for consumer transactions, an Italian translation will be made available
          upon request. In the event of conflict between language versions, the Italian version
          prevails for consumers; the English version prevails for B2B transactions.
        </p>

        {/* 16. Contact */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">16. Contact</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Questions about these Terms:{" "}
          <a href="mailto:support@dentokudev.com" className="underline underline-offset-2">
            support@dentokudev.com
          </a>
          . For legal notices, please also send a copy by registered mail to the registered
          address of Dentoku Dev indicated above.
        </p>
      </article>
    </>
  );
}
