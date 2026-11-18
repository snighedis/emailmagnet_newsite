/**
 * The site's accordion of filled tiles (tasteskill blueprint "Accordion of
 * filled tiles"): each question a filled tile, one open at a time in the accent
 * colour. Native <details> sharing a `name`, so every answer is in the HTML for
 * crawlers and it works without script. `tile` sets the closed tile's surface:
 * the tone step on the page ground, the ground on a tone-step section.
 */
export function FaqAccordion({
  items,
  name,
  tile = "bg-surface-muted not-open:hover:bg-[#e7e7e4]",
}: {
  items: ReadonlyArray<{ question: string; answer: string }>;
  name: string;
  tile?: string;
}) {
  return (
    <>
      {items.map((item, i) => (
        <details
          key={item.question}
          name={name}
          open={i === 0}
          className={`faq-item ${tile} open:bg-brand text-ink group transition-colors duration-[240ms]`}
        >
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 px-5 py-4 text-[18px] leading-snug font-medium select-none md:min-h-18 md:px-6 md:text-[20px] [&::-webkit-details-marker]:hidden">
            {item.question}
            <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
              <span className="bg-ink absolute top-1/2 left-0 h-[3px] w-4 -translate-y-1/2" />
              <span className="bg-ink absolute top-0 left-1/2 h-4 w-[3px] -translate-x-1/2 transition-transform duration-[240ms] ease-[var(--ease-out)] group-open:rotate-90 motion-reduce:transition-none" />
            </span>
          </summary>
          <p className="faq-answer t-body max-w-[52ch] px-5 pb-6 md:px-6">{item.answer}</p>
        </details>
      ))}
    </>
  );
}
