"use client";

import { Menu, Star, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { emailMagnetConfig, mainNav, productPortfolio, siteConfig } from "@/data/site";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold text-slate-950">
      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#ff5c35] text-lg font-bold text-white">
        D
      </span>
      <span>Dentoku Dev</span>
    </Link>
  );
}

function ProductsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 outline-none transition hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-[#ff5c35]">
        Products
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[520px] rounded-xl border-slate-200 p-3 shadow-xl">
        <DropdownMenuLabel className="px-3 py-2 text-xs uppercase tracking-wide text-slate-500">
          Dentoku Dev portfolio
        </DropdownMenuLabel>
        <div className="grid gap-2">
          {productPortfolio.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="rounded-lg p-3 outline-none transition hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-[#ff5c35]"
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-950">{product.name}</span>
                {product.featured ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#ff5c35]/10 px-2 py-0.5 text-xs font-semibold text-[#c43618]">
                    <Star className="h-3 w-3" />
                    Featured
                  </span>
                ) : null}
              </div>
              <p className="mt-1 text-sm leading-6 text-slate-600">{product.description}</p>
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          <ProductsMenu />
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-950">
              {item.label}
            </Link>
          ))}
          <Link href={siteConfig.social.linkedin} className="hover:text-slate-950">
            LinkedIn
          </Link>
          <Link href={siteConfig.social.x} aria-label="Dentoku Dev on X">
            <X className="h-4 w-4" />
          </Link>
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost">
            <Link href={siteConfig.secondaryCta.href}>Contact</Link>
          </Button>
          <Button asChild className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
            <Link href={emailMagnetConfig.href}>EmailMagnet</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open navigation">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="sr-only">Dentoku Dev navigation</SheetTitle>
            <div className="mt-8 space-y-6 px-2">
              <Logo />
              <nav className="grid gap-4 text-base font-medium">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Products
                  </p>
                  {productPortfolio.map((product) => (
                    <Link key={product.href} href={product.href} className="block">
                      {product.name}
                    </Link>
                  ))}
                </div>
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
                  <Link href={emailMagnetConfig.href}>EmailMagnet</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href={siteConfig.secondaryCta.href}>Contact</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
