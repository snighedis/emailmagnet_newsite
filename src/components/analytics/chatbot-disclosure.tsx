"use client";

import { useEffect, useState } from "react";
import { X, Sparkles } from "@/components/ui/icons";

const DISMISS_KEY = "chatbot-ai-notice-dismissed";

/**
 * EU AI Act Art. 50(1) transparency: tell visitors the support chat is an AI
 * system before they interact with it. Rendered only when the Chatbase widget
 * is active (i.e. with analytics consent), and dismissible so it shows once.
 *
 * Best practice: also set the bot's opening message in the Chatbase dashboard to
 * repeat this disclosure inside the chat window itself.
 */
export function ChatbotDisclosure() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(DISMISS_KEY) === "1") return;
    // Surface it just after the chat launcher has had time to mount.
    const timer = window.setTimeout(() => setVisible(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="note"
      aria-label="AI assistant disclosure"
      className="fixed bottom-24 right-4 z-40 max-w-[17rem] sm:right-6"
    >
      <div className="shadow-soft-lg flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-3.5">
        <Sparkles className="text-eyebrow mt-0.5 h-4 w-4 shrink-0" />
        <p className="text-xs leading-5 text-slate-600">
          Our support chat is an{" "}
          <span className="font-semibold text-slate-900">AI assistant</span>. Replies are automated
          and may be inaccurate. For anything important, email support@dentokudev.com.
        </p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss AI assistant notice"
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-slate-400 hover:text-slate-600"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
