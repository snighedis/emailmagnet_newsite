import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Free Email Extractor for Chrome",
  description:
    "Start with EmailMagnet Free to extract visible emails from websites in Chrome, test the browser workflow, and export CSV or TXT lists within free-plan limits.",
  path: "/emailmagnet/free-email-extractor",
});

export default function FreeEmailExtractorPage() {
  return (
    <MoneyPage
      eyebrow="EmailMagnet Free"
      title="Free email extractor for Chrome browsing workflows"
      answer="EmailMagnet Free lets users try browser-based email extraction with 200 emails per month, export up to 100 emails at once, and CSV or TXT export."
      bullets={[
        "Good for occasional website research.",
        "Useful for testing the EmailMagnet workflow before upgrading.",
        "Includes basic email extraction and export.",
        "PRO is better when extraction becomes recurring weekly work.",
      ]}
      table={[
        { intent: "free email extractor", fit: "EmailMagnet Free", page: "/pricing" },
        { intent: "email extractor no subscription", fit: "Free plan or $19 lifetime PRO", page: "/emailmagnet" },
        { intent: "EmailMagnet pricing", fit: "Free vs PRO comparison", page: "/pricing" },
      ]}
      ctaHref="/pricing"
      ctaLabel="Compare Free and PRO"
    />
  );
}
