"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Download, MailCheck, Sparkles } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { subscribeToLoops } from "@/lib/loops";

const LEAD_MAGNET_PATH = "/lead-magnets/cold-outreach-compliance-checklist.pdf";
const TIMESTAMP_KEY = "loops-form-timestamp";

type FormState = "idle" | "loading" | "success" | "error";

function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
}

/**
 * Inline lead-magnet capture for blog articles. Reuses the exit-intent PDF and
 * the shared Loops endpoint; tags signups so the source is visible in Loops.
 */
export function LeadMagnetSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "loading") return;

    const now = Date.now();
    const previous = Number(localStorage.getItem(TIMESTAMP_KEY) ?? "0");
    if (previous && previous + 60000 > now) {
      setState("error");
      setMessage("Too many signups, please try again in a little while.");
      return;
    }
    localStorage.setItem(TIMESTAMP_KEY, String(now));

    setState("loading");
    const result = await subscribeToLoops(email, { userGroup: "Blog lead magnet" });

    if (result.ok) {
      setState("success");
      track("lead_magnet_email_captured", {
        event_category: "conversion",
        event_label: "blog",
        value: 1.0,
      });
      return;
    }

    setState("error");
    setMessage(result.message ?? "Something went wrong, please try again.");
    // Allow an immediate retry after a transient failure.
    localStorage.setItem(TIMESTAMP_KEY, "");
  }

  return (
    <aside className="bg-brand-soft mt-14 rounded-2xl p-6 md:p-8">
      {state === "success" ? (
        <div className="flex flex-col items-start gap-4">
          <span className="bg-white text-eyebrow flex h-12 w-12 items-center justify-center rounded-full">
            <MailCheck className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-ink text-2xl font-semibold tracking-[-0.01em]">
              Your checklist is ready
            </h2>
            <p className="mt-2 leading-7 text-slate-700">
              Thanks for subscribing. Grab your copy below and look out for new guides in your
              inbox.
            </p>
          </div>
          <Button asChild size="lg" className="font-semibold">
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
          <h2 className="text-ink mt-3 text-2xl font-semibold tracking-[-0.01em] text-balance">
            Turn this into a list you can actually send to
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Get the GDPR &amp; CAN-SPAM compliance checklist we use to qualify extracted contacts
            before any outreach. Delivered as a one-page PDF.
          </p>

          <form onSubmit={onSubmit} className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              aria-label="Email address"
              aria-invalid={state === "error"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={state === "loading"}
              className="focus:border-brand focus:ring-brand/20 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:ring-2"
            />
            <Button type="submit" size="lg" className="font-semibold" disabled={state === "loading"}>
              {state === "loading" ? "Sending…" : "Send me the checklist"}
              {state === "loading" ? null : <ArrowRight className="h-4 w-4" />}
            </Button>
          </form>

          {state === "error" ? <p className="mt-2 text-sm text-red-700">{message}</p> : null}

          <p className="mt-4 text-xs leading-5 text-slate-500">
            We&apos;ll email you occasional guides and product updates. No spam, unsubscribe anytime.
          </p>
        </>
      )}
    </aside>
  );
}
