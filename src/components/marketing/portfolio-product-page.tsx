import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProductItem } from "@/data/site";

type PortfolioProductPageProps = {
  product: ProductItem;
};

export function PortfolioProductPage({ product }: PortfolioProductPageProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">
          Dentoku Dev portfolio
        </p>
        <h1 className="mt-3 text-5xl font-semibold tracking-normal text-balance text-slate-950">
          {product.name}
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-600">{product.description}</p>
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold text-slate-950">Product information</h2>
          <p className="mt-3 leading-8 text-slate-600">
            {product.name} is a {product.category} in the Dentoku Dev product portfolio. For
            product questions, availability, or support, contact Dentoku Dev directly.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
            <Link href="/">
              Back to Dentoku Dev
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          {product.externalUrl ? (
            <Button asChild variant="outline" className="rounded-md">
              <Link href={product.externalUrl}>View on Shopify App Store</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
