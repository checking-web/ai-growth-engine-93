export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-accent/50 to-background py-12 sm:py-16 lg:py-20">
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Panel Answers
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Based on Your PPT
          </p>
          <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Comprehensive Q&A covering AI marketing, Ask Engine Optimization, 
            content creation, and the future of digital marketing.
          </p>
        </div>
      </div>
    </section>
  );
};
