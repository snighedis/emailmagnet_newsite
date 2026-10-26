import type { CSSProperties } from "react";
import type { HomeCopy } from "@/copy/en/home";

/**
 * The close shared by the funnel pages (tasteskill blueprint "The reply card"):
 * the written proposal as a paper card lying on the ink field, tilted and
 * cropped by the section's bottom edge, with the line it starts from left to
 * fill in. Its field is one tone step above the ink footer below it, so the
 * crop line is also the edge between the two. The crop only
 * ever takes the card's bottom margin, never its button.
 */
export function ProposalClose({
  closing,
  actionHref = closing.primary.href,
}: {
  closing: HomeCopy["closing"];
  /** Off the homepage the brief lives at the home's #brief, e.g. "/it#brief". */
  actionHref?: string;
}) {
  const d = (n: number) => ({ "--d": n }) as CSSProperties;
  return (
    <section className="bg-ink-raised text-ink-foreground overflow-hidden">
      <div className="page-x grid gap-12 pt-20 md:pt-28 lg:grid-cols-12 lg:items-end">
        <p data-reveal className="t-lead max-w-[34ch] text-white/85 lg:col-span-4 lg:mb-28">
          {closing.aside}
        </p>
        <div data-reveal style={d(1)} className="lg:col-span-7 lg:col-start-6 lg:justify-self-end">
          <div className="bg-background text-ink mx-auto flex w-[90%] translate-y-[60px] rotate-1 flex-col justify-center px-8 pt-8 pb-[92px] text-center sm:px-12 sm:pt-12 sm:pb-[108px] lg:aspect-[7/5] lg:w-[44vw] lg:rotate-2">
            <h2 className="t-3">{closing.title}</h2>
            <p className="t-lead mt-6">
              {closing.fill[0]}{" "}
              <span aria-hidden="true" className="border-ink/50 inline-block w-[3.5em] translate-y-[0.15em] border-b-2" />{" "}
              {closing.fill[1]}
            </p>
            <p className="t-body mt-3 text-stone-700">{closing.description}</p>
            <a
              href={actionHref}
              className="bg-ink hover:bg-ink-soft mt-8 flex h-14 w-full items-center justify-center text-base font-semibold text-white transition-colors duration-[180ms] active:scale-[0.98] motion-reduce:active:scale-100"
            >
              {closing.primary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
