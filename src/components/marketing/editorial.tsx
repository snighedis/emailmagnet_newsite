import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { LocaleLink } from "@/i18n/locale-link";

/**
 * The pieces the inner pages share in the homepage's system (DESIGN.md): the
 * opening on the column line, the short answer on the tone step, the plans,
 * the FAQ tiles and the related pages. Product pages and pricing are built
 * from these; the funnel pages (About, FAQ, Contact) use some of them.
 */

/** Stagger index for a revealed element (globals.css, [data-reveal]). */
export const d = (n: number) => ({ "--d": n }) as CSSProperties;

export type Action = { label: string; href: string };

const isExternal = (href: string) => href.startsWith("http");

function ActionLink({ action, className, children }: { action: Action; className?: string; children: ReactNode }) {
  if (action.href.startsWith("#")) {
    return (
      <a href={action.href} className={className}>
        {children}
      </a>
    );
  }
  return isExternal(action.href) ? (
    <a href={action.href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <LocaleLink href={action.href} className={className}>
      {children}
    </LocaleLink>
  );
}

/** The one filled button, square, linking out or within the site. */
export function PrimaryAction({ action }: { action: Action }) {
  return (
    <Button asChild size="xl">
      <ActionLink action={action}>{action.label}</ActionLink>
    </Button>
  );
}

/** A plain text link beside the button. */
export function SecondaryAction({ action }: { action: Action }) {
  return (
    <ActionLink action={action} className="text-link text-ink text-base font-medium">
      {action.label}
    </ActionLink>
  );
}

export type Picture = { src: string; alt: string; width: number; height: number };

/**
 * The opening: the title on the column line in two authored lines, the
 * standfirst and the action to its left; then, when the page has one, the
 * product's own picture shown whole on the tone step with the facts beside it.
 */
export function PageOpening({
  title,
  standfirst,
  primary,
  secondary,
  picture,
  facts,
  note,
}: {
  title: readonly string[];
  standfirst: string;
  primary: Action;
  secondary?: Action;
  picture?: Picture;
  facts?: readonly { term: string; detail: string }[];
  /** A small note under the facts, such as the AI transparency notice. */
  note?: ReactNode;
}) {
  return (
    <section className="bg-background">
      <div className="page-x axis gap-y-8 pt-12 pb-14 md:pt-20 md:pb-16">
        <h1 className="t-display lines text-ink lg:col-start-2 lg:row-start-1">
          {title.map((line, i) => (
            <span key={line} className="line">
              <span data-line style={{ "--i": i } as CSSProperties}>
                {line}
              </span>
            </span>
          ))}
        </h1>
        <div data-reveal style={d(3)} className="space-y-6 lg:col-start-1 lg:row-start-1 lg:self-end lg:pr-12">
          <p className="t-lead text-ink max-w-[36ch]">{standfirst}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <PrimaryAction action={primary} />
            {secondary ? <SecondaryAction action={secondary} /> : null}
          </div>
        </div>
      </div>
      {picture ? (
        <div className="page-x axis gap-y-8 pb-20 md:pb-28">
          <figure data-reveal style={d(4)} className="bg-surface-muted lg:col-start-2 lg:row-start-1">
            <Image
              src={picture.src}
              alt={picture.alt}
              width={picture.width}
              height={picture.height}
              priority
              sizes="(min-width: 1024px) 56vw, 92vw"
              className="h-auto w-full object-contain"
            />
          </figure>
          {facts ? (
            <div data-reveal style={d(5)} className="space-y-8 lg:col-start-1 lg:row-start-1 lg:self-end lg:pr-12">
              <dl className="space-y-5">
                {facts.map((fact) => (
                  <div key={fact.term}>
                    <dt className="t-3 text-ink">{fact.term}</dt>
                    <dd className="t-body text-ink mt-1 max-w-[34ch]">{fact.detail}</dd>
                  </div>
                ))}
              </dl>
              {note ? <div className="text-ink max-w-[40ch] text-sm leading-6">{note}</div> : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

/**
 * "In short" on the tone step: the answer set at statement size, with what the
 * product is not beside it when the page says so.
 */
export function ShortAnswer({
  title,
  body,
  aside,
}: {
  title: string;
  body: string;
  aside?: { title: string; body: string };
}) {
  return (
    <section className="bg-surface-muted">
      <div className="page-x axis gap-y-6 py-20 md:py-28">
        <h2 data-reveal className="t-3 text-ink">
          {title}
        </h2>
        <div className="space-y-8">
          <p data-reveal style={d(1)} className="t-3 t-3-compact text-ink max-w-[54ch]">
            {body}
          </p>
          {aside ? (
            <div data-reveal style={d(2)} className="max-w-[60ch] space-y-2">
              <h3 className="t-lead text-ink font-semibold">{aside.title}</h3>
              <p className="t-body text-ink">{aside.body}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/**
 * A section with its title and lead to the left of the column line (sticky on
 * desktop) and its content on the line.
 */
export function SideSection({
  id,
  title,
  lead,
  aside,
  tone = "background",
  children,
}: {
  id?: string;
  title: string;
  lead?: string;
  aside?: ReactNode;
  tone?: "background" | "muted";
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${tone === "muted" ? "bg-surface-muted" : "bg-background"} scroll-mt-16`}>
      <div className="page-x axis gap-y-10 py-20 md:py-32">
        <div className="space-y-5 lg:sticky lg:top-24 lg:self-start lg:pr-12">
          <h2 data-reveal className="t-2 text-ink">
            {title}
          </h2>
          {lead ? (
            <p data-reveal style={d(1)} className="t-lead text-ink max-w-[40ch]">
              {lead}
            </p>
          ) : null}
          {aside ? (
            <div data-reveal style={d(2)}>
              {aside}
            </div>
          ) : null}
        </div>
        <div data-reveal style={d(2)}>
          {children}
        </div>
      </div>
    </section>
  );
}

/** What the product does: a heading and a sentence each, two to a row, no icons. */
export function FeatureList({ items }: { items: readonly { title: string; description: string }[] }) {
  return (
    <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="space-y-2">
          <h3 className="t-3 text-ink">{item.title}</h3>
          <p className="t-body text-ink max-w-[46ch]">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

/**
 * The steps on the orange field, as on the homepage's "How we work": order shown
 * by position in a real list, never by printed numbers.
 */
export function Steps({
  title,
  lead,
  steps,
  picture,
}: {
  title: string;
  lead?: string;
  steps: readonly { title: string; description: string }[];
  picture?: Picture;
}) {
  return (
    <section className="bg-brand text-ink">
      <div className="page-x axis gap-y-10 py-20 md:py-32">
        <div className="space-y-5 lg:pr-12">
          <h2 data-reveal className="t-2">
            {title}
          </h2>
          {lead ? (
            <p data-reveal style={d(1)} className="t-lead max-w-[40ch]">
              {lead}
            </p>
          ) : null}
        </div>
        <div className="space-y-14">
          <ol className="space-y-10">
            {steps.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                style={d(i + 1)}
                className="grid gap-x-12 gap-y-3 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-baseline"
              >
                <h3 className="t-3">{step.title}</h3>
                <p className="t-body max-w-[44ch]">{step.description}</p>
              </li>
            ))}
          </ol>
          {picture ? (
            <figure data-reveal style={d(2)} className="bg-white">
              <Image
                src={picture.src}
                alt={picture.alt}
                width={picture.width}
                height={picture.height}
                sizes="(min-width: 1024px) 56vw, 92vw"
                className="h-auto w-full object-contain"
              />
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export type Plan = {
  name: string;
  price: string;
  /** Beside the price: "once", "a month". */
  cadence?: string;
  description?: string;
  features: readonly string[];
  action?: Action;
  /** The plan in the orange: the one the page recommends, never a "most popular" claim. */
  featured?: boolean;
};

/** The plans as filled panels side by side: the price large, what it includes, one action. */
export function PlanPanels({ plans, onMuted = false }: { plans: readonly Plan[]; onMuted?: boolean }) {
  const quiet = onMuted ? "bg-background" : "bg-surface-muted";
  const columns = plans.length > 3 ? "sm:grid-cols-2" : "md:grid-cols-2";
  return (
    <ul className={`grid gap-2 ${columns}`}>
      {plans.map((plan, i) => (
        <li
          key={plan.name}
          data-reveal
          style={d(i)}
          className={`${plan.featured ? "bg-brand" : quiet} text-ink flex flex-col p-6 md:p-8`}
        >
          <h3 className="t-lead font-semibold">{plan.name}</h3>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-3">
            <span className="t-2">{plan.price}</span>
            {plan.cadence ? <span className="t-body">{plan.cadence}</span> : null}
          </p>
          {plan.description ? <p className="t-body mt-4 max-w-[40ch]">{plan.description}</p> : null}
          <ul className="t-body mt-6 flex-1 list-disc space-y-2 pl-5">
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          {plan.action ? (
            <div className="mt-8">
              {plan.featured ? (
                <Button asChild size="xl" variant="secondary">
                  <ActionLink action={plan.action}>{plan.action.label}</ActionLink>
                </Button>
              ) : (
                <PrimaryAction action={plan.action} />
              )}
            </div>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

/**
 * The homepage's accordion of filled tiles, one open at a time in the orange.
 * Native <details>, so every answer is in the HTML.
 */
export function FaqTiles({
  items,
  name = "faq",
  onMuted = false,
}: {
  items: readonly { question: string; answer: string }[];
  name?: string;
  onMuted?: boolean;
}) {
  const quiet = onMuted ? "bg-background not-open:hover:bg-[#e7e7e4]" : "bg-surface-muted not-open:hover:bg-[#e7e7e4]";
  return (
    <div className="space-y-1.5 lg:space-y-2">
      {items.map((item, i) => (
        <details
          key={item.question}
          name={name}
          open={i === 0}
          className={`faq-item ${quiet} open:bg-brand text-ink group transition-colors duration-[240ms]`}
        >
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 text-[18px] leading-snug font-medium select-none md:min-h-18 md:px-6 md:text-[20px] [&::-webkit-details-marker]:hidden">
            {item.question}
            <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
              <span className="bg-ink absolute top-1/2 left-0 h-[3px] w-4 -translate-y-1/2" />
              <span className="bg-ink absolute top-0 left-1/2 h-4 w-[3px] -translate-x-1/2 transition-transform duration-[240ms] ease-[var(--ease-out)] group-open:rotate-90 motion-reduce:transition-none" />
            </span>
          </summary>
          <p className="faq-answer t-body max-w-[60ch] px-5 pb-6 md:px-6">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** Related pages: a heading and plain text links. */
export function RelatedLinks({
  title,
  ariaLabel,
  links,
}: {
  title: string;
  ariaLabel: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <nav aria-label={ariaLabel} className="space-y-3">
      <h3 className="t-lead text-ink font-semibold">{title}</h3>
      <ul className="t-body text-ink space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <LocaleLink href={link.href} className="text-link">
              {link.label}
            </LocaleLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/**
 * A real table of rows, each on a filled band. On a phone each row stacks into
 * a block with its column names written in, so nothing scrolls sideways.
 */
export function RowTable({
  caption,
  columns,
  rows,
  onMuted = false,
}: {
  caption: string;
  columns: readonly [string, string, string];
  rows: readonly (readonly [string, string, string])[];
  onMuted?: boolean;
}) {
  return (
    <table className="t-body text-ink w-full border-separate border-spacing-y-2 text-left">
      <caption className="sr-only">{caption}</caption>
      <thead className="max-md:sr-only">
        <tr>
          {columns.map((column) => (
            <th key={column} scope="col" className="t-lead px-5 pb-2 font-semibold">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([head, ...cells]) => (
          <tr key={head} className={`${onMuted ? "bg-background" : "bg-surface-muted"} max-md:flex max-md:flex-col max-md:py-3`}>
            <th scope="row" className="px-5 py-2 align-top font-semibold md:py-5">
              {head}
            </th>
            {cells.map((cell, i) => (
              <td key={columns[i + 1]} className="px-5 py-2 align-top md:py-5">
                <span className="block font-medium md:hidden">{columns[i + 1]}</span>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * A photograph shown whole in a fixed frame on a filled field, so covers of
 * different shapes line up without being cropped (DESIGN.md, "shown whole").
 */
export function FramedPhoto({
  src,
  alt,
  frame = "aspect-[3/2]",
  ground = "bg-surface-muted",
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  /** Tailwind aspect classes for the frame, e.g. "aspect-[3/2] lg:aspect-[21/9]". */
  frame?: string;
  ground?: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <span className={`${ground} ${frame} block overflow-hidden ${className}`}>
      {/* next/image doesn't paint reliably for these covers in this Next build; a plain img is dependable. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding="async"
        className="h-full w-full object-contain transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.02] motion-reduce:transition-none"
      />
    </span>
  );
}
