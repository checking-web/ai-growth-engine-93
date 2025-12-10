import { Section } from "@/data/panelData";
import { QuestionCard } from "./QuestionCard";

interface SectionBlockProps {
  section: Section;
  index: number;
}

export const SectionBlock = ({ section, index }: SectionBlockProps) => {
  return (
    <section
      id={section.id}
      className="scroll-mt-20 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-semibold">
            {index + 1}
          </span>
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground">
            {section.title}
          </h2>
        </div>
      </div>
      <div className="space-y-3">
        {section.questions.map((qa, qIndex) => (
          <QuestionCard
            key={qIndex}
            qa={qa}
            index={qIndex}
            sectionIndex={index}
          />
        ))}
      </div>
    </section>
  );
};
