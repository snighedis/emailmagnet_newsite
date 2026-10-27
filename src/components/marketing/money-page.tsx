import { GuidePage, productFor } from "@/components/marketing/guide-page";

type MoneyPageProps = {
  /** The product's name: it picks the product page and picture, and is not shown as a label. */
  eyebrow: string;
  title: string;
  answer: string;
  bullets: string[];
  table: Array<{ intent: string; fit: string; page: string }>;
  sections?: Array<{ title: string; body: string }>;
  ctaHref: string;
  ctaLabel: string;
  /** This page's own path, so the related block never links back to itself. */
  currentHref?: string;
};

/** A product search guide; the layout lives in GuidePage. */
export function MoneyPage({ eyebrow, title, answer, bullets, table, sections, ctaHref, ctaLabel, currentHref }: MoneyPageProps) {
  return (
    <GuidePage
      product={productFor(eyebrow)}
      title={title}
      answer={answer}
      list={{ title: "Best-fit use cases", items: bullets }}
      table={table}
      sections={sections}
      action={{ label: ctaLabel, href: ctaHref }}
      currentHref={currentHref}
    />
  );
}
