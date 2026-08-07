"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "@/components/ui/icons";
import { BrowserFrame } from "@/components/marketing/browser-frame";
import { cn } from "@/lib/utils";
import type { ServiceShowcaseItem, ServiceShowcaseMedia } from "@/data/site";

type ServiceShowcaseProps = {
  items: ServiceShowcaseItem[];
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
export function ServiceShowcase({ items }: ServiceShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = items[activeIndex];

  function focusTab(index: number) {
    const next = (index + items.length) % items.length;
    setActiveIndex(next);
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
        aria-label="What we build"
        aria-orientation="horizontal"
        className="flex flex-wrap gap-2 border-b border-slate-200 pb-4"
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
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "focus-visible:ring-brand cursor-pointer rounded-md px-4 py-2 text-sm font-semibold outline-none transition focus-visible:ring-2",
                isActive
                  ? "bg-ink text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        tabIndex={0}
        id={`showcase-panel-${active.key}`}
        aria-labelledby={`showcase-tab-${active.key}`}
        className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
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
            <Link
              href={active.proof.href}
              className="text-eyebrow mt-2 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
            >
              Explore {active.proof.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <ShowcaseMedia media={active.media} active />
      </div>
    </div>
  );
}
