import { PlaceholderPage } from "@/components/marketing/placeholder-page";
import { createMetadata } from "@/lib/metadata";

type GlossaryPageProps = {
  params: Promise<{ term: string }>;
};

export async function generateMetadata({ params }: GlossaryPageProps) {
  const { term } = await params;
  return createMetadata({
    title: `Glossary: ${term.replaceAll("-", " ")}`,
    description: `EmailMagnet glossary placeholder for ${term.replaceAll("-", " ")} and related email extraction concepts.`,
    path: `/glossary/${term}`,
  });
}

export default async function GlossaryPage({ params }: GlossaryPageProps) {
  const { term } = await params;
  const label = term.replaceAll("-", " ");
  return (
    <PlaceholderPage
      eyebrow="Glossary"
      title={`What is ${label}?`}
      description={`This glossary page is reserved for a clear, answer-first definition of ${label} in the context of EmailMagnet and browser-based email extraction.`}
      items={[
        "Definition placeholder",
        "How it relates to EmailMagnet placeholder",
        "Responsible use notes placeholder",
        "Internal links to docs, pricing, FAQ, and relevant blog posts placeholder",
      ]}
    />
  );
}
