import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";

const docs: Record<string, { title: string; description: string; body: string[] }> = {
  "getting-started": {
    title: "Getting started with EmailMagnet",
    description: "Install EmailMagnet, browse a website, and extract emails in one click.",
    body: ["Install the Chrome Extension.", "Open a website you need to review.", "Use EmailMagnet to detect emails and export the result."],
  },
  "exporting-emails": {
    title: "Exporting emails",
    description: "Placeholder documentation for CSV and TXT exports in EmailMagnet.",
    body: ["Free plan: export up to 100 emails at once.", "PRO plan: unlimited export size.", "Supported export formats: CSV and TXT."],
  },
  "responsible-use": {
    title: "Responsible use",
    description: "Use EmailMagnet in compliance with privacy and anti-spam rules.",
    body: ["Respect applicable laws such as GDPR and CAN-SPAM.", "Avoid abusive outreach.", "Keep records clean and relevant."],
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
      <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">Docs</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">{doc.title}</h1>
      <p className="mt-5 text-xl leading-8 text-slate-600">{doc.description}</p>
      <ul className="mt-10 space-y-4">
        {doc.body.map((item) => (
          <li key={item} className="rounded-md border border-slate-200 bg-white p-4 text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
