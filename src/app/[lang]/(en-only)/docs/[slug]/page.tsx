import { notFound } from "next/navigation";
import { RelatedLinks, ShortAnswer, SideSection, d } from "@/components/marketing/editorial";
import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { getCopy, getPageCopy } from "@/copy";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import Image from "next/image";
import { LocaleLink } from "@/i18n/locale-link";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/dates";
import { buildBreadcrumbSchema, buildHowToSchema } from "@/lib/schema";

const docs: Record<
  string,
  {
    title: string;
    description: string;
    datePublished: string;
    dateModified: string;
    answer: string;
    steps: string[];
    details: Array<{ title: string; body: string }>;
    citation?: { label: string; href: string };
  }
> = {
  "getting-started": {
    title: "Getting started with EmailMagnet",
    datePublished: "2026-05-11",
    dateModified: "2026-06-08",
    description:
      "Install EmailMagnet in Chrome, open a relevant website, extract visible emails, review results, and export your first contact list in minutes.",
    answer:
      "Install EmailMagnet from the Chrome Web Store, open a website, run the extraction, then export the emails it found as CSV or TXT.",
    steps: [
      "Install the EmailMagnet Chrome extension.",
      "Open the website pages you already review.",
      "Run extraction and export the results as CSV or TXT.",
    ],
    details: [
      {
        title: "Start from a page with clear context",
        body: "Use public contact pages, directories, team pages, or event listings where the source context explains why an email address appears. A source with clear context makes the exported list easier to qualify later because you can connect each address to a company, role, event, or business reason.",
      },
      {
        title: "Extract before organizing",
        body: "Let EmailMagnet collect detected emails first, then review, qualify, and export the final list. Separating extraction from qualification keeps the browser workflow fast while still leaving room for human judgment before outreach.",
      },
      {
        title: "Use exports as a handoff step",
        body: "CSV works well for spreadsheets, CRM preparation, deduplication, and team review. TXT works well when you need a clean lightweight list for manual processing, internal notes, or a quick check before importing contacts elsewhere.",
      },
    ],
    citation: {
      label: "Chrome Web Store extension policies",
      href: "https://developer.chrome.google.cn/docs/webstore/program-policies/policies",
    },
  },
  "exporting-emails": {
    title: "Exporting Emails with EmailMagnet",
    datePublished: "2026-05-11",
    dateModified: "2026-10-26",
    description:
      "Learn when to export EmailMagnet results as CSV or TXT, how to review addresses first, and how to prepare cleaner lists for spreadsheets or CRM handoff.",
    answer:
      "EmailMagnet exports the emails it found as CSV or TXT, ready for spreadsheets, CRM preparation, research notes or follow-up.",
    steps: [
      "No limit on export size, on Free or PRO.",
      "Supported formats: CSV and TXT.",
    ],
    details: [
      {
        title: "Choose CSV for structured work",
        body: "Use CSV when the next step is sorting, filtering, deduplication, or handoff to a spreadsheet or CRM import workflow. A structured export is easier to enrich with company name, source URL, role, confidence score, and outreach reason.",
      },
      {
        title: "Choose TXT for lightweight lists",
        body: "Use TXT when you need a simple line-by-line list for quick review or manual processing. TXT is useful for internal notes, fast cleanup, and cases where the next tool expects a plain list rather than spreadsheet columns.",
      },
      {
        title: "Review before outreach",
        body: "Exports should be qualified before messages are sent. Remove duplicates, irrelevant contacts, outdated records, malformed addresses, and contacts that do not match the reason you collected the list in the first place.",
      },
    ],
  },
  "responsible-use": {
    title: "Responsible Email Extraction Guide",
    datePublished: "2026-05-11",
    dateModified: "2026-06-08",
    description:
      "Use EmailMagnet responsibly by documenting source context, qualifying emails before outreach, respecting opt-outs, and following privacy and anti-spam rules.",
    answer:
      "EmailMagnet helps you collect emails. Lawful purpose, relevant outreach, opt-outs and privacy and anti-spam rules stay your responsibility.",
    steps: [
      "Follow applicable laws such as GDPR and CAN-SPAM.",
      "Contact people with legitimate, relevant intent.",
      "Keep records accurate and remove outdated entries.",
    ],
    details: [
      {
        title: "Document source context",
        body: "Keep the source URL, extraction date, and reason for collecting each list so your team can explain where contacts came from. This is especially important when the list is handed to another person, uploaded to a CRM, or revisited weeks after the original research session.",
      },
      {
        title: "Filter before sending",
        body: "Do not turn raw extraction into automatic outreach. Review fit, remove low-confidence contacts, exclude irrelevant personal addresses, and respect opt-out requests. The safest workflow treats extraction as research input, not as permission to message every detected address.",
      },
      {
        title: "Use official compliance references",
        body: "Privacy and anti-spam requirements vary by jurisdiction. Use official sources and legal advice when workflows involve regulated data, cross-border campaigns, personal data, or recurring outreach lists.",
      },
    ],
    citation: {
      label: "FTC CAN-SPAM compliance guide",
      href: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business",
    },
  },
};

const related = [
  { label: "EmailMagnet product page", href: "/emailmagnet" },
  { label: "EmailMagnet FAQ", href: "/faq" },
  { label: "EmailMagnet pricing", href: "/pricing" },
  { label: "Contact Dentoku Dev support", href: "/contact" },
];

/** An in-page anchor from a section title. */
const anchor = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

type DocPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(docs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = docs[slug];
  return createMetadata({
    title: doc?.title ?? "Documentation",
    description: doc?.description ?? "EmailMagnet documentation page.",
    path: `/docs/${slug}`,
  });
}

export default async function DocPage({ params }: DocPageProps) {
  const { slug } = await params;
  const doc = docs[slug];

  if (!doc) {
    notFound();
  }

  const others = Object.entries(docs).filter(([key]) => key !== slug);
  const { home } = getPageCopy("en");

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Docs", href: "/docs" },
          { name: doc.title, href: `/docs/${slug}` },
        ])}
      />
      <JsonLd
        data={buildHowToSchema({
          name: doc.title,
          description: doc.description,
          path: `/docs/${slug}`,
          steps: doc.steps,
        })}
      />
      <HomeReveal />

      <section className="bg-background">
        <div className="page-x axis gap-y-8 pt-12 pb-14 md:pt-20 md:pb-16">
          <div className="space-y-6 lg:col-start-2 lg:row-start-1">
            <h1 className="t-article text-ink">{doc.title}</h1>
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[52ch]">
              {doc.description}
            </p>
          </div>
          <div data-reveal style={d(2)} className="t-body text-ink space-y-3 lg:col-start-1 lg:row-start-1 lg:self-end lg:pr-12">
            <LocaleLink href="/docs" className="text-link block w-fit font-medium">
              All EmailMagnet docs
            </LocaleLink>
            <p>
              Published <time dateTime={doc.datePublished}>{formatDate(doc.datePublished)}</time>.
              <br />
              Last updated <time dateTime={doc.dateModified}>{formatDate(doc.dateModified)}</time>.
            </p>
          </div>
        </div>
        <div className="page-x axis pb-20 md:pb-28">
          <figure data-reveal style={d(3)} className="bg-surface-muted lg:col-start-2">
            <Image
              src="/brand/emailmagnet-one-click.webp"
              alt="EmailMagnet's popup listing the business emails found on a web page, with CSV and TXT export"
              width={1280}
              height={800}
              priority
              sizes="(min-width: 1024px) 56vw, 92vw"
              className="h-auto w-full"
            />
          </figure>
        </div>
      </section>

      <ShortAnswer title="Quick answer" body={doc.answer} />

      <section className="bg-brand text-ink">
        <div className="page-x axis gap-y-8 py-20 md:py-28">
          <h2 data-reveal className="t-2 lg:pr-12">
            At a glance
          </h2>
          <ol className="list-decimal space-y-4 pl-8">
            {doc.steps.map((item, i) => (
              <li key={item} data-reveal style={d(i + 1)} className="t-3 t-3-compact max-w-[40ch] pl-2">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <nav aria-label="On this page" className="space-y-3 lg:sticky lg:top-24 lg:self-start lg:pr-12">
            <h2 className="t-lead text-ink font-semibold">On this page</h2>
            <ul className="t-body text-ink space-y-2">
              {doc.details.map((item) => (
                <li key={item.title}>
                  <a href={`#${anchor(item.title)}`} className="text-link">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="max-w-[62ch] space-y-14">
            {doc.details.map((item, i) => (
              <section key={item.title} id={anchor(item.title)} className="scroll-mt-24">
                <h2 data-reveal style={d(i % 2)} className="t-3 text-ink">
                  {item.title}
                </h2>
                <p data-reveal style={d((i % 2) + 1)} className="t-lead text-ink mt-4">
                  {item.body}
                </p>
              </section>
            ))}
            {doc.citation ? (
              <p className="t-body text-ink">
                Official reference:{" "}
                <a href={doc.citation.href} target="_blank" rel="noopener noreferrer" className="text-link font-medium">
                  {doc.citation.label}
                </a>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <SideSection
        tone="muted"
        title="Keep reading"
        aside={<RelatedLinks title="Related pages" ariaLabel="Documentation related pages" links={related} />}
      >
        <ul className="space-y-2">
          {others.map(([key, other]) => (
            <li key={key} className="bg-background text-ink">
              <LocaleLink href={`/docs/${key}`} className="group block p-6 md:p-8">
                <span className="t-3 block underline-offset-[0.2em] group-hover:underline">{other.title}</span>
                <span className="t-body mt-2 block max-w-[60ch]">{other.description}</span>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </SideSection>

      <ProductShowcase
        products={getCopy("en").site.products}
        lang="en"
        title={home.products.title}
        caption={home.products.caption}
        overviewLink={home.products.overviewLink}
      />

      <ProposalClose closing={home.closing} actionHref="/#brief" />
    </>
  );
}
