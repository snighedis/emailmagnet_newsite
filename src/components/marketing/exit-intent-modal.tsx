"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog } from "radix-ui";
import { Download, X } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { readConsent } from "@/lib/consent";
import { loopsErrorText, subscribeToLoops } from "@/lib/loops";
import { useCopy, useLocale } from "@/i18n/locale-context";
import { LocaleLink } from "@/i18n/locale-link";
import {
  canShowExitIntent,
  markExitIntentShown,
  markExitIntentSubmitted,
} from "@/lib/exit-intent";

const LEAD_MAGNET_PATH = "/lead-magnets/cold-outreach-compliance-checklist.pdf";
const ARM_DELAY_MS = 4000;
// Pages where an exit-intent capture would be redundant or unwelcome.
// The lead magnet is an EmailMagnet guide for the products' English audience:
// it shows only on the English product pages and the blog, never on the Italian
// consulting funnel (redesign ticket 09).
const ALLOWED_PREFIXES = ["/emailmagnet", "/clickpilot-ai", "/volume-control-pro", "/countdown321", "/blog"];

type FormState = "idle" | "loading" | "success" | "error";

function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

export function ExitIntentModal() {
  const pathname = usePathname();
  const lang = useLocale();
  const { exitIntent: copy } = useCopy().common;
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const firedRef = useRef(false);

  const excluded =
    lang !== "en" ||
    !ALLOWED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));

  const trigger = useCallback(() => {
    if (firedRef.current) return;
    if (!canShowExitIntent()) return;
    firedRef.current = true;
    markExitIntentShown();
    setOpen(true);
    track("exit_intent_shown", { event_category: "engagement" });
  }, []);

  useEffect(() => {
    if (excluded) return;
    // Desktop, mouse-driven devices only; never stack on top of the cookie banner.
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (readConsent() === null) return;
    if (!canShowExitIntent()) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, ARM_DELAY_MS);

    const onMouseOut = (event: MouseEvent) => {
      // Cursor left through the top edge → heading for tabs / close / back / URL bar.
      if (armed && event.clientY <= 0) {
        trigger();
      }
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [excluded, trigger]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "loading") return;

    setState("loading");
    const result = await subscribeToLoops(email, { userGroup: "Exit intent lead magnet" });

    if (result.ok) {
      setState("success");
      markExitIntentSubmitted();
      track("exit_intent_email_captured", {
        event_category: "conversion",
        value: 1.0,
      });
      return;
    }

    setState("error");
    setMessage(loopsErrorText(result, { generic: copy.genericError, tooMany: copy.tooMany }, lang));
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/40 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none" />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            "fixed top-1/2 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2",
            "bg-background text-ink p-7 shadow-xl sm:p-9",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:animate-none",
          )}
        >
          <Dialog.Close
            className="text-ink hover:bg-surface-muted absolute top-3 right-3 flex h-10 w-10 items-center justify-center transition-colors"
            aria-label={copy.closeAria}
          >
            <X className="h-4 w-4" />
          </Dialog.Close>

          {state === "success" ? (
            <div>
              <Dialog.Title className="t-3 pr-8">{copy.successTitle}</Dialog.Title>
              <p className="t-body mt-3">{copy.successBody}</p>
              <Button asChild size="xl" className="mt-6 w-full">
                <a href={LEAD_MAGNET_PATH} target="_blank" rel="noopener noreferrer" download>
                  {copy.download}
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ) : (
            <>
              <Dialog.Title className="t-3 pr-8">{copy.title}</Dialog.Title>
              <p className="t-body mt-3">{copy.body}</p>

              <form onSubmit={onSubmit} className="mt-6 space-y-3">
                <Input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={copy.emailPlaceholder}
                  aria-label={copy.emailAria}
                  aria-invalid={state === "error"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={state === "loading"}
                  className="h-12 rounded-none text-base"
                />
                <Button type="submit" size="xl" className="w-full" disabled={state === "loading"}>
                  {state === "loading" ? copy.sending : copy.submit}
                </Button>
              </form>

              {state === "error" ? (
                <p className="text-destructive mt-2 text-sm">{message}</p>
              ) : null}

              <p className="mt-4 text-sm leading-6">
                {copy.consent.before}{" "}
                <LocaleLink href="/privacy" className="text-link">
                  {copy.consent.link}
                </LocaleLink>
                {copy.consent.after}
              </p>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
