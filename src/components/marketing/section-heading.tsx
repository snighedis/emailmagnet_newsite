import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  tone?: "light" | "ink";
  className?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  tone = "light",
  className,
  descriptionClassName,
}: SectionHeadingProps) {
  const Heading = as;
  const isInk = tone === "ink";
  const isHero = as === "h1";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow
          tone={isInk ? "ink" : "brand"}
          className={align === "center" ? "inline-block" : undefined}
        >
          {eyebrow}
        </Eyebrow>
      ) : null}
      <Heading
        className={cn(
          "font-semibold tracking-[-0.02em] text-balance",
          isHero ? "text-4xl md:text-6xl" : "text-3xl md:text-5xl",
          isInk ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "text-lg leading-8 md:text-xl",
            isInk ? "text-ink-muted" : "text-slate-600",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
