import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import type { IconType } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon?: IconType;
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
  index?: number;
  tone?: "light" | "ink";
  className?: string;
};

/**
 * Standard feature/value card with an icon badge. Becomes an interactive,
 * lifting card when `href` is provided. Use `tone="ink"` on dark sections.
 */
export function FeatureCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  index,
  tone = "light",
  className,
}: FeatureCardProps) {
  const isInk = tone === "ink";

  const cardClass = cn(
    "group relative flex h-full flex-col rounded-2xl p-6 transition",
    isInk
      ? "border border-white/10 bg-white/[0.04]"
      : "shadow-soft border border-slate-200/80 bg-white",
    href && (isInk ? "hover:bg-white/[0.07]" : "hover:shadow-soft-lg hover:-translate-y-0.5"),
    className,
  );

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        {Icon ? (
          <span
            className={cn(
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
              isInk ? "bg-white/10 text-teal-200" : "bg-brand-soft text-brand",
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
        ) : null}
        {typeof index === "number" ? (
          <span
            className={cn(
              "text-xs font-semibold tracking-[0.14em]",
              isInk ? "text-white/40" : "text-slate-300",
            )}
          >
            {String(index).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <div className={cn(Icon || typeof index === "number" ? "mt-5" : "")}>
        {eyebrow ? (
          <p
            className={cn(
              "text-xs font-semibold tracking-[0.14em] uppercase",
              isInk ? "text-teal-200" : "text-eyebrow",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h3
          className={cn(
            "text-xl font-semibold",
            eyebrow ? "mt-1" : "",
            isInk ? "text-white" : "text-slate-950",
          )}
        >
          {title}
        </h3>
        <p className={cn("mt-2 leading-7", isInk ? "text-ink-muted" : "text-slate-600")}>
          {description}
        </p>
      </div>
      {href ? (
        <span
          className={cn(
            "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold",
            isInk ? "text-white" : "text-eyebrow",
          )}
        >
          {linkLabel ?? "Learn more"}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cardClass}>
        {content}
      </Link>
    );
  }

  return <div className={cardClass}>{content}</div>;
}
