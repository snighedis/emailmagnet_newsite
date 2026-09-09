import { ContactMailtoForm } from "@/components/marketing/contact-mailto-form";
import { JsonLd } from "@/components/marketing/json-ld";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildContactPointSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Contact Dentoku Dev",
  description:
    "Talk to Dentoku Dev about product support, a new build, or a software project. We design, build, and ship digital products and bring the same craft to your team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="bg-surface-peach px-4 py-10 md:py-14">
      <JsonLd data={buildContactPointSchema()} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 rounded-lg bg-surface-peach px-6 py-12 md:px-10 lg:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-14">
        <div className="max-w-xl">
          <span className="inline-flex rounded-sm border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            Start your project
          </span>
          <h1 className="mt-7 text-4xl font-semibold leading-tight tracking-normal text-slate-950 md:text-5xl">
            Tell us what you want to build.
          </h1>
          <p className="mt-5 max-w-lg text-xl leading-8 text-slate-700">
            Custom software, AI integration, or a question about our products. Either way, you
            talk directly to the people who design, build, and ship the work.
          </p>
          <ul className="mt-7 space-y-2.5 text-base leading-7 text-slate-600">
            <li>1. You write a few lines about the project.</li>
            <li>2. We set up a short call to scope it.</li>
            <li>3. You get a written proposal: scope, cost, timeline.</li>
          </ul>
        </div>

        <ContactMailtoForm supportEmail={siteConfig.supportEmail} />
      </div>
    </section>
  );
}
