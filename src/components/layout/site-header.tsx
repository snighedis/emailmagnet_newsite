"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, siteConfig } from "@/data/site";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold text-slate-950">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#ff5c35] text-lg font-bold text-white">
        E
      </span>
      <span>EmailMagnet</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-950">
              {item.label}
            </Link>
          ))}
          <Link href={siteConfig.social.linkedin} className="hover:text-slate-950">
            LinkedIn
          </Link>
          <Link href={siteConfig.social.x} aria-label="EmailMagnet on X">
            <X className="h-4 w-4" />
          </Link>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost">
            <Link href={siteConfig.secondaryCta.href}>Start free</Link>
          </Button>
          <Button asChild className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
            <Link href={siteConfig.primaryCta.href}>Get PRO</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open navigation">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="sr-only">EmailMagnet navigation</SheetTitle>
            <div className="mt-8 space-y-6 px-2">
              <Logo />
              <nav className="grid gap-4 text-base font-medium">
                {mainNav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
                <Link href={siteConfig.social.linkedin}>LinkedIn</Link>
                <Link href={siteConfig.social.x}>Twitter/X</Link>
              </nav>
              <div className="grid gap-3">
                <Button asChild className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
                  <Link href={siteConfig.primaryCta.href}>Get PRO</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href={siteConfig.secondaryCta.href}>Start free</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
