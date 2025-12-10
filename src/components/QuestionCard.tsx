import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QAItem } from "@/data/panelData";

interface QuestionCardProps {
  qa: QAItem;
  index: number;
  sectionIndex: number;
}

export const QuestionCard = ({ qa, index, sectionIndex }: QuestionCardProps) => {
  const questionNumber = `${sectionIndex + 1}.${index + 1}`;

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={`item-${sectionIndex}-${index}`} className="border border-border rounded-lg bg-card overflow-hidden">
        <AccordionTrigger className="px-4 py-4 sm:px-6 hover:no-underline hover:bg-accent/50 transition-colors text-left">
          <div className="flex items-start gap-3 sm:gap-4">
            <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-mono font-medium">
              {questionNumber}
            </span>
            <span className="text-sm sm:text-base font-medium text-foreground pr-4">
              {qa.question}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="pl-10 sm:pl-11 space-y-3">
            {qa.answer.map((line, i) => (
              <p key={i} className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
