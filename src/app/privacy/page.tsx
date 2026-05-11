import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "EmailMagnet Privacy Policy draft covering data collection, processing, retention, and user rights details.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">Legal</p>
      <h1 className="mt-3 text-4xl font-semibold text-slate-950">Privacy Policy</h1>
      <p className="mt-6 leading-8 text-slate-600">
        This Privacy Policy draft explains the areas EmailMagnet must cover for users. Review with
        legal counsel before relying on it as final legal text.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Information covered</h2>
      <p className="mt-3 leading-8 text-slate-600">
        This page should describe what data the Chrome Extension and website collect, how it is
        used, how long it is retained, and how users can request support or deletion.
      </p>
      <h2 className="mt-10 text-2xl font-semibold text-slate-950">Contact</h2>
      <p className="mt-3 leading-8 text-slate-600">Need support? support@dentokudev.com</p>
    </article>
  );
}
