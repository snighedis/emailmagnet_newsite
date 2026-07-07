import Link from "next/link";
import { cn } from "@/lib/utils";
import { relatedResourceLinks } from "@/data/site";

type RelatedResourcesProps = {
  /** Current page path, filtered out so a page never links to itself. */
  currentHref?: string;
  heading?: string;
  className?: string;
  /** Cap the number of links shown to keep the block tidy. */
  limit?: number;
};

/**
 * Compact "Related resources" nav shared by the content hubs and product money
 * pages. Gives otherwise weakly-linked deep pages inbound and outbound internal
 * links so search engines can discover and rank them.
 */
export function RelatedResources({
  currentHref,
  heading = "Related resources",
  className,
  limit = 6,
}: RelatedResourcesProps) {
  const links = relatedResourceLinks
    .filter((link) => link.href !== currentHref)
    .slice(0, limit);

  if (!links.length) {
    return null;
  }

  return (
    <nav
      aria-label="Related resources"
      className={cn("rounded-2xl border border-slate-200 bg-slate-50 p-6", className)}
    >
      <h2 className="text-lg font-semibold text-slate-950">{heading}</h2>
      <ul className="mt-4 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-medium text-eyebrow hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
