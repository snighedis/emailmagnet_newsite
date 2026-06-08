import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { getIconData, replaceIDs } from "@iconify/utils";

const set = JSON.parse(
  readFileSync("node_modules/@iconify-json/pepicons-pencil/icons.json", "utf8"),
);

// Pepicons-pencil names we actually render (mapped from the project's lucide usage)
const names = [
  "arrow-right",
  "arrow-down",
  "arrow-up-right",
  "checkmark",
  "checkmark-circle",
  "angle-down",
  "angle-right",
  "angle-up",
  "clipboard-check",
  "code",
  "file",
  "internet",
  "duplicate",
  "list",
  "letter",
  "menu",
  "text-bubble",
  "hand-point",
  "grid",
  "eye",
  "shield-check",
  "stars",
  "star",
  "people",
  "times",
  "times-circle",
  "electricity",
  "pen",
  "loop",
  "key",
  "credit-card",
  "clock",
  "briefcase",
];

const out = {};
const missing = [];
for (const name of names) {
  const data = getIconData(set, name);
  if (!data) {
    missing.push(name);
    continue;
  }
  const left = data.left ?? 0;
  const top = data.top ?? 0;
  const w = data.width ?? set.width ?? 24;
  const h = data.height ?? set.height ?? 24;
  out[name] = { viewBox: `${left} ${top} ${w} ${h}`, body: replaceIDs(data.body) };
}

if (missing.length) {
  console.error("MISSING icons:", missing.join(", "));
  process.exit(1);
}

mkdirSync("src/lib", { recursive: true });
const ts =
  "// AUTO-GENERATED from @iconify-json/pepicons-pencil — do not edit by hand.\n" +
  "// Regenerate with: node scripts/gen-pepicons.mjs\n" +
  "export type PepiconData = { viewBox: string; body: string };\n\n" +
  "export const pepicons: Record<string, PepiconData> = " +
  JSON.stringify(out, null, 2) +
  ";\n";
writeFileSync("src/lib/pepicons.generated.ts", ts);
console.log("wrote", Object.keys(out).length, "icons to src/lib/pepicons.generated.ts");
