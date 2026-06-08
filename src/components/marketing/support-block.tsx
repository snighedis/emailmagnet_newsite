import { Mail, MessageCircle } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/marketing/section";
import { siteConfig } from "@/data/site";

export function SupportBlock() {
  return (
    <Section variant="ink" container="default">
      <div className="flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.16em] text-teal-200 uppercase">
            <MessageCircle className="h-4 w-4" />
            Email support
          </div>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] md:text-5xl">Need support?</h2>
          <p className="text-ink-muted text-lg leading-8">
            Contact EmailMagnet support for product questions, billing help, or documentation
            requests.
          </p>
          <p className="text-base text-slate-400">Typical response time is within one business day.</p>
        </div>
        <Button asChild size="xl" className="font-semibold">
          <Link href={`mailto:${siteConfig.supportEmail}`}>
            <Mail className="h-4 w-4" />
            {siteConfig.supportEmail}
          </Link>
        </Button>
      </div>
    </Section>
  );
}
