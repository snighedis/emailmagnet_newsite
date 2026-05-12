import { MoneyPage } from "@/components/marketing/money-page";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "AI Writing Assistant Chrome Extension",
  description: "ClickPilot AI is a Chrome extension for fixing, rewriting, summarizing, and translating text inside browser fields.",
  path: "/clickpilot-ai/ai-writing-assistant-chrome-extension",
});

export default function AiWritingAssistantChromeExtensionPage() {
  return (
    <MoneyPage
      eyebrow="ClickPilot AI"
      title="AI writing assistant Chrome extension for browser text fields"
      answer="ClickPilot AI is a Dentoku Dev Chrome extension that brings fix, rewrite, summarize, translate, and custom AI shortcuts into the places where users already type online."
      bullets={[
        "Rewrite messages without switching tabs.",
        "Summarize long text from browser workflows.",
        "Translate selected text while staying in context.",
        "Use custom shortcuts for repeated writing tasks.",
      ]}
      table={[
        { intent: "AI writing assistant Chrome extension", fit: "ClickPilot AI", page: "/clickpilot-ai" },
        { intent: "rewrite text in browser", fit: "Rewrite action", page: "/clickpilot-ai" },
        { intent: "summarize selected text Chrome", fit: "Summarize action", page: "/clickpilot-ai" },
      ]}
      ctaHref="/clickpilot-ai"
      ctaLabel="Open ClickPilot AI"
    />
  );
}
