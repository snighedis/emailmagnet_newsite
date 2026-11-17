import type { ReactNode } from "react";
import type { getPageCopy } from "@/copy";
import { Photo, type PhotoKey } from "@/components/marketing/photo";

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
export function AutomationFragment({
  kind,
  copy,
  photo,
}: {
  kind: AutomationKind;
  copy: Fragments;
  photo?: FragmentPhoto;
}) {
  const card = (
    <>
      {kind === "email" ? <Email copy={copy.email} /> : null}
      {kind === "quote" ? <Quote copy={copy.quote} /> : null}
      {kind === "data" ? <Data copy={copy.data} /> : null}
      {kind === "bookings" ? <Bookings copy={copy.bookings} /> : null}
    </>
  );

  if (photo) return <OnPhoto photo={photo}>{card}</OnPhoto>;

  return (
    <div aria-hidden="true" className="bg-surface-muted flex items-center justify-center p-4 lg:p-8">
      <div data-ui className="w-full max-w-[26rem] rounded-xl bg-white p-5">
        {card}
      </div>
    </div>
  );
}

export type FragmentPhoto = {
  name: PhotoKey;
  alt: string;
  sizes: string;
  /** object-position for this crop: keep the subject clear of the card. */
  position?: string;
  priority?: boolean;
  /** Tailwind aspect class for the crop; 16:11 by default. */
  ratio?: string;
  /** The side the card leans out of the picture on desktop, into the column gap (3.5rem). */
  side?: "left" | "right";
};

/**
 * A photograph of the reader's world with the piece of interface over its foot:
 * the picture says where, the card says what the software did. The card follows
 * the picture and overlaps only its foot, by a fixed 6rem on desktop (2.5rem on
 * phones and tablets), so a tall card never covers the subject; on desktop it
 * also leans 3.5rem out into the column gap.
 * The picture is described; the card stays hidden from screen readers, as the
 * text beside it says the same thing.
 */
export function OnPhoto({ photo, children }: { photo: FragmentPhoto; children: ReactNode }) {
  const side = photo.side === "left" ? "lg:mr-auto lg:-ml-14" : "lg:ml-auto lg:-mr-14";
  return (
    <div className="relative">
      <div className={`bg-surface-muted ${photo.ratio ?? "aspect-[16/11]"}`}>
        <Photo
          name={photo.name}
          alt={photo.alt}
          sizes={photo.sizes}
          position={photo.position}
          priority={photo.priority}
        />
      </div>
      <div
        aria-hidden="true"
        data-ui
        className={`relative mx-4 -mt-10 max-w-[26rem] rounded-xl bg-white p-5 lg:-mt-24 lg:w-[min(26rem,85%)] ${side}`}
      >
        {children}
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
