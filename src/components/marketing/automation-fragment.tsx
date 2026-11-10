import type { ReactNode } from "react";
import type { getPageCopy } from "@/copy";

type Fragments = ReturnType<typeof getPageCopy>["home"]["automate"]["fragments"];
export type AutomationKind = keyof Fragments;

/** The order of home.automate.items: each job has its fragment. */
export const AUTOMATION_KINDS: AutomationKind[] = ["email", "quote", "data", "bookings"];

const label = "text-muted-foreground text-sm";
const value = "text-base font-semibold text-ink";
const panel = "bg-surface-muted rounded-lg p-3";

/** The film's orange dot: it marks what the software did. */
function Done({ children }: { children: ReactNode }) {
  return (
    <p className="text-ink mt-4 flex items-center gap-2 text-sm font-medium">
      <span className="bg-brand size-2.5 shrink-0 rounded-full" />
      {children}
    </p>
  );
}

/**
 * One automation as a piece of interface, in the language of the home film (white
 * card, grey panels, the orange dot): the reply left in drafts, the quote filled
 * in from the price list, the amount copied to the client sheet, the day's
 * bookings in order. Sample data, the same names the film uses. Decorative: the
 * text beside it says what the software does, so it is hidden from screen readers.
 */
export function AutomationFragment({ kind, copy }: { kind: AutomationKind; copy: Fragments }) {
  return (
    <div aria-hidden="true" className="bg-surface-muted flex items-center justify-center p-4 lg:p-8">
      <div data-ui className="w-full max-w-[26rem] rounded-xl bg-white p-5">
        {kind === "email" ? <Email copy={copy.email} /> : null}
        {kind === "quote" ? <Quote copy={copy.quote} /> : null}
        {kind === "data" ? <Data copy={copy.data} /> : null}
        {kind === "bookings" ? <Bookings copy={copy.bookings} /> : null}
      </div>
    </div>
  );
}

function Email({ copy }: { copy: Fragments["email"] }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <p className={value}>{copy.subject}</p>
        <p className={`${label} shrink-0 whitespace-nowrap`}>{copy.from}</p>
      </div>
      <div className={`${panel} mt-3`}>
        <p className={label}>{copy.draftLabel}</p>
        <p className="text-ink mt-1 text-base leading-snug">{copy.draft}</p>
      </div>
      <Done>{copy.status}</Done>
    </>
  );
}

function Quote({ copy }: { copy: Fragments["quote"] }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <p className={value}>{copy.title}</p>
        <p className={`${label} shrink-0 whitespace-nowrap`}>{copy.client}</p>
      </div>
      <div className={`${panel} mt-3 space-y-2 tabular-nums`}>
        {copy.lines.map(([item, amount]) => (
          <p key={item} className="text-ink flex justify-between gap-3 text-base">
            <span>{item}</span>
            <span className="whitespace-nowrap">{amount}</span>
          </p>
        ))}
        <p className={`${value} flex justify-between gap-3 pt-1`}>
          <span>{copy.totalLabel}</span>
          <span className="whitespace-nowrap">{copy.total}</span>
        </p>
      </div>
      <Done>{copy.status}</Done>
    </>
  );
}

function Data({ copy }: { copy: Fragments["data"] }) {
  const cells = [
    [copy.client, copy.clientValue],
    [copy.amount, copy.amountValue],
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {[copy.from, copy.to].map((name) => (
          <div key={name} className={`${panel} space-y-2`}>
            <p className="text-ink text-sm font-semibold">{name}</p>
            {cells.map(([cellLabel, cellValue]) => (
              <div key={cellLabel}>
                <p className={label}>{cellLabel}</p>
                <p className={`${value} tabular-nums`}>{cellValue}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Done>{copy.status}</Done>
    </>
  );
}

function Bookings({ copy }: { copy: Fragments["bookings"] }) {
  return (
    <>
      <p className={value}>{copy.day}</p>
      <div className="mt-3 space-y-1.5">
        {copy.rows.map(([room, guest], i) => (
          <p key={room} className={`${panel} flex items-baseline gap-4`}>
            <span className={`${label} w-20 shrink-0`}>{room}</span>
            {/* The last room is free: its cell reads lighter than a booking */}
            <span className={i === copy.rows.length - 1 ? label : value}>{guest}</span>
          </p>
        ))}
      </div>
      <Done>{copy.status}</Done>
    </>
  );
}
