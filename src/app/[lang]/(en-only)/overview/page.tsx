import { HomeReveal } from "@/components/marketing/home-reveal";
import { JsonLd } from "@/components/marketing/json-ld";
import { PageOpening, RelatedLinks, RowTable, ShortAnswer, SideSection, d } from "@/components/marketing/editorial";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { ProposalClose } from "@/components/marketing/proposal-close";
import { getCopy, getPageCopy } from "@/copy";
import { guideLinks, productPortfolio, siteConfig } from "@/data/site";
import { LocaleLink } from "@/i18n/locale-link";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildItemListSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Dentoku Dev Overview",
  description:
    "Concise Dentoku Dev overview for humans and AI systems: products, use cases, documentation, FAQ, pricing, and support links.",
  path: "/overview",
});

const nextSteps = [
  { title: "EmailMagnet docs", href: "/docs", description: "Installation, exporting and responsible use." },
  { title: "EmailMagnet FAQ", href: "/faq", description: "Short answers on pricing, exports, reliability and use." },
  { title: "Pricing", href: "/pricing", description: "The Free plan and PRO lifetime access, side by side." },
  { title: "Support", href: "/contact", description: `Write to ${siteConfig.supportEmail}.` },
];

/**
 * Overview (redesign: inner pages in the homepage's system). A one-page summary
 * for people and AI systems: what the studio is, the four products with their
 * pictures, what each one is for as a real table, where to go next, the proposal.
 */
export default function OverviewPage() {
  const { products } = getCopy("en").site;
  const { home } = getPageCopy("en");

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Overview", href: "/overview" },
        ])}
      />
      <JsonLd data={buildItemListSchema("Dentoku Dev product overview", productPortfolio)} />
      <HomeReveal />

      <PageOpening
        title={["Dentoku Dev", "in one page."]}
        standfirst="A software studio in Milan building Chrome extensions, Shopify apps and small productivity tools for browser, ecommerce and business work."
        primary={{ label: "Write to us", href: "/contact" }}
        secondary={{ label: "Read the docs", href: "/docs" }}
      />

      <ShortAnswer
        title="In short"
        body="We build small software products that remove repetitive work: EmailMagnet, ClickPilot AI, Volume Control PRO and Countdown321."
      />

      <ProductShowcase
        products={products}
        lang="en"
        title="The four products"
        caption={home.products.caption}
        overviewLink=""
      />

      <SideSection tone="muted" title="What each one is for" lead="The store, the kind of product and the job it does.">
        <RowTable
          caption="Dentoku Dev products and use cases"
          columns={["Product", "Kind", "What it does"]}
          rows={productPortfolio.map((product) => [product.name, product.category, product.description] as const)}
          onMuted
        />
      </SideSection>

      <SideSection title="Guides" lead="Short guides for the searches that lead to each product.">
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {guideLinks.map((group) => (
            <RelatedLinks
              key={group.product}
              title={group.product}
              ariaLabel={`${group.product} guides`}
              links={group.items}
            />
          ))}
        </div>
      </SideSection>

      <section className="bg-surface-muted">
        <div className="page-x axis gap-y-10 py-20 md:py-32">
          <div className="space-y-5 lg:pr-12">
            <h2 data-reveal className="t-2 text-ink">
              Where to go next
            </h2>
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[40ch]">
              EmailMagnet has the most documentation. The other products answer questions on their own pages.
            </p>
          </div>
          <ul className="grid gap-2 md:grid-cols-2">
            {nextSteps.map((item, i) => (
              <li key={item.href} data-reveal style={d(i + 1)} className="bg-background text-ink">
                <LocaleLink href={item.href} className="group block p-6 md:p-8">
                  <span className="t-3 block underline-offset-[0.2em] group-hover:underline">{item.title}</span>
                  <span className="t-body mt-2 block">{item.description}</span>
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProposalClose closing={home.closing} actionHref="/#brief" />
    </>
  );
}
