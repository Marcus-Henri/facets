import Link from "next/link";
import { ProjectsGallery } from "@/components/projects-gallery";
import { InteractiveCV } from "@/components/interactive-cv";
import { ContactForm } from "@/components/contact-form";
import { Quote } from "@/components/quote";
import { Guestbook } from "@/components/guestbook";

export default function Home() {
  return (
    <main className="min-h-screen bg-pearl-white">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">

        {/* Subtle Ethereal Background Blurs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-soft-lavender/50 rounded-full mix-blend-multiply filter blur-[100px] animate-pulse opacity-70"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-electric-violet/10 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl max-auto space-y-8">

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-deep-indigo tracking-tight drop-shadow-sm">
            Marcus Henri
          </h1>

          <div className="flex items-center justify-center gap-4 text-royal-purple font-mono uppercase tracking-widest text-sm md:text-base font-bold">
            <span>Executive Pivot</span>
            <span className="w-1.5 h-1.5 bg-imperial-gold rounded-full"></span>
            <span>Technologist</span>
            <span className="w-1.5 h-1.5 bg-imperial-gold rounded-full"></span>
            <span>Writer</span>
          </div>

          <p className="text-xl md:text-2xl text-charcoal-violet font-sans leading-relaxed max-w-2xl mx-auto font-light">
            Bridging 30 years of high-level business development in Asia with a passion for narrative architecture and digital innovation.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-royal-purple text-white font-sans font-bold tracking-wider rounded-none hover:bg-electric-violet hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 border border-royal-purple"
            >
              Explore Works
            </a>
            <a
              href="#cv"
              className="px-8 py-4 bg-transparent border border-silver text-deep-indigo font-sans font-bold tracking-wider rounded-none hover:bg-soft-lavender transition-all duration-300"
            >
              View The Journey
            </a>
          </div>
        </div>
      </section>

      {/* Sections rendering */}
      <Quote
        text="Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and freedom."
        author="Viktor Frankl"
        variant="ethereal"
      />

      <ProjectsGallery />

      <Quote
        text="We are going to relentlessly chase perfection, knowing full well we will not catch it, because nothing is perfect. But we are going to relentlessly chase it, because in the process we will catch excellence. I am not remotely interested in just being good."
        author="Vince Lombardi"
        variant="modern"
      />

      <InteractiveCV />

      <Quote
        text="To every man upon this earth / Death cometh soon or late. / And how can man die better / Than facing fearful odds, / For the ashes of his fathers, / And the temples of his Gods."
        author="Horatius, by Thomas Macaulay"
        variant="literary"
      />

      <ContactForm />

      <Guestbook
        repoId="R_kgDONn5eKA"
        category="General"
        categoryId="DIC_kwDONn5eKM4CmB9P"
      />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-silver/50 bg-pearl-white">
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
          The Portfolio & Digital Archive
        </p>
        <p className="text-xs font-sans text-gray-400 mt-2">
          © {new Date().getFullYear()} Marcus Henri (Mark Henry Saft). All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
