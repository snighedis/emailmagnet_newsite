import { PlaceholderPage } from "@/components/marketing/placeholder-page";
import { createMetadata } from "@/lib/metadata";

type IntegrationPageProps = {
  params: Promise<{ integration: string }>;
};

export async function generateMetadata({ params }: IntegrationPageProps) {
  const { integration } = await params;
  return createMetadata({
    title: `Integration: ${integration.replaceAll("-", " ")}`,
    description: `EmailMagnet integration placeholder for ${integration.replaceAll("-", " ")} and export workflows.`,
    path: `/integrations/${integration}`,
  });
}

export default async function IntegrationPage({ params }: IntegrationPageProps) {
  const { integration } = await params;
  const label = integration.replaceAll("-", " ");
  return (
    <PlaceholderPage
      eyebrow="Integration"
      title={`EmailMagnet and ${label}`}
      description={`This integration page is reserved for current and future details about EmailMagnet with ${label}.`}
      items={[
        "Current integration status placeholder",
        "Setup steps placeholder",
        "Export workflow placeholder",
        "Related docs and FAQ links placeholder",
      ]}
    />
  );
}
