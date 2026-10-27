import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import {
  FaqTiles,
  FeatureList,
  PageOpening,
  PlanPanels,
  RelatedLinks,
  ShortAnswer,
  SideSection,
  Steps,
  d,
  type Plan,
} from "@/components/marketing/editorial";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { getCopy, getPageCopy } from "@/copy";
import { blogPosts } from "@/content/blog";
import { emailMagnetConfig, emailMagnetTestimonials, faqItems, pricingPlans } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildSoftwareSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "EmailMagnet Chrome Email Extractor",
  description:
    "Collect public business emails while researching websites in Chrome, review detected contacts, and export CSV or TXT lists with EmailMagnet.",
  path: "/emailmagnet",
});

const comparison = [
  {
    manual: "Open each page, scan for addresses and paste them into a sheet one by one.",
    withIt: "Run one action in Chrome and collect every visible email on the page.",
  },
  {
    manual: "Fix duplicates and inconsistent formatting by hand afterwards.",
    withIt: "Export a structured list, ready for qualification, as CSV or TXT.",
  },
  {
    manual: "Lose track of where an address came from once the copying gets long.",
    withIt: "Collect only from the pages you are reviewing, so the source stays in view.",
  },
];

const values = [
  {
    title: "No more copy and paste",
    description:
      "Capture the visible emails on pages you are already reviewing instead of scanning, copying and formatting each address by hand.",
  },
  {
    title: "Lists ready to use",
    description:
      "Save reviewed emails as CSV or TXT files for spreadsheets, CRMs, qualification steps or follow-up.",
  },
  {
    title: "The source stays in view",
    description:
      "You see why an address is public before deciding whether it belongs in your list.",
  },
  {
    title: "Your call before export",
    description: "Choose what goes into the final list instead of exporting everything blindly.",
  },
];

const steps = [
  {
    title: "Open a page you research",
    description: "A contact page, a directory, a partner list: pages where the business context is visible.",
  },
  {
    title: "Run it and review",
    description: "It lists the emails the page shows. Keep the ones that belong in your list.",
  },
  {
    title: "Export the list",
    description: "Download CSV or TXT and take it into your spreadsheet, CRM and review steps.",
  },
];

const notFor = [
  "Getting past logins, or reaching protected or private data.",
  "Automatic outreach or spam campaigns.",
  "Skipping consent checks, qualification or opt-out handling.",
];

const proTriggers = [
  "You research directories, contact pages or partner lists every week.",
  "You want autosave to keep results across sessions.",
  "You work from reviewed URL lists and want bulk extraction.",
];

const plans: Plan[] = pricingPlans.map((plan) => ({
  name: plan.name.replace(/ plan$/, ""),
  price: plan.price === "Free" ? "$0" : plan.price,
  cadence: plan.price === "Free" ? "for good" : "once",
  description: plan.description,
  features: plan.features,
  action: plan.cta,
  featured: plan.featured,
}));

const related = [
  { label: "Install and use EmailMagnet", href: "/docs/getting-started" },
  { label: "Export emails as CSV or TXT", href: "/docs/exporting-emails" },
  { label: "Responsible use guide", href: "/docs/responsible-use" },
  { label: "Compare Free and PRO", href: "/pricing" },
  ...blogPosts.map((post) => ({ label: post.title, href: `/blog/${post.slug}` })),
];

/**
 * EmailMagnet (redesign: product pages in the homepage's system). The store
 * picture under the title, the short answer, what it replaces, the three steps
 * on the orange, the store reviews verbatim, the plans, responsible use, the
 * questions, then the other products and the proposal.
 */
export default function EmailMagnetPage() {
  const { products } = getCopy("en").site;
  const { home } = getPageCopy("en");

  return (
    <>
      <JsonLd data={buildSoftwareSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "EmailMagnet", href: "/emailmagnet" },
        ])}
      />
      <HomeReveal />

      <PageOpening
        title={["Emails found", "while you browse."]}
        standfirst="EmailMagnet is a Chrome extension that finds the public business emails on the pages you visit. Review them, then export a clean CSV or TXT list."
        primary={{ label: "Add to Chrome, free", href: emailMagnetConfig.secondaryCta.href }}
        secondary={{ label: "See the plans", href: "#plans" }}
        picture={{
          src: "/brand/emailmagnet-one-click.webp",
          alt: "EmailMagnet's popup listing the business emails found on a web page, with CSV and TXT export",
          width: 1280,
          height: 800,
        }}
        facts={[
          { term: "Free", detail: "The whole extraction and export workflow, with no monthly or per-export limit." },
          { term: "PRO, $19 once", detail: "Autosave, bulk extraction and priority support. No subscription." },
          { term: "Rated 5.0", detail: "On the Chrome Web Store." },
        ]}
      />

      <ShortAnswer
        title="In short"
        body="Open a directory or a contact page, run EmailMagnet, keep the addresses that belong and export the list."
        aside={{
          title: "What it is not for",
          body: "Getting past logins, automatic outreach or skipping consent. Your team stays in charge of lawful purpose, storage and opt-out handling.",
        }}
      />

      <SideSection
        title="The slow part of lead research, gone"
        lead="EmailMagnet does not replace judgment. It removes the copy and paste between finding a relevant page and having a clean list."
      >
        <table className="t-body text-ink w-full border-separate border-spacing-y-2 text-left">
          <caption className="sr-only">Lead research by hand and with EmailMagnet</caption>
          <thead className="max-md:sr-only">
            <tr>
              <th scope="col" className="t-lead px-5 pb-2 font-semibold md:w-1/2">
                By hand
              </th>
              <th scope="col" className="t-lead px-5 pb-2 font-semibold">
                With EmailMagnet
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.manual} className="max-md:flex max-md:flex-col">
                <td className="bg-surface-muted px-5 py-5 align-top">{row.manual}</td>
                <td className="bg-brand px-5 py-5 align-top font-medium">{row.withIt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-16">
          <FeatureList items={values} />
        </div>
      </SideSection>

      <Steps
        title="Research, review, export"
        lead="Built for the pages you are already evaluating: the tool speeds up collecting, you keep control of quality."
        steps={steps}
        picture={{
          src: "/brand/emailmagnet-how-it-works.webp",
          alt: "How EmailMagnet works: the emails on a web page's contact cards fly to a magnet and end up in a CSV file",
          width: 1299,
          height: 417,
        }}
      />

      <section id="reviews" className="bg-background">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <div className="space-y-5 lg:pr-12">
            <h2 data-reveal className="t-2 text-ink">
              What early users say
            </h2>
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[36ch]">
              Every review so far is five stars. Quoted as written on the Chrome Web Store.
            </p>
            <a
              data-reveal
              style={d(2)}
              href={emailMagnetConfig.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link text-ink inline-block text-base font-medium"
            >
              Read the reviews on the store
            </a>
          </div>
          <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
            {emailMagnetTestimonials.map((item, i) => (
              <figure key={item.name} data-reveal style={d(i + 1)} className={i === 0 ? "md:col-span-2" : ""}>
                <blockquote className={i === 0 ? "t-3 t-3-compact text-ink max-w-[40ch]" : "t-lead text-ink max-w-[40ch]"}>
                  <p>“{item.quote}”</p>
                </blockquote>
                <figcaption className="t-body text-ink mt-4">{item.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SideSection
        id="plans"
        tone="muted"
        title="Start free, upgrade when it is weekly"
        lead="Free is the whole workflow. PRO is for recurring research sessions."
        aside={
          <div className="space-y-3">
            <h3 className="t-lead text-ink font-semibold">PRO is worth it when</h3>
            <ul className="t-body text-ink list-disc space-y-2 pl-5">
              {proTriggers.map((trigger) => (
                <li key={trigger}>{trigger}</li>
              ))}
            </ul>
          </div>
        }
      >
        <PlanPanels plans={plans} onMuted />
        <p className="t-body text-ink mt-6 max-w-[60ch]">
          Billing details are shown at checkout. Compare the plans side by side on the{" "}
          <LocaleLink href="/pricing" className="text-link font-medium">
            pricing page
          </LocaleLink>
          .
        </p>
      </SideSection>

      <SideSection
        title="Responsible by design"
        lead="Built for public contact research on pages you can access and review."
      >
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          <p className="t-lead text-ink max-w-[46ch]">
            The extension helps with collecting and exporting. Your team decides the lawful purpose,
            qualification, storage, outreach policy and opt-out handling.
          </p>
          <div className="space-y-3">
            <h3 className="t-lead text-ink font-semibold">Not for</h3>
            <ul className="t-body text-ink list-disc space-y-2 pl-5">
              {notFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <LocaleLink href="/docs/responsible-use" className="text-link text-ink inline-block pt-2 text-base font-medium">
              Read the responsible use guide
            </LocaleLink>
          </div>
        </div>
      </SideSection>

      <SideSection
        id="faq"
        title="Questions before you start"
        aside={<RelatedLinks title="Guides and help" ariaLabel="EmailMagnet guides and help pages" links={related} />}
      >
        <FaqTiles items={faqItems.slice(0, 6)} />
      </SideSection>

      <ProductShowcase
        products={products}
        lang="en"
        title="More from the studio"
        caption="We build, publish and maintain our products ourselves."
        overviewLink={home.products.overviewLink}
        exclude="/emailmagnet"
        limit={2}
      />

      <ProposalClose closing={home.closing} actionHref="/#brief" />
    </>
  );
}
