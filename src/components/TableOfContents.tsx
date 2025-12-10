import { sections } from "@/data/panelData";

export const TableOfContents = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-card border border-border rounded-lg p-4 sm:p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">Contents</h2>
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors flex items-center gap-2"
            >
              <span className="text-xs font-mono text-primary">{String(index + 1).padStart(2, '0')}</span>
              <span className="line-clamp-1">{section.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
