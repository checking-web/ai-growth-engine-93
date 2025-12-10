import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
            AI
          </div>
          <span className="font-semibold text-foreground text-lg hidden sm:block">
            Panel Answers
          </span>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
