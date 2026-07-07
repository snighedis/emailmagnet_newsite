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
        body: "Use EmailMagnet on public company pages, partner directories, event listings, vendor pages, and contact pages where source context is clear. These sources are easier to qualify because the page explains why the contact exists and how it relates to the business.",
      },
      {
        title: "Qualification before outreach",
        body: "Extracted contacts should be filtered by role, source relevance, confidence level, and outreach purpose before any message is sent. A smaller list with clear source context usually performs better than a larger list with unclear intent.",
      },
      {
        title: "Practical sales workflow",
        body: "A simple prospecting workflow is: review a relevant website, extract visible emails, export CSV, add source URL and company notes, remove poor-fit contacts, then write outreach based on the source context. EmailMagnet helps with the extraction step; it does not replace qualification.",
      },
      {
        title: "Free vs PRO fit",
        body: "The Free plan is enough for occasional research and small lists. PRO makes sense when prospecting is recurring, exports exceed the free limits, or bulk extraction and autosave remove repeated manual work.",
      },
      {
        title: "Responsible outreach guardrails",
        body: "Sales teams should keep an opt-out process, avoid messaging unrelated contacts, and document why each list was collected. This protects deliverability, brand reputation, and compliance posture.",
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
      currentHref={`/use-cases/${resolved["use-case"]}`}
    />
  );
}
