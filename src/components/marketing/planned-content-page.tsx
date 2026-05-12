import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type PlannedContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
};

export function PlannedContentPage({ eyebrow, title, description, items }: PlannedContentPageProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal text-balance text-slate-950 md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-600">{description}</p>
        <h2 className="mt-10 text-2xl font-semibold text-slate-950">What this page covers</h2>
        <div className="mt-4 grid gap-3">
          {items.map((item) => (
            <div key={item} className="rounded-md border border-slate-200 bg-slate-50 p-4 text-slate-700">
              {item}
            </div>
          ))}
        </div>
        <Button asChild className="mt-10 rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
          <Link href="/pricing">
            Explore EmailMagnet pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
