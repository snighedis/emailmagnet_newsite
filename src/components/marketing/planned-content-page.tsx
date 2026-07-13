import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { RelatedResources } from "@/components/marketing/related-resources";

type PlannedContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
  answer?: string;
  sections?: Array<{ title: string; body: string }>;
  /** This page's own path, so the related block never links back to itself. */
  currentHref?: string;
};

export function PlannedContentPage({
  eyebrow,
  title,
  description,
  items,
  answer,
  sections = [],
  currentHref,
}: PlannedContentPageProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-normal text-balance text-slate-950 md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-xl leading-9 text-slate-600">{description}</p>
        {answer ? (
          <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">Quick answer</h2>
            <p className="mt-2 leading-7 text-slate-700">{answer}</p>
          </div>
        ) : null}
        <h2 className="mt-10 text-2xl font-semibold text-slate-950">What this page covers</h2>
        <ul className="mt-4 grid gap-3">
          {items.map((item) => (
            <li key={item} className="rounded-md border border-slate-200 bg-slate-50 p-4 text-slate-700">
              {item}
            </li>
          ))}
        </ul>
        {sections.length ? (
          <div className="mt-12 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-slate-950">{section.title}</h2>
                <p className="mt-3 leading-8 text-slate-600">{section.body}</p>
              </section>
            ))}
          </div>
        ) : null}
        <RelatedResources currentHref={currentHref} className="mt-12" />
        <Button asChild className="mt-10 bg-brand text-white hover:bg-brand-strong">
          <Link href="/pricing">
            Explore EmailMagnet pricing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
