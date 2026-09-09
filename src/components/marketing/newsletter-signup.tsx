"use client";

import { FormEvent, useState } from "react";
import { useCopy, useLocale } from "@/i18n/locale-context";
import { loopsErrorText, subscribeToLoops } from "@/lib/loops";

const TIMESTAMP_KEY = "loops-form-timestamp";

type FormState = "idle" | "loading" | "success" | "error";

export function NewsletterSignup() {
  const lang = useLocale();
  const { newsletter: copy } = useCopy().common;
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState(copy.genericError);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const now = Date.now();
    const previous = Number(localStorage.getItem(TIMESTAMP_KEY) ?? "0");
    if (previous && previous + 60000 > now) {
      setState("error");
      setMessage(copy.tooMany);
      return;
    }
    localStorage.setItem(TIMESTAMP_KEY, String(now));

    setState("loading");
    setMessage(copy.genericError);

    const result = await subscribeToLoops(email);

    if (result.ok) {
      setState("success");
      setEmail("");
      return;
    }

    setState("error");
    setMessage(loopsErrorText(result, { generic: copy.genericError, tooMany: copy.tooMany }, lang));
    // Allow an immediate retry after a transient failure.
    localStorage.setItem(TIMESTAMP_KEY, "");
  }

  function onReset() {
    setState("idle");
    setMessage(copy.genericError);
  }

  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl">{copy.title}</h2>
      <p className="mt-3 leading-7 text-slate-600">{copy.body}</p>

      {state === "idle" || state === "loading" ? (
        <form onSubmit={onSubmit} className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
          <input
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20"
            placeholder={copy.emailPlaceholder}
            required
            type="email"
            name="newsletter-form-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={state === "loading"}
          />
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-md bg-brand-cta px-4 text-sm font-medium text-white shadow-sm transition hover:bg-brand-cta-hover disabled:cursor-not-allowed disabled:opacity-80"
            disabled={state === "loading"}
          >
            {state === "loading" ? copy.wait : copy.subscribe}
          </button>
        </form>
      ) : null}

      {state === "success" ? (
        <div className="mt-6">
          <p className="text-sm text-slate-900">{copy.thanks}</p>
          <button
            type="button"
            className="mt-3 text-sm text-slate-500 hover:underline"
            onClick={onReset}
          >
            {copy.back}
          </button>
        </div>
      ) : null}

      {state === "error" ? (
        <div className="mt-6">
          <p className="text-sm text-red-700">{message}</p>
          <button
            type="button"
            className="mt-3 text-sm text-slate-500 hover:underline"
            onClick={onReset}
          >
            {copy.back}
          </button>
        </div>
      ) : null}
    </div>
  );
}
