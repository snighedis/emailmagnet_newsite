"use client";

import { ArrowRight, MenuBars, Star } from "@/components/ui/icons";
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
import { emailMagnetConfig, mainNav, productPortfolio, resourcesNav, siteConfig } from "@/data/site";

function Logo({ onClick }: { onClick?: () => void } = {}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5 font-semibold text-slate-950 lg:gap-2"
    >
      <Image
        src={siteConfig.logo}
        alt="Dentoku Dev logo"
        width={36}
        height={36}
        className="h-10 w-10 object-contain lg:h-9 lg:w-9"
        priority
        unoptimized
      />
      <span className="font-brand uppercase text-[1.2rem] leading-none tracking-normal lg:text-[1.35rem]">
        Dentoku Dev
      </span>
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
      <DropdownMenuTrigger className="focus-visible:ring-brand cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none transition hover:bg-slate-100 hover:text-slate-950 aria-expanded:bg-slate-100 aria-expanded:text-slate-950 focus-visible:ring-2">
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
        className="shadow-soft-lg w-[680px] rounded-2xl border-slate-200 p-4"
      >
        <div className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
          <Link
            href={featured.href}
            onClick={closeAfterNavigation}
            className="bg-ink hover:bg-ink-soft focus-visible:ring-brand group rounded-2xl p-5 text-white outline-none transition focus-visible:ring-2"
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
            <p className="text-ink-muted mt-3 text-sm leading-6">{featured.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
              View product page
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
          <div>
            <DropdownMenuLabel className="px-2 pb-3 text-xs tracking-wide text-slate-500 uppercase">
              Product portfolio
            </DropdownMenuLabel>
            <div className="grid gap-2">
              {upcoming.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  onClick={closeAfterNavigation}
                  className="focus-visible:ring-brand rounded-xl border border-transparent p-3 outline-none transition hover:border-slate-200 hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:ring-2"
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

function ResourcesMenu() {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="focus-visible:ring-brand cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none transition hover:bg-slate-100 hover:text-slate-950 aria-expanded:bg-slate-100 aria-expanded:text-slate-950 focus-visible:ring-2">
        Resources
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="shadow-soft-lg w-56 rounded-2xl border-slate-200 p-2">
        <div className="grid gap-1">
          {resourcesNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-visible:ring-brand rounded-lg px-3 py-2 text-sm font-medium text-slate-700 outline-none transition hover:bg-slate-50 hover:text-slate-950 focus-visible:ring-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-18">
        <Logo />
        <nav className="hidden items-center gap-1 text-sm font-medium text-slate-700 lg:flex">
          <ProductsMenu />
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
          <ResourcesMenu />
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost">
            <Link href={emailMagnetConfig.href}>Get EmailMagnet</Link>
          </Button>
          <Button asChild className="btn-sheen font-semibold hover:-translate-y-0.5">
            <Link href={siteConfig.secondaryCta.href}>Start your project</Link>
          </Button>
        </div>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open navigation" className="h-12 w-12 rounded-xl">
              <MenuBars className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="sr-only">Dentoku Dev navigation</SheetTitle>
            <div className="mt-8 space-y-6 px-6">
              <Logo onClick={() => setMobileOpen(false)} />
              <nav className="grid gap-5 text-base font-medium">
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                  <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Products
                  </p>
                  <div className="mt-3 space-y-3">
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
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                  <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    Resources
                  </p>
                  <div className="mt-3 space-y-3">
                    {resourcesNav.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="grid gap-4">
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
                  </div>
                </div>
              </nav>
              <div className="grid gap-3">
                <Button asChild size="lg" className="btn-sheen w-full font-semibold hover:-translate-y-0.5">
                  <Link href={siteConfig.secondaryCta.href} onClick={() => setMobileOpen(false)} className="text-center">
                    Start your project
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <Link href={emailMagnetConfig.href} onClick={() => setMobileOpen(false)}>
                    Get EmailMagnet for free
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
