import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const useCases = {
  "emailmagnet-sales-prospecting": {
    label: "sales prospecting",
    answer:
      "EmailMagnet supports sales prospecting by extracting visible emails from relevant websites while the user browses, then exporting qualified contacts for review and follow-up.",
    sections: [
      {
        title: "Best-fit prospecting sources",
        body: "Use EmailMagnet on public company pages, partner directories, event listings, vendor pages, and contact pages where source context is clear.",
      },
      {
        title: "Qualification before outreach",
        body: "Extracted contacts should be filtered by role, source relevance, confidence level, and outreach purpose before any message is sent.",
      },
    ],
  },
} satisfies Record<string, { label: string; answer: string; sections: Array<{ title: string; body: string }> }>;

type UseCasePageProps = {
  params: Promise<{ "use-case": string }>;
};

export async function generateMetadata({ params }: UseCasePageProps) {
  const resolved = await params;
  const useCase = resolved["use-case"];
  const page = useCases[useCase as keyof typeof useCases];
  if (!page) {
    return {
      title: "Use case not found",
      description: "The requested EmailMagnet use case page could not be found.",
    };
  }
  return createMetadata({
    title: `EmailMagnet for ${page.label}`,
    description: `Use EmailMagnet for ${page.label} by extracting visible website emails, qualifying source context, exporting clean lists, and preparing outreach.`,
    path: `/use-cases/${useCase}`,
  });
}

export function generateStaticParams() {
  return Object.keys(useCases).map((useCase) => ({ "use-case": useCase }));
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const resolved = await params;
  const page = useCases[resolved["use-case"] as keyof typeof useCases];
  if (!page) {
    notFound();
  }
  return (
    <PlannedContentPage
      eyebrow="Use case"
      title={`Email extraction for ${page.label}`}
      description={`A practical EmailMagnet workflow for teams focused on ${page.label}.`}
      answer={page.answer}
      items={[
        "Who this workflow is designed for",
        "Step-by-step process from browsing to export",
        "Free and PRO fit by workload level",
        "Responsible outreach and compliance checklist",
      ]}
      sections={page.sections}
    />
  );
}
