import { PlaceholderPage } from "@/components/marketing/placeholder-page";
import { createMetadata } from "@/lib/metadata";

type ComparePageProps = {
  params: Promise<{ competitor: string }>;
};

export async function generateMetadata({ params }: ComparePageProps) {
  const { competitor } = await params;
  return createMetadata({
    title: `EmailMagnet vs ${competitor.replaceAll("-", " ")}`,
    description: `Comparison placeholder for EmailMagnet and ${competitor.replaceAll("-", " ")} with factual, citation-friendly sections.`,
    path: `/compare/${competitor}`,
  });
}

export default async function ComparePage({ params }: ComparePageProps) {
  const { competitor } = await params;
  const label = competitor.replaceAll("-", " ");
  return (
    <PlaceholderPage
      eyebrow="Comparison"
      title={`EmailMagnet vs ${label}`}
      description="This comparison page is structured for future factual content without unsupported claims about competitors."
      items={[
        "What EmailMagnet does placeholder",
        `What ${label} represents placeholder`,
        "Best-fit workflow comparison placeholder",
        "Pricing and export differences placeholder",
      ]}
    />
  );
}
