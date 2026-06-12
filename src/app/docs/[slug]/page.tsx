import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/marketing/json-ld";
import { createMetadata } from "@/lib/metadata";
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
      "EmailMagnet is a Chrome extension for extracting emails while browsing. Install it from the Chrome Web Store, open a website, run extraction, then export the detected emails as CSV or TXT.",
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
    dateModified: "2026-06-08",
    description:
      "Learn when to export EmailMagnet results as CSV or TXT, how to review addresses first, and how to prepare cleaner lists for spreadsheets or CRM handoff.",
    answer:
      "EmailMagnet exports detected website emails as CSV or TXT so the list can move into spreadsheets, CRM preparation, research notes, or follow-up workflows.",
    steps: [
      "Free plan: export up to 100 emails at once.",
      "PRO plan: unlimited export size.",
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
      "EmailMagnet helps collect emails, but users are responsible for lawful purpose, relevant outreach, opt-out handling, and compliance with privacy and anti-spam rules.",
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

  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
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
      <p className="text-sm font-semibold uppercase tracking-wide text-eyebrow">Docs</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">{doc.title}</h1>
      <p className="mt-4 text-sm font-medium text-slate-500">
        Published {doc.datePublished} · Last updated {doc.dateModified}
      </p>
      <p className="mt-5 text-xl leading-8 text-slate-600">{doc.description}</p>
      <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-5">
        <h2 className="text-lg font-semibold text-slate-950">Quick answer</h2>
        <p className="mt-2 leading-7 text-slate-700">{doc.answer}</p>
      </div>
      <h2 className="mt-12 text-2xl font-semibold text-slate-950">Step-by-step workflow</h2>
      <ol className="mt-5 space-y-4">
        {doc.steps.map((item) => (
          <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-slate-700">
            {item}
          </li>
        ))}
      </ol>
      <div className="mt-12 space-y-8">
        {doc.details.map((item) => (
          <section key={item.title}>
            <h2 className="text-2xl font-semibold text-slate-950">{item.title}</h2>
            <p className="mt-3 leading-8 text-slate-600">{item.body}</p>
          </section>
        ))}
      </div>
      {doc.citation ? (
        <p className="mt-10 text-sm leading-6 text-slate-500">
          Official reference:{" "}
          <Link className="font-medium text-eyebrow underline-offset-4 hover:underline" href={doc.citation.href}>
            {doc.citation.label}
          </Link>
        </p>
      ) : null}
      <nav aria-label="Documentation related pages" className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-950">Related EmailMagnet resources</h2>
        <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <li>
            <Link className="font-medium text-eyebrow hover:underline" href="/emailmagnet">
              EmailMagnet product page
            </Link>
          </li>
          <li>
            <Link className="font-medium text-eyebrow hover:underline" href="/docs">
              All EmailMagnet docs
            </Link>
          </li>
          <li>
            <Link className="font-medium text-eyebrow hover:underline" href="/faq">
              EmailMagnet FAQ
            </Link>
          </li>
          <li>
            <Link className="font-medium text-eyebrow hover:underline" href="/contact">
              Contact Dentoku Dev support
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
}
