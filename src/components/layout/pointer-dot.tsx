"use client";

import { useEffect, useRef } from "react";

// Mouse or trackpad, wider than a phone: the same threshold klioh.com uses.
const ENABLED = "(hover: hover) and (pointer: fine) and (min-width: 768px)";
// Everything you click: links, buttons, the FAQ rows, and the brief's choices
// (a label around a hidden radio or checkbox).
const EXPANDS = "a, button, summary, label:has(input[type=\"radio\"], input[type=\"checkbox\"])";
// Fields you type in keep the text cursor, and the dot steps aside there.
const TYPED =
  'textarea, [contenteditable="true"], input:not([type]), input[type="text"], input[type="email"], input[type="tel"], input[type="url"], input[type="search"], input[type="number"], input[type="password"]';

// Whether the ground under an element is dark: the first ancestor with a mostly
// opaque background decides. Computed colours can be oklch(), so a 1px canvas
// turns each into RGB. Cached, since mouseover fires often.
const grounds = new WeakMap<Element, boolean>();
let pixel: CanvasRenderingContext2D | null = null;
function toRgba(color: string): number[] {
  pixel ??= document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (!pixel) return [255, 255, 255, 0];
  pixel.clearRect(0, 0, 1, 1);
  pixel.fillStyle = color;
  pixel.fillRect(0, 0, 1, 1);
  return [...pixel.getImageData(0, 0, 1, 1).data];
}
function isDark(start: Element): boolean {
  const cached = grounds.get(start);
  if (cached !== undefined) return cached;
  let dark = false;
  for (let el: Element | null = start; el; el = el.parentElement) {
    const [r, g, b, a] = toRgba(getComputedStyle(el).backgroundColor);
    if (a > 128) {
      // Ink grounds only: the orange button (about 113) must stay "light", so
      // the dot multiplies there and its ink label stays dark.
      dark = 0.2126 * r + 0.7152 * g + 0.0722 * b < 80;
      break;
    }
  }
  grounds.set(start, dark);
  return dark;
}

/**
 * The film's orange dot as the pointer, after klioh.com: it follows the mouse
 * exactly and grows on every link and button. The outer layer only moves, the
 * inner one only scales, so the growth can ease while the movement never lags.
 * It multiplies on light grounds and screens on dark ones, so it stays orange
 * and the text under it stays readable on both (klioh's `difference` would turn
 * the orange cyan here).
 * Styles in globals.css (.pointer-dot); the system cursor is hidden by
 * html.has-dot, which exists only while the dot is on.
 */
export function PointerDot() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = ref.current;
    if (!dot) return;
    const query = window.matchMedia(ENABLED);
    const root = document.documentElement;

    const onMove = (event: MouseEvent) => {
      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      dot.dataset.visible = "true";
    };
    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest) return;
      dot.dataset.expanded = String(Boolean(target.closest(EXPANDS)));
      dot.dataset.typing = String(Boolean(target.closest(TYPED)));
      dot.dataset.ground = isDark(target) ? "dark" : "light";
    };
    const onLeave = () => {
      dot.dataset.visible = "false";
    };

    const start = () => {
      root.classList.add("has-dot");
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseover", onOver);
      document.documentElement.addEventListener("mouseleave", onLeave);
    };
    const stop = () => {
      root.classList.remove("has-dot");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      dot.dataset.visible = "false";
    };
    const sync = () => (query.matches ? start() : stop());

    sync();
    query.addEventListener("change", sync);
    return () => {
      query.removeEventListener("change", sync);
      stop();
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-dot" data-visible="false" data-expanded="false">
      <span />
    </div>
  );
}
