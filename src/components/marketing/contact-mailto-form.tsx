"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactMailtoFormProps = {
  supportEmail?: string;
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  product: string;
  message: string;
  website: string;
  company: string;
  turnstileToken: string;
};

const defaultState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  product: "",
  message: "",
  website: "",
  company: "",
  turnstileToken: "",
};

const productOptions = [
  "EmailMagnet",
  "ClickPilot AI",
  "Volume Control PRO",
  "Countdown321",
  "A new project",
  "General inquiry",
] as const;

declare global {
  interface Window {
    onContactTurnstileSuccess?: (token: string) => void;
    onContactTurnstileExpired?: () => void;
  }
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactMailtoForm({ supportEmail = "support@dentokudev.com" }: ContactMailtoFormProps) {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [form, setForm] = useState<FormState>(defaultState);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  useEffect(() => {
    window.onContactTurnstileSuccess = (token: string) => {
      setForm((prev) => ({ ...prev, turnstileToken: token }));
    };
    window.onContactTurnstileExpired = () => {
      setForm((prev) => ({ ...prev, turnstileToken: "" }));
    };

    return () => {
      delete window.onContactTurnstileSuccess;
      delete window.onContactTurnstileExpired;
    };
  }, []);

  const canSubmit = useMemo(() => {
    return (
      form.firstName.trim().length > 0 &&
      form.lastName.trim().length > 0 &&
      looksLikeEmail(form.email) &&
      form.message.trim().length > 0 &&
      (!turnstileSiteKey || form.turnstileToken.trim().length > 0)
    );
  }, [form, turnstileSiteKey]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    if (error) setError("");
    if (success) setSuccess("");
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      setSuccess("");
      setError("Fill first name, last name, a valid email, and message before sending.");
      return;
    }

    setError("");

    // Open the visitor's email client with a pre-filled message to support.
    // Reliable, no server/consent dependency, and keeps the full message intact.
    const product = form.product || "General inquiry";
    const subject = `[${product}] Contact from ${form.firstName} ${form.lastName}`;
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Topic: ${product}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${supportEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setSuccess(
      `Your email app should open with the message ready to send. If it doesn't, email us directly at ${supportEmail}.`,
    );
    setForm(defaultState);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg bg-white p-6 shadow-sm md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-base font-semibold text-slate-800">
          First name<span className="sr-only"> required</span>
          <Input
            required
            name="firstName"
            autoComplete="given-name"
            placeholder="First name"
            value={form.firstName}
            onChange={(event) => updateField("firstName", event.target.value)}
            className="h-12 rounded-sm border-slate-400 bg-white px-4 text-base"
          />
        </label>
        <label className="grid gap-2 text-base font-semibold text-slate-800">
          Last name<span className="sr-only"> required</span>
          <Input
            required
            name="lastName"
            autoComplete="family-name"
            placeholder="Last name"
            value={form.lastName}
            onChange={(event) => updateField("lastName", event.target.value)}
            className="h-12 rounded-sm border-slate-400 bg-white px-4 text-base"
          />
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-base font-semibold text-slate-800">
        Email<span className="sr-only"> required</span>
        <Input
          required
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="h-12 rounded-sm border-slate-400 bg-white px-4 text-base"
        />
      </label>

      <label className="mt-5 grid gap-2 text-base font-semibold text-slate-800">
        Topic
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex h-12 w-full items-center justify-between rounded-sm border border-slate-400 bg-white px-4 text-left text-base font-medium text-slate-900 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-haspopup="listbox"
            >
              <span className={form.product ? "text-slate-900" : "text-slate-500"}>
                {form.product || "Select a topic"}
              </span>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="w-[var(--radix-dropdown-menu-trigger-width)] rounded-sm border border-slate-300 bg-white p-1"
          >
            {productOptions.map((option) => {
              const isSelected = form.product === option;
              return (
                <DropdownMenuItem
                  key={option}
                  onSelect={() => updateField("product", option)}
                  className="flex h-10 items-center justify-between rounded-sm px-3 text-base font-medium text-slate-900 focus:bg-slate-100"
                >
                  <span>{option}</span>
                  {isSelected ? <Check className="h-4 w-4 text-[#244f9e]" /> : null}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </label>

      <label className="mt-5 grid gap-2 text-base font-semibold text-slate-800">
        Message<span className="sr-only"> required</span>
        <Textarea
          required
          name="message"
          placeholder="Tell us what you want to build, or what you need help with."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-32 rounded-sm border-slate-400 bg-white px-4 py-3 text-base"
        />
      </label>
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          autoComplete="organization"
          tabIndex={-1}
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
        />
      </div>

      {turnstileSiteKey ? (
        <div className="mt-6">
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="afterInteractive"
          />
          <div
            className="cf-turnstile"
            data-sitekey={turnstileSiteKey}
            data-size="invisible"
            data-callback="onContactTurnstileSuccess"
            data-expired-callback="onContactTurnstileExpired"
            data-theme="light"
          />
        </div>
      ) : null}

      <p className="mt-6 text-base font-semibold leading-7 text-slate-900">
        By submitting this form, you confirm that you have read and accepted the Privacy Policy.
      </p>

      {error ? (
        <p className="mt-3 rounded-sm bg-red-50 px-3 py-2 text-sm font-medium text-red-700">{error}</p>
      ) : null}
      {success ? (
        <p className="mt-3 rounded-sm bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
          {success}
        </p>
      ) : null}

      <div className="mt-8 flex justify-center">
        <Button
          type="submit"
          size="lg"
          className="h-14 bg-brand px-8 text-lg text-white hover:bg-brand-strong"
        >
          Send message
        </Button>
      </div>
    </form>
  );
}
