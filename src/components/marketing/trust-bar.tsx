import { Star } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type TrustBarTone = "light" | "ink";

type TrustBarProps = {
  /** Only pass a real, sourced rating — stars are hidden when omitted. */
  rating?: number;
  reviewLabel?: string;
  highlight?: string;
  /** Extra short trust signals rendered as dot-separated items. */
  items?: string[];
  tone?: TrustBarTone;
  className?: string;
};

function Stars({ rating }: { rating: number }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span className="relative inline-flex" aria-hidden>
      <span className="flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 text-slate-300" />
        ))}
      </span>
      <span
        className="absolute inset-0 flex overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="fill-brand text-brand h-4 w-4 shrink-0" />
        ))}
      </span>
    </span>
  );
}

/**
 * Compact social-proof row: star rating + store label + a highlight metric.
 */
export function TrustBar({
  rating,
  reviewLabel = "Chrome Web Store",
  highlight,
  items,
  tone = "light",
  className,
}: TrustBarProps) {
  const isInk = tone === "ink";
  const trailing = [highlight, ...(items ?? [])].filter(Boolean) as string[];

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2 text-sm",
        isInk ? "text-ink-muted" : "text-slate-600",
        className,
      )}
    >
      {typeof rating === "number" ? (
        <span className="flex items-center gap-2">
          <Stars rating={rating} />
          <span className="sr-only">{rating} out of 5</span>
          <span className={cn("font-semibold", isInk ? "text-white" : "text-slate-900")}>
            {rating.toFixed(1)}
          </span>
          {reviewLabel ? <span>on {reviewLabel}</span> : null}
        </span>
      ) : null}
      {trailing.map((label, index) => (
        <span key={label} className="flex items-center gap-4">
          {index === 0 && typeof rating !== "number" ? null : (
            <span className="hidden h-1 w-1 rounded-full bg-current opacity-40 sm:block" aria-hidden />
          )}
          <span>{label}</span>
        </span>
      ))}
    </div>
  );
}
