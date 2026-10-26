// The products' 16:10 store images, shared by the homepage grid and the header
// menu so both show the same picture in the same order. EmailMagnet's is its
// current Chrome Web Store image; Volume Control PRO's is its store popup set on
// the same kind of ground, with the headline in the page's language.
const PRODUCT_PICTURES: Record<string, string | Record<string, string>> = {
  EmailMagnet: "/brand/emailmagnet-one-click.webp",
  "ClickPilot AI": "/brand/clickpilot-ai-showcase.png",
  "Volume Control PRO": { it: "/brand/volume-control-landscape-it.webp", en: "/brand/volume-control-landscape-en.webp" },
  Countdown321: "/brand/countdown321-hero.webp",
};

/** Owner's order for the product grid and menu: ClickPilot AI last. */
const SHOWCASE_ORDER = ["EmailMagnet", "Volume Control PRO", "Countdown321", "ClickPilot AI"];

export function productPicture(name: string, lang: string): string | undefined {
  const entry = PRODUCT_PICTURES[name];
  return typeof entry === "string" ? entry : entry?.[lang];
}

export function inShowcaseOrder<T extends { name: string }>(products: readonly T[]): T[] {
  return [...products].sort((a, b) => SHOWCASE_ORDER.indexOf(a.name) - SHOWCASE_ORDER.indexOf(b.name));
}
