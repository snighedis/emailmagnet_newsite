import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/data/site";

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-lg font-semibold text-slate-950">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-7 text-slate-600">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
