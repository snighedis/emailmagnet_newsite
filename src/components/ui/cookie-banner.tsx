"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

const consentKey = "cookie-consent";
const consentEvent = "cookie-consent-change";

function updateConsent(value: "accepted" | "rejected") {
  localStorage.setItem(consentKey, value);
  window.dispatchEvent(new Event(consentEvent));
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const hasConsent = localStorage.getItem(consentKey);
      setIsVisible(!hasConsent);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const handleAccept = () => {
    updateConsent("accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    updateConsent("rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    updateConsent("rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-lg">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-sm leading-5 text-slate-700">
              We use analytics only if you allow it. Rejecting keeps analytics disabled.{" "}
              <Link
                href="/cookies"
                className="font-medium text-eyebrow hover:underline"
              >
                Find out more in our cookie policy
              </Link>
              .
            </p>
            <div className="mt-3 flex gap-2">
              <Button
                onClick={handleAccept}
                size="sm"
                className="bg-brand hover:bg-brand-strong text-white"
              >
                Continue
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                size="sm"
                className="text-slate-600"
              >
                Reject
              </Button>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="flex h-5 w-5 items-center justify-center rounded-full text-slate-400 hover:text-slate-600"
            aria-label="Close cookie banner"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
