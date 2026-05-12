import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";

type GlossaryPageProps = {
  params: Promise<{ term: string }>;
};

export async function generateMetadata({ params }: GlossaryPageProps) {
  const { term } = await params;
  return createMetadata({
    title: `Glossary: ${term.replaceAll("-", " ")}`,
    description: `Plain-language definition of ${term.replaceAll("-", " ")} in EmailMagnet workflows.`,
    path: `/glossary/${term}`,
  });
}

export default async function GlossaryPage({ params }: GlossaryPageProps) {
  const { term } = await params;
  const label = term.replaceAll("-", " ");
  return (
    <PlannedContentPage
      eyebrow="Glossary"
      title={`What is ${label}?`}
      description={`A plain-language definition of ${label} in the context of EmailMagnet and browser-based extraction.`}
      items={[
        "Clear definition",
        "How it applies inside EmailMagnet",
        "Responsible-use guidance",
        "Related docs, pricing, FAQ, and blog links",
      ]}
    />
  );
}
