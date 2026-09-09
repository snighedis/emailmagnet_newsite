"use client";

import { ArrowRight, MenuBars, Star } from "@/components/ui/icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { emailMagnetConfig, siteConfig } from "@/data/site";
import { useCopy } from "@/i18n/locale-context";
import { LocaleLink } from "@/i18n/locale-link";
import { cn } from "@/lib/utils";

type MenuId = "products" | "resources";

function Logo({ onClick }: { onClick?: () => void } = {}) {
  const { common } = useCopy();
  return (
    <LocaleLink
      href="/"
      onClick={onClick}
      className="flex items-center gap-2.5 font-semibold text-slate-950 lg:gap-2"
    >
      <Image
        src={siteConfig.logo}
        alt={common.header.logoAlt}
        width={36}
        height={36}
        className="h-10 w-10 object-contain lg:h-9 lg:w-9"
        priority
        unoptimized
      />
      <span className="font-brand uppercase text-[1.2rem] leading-none tracking-normal lg:text-[1.35rem]">
        Dentoku Dev
      </span>
    </LocaleLink>
  );
}

function ProductsPanel({ onNavigate }: { onNavigate: () => void }) {
  const { common, site } = useCopy();
  const featured = site.products.find((product) => product.featured) ?? site.products[0];
  const rest = site.products.filter((product) => product !== featured);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_2fr]">
      <LocaleLink
        href={featured.href}
        onClick={onNavigate}
        className="bg-ink hover:bg-ink-soft focus-visible:ring-brand group rounded-2xl p-6 text-white outline-none transition focus-visible:ring-2"
      >
        <div className="inline-flex items-center gap-1 rounded-md bg-white/10 px-3 py-1 text-xs font-semibold text-teal-100">
          <Star className="h-3 w-3" />
          {common.header.featuredBadge}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Image
              src={featured.icon}
              alt={`${featured.name} icon`}
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
          </span>
          <h2 className="text-2xl font-semibold">{featured.name}</h2>
        </div>
        <p className="text-ink-muted mt-3 text-sm leading-6">{featured.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
          {common.header.viewProduct}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </LocaleLink>
      <div>
        <p className="px-2 pb-3 text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {common.header.portfolioLabel}
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          {rest.map((product) => (
            <LocaleLink
              key={product.href}
              href={product.href}
              onClick={onNavigate}
              className="focus-visible:ring-brand rounded-xl border border-transparent p-3 outline-none transition hover:border-slate-200 hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:ring-2"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={product.icon}
                  alt={`${product.name} icon`}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-lg bg-slate-50 object-contain p-1.5"
                />
                <span className="font-semibold text-slate-950">{product.name}</span>
              </div>
              <span className="mt-3 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600">
                {product.category}
              </span>
              <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
            </LocaleLink>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel({ onNavigate }: { onNavigate: () => void }) {
  const { common, site } = useCopy();
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {site.resourcesNav.map((item) => (
        <LocaleLink
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="focus-visible:ring-brand group rounded-xl border border-transparent p-4 outline-none transition hover:border-slate-200 hover:bg-slate-50 focus-visible:bg-slate-50 focus-visible:ring-2"
        >
          <span className="flex items-center gap-1.5 font-semibold text-slate-950">
            {item.label}
            <ArrowRight className="text-eyebrow h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
          </span>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {common.header.resourceDescriptions[item.href]}
          </p>
        </LocaleLink>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { common, site } = useCopy();
  const [mobileOpen, setMobileOpen] = useState(false);
  // Lightdash-style: one full-width panel slides down from the header. A single
  // state drives both menus so hovering the other trigger switches panels.
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  const openNow = (menu: MenuId) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };
  const closeNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(null);
  };

  // Escape and clicks outside the header close the panel.
  useEffect(() => {
    if (!openMenu) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeNow();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) closeNow();
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openMenu]);

  const triggerClass = (menu: MenuId) =>
    cn(
      "focus-visible:ring-brand cursor-pointer rounded-md px-3 py-2 text-sm font-medium text-slate-700 outline-none transition hover:bg-slate-100 hover:text-slate-950 focus-visible:ring-2",
      openMenu === menu && "bg-slate-100 text-slate-950",
    );

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl"
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-18">
        {/* Apollo-style: logo and nav grouped on the left, CTAs on the right */}
        <div className="flex items-center gap-10">
          <Logo onClick={closeNow} />
          <nav className="hidden items-center gap-1 text-sm font-medium text-slate-700 lg:flex">
            <button
              type="button"
              aria-expanded={openMenu === "products"}
              aria-controls="header-panel"
              onMouseEnter={() => openNow("products")}
              onMouseLeave={closeSoon}
              onClick={() => (openMenu === "products" ? closeNow() : openNow("products"))}
              className={triggerClass("products")}
            >
              {common.header.products}
            </button>
            {site.mainNav.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                onClick={closeNow}
                className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </LocaleLink>
            ))}
            <button
              type="button"
              aria-expanded={openMenu === "resources"}
              aria-controls="header-panel"
              onMouseEnter={() => openNow("resources")}
              onMouseLeave={closeSoon}
              onClick={() => (openMenu === "resources" ? closeNow() : openNow("resources"))}
              className={triggerClass("resources")}
            >
              {common.header.resources}
            </button>
          </nav>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <Button asChild variant="ghost">
            <LocaleLink href={emailMagnetConfig.href}>{common.header.getEmailMagnet}</LocaleLink>
          </Button>
          <Button asChild className="btn-sheen font-semibold hover:-translate-y-0.5">
            <LocaleLink href={siteConfig.secondaryCta.href}>{common.header.startProject}</LocaleLink>
          </Button>
        </div>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label={common.header.openNavigation} className="h-12 w-12 rounded-md">
              <MenuBars className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <SheetTitle className="sr-only">{common.header.navigationTitle}</SheetTitle>
            <div className="mt-8 space-y-6 px-6">
              <Logo onClick={() => setMobileOpen(false)} />
              <nav className="grid gap-5 text-base font-medium">
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                  <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {common.header.products}
                  </p>
                  <div className="mt-3 space-y-3">
                    {site.products.map((product) => (
                      <LocaleLink
                        key={product.href}
                        href={product.href}
                        onClick={() => setMobileOpen(false)}
                        className="block"
                      >
                        {product.name}
                      </LocaleLink>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                  <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {common.header.resources}
                  </p>
                  <div className="mt-3 space-y-3">
                    {site.resourcesNav.map((item) => (
                      <LocaleLink
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block"
                      >
                        {item.label}
                      </LocaleLink>
                    ))}
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="grid gap-4">
                    {site.mainNav.map((item) => (
                      <LocaleLink key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                        {item.label}
                      </LocaleLink>
                    ))}
                    <LocaleLink href={siteConfig.social.linkedin} onClick={() => setMobileOpen(false)}>
                      LinkedIn
                    </LocaleLink>
                    <LocaleLink href={siteConfig.social.x} onClick={() => setMobileOpen(false)}>
                      X/Twitter
                    </LocaleLink>
                  </div>
                </div>
              </nav>
              <div className="grid gap-3">
                <Button asChild size="lg" className="btn-sheen w-full font-semibold hover:-translate-y-0.5">
                  <LocaleLink href={siteConfig.secondaryCta.href} onClick={() => setMobileOpen(false)} className="text-center">
                    {common.header.startProject}
                  </LocaleLink>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <LocaleLink href={emailMagnetConfig.href} onClick={() => setMobileOpen(false)}>
                    {common.header.getEmailMagnetFree}
                  </LocaleLink>
                </Button>
                <LanguageSwitcher className="justify-center" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Lightdash-style full-width panel sliding down from the header */}
      {openMenu ? (
        <div
          id="header-panel"
          onMouseEnter={() => openNow(openMenu)}
          onMouseLeave={closeSoon}
          className="animate-in fade-in slide-in-from-top-2 absolute inset-x-0 top-full hidden border-b border-slate-200/70 bg-white shadow-soft-lg duration-150 lg:block"
        >
          <div className="mx-auto max-w-7xl px-4 py-8">
            {openMenu === "products" ? (
              <ProductsPanel onNavigate={closeNow} />
            ) : (
              <ResourcesPanel onNavigate={closeNow} />
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
