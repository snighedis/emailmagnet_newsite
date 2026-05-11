import { PlaceholderPage } from "@/components/marketing/placeholder-page";
import { createMetadata } from "@/lib/metadata";

type UseCasePageProps = {
  params: Promise<{ "use-case": string }>;
};

export async function generateMetadata({ params }: UseCasePageProps) {
  const resolved = await params;
  const useCase = resolved["use-case"];
  return createMetadata({
    title: `Use case: ${useCase.replaceAll("-", " ")}`,
    description: `EmailMagnet use case placeholder for ${useCase.replaceAll("-", " ")} workflows.`,
    path: `/use-cases/${useCase}`,
  });
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const resolved = await params;
  const label = resolved["use-case"].replaceAll("-", " ");
  return (
    <PlaceholderPage
      eyebrow="Use case"
      title={`Email extraction for ${label}`}
      description={`This use-case page is ready for a practical EmailMagnet workflow focused on ${label}.`}
      items={[
        "Who this workflow is for placeholder",
        "Step-by-step process placeholder",
        "Recommended Free vs PRO plan placeholder",
        "Responsible outreach reminder placeholder",
      ]}
    />
  );
}
