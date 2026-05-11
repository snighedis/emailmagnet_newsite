import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";

type IntegrationPageProps = {
  params: Promise<{ integration: string }>;
};

export async function generateMetadata({ params }: IntegrationPageProps) {
  const { integration } = await params;
  return createMetadata({
    title: `Integration: ${integration.replaceAll("-", " ")}`,
    description: `EmailMagnet integration page for ${integration.replaceAll("-", " ")} and export workflows.`,
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
      description={`This integration page is reserved for current and future details about EmailMagnet with ${label}.`}
      items={[
        "Current integration status",
        "Setup steps",
        "Export workflow",
        "Related docs and FAQ links",
      ]}
    />
  );
}
