import { CheckCircle2, Download, Search, ShieldCheck } from "@/components/ui/icons";
import Image from "next/image";
import { emailMagnetConfig } from "@/data/site";

export function ProductVisual() {
  const emails = ["hello@company.com", "sales@studio.dev", "contact@site.io"];

  return (
    <div className="relative mx-auto w-full max-w-xl" aria-label="EmailMagnet product preview">
      <div className="absolute -left-8 top-12 hidden rounded-lg border border-teal-200 bg-white px-4 py-3 text-sm font-medium text-teal-800 shadow-sm md:block">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4" />
          Chrome Extension
        </div>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/80">
        <div className="rounded-xl border border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
            <span className="h-3 w-3 rounded-full bg-[#ffd166]" />
            <span className="h-3 w-3 rounded-full bg-[#06d6a0]" />
            <div className="ml-3 flex h-8 flex-1 items-center gap-2 rounded-md bg-white px-3 text-xs text-slate-500">
              <Search className="h-3.5 w-3.5" />
              directory.globaltech.com/contacts
            </div>
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-[1fr_240px]">
            <div className="space-y-3 rounded-lg border border-slate-200 bg-white p-4">
              <div className="h-4 w-32 rounded bg-slate-200" />
              <div className="h-3 w-full rounded bg-slate-100" />
              <div className="h-3 w-4/5 rounded bg-slate-100" />
              <div className="mt-5 grid gap-2">
                <div className="h-10 rounded-md border border-slate-100 bg-slate-50" />
                <div className="h-10 rounded-md border border-slate-100 bg-slate-50" />
                <div className="h-10 rounded-md border border-slate-100 bg-slate-50" />
              </div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src={emailMagnetConfig.logo}
                    alt="EmailMagnet logo"
                    width={220}
                    height={124}
                    className="h-8 w-auto"
                  />
                  <p className="text-xs text-slate-500">3 emails found</p>
                </div>
                <div className="rounded-full bg-brand/10 p-2 text-eyebrow">
                  <Image
                    src={emailMagnetConfig.icon}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                {emails.map((email) => (
                  <div
                    key={email}
                    className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50 px-3 py-2 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
                    {email}
                  </div>
                ))}
              </div>
              <button className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-brand-cta text-sm font-semibold text-white">
                <Download className="h-4 w-4" />
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
