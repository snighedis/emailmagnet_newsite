"use client";

import { useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
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
};

const defaultState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  product: "",
  message: "",
};

const productOptions = [
  "EmailMagnet",
  "ClickPilot AI",
  "Volume Control PRO",
  "Countdown321",
  "General inquiry",
] as const;

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function ContactMailtoForm({ supportEmail }: ContactMailtoFormProps) {
  void supportEmail;

  const [form, setForm] = useState<FormState>(defaultState);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      form.firstName.trim().length > 0 &&
      form.lastName.trim().length > 0 &&
      looksLikeEmail(form.email) &&
      form.message.trim().length > 0
    );
  }, [form]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    if (error) setError("");
    if (success) setSuccess("");
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      setSuccess("");
      setError("Fill first name, last name, a valid email, and message before sending.");
      return;
    }

    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          product: form.product || "General inquiry",
          message: form.message,
          website: "",
        }),
      });

      const data = (await response.json().catch(() => null)) as { message?: string } | null;
      if (!response.ok) {
        setError(data?.message || "Unable to send your request right now.");
        return;
      }

      setSuccess("Message sent successfully. Our team will get back to you soon.");
      setForm(defaultState);
    } catch {
      setError("Connection error. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
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
        Product
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="flex h-12 w-full items-center justify-between rounded-sm border border-slate-400 bg-white px-4 text-left text-base font-medium text-slate-900 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              aria-haspopup="listbox"
            >
              <span className={form.product ? "text-slate-900" : "text-slate-500"}>
                {form.product || "Select a product"}
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
          placeholder="Tell us what you need help with."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-32 rounded-sm border-slate-400 bg-white px-4 py-3 text-base"
        />
      </label>
      <input type="text" name="website" autoComplete="off" tabIndex={-1} className="hidden" />

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
          disabled={isSubmitting}
          className="h-16 rounded-md bg-[#244f9e] px-8 text-lg text-white hover:bg-[#1e4386]"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
