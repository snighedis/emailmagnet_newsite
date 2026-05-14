"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = localStorage.getItem("cookie-consent");
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
    // Enable analytics cookies here if needed
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setIsVisible(false);
    // Disable analytics cookies here if needed
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-lg">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-sm leading-5 text-slate-700">
              We use cookies to improve your experience. You can opt out of certain cookies.{" "}
              <Link
                href="/privacy"
                className="font-medium text-[#c43618] hover:underline"
              >
                Find out more in our privacy policy
              </Link>
              .
            </p>
            <div className="mt-3 flex gap-2">
              <Button
                onClick={handleAccept}
                size="sm"
                className="bg-[#ff5c35] hover:bg-[#df4320] text-white"
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