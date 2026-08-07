import { cn } from "@/lib/utils";

type Stat = { value: string; label: string };

type StatStripProps = {
  stats: Stat[];
  tone?: "light" | "ink";
  className?: string;
};

/**
 * Row of headline metrics (e.g. "5.0★", "200 / mo"). Reads as a definition
 * list for accessibility.
 */
export function StatStrip({ stats, tone = "light", className }: StatStripProps) {
  const isInk = tone === "ink";
  return (
    <dl
      className={cn(
        "grid gap-6 sm:grid-cols-3",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt
            className={cn(
              "text-3xl font-semibold tracking-[-0.02em] md:text-4xl",
              isInk ? "text-white" : "text-ink",
            )}
          >
            {stat.value}
          </dt>
          <dd className={cn("mt-1 text-sm leading-6", isInk ? "text-ink-muted" : "text-muted-foreground")}>
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}
