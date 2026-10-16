"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import type { HomeCopy } from "@/copy/en/home";
import {
  MINUTES_EACH,
  TIMES_PER_WEEK,
  briefMailto,
  briefText,
  formatFormula,
  formatHours,
  monthlyHours,
  type BriefAnswers,
} from "@/lib/brief";
import { cn } from "@/lib/utils";

type BriefCopy = HomeCopy["brief"];

type BriefProps = {
  copy: BriefCopy;
  lang: string;
  supportEmail?: string;
  /** `side`: questions left, result card right (sticky). `stack`: questions in a
   *  two-column grid, result card below them, full width. */
  layout?: "side" | "stack";
};

type ChoiceProps = {
  name: string;
  legend: string;
  options: Array<{ value: string; label: string }>;
  value?: string;
  onChange: (value: string) => void;
};

/** One question: native radios dressed as chips, so keyboard and screen readers work as they are. */
function Choice({ name, legend, options, value, onChange }: ChoiceProps) {
  return (
    <fieldset>
      <legend className="text-base font-semibold text-stone-950">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm font-medium transition select-none",
              "border-stone-300 bg-white text-stone-700 hover:border-stone-400 hover:text-stone-950",
              "has-checked:border-ink has-checked:bg-ink has-checked:text-white",
              "has-focus-visible:ring-brand has-focus-visible:ring-2 has-focus-visible:ring-offset-2",
              "active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100",
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

/**
 * The homepage brief: four taps give the visitor what one repetitive task costs
 * them today, in hours a month. Deterministic and client-side; the answers leave
 * the page only through the visitor's own mail app. Never shows a saving.
 */
export function Brief({
  copy,
  lang,
  supportEmail = "support@dentokudev.com",
  layout = "side",
}: BriefProps) {
  const id = useId();
  const [answers, setAnswers] = useState<BriefAnswers>({});
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  // Phone layout stacks the result under the questions, so the last tap lands
  // off screen. Track both: the bar shows while the visitor is in the questions
  // and the result card is not visible.
  const [formInView, setFormInView] = useState(false);
  const [resultInView, setResultInView] = useState(false);

  useEffect(() => {
    const form = formRef.current;
    const number = numberRef.current;
    if (!form || !number || typeof IntersectionObserver === "undefined") return;
    // The result counts as seen only when the number line is fully on screen:
    // the card's edge peeking in at the bottom is not enough.
    const formObserver = new IntersectionObserver(([entry]) => setFormInView(entry.isIntersecting));
    const numberObserver = new IntersectionObserver(
      ([entry]) => setResultInView(entry.intersectionRatio >= 0.99),
      { threshold: [0, 0.99] },
    );
    formObserver.observe(form);
    numberObserver.observe(number);
    return () => {
      formObserver.disconnect();
      numberObserver.disconnect();
    };
  }, []);

  const hours = monthlyHours(answers);
  const complete = Boolean(answers.business && answers.task && hours !== null);
  const labels = {
    business: answers.business
      ? copy.business.options[answers.business as keyof typeof copy.business.options]
      : undefined,
    task: answers.task ? copy.task.options[answers.task as keyof typeof copy.task.options] : undefined,
  };

  const mailto = useMemo(
    () => (complete ? briefMailto(supportEmail, answers, labels, copy.text, lang) : undefined),
    // labels derive from answers and copy
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [complete, answers, copy, lang, supportEmail],
  );

  const set = (key: keyof BriefAnswers, value: string | number) => {
    setCopied(false);
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(
        `${supportEmail}\n\n${briefText(answers, labels, copy.text, lang)}`,
      );
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const barVisible = hours !== null && formInView && !resultInView;

  const showResult = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resultRef.current?.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
    resultRef.current?.focus({ preventScroll: true });
  };

  const questions = [
    {
      key: "business",
      legend: copy.business.legend,
      options: Object.entries(copy.business.options).map(([value, label]) => ({ value, label })),
      value: answers.business,
      onChange: (value: string) => set("business", value),
    },
    {
      key: "task",
      legend: copy.task.legend,
      options: Object.entries(copy.task.options).map(([value, label]) => ({ value, label })),
      value: answers.task,
      onChange: (value: string) => set("task", value),
    },
    {
      key: "times",
      legend: copy.times.legend,
      options: TIMES_PER_WEEK.map((n) => ({ value: String(n), label: String(n) })),
      value: answers.timesPerWeek ? String(answers.timesPerWeek) : undefined,
      onChange: (value: string) => set("timesPerWeek", Number(value)),
    },
    {
      key: "minutes",
      legend: copy.minutes.legend,
      options: MINUTES_EACH.map((n) => ({ value: String(n), label: `${n} ${copy.minutes.unit}` })),
      value: answers.minutesEach ? String(answers.minutesEach) : undefined,
      onChange: (value: string) => set("minutesEach", Number(value)),
    },
  ];
  const stack = layout === "stack";

  const resultCard = (
    <div
      ref={resultRef}
      tabIndex={-1}
      className="scroll-mt-24 rounded-2xl border border-stone-200 bg-white p-6 outline-none md:p-8"
    >
      <div ref={numberRef} aria-live="polite" className={stack ? undefined : "min-h-28"}>
        {hours === null ? (
          <p className="text-lg leading-8 text-stone-600">{copy.result.idle}</p>
        ) : (
          <>
            <p className="font-heading text-ink text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
              {copy.result.lead}{" "}
              <span key={hours} className="text-brand-cta animate-in fade-in-0 duration-150 motion-reduce:animate-none">
                {formatHours(hours, copy.text, lang)}
              </span>{" "}
              {copy.result.tail}
            </p>
            <p className="mt-3 font-mono text-xs text-stone-500 tabular-nums">
              {formatFormula(answers, copy.text, lang)}
            </p>
          </>
        )}
      </div>
      <p className="mt-5 border-t border-stone-200 pt-5 text-sm leading-6 text-stone-600">
        {copy.method}
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {complete && mailto ? (
          <Button asChild size="lg" className="font-semibold">
            <a href={mailto}>
              {copy.send}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button size="lg" className="font-semibold" disabled>
            {copy.send}
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
        <Button size="lg" variant="outline" onClick={copyBrief} disabled={!complete}>
          {copied ? copy.copied : copy.copy}
        </Button>
      </div>
      <p className="mt-4 text-sm leading-6 text-stone-500">
        {copy.fallback}{" "}
        <a href={`mailto:${supportEmail}`} className="text-eyebrow font-medium hover:underline">
          {supportEmail}
        </a>
      </p>
      <p className="mt-2 text-xs leading-5 text-stone-500">{copy.privacy}</p>
    </div>
  );

  return (
    <div className={stack ? "space-y-8" : "grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"}>
      <form
        ref={formRef}
        className={stack ? "grid gap-6 sm:grid-cols-2 sm:gap-x-10" : "space-y-8"}
        onSubmit={(event) => event.preventDefault()}
      >
        {questions.map((q) => (
          <Choice
            key={q.key}
            name={`${id}-${q.key}`}
            legend={q.legend}
            options={q.options}
            value={q.value}
            onChange={q.onChange}
          />
        ))}
      </form>

      {/* The result: the visitor's own baseline, with the formula visible so it can be checked.
          Stacked under the questions it appears only once there is a number to show. */}
      {stack ? (
        hours !== null ? resultCard : <div ref={resultRef} tabIndex={-1} className="hidden" />
      ) : (
        <div className="lg:sticky lg:top-28 lg:self-start">{resultCard}</div>
      )}

      {/* Phone only: the result follows the visitor while they are still in the
          questions. Enters from the bottom edge it is anchored to and leaves the
          same way once the result card is on screen. Decorative duplicate of the
          live region above, so it is hidden from assistive tech. Portalled to
          <body>: the sections' entrance animation leaves a transform on them,
          which would pin a fixed child to the section instead of the screen. */}
      {hours !== null ? createPortal(
        <div
          aria-hidden="true"
          inert={!barVisible || undefined}
          className={cn(
            "fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden",
            "transition-[translate,opacity] duration-250 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "starting:translate-y-full starting:opacity-0",
            barVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
            "motion-reduce:translate-y-0 motion-reduce:duration-150 motion-reduce:starting:translate-y-0",
          )}
        >
          <div className="shadow-soft-lg flex items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white py-2 pr-2 pl-4">
            <p className="text-sm leading-5 text-stone-700">
              {copy.result.lead}{" "}
              <span className="text-brand-cta font-semibold">{formatHours(hours, copy.text, lang)}</span>{" "}
              {copy.result.tail}
            </p>
            <Button size="lg" variant="outline" className="shrink-0" onClick={showResult} tabIndex={-1}>
              {copy.barCta}
            </Button>
          </div>
        </div>,
        document.body,
      ) : null}
    </div>
  );
}
