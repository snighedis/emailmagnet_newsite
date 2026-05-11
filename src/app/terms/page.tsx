import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "EmailMagnet Terms of Service placeholder for usage rules, billing, acceptable use, and legal terms.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">Legal</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">Terms of Service</h1>
      <p className="mt-6 leading-8 text-slate-600">
        This is a professional placeholder Terms of Service page for EmailMagnet. Replace this page
        with reviewed legal text before production launch.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Acceptable use</h2>
      <p className="mt-3 leading-8 text-slate-600">
        Users are responsible for using EmailMagnet in compliance with applicable privacy,
        anti-spam, and outreach laws.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Billing placeholder</h2>
      <p className="mt-3 leading-8 text-slate-600">
        Placeholder: add refund policy, taxes, payment processor details, and lifetime access terms.
      </p>
    </article>
  );
}
