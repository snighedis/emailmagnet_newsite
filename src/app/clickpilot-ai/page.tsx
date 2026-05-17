import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/marketing/json-ld";
import { FaqList } from "@/components/marketing/faq-list";
import { createMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "ClickPilot AI",
  description:
    "ClickPilot AI is a Dentoku Dev Chrome extension that improves writing in-browser with fix, rewrite, summarize, translate, and custom shortcut actions.",
  path: "/clickpilot-ai",
});

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
      icon: "✏️"
    },
    {
      title: "Rewrite in different tones/styles",
      description: "Transform your message to match the right tone for any situation.",
      icon: "🔄"
    },
    {
      title: "Summarize long text",
      description: "Get concise summaries of lengthy content in seconds.",
      icon: "📝"
    },
    {
      title: "Translate content",
      description: "Break language barriers with instant translations.",
      icon: "🌍"
    },
    {
      title: "Run custom AI shortcuts",
      description: "Create your own prompts for repeated tasks and workflows.",
      icon: "⚡"
    },
    {
      title: "Smart templates & automation",
      description: "Coming soon: Pre-built templates and automated workflows for common writing scenarios.",
      icon: "🚀"
    }
  ];

  const whereItWorks = [
    {
      name: "Gmail",
      description: "Write professional emails with AI assistance"
    },
    {
      name: "LinkedIn", 
      description: "Create engaging posts and messages"
    },
    {
      name: "X / Twitter",
      description: "Craft compelling tweets and replies"
    },
    {
      name: "Notion",
      description: "Improve your notes and documentation"
    },
    {
      name: "Most websites",
      description: "Works in any text field across the web"
    }
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

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Dentoku Dev", href: "/" },
          { name: "ClickPilot AI", href: "/clickpilot-ai" },
        ])}
      />
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">
            Chrome AI Writing Assistant
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Write better anywhere, directly in your browser
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
            ClickPilot AI works inside the websites you already use. No copy-paste, no extra tabs, no workflow breaks.
          </p>
          
          <div className="mt-8 rounded-xl overflow-hidden shadow-2xl border border-slate-200 max-w-4xl mx-auto">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto"
            >
              <source src="/clickpilot-ai-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320] px-8 py-4 text-lg font-semibold">
              <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                Add to Chrome - It&apos;s Free
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
                  <span>Choose: Fix, Rewrite, Summarize, or Translate</span>
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
            With one click, you can:
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card 
                key={feature.title} 
                className={`rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                  index === features.length - 1 
                    ? 'border-orange-200 bg-gradient-to-br from-orange-50 to-red-50' 
                    : 'border-slate-200'
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h3 className={`text-lg font-semibold ${
                        index === features.length - 1 ? 'text-orange-800' : 'text-slate-950'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`mt-2 ${
                        index === features.length - 1 ? 'text-orange-700' : 'text-slate-600'
                      }`}>
                        {feature.description}
                      </p>
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
              <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320] px-8 py-4 text-lg font-semibold">
                <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                  Add to Chrome - It&apos;s Free
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
              ClickPilot AI Lifetime
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Upgrade to ClickPilot AI Lifetime and bring AI writing into your daily workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-6 items-stretch">
            {/* FREE Plan */}
            <div className="relative flex">
              <Card className="rounded-2xl border-slate-200 shadow-sm p-8 flex flex-col w-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2">Free</h3>
                  <p className="text-slate-600">Perfect to get started</p>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Core AI actions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Fix, rewrite, translate, summarize</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Works on most websites</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">Requires OpenAI API key</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild variant="outline" className="w-full rounded-md">
                    <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                      Install Free Version
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
            
            {/* PRO Plan */}
            <div className="relative flex">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <span className="bg-[#ff5c35] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
              <Card className="rounded-2xl border-[#ff5c35] border-2 shadow-lg p-8 bg-gradient-to-br from-white to-orange-50 flex flex-col w-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2">
                    <span className="text-[#ff5c35]">Lifetime</span> ($19)
                  </h3>
                  <p className="text-slate-600">One-time payment, lifetime access</p>
                </div>
                
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff5c35]" />
                    <span className="text-slate-700">Lifetime Pro license</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff5c35]" />
                    <span className="text-slate-700">Full access to all Pro features</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff5c35]" />
                    <span className="text-slate-700">Unlimited usage on extension side</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff5c35]" />
                    <span className="text-slate-700">Custom AI shortcuts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff5c35]" />
                    <span className="text-slate-700">No monthly subscription</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button asChild className="w-full rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320] font-semibold">
                    <Link href="https://dentoku.gumroad.com/l/clickpilotAI">
                      Get Lifetime PRO
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  
                  <p className="text-center text-slate-500 text-sm mt-4">
                    One-time payment • Lifetime access • 30-day guarantee
                  </p>
                </div>
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
                  <span className="text-2xl">🌐</span>
                </div>
                <h4 className="font-semibold text-slate-950">Google Chrome</h4>
                <p className="text-sm text-slate-600 mt-1">Browser required</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🧩</span>
                </div>
                <h4 className="font-semibold text-slate-950">Extension installed</h4>
                <p className="text-sm text-slate-600 mt-1">Free from Chrome Web Store</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔑</span>
                </div>
                <h4 className="font-semibold text-slate-950">OpenAI API key</h4>
                <p className="text-sm text-slate-600 mt-1">Your own key (BYOK)</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">💳</span>
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
            <Button asChild size="lg" className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320] px-8 py-4 text-lg font-semibold">
              <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
                Add to Chrome - It&apos;s Free
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
