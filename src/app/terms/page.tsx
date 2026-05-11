import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "EmailMagnet Terms of Service draft for usage rules, billing, acceptable use, and legal terms.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">Legal</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">Terms of Service</h1>
      <p className="mt-6 leading-8 text-slate-600">
        This Terms of Service draft explains the areas EmailMagnet must cover for users. Review
        with legal counsel before relying on it as final legal text.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Acceptable use</h2>
      <p className="mt-3 leading-8 text-slate-600">
        Users are responsible for using EmailMagnet in compliance with applicable privacy,
        anti-spam, and outreach laws.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Billing terms</h2>
      <p className="mt-3 leading-8 text-slate-600">
        Add the final refund policy, tax handling, payment processor details, and lifetime access
        terms before treating this page as final legal text.
      </p>
    </article>
  );
}
