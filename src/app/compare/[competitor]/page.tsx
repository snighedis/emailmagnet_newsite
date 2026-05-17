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
        body: "Manual copying is acceptable for one or two contacts, especially when no export or repeat workflow is needed.",
      },
      {
        title: "When EmailMagnet is the better fit",
        body: "EmailMagnet is better when the user is reviewing directories, contact pages, partner pages, or public profiles and needs a repeatable browser-based extraction workflow.",
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
    />
  );
}
