import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BrowserFrameProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  /** Optional address-bar text, e.g. a product URL. */
  url?: string;
  priority?: boolean;
  className?: string;
  /** Custom content rendered inside the frame instead of an image. */
  children?: ReactNode;
};

/**
 * Browser-window frame with a soft elevated shadow for product screenshots —
 * the device-framing treatment used across HubSpot/Apollo marketing pages.
 */
export function BrowserFrame({
  src,
  alt = "",
  width = 1361,
  height = 852,
  url,
  priority,
  className,
  children,
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        "shadow-soft-lg overflow-hidden rounded-2xl border border-black/[0.06] bg-white",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </span>
        {url ? (
          <span className="hidden min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-slate-400 ring-1 ring-slate-200 sm:block">
            {url}
          </span>
        ) : null}
      </div>
      <div className="bg-white">
        {children ??
          (src ? (
            // next/image doesn't paint reliably in this Next build; a plain img is dependable.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              className="h-auto w-full"
            />
          ) : null)}
      </div>
    </div>
  );
}
