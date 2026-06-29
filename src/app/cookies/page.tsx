import { JsonLd } from "@/components/marketing/json-ld";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Cookie Policy – Dentoku Dev",
  description:
    "Cookie Policy di Dentoku Dev: quali cookie utilizziamo, per quali finalità, e come gestire o revocare il consenso in qualsiasi momento.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Cookie Policy", href: "/cookies" },
        ])}
      />
      <article className="mx-auto max-w-3xl px-4 py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold text-slate-950">Cookie Policy</h1>
        <p className="mt-6 leading-8 text-slate-600">
          Last updated: June 15, 2026. This Cookie Policy explains what cookies and similar
          technologies are used on dentokudev.com, why we use them, and how you can control
          them. It is issued in accordance with the EU ePrivacy Directive (2002/58/EC as amended
          by 2009/136/EC), the Italian implementing legislation (D.Lgs. 69/2012 and the Garante
          per la protezione dei dati personali guidelines of 10 June 2021), and the GDPR.
        </p>
        <p className="mt-4 leading-8 text-slate-600">
          For information on how we handle personal data more broadly, see our{" "}
          <a href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>

        {/* 1. What are cookies */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">1. What Are Cookies</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Cookies are small text files placed on your device when you visit a website. They allow
          the site to remember information about your visit (such as your preferred language or
          whether you have already given consent) and can make your next visit easier and the
          site more useful to you. Similar technologies include local storage, session storage,
          and pixel tags; we refer to all of these collectively as "cookies" in this policy.
        </p>

        {/* 2. Categories */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">2. Cookies We Use</h2>
        <p className="mt-3 leading-8 text-slate-600">
          We use three categories of cookies. Analytics and Marketing cookies require your prior
          consent and are only set if you enable them in the cookie banner; you can accept or
          reject each category independently, and change your mind at any time.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-slate-950">
          a) Strictly Necessary Cookies
        </h3>
        <p className="mt-3 leading-8 text-slate-600">
          These cookies are essential for the website to function correctly and cannot be
          switched off. They do not collect information that could be used for marketing and are
          not shared with third parties for advertising purposes. No consent is required to
          deploy them under Art. 5(3) ePrivacy Directive.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm text-slate-600">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-900">
                <th className="pb-3 pr-4 font-semibold">Name</th>
                <th className="pb-3 pr-4 font-semibold">Purpose</th>
                <th className="pb-3 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">cookie-consent</td>
                <td className="py-3 pr-4">
                  Stores your per-category choice (analytics and marketing on/off), plus a version
                  and timestamp, so the banner does not reappear on every page load and we can
                  prove the consent given.
                </td>
                <td className="py-3">6 months, then we ask again</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-8 text-lg font-semibold text-slate-950">
          b) Analytics Cookies (consent required)
        </h3>
        <p className="mt-3 leading-8 text-slate-600">
          We use Google Analytics 4 to collect anonymised statistics about how visitors use this
          website (pages visited, session duration, traffic sources). This helps us improve the
          site. These cookies are only set if you enable Analytics in the cookie banner (via
          “Accept all” or by toggling Analytics on under “Manage preferences”). If you reject them
          or close the banner, no analytics cookies are placed. We also use Vercel’s
          privacy-friendly, cookieless analytics, which we likewise load only with your Analytics
          consent. Our optional AI support chat (Chatbase) is also loaded under this category and
          may store local data in your browser to keep the chat session; it is an AI assistant, as
          explained in our{" "}
          <a href="/privacy" className="underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm text-slate-600">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-900">
                <th className="pb-3 pr-4 font-semibold">Name</th>
                <th className="pb-3 pr-4 font-semibold">Provider</th>
                <th className="pb-3 pr-4 font-semibold">Purpose</th>
                <th className="pb-3 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">_ga</td>
                <td className="py-3 pr-4">Google LLC</td>
                <td className="py-3 pr-4">
                  Distinguishes unique users by assigning a randomly generated number as a
                  client identifier.
                </td>
                <td className="py-3">2 years</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">_ga_*</td>
                <td className="py-3 pr-4">Google LLC</td>
                <td className="py-3 pr-4">
                  Maintains session state for Google Analytics 4.
                </td>
                <td className="py-3">2 years</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-8 text-slate-600">
          IP anonymisation is enabled. Google Analytics data is processed in the United States
          under Standard Contractual Clauses (Decision 2021/914). For more information, see
          Google's{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Privacy Policy
          </a>{" "}
          and the{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Google Analytics opt-out browser add-on
          </a>
          .
        </p>

        <h3 className="mt-8 text-lg font-semibold text-slate-950">
          c) Marketing Cookies (consent required)
        </h3>
        <p className="mt-3 leading-8 text-slate-600">
          We use Google Ads tags to measure conversions from our advertising campaigns (for
          example, when a visit leads to installing an extension or starting a checkout). These
          cookies are <strong>off by default</strong> and are only set if you enable Marketing in
          the cookie banner. We do not sell your data, and we do not use it for cross-site
          profiling beyond Google Ads conversion measurement.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm text-slate-600">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-900">
                <th className="pb-3 pr-4 font-semibold">Name</th>
                <th className="pb-3 pr-4 font-semibold">Provider</th>
                <th className="pb-3 pr-4 font-semibold">Purpose</th>
                <th className="pb-3 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3 pr-4 font-mono text-xs">_gcl_au</td>
                <td className="py-3 pr-4">Google LLC</td>
                <td className="py-3 pr-4">
                  Used by Google Ads to store and track conversions attributed to ad clicks.
                </td>
                <td className="py-3">90 days</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-8 text-slate-600">
          If you do not enable Marketing cookies, no Google Ads tag is loaded. We do not use
          profiling cookies for any purpose other than the advertising conversion measurement
          described above.
        </p>

        {/* 3. How to manage */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          3. How to Manage and Withdraw Consent
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          You can change your cookie preferences at any time using one of the following methods:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-3 leading-8 text-slate-600">
          <li>
            <strong>Cookie preferences link.</strong> Click <strong>“Cookie preferences”</strong>{" "}
            in the footer of any page. The consent panel reopens with your current choices, and you
            can enable or disable Analytics and Marketing independently. Withdrawing consent is as
            easy as giving it. Turning a category off reloads the page so the related scripts stop
            immediately.
          </li>
          <li>
            <strong>Browser settings.</strong> You can instruct your browser to refuse all or
            some cookies, or to alert you when cookies are being set. Disabling strictly
            necessary cookies may affect site functionality. Instructions for major browsers:
            Chrome,{" "}
            <a
              href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Firefox
            </a>
            , Safari, Edge.
          </li>
          <li>
            <strong>Google Analytics opt-out.</strong> Install the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              Google Analytics opt-out add-on
            </a>{" "}
            to prevent your data from being collected by Google Analytics across all sites.
          </li>
        </ul>
        <p className="mt-4 leading-8 text-slate-600">
          Withdrawing consent does not affect the lawfulness of any processing that occurred
          before the withdrawal.
        </p>

        {/* 4. Retention */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          4. Retention of Cookie Data
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          Cookie lifetimes are shown in the tables above. Aggregated analytics reports are
          retained for up to 26 months in Google Analytics before automatic deletion. We
          periodically review active cookies and remove those that are no longer necessary.
        </p>

        {/* 5. Changes */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">
          5. Changes to This Policy
        </h2>
        <p className="mt-3 leading-8 text-slate-600">
          We may update this Cookie Policy when we add or remove cookies, or when the law
          requires it. Material changes will be reflected in the{" "}
          <strong>Last updated</strong> date above, and the cookie consent banner will
          reappear to collect a fresh choice where required.
        </p>

        {/* 6. Contact */}
        <h2 className="mt-12 text-2xl font-semibold text-slate-950">6. Contact</h2>
        <p className="mt-3 leading-8 text-slate-600">
          Questions about this Cookie Policy:{" "}
          <a href="mailto:support@dentokudev.com" className="underline underline-offset-2">
            support@dentokudev.com
          </a>
          . You also have the right to lodge a complaint with the{" "}
          <a
            href="https://www.garanteprivacy.it"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Garante per la protezione dei dati personali
          </a>
          .
        </p>
      </article>
    </>
  );
}
