import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  className,
}: SectionHeadingProps) {
  const Heading = as;

  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-4",
        align === "center" ? "text-center" : "mx-0 text-left",
        className,
      )}
    >
      {eyebrow ? (
        <Badge variant="secondary" className="rounded-full px-3 py-1 text-sm">
          {eyebrow}
        </Badge>
      ) : null}
      <Heading className="text-3xl font-semibold tracking-normal text-balance text-slate-950 md:text-5xl">
        {title}
      </Heading>
      {description ? (
        <p className="text-lg leading-8 text-slate-600 md:text-xl">{description}</p>
      ) : null}
    </div>
  );
}
