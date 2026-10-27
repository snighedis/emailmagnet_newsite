"use client";

import { FormEvent, useState } from "react";
import { Download } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useCopy, useLocale } from "@/i18n/locale-context";
import { loopsErrorText, subscribeToLoops } from "@/lib/loops";

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
  const lang = useLocale();
  const { leadMagnet: copy } = useCopy().common;
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
      setMessage(copy.tooMany);
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
    setMessage(loopsErrorText(result, { generic: copy.genericError, tooMany: copy.tooMany }, lang));
    // Allow an immediate retry after a transient failure.
    localStorage.setItem(TIMESTAMP_KEY, "");
  }

  return (
    <aside className="bg-brand text-ink mt-16 p-6 md:p-10">
      {state === "success" ? (
        <div className="flex flex-col items-start gap-5">
          <div className="space-y-3">
            <h2 className="t-3">{copy.successTitle}</h2>
            <p className="t-body">{copy.successBody}</p>
          </div>
          <Button asChild size="xl" variant="secondary">
            <a href={LEAD_MAGNET_PATH} target="_blank" rel="noopener noreferrer" download>
              {copy.download}
              <Download className="h-4 w-4" />
            </a>
          </Button>
        </div>
      ) : (
        <>
          <h2 className="t-3">{copy.title}</h2>
          <p className="t-body mt-3">{copy.body}</p>

          <form onSubmit={onSubmit} className="mt-6 flex w-full flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              autoComplete="email"
              placeholder={copy.emailPlaceholder}
              aria-label={copy.emailAria}
              aria-invalid={state === "error"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={state === "loading"}
              className="focus-visible:ring-ink/40 text-ink h-12 w-full rounded-none bg-white px-4 text-base outline-none placeholder:text-ink/60 focus-visible:ring-3"
            />
            <Button type="submit" size="xl" variant="secondary" disabled={state === "loading"}>
              {state === "loading" ? copy.sending : copy.submit}
            </Button>
          </form>

          {state === "error" ? <p className="mt-3 text-sm font-medium">{message}</p> : null}

          <p className="mt-4 text-sm leading-6">{copy.consent}</p>
        </>
      )}
    </aside>
  );
}
