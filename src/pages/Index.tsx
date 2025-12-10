import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TableOfContents } from "@/components/TableOfContents";
import { SectionBlock } from "@/components/SectionBlock";
import { Footer } from "@/components/Footer";
import { sections } from "@/data/panelData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <main className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky on desktop */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <TableOfContents />
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-10 sm:space-y-12">
            {sections.map((section, index) => (
              <SectionBlock key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
