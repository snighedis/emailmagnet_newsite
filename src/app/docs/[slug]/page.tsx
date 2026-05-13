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
    answer: string;
    steps: string[];
    details: Array<{ title: string; body: string }>;
    citation?: { label: string; href: string };
  }
> = {
  "getting-started": {
    title: "Getting started with EmailMagnet",
    description: "Install EmailMagnet, open a page, and export results in minutes.",
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
        body: "Use public contact pages, directories, team pages, or event listings where the source context explains why an email address appears.",
      },
      {
        title: "Extract before organizing",
        body: "Let EmailMagnet collect detected emails first, then review, qualify, and export the final list.",
      },
      {
        title: "Use exports as a handoff step",
        body: "CSV works well for spreadsheets and CRM prep. TXT works well when you need a clean lightweight list.",
      },
    ],
    citation: {
      label: "Chrome Web Store extension policies",
      href: "https://developer.chrome.google.cn/docs/webstore/program-policies/policies",
    },
  },
  "exporting-emails": {
    title: "Exporting emails",
    description: "Export workflows for CSV and TXT in EmailMagnet.",
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
        body: "Use CSV when the next step is sorting, filtering, deduplication, or handoff to a spreadsheet or CRM import workflow.",
      },
      {
        title: "Choose TXT for lightweight lists",
        body: "Use TXT when you need a simple line-by-line list for quick review or manual processing.",
      },
      {
        title: "Review before outreach",
        body: "Exports should be qualified before messages are sent. Remove duplicates, irrelevant contacts, and outdated records.",
      },
    ],
  },
  "responsible-use": {
    title: "Responsible use",
    description: "Use EmailMagnet in compliance with privacy and anti-spam rules.",
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
        body: "Keep the source URL, extraction date, and reason for collecting each list so your team can explain where contacts came from.",
      },
      {
        title: "Filter before sending",
        body: "Do not turn raw extraction into automatic outreach. Review fit, remove low-confidence contacts, and respect opt-out requests.",
      },
      {
        title: "Use official compliance references",
        body: "Privacy and anti-spam requirements vary by jurisdiction. Use official sources and legal advice when workflows involve regulated data.",
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
      <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">Docs</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">{doc.title}</h1>
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
          <Link className="font-medium text-[#c43618] underline-offset-4 hover:underline" href={doc.citation.href}>
            {doc.citation.label}
          </Link>
        </p>
      ) : null}
      <nav aria-label="Documentation related pages" className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-950">Related EmailMagnet resources</h2>
        <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
          <li>
            <Link className="font-medium text-[#c43618] hover:underline" href="/emailmagnet">
              EmailMagnet product page
            </Link>
          </li>
          <li>
            <Link className="font-medium text-[#c43618] hover:underline" href="/docs">
              All EmailMagnet docs
            </Link>
          </li>
          <li>
            <Link className="font-medium text-[#c43618] hover:underline" href="/faq">
              EmailMagnet FAQ
            </Link>
          </li>
          <li>
            <Link className="font-medium text-[#c43618] hover:underline" href="/contact">
              Contact Dentoku Dev support
            </Link>
          </li>
        </ul>
      </nav>
    </article>
  );
}
