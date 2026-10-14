"use client";

import { LocaleLink } from "@/i18n/locale-link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "@/components/ui/icons";
import { BrowserFrame } from "@/components/marketing/browser-frame";
import { cn } from "@/lib/utils";
import type { ServiceShowcaseItem, ServiceShowcaseMedia } from "@/data/site";

type ServiceShowcaseProps = {
  items: ServiceShowcaseItem[];
  /** Localised strings; `explore` has a `{name}` placeholder. Defaults to English. */
  labels?: { tablist: string; explore: string };
};

function ShowcaseMedia({ media, active }: { media: ServiceShowcaseMedia; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoSrc = media.kind === "video" ? media.src : null;

  // Play the demo video only while its tab is active, and never when the
  // visitor prefers reduced motion. videoSrc is a dependency because the
  // <video> only mounts once a video tab is selected: keying the effect on
  // `active` alone leaves it stuck on the first render, when there is no
  // video element yet, so playback would never start.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (active && !reduceMotion) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [active, videoSrc]);

  if (media.kind === "video") {
    return (
      <BrowserFrame url={media.url}>
        <video ref={videoRef} loop muted playsInline preload="metadata" className="h-auto w-full">
          <source src={media.src} type="video/mp4" />
        </video>
      </BrowserFrame>
    );
  }

  // Artwork that already contains its own browser window renders bare, with
  // the same elevation and radius as the framed variants.
  if (media.framed === false) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={media.src}
        alt={media.alt}
        width={media.width ?? 1280}
        height={media.height ?? 800}
        loading="lazy"
        decoding="async"
        className="shadow-soft-lg h-auto w-full rounded-2xl border border-black/[0.06]"
      />
    );
  }

  return (
    <BrowserFrame
      src={media.src}
      alt={media.alt}
      width={media.width ?? 1361}
      height={media.height ?? 852}
      url={media.alt}
    />
  );
}

/**
 * Apollo-style interactive showcase: one tab per service line, each proven by
 * a product we shipped for ourselves. Keyboard accessible (arrow keys move
 * between tabs) and honest by construction: every visual is a real product.
 */
export function ServiceShowcase({
  items,
  labels = { tablist: "What we build", explore: "Explore {name}" },
}: ServiceShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = items[activeIndex];

  function select(index: number) {
    setActiveIndex(index);
    // On a phone the tabs are one scrolling row: keep the chosen tab fully in view.
    tabRefs.current[index]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
  }

  function focusTab(index: number) {
    const next = (index + items.length) % items.length;
    select(next);
    tabRefs.current[next]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent, index: number) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      focusTab(index + 1);
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      focusTab(index - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(items.length - 1);
    }
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label={labels.tablist}
        aria-orientation="horizontal"
        className="-mx-4 flex snap-x scroll-px-4 gap-2 overflow-x-auto border-b border-slate-200 px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={item.key}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              role="tab"
              id={`showcase-tab-${item.key}`}
              aria-selected={isActive}
              aria-controls={isActive ? `showcase-panel-${item.key}` : undefined}
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "focus-visible:ring-brand relative min-h-11 shrink-0 cursor-pointer snap-start rounded-md px-4 text-sm font-semibold whitespace-nowrap outline-none transition focus-visible:ring-2 active:scale-[0.97] motion-reduce:active:scale-100",
                isActive
                  ? "bg-slate-100 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950",
              )}
            >
              {/* One dark pill shared by every tab: it slides to the chosen tab
                  instead of jumping. z-10 keeps it above the siblings' grey while
                  it travels; each label sits above it. Always rendered, so server
                  and client markup match; reduced motion only drops the slide. */}
              {isActive ? (
                <motion.span
                  layoutId="showcase-tab-pill"
                  aria-hidden="true"
                  className="bg-ink absolute inset-0 z-10 rounded-md"
                  transition={reduceMotion ? { duration: 0 } : { type: "spring", duration: 0.35, bounce: 0 }}
                />
              ) : null}
              <span className="relative z-20">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div
        key={active.key}
        role="tabpanel"
        tabIndex={0}
        id={`showcase-panel-${active.key}`}
        aria-labelledby={`showcase-tab-${active.key}`}
        className="animate-in fade-in-0 mt-10 grid gap-10 duration-300 motion-reduce:animate-none lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
      >
        <div className="space-y-5">
          <h3 className="text-ink text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            {active.title}
          </h3>
          <p className="text-lg leading-8 text-slate-600">{active.description}</p>
          <ul className="space-y-3">
            {active.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 leading-7 text-slate-700">
                <CheckCircle2 className="text-accent-teal mt-1 h-4 w-4 shrink-0" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-slate-200 pt-5">
            <p className="text-sm leading-6 text-slate-500">{active.proof.note}</p>
            <LocaleLink
              href={active.proof.href}
              className="text-eyebrow mt-2 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
            >
              {labels.explore.replace("{name}", active.proof.name)}
              <ArrowRight className="h-4 w-4" />
            </LocaleLink>
          </div>
        </div>
        <ShowcaseMedia media={active.media} active />
      </div>
    </div>
  );
}
