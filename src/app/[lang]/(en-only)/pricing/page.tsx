import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { FaqTiles, PageOpening, PlanPanels, RowTable, SideSection, type Plan } from "@/components/marketing/editorial";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { getCopy, getPageCopy } from "@/copy";
import { emailMagnetConfig, faqItems, pricingPlans } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "EmailMagnet Pricing Plans",
  description:
    "EmailMagnet pricing: Free with local autosave and export up to 100 addresses per file, or a $19 lifetime PRO with bulk URL extraction and no export cap.",
  path: "/pricing",
});

const plans: Plan[] = pricingPlans.map((plan) => ({
  name: plan.name.replace(/ plan$/, ""),
  price: plan.price === "Free" ? "$0" : plan.price,
  cadence: plan.price === "Free" ? "for good" : "once",
  description: plan.description,
  features: plan.features,
  action: plan.cta,
  featured: plan.featured,
}));

const comparison = [
  {
    plan: "Free",
    bestFor: "Trying EmailMagnet and occasional extraction",
    includes: "Extraction, local autosave, CSV/TXT export up to 100 addresses per file",
  },
  {
    plan: "PRO",
    bestFor: "Recurring research, prospecting and bulk extraction",
    includes: "Everything in Free, plus one list across pages, bulk URL extraction, no export cap and priority support",
  },
];

/** The other products' prices, as their own pages state them. */
const otherProducts = [
  { name: "ClickPilot AI", href: "/clickpilot-ai", price: "Free, or PRO for $19 once. Runs on your own OpenAI API key." },
  {
    name: "Volume Control PRO",
    href: "/volume-control-pro",
    price: "Free, with no ads. Audio Studio PRO is an optional one-time upgrade.",
  },
  {
    name: "Countdown321",
    href: "/countdown321",
    price: "Free for one timer. Paid plans from $4.99 a month on Shopify, with a 7-day trial.",
  },
];

const pricingQuestions = faqItems.filter((item) =>
  ["What does the free version include?", "What does the PRO version include?", "How do I export the emails?"].includes(
    item.question,
  ),
);

/**
 * Pricing (redesign: inner pages in the homepage's system). The title with the
 * store action beside it, the two plans on the tone step, the comparison as a
 * real table, the pricing questions, the other products' prices, then the
 * products and the proposal.
 */
export default function PricingPage() {
  const { products } = getCopy("en").site;
  const { home } = getPageCopy("en");

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ])}
      />
      <HomeReveal />

      <PageOpening
        title={["Pay once.", "Extract for good."]}
        standfirst="EmailMagnet's Free plan extracts, autosaves locally and exports up to 100 addresses per file. PRO adds one list across pages, bulk URL extraction and no export cap, for $19 paid once."
        primary={{ label: "Add to Chrome, free", href: emailMagnetConfig.secondaryCta.href }}
        secondary={{ label: "Get lifetime PRO", href: emailMagnetConfig.primaryCta.href }}
      />

      <SideSection
        id="plans"
        tone="muted"
        title="Two plans, no subscription"
        lead="Every new install gets 7 days of PRO, with no card. Billing details are shown at checkout."
      >
        <PlanPanels plans={plans} onMuted />
      </SideSection>

      <SideSection title="Which one is for you" lead="Most people start free and move to PRO when research becomes weekly.">
        <RowTable
          caption="EmailMagnet plans compared"
          columns={["Plan", "Best for", "What you get"]}
          rows={comparison.map((row) => [row.plan, row.bestFor, row.includes] as const)}
        />
        <div className="mt-16">
          <h3 className="t-3 text-ink">Questions about the plans</h3>
          <div className="mt-6">
            <FaqTiles items={pricingQuestions} />
          </div>
          <LocaleLink href="/faq" className="text-link text-ink mt-6 inline-block text-base font-medium">
            All EmailMagnet questions
          </LocaleLink>
        </div>
      </SideSection>

      <SideSection tone="muted" title="The other products" lead="Each one is priced on its own page and store listing.">
        <ul className="grid gap-2">
          {otherProducts.map((product) => (
            <li key={product.name} className="bg-background text-ink">
              <LocaleLink href={product.href} className="group block p-6 md:p-8">
                <span className="t-3 block underline-offset-[0.2em] group-hover:underline">{product.name}</span>
                <span className="t-body mt-2 block max-w-[52ch]">{product.price}</span>
              </LocaleLink>
            </li>
          ))}
        </ul>
      </SideSection>

      <ProductShowcase
        products={products}
        lang="en"
        title={home.products.title}
        caption={home.products.caption}
        overviewLink={home.products.overviewLink}
      />

      <ProposalClose closing={home.closing} actionHref="/#brief" />
    </>
  );
}
