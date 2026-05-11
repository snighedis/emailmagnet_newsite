import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { SectionHeading } from "@/components/marketing/section-heading";
import {
  companyTrustCues,
  contentHubs,
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
              Product studio for focused software tools
            </Badge>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-balance text-[#213343] md:text-7xl">
                Dentoku Dev builds practical products for browser and business workflows.
              </h1>
              <p className="max-w-2xl text-xl leading-9 text-slate-700">
                Dentoku Dev is a software product studio publishing Chrome extensions, Shopify apps,
                and lightweight tools. Each product has its own clear page, support path, and
                discoverable product identity.
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
              {["Parent company: Dentoku Dev", "Featured product: EmailMagnet", "Future-ready product pages"].map(
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
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-200">
                Featured product
              </p>
              <h2 className="mt-4 text-4xl font-semibold">{featuredProduct.name}</h2>
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
            title="A portfolio built around clear product entities"
            description="Dentoku Dev separates the company homepage from product-specific pages so each tool can be explained, discovered, and cited accurately."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {productPortfolio.map((product) => (
              <Card
                key={product.href}
                className="rounded-xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <p className="text-sm font-semibold text-[#c43618]">{product.category}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-slate-950">{product.name}</h2>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">{product.description}</p>
                  <Button
                    asChild
                    variant={product.featured ? "default" : "outline"}
                    className={product.featured ? "mt-6 rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]" : "mt-6 rounded-md"}
                  >
                    <Link href={product.href}>
                      {product.featured ? "View product page" : "View status page"}
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
            eyebrow="What we build"
            title="Focused tools with direct ownership and support"
            description="The company-level site introduces Dentoku Dev, while product routes like /emailmagnet handle conversion, product education, pricing, FAQs, and product schema."
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
            eyebrow="Entity clarity"
            title="Dentoku Dev is the company. EmailMagnet is one product."
            description="This structure helps users, search engines, and AI answer engines distinguish parent brand, product pages, and future portfolio additions."
          />
          <div className="rounded-xl border border-slate-200 bg-[#fff7f2] p-6">
            <h2 className="text-2xl font-semibold text-slate-950">EmailMagnet product definition</h2>
            <p className="mt-4 leading-8 text-slate-700">
              EmailMagnet is a Chrome Extension made by Dentoku Dev. It helps users find and
              extract emails from websites while browsing, with Free and PRO/lifetime access
              options.
            </p>
            <Button asChild className="mt-6 rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
              <Link href={emailMagnetConfig.href}>Go to EmailMagnet</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#f3fbfa] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Portfolio status"
            title="Live product first, future products clearly marked"
            description="Dentoku Dev keeps future product routes in the architecture without presenting unfinished products as launched."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {productPortfolio
              .filter((product) => product.status === "coming-soon")
              .map((product) => (
                <div key={product.href} className="rounded-xl border border-teal-100 bg-white p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-xl font-semibold text-slate-950">{product.name}</h2>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      <Clock3 className="h-3 w-3" />
                      Coming soon
                    </span>
                  </div>
                  <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            eyebrow="Content system"
            title="Built for product education and AI discoverability"
            description="Blog, docs, use cases, glossary, comparisons, and integrations support company-level and product-level authority."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {contentHubs.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-slate-950">{hub.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{hub.description}</p>
              </Link>
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
              Contact the studio for product support, billing questions, or future product details.
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
