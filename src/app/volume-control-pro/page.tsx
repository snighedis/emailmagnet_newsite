import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  MousePointerClick,
  Repeat,
  ShieldCheck,
  Sparkles,
  Zap,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/marketing/section";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { StatStrip } from "@/components/marketing/stat-strip";
import { CtaBand } from "@/components/marketing/cta-band";
import { FaqList } from "@/components/marketing/faq-list";
import { JsonLd } from "@/components/marketing/json-ld";
import { productPortfolio, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildProductSoftwareSchema } from "@/lib/schema";

const chromeStoreUrl =
  "https://chromewebstore.google.com/detail/volume-control-pro-600%-s/bjjpdehblihhfdfcoonadnnfmkblmogf";

export const metadata = createMetadata({
  title: "Volume Control PRO Chrome Booster",
  description:
    "Volume Control PRO is a Dentoku Dev Chrome extension for boosting tab audio up to 600%, with one-click amplification and per-site volume memory.",
  path: "/volume-control-pro",
});

const stats = [
  { value: "600%", label: "Maximum tab volume boost" },
  { value: "~44 KB", label: "Lightweight install, no clutter" },
  { value: "7", label: "Languages supported" },
];

const features = [
  {
    title: "Boost volume up to 600%",
    description:
      "Raise quiet browser audio well above Chrome's default ceiling for videos, music, and calls.",
    icon: Zap,
  },
  {
    title: "One slider, instant effect",
    description:
      "Open the extension, adjust the slider, and hear the difference immediately — no settings pages.",
    icon: MousePointerClick,
  },
  {
    title: "Per-site volume memory",
    description:
      "Saved site settings mean repeat sessions start at the level you already chose.",
    icon: Repeat,
  },
  {
    title: "Stable on dynamic sites",
    description:
      "Improved handling for pages that update content in real time, so boosted audio stays smooth.",
    icon: Sparkles,
  },
  {
    title: "Graceful fallback",
    description:
      "If a site limits boosting, the extension handles it gracefully instead of breaking playback.",
    icon: ShieldCheck,
  },
  {
    title: "Localized in 7 languages",
    description: "English, German, Spanish, French, Italian, Japanese, and Korean.",
    icon: Globe2,
  },
];

const useCaseRows = [
  {
    useCase: "Quiet YouTube videos and tutorials",
    problem: "Speech recorded too low to follow comfortably.",
    fit: "Boost the active tab past 100% without touching system volume.",
  },
  {
    useCase: "Online classes and webinars",
    problem: "Presenters and platforms with inconsistent levels.",
    fit: "Set the level once and adjust live as the session changes.",
  },
  {
    useCase: "Podcasts and interviews",
    problem: "Multiple speakers mixed at different volumes.",
    fit: "Amplify low segments without re-encoding or downloads.",
  },
  {
    useCase: "Video calls and meetings",
    problem: "A colleague's microphone is too quiet.",
    fit: "Raise only the call tab while other tabs stay unchanged.",
  },
  {
    useCase: "Streaming with inconsistent loudness",
    problem: "Volume jumps between episodes, ads, and platforms.",
    fit: "Per-site memory keeps your preferred level per platform.",
  },
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

const faqs = [
  {
    question: "What is Volume Control PRO?",
    answer:
      "Volume Control PRO is a Dentoku Dev Chrome extension for boosting tab audio, adjusting low-volume browser content, and remembering volume settings by site.",
  },
  {
    question: "What does 600% volume boost mean?",
    answer:
      "Chrome caps normal playback at 100% of the source volume. Volume Control PRO amplifies the active tab's audio up to six times that level, which is the limit described in the Chrome Web Store listing.",
  },
  {
    question: "Does it work on every website?",
    answer:
      "It works very well on YouTube and most HTML5 media sites. Some protected web players — for example, certain Spotify Web playback scenarios — may have limited boost support due to browser restrictions.",
  },
  {
    question: "Does it collect my data?",
    answer:
      "No. The Chrome Web Store disclosure states the developer does not collect or use your data. Nothing is sold to third parties or used for unrelated purposes.",
  },
  {
    question: "Is Volume Control PRO free?",
    answer:
      "Yes — the extension is listed on the Chrome Web Store with no ads and no subscription. Install it and start boosting immediately.",
  },
  {
    question: "Who should use Volume Control PRO?",
    answer:
      "People who watch low-volume videos, attend browser-based calls, listen to webinars, or switch between sites with inconsistent audio levels.",
  },
];

const volumeControlProduct = productPortfolio.find(
  (product) => product.href === "/volume-control-pro",
);

export default function VolumeControlProPage() {
  return (
    <>
      {volumeControlProduct ? (
        <JsonLd
          data={buildProductSoftwareSchema(volumeControlProduct, {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${siteConfig.url}/volume-control-pro`,
          })}
        />
      ) : null}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "Volume Control PRO", href: "/volume-control-pro" },
        ])}
      />

      {/* Hero */}
      <Section variant="default">
        <Eyebrow>Chrome extension</Eyebrow>
        <h1 className="text-ink mt-3 text-4xl font-semibold tracking-[-0.02em] text-balance md:text-6xl">
          Volume Control PRO
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-600">
          Audio booster and volume amplifier for Chrome. Increase tab volume up to 600% for
          videos, music, and calls — and fix low sound on the sites you already use, without
          touching your system settings.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="font-semibold">
            <Link href={chromeStoreUrl}>
              Add to Chrome — free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>
        <StatStrip stats={stats} className="mt-12 max-w-3xl border-t border-slate-200 pt-8" />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">Quick answer</h2>
            <p className="mt-2 leading-7 text-slate-700">
              Use Volume Control PRO when the search intent is “Chrome volume booster,” “increase
              tab volume,” or “volume amplifier for Chrome.” It focuses on faster audio control
              without changing system-wide settings.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">What it is not</h2>
            <p className="mt-2 leading-7 text-slate-600">
              Volume Control PRO is not a system-wide equalizer or an audio recorder. It controls
              the volume of browser tabs only — not other applications or your operating system’s
              master volume.
            </p>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section variant="blue">
        <SectionHeading
          eyebrow="Features"
          title="Small extension, complete volume control"
          description="Everything below comes from the Chrome Web Store listing — no more, no less."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      {/* Use cases */}
      <Section variant="default">
        <SectionHeading
          eyebrow="Use cases"
          title="Where it performs best"
          description="Built for the everyday situations where browser audio is simply too quiet."
        />
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-950">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Use case
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Problem
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  Volume Control PRO fit
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {useCaseRows.map((row) => (
                <tr key={row.useCase}>
                  <td className="px-4 py-4 font-medium text-slate-900">{row.useCase}</td>
                  <td className="px-4 py-4">{row.problem}</td>
                  <td className="px-4 py-4">{row.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-500">
          Honest compatibility note: boosting works very well on YouTube and most HTML5 media
          sites. Some protected web players (for example, certain Spotify Web playback scenarios)
          may have limited boost support due to browser restrictions.
        </p>
      </Section>

      {/* Workflow */}
      <Section variant="soft">
        <SectionHeading eyebrow="How it works" title="Three steps to louder tabs" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {operationSteps.map((step, index) => (
            <Card key={step.title} className="rounded-2xl border-slate-200/80 bg-white shadow-soft">
              <CardContent className="p-6">
                <p className="font-mono text-xs text-slate-400">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <nav
          aria-label="Volume Control PRO related Dentoku Dev pages"
          className="shadow-soft mt-12 rounded-2xl border border-slate-200/80 bg-white p-6"
        >
          <h2 className="text-lg font-semibold text-slate-950">Related pages</h2>
          <ul className="mt-3 grid gap-2 text-sm font-medium sm:grid-cols-2">
            <li>
              <Link
                className="text-eyebrow hover:underline"
                href="/volume-control-pro/chrome-volume-booster-600"
              >
                Chrome volume booster 600% guide
              </Link>
            </li>
            <li>
              <Link className="text-eyebrow hover:underline" href="/overview">
                Dentoku Dev product overview
              </Link>
            </li>
            <li>
              <Link className="text-eyebrow hover:underline" href="/blog">
                Browser productivity articles
              </Link>
            </li>
            <li>
              <Link className="text-eyebrow hover:underline" href="/contact">
                Contact Dentoku Dev support
              </Link>
            </li>
          </ul>
        </nav>
      </Section>

      {/* FAQ */}
      <Section variant="default">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="text-ink mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
              Volume Control PRO FAQ
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </Section>

      <CtaBand
        eyebrow="Get started"
        title="Stop straining to hear quiet tabs"
        description="Install Volume Control PRO from the Chrome Web Store — free, no ads, no subscription — or reach out if you have a support question."
        primary={{ label: "Add to Chrome", href: chromeStoreUrl }}
        secondary={{ label: "Contact support", href: "/contact" }}
      />
    </>
  );
}
