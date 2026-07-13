"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "@/components/ui/icons";
import { BrowserFrame } from "@/components/marketing/browser-frame";
import { cn } from "@/lib/utils";
import type { ServiceShowcaseItem, ServiceShowcaseMedia } from "@/data/site";

type ServiceShowcaseProps = {
  items: ServiceShowcaseItem[];
};

/**
 * Stylized preview of the Volume Control PRO popup. We have no marketing
 * screenshot for this product yet, so this is an honest, clearly-labeled
 * representation built from the real UI concepts (slider up to 600%),
 * not a fake screenshot.
 */
function VolumeDemo() {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center gap-6 p-8 md:min-h-96">
      <div className="flex items-center gap-3">
        <Image
          src="/brand/volume-control-pro-icon.png"
          alt="Volume Control PRO icon"
          width={40}
          height={40}
          className="h-10 w-10 rounded-lg border border-slate-200 bg-slate-50 object-contain p-1.5"
        />
        <p className="text-lg font-semibold text-slate-950">Volume Control PRO</p>
      </div>
      <div className="w-full max-w-sm">
        <div className="flex items-baseline justify-between text-sm font-semibold">
          <span className="text-slate-500">Tab volume</span>
          <span className="text-brand text-2xl">600%</span>
        </div>
        <div className="relative mt-3 h-2 rounded-full bg-slate-200" aria-hidden>
          <div className="bg-brand absolute inset-y-0 left-0 w-full rounded-full" />
          <div className="border-brand absolute top-1/2 right-0 h-5 w-5 -translate-y-1/2 rounded-full border-2 bg-white shadow-sm" />
        </div>
        <div className="mt-2 flex justify-between text-xs font-medium text-slate-400" aria-hidden>
          <span>0%</span>
          <span>100%</span>
          <span>600%</span>
        </div>
      </div>
      <p className="text-xs text-slate-400">Stylized preview of the extension popup.</p>
    </div>
  );
}

function ShowcaseMedia({ media, active }: { media: ServiceShowcaseMedia; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play the demo video only while its tab is active, and never when the
  // visitor prefers reduced motion.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (active && !reduceMotion) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [active]);

  if (media.kind === "video") {
    return (
      <BrowserFrame url="ClickPilot AI, inside any text field">
        <video ref={videoRef} loop muted playsInline preload="metadata" className="h-auto w-full">
          <source src={media.src} type="video/mp4" />
        </video>
      </BrowserFrame>
    );
  }

  if (media.kind === "volume-demo") {
    return (
      <BrowserFrame url="Volume Control PRO, any tab">
        <VolumeDemo />
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
              aria-controls={`showcase-panel-${item.key}`}
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
