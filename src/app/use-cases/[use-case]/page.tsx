import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";

type UseCasePageProps = {
  params: Promise<{ "use-case": string }>;
};

export async function generateMetadata({ params }: UseCasePageProps) {
  const resolved = await params;
  const useCase = resolved["use-case"];
  return createMetadata({
    title: `Use case: ${useCase.replaceAll("-", " ")}`,
    description: `Practical EmailMagnet workflow for ${useCase.replaceAll("-", " ")} use cases.`,
    path: `/use-cases/${useCase}`,
  });
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const resolved = await params;
  const label = resolved["use-case"].replaceAll("-", " ");
  return (
    <PlannedContentPage
      eyebrow="Use case"
      title={`Email extraction for ${label}`}
      description={`A practical EmailMagnet workflow for teams focused on ${label}.`}
      items={[
        "Who this workflow is designed for",
        "Step-by-step process from browsing to export",
        "Free and PRO fit by workload level",
        "Responsible outreach and compliance checklist",
      ]}
    />
  );
}
