import type { FaqItem } from "@/data/site";
import { ChevronDown } from "@/components/ui/icons";

type FaqListProps = {
  items: FaqItem[];
  /**
   * Render as an accordion: questions only, one answer open at a time. Native
   * <details>, so every answer stays in the HTML for crawlers and works without JS.
   */
  collapsible?: boolean;
};

export function FaqList({ items, collapsible = false }: FaqListProps) {
  if (collapsible) {
    return (
      <div className="w-full divide-y divide-stone-200 border-y border-stone-200">
        {items.map((item, index) => (
          <details key={item.question} name="faq" open={index === 0} className="faq-item group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-lg font-semibold text-stone-950 transition-colors select-none hover:text-ink active:text-stone-600 [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
              />
            </summary>
            <p className="faq-answer pb-6 text-base leading-7 text-stone-600">{item.answer}</p>
          </details>
        ))}
      </div>
    );
  }

  return (
    <dl className="w-full divide-y divide-stone-200">
      {items.map((item) => (
        <div key={item.question} className="py-6 first:pt-0 last:pb-0">
          <dt className="text-lg font-semibold text-stone-950">{item.question}</dt>
          <dd className="mt-3 text-base leading-7 text-stone-600">{item.answer}</dd>
        </div>
      ))}
    </dl>
  );
}
