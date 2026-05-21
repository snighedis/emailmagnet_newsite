import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/marketing/json-ld";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  companyTrustCues,
  dentokuFrameworks,
  emailMagnetConfig,
  productPortfolio,
  siteConfig,
} from "@/data/site";
import { buildItemListSchema } from "@/lib/schema";

export default function Home() {
  const featuredProduct = productPortfolio.find((product) => product.featured) ?? productPortfolio[0];
  const secondaryProducts = productPortfolio.filter((product) => product.href !== featuredProduct.href);

  return (
    <>
      <JsonLd data={buildItemListSchema("Dentoku Dev software products", productPortfolio)} />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_10%_10%,#ffd5c8_0%,#fff4ef_45%,#f8fbff_100%)]">
        <div className="pointer-events-none absolute -right-28 top-10 h-72 w-72 rounded-full bg-[#ff5c35]/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[-8rem] h-80 w-80 rounded-full bg-[#213343]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-7">
            <Badge className="rounded-full border border-[#213343]/10 bg-white px-4 py-2 text-[#213343]">
              Dentoku Dev · founder-led product studio
            </Badge>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.02em] text-[#132333] md:text-7xl">
              Browser-first software for teams that do real operational work
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              We build focused tools for repetitive workflows, Chrome extensions, Shopify utilities,
              and compact products that ship quickly and stay understandable.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
                <Link href="#products">
                  View products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md border-slate-300 bg-white">
                <Link href="/overview">Read overview</Link>
              </Button>
            </div>
            <ul className="grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
              {[
                "Chrome-first extraction and productivity",
                "Shopify campaign and urgency tooling",
                "Clear docs, support, and upgrade paths",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0f766e]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-[#132333]/10">
            <div className="rounded-xl bg-[#132333] p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-200">Featured now</p>
              <div className="mt-4 rounded-lg bg-white p-4">
                <Image
                  src={emailMagnetConfig.logo}
                  alt="EmailMagnet logo"
                  width={640}
                  height={360}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-200">{featuredProduct.description}</p>
              <Button asChild className="mt-5 w-full rounded-md bg-white text-[#132333] hover:bg-slate-100">
                <Link href={featuredProduct.href}>Open {featuredProduct.name}</Link>
              </Button>
            </div>
            <div className="mt-4 space-y-2">
              {secondaryProducts.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="group block rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#ff5c35]/50 hover:bg-[#fff5f1]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold text-slate-900">{product.name}</p>
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.category}</span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="products" className="bg-white py-18 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c43618]">Portfolio</p>
              <h2 className="text-4xl font-semibold tracking-[-0.02em] text-[#132333] md:text-5xl">
                Four products, each built around one repeated task
              </h2>
            </div>
            <Link className="text-sm font-semibold text-[#c43618] hover:underline" href="/contact">
              Need product support?
            </Link>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {productPortfolio.map((product, index) => (
              <article key={product.href} className="grid gap-4 p-5 md:grid-cols-[84px_1fr_auto] md:items-center md:p-7">
                <div className="flex items-center gap-3 md:block">
                  <Image
                    src={product.icon}
                    alt={`${product.name} icon`}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-xl border border-slate-200 bg-slate-50 p-3"
                  />
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 md:mt-3 md:block">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#c43618]">{product.category}</p>
                  <h3 className="mt-1 text-2xl font-semibold text-slate-950">{product.name}</h3>
                  <p className="mt-2 max-w-2xl leading-7 text-slate-600">{product.description}</p>
                </div>
                <Button
                  asChild
                  variant={product.featured ? "default" : "outline"}
                  className={product.featured ? "rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]" : "rounded-md"}
                >
                  <Link href={product.href}>{product.featured ? "View product" : "Open page"}</Link>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#132333] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-200">Studio method</p>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
              Small scope, fast delivery, clear ownership
            </h2>
            <p className="text-lg leading-8 text-slate-200">
              We keep each product legible: one workflow, one promise, one support path, one page
              that explains what it does.
            </p>
          </div>
          <div className="space-y-4">
            {companyTrustCues.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/15 bg-white/5 p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-teal-200">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 leading-7 text-slate-200">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f4f9ff] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c43618]">Frameworks</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] text-[#132333] md:text-5xl">
                Internal frameworks that keep products practical
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700">
              Each framework below shows how we translate a messy workflow into a clear sequence:
              isolate the recurring task, reduce unnecessary steps, and ship a process users can run
              reliably every day.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {dentokuFrameworks.map((framework) => (
              <article key={framework.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-2xl font-semibold text-slate-950">{framework.name}</h3>
                <p className="mt-3 leading-7 text-slate-600">{framework.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {framework.steps.map((step) => (
                    <li key={step} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                      {step}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c43618]">Spotlight</p>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-[#132333] md:text-5xl">
              EmailMagnet, the flagship Chrome workflow
            </h2>
            <p className="text-lg leading-8 text-slate-700">
              Capture visible public business emails while browsing, review the list, and export to
              CSV or TXT for qualification. Free plan available, PRO is a one-time upgrade.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
                <Link href={emailMagnetConfig.href}>Explore EmailMagnet</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-md">
                <Link href="/docs/getting-started">Read docs</Link>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#fff8f3] p-4">
            <Image
              src="/brand/emailmagnet-hero-new.png"
              alt="EmailMagnet extension interface"
              width={1361}
              height={852}
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#132333] py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-200">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
              Talk with Dentoku Dev about product support and portfolio fit
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              Reach out for support, billing questions, or details on the current roadmap across our
              browser and ecommerce products.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-md bg-white text-[#132333] hover:bg-slate-100">
            <Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
