"use client";

import { FormEvent, useState } from "react";
import { subscribeToLoops } from "@/lib/loops";

const TIMESTAMP_KEY = "loops-form-timestamp";

type FormState = "idle" | "loading" | "success" | "error";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("Oops! Something went wrong, please try again");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const now = Date.now();
    const previous = Number(localStorage.getItem(TIMESTAMP_KEY) ?? "0");
    if (previous && previous + 60000 > now) {
      setState("error");
      setMessage("Too many signups, please try again in a little while");
      return;
    }
    localStorage.setItem(TIMESTAMP_KEY, String(now));

    setState("loading");
    setMessage("Oops! Something went wrong, please try again");

    const result = await subscribeToLoops(email);

    if (result.ok) {
      setState("success");
      setEmail("");
      return;
    }

    setState("error");
    setMessage(result.message || "Oops! Something went wrong, please try again");
    // Allow an immediate retry after a transient failure.
    localStorage.setItem(TIMESTAMP_KEY, "");
  }

  function onReset() {
    setState("idle");
    setMessage("Oops! Something went wrong, please try again");
  }

  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-semibold text-slate-950 sm:text-3xl">Join the newsletter</h2>
      <p className="mt-3 leading-7 text-slate-600">
        Get product updates, workflow tips, and release notes from Dentoku Dev.
      </p>

      {state === "idle" || state === "loading" ? (
        <form onSubmit={onSubmit} className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
          <input
            className="h-10 w-full rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20"
            placeholder="you@example.com"
            required
            type="email"
            name="newsletter-form-input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={state === "loading"}
          />
          <button
            type="submit"
            className="inline-flex h-10 items-center justify-center rounded-md bg-brand px-4 text-sm font-medium text-white shadow-sm transition hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-80"
            disabled={state === "loading"}
          >
            {state === "loading" ? "Please wait..." : "Subscribe"}
          </button>
        </form>
      ) : null}

      {state === "success" ? (
        <div className="mt-6">
          <p className="text-sm text-slate-900">Thanks! We&apos;ll be in touch!</p>
          <button
            type="button"
            className="mt-3 text-sm text-slate-500 hover:underline"
            onClick={onReset}
          >
            &larr; Back
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
            &larr; Back
          </button>
        </div>
      ) : null}
    </div>
  );
}
