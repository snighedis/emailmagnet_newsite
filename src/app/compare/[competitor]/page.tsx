import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";

type ComparePageProps = {
  params: Promise<{ competitor: string }>;
};

export async function generateMetadata({ params }: ComparePageProps) {
  const { competitor } = await params;
  return createMetadata({
    title: `EmailMagnet vs ${competitor.replaceAll("-", " ")}`,
    description: `Practical comparison of EmailMagnet and ${competitor.replaceAll("-", " ")} for workflow fit, effort, and export outcomes.`,
    path: `/compare/${competitor}`,
  });
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { competitor } = await params;
  const label = competitor.replaceAll("-", " ");
  return (
    <PlannedContentPage
      eyebrow="Comparison"
      title={`EmailMagnet vs ${label}`}
      description="A clear side-by-side view focused on workflow fit, output quality, and operational effort."
      items={[
        "What EmailMagnet does best",
        `Where ${label} is commonly used`,
        "Workflow speed and setup complexity",
        "Pricing model and export differences",
      ]}
    />
  );
}
