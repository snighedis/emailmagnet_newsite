import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";

type IntegrationPageProps = {
  params: Promise<{ integration: string }>;
};

export async function generateMetadata({ params }: IntegrationPageProps) {
  const { integration } = await params;
  return createMetadata({
    title: `Integration: ${integration.replaceAll("-", " ")}`,
    description: `EmailMagnet integration guide for ${integration.replaceAll("-", " ")} and export workflows.`,
    path: `/integrations/${integration}`,
  });
}

export default async function IntegrationPage({ params }: IntegrationPageProps) {
  const { integration } = await params;
  const label = integration.replaceAll("-", " ");
  return (
    <PlannedContentPage
      eyebrow="Integration"
      title={`EmailMagnet and ${label}`}
      description={`How EmailMagnet fits into ${label} workflows and export handoffs.`}
      items={[
        "How the integration workflow works",
        "Setup requirements and key steps",
        "Export handoff patterns",
        "Related docs, FAQ, and support links",
      ]}
    />
  );
}
