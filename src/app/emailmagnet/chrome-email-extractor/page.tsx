import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Chrome Email Extractor",
  description:
    "Use EmailMagnet as a Chrome email extractor to find visible website emails while browsing, review the results, and export clean CSV or TXT contact lists.",
  path: "/emailmagnet/chrome-email-extractor",
});

export default function ChromeEmailExtractorPage() {
  return (
    <MoneyPage
      eyebrow="EmailMagnet"
      title="Chrome email extractor for finding emails while browsing"
      answer="EmailMagnet is a Chrome email extractor by Dentoku Dev. It detects emails from website pages while you browse, then exports the results as CSV or TXT for review, research, and follow-up workflows."
      bullets={[
        "Extract emails from public website content without manual copy-paste.",
        "Use CSV export for spreadsheet and CRM preparation.",
        "Use TXT export for lightweight clean lists.",
        "Upgrade to PRO for unlimited extraction, autosave, and bulk workflows.",
      ]}
      table={[
        { intent: "Chrome email extractor", fit: "Core EmailMagnet use case", page: "/emailmagnet" },
        { intent: "extract emails from websites", fit: "Browser-based extraction workflow", page: "/docs/getting-started" },
        { intent: "CSV email export", fit: "Export workflow", page: "/docs/exporting-emails" },
      ]}
      ctaHref="/emailmagnet"
      ctaLabel="Open EmailMagnet"
    />
  );
}
