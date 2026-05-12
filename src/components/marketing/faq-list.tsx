import type { FaqItem } from "@/data/site";

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <dl className="w-full divide-y divide-slate-200">
      {items.map((item) => (
        <div key={item.question} className="py-6 first:pt-0 last:pb-0">
          <dt className="text-lg font-semibold text-slate-950">{item.question}</dt>
          <dd className="mt-3 text-base leading-7 text-slate-600">{item.answer}</dd>
        </div>
      ))}
    </dl>
  );
}
