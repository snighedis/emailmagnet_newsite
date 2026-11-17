"use client";

import { useId, useState } from "react";

type QuoteDemoCopy = {
  request: { subject: string; from: string; body: string };
  listLabel: string;
  sample: string;
  client: string;
  quoteTitle: string;
  totalLabel: string;
  empty: string;
  status: string;
  items: Array<[string, number]>;
  initial: number[];
  locale: string;
};

const label = "text-muted-foreground text-sm";
const value = "text-base font-semibold text-ink";

/**
 * The page's live thing: a sample price list on the left, the quote it fills on
 * the right, in the language of the home's automation fragments (white card,
 * grey panel, the orange dot). Real checkboxes, so it works from the keyboard;
 * the server renders the initial selection, so without script the quote is
 * still there, filled in. The copy is passed in as props: client components
 * never import copy modules (src/copy/index.ts is server-only).
 */
export function QuoteDemo({ copy }: { copy: QuoteDemoCopy }) {
  const [picked, setPicked] = useState<number[]>(copy.initial);
  const id = useId();
  // "always": Italian otherwise leaves four-digit amounts ungrouped (2400 € instead of 2.400 €).
  const money = new Intl.NumberFormat(copy.locale, {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
    useGrouping: "always",
  } as Intl.NumberFormatOptions);
  const lines = copy.items.filter((_, i) => picked.includes(i));
  const total = lines.reduce((sum, [, cents]) => sum + cents, 0);

  const toggle = (i: number) =>
    setPicked((current) => (current.includes(i) ? current.filter((n) => n !== i) : [...current, i].sort((a, b) => a - b)));

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {/* The request the quote answers: the input, so it carries no orange dot */}
      <div aria-hidden="true" className="bg-surface-muted flex items-center justify-center p-4 md:col-span-2 lg:col-span-1 lg:p-8">
        <div data-ui className="w-full max-w-[26rem] rounded-xl bg-white p-5">
          <div className="flex items-baseline justify-between gap-3">
            <p className={value}>{copy.request.subject}</p>
            <p className={`${label} shrink-0 whitespace-nowrap`}>{copy.request.from}</p>
          </div>
          <p className="bg-surface-muted text-ink mt-3 rounded-lg p-3 text-base leading-snug">{copy.request.body}</p>
        </div>
      </div>

      <fieldset data-ui className="bg-surface-muted p-4 lg:p-8">
        <legend className="sr-only">{copy.listLabel}</legend>
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-ink t-lead font-semibold" aria-hidden="true">
            {copy.listLabel}
          </p>
          <p className={label}>{copy.sample}</p>
        </div>
        <ul className="mt-4 space-y-1.5">
          {copy.items.map(([item, cents], i) => {
            const checked = picked.includes(i);
            return (
              <li key={item}>
                <label
                  htmlFor={`${id}-${i}`}
                  className={`flex min-h-14 cursor-pointer items-center gap-4 rounded-lg px-4 py-3 transition-colors duration-[180ms] ${
                    checked ? "bg-white" : "bg-white/50 hover:bg-white/80"
                  }`}
                >
                  <input
                    id={`${id}-${i}`}
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(i)}
                    className="accent-brand size-5 shrink-0 cursor-pointer"
                  />
                  <span className="text-ink flex-1 text-base">{item}</span>
                  <span className="text-ink text-base tabular-nums">{money.format(cents / 100)}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <div className="bg-surface-muted flex items-center justify-center p-4 lg:p-8">
        <div data-ui className="w-full max-w-[26rem] rounded-xl bg-white p-5" aria-live="polite">
          <div className="flex items-baseline justify-between gap-3">
            <p className={value}>{copy.quoteTitle}</p>
            <p className={`${label} shrink-0 whitespace-nowrap`}>{copy.client}</p>
          </div>
          <div className="bg-surface-muted mt-3 space-y-2 rounded-lg p-3 tabular-nums">
            {lines.length === 0 ? <p className={label}>{copy.empty}</p> : null}
            {lines.map(([item, cents]) => (
              <p key={item} className="text-ink flex justify-between gap-3 text-base">
                <span>{item}</span>
                <span className="whitespace-nowrap">{money.format(cents / 100)}</span>
              </p>
            ))}
            <p className={`${value} flex justify-between gap-3 pt-1`}>
              <span>{copy.totalLabel}</span>
              <span className="whitespace-nowrap">{money.format(total / 100)}</span>
            </p>
          </div>
          <p className="text-ink mt-4 flex items-center gap-2 text-sm font-medium">
            <span aria-hidden="true" className="bg-brand size-2.5 shrink-0 rounded-full" />
            {copy.status}
          </p>
        </div>
      </div>
    </div>
  );
}
