import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Email Extractor vs Scraper",
  description:
    "Compare browser-based email extraction with heavier scraping workflows, including setup effort, source context, list review, exports, and responsible use.",
  path: "/emailmagnet/email-extractor-vs-scraper",
});

export default function EmailExtractorVsScraperPage() {
  return (
    <MoneyPage
      eyebrow="Comparison"
      title="Email extractor vs scraper: when browser-based extraction is enough"
      answer="EmailMagnet is best when users already browse relevant pages and need to extract visible emails quickly. A heavier scraper may fit large automated crawling, but it usually requires more setup, review, and compliance controls."
      bullets={[
        "Choose EmailMagnet for manual research sessions made faster.",
        "Choose browser extraction when source context matters.",
        "Use scraping tools only when crawling scope, permissions, and compliance process are clear.",
        "Keep qualification and responsible outreach separate from extraction.",
      ]}
      table={[
        { intent: "email extractor vs scraper", fit: "Comparison page", page: "/compare/manual-email-copying" },
        { intent: "browser email extractor", fit: "EmailMagnet", page: "/emailmagnet" },
        { intent: "responsible email extraction", fit: "Compliance workflow", page: "/docs/responsible-use" },
      ]}
      ctaHref="/emailmagnet"
      ctaLabel="Use EmailMagnet"
    />
  );
}
