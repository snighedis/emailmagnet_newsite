"use client";

import { useId, useMemo, useState } from "react";
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
      <legend className="text-base font-semibold text-slate-950">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-sm font-medium transition select-none",
              "border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:text-slate-950",
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
export function Brief({ copy, lang, supportEmail = "support@dentokudev.com" }: BriefProps) {
  const id = useId();
  const [answers, setAnswers] = useState<BriefAnswers>({});
  const [copied, setCopied] = useState(false);

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

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <form className="space-y-8" onSubmit={(event) => event.preventDefault()}>
        <Choice
          name={`${id}-business`}
          legend={copy.business.legend}
          options={Object.entries(copy.business.options).map(([value, label]) => ({ value, label }))}
          value={answers.business}
          onChange={(value) => set("business", value)}
        />
        <Choice
          name={`${id}-task`}
          legend={copy.task.legend}
          options={Object.entries(copy.task.options).map(([value, label]) => ({ value, label }))}
          value={answers.task}
          onChange={(value) => set("task", value)}
        />
        <Choice
          name={`${id}-times`}
          legend={copy.times.legend}
          options={TIMES_PER_WEEK.map((n) => ({ value: String(n), label: String(n) }))}
          value={answers.timesPerWeek ? String(answers.timesPerWeek) : undefined}
          onChange={(value) => set("timesPerWeek", Number(value))}
        />
        <Choice
          name={`${id}-minutes`}
          legend={copy.minutes.legend}
          options={MINUTES_EACH.map((n) => ({ value: String(n), label: `${n} ${copy.minutes.unit}` }))}
          value={answers.minutesEach ? String(answers.minutesEach) : undefined}
          onChange={(value) => set("minutesEach", Number(value))}
        />
      </form>

      {/* The result: the visitor's own baseline, with the formula visible so it can be checked. */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div aria-live="polite" className="min-h-28">
            {hours === null ? (
              <p className="text-lg leading-8 text-slate-600">{copy.result.idle}</p>
            ) : (
              <>
                <p className="font-heading text-ink text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
                  {copy.result.lead}{" "}
                  <span key={hours} className="text-brand-cta animate-in fade-in-0 duration-150 motion-reduce:animate-none">
                    {formatHours(hours, copy.text, lang)}
                  </span>{" "}
                  {copy.result.tail}
                </p>
                <p className="mt-3 font-mono text-xs text-slate-500 tabular-nums">
                  {formatFormula(answers, copy.text, lang)}
                </p>
              </>
            )}
          </div>
          <p className="mt-5 border-t border-slate-200 pt-5 text-sm leading-6 text-slate-600">
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
          <p className="mt-4 text-sm leading-6 text-slate-500">
            {copy.fallback}{" "}
            <a href={`mailto:${supportEmail}`} className="text-eyebrow font-medium hover:underline">
              {supportEmail}
            </a>
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-500">{copy.privacy}</p>
        </div>
      </div>
    </div>
  );
}
