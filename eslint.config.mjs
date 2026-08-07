import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * Raw Tailwind palette classes bypass the semantic token system in
 * src/app/globals.css (brand / ink / eyebrow / surface-* / muted-foreground /
 * border). They drift: the site accumulated ~725 of them, four competing
 * `tracking` values for the same eyebrow, and a page palette that existed
 * nowhere else.
 *
 * Enforcement is deliberately staged. It is an ERROR in the shared components
 * that are already clean, because those propagate site-wide and must not
 * regress. It is a WARNING everywhere else, since ~500 pre-existing instances
 * in src/app are backlog, not something to fail a build over today. Move a path
 * from the warn list to the error list as you clean it.
 */
const RAW_PALETTE =
  String.raw`\b(?:text|bg|border|divide|ring|from|to|via)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3}\b`;

const noRawPalette = (severity) => ({
  "no-restricted-syntax": [
    severity,
    {
      selector: `Literal[value=/${RAW_PALETTE}/]`,
      message:
        "Use the semantic tokens from globals.css (brand / brand-cta / ink / ink-accent / eyebrow / surface-* / muted-foreground / border), not a raw Tailwind palette class.",
    },
    {
      selector: `TemplateElement[value.raw=/${RAW_PALETTE}/]`,
      message:
        "Use the semantic tokens from globals.css (brand / brand-cta / ink / ink-accent / eyebrow / surface-* / muted-foreground / border), not a raw Tailwind palette class.",
    },
  ],
});

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: noRawPalette("warn"),
  },
  {
    // Cleaned and locked. Adding a raw palette class here fails the build.
    files: [
      "src/components/marketing/eyebrow.tsx",
      "src/components/marketing/feature-card.tsx",
      "src/components/marketing/money-page.tsx",
      "src/components/marketing/section-heading.tsx",
      "src/components/marketing/stat-strip.tsx",
      "src/components/marketing/trust-bar.tsx",
    ],
    rules: noRawPalette("error"),
  },
]);

export default eslintConfig;
