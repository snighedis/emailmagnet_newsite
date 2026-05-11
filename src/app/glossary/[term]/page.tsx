import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";

type GlossaryPageProps = {
  params: Promise<{ term: string }>;
};

export async function generateMetadata({ params }: GlossaryPageProps) {
  const { term } = await params;
  return createMetadata({
    title: `Glossary: ${term.replaceAll("-", " ")}`,
    description: `EmailMagnet glossary page for ${term.replaceAll("-", " ")} and related email extraction concepts.`,
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
      description={`This glossary page defines ${label} in the context of EmailMagnet and browser-based email extraction.`}
      items={[
        "Definition",
        "How it relates to EmailMagnet",
        "Responsible use notes",
        "Related docs, pricing, FAQ, and blog links",
      ]}
    />
  );
}
