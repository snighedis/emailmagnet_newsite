"use client";

import { MenuBars } from "@/components/ui/icons";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandLockup } from "@/components/brand/logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { inShowcaseOrder } from "@/data/product-pictures";
import { emailMagnetConfig, siteConfig } from "@/data/site";
import { useCopy, useLocale } from "@/i18n/locale-context";
import { LocaleLink } from "@/i18n/locale-link";
import { cn } from "@/lib/utils";

type MenuId = "products" | "resources";

function Logo({ onClick }: { onClick?: () => void } = {}) {
  const { common } = useCopy();
  return (
    <LocaleLink
      href="/"
      onClick={onClick}
      className="flex items-center text-[1.2rem] text-stone-950 lg:text-[1.35rem]"
    >
      <BrandLockup label={common.header.logoAlt} markClassName="w-[1.55em] lg:w-[1.25em]" />
    </LocaleLink>
  );
}

// The products as text, grouped by the store they are on. Each group takes room
// in proportion to how many products it holds, and its list adds columns as it
// grows, so a new product needs no change here.
function ProductsPanel({ onNavigate }: { onNavigate: () => void }) {
  const { common, site } = useCopy();
  const groups = new Map<string, typeof site.products>();
  for (const product of inShowcaseOrder(site.products)) {
    // Store names are never translated (AGENTS.md)
    const store = product.externalUrl?.includes("shopify.com") ? "Shopify App Store" : "Chrome Web Store";
    groups.set(store, [...(groups.get(store) ?? []), product]);
  }
  return (
    <div>
      <div className="flex gap-16">
        {[...groups].map(([store, products]) => (
          <section key={store} style={{ flexGrow: products.length, flexBasis: 0 }} className="min-w-0">
            <h2 className="text-base font-semibold text-stone-600">{store}</h2>
            <ul className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(14rem,1fr))] gap-x-10 gap-y-6">
              {products.map((product) => (
                <li key={product.href}>
                  <LocaleLink
                    href={product.href}
                    onClick={onNavigate}
                    className="group text-ink focus-visible:ring-brand block outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
                  >
                    <span className="text-link link-quiet font-heading text-[22px] leading-tight group-hover:decoration-current">
                      {product.name}
                    </span>
                    <span className="mt-1.5 block text-sm leading-6">{product.description}</span>
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <LocaleLink
        href="/overview"
        onClick={onNavigate}
        className="text-link text-ink focus-visible:ring-brand mt-8 inline-block text-base font-medium outline-none focus-visible:ring-2"
      >
        {common.header.allProducts}
      </LocaleLink>
    </div>
  );
}

function ResourcesPanel({ onNavigate }: { onNavigate: () => void }) {
  const { common, site } = useCopy();
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-x-10 gap-y-6">
      {site.resourcesNav.map((item) => (
        <li key={item.href}>
          <LocaleLink
            href={item.href}
            onClick={onNavigate}
            className="text-ink focus-visible:ring-brand block outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
          >
            <span className="text-link link-quiet font-heading text-[22px] leading-tight">{item.label}</span>
            <span className="mt-1.5 block text-sm leading-6">{common.header.resourceDescriptions[item.href]}</span>
          </LocaleLink>
        </li>
      ))}
    </ul>
  );
}

export function SiteHeader() {
  const { common, site } = useCopy();
  const lang = useLocale();
  // The English chrome serves the products' global audience: products first,
  // resources, the EmailMagnet button. The Italian chrome serves the consulting
  // funnel: the funnel links first, products last, no resources (ticket 09).
  const productsFirst = lang === "en";
  const showResources = lang === "en";
  const showEmailMagnet = lang === "en";
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

  // Plain text links on one line, underlined on hover; the open menu's trigger
  // stays underlined. No pill backgrounds.
  const linkClass =
    "text-link link-quiet focus-visible:ring-brand rounded-none px-2 py-2 text-[15px] font-medium text-ink outline-none focus-visible:ring-2";
  const triggerClass = () => cn(linkClass, "cursor-pointer");

  const productsTrigger = (
    <button
      type="button"
      aria-expanded={openMenu === "products"}
      aria-controls="header-panel"
      onMouseEnter={() => openNow("products")}
      onMouseLeave={closeSoon}
      onClick={() => (openMenu === "products" ? closeNow() : openNow("products"))}
      className={triggerClass()}
    >
      {common.header.products}
    </button>
  );

  // Phone menu: one column of links at one size, in the same order as the bar,
  // sections separated by space only.
  const mobileLink = "text-ink font-heading flex min-h-12 items-center text-[24px] leading-tight active:opacity-60";
  const mobileSubLink = mobileLink;
  const productsBox = (
    <div>
      <p className="text-base font-semibold text-stone-600">{common.header.products}</p>
      <div className="mt-1 grid">
        {inShowcaseOrder(site.products).map((product) => (
          <LocaleLink key={product.href} href={product.href} onClick={() => setMobileOpen(false)} className={mobileSubLink}>
            {product.name}
          </LocaleLink>
        ))}
      </div>
    </div>
  );

  return (
    <header
      ref={headerRef}
      className="bg-surface-soft/90 sticky top-0 z-50 backdrop-blur-xl"
    >
      <div className="page-x relative flex h-16 items-center justify-between lg:h-18">
        {/* Wordmark and links on the left, language and the one action on the right */}
        <div className="flex items-center gap-8">
          <Logo onClick={closeNow} />
          <nav className="hidden items-center gap-3 lg:flex">
            {productsFirst ? productsTrigger : null}
            {site.mainNav.map((item) => (
              <LocaleLink key={item.href} href={item.href} onClick={closeNow} className={linkClass}>
                {item.label}
              </LocaleLink>
            ))}
            {productsFirst ? null : productsTrigger}
            {showResources ? (
              <button
                type="button"
                aria-expanded={openMenu === "resources"}
                aria-controls="header-panel"
                onMouseEnter={() => openNow("resources")}
                onMouseLeave={closeSoon}
                onClick={() => (openMenu === "resources" ? closeNow() : openNow("resources"))}
                className={triggerClass()}
              >
                {common.header.resources}
              </button>
            ) : null}
          </nav>
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher className={linkClass} />
          {showEmailMagnet ? (
            <LocaleLink href={emailMagnetConfig.href} className={linkClass}>
              {common.header.getEmailMagnet}
            </LocaleLink>
          ) : null}
          {/* The one action of the bar */}
          <Button asChild size="lg">
            <LocaleLink href={siteConfig.secondaryCta.href}>{common.header.startProject}</LocaleLink>
          </Button>
        </div>
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label={common.header.openNavigation} className="-mr-2 h-12 w-12">
              <MenuBars className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            closeLabel={common.header.closeNavigation}
            className="bg-background w-full gap-0 border-0 shadow-none data-[side=right]:w-full data-[side=right]:sm:max-w-none"
          >
            <SheetTitle className="sr-only">{common.header.navigationTitle}</SheetTitle>
            <div className="page-x flex h-16 shrink-0 items-center">
              <Logo onClick={() => setMobileOpen(false)} />
            </div>
            <nav className="page-x flex-1 space-y-8 overflow-y-auto pt-6 pb-8">
              {productsFirst ? productsBox : null}
              <div className="grid">
                {site.mainNav.map((item) => (
                  <LocaleLink key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={mobileLink}>
                    {item.label}
                  </LocaleLink>
                ))}
              </div>
              {productsFirst ? null : productsBox}
              {showResources ? (
                <div>
                  <p className="text-base font-semibold text-stone-600">{common.header.resources}</p>
                  <div className="mt-1 grid">
                    {site.resourcesNav.map((item) => (
                      <LocaleLink key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className={mobileSubLink}>
                        {item.label}
                      </LocaleLink>
                    ))}
                  </div>
                </div>
              ) : null}
              {/* Language and social links last, in both languages */}
              <div className="flex flex-wrap items-center gap-x-6 text-base">
                <LanguageSwitcher className="text-link text-ink px-0 text-base" />
                <LocaleLink href={siteConfig.social.linkedin} onClick={() => setMobileOpen(false)} className="text-link text-ink flex min-h-11 items-center">
                  LinkedIn
                </LocaleLink>
                <LocaleLink href={siteConfig.social.x} onClick={() => setMobileOpen(false)} className="text-link text-ink flex min-h-11 items-center">
                  X
                </LocaleLink>
              </div>
            </nav>
            {/* The action stays in view at the bottom of the menu */}
            <div className="page-x bg-background grid shrink-0 gap-3 pt-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <Button asChild size="xl" className="w-full">
                <LocaleLink href={siteConfig.secondaryCta.href} onClick={() => setMobileOpen(false)}>
                  {common.header.startProject}
                </LocaleLink>
              </Button>
              {showEmailMagnet ? (
                <LocaleLink href={emailMagnetConfig.href} onClick={() => setMobileOpen(false)} className="text-link text-ink flex min-h-11 items-center justify-center text-base font-medium">
                  {common.header.getEmailMagnetFree}
                </LocaleLink>
              ) : null}
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
          className="animate-in fade-in slide-in-from-top-2 shadow-soft-lg absolute inset-x-0 top-full hidden bg-white duration-150 lg:block"
        >
          <div className="page-x py-10">
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
