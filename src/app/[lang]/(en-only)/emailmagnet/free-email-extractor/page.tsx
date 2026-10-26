import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Free Email Extractor for Chrome",
  description:
    "Start with EmailMagnet Free to extract visible emails from websites in Chrome and export CSV or TXT lists, with no monthly or per-export limit.",
  path: "/emailmagnet/free-email-extractor",
});

export default function FreeEmailExtractorPage() {
  return (
    <MoneyPage
      eyebrow="EmailMagnet Free"
      title="Free email extractor for Chrome browsing workflows"
      answer="EmailMagnet Free lets users try browser-based email extraction with no monthly or per-export limit, and CSV or TXT export."
      bullets={[
        "No cap on how many emails you extract or export.",
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
          body: "The free plan is built for people who extract emails occasionally, test new workflows, or want to try the workflow. It gives enough room to understand whether browser-based extraction is faster than manual copy-paste without requiring an immediate purchase.",
        },
        {
          title: "No limits on extraction or export",
          body: "The free plan has no monthly quota and no cap on export size. Large directories, weekly prospecting and CRM handoff all work on Free; what changes as research becomes recurring is the repeated browser work, which is what PRO addresses.",
        },
        {
          title: "Free plan quality control",
          body: "Even on the free plan, the best workflow is to review each source page, export a focused list, remove irrelevant contacts, and keep source notes. Focused exports help teams build the habit of qualification before outreach.",
        },
        {
          title: "When PRO is the better fit",
          body: "PRO is the practical choice when EmailMagnet becomes part of a weekly process. Autosave and bulk extraction reduce repeated browser work and make the tool easier to use as part of a repeatable research routine.",
        },
      ]}
      ctaHref="/pricing"
      ctaLabel="Compare Free and PRO"
      currentHref="/emailmagnet/free-email-extractor"
    />
  );
}
