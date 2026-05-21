import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { JsonLd } from "@/components/marketing/json-ld";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildContactPointSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Contact Dentoku Dev Support",
  description:
    "Contact Dentoku Dev for EmailMagnet support, product questions, partnership requests, billing help, privacy questions, and software feedback.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-[#fff7f2] px-4 py-10 md:py-14">
      <JsonLd data={buildContactPointSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 rounded-lg bg-[#fff7f2] px-6 py-12 md:px-10 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
        <div className="max-w-xl">
          <span className="inline-flex rounded-sm border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            Contact us
          </span>
          <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-normal text-slate-950 md:text-5xl">
            Get direct support for every Dentoku Dev product workflow.
          </h1>
          <p className="mt-5 max-w-lg text-xl leading-8 text-slate-700">
            Tell us how we can help with EmailMagnet, browser productivity tools, Shopify apps,
            billing, partnerships, or product feedback.
          </p>
        </div>

        <form
          action={`mailto:${siteConfig.supportEmail}?subject=Dentoku Dev contact request`}
          method="post"
          encType="text/plain"
          className="rounded-lg bg-white p-6 shadow-sm md:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-base font-semibold text-slate-800">
              First name<span className="sr-only"> required</span>
              <Input
                required
                name="First name"
                autoComplete="given-name"
                placeholder="First name"
                className="h-12 rounded-sm border-slate-400 bg-white px-4 text-base"
              />
            </label>
            <label className="grid gap-2 text-base font-semibold text-slate-800">
              Last name<span className="sr-only"> required</span>
              <Input
                required
                name="Last name"
                autoComplete="family-name"
                placeholder="Last name"
                className="h-12 rounded-sm border-slate-400 bg-white px-4 text-base"
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-base font-semibold text-slate-800">
            Email<span className="sr-only"> required</span>
            <Input
              required
              name="Email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="h-12 rounded-sm border-slate-400 bg-white px-4 text-base"
            />
          </label>

          <label className="mt-5 grid gap-2 text-base font-semibold text-slate-800">
            Product
            <select
              name="Product"
              className="h-12 rounded-sm border border-slate-400 bg-white px-4 pr-10 text-base text-slate-800 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              defaultValue=""
            >
              <option value="" disabled>
                Select a product
              </option>
              <option>EmailMagnet</option>
              <option>ClickPilot AI</option>
              <option>Volume Control PRO</option>
              <option>Countdown321</option>
              <option>General inquiry</option>
            </select>
          </label>

          <label className="mt-5 grid gap-2 text-base font-semibold text-slate-800">
            Message<span className="sr-only"> required</span>
            <Textarea
              required
              name="Message"
              placeholder="Tell us what you need help with."
              className="min-h-32 rounded-sm border-slate-400 bg-white px-4 py-3 text-base"
            />
          </label>

          <p className="mt-6 text-base font-semibold leading-7 text-slate-900">
            By submitting this form, your email app will open a message addressed to{" "}
            {siteConfig.supportEmail}.
          </p>

          <div className="mt-8 flex justify-center">
            <Button type="submit" size="lg" className="h-16 rounded-md bg-[#244f9e] px-8 text-lg text-white hover:bg-[#1e4386]">
              Send message
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
