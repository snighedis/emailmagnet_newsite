import { GuidePage, productFor } from "@/components/marketing/guide-page";

type PlannedContentPageProps = {
  /** The kind of page ("Glossary", "Use case"): no longer shown as a label above the title. */
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  answer?: string;
  sections?: Array<{ title: string; body: string }>;
  /** This page's own path, so the related block never links back to itself. */
  currentHref?: string;
};

/** An EmailMagnet content page (use case, glossary, comparison, integration); the layout lives in GuidePage. */
export function PlannedContentPage({ title, description, items, answer, sections, currentHref }: PlannedContentPageProps) {
  return (
    <GuidePage
      product={productFor("EmailMagnet")}
      title={title}
      standfirst={description}
      answer={answer}
      list={{ title: "What this page covers", items }}
      sections={sections}
      action={{ label: "Explore EmailMagnet pricing", href: "/pricing" }}
      currentHref={currentHref}
    />
  );
}
