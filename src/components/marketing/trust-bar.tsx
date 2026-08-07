import { cn } from "@/lib/utils";

/**
 * Solid 5-point star. The shared icon set (Pepicons Pencil) only ships an
 * outline star, which reads as an empty/zero rating — so ratings use this
 * filled glyph instead. Color comes from `currentColor` via `text-*`.
 */
export function SolidStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-4 w-4 shrink-0", className)}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.5l2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.55l-5.9 3.11 1.13-6.57L2.45 9.44l6.6-.96L12 2.5z" />
    </svg>
  );
}

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
          <SolidStar key={i} className="text-ink/20" />
        ))}
      </span>
      <span
        className="absolute inset-0 flex overflow-hidden"
        style={{ width: `${pct}%` }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <SolidStar key={i} className="text-brand" />
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
        isInk ? "text-ink-muted" : "text-muted-foreground",
        className,
      )}
    >
      {typeof rating === "number" ? (
        <span className="flex items-center gap-2">
          <Stars rating={rating} />
          <span className="sr-only">{rating} out of 5</span>
          <span className={cn("font-semibold", isInk ? "text-white" : "text-ink")}>
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
