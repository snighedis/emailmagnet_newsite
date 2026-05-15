import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { FaqList } from "@/components/marketing/faq-list";
import { productPortfolio } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema, buildFaqSchema, buildProductSoftwareSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "ClickPilot AI",
  description:
    "ClickPilot AI is a Dentoku Dev Chrome extension that improves writing in-browser with fix, rewrite, summarize, translate, and custom shortcut actions.",
  path: "/clickpilot-ai",
});

export default function ClickPilotAiPage() {
  const product = productPortfolio.find((item) => item.name === "ClickPilot AI")!;
  const faqs = [
    {
      question: "Does this slow down my browser?",
      answer:
        "No. ClickPilot AI activates only when you need it and uses minimal resources. It won't affect your browsing speed or performance.",
    },
    {
      question: "Do you store my writing?",
      answer:
        "Never. All text processing happens locally or through encrypted channels. We can't see what you write, and your content never leaves your control.",
    },
    {
      question: "How is this different from ChatGPT?",
      answer:
        "ChatGPT requires tab switching and copy-paste, breaking your workflow. ClickPilot AI works instantly inside any text field you're already using - Gmail, LinkedIn, Slack, anywhere.",
    },
    {
      question: "What if I don't like it?",
      answer:
        "Uninstall anytime with one click in Chrome's extension manager. No account deletion or cancellation process needed. The free version has no commitments.",
    },
    {
      question: "Does it work on all websites?",
      answer:
        "ClickPilot AI works on virtually any website including Gmail, LinkedIn, Notion, Slack, Twitter, and most text editors. Only specialized editors like Google Docs have limited support due to their unique architecture.",
    },
  ];
  const useCases = [
    {
      title: "Professional emails in 5 seconds",
      description: "Transform casual drafts into polished, professional messages that get results.",
      icon: "📧"
    },
    {
      title: "LinkedIn posts that get engagement", 
      description: "Turn your thoughts into compelling posts that your network actually wants to read.",
      icon: "💼"
    },
    {
      title: "Support replies that solve problems",
      description: "Rewrite technical responses to be clear, helpful, and customer-friendly.",
      icon: "🎯"
    },
    {
      title: "Notes that make sense later",
      description: "Clean up messy meeting notes and ideas into organized, actionable content.",
      icon: "📝"
    }
  ];

  const workflow = [
    {
      title: "Open a supported text field",
      description:
        "Use ClickPilot AI while writing in tools like Gmail, LinkedIn, Notion, and most website editors.",
    },
    {
      title: "Choose the action you need",
      description: "Run fix, rewrite, summarize, translate, or your own custom shortcut.",
    },
    {
      title: "Review and apply",
      description: "Edit the result if needed, then apply it without leaving the page.",
    },
  ];

  const planSummary = [
    "Free plan with limited daily actions and core writing tools.",
    "PRO plan with unlimited usage and all features unlocked.",
    "One-time lifetime option available on Gumroad according to the store listing.",
  ];

  return (
    <>
      <JsonLd data={buildProductSoftwareSchema(product)} />
      <JsonLd data={buildFaqSchema(faqs)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "ClickPilot AI", href: "/clickpilot-ai" },
        ])}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">
            Chrome Extension • Free to Install
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Stop Copy-Pasting Text Between Tabs
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
            Fix grammar, rewrite content, and translate text directly in Gmail, LinkedIn, and virtually any website. No more switching tabs or breaking your workflow.
          </p>
          
          <div className="mt-8 rounded-xl overflow-hidden shadow-2xl border border-slate-200 max-w-4xl mx-auto">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto"
              poster="/brand/clickpilot-ai-icon.png"
            >
              <source src="/clickpilot-ai-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320] px-8 py-4 text-lg font-semibold">
              <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                Add to Chrome - It's Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            ⚡ Installs in 10 seconds • ✓ No account required
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
              <p className="text-sm text-slate-600">Your text never leaves your browser</p>
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

      {/* Before/After Workflow */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-slate-950 mb-12">
            The Old Way vs. The ClickPilot Way
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4">❌ Without ClickPilot AI</h3>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Write text in Gmail/LinkedIn</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Select and copy your text</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Open ChatGPT in new tab</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Paste and ask for help</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Wait for response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Copy the result</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Switch back to original tab</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span>Paste and format</span>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-red-600">⏱️ Takes 2-3 minutes, breaks focus</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/clickpilot-ai-logo.png" 
                  alt="ClickPilot AI" 
                  className="w-8 h-8 rounded-lg"
                />
                <h3 className="text-xl font-semibold text-green-800">✅ With ClickPilot AI</h3>
              </div>
              <div className="space-y-3 text-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Write text in Gmail/LinkedIn</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Select text</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Right-click → ClickPilot AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Choose: Fix, Rewrite, or Translate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>✨ Done!</span>
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-green-600">⚡ Takes 5 seconds, never lose focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Use Cases */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          
          <h2 className="text-3xl font-bold text-center text-slate-950 mb-12">
            Perfect for These Common Writing Tasks
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="rounded-xl border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{useCase.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950">{useCase.title}</h3>
                      <p className="mt-2 text-slate-600">{useCase.description}</p>
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
              <p className="text-slate-600 mb-6">Join thousands of professionals who've eliminated copy-paste from their writing workflow.</p>
              <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320] px-8 py-4 text-lg font-semibold">
                <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                  Add to Chrome - It's Free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <p className="mt-4 text-sm text-slate-500">
                Start free • Upgrade to PRO for unlimited usage • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRO Features - Clean Design */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618] mb-3">
              Upgrade Available
            </p>
            <h2 className="text-3xl font-bold text-slate-950 mb-4">
              Need More? Unlock Unlimited Usage
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Love ClickPilot AI? Upgrade to PRO for unlimited daily actions and advanced features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {/* FREE Plan */}
            <Card className="rounded-2xl border-slate-200 shadow-sm p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-slate-950 mb-2">Free</h3>
                <p className="text-slate-600">Perfect to get started</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">10 AI actions per day</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Fix, rewrite, translate</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Works on any website</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Privacy protected</span>
                </div>
              </div>
              
              <Button asChild variant="outline" className="w-full rounded-md">
                <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                  Install Free Version
                </Link>
              </Button>
            </Card>
            
            {/* PRO Plan - Wrapper with margin to accommodate badge */}
            <div className="relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-[#ff5c35] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
              <Card className="rounded-2xl border-[#ff5c35] border-2 shadow-lg p-8 bg-gradient-to-br from-white to-orange-50">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2">
                    PRO <span className="text-[#ff5c35]">Lifetime</span>
                  </h3>
                  <p className="text-slate-600">Unlimited professional experience</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff5c35]" />
                    <span className="text-slate-700"><strong>Unlimited</strong> AI actions per day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff5c35]" />
                    <span className="text-slate-700">Advanced custom shortcuts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff5c35]" />
                    <span className="text-slate-700">Priority email support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff5c35]" />
                    <span className="text-slate-700">All future updates included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff5c35]" />
                    <span className="text-slate-700">Advanced AI models access</span>
                  </div>
                </div>
                
                <Button asChild className="w-full rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320] font-semibold">
                  <Link href="https://dentoku.gumroad.com/l/clickpilotAI">
                    Get Lifetime PRO
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                
                <p className="text-center text-slate-500 text-sm mt-4">
                  One-time payment • Lifetime access • 30-day guarantee
                </p>
              </Card>
            </div>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <div className="flex items-center justify-center gap-6 text-slate-500 text-sm flex-wrap">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Secure payment via Gumroad
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                Instant delivery
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                No subscription
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-semibold tracking-normal text-slate-950 md:text-4xl">
            How ClickPilot AI works
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
          
          {/* Final CTA */}
          <div className="mt-16 text-center">
            <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320] px-8 py-4 text-lg font-semibold">
              <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                Add to Chrome - It's Free
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <p className="mt-3 text-sm text-slate-500">
              ⚡ Installs in 10 seconds • Start writing better immediately
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">ClickPilot AI FAQ</h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}