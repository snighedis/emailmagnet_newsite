import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export function SupportBlock() {
  return (
    <section className="bg-[#213343] py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-teal-200">
            <MessageCircle className="h-4 w-4" />
            Email support
          </div>
          <h2 className="text-3xl font-semibold tracking-normal md:text-5xl">Need support?</h2>
          <p className="text-lg leading-8 text-slate-200">
            Contact EmailMagnet support for product questions, billing help, or placeholder
            documentation requests.
          </p>
          <p className="text-base text-slate-300">
            Response expectation placeholder: add support hours or SLA when available.
          </p>
        </div>
        <Button asChild size="lg" className="rounded-md bg-white text-[#213343] hover:bg-slate-100">
          <Link href={`mailto:${siteConfig.supportEmail}`}>
            <Mail className="h-4 w-4" />
            {siteConfig.supportEmail}
          </Link>
        </Button>
      </div>
    </section>
  );
}
