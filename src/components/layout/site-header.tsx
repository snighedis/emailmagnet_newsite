"use client";

import { ArrowRight, Menu, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
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

function Logo({ onClick }: { onClick?: () => void } = {}) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-2 font-semibold text-slate-950">
      <Image
        src={siteConfig.logo}
        alt="Dentoku Dev logo"
        width={36}
        height={36}
        className="h-9 w-9 rounded-md object-cover"
        priority
      />
      <span>Dentoku Dev</span>
    </Link>
  );
}

function ProductsMenu() {
  const [open, setOpen] = useState(false);
  const skipReturnFocusRef = useRef(false);
  const featured = productPortfolio.find((product) => product.featured) ?? productPortfolio[0];
  const upcoming = productPortfolio.filter((product) => !product.featured);
  const closeAfterNavigation = () => {
    skipReturnFocusRef.current = true;
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="rounded-md px-2 py-2 text-sm font-medium text-slate-700 outline-none transition hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-[#ff5c35]">
        Products
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        onCloseAutoFocus={(event) => {
          if (!skipReturnFocusRef.current) {
            return;
          }

          event.preventDefault();
          skipReturnFocusRef.current = false;
        }}
        className="w-[680px] rounded-xl border-slate-200 p-4 shadow-xl"
      >
        <div className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
          <Link
            href={featured.href}
            onClick={closeAfterNavigation}
            className="rounded-xl bg-[#213343] p-5 text-white outline-none transition hover:bg-[#192938] focus-visible:ring-2 focus-visible:ring-[#ff5c35]"
          >
            <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-teal-100">
              <Star className="h-3 w-3" />
              Featured product
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <Image
                  src={featured.icon}
                  alt="EmailMagnet icon"
                  width={32}
                  height={32}
                  className="h-8 w-8 object-contain"
                />
              </span>
              <h2 className="text-2xl font-semibold">{featured.name}</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-200">{featured.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
              View product page
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <div>
            <DropdownMenuLabel className="px-2 pb-3 text-xs uppercase tracking-wide text-slate-500">
              Product portfolio
            </DropdownMenuLabel>
            <div className="grid gap-2">
              {upcoming.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  onClick={closeAfterNavigation}
                  className="rounded-lg border border-transparent p-3 outline-none transition hover:border-slate-200 hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-[#ff5c35]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <Image
                        src={product.icon}
                        alt={`${product.name} icon`}
                        width={40}
                        height={40}
                        className="h-10 w-10 shrink-0 rounded-lg bg-slate-50 object-contain p-1.5"
                      />
                      <span className="font-semibold text-slate-950">{product.name}</span>
                    </div>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                      {product.category}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <Link href={siteConfig.social.x} className="hover:text-slate-950">
            X/Twitter
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
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open navigation">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="sr-only">Dentoku Dev navigation</SheetTitle>
            <div className="mt-8 space-y-6 px-2">
              <Logo onClick={() => setMobileOpen(false)} />
              <nav className="grid gap-4 text-base font-medium">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Products
                  </p>
                  {productPortfolio.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      onClick={() => setMobileOpen(false)}
                      className="block"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
                {mainNav.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}
                <Link href={siteConfig.social.linkedin} onClick={() => setMobileOpen(false)}>
                  LinkedIn
                </Link>
                <Link href={siteConfig.social.x} onClick={() => setMobileOpen(false)}>
                  X/Twitter
                </Link>
              </nav>
              <div className="grid gap-3">
                <Button asChild className="rounded-md bg-[#ff5c35] text-white hover:bg-[#df4320]">
                  <Link href={emailMagnetConfig.href} onClick={() => setMobileOpen(false)}>
                    EmailMagnet
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-md">
                  <Link href={siteConfig.secondaryCta.href} onClick={() => setMobileOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
