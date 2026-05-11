import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ProductItem } from "@/data/site";

type ProductPlaceholderProps = {
  product: ProductItem;
};

export function ProductPlaceholder({ product }: ProductPlaceholderProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">
          Dentoku Dev product page
        </p>
        <h1 className="mt-3 text-5xl font-semibold tracking-normal text-balance text-slate-950">
          {product.name}
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-600">{product.description}</p>
        <div className="mt-10 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6">
          <h2 className="text-2xl font-semibold text-slate-950">Product details placeholder</h2>
          <p className="mt-3 leading-8 text-slate-600">
            This page is intentionally reserved for the future {product.name} product entity.
            Replace this placeholder with verified product messaging, pricing, support details,
            FAQs, screenshots, and schema when the product information is finalized.
          </p>
        </div>
        <Button asChild className="mt-10 rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
          <Link href="/">
            Back to Dentoku Dev
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
