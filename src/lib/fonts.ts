import { Fira_Sans_Condensed, Geist_Mono, Inter, Newsreader } from "next/font/google";

// Loaded once here so the real document shell and the global 404 page (which
// bypasses every layout and must build its own <html>) ship the same fonts.

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const firaSansCondensed = Fira_Sans_Condensed({
  variable: "--font-fira-condensed",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

// Newsreader — SIL Open Font License 1.1 (commercial use + self-hosting allowed).
// Used for headings/titles site-wide; Inter is the body/UI font.
// No `weight`: Newsreader has a variable axis, so omitting it ships ONE variable
// file instead of four static cuts. Listing weights explicitly forfeits that.
export const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

export const fontClassNames = `${inter.variable} ${geistMono.variable} ${newsreader.variable} ${firaSansCondensed.variable}`;
