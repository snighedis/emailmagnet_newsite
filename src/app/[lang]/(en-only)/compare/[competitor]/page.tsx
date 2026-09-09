import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const comparisons = {
  "manual-email-copying": {
    label: "manual email copying",
    answer:
      "EmailMagnet is faster than manual email copying when a user needs to collect multiple visible email addresses from websites and export them consistently as CSV or TXT.",
    sections: [
      {
        title: "When manual copying works",
        body: "Manual copying is acceptable for one or two contacts, especially when no export or repeat workflow is needed. It can also be the right choice when the page has sensitive context that requires careful reading before any address is saved.",
      },
      {
        title: "When EmailMagnet is the better fit",
        body: "EmailMagnet is better when the user is reviewing directories, contact pages, partner pages, or public profiles and needs a repeatable browser-based extraction workflow. The advantage is not just speed; it is consistency, cleaner exports, and fewer copy-paste mistakes across a research session.",
      },
      {
        title: "Workflow difference",
        body: "Manual copying mixes discovery, selection, formatting, and list management into one fragile task. EmailMagnet separates those jobs: browse the page, detect visible emails, review the result, then export the list as CSV or TXT for qualification.",
      },
      {
        title: "Data quality tradeoff",
        body: "Neither workflow decides whether a contact should receive a message. Manual copying gives maximum control but becomes inconsistent at scale. EmailMagnet creates a cleaner starting list, but the user still needs to remove irrelevant addresses and document source context.",
      },
      {
        title: "Best decision rule",
        body: "Use manual copying for isolated addresses. Use EmailMagnet when you are reviewing multiple pages, repeating the same research task, building a spreadsheet, or handing contacts to another person for review.",
      },
    ],
  },
} satisfies Record<string, { label: string; answer: string; sections: Array<{ title: string; body: string }> }>;

type ComparePageProps = {
  params: Promise<{ competitor: string }>;
};

export async function generateMetadata({ params }: ComparePageProps) {
  const { competitor } = await params;
  const comparison = comparisons[competitor as keyof typeof comparisons];
  if (!comparison) {
    return {
      title: "Comparison not found",
      description: "The requested EmailMagnet comparison page could not be found.",
    };
  }
  return createMetadata({
    title: `EmailMagnet vs ${comparison.label}`,
    description: `Compare EmailMagnet with ${comparison.label} for speed, workflow effort, data quality, CSV and TXT exports, and when manual collection still makes sense.`,
    path: `/compare/${competitor}`,
  });
}

export function generateStaticParams() {
  return Object.keys(comparisons).map((competitor) => ({ competitor }));
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { competitor } = await params;
  const comparison = comparisons[competitor as keyof typeof comparisons];
  if (!comparison) {
    notFound();
  }
  return (
    <PlannedContentPage
      eyebrow="Comparison"
      title={`EmailMagnet vs ${comparison.label}`}
      description="A clear side-by-side view focused on workflow fit, output quality, and operational effort."
      answer={comparison.answer}
      items={[
        "What EmailMagnet does best",
        `Where ${comparison.label} is commonly used`,
        "Workflow speed and setup complexity",
        "Pricing model and export differences",
      ]}
      sections={comparison.sections}
      currentHref={`/compare/${competitor}`}
    />
  );
}
