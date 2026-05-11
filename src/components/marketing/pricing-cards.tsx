import { Check } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { PricingPlan } from "@/data/site";
import { cn } from "@/lib/utils";

type PricingCardsProps = {
  plans: PricingPlan[];
};

export function PricingCards({ plans }: PricingCardsProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={cn(
            "relative rounded-xl border-slate-200 bg-white shadow-sm",
            plan.featured && "border-[#ff5c35] shadow-xl shadow-orange-100",
          )}
        >
          {plan.eyebrow ? (
            <Badge className="absolute right-5 top-5 rounded-full bg-[#ff5c35] text-white">
              {plan.eyebrow}
            </Badge>
          ) : null}
          <CardHeader className="space-y-3">
            <h3 className="text-2xl font-semibold text-slate-950">{plan.name}</h3>
            <div className="flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-normal text-slate-950">
                {plan.price}
              </span>
              {plan.featured ? (
                <span className="pb-2 text-sm font-medium text-slate-500">lifetime</span>
              ) : null}
            </div>
            <p className="min-h-12 text-base leading-7 text-slate-600">{plan.description}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className={cn(
                "w-full rounded-md",
                plan.featured ? "bg-[#ff5c35] text-white hover:bg-[#df4320]" : "",
              )}
              variant={plan.featured ? "default" : "outline"}
            >
              <Link href={plan.cta.href}>{plan.cta.label}</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
