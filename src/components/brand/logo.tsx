import { cn } from "@/lib/utils";

// The Dentoku Dev logo. The symbol is the original artwork as a PNG (cut from
// the 256px favicon, which unlike the old 128px file is not cropped at the
// bottom). The wordmark is the same Fira Sans Condensed text converted to
// outlines, so it paints with the HTML instead of waiting for a web font: the
// text wordmark was the mobile LCP element while that font loaded.

/** "DENTOKU DEV" in Fira Sans Condensed SemiBold, converted to outlines. */
const WORDMARK =
  "M17.2 1.6Q26.7 1.6 33.8 4.3Q40.8 7 45.2 14.6Q49.5 22.2 49.5 35.9Q49.5 70.8 18.6 70.8L0 70.8L0 1.6L17.2 1.6ZM14.4 12.2L14.4 60.2L19.4 60.2Q26.8 60.2 30.7 55Q34.6 49.7 34.6 35.9Q34.6 26.3 32.7 21.1Q30.7 15.9 27.4 14.1Q24.1 12.2 19.3 12.2ZM97.2 1.6L95.7 12.1L73.6 12.1L73.6 30.4L92.9 30.4L92.9 40.8L73.6 40.8L73.6 60.2L97.2 60.2L97.2 70.8L59.2 70.8L59.2 1.6ZM154.5 70.8L136.2 70.8L117.6 15.5Q117.8 16.9 117.8 17.7Q118.6 24.7 119.1 30.4Q119.5 36 119.5 43.5L119.5 70.8L106.7 70.8L106.7 1.6L124.7 1.6L143.6 57Q141.7 44 141.7 32.4L141.7 1.6L154.5 1.6ZM209.1 1.6L207.6 12.8L192.1 12.8L192.1 70.8L177.7 70.8L177.7 12.8L161.5 12.8L161.5 1.6ZM237.2 0Q250.5 0 257.8 9.3Q265.1 18.5 265.1 36.2Q265.1 53.7 257.8 63.1Q250.5 72.4 237.2 72.4Q223.9 72.4 216.6 63.2Q209.2 53.9 209.2 36.2Q209.2 18.7 216.6 9.4Q223.9 0 237.2 0ZM237.2 10.8Q230.6 10.8 227.4 16.7Q224.2 22.6 224.2 36.2Q224.2 49.9 227.5 55.8Q230.7 61.6 237.2 61.6Q243.8 61.6 247 55.8Q250.1 49.9 250.1 36.2Q250.1 22.6 247 16.7Q243.8 10.8 237.2 10.8ZM289.2 1.6L289.2 70.8L274.8 70.8L274.8 1.6ZM324.9 1.6L304.6 32.8L326.6 70.8L310.3 70.8L289.7 33.9L310.1 1.6ZM378.4 49.7Q378.4 56.2 375.7 61.4Q372.9 66.5 367.5 69.5Q362 72.4 354.2 72.4Q342.4 72.4 336.2 66.2Q330 60 330 49.7L330 1.6L344.4 1.6L344.4 49.1Q344.4 55.3 346.8 58.4Q349.2 61.4 354.2 61.4Q359.3 61.4 361.7 58.4Q364 55.3 364 49.1L364 1.6L378.4 1.6ZM428.5 1.6Q438 1.6 445.1 4.3Q452.1 7 456.5 14.6Q460.8 22.2 460.8 35.9Q460.8 70.8 429.9 70.8L411.3 70.8L411.3 1.6L428.5 1.6ZM425.7 12.2L425.7 60.2L430.7 60.2Q438.1 60.2 442 55Q445.9 49.7 445.9 35.9Q445.9 26.3 444 21.1Q442 15.9 438.7 14.1Q435.4 12.2 430.6 12.2ZM508.5 1.6L507 12.1L484.9 12.1L484.9 30.4L504.2 30.4L504.2 40.8L484.9 40.8L484.9 60.2L508.5 60.2L508.5 70.8L470.5 70.8L470.5 1.6ZM564.6 1.6L547.1 70.8L529.2 70.8L511.1 1.6L526 1.6L538.4 58.8L550.2 1.6Z";

/** The two-layer symbol, decorative: the wordmark beside it names the link. */
export function BrandMark({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- 5 KB PNG, nothing for the optimiser to gain
    <img src="/brand/dentoku-dev-mark.png" alt="" width={128} height={100} fetchPriority="high" className={cn("brand-mark", className)} />
  );
}

/** The wordmark in `currentColor`; its accessible name is `label`. */
export function Wordmark({ label, className }: { label: string; className?: string }) {
  return (
    <svg viewBox="0 0 564.6 72.4" role="img" aria-label={label} focusable="false" className={cn("brand-wordmark", className)}>
      <path d={WORDMARK} fill="currentColor" />
    </svg>
  );
}

/**
 * Symbol and wordmark side by side, sized by the parent's font-size: the
 * wordmark is 0.72em tall (the cap height the text had at that size).
 */
export function BrandLockup({
  label,
  className,
  markClassName = "w-[1.5em]",
}: {
  label: string;
  className?: string;
  /** Symbol width, in em of the parent so it scales with the wordmark. */
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-[0.65em]", className)}>
      <BrandMark className={cn("h-auto shrink-0", markClassName)} />
      <Wordmark label={label} className="h-[0.72em] w-auto" />
    </span>
  );
}
