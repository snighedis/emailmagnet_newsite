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
    description: `EmailMagnet use case page for ${useCase.replaceAll("-", " ")} workflows.`,
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
      description={`This use-case page is ready for a practical EmailMagnet workflow focused on ${label}.`}
      items={[
        "Who this workflow is for",
        "Step-by-step process",
        "Recommended Free vs PRO plan",
        "Responsible outreach reminder",
      ]}
    />
  );
}
