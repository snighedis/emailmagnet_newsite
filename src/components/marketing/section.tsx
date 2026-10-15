import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SectionVariant =
  | "default"
  | "soft"
  | "muted"
  | "ink"
  | "blue"
  | "peach"
  | "mint"
  | "gradient";

type SectionSpacing = "default" | "compact" | "loose" | "none";
type SectionContainer = false | "default" | "narrow" | "wide";

const variantClasses: Record<SectionVariant, string> = {
  // Two tones (docs/adr/0002): the warm ground and ink. `muted` is the one
  // alternation tint for long pages; the older names map onto it.
  default: "bg-background text-foreground",
  soft: "bg-surface-soft text-foreground",
  muted: "bg-surface-muted text-foreground",
  ink: "bg-ink text-ink-foreground",
  blue: "bg-surface-muted text-foreground",
  peach: "bg-surface-peach text-foreground",
  mint: "bg-surface-muted text-foreground",
  gradient:
    "text-foreground bg-[radial-gradient(125%_120%_at_12%_8%,var(--brand-soft)_0%,var(--surface-peach)_40%,var(--surface-soft)_100%)]",
};

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-18 md:py-24",
  compact: "py-12 md:py-16",
  loose: "py-24 md:py-32",
  none: "",
};

const containerClasses: Record<Exclude<SectionContainer, false>, string> = {
  narrow: "mx-auto w-full max-w-4xl px-4",
  default: "mx-auto w-full max-w-7xl px-4",
  wide: "mx-auto w-full max-w-[88rem] px-4",
};

type SectionProps = ComponentProps<"section"> & {
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  container?: SectionContainer;
  containerClassName?: string;
};

/**
 * Consistent page section: background variant, vertical rhythm, and a centered
 * container. Pass `container={false}` to manage the inner layout yourself.
 */
export function Section({
  variant = "default",
  spacing = "default",
  container = "default",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        variantClasses[variant],
        spacingClasses[spacing],
        className,
      )}
      {...props}
    >
      {container === false ? (
        children
      ) : (
        <div className={cn(containerClasses[container], containerClassName)}>{children}</div>
      )}
    </section>
  );
}
