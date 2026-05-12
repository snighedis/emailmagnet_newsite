import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import {
  companyTrustCues,
  emailMagnetConfig,
  productPortfolio,
  siteConfig,
} from "@/data/site";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/schema";

export default function Home() {
  const featuredProduct = productPortfolio.find((product) => product.featured) ?? productPortfolio[0];

  return (
    <>
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd data={buildWebsiteSchema()} />
      <section className="overflow-hidden bg-[#fff7f2]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:py-28 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <Badge className="rounded-full bg-white px-4 py-2 text-[#213343] shadow-sm">
              Software studio by Dentoku Dev
            </Badge>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-balance text-[#213343] md:text-7xl">
                We build focused software tools for real-world workflows.
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-slate-700">
                Dentoku Dev develops Chrome extensions, Shopify apps, and lightweight productivity
                tools designed to remove repetitive work and help teams execute faster.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
                <Link href="#products">
                  View products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-md bg-white">
                <Link href="/contact">Contact Dentoku Dev</Link>
              </Button>
            </div>
            <ul className="grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
              {["Built and maintained by Dentoku Dev", "Clear pricing and support", "Focused tools, no unnecessary complexity"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-teal-600" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/80">
            <div className="rounded-xl bg-[#213343] p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">
                  Featured product
                </p>
                <Image
                  src={emailMagnetConfig.icon}
                  alt="EmailMagnet icon"
                  width={48}
                  height={48}
                  className="h-10 w-10 rounded-lg bg-white/10 object-contain p-2"
                />
              </div>
              <div className="mt-5 rounded-lg bg-white p-4">
                <Image
                  src={emailMagnetConfig.logo}
                  alt="EmailMagnet logo"
                  width={640}
                  height={360}
                  className="h-auto w-full"
                  priority
                />
              </div>
              <p className="mt-4 leading-8 text-slate-200">{featuredProduct.description}</p>
              <Button asChild className="mt-6 rounded-md bg-white text-[#213343] hover:bg-slate-100">
                <Link href={featuredProduct.href}>Open {featuredProduct.name}</Link>
              </Button>
            </div>
            <div className="grid gap-3 p-4">
              {productPortfolio.slice(1).map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="rounded-lg border border-slate-200 p-4 transition hover:border-[#ff5c35]/60 hover:bg-[#fff7f2]"
                >
                  <p className="font-semibold text-slate-950">{product.name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Products"
            title="Products built by Dentoku Dev"
            description="Explore our product portfolio with dedicated pages, clear positioning, and direct support."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productPortfolio.map((product) => (
              <Card
                key={product.href}
                className="rounded-xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <p className="text-sm font-semibold text-[#c43618]">{product.category}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <Image
                      src={product.icon}
                      alt={`${product.name} icon`}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-xl bg-slate-50 object-contain p-3"
                    />
                    <h2 className="text-2xl font-semibold text-slate-950">{product.name}</h2>
                  </div>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">{product.description}</p>
                  <Button
                    asChild
                    variant={product.featured ? "default" : "outline"}
                    className={product.featured ? "mt-6 rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]" : "mt-6 rounded-md"}
                  >
                    <Link href={product.href}>
                      {product.featured ? "View product page" : "Open product page"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="How we work"
            title="Small products, strong execution"
            description="We focus on practical software with clear scope, fast iteration, and long-term maintainability."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {companyTrustCues.map((item) => (
              <Card key={item.title} className="rounded-xl border-slate-200 bg-white shadow-sm">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-teal-50 text-teal-700">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="leading-7 text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[0.9fr_1fr]">
          <SectionHeading
            align="left"
            eyebrow="Featured product"
            title="EmailMagnet by Dentoku Dev"
            description="EmailMagnet helps teams find and extract emails while browsing, with a simple Free plan and a one-time PRO upgrade."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fff7f2] p-6">
            <h2 className="text-2xl font-semibold text-slate-950">What you can do with EmailMagnet</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Find visible email addresses from website pages, export results in CSV or TXT, and
              speed up prospecting or research workflows without manual copy-paste.
            </p>
            <Button asChild className="mt-6 rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
              <Link href={emailMagnetConfig.href}>Explore EmailMagnet</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#f3fbfa] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="More products"
            title="Other tools in the Dentoku Dev portfolio"
            description="Each product addresses a specific use case and ships with its own dedicated product page."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {productPortfolio
              .filter((product) => !product.featured)
              .map((product) => (
                <div key={product.href} className="rounded-xl border border-teal-100 bg-white p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold text-slate-950">{product.name}</h2>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {product.category}
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-[#213343] py-20 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold">Talk to Dentoku Dev</h2>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              Contact the studio for product support, billing questions, or portfolio details.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-md bg-white text-[#213343] hover:bg-slate-100">
            <Link href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
