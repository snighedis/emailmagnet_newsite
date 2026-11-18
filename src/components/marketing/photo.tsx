/**
 * The site's photographs: Pexels pictures of the reader's world (the workbench,
 * the shop counter, the print shop), never presented as clients. One treatment
 * for all of them, baked into the files: black and white with a little more
 * contrast (ImageMagick `-colorspace Gray -brightness-contrast 3x10`), so the
 * only colour in a scene is the orange of the interface beside it.
 *
 * A plain <img> with its own srcset: `next/image` with `fill` never becomes
 * visible in this Next version, and the files are already sized and compressed.
 */
export const PHOTOS = {
  quotesLaptop: {
    base: "/photos/quotes-laptop-workbench",
    widths: [800, 2000],
    width: 2000,
    height: 1143,
    credit: { name: "Ono Kosuki", href: "https://www.pexels.com/photo/5973975/" },
  },
  quotesHandwritten: {
    base: "/photos/quotes-handwritten",
    widths: [700, 1200],
    width: 1200,
    height: 900,
    credit: { name: "Ono Kosuki", href: "https://www.pexels.com/photo/5973974/" },
  },
  automateEmail: {
    base: "/photos/automate-cafe-email",
    widths: [800, 1400],
    width: 1400,
    height: 934,
    credit: { name: "Kampus Production", href: "https://www.pexels.com/photo/6684764/" },
  },
  automateQuote: {
    base: "/photos/automate-print-shop",
    widths: [800, 1400],
    width: 1400,
    height: 934,
    credit: { name: "Antoni Shkraba", href: "https://www.pexels.com/photo/6621020/" },
  },
  automateData: {
    base: "/photos/automate-orders",
    widths: [800, 1400],
    width: 1400,
    height: 934,
    credit: { name: "Kampus Production", href: "https://www.pexels.com/photo/7857553/" },
  },
  milanTram: {
    base: "/photos/milan-tram-arco",
    widths: [800, 1600],
    width: 1600,
    height: 1200,
    credit: { name: "Francesco Costanzo", href: "https://www.pexels.com/photo/12811006/" },
  },
  milanStreet: {
    base: "/photos/milan-corso-sempione",
    widths: [700, 1200],
    width: 1200,
    height: 1500,
    credit: { name: "Alejandro Canon", href: "https://www.pexels.com/photo/33647345/" },
  },
  milanUmbrella: {
    base: "/photos/milan-tram-umbrella",
    widths: [700, 1200],
    width: 1200,
    height: 1600,
    credit: { name: "Alisa Skripina", href: "https://www.pexels.com/photo/35596698/" },
  },
  automateBookings: {
    base: "/photos/automate-guesthouse-phone",
    widths: [800, 1400],
    width: 1400,
    height: 933,
    credit: { name: "Jeff Vinluan", href: "https://www.pexels.com/photo/10549098/" },
  },
} as const;

export type PhotoKey = keyof typeof PHOTOS;

export function Photo({
  name,
  alt,
  sizes,
  position = "50% 50%",
  priority = false,
}: {
  name: PhotoKey;
  alt: string;
  sizes: string;
  /** object-position: where the subject sits in this crop. */
  position?: string;
  priority?: boolean;
}) {
  const photo = PHOTOS[name];
  return (
    // eslint-disable-next-line @next/next/no-img-element -- pre-sized files with their own srcset (see above)
    <img
      src={`${photo.base}-${photo.widths[0]}.jpg`}
      srcSet={photo.widths.map((w) => `${photo.base}-${w}.jpg ${w}w`).join(", ")}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={alt}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className="block h-full w-full object-cover"
      style={{ objectPosition: position }}
    />
  );
}

/**
 * The credit line for the photographs a page shows, at the foot of the page.
 * Pexels asks for no attribution; the photographers get it anyway.
 */
export function PhotoCredits({ names, label, source }: { names: PhotoKey[]; label: string; source: string }) {
  const seen = new Set<string>();
  const credits = names
    .map((name) => PHOTOS[name].credit)
    .filter((credit) => (seen.has(credit.name) ? false : (seen.add(credit.name), true)));
  return (
    <p className="text-muted-foreground page-x pb-10 text-sm">
      {label}{" "}
      {credits.map((credit, i) => (
        <span key={credit.name}>
          <a href={credit.href} className="text-link" rel="noopener" target="_blank">
            {credit.name}
          </a>
          {i < credits.length - 1 ? ", " : " "}
        </span>
      ))}
      {source}
    </p>
  );
}
