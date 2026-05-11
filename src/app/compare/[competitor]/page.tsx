import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";

type ComparePageProps = {
  params: Promise<{ competitor: string }>;
};

export async function generateMetadata({ params }: ComparePageProps) {
  const { competitor } = await params;
  return createMetadata({
    title: `EmailMagnet vs ${competitor.replaceAll("-", " ")}`,
    description: `Comparison page for EmailMagnet and ${competitor.replaceAll("-", " ")} with factual, citation-friendly sections.`,
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
      description="This comparison page is structured for factual content without unsupported claims about competitors."
      items={[
        "What EmailMagnet does",
        `What ${label} represents`,
        "Best-fit workflow comparison",
        "Pricing and export differences",
      ]}
    />
  );
}
