import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type MoneyPageProps = {
  eyebrow: string;
  title: string;
  answer: string;
  bullets: string[];
  table: Array<{ intent: string; fit: string; page: string }>;
  ctaHref: string;
  ctaLabel: string;
};

export function MoneyPage({
  eyebrow,
  title,
  answer,
  bullets,
  table,
  ctaHref,
  ctaLabel,
}: MoneyPageProps) {
  return (
    <article className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-normal text-balance text-slate-950 md:text-6xl">
          {title}
        </h1>
        <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-5">
          <h2 className="text-lg font-semibold text-slate-950">Quick answer</h2>
          <p className="mt-2 leading-8 text-slate-700">{answer}</p>
        </div>
        <h2 className="mt-12 text-3xl font-semibold text-slate-950">Best-fit use cases</h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 rounded-md border border-slate-200 p-4 leading-7 text-slate-700">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="mt-12 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-950">
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
                  <td className="px-4 py-4">{row.page}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button asChild className="mt-10 rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
          <Link href={ctaHref}>
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
