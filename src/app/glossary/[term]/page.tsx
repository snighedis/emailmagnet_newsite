import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const glossary = {
  "email-extraction": {
    label: "email extraction",
    answer:
      "Email extraction is the process of detecting and collecting email addresses from website content so they can be reviewed, qualified, and exported for a specific workflow.",
    sections: [
      {
        title: "Email extraction inside EmailMagnet",
        body: "EmailMagnet focuses on browser-based extraction: users open a page, detect visible emails, review the results, and export the list as CSV or TXT. It is designed for people who already inspect websites manually and want a cleaner way to capture addresses they can see.",
      },
      {
        title: "Responsible email extraction",
        body: "Extraction should be paired with source context, lawful purpose, list cleanup, and opt-out handling before outreach begins. The extraction step creates a draft contact list; it does not decide whether each address is relevant or appropriate to contact.",
      },
      {
        title: "Common source pages",
        body: "Common sources include public contact pages, team directories, partner listings, event pages, vendor profiles, and company pages where the page itself gives context for the address.",
      },
      {
        title: "What extraction does not mean",
        body: "Email extraction is not the same as automatic scraping, enrichment, verification, or outreach. Those are separate steps with different risks and responsibilities.",
      },
      {
        title: "Useful related terms",
        body: "Related concepts include CSV export, TXT export, deduplication, source URL tracking, confidence scoring, legitimate interest, opt-out handling, and CRM import preparation.",
      },
    ],
  },
} satisfies Record<string, { label: string; answer: string; sections: Array<{ title: string; body: string }> }>;

type GlossaryPageProps = {
  params: Promise<{ term: string }>;
};

export async function generateMetadata({ params }: GlossaryPageProps) {
  const { term } = await params;
  const page = glossary[term as keyof typeof glossary];
  if (!page) {
    return {
      title: "Glossary term not found",
      description: "The requested EmailMagnet glossary page could not be found.",
    };
  }
  return createMetadata({
    title: `What is ${page.label}?`,
    description: `Plain-language definition of ${page.label} for EmailMagnet users, including browser-based extraction, list review, and responsible outreach workflows.`,
    path: `/glossary/${term}`,
  });
}

export function generateStaticParams() {
  return Object.keys(glossary).map((term) => ({ term }));
}

export default async function GlossaryPage({ params }: GlossaryPageProps) {
  const { term } = await params;
  const page = glossary[term as keyof typeof glossary];
  if (!page) {
    notFound();
  }
  return (
    <PlannedContentPage
      eyebrow="Glossary"
      title={`What is ${page.label}?`}
      description={`A plain-language definition of ${page.label} in the context of EmailMagnet and browser-based extraction.`}
      answer={page.answer}
      items={[
        "Clear definition",
        "How it applies inside EmailMagnet",
        "Responsible-use guidance",
        "Related docs, pricing, FAQ, and blog links",
      ]}
      sections={page.sections}
    />
  );
}
