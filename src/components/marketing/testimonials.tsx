import Link from "next/link";
import { SolidStar } from "@/components/marketing/trust-bar";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  name: string;
  detail?: string;
};

type TestimonialsProps = {
  items: Testimonial[];
  /** Link to the public reviews so every quote stays verifiable. */
  sourceHref?: string;
  sourceLabel?: string;
  className?: string;
};

function FiveStars() {
  return (
    <span className="flex" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <SolidStar key={i} className="text-brand" />
      ))}
    </span>
  );
}

/**
 * Grid of verbatim user reviews. Quotes are real Chrome Web Store reviews, so a
 * source link is rendered to keep the social proof verifiable.
 */
export function Testimonials({ items, sourceHref, sourceLabel, className }: TestimonialsProps) {
  return (
    <div className={cn("space-y-6", className)}>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <figure
            key={item.name}
            className="shadow-soft flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 md:p-7"
          >
            <FiveStars />
            <blockquote className="mt-4 leading-7 text-slate-700">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm font-semibold text-slate-950">
              {item.name}
              {item.detail ? (
                <span className="block text-xs font-medium text-slate-500">{item.detail}</span>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
      {sourceHref ? (
        <p className="text-sm text-slate-500">
          <Link
            href={sourceHref}
            className="text-eyebrow font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {sourceLabel ?? "Read the reviews on the Chrome Web Store"}
          </Link>
        </p>
      ) : null}
    </div>
  );
}
