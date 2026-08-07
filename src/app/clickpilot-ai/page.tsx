import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  CreditCard,
  Globe2,
  Key,
  ListChecks,
  Pen,
  Puzzle,
  Repeat,
  Sparkles,
  X,
  XCircle,
  Zap,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/components/marketing/section";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { HeroVideo } from "@/components/marketing/hero-video";
import { JsonLd } from "@/components/marketing/json-ld";
import { FaqList } from "@/components/marketing/faq-list";
import { PricingCards } from "@/components/marketing/pricing-cards";
import { productPortfolio, siteConfig, type PricingPlan } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildProductSoftwareSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "ClickPilot AI Chrome Writing Assistant",
  description:
    "ClickPilot AI is a Dentoku Dev Chrome extension that improves writing in-browser with fix, rewrite, summarize, translate, and custom shortcut actions.",
  path: "/clickpilot-ai",
});

const clickPilotProduct = productPortfolio.find((product) => product.href === "/clickpilot-ai");

export default function ClickPilotAiPage() {
  const faqs = [
    {
      question: "Do I need my own OpenAI API key?",
      answer:
        "Yes, ClickPilot AI uses your own OpenAI API key (BYOK - Bring Your Own Key). API usage costs are separate and paid directly to OpenAI.",
    },
    {
      question: "How is this different from ChatGPT?",
      answer:
        "ChatGPT requires tab switching and copy-paste, breaking your workflow. ClickPilot AI works directly inside websites like Gmail, LinkedIn, and X/Twitter. Plus, it includes Custom AI Shortcuts for repeatable tasks.",
    },
    {
      question: "Does it work on all websites?",
      answer:
        "ClickPilot AI works on Gmail, LinkedIn, X/Twitter, Notion, and most websites with text fields. Some platforms like Google Docs may have limited support.",
    },
    {
      question: "What's included in the $19 lifetime license?",
      answer:
        "You get a lifetime Pro license with full access to all Pro features, unlimited usage on the extension side, Custom AI Shortcuts, and no monthly subscription fees.",
    },
    {
      question: "How do I activate the Pro features?",
      answer:
        "After purchasing on Gumroad, you'll receive a license key by email. Simply paste the key in ClickPilot AI to unlock all Pro features.",
    },
  ];
  const features = [
    {
      title: "Fix grammar and clarity",
      description: "Instantly improve your writing without leaving the text field.",
      icon: Pen,
    },
    {
      title: "Rewrite in different tones/styles",
      description: "Transform your message to match the right tone for any situation.",
      icon: Repeat,
    },
    {
      title: "Summarize long text",
      description: "Get concise summaries of lengthy content in seconds.",
      icon: ListChecks,
    },
    {
      title: "Translate content",
      description: "Break language barriers with instant translations.",
      icon: Globe2,
    },
    {
      title: "Run custom AI shortcuts",
      description: "Create your own prompts for repeated tasks and workflows.",
      icon: Zap,
    },
    {
      title: "Smart templates & automation",
      description: "Coming soon: Pre-built templates and automated workflows for common writing scenarios.",
      icon: Sparkles,
    },
  ];

  const whereItWorks = [
    {
      name: "Gmail",
      description: "Write professional emails with AI assistance",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden>
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      description: "Create engaging posts and messages",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
        </svg>
      ),
    },
    {
      name: "X / Twitter",
      description: "Craft compelling tweets and replies",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#000000"/>
        </svg>
      ),
    },
    {
      name: "Notion",
      description: "Improve your notes and documentation",
      icon: (
        <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden>
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="#000000"/>
        </svg>
      ),
    },
    {
      name: "Most websites",
      description: "Works in any text field across the web",
      icon: <Globe2 className="h-10 w-10 text-slate-400" aria-hidden />,
    },
  ];

  const workflow = [
    {
      title: "Purchase on Gumroad",
      description: "Get your ClickPilot AI Lifetime license for $19",
    },
    {
      title: "Receive license key by email",
      description: "You'll get your activation key delivered instantly",
    },
    {
      title: "Paste key in ClickPilot AI",
      description: "Open the extension and enter your key to unlock Pro features",
    },
  ];

  const oldWaySteps = [
    "Write text in Gmail/LinkedIn",
    "Select and copy your text",
    "Open ChatGPT in new tab",
    "Paste and ask for help",
    "Wait for response",
    "Copy the result",
    "Switch back to original tab",
    "Paste and format",
  ];

  const newWaySteps = [
    "Write text in Gmail/LinkedIn",
    "Select text",
    "Right-click → ClickPilot AI",
    "Choose: Fix, Rewrite, Summarize, or Translate",
  ];

  const clickPilotPricingPlans: PricingPlan[] = [
    {
      name: "Free plan",
      price: "Free",
      eyebrow: "Perfect to get started",
      description: "Use core AI writing actions in Chrome before upgrading to recurring workflows.",
      features: [
        "Core AI actions.",
        "Fix, rewrite, translate, and summarize.",
        "Works on most websites with text fields.",
        "Requires your own OpenAI API key.",
      ],
      cta: {
        label: "Install Free Version",
        href: "https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb",
      },
      featured: true,
    },
    {
      name: "PRO plan",
      eyebrow: "For recurring writing",
      price: "$19",
      description: "One payment for full ClickPilot AI access, custom shortcuts, and lifetime use.",
      features: [
        "Lifetime Pro license.",
        "Full access to all Pro features.",
        "Unlimited usage on the extension side.",
        "Custom AI shortcuts.",
        "No monthly subscription.",
      ],
      cta: {
        label: "Get Lifetime PRO",
        href: "https://dentoku.gumroad.com/l/clickpilotAI",
      },
    },
  ];

  return (
    <>
      {clickPilotProduct ? (
        <JsonLd
          data={buildProductSoftwareSchema(
            clickPilotProduct,
            {
              "@type": "AggregateOffer",
              lowPrice: 0,
              highPrice: 19,
              priceCurrency: "USD",
              offerCount: 2,
              availability: "https://schema.org/InStock",
              url: `${siteConfig.url}/clickpilot-ai`,
            },
            [
              "https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb",
              "https://dentoku.gumroad.com/l/clickpilotAI",
            ],
          )}
        />
      ) : null}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "ClickPilot AI", href: "/clickpilot-ai" },
        ])}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <Eyebrow>Chrome AI Writing Assistant</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            ClickPilot AI: write better anywhere, directly in your browser
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
            ClickPilot AI works inside the websites you already use. No copy-paste, no extra tabs, no workflow breaks.
          </p>
          
          <HeroVideo
            className="mx-auto mt-8 max-w-4xl"
            src="/clickpilot-ai-demo.mp4"
            poster="/brand/clickpilot-ai-poster.jpg"
            label="Screen recording of ClickPilot AI rewriting selected text inside a web page"
            width={1280}
            height={628}
          />
          <p className="sr-only">
            The demo above is a silent, looping screen recording. It shows text being selected on a
            web page, the ClickPilot AI panel opening over it, and the selected passage being
            rewritten in place.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="px-8 py-4 text-lg font-semibold">
              <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                Add to Chrome - It&apos;s Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-eyebrow" /> Installs in 10 seconds
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-accent-teal" /> No account required
            </span>
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-xs leading-5 text-slate-500">
            <strong className="font-semibold text-slate-600">AI transparency:</strong> ClickPilot AI
            generates text using artificial intelligence (via your own OpenAI key). Outputs are
            machine-generated and may be inaccurate or biased. Review and edit them before you
            send or publish.
          </p>
        </div>
      </section>

      {/* Trust signals section */}
      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <p className="font-semibold text-slate-900">Chrome Web Store Verified</p>
              <p className="text-sm text-slate-600">Official extension with security review</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <p className="font-semibold text-slate-900">Privacy First</p>
              <p className="text-sm text-slate-600">
                Your text goes to your own OpenAI account, never to our servers
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              </div>
              <p className="font-semibold text-slate-900">Works in 50+ Languages</p>
              <p className="text-sm text-slate-600">Global writing assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After comparison */}
      <Section variant="default" containerClassName="max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>How it compares</Eyebrow>
          <h2 className="text-ink mt-3 text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
            The old way vs. the ClickPilot way
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The same task, two very different workflows. See how much time and focus you keep by
            staying right inside your browser.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Old way — de-emphasized */}
          <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 md:p-8">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
                  <XCircle className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-600">Without ClickPilot AI</h3>
              </div>
              <span className="rounded-md bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                8 steps
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {oldWaySteps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-slate-500">
                  <X className="mt-1 h-3.5 w-3.5 shrink-0 text-red-400" />
                  <span className="leading-6">{step}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              <Clock className="h-4 w-4 shrink-0" /> Takes 2–3 minutes, breaks focus
            </div>
          </div>

          {/* ClickPilot way — emphasized */}
          <div className="border-accent-teal/30 shadow-soft-lg ring-accent-teal/10 relative flex h-full flex-col rounded-3xl border bg-white p-7 ring-1 md:p-8">
            <span className="bg-accent-teal absolute -top-3 right-7 rounded-md px-3 py-1 text-xs font-semibold text-white shadow-sm">
              Recommended
            </span>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="bg-accent-teal/10 text-accent-teal flex h-9 w-9 items-center justify-center rounded-full">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">With ClickPilot AI</h3>
              </div>
              <span className="bg-accent-teal/10 text-accent-teal rounded-md px-3 py-1 text-xs font-semibold">
                4 steps
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {newWaySteps.map((step) => (
                <li key={step} className="flex items-start gap-3 text-slate-700">
                  <span className="bg-accent-teal/10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                    <Check className="text-accent-teal h-3 w-3" />
                  </span>
                  <span className="font-medium leading-6">{step}</span>
                </li>
              ))}
            </ul>
            <div className="bg-accent-teal/10 text-accent-teal mt-7 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold">
              <Zap className="h-4 w-4 shrink-0" /> Done in ~5 seconds, never lose focus
            </div>
          </div>
        </div>
      </Section>

      {/* Specific Use Cases */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          
          <h2 className="text-3xl font-bold text-center text-slate-950 mb-12">
            With one click, you can:
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="rounded-xl border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <feature.icon className="mt-0.5 h-7 w-7 shrink-0 text-orange-700" />
                    <div>
                      <h3 className="text-lg font-semibold text-orange-800">{feature.title}</h3>
                      <p className="mt-2 text-orange-700">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-950 mb-4">Ready to Write Better, Faster?</h3>
              <p className="text-slate-600 mb-6">Bring AI writing into your daily workflow and eliminate copy-paste forever.</p>
              <Button asChild size="lg" className="px-8 py-4 text-lg font-semibold">
                <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                  Add to Chrome - It&apos;s Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <p className="mt-4 text-sm text-slate-500">
                Start free • Upgrade to PRO for $19 • One-time payment, lifetime access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Where it works */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              Where it works
            </h2>
            <p className="text-lg text-slate-600">
              ClickPilot AI integrates seamlessly with your favorite platforms
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whereItWorks.map((platform) => (
              <Card key={platform.name} className="rounded-xl border-slate-200 shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{platform.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-950 mb-2">{platform.name}</h3>
                  <p className="text-slate-600">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Note: Some platforms like Google Docs may have limited support
            </p>
          </div>

          <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">What it is not</h2>
            <p className="mt-2 leading-7 text-slate-600">
              ClickPilot AI is not a document editor or a content manager. It improves the text in
              fields you are already writing in (fix, rewrite, summarize, translate) and hands
              control straight back to you.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Eyebrow className="mb-3">Upgrade Available</Eyebrow>
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              ClickPilot AI Lifetime
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Upgrade to ClickPilot AI Lifetime and bring AI writing into your daily workflow.
            </p>
          </div>

          <div className="mt-10">
            <PricingCards plans={clickPilotPricingPlans} />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950 md:text-4xl">
            How activation works
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {workflow.map((step, index) => (
              <Card key={step.title} className="rounded-xl border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <p className="text-xs font-mono text-slate-400">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Requirements */}
          <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-950 mb-6 text-center">Requirements</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe2 className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-slate-950">Google Chrome</h4>
                <p className="text-sm text-slate-600 mt-1">Browser required</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Puzzle className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-slate-950">Extension installed</h4>
                <p className="text-sm text-slate-600 mt-1">Free from Chrome Web Store</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Key className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-slate-950">OpenAI API key</h4>
                <p className="text-sm text-slate-600 mt-1">Your own key (BYOK)</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-slate-950">API usage costs</h4>
                <p className="text-sm text-slate-600 mt-1">Not included in license</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500">
                API usage costs are separate and paid directly to OpenAI
              </p>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="px-8 py-4 text-lg font-semibold">
              <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                Add to Chrome - It&apos;s Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-sm text-slate-500">
              <Zap className="h-4 w-4 text-eyebrow" /> Installs in 10 seconds • Start writing better immediately
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">ClickPilot AI FAQ</h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="ClickPilot AI related Dentoku Dev pages" className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-950">Related pages</h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>
                <Link className="font-medium text-eyebrow hover:underline" href="/overview">
                  Dentoku Dev product overview
                </Link>
              </li>
              <li>
                <Link className="font-medium text-eyebrow hover:underline" href="/faq">
                  Product and support FAQ
                </Link>
              </li>
              <li>
                <Link className="font-medium text-eyebrow hover:underline" href="/blog">
                  Browser productivity articles
                </Link>
              </li>
              <li>
                <Link className="font-medium text-eyebrow hover:underline" href="/contact">
                  Contact Dentoku Dev support
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
