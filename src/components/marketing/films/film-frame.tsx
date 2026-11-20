"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

/**
 * The frame every product film shares (films/*-film.tsx): it walks the film
 * through its steps and gives the root one class per step reached, s1 to sN,
 * kept until the loop starts over. Each film's stylesheet turns those classes
 * into CSS transitions on transform and opacity, so leaving a step (the
 * reset) plays the same path backwards.
 *
 * It runs only on screen and in a visible tab, has its own pause button (a
 * loop longer than five seconds needs one), and with reduced motion it stops
 * on the last frame. The root is one `role="img"` with the whole story in its
 * label, and `data-ui`, because a film shows the product's own interface.
 */
export function FilmFrame({
  steps,
  label,
  className,
  children,
}: {
  /** How long each step holds, in ms; step 0 is the opening frame. */
  steps: readonly number[];
  /** The whole story, for screen readers. */
  label: string;
  /** The film's own classes on the root (its stylesheet scopes to them). */
  className: string;
  children: ReactNode;
}) {
  const last = steps.length - 1;
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(node);
    const onVisibility = () => {
      if (document.hidden) setVisible(false);
      else if (node.getBoundingClientRect().top < window.innerHeight) setVisible(true);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (reduced || !playing || !visible) return;
    const timer = window.setTimeout(() => setStep((current) => (current >= last ? 0 : current + 1)), steps[step]);
    return () => window.clearTimeout(timer);
  }, [step, playing, visible, reduced, steps, last]);

  const shown = reduced ? last : step;
  const classes = [className, ...Array.from({ length: shown }, (_, i) => `s${i + 1}`)].join(" ");

  return (
    <div className="film">
      <div ref={rootRef} data-ui role="img" aria-label={label} className={classes}>
        {children}
      </div>
      {reduced ? null : (
        <button
          type="button"
          onClick={() => setPlaying((value) => !value)}
          aria-pressed={!playing}
          className="text-link text-ink mt-3 text-sm font-medium"
        >
          {playing ? "Pause animation" : "Play animation"}
        </button>
      )}
    </div>
  );
}
