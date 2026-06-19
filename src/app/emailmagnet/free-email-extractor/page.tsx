import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Free Email Extractor for Chrome",
  description:
    "Start with EmailMagnet Free to extract visible emails from websites in Chrome and export CSV or TXT lists within free-plan limits.",
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
      sections={[
        {
          title: "Who should start free",
          body: "The free plan is built for people who extract emails occasionally, test new workflows, or only need small exports. It gives enough room to understand whether browser-based extraction is faster than manual copy-paste without requiring an immediate purchase.",
        },
        {
          title: "Where free limits show up",
          body: "The limits become visible when research becomes recurring: larger directories, repeated weekly prospecting, CRM handoff, or export sessions that regularly exceed 100 emails. At that point the time cost usually comes from splitting work into smaller batches.",
        },
        {
          title: "Free plan quality control",
          body: "Even on the free plan, the best workflow is to review each source page, export a focused list, remove irrelevant contacts, and keep source notes. Smaller free exports can actually help teams build the habit of qualification before outreach.",
        },
        {
          title: "When PRO is the better fit",
          body: "PRO is the practical choice when EmailMagnet becomes part of a weekly process. Unlimited extraction, larger exports, autosave, and bulk workflows reduce repeated browser work and make the tool easier to use as part of a repeatable research routine.",
        },
      ]}
      ctaHref="/pricing"
      ctaLabel="Compare Free and PRO"
    />
  );
}
