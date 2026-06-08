import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/marketing/section";
import { Eyebrow } from "@/components/marketing/eyebrow";
import type { ProductItem } from "@/data/site";

type PortfolioProductPageProps = {
  product: ProductItem;
};

export function PortfolioProductPage({ product }: PortfolioProductPageProps) {
  return (
    <Section variant="default" container="wide" containerClassName="max-w-4xl">
      <Eyebrow>Dentoku Dev portfolio</Eyebrow>
      <h1 className="text-ink mt-3 text-4xl font-semibold tracking-[-0.02em] text-balance md:text-6xl">
        {product.name}
      </h1>
      <p className="mt-6 text-xl leading-9 text-slate-600">{product.description}</p>
      <div className="shadow-soft mt-10 rounded-2xl border border-slate-200/80 bg-white p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-slate-950">Product information</h2>
        <p className="mt-3 leading-8 text-slate-600">
          {product.name} is a {product.category} in the Dentoku Dev product portfolio. For product
          questions, availability, or support, contact Dentoku Dev directly.
        </p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button asChild size="lg" className="font-semibold">
          <Link href="/">
            Back to Dentoku Dev
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        {product.externalUrl ? (
          <Button asChild size="lg" variant="outline">
            <Link href={product.externalUrl}>View on Shopify App Store</Link>
          </Button>
        ) : null}
      </div>
    </Section>
  );
}
