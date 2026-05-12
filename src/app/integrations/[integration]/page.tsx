import { PlannedContentPage } from "@/components/marketing/planned-content-page";
import { createMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

const integrations = {
  "emailmagnet-chrome": {
    label: "Chrome",
    answer:
      "EmailMagnet is built as a Chrome extension, so the extraction workflow happens directly in the browser tab where the user is reviewing website content.",
    sections: [
      {
        title: "Why Chrome matters for EmailMagnet",
        body: "Many email research workflows already happen in Chrome. Keeping extraction inside the browser removes tab switching, manual copy-paste, and separate scraping setup.",
      },
      {
        title: "Export handoff",
        body: "After extraction, users can export results as CSV for spreadsheets and CRM preparation or TXT for lightweight review.",
      },
    ],
  },
} satisfies Record<string, { label: string; answer: string; sections: Array<{ title: string; body: string }> }>;

type IntegrationPageProps = {
  params: Promise<{ integration: string }>;
};

export async function generateMetadata({ params }: IntegrationPageProps) {
  const { integration } = await params;
  const page = integrations[integration as keyof typeof integrations];
  if (!page) {
    return {
      title: "Integration not found",
      description: "The requested EmailMagnet integration page could not be found.",
    };
  }
  return createMetadata({
    title: `EmailMagnet and ${page.label}`,
    description: `EmailMagnet integration guide for ${page.label} and export workflows.`,
    path: `/integrations/${integration}`,
  });
}

export function generateStaticParams() {
  return Object.keys(integrations).map((integration) => ({ integration }));
}

export default async function IntegrationPage({ params }: IntegrationPageProps) {
  const { integration } = await params;
  const page = integrations[integration as keyof typeof integrations];
  if (!page) {
    notFound();
  }
  return (
    <PlannedContentPage
      eyebrow="Integration"
      title={`EmailMagnet and ${page.label}`}
      description={`How EmailMagnet fits into ${page.label} workflows and export handoffs.`}
      answer={page.answer}
      items={[
        "How the integration workflow works",
        "Setup requirements and key steps",
        "Export handoff patterns",
        "Related docs, FAQ, and support links",
      ]}
      sections={page.sections}
    />
  );
}
