import { Check } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { PricingPlan } from "@/data/site";
import { cn } from "@/lib/utils";

type PricingCardsProps = {
  plans: PricingPlan[];
};

export function PricingCards({ plans }: PricingCardsProps) {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-2">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={cn(
            "relative flex h-full flex-col rounded-3xl border p-8",
            plan.featured
              ? "border-brand/50 shadow-soft-xl from-brand-soft/50 bg-gradient-to-b to-white"
              : "shadow-soft border-slate-200/80 bg-white",
          )}
        >
          {plan.eyebrow ? (
            <span
              className={cn(
                "absolute -top-3 right-8 rounded-md px-3 py-1 text-xs font-semibold",
                plan.featured ? "bg-brand text-white" : "bg-slate-100 text-slate-600",
              )}
            >
              {plan.eyebrow}
            </span>
          ) : null}
          <h3 className="text-xl font-semibold text-slate-950">{plan.name}</h3>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-ink text-5xl font-semibold tracking-[-0.02em]">{plan.price}</span>
            {plan.price.startsWith("$") ? (
              <span className="pb-2 text-sm font-medium text-slate-500">lifetime</span>
            ) : null}
          </div>
          {/* Always reserved (even when empty) so the rows below align across cards. */}
          <p className="mt-2 min-h-5 text-sm font-medium text-slate-500">{plan.priceNote}</p>
          <p className="mt-3 min-h-14 text-base leading-7 text-slate-600">{plan.description}</p>
          <Button
            asChild
            size="xl"
            className={cn(
              "mt-6 w-full font-semibold",
              plan.featured ? "btn-sheen hover:-translate-y-0.5" : "",
            )}
            variant={plan.featured ? "default" : "outline"}
          >
            <Link href={plan.cta.href}>{plan.cta.label}</Link>
          </Button>
          <ul className="mt-8 flex-1 space-y-3 border-t border-slate-100 pt-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-700">
                <span className="bg-accent-teal/10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                  <Check className="text-accent-teal h-3 w-3" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
