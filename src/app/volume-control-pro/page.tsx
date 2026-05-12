import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/json-ld";
import { productPortfolio } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema, buildProductSoftwareSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Volume Control PRO",
  description:
    "Volume Control PRO is a Dentoku Dev Chrome extension for boosting tab audio up to 600%, with one-click amplification and per-site volume memory.",
  path: "/volume-control-pro",
});

export default function VolumeControlProPage() {
  const product = productPortfolio.find((item) => item.name === "Volume Control PRO")!;
  const faqs = [
    {
      question: "What is Volume Control PRO?",
      answer:
        "Volume Control PRO is a Dentoku Dev Chrome extension for boosting tab audio, adjusting low-volume browser content, and remembering volume settings by site.",
    },
    {
      question: "What does 600% volume boost mean?",
      answer:
        "The product is positioned as a Chrome tab volume amplifier that can raise quiet browser audio above the default level, up to the limit described in the Chrome Web Store listing.",
    },
    {
      question: "Who should use Volume Control PRO?",
      answer:
        "Volume Control PRO is useful for people who watch low-volume videos, attend browser-based calls, listen to webinars, or switch between sites with inconsistent audio levels.",
    },
  ];
  const keyFeatures = [
    "Boost tab volume up to 600% for quiet videos, meetings, and streams.",
    "One-click audio amplification directly from the extension popup.",
    "Per-site volume memory for faster repeat sessions.",
    "Icon badge that shows active volume level at a glance.",
    "Theme support that follows dark and light browser preferences.",
  ];

  const useCases = [
    "Low-volume tutorials and YouTube videos.",
    "Online calls across Zoom, Teams, Meet, and similar tools.",
    "Streaming platforms with inconsistent audio levels.",
    "Podcasts, audiobooks, and webinar sessions.",
  ];

  const operationSteps = [
    {
      title: "Open the extension",
      description: "Click the Volume Control PRO icon from your Chrome toolbar.",
    },
    {
      title: "Set your level",
      description: "Move the slider to the volume level you need, up to 600%.",
    },
    {
      title: "Keep listening",
      description: "Audio updates instantly, and saved site settings speed up future sessions.",
    },
  ];

  return (
    <>
      <JsonLd data={buildProductSoftwareSchema(product)} />
      <JsonLd data={buildFaqSchema(faqs)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Volume Control PRO", href: "/volume-control-pro" },
        ])}
      />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">
            Dentoku Dev portfolio
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-normal text-balance text-slate-950">
            Volume Control PRO
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-600">
            Volume Control PRO is a Chrome extension by Dentoku Dev for boosting tab audio up to
            600%, adjusting quiet browser content, and remembering volume preferences by site.
          </p>
          <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">Quick answer</h2>
            <p className="mt-2 leading-7 text-slate-700">
              Use Volume Control PRO when the search intent is “Chrome volume booster,” “increase
              tab volume,” or “volume amplifier for Chrome.” It focuses on faster audio control
              without changing system-wide settings.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
              <Link href="https://chromewebstore.google.com/detail/volume-control-pro-600%-s/bjjpdehblihhfdfcoonadnnfmkblmogf">
                Open on Chrome Web Store
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <Link href="/contact">Contact support</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Card className="rounded-xl border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-slate-950">Key features</h2>
                <ul className="mt-5 space-y-3">
                  {keyFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-2 leading-7 text-slate-700">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-xl border-slate-200 bg-slate-50 shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-slate-950">Where it performs best</h2>
                <ul className="mt-5 space-y-3">
                  {useCases.map((item) => (
                    <li key={item} className="leading-7 text-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-slate-500">
                  The Chrome Web Store listing also states no ads, no subscription, and data
                  handling disclosures available in the extension details.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-950">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Use case</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Problem</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Volume Control PRO fit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {useCases.map((item) => (
                  <tr key={item}>
                    <td className="px-4 py-4">{item}</td>
                    <td className="px-4 py-4">Browser audio is too quiet or inconsistent.</td>
                    <td className="px-4 py-4">Boost the active tab and keep site-specific control.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950 md:text-4xl">
            Three-step workflow
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {operationSteps.map((step, index) => (
              <Card key={step.title} className="rounded-xl border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <p className="text-xs font-mono text-slate-400">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild className="mt-10 rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
            <Link href="/">Back to Dentoku Dev</Link>
          </Button>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">Volume Control PRO FAQ</h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
