"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Dialog } from "radix-ui";
import { ArrowRight, Download, MailCheck, Sparkles, X } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { readConsent } from "@/lib/consent";
import { subscribeToLoops } from "@/lib/loops";
import {
  canShowExitIntent,
  markExitIntentShown,
  markExitIntentSubmitted,
} from "@/lib/exit-intent";

const LEAD_MAGNET_PATH = "/lead-magnets/cold-outreach-compliance-checklist.pdf";
const ARM_DELAY_MS = 4000;
// Pages where an exit-intent capture would be redundant or unwelcome.
const EXCLUDED_PREFIXES = ["/contact", "/privacy", "/terms", "/cookies"];

type FormState = "idle" | "loading" | "success" | "error";

function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

export function ExitIntentModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const firedRef = useRef(false);

  const excluded = EXCLUDED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );

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
    setMessage(result.message ?? "Something went wrong, please try again.");
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/40 supports-backdrop-filter:backdrop-blur-xs data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none" />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            "fixed top-1/2 left-1/2 z-[70] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2",
            "shadow-soft-lg rounded-2xl border border-slate-200 bg-white p-7",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 motion-reduce:animate-none",
          )}
        >
          <Dialog.Close
            className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </Dialog.Close>

          {state === "success" ? (
            <div className="text-center">
              <span className="bg-brand-soft text-eyebrow mx-auto flex h-12 w-12 items-center justify-center rounded-full">
                <MailCheck className="h-6 w-6" />
              </span>
              <Dialog.Title className="text-ink mt-4 text-2xl font-semibold tracking-[-0.01em]">
                Your checklist is ready
              </Dialog.Title>
              <p className="mt-2 leading-7 text-slate-600">
                Thanks for subscribing — grab your copy below and look out for new guides in your
                inbox.
              </p>
              <Button asChild size="lg" className="mt-6 w-full font-semibold">
                <a href={LEAD_MAGNET_PATH} target="_blank" rel="noopener noreferrer" download>
                  Download the checklist
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ) : (
            <>
              <span className="text-eyebrow inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] uppercase">
                <Sparkles className="h-4 w-4" /> Free checklist
              </span>
              <Dialog.Title className="text-ink mt-3 text-3xl font-semibold tracking-[-0.01em] text-balance">
                Before you go — grab the compliance checklist
              </Dialog.Title>
              <p className="mt-3 leading-7 text-slate-600">
                The GDPR &amp; CAN-SPAM checklist we use to turn raw email extraction into lists you
                can actually send to. Get the PDF and join 2,000+ sales reps, recruiters, and growth
                teams.
              </p>

              <form onSubmit={onSubmit} className="mt-6 space-y-3">
                <Input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-label="Email address"
                  aria-invalid={state === "error"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={state === "loading"}
                  className="h-11"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold"
                  disabled={state === "loading"}
                >
                  {state === "loading" ? "Sending…" : "Send me the checklist"}
                  {state === "loading" ? null : <ArrowRight className="h-4 w-4" />}
                </Button>
              </form>

              {state === "error" ? (
                <p className="mt-2 text-sm text-red-700">{message}</p>
              ) : null}

              <p className="mt-4 text-xs leading-5 text-slate-500">
                We&apos;ll email you occasional guides and product updates. No spam, unsubscribe
                anytime. See our{" "}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-slate-700">
                  Privacy Policy
                </Link>
                .
              </p>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
