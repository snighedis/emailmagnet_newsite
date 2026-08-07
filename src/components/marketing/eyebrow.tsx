import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type EyebrowTone = "brand" | "ink";

type EyebrowProps = ComponentProps<"p"> & {
  tone?: EyebrowTone;
};

const toneClasses: Record<EyebrowTone, string> = {
  brand: "text-eyebrow",
  ink: "text-ink-accent",
};

/**
 * Small uppercase label that anchors a section heading (HubSpot-style eyebrow).
 * Use `tone="ink"` on dark sections.
 */
export function Eyebrow({ tone = "brand", className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-sm font-semibold tracking-[0.16em] uppercase",
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
