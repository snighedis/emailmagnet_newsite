import { ReviewAndExport } from "@/components/marketing/emailmagnet-ui";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { PageOpening, RelatedLinks, ShortAnswer, SideSection, Steps } from "@/components/marketing/editorial";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { getCopy, getPageCopy } from "@/copy";
import { emailMagnetConfig } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "EmailMagnet Documentation",
  description:
    "Use the EmailMagnet documentation hub to install the Chrome extension, run your first extraction, export CSV or TXT files, and work responsibly.",
  path: "/docs",
});

const docs = [
  {
    slug: "getting-started",
    title: "Getting started",
    description:
      "Install EmailMagnet in Chrome, open a relevant website, extract visible emails, and export your first clean contact list in minutes.",
    bestFor: "New users who want to understand the basic browser workflow.",
  },
  {
    slug: "exporting-emails",
    title: "Exporting emails",
    description:
      "Choose CSV or TXT exports in EmailMagnet, review detected addresses, and prepare cleaner contact lists for spreadsheets or handoff.",
    bestFor: "Users preparing spreadsheets, CRM imports, or lightweight email lists.",
  },
  {
    slug: "responsible-use",
    title: "Responsible use",
    description:
      "Use EmailMagnet responsibly by checking source context, qualifying addresses, respecting privacy rules, and avoiding automatic outreach.",
    bestFor: "Teams that need source context, qualification, and responsible contact handling.",
  },
];

const related = [
  { label: "EmailMagnet product page", href: "/emailmagnet" },
  { label: "EmailMagnet FAQ", href: "/faq" },
  { label: "EmailMagnet pricing", href: "/pricing" },
  { label: "Contact support", href: "/contact" },
];

/**
 * Docs (redesign: inner pages in the homepage's system). The title with the
 * standfirst beside it, the short answer, the three steps on the orange with
 * their illustration, the guides in reading order as filled rows, the products
 * and the proposal.
 */
export default function DocsPage() {
  const { home } = getPageCopy("en");
  const { products } = getCopy("en").site;

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Docs", href: "/docs" },
        ])}
      />
      <JsonLd
        data={buildItemListSchema(
          "EmailMagnet documentation",
          docs.map((doc) => ({ name: doc.title, href: `/docs/${doc.slug}`, description: doc.description })),
        )}
      />
      <HomeReveal />

      <PageOpening
        title={["EmailMagnet", "documentation."]}
        standfirst="Clear guides for installing the extension, exporting your lists and using collected contacts responsibly."
        primary={{ label: "Start with the first guide", href: "/docs/getting-started" }}
        secondary={{ label: "Add to Chrome, free", href: emailMagnetConfig.secondaryCta.href }}
      />

      <ShortAnswer
        title="In short"
        body="Three guides: how to install EmailMagnet and run a first extraction, how to export the results, and how to use collected contacts responsibly."
      />

      <Steps
        title="Install, extract, export"
        lead="The whole workflow in three steps. The guides below go through each one."
        steps={[
          { title: "Install", description: "Add the extension to Chrome from the Chrome Web Store." },
          { title: "Extract", description: "Open a page you are researching and run EmailMagnet." },
          { title: "Export", description: "Download the reviewed list as CSV or TXT." },
        ]}
        figure={<ReviewAndExport />}
      />

      <SideSection
        title="Three guides, in order"
        lead="Read them in this order: the workflow first, then exporting, then responsible use before any outreach."
        aside={<RelatedLinks title="Related pages" ariaLabel="EmailMagnet related pages" links={related} />}
      >
        <ol className="space-y-2">
          {docs.map((doc) => (
            <li key={doc.slug} className="bg-surface-muted text-ink">
              <LocaleLink href={`/docs/${doc.slug}`} className="group block p-6 md:p-8">
                <span className="t-3 block underline-offset-[0.2em] group-hover:underline">{doc.title}</span>
                <span className="t-body mt-3 block max-w-[60ch]">{doc.description}</span>
                <span className="t-body mt-3 block max-w-[60ch]">
                  <strong className="font-semibold">Best for:</strong> {doc.bestFor}
                </span>
              </LocaleLink>
            </li>
          ))}
        </ol>
      </SideSection>

      <ProductShowcase
        products={products}
        lang="en"
        title={home.products.title}
        caption={home.products.caption}
        overviewLink={home.products.overviewLink}
      />

      <ProposalClose closing={home.closing} actionHref="/#brief" />
    </>
  );
}
