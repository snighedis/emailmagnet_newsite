import GithubSlugger from "github-slugger";

export type TocEntry = {
  id: string;
  text: string;
};

/**
 * Extract h2 entries from markdown for an in-page table of contents.
 *
 * Ids must match what rehype-slug assigns to the rendered headings, so every
 * heading level is fed to the same github-slugger instance in document order —
 * that keeps duplicate-heading counters (`foo`, `foo-1`) in sync even though
 * only h2 entries are returned.
 */
export function extractToc(markdown: string): TocEntry[] {
  const slugger = new GithubSlugger();
  const entries: TocEntry[] = [];
  let inFence = false;

  for (const line of markdown.split("\n")) {
    if (/^\s*(`{3,}|~{3,})/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) {
      continue;
    }
    const heading = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (!heading) {
      continue;
    }
    const text = heading[2]
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[*_`~]/g, "")
      .trim();
    const id = slugger.slug(text);
    if (heading[1].length === 2) {
      entries.push({ id, text });
    }
  }

  return entries;
}
