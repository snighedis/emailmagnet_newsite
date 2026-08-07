import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/marketing/section";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { RelatedResources } from "@/components/marketing/related-resources";

type MoneyPageProps = {
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

export function MoneyPage({
  eyebrow,
  title,
  answer,
  bullets,
  table,
  sections = [],
  ctaHref,
  ctaLabel,
  currentHref,
}: MoneyPageProps) {
  return (
    <Section variant="default" container="wide" containerClassName="max-w-5xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="text-ink mt-3 max-w-4xl text-4xl font-semibold tracking-[-0.02em] text-balance md:text-6xl">
        {title}
      </h1>
      <div className="bg-accent-teal/5 border-accent-teal/15 mt-8 rounded-2xl border p-6">
        <h2 className="text-lg font-semibold text-slate-950">Quick answer</h2>
        <p className="mt-2 leading-8 text-slate-700">{answer}</p>
      </div>
      <h2 className="text-ink mt-12 text-3xl font-semibold tracking-[-0.02em]">Best-fit use cases</h2>
      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="shadow-soft flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 leading-7 text-slate-700"
          >
            <CheckCircle2 className="text-accent-teal mt-1 h-4 w-4 shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="shadow-soft mt-12 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="text-ink bg-slate-50">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Search intent</th>
              <th scope="col" className="px-4 py-3 font-semibold">Product fit</th>
              <th scope="col" className="px-4 py-3 font-semibold">Recommended page</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-slate-700">
            {table.map((row) => (
              <tr key={row.intent}>
                <td className="px-4 py-4">{row.intent}</td>
                <td className="px-4 py-4">{row.fit}</td>
                <td className="px-4 py-4">
                  <Link href={row.page} className="text-eyebrow font-medium hover:underline">
                    {row.page}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {sections.length ? (
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold text-slate-950">{section.title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>
      ) : null}
      <RelatedResources currentHref={currentHref} className="mt-12" />
      <Button asChild size="lg" className="mt-10 font-semibold">
        <Link href={ctaHref}>
          {ctaLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </Section>
  );
}
