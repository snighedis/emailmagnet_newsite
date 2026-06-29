import type { SVGProps } from "react";
import { pepicons } from "@/lib/pepicons.generated";
import { cn } from "@/lib/utils";

/**
 * Site-wide icon set, backed by Pepicons Pencil (@iconify-json/pepicons-pencil).
 *
 * Icons render as inline SVG (no client JS, no runtime API calls — only the
 * icons used here are bundled). Components are named after the lucide icons they
 * replaced, so usage is a drop-in: `import { ArrowRight } from "@/components/ui/icons"`.
 *
 * Sizing is via className (`h-4 w-4`, `size-5`, …); color via `text-*` (currentColor).
 * Mappings live in ICON_MAP; a few lucide glyphs have no exact Pepicon and use the
 * closest match (search→eye, puzzle→grid, layers→duplicate, download→arrow-down,
 * external→arrow-up-right). To change the set, edit scripts/gen-pepicons.mjs + ICON_MAP.
 */
export type IconType = (props: SVGProps<SVGSVGElement>) => React.ReactElement | null;

function makeIcon(key: string): IconType {
  const data = pepicons[key];
  function Icon({ className, ...props }: SVGProps<SVGSVGElement>) {
    if (!data) return null;
    return (
      <svg
        viewBox={data.viewBox}
        className={cn("size-4 shrink-0", className)}
        role="img"
        aria-hidden="true"
        {...props}
        dangerouslySetInnerHTML={{ __html: data.body }}
      />
    );
  }
  Icon.displayName = `Pepicon(${key})`;
  return Icon;
}

// --- Drop-in replacements for the lucide icons used across the site ---
export const ArrowRight = makeIcon("arrow-right");
export const BadgeCheck = makeIcon("checkmark-circle");
export const Check = makeIcon("checkmark");
export const CheckCircle2 = makeIcon("checkmark-circle");
export const CheckIcon = makeIcon("checkmark");
export const ChevronDown = makeIcon("angle-down");
export const ChevronDownIcon = makeIcon("angle-down");
export const ChevronRightIcon = makeIcon("angle-right");
export const ChevronUpIcon = makeIcon("angle-up");
export const ClipboardCheck = makeIcon("clipboard-check");
export const Code2 = makeIcon("code");
export const Download = makeIcon("arrow-down");
export const ExternalLink = makeIcon("arrow-up-right");
export const FileDown = makeIcon("file");
export const FileSpreadsheet = makeIcon("file");
export const Globe2 = makeIcon("internet");
export const Layers3 = makeIcon("duplicate");
export const ListChecks = makeIcon("list");
export const Mail = makeIcon("letter");
export const MailCheck = makeIcon("letter");
export const Menu = makeIcon("menu");
export const MessageCircle = makeIcon("text-bubble");
export const MousePointerClick = makeIcon("hand-point");
export const Puzzle = makeIcon("grid");
export const Search = makeIcon("eye");
export const ShieldCheck = makeIcon("shield-check");
export const Sparkles = makeIcon("stars");
export const Star = makeIcon("star");
export const UsersRound = makeIcon("people");
export const X = makeIcon("times");
export const XCircle = makeIcon("times-circle");
export const XIcon = makeIcon("times");
export const Zap = makeIcon("electricity");
export const Pen = makeIcon("pen");
export const Repeat = makeIcon("loop");
export const Key = makeIcon("key");
export const CreditCard = makeIcon("credit-card");
export const Clock = makeIcon("clock");
export const Briefcase = makeIcon("briefcase");

// Classic hamburger — three equal horizontal bars. The Pepicons "menu" glyph
// renders as uneven, left-aligned lines, so the nav toggle uses this instead.
export const MenuBars: IconType = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    className={cn("size-4 shrink-0", className)}
    role="img"
    aria-hidden="true"
    {...props}
  >
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
