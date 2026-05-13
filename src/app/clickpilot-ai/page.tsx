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
      question: "What is ClickPilot AI?",
      answer:
        "ClickPilot AI is a Chrome extension by Dentoku Dev that helps users fix, rewrite, summarize, translate, and transform text directly inside browser fields.",
    },
    {
      question: "Where does ClickPilot AI work best?",
      answer:
        "ClickPilot AI works best in browser-based writing workflows such as email, social posts, support replies, internal notes, and web editors where switching tabs slows the user down.",
    },
    {
      question: "Is ClickPilot AI a Chrome extension?",
      answer:
        "Yes. ClickPilot AI is positioned as a Chrome extension for AI-assisted writing directly inside browser workflows.",
    },
  ];
  const capabilities = [
    "Fix grammar and clarity directly inside website text fields.",
    "Rewrite selected text in different tones and structures.",
    "Summarize long passages into concise key points.",
    "Translate text quickly without switching tabs.",
    "Save custom AI shortcuts for repeated writing tasks.",
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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#c43618]">
            Dentoku Dev portfolio
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-normal text-balance text-slate-950">
            ClickPilot AI
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-600">
            ClickPilot AI is a Chrome extension by Dentoku Dev for AI-assisted writing inside
            browser text fields. It helps users fix, rewrite, summarize, translate, and run custom
            shortcuts without copy-paste or tab switching.
          </p>
          <div className="mt-8 rounded-xl border border-teal-100 bg-teal-50 p-5">
            <h2 className="text-lg font-semibold text-slate-950">Quick answer</h2>
            <p className="mt-2 leading-7 text-slate-700">
              Use ClickPilot AI when the search intent is “AI writing assistant Chrome extension”
              or “rewrite text inside browser fields.” The product connects AI text actions to the
              web apps where writing already happens.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
              <Link href="https://chromewebstore.google.com/detail/clickpilot-ai/haampmmjkjahplfoelcnjjhncbacgehb">
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
                <h2 className="text-2xl font-semibold text-slate-950">Core capabilities</h2>
                <ul className="mt-5 space-y-3">
                  {capabilities.map((item) => (
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
                <h2 className="text-2xl font-semibold text-slate-950">Plans and usage</h2>
                <ul className="mt-5 space-y-3">
                  {planSummary.map((item) => (
                    <li key={item} className="leading-7 text-slate-700">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Note: the Chrome Web Store listing mentions that some platforms, including Google
                  Docs, can have limited support.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-950">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Intent</th>
                  <th scope="col" className="px-4 py-3 font-semibold">ClickPilot AI action</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Best-fit workflow</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="px-4 py-4">Improve rough text</td>
                  <td className="px-4 py-4">Fix and rewrite</td>
                  <td className="px-4 py-4">Emails, replies, posts, and notes</td>
                </tr>
                <tr>
                  <td className="px-4 py-4">Understand long text</td>
                  <td className="px-4 py-4">Summarize</td>
                  <td className="px-4 py-4">Research, support, and review workflows</td>
                </tr>
                <tr>
                  <td className="px-4 py-4">Move across languages</td>
                  <td className="px-4 py-4">Translate</td>
                  <td className="px-4 py-4">International browser-based writing</td>
                </tr>
              </tbody>
            </table>
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
          <Button asChild className="mt-10 rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
            <Link href="/">Back to Dentoku Dev</Link>
          </Button>
          <nav aria-label="ClickPilot AI related Dentoku Dev pages" className="mt-10 rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-slate-950">Related pages</h2>
            <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>
                <Link className="font-medium text-[#c43618] hover:underline" href="/overview">
                  Dentoku Dev product overview
                </Link>
              </li>
              <li>
                <Link className="font-medium text-[#c43618] hover:underline" href="/faq">
                  EmailMagnet and Dentoku Dev FAQ
                </Link>
              </li>
              <li>
                <Link className="font-medium text-[#c43618] hover:underline" href="/blog">
                  Browser productivity articles
                </Link>
              </li>
              <li>
                <Link className="font-medium text-[#c43618] hover:underline" href="/contact">
                  Contact Dentoku Dev support
                </Link>
              </li>
            </ul>
          </nav>
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
