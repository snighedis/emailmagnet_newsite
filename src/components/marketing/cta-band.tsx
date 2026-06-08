import Link from "next/link";
import { ArrowRight } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Section } from "./section";
import { Eyebrow } from "./eyebrow";

type CtaLink = { label: string; href: string };

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primary: CtaLink;
  secondary?: CtaLink;
};

/**
 * High-contrast closing call-to-action on an ink panel with a soft brand glow.
 */
export function CtaBand({ eyebrow, title, description, primary, secondary }: CtaBandProps) {
  return (
    <Section variant="ink" containerClassName="relative">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        {eyebrow ? <Eyebrow tone="ink">{eyebrow}</Eyebrow> : null}
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-balance md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-ink-muted mt-5 text-lg leading-8">{description}</p>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="xl">
            <Link href={primary.href}>
              {primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          {secondary ? (
            <Button
              asChild
              size="xl"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
