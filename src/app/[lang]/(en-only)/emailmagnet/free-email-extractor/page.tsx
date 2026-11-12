import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Free Email Extractor for Chrome",
  description:
    "Start with EmailMagnet Free to extract visible emails in Chrome, then copy and export them from up to 15 sites a day, up to 100 addresses per file.",
  path: "/emailmagnet/free-email-extractor",
});

export default function FreeEmailExtractorPage() {
  return (
    <MoneyPage
      eyebrow="EmailMagnet Free"
      title="Free email extractor for Chrome browsing workflows"
      answer="EmailMagnet Free lets users try browser-based email extraction, with local autosave and CSV or TXT export from up to 15 sites a day, up to 100 addresses per file."
      bullets={[
        "Copy and export from up to 15 sites a day, up to 100 addresses per file.",
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
          title: "What the free plan includes",
          body: "The free plan extracts the visible emails on any page and lets you copy and export them from up to 15 different sites a day (a site you already used that day stays open), in CSV or TXT files of up to 100 addresses each. With autosave on it keeps a local history across pages: the list shows the page you have open, plus a preview of the emails found on other pages, the 3 most recent in full, one per site, and the rest masked. When a page shows 0 to 2 emails, EmailMagnet also reads the site's Contact page and shows the extra addresses masked, as a preview. You can try PRO free for 7 days whenever you choose, with no card and no sign-up; when the trial ends you are back on the free plan and nothing you found is lost.",
        },
        {
          title: "Free plan quality control",
          body: "Even on the free plan, the best workflow is to review each source page, export a focused list, remove irrelevant contacts, and keep source notes. Focused exports help teams build the habit of qualification before outreach.",
        },
        {
          title: "When PRO is the better fit",
          body: "PRO is the practical choice when EmailMagnet becomes part of a weekly process. No daily limit, full Contact-page results, one list across every page, whole-site search, bulk extraction from URL lists and exports with no cap reduce repeated browser work and make the tool easier to use as part of a repeatable research routine.",
        },
      ]}
      ctaHref="/pricing"
      ctaLabel="Compare Free and PRO"
      currentHref="/emailmagnet/free-email-extractor"
    />
  );
}
