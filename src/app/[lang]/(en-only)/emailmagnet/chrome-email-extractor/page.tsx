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
      sections={[
        {
          title: "What makes a Chrome extractor different",
          body: "A Chrome email extractor works inside the browsing session instead of asking the user to upload URLs into a separate crawler. That matters when source context is important: the user can inspect the page, understand why the email appears, then extract and export only when the page is relevant.",
        },
        {
          title: "When it is the right tool",
          body: "EmailMagnet fits prospecting, recruiting research, vendor research, event list review, and small business directory work. It is less appropriate for hidden data, automated scraping at scale, or outreach workflows where nobody reviews the source page.",
        },
        {
          title: "Export workflow",
          body: "After extraction, CSV is best for spreadsheets, deduplication, CRM preparation, and adding columns such as source URL or confidence level. TXT is better for quick checks and plain lists.",
        },
        {
          title: "Responsible use",
          body: "The extension helps detect visible email addresses, but the user still owns qualification and compliance. Lists should be reviewed for relevance, source context, opt-out handling, and lawful purpose before messages are sent.",
        },
      ]}
      ctaHref="/emailmagnet"
      ctaLabel="Open EmailMagnet"
      currentHref="/emailmagnet/chrome-email-extractor"
    />
  );
}
