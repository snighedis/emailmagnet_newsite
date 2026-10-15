import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type EyebrowTone = "brand" | "ink";

type EyebrowProps = ComponentProps<"p"> & {
  tone?: EyebrowTone;
  /** Editorial section number ("01"): switches the label to the monospace style. */
  index?: string;
};

const toneClasses: Record<EyebrowTone, string> = {
  brand: "text-eyebrow",
  ink: "text-ink-muted",
};

/**
 * Small uppercase label that anchors a section heading (HubSpot-style eyebrow).
 * Use `tone="ink"` on dark sections.
 */
export function Eyebrow({ tone = "brand", index, className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        index
          ? "flex items-center gap-3 font-mono text-xs font-medium tracking-[0.14em] uppercase"
          : "text-sm font-semibold tracking-[0.16em] uppercase",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {index ? (
        <>
          {/* The orange lives in the rule, not in 12px text (contrast, ADR 0002) */}
          <span aria-hidden="true" className="bg-brand h-px w-6 shrink-0" />
          <span>{index}</span>
        </>
      ) : null}
      <span>{children}</span>
    </p>
  );
}
