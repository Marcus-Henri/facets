import Link from "next/link";
import { ProjectsGallery } from "@/components/projects-gallery";
import { InteractiveCV } from "@/components/interactive-cv";
import { ContactForm } from "@/components/contact-form";
import { QuoteCarousel } from "@/components/quote-carousel";
import { Guestbook } from "@/components/guestbook";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">

        {/* Faceted Mesh Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute inset-0 bg-mesh-pattern opacity-40 mix-blend-overlay"></div>
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sapphire-glow/30 rounded-full filter blur-[100px] animate-pulse opacity-60"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-prismatic-purple/10 rounded-full filter blur-[120px] animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl max-auto space-y-8">

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white tracking-tight drop-shadow-md">
            Marcus Henri
          </h1>

          <div className="flex items-center justify-center gap-4 text-imperial-gold font-mono uppercase tracking-widest text-sm md:text-base font-bold">
            <span>Executive Pivot</span>
            <span className="w-1.5 h-1.5 bg-prismatic-blue rounded-full"></span>
            <span>Technologist</span>
            <span className="w-1.5 h-1.5 bg-prismatic-blue rounded-full"></span>
            <span>Writer</span>
          </div>

          <p className="text-xl md:text-2xl text-text-secondary font-sans leading-relaxed max-w-2xl mx-auto font-light">
            Bridging 30 years of high-level business development in Asia with a passion for narrative architecture and digital innovation.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-sapphire-deep/50 text-white font-sans font-bold tracking-wider rounded-none transition-all duration-300 facet-border hover-prismatic hover-prismatic-button"
            >
              Explore Works
            </a>
            <a
              href="#cv"
              className="px-8 py-4 bg-transparent border border-facet-edge-silver text-white font-sans font-bold tracking-wider rounded-none hover:bg-facet-light transition-all duration-300 hover-prismatic"
            >
              View The Journey
            </a>
          </div>
        </div>
      </section>

      <ProjectsGallery />

      <QuoteCarousel />

      <InteractiveCV />

      <ContactForm />

      <Guestbook
        repoId="R_kgDONn5eKA"
        category="General"
        categoryId="DIC_kwDONn5eKM4CmB9P"
      />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-facet-edge-silver bg-obsidian-base/50 backdrop-blur-md">
        <p className="text-sm font-mono text-text-secondary uppercase tracking-widest">
          The Portfolio & Digital Archive
        </p>
        <p className="text-xs font-sans text-text-secondary/60 mt-2">
          © {new Date().getFullYear()} Marcus Henri (Mark Henry Saft). All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
