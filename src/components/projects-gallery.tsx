"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function ProjectsGallery() {
    return (
        <section id="projects" className="py-24 bg-soft-lavender/30 relative z-10">

            {/* Editorial Header */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep-indigo mb-6 tracking-tight">
                    Selected Works
                </h2>
                <div className="w-24 h-1 bg-royal-purple mb-8"></div>
                <p className="text-charcoal-violet max-w-3xl font-sans text-xl leading-relaxed">
                    A curated deep-dive into the intersections of history, language, and future technologies. These are not just projects; they are ongoing explorations.
                </p>
            </div>

            {/* Major Projects: Immersive Heroes */}
            <div className="space-y-1 border-y border-silver/50">

                {/* Project 1: Heritage Letters */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group relative w-full min-h-[70vh] flex items-center overflow-hidden border-b border-silver/50 bg-pearl-white"
                >
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/mountain_divinity_light_bg.png"
                            alt="The Heritage Letters Background"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 group-hover:scale-105 ease-in-out"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-pearl-white via-pearl-white/80 to-transparent z-10" />
                    </div>

                    <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="outline" className="border-royal-purple/60 text-deep-indigo font-bold bg-royal-purple/10 hover:bg-royal-purple/20 transition-colors font-mono text-xs">History</Badge>
                                <Badge variant="outline" className="border-silver text-deep-indigo font-bold bg-white/50 font-mono text-xs">Writing</Badge>
                            </div>

                            <h3 className="text-5xl md:text-7xl font-serif font-bold text-deep-indigo drop-shadow-sm">
                                The Heritage Letters
                            </h3>

                            <p className="text-charcoal-violet font-serif text-xl md:text-2xl leading-relaxed max-w-xl italic">
                                An archival exploration of history, legacy, and ancient civilizations, brought to life through precise narrative architecture.
                            </p>

                            <Link
                                href="#"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-royal-purple border border-royal-purple text-white hover:bg-electric-violet hover:border-electric-violet transition-all duration-300 font-sans font-bold tracking-widest uppercase text-sm"
                            >
                                Explore Archive <span className="text-lg">→</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Project 2: G.L.O.S.S. */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group relative w-full min-h-[70vh] flex items-center overflow-hidden bg-pearl-white"
                >
                    <div className="absolute inset-0 z-0 flex justify-end">
                        <div className="w-full lg:w-3/4 h-full relative">
                            <Image
                                src="/abstract_pastel_light_bg.jpg"
                                alt="G.L.O.S.S. Background"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000 group-hover:-translate-x-4 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-pearl-white/80 to-pearl-white z-10" />
                        </div>
                    </div>

                    <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="outline" className="border-electric-violet/60 text-deep-indigo font-bold bg-electric-violet/10 hover:bg-electric-violet/20 transition-colors font-mono text-xs">Education Tech</Badge>
                                <Badge variant="outline" className="border-silver text-deep-indigo font-bold bg-white/50 font-mono text-xs">Next.js</Badge>
                            </div>

                            <h3 className="text-5xl md:text-7xl font-serif font-bold text-deep-indigo drop-shadow-sm">
                                G.L.O.S.S.
                            </h3>

                            <p className="text-charcoal-violet font-sans text-lg md:text-xl leading-relaxed max-w-xl">
                                A highly-gamified, technically rigorous platform designed to elevate grammar and vocabulary pedagogy through dynamic visual learning and interactive systems.
                            </p>

                            <Link
                                href="#"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-electric-violet/10 border border-electric-violet text-electric-violet hover:bg-electric-violet hover:text-white transition-all duration-300 font-sans font-bold tracking-widest uppercase text-sm"
                            >
                                Launch Application <span className="text-lg">→</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Minor Projects: Watercolor Cards */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 mt-24">
                <h3 className="text-2xl font-mono tracking-widest text-royal-purple mb-12 uppercase border-b border-silver/50 pb-4">
                    Upcoming Initiatives
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="group relative overflow-hidden rounded-xl border border-silver/50 bg-[image:var(--background-image-watercolor-gold)] p-10 transition-all duration-500 hover:border-imperial-gold/50 shadow-lg bg-white/60">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-3xl font-serif font-bold text-deep-indigo group-hover:text-imperial-gold transition-colors">
                                    AIDAv2 Hub
                                </h4>
                                <Badge variant="outline" className="border-emerald-400 text-emerald-900 bg-emerald-100 font-bold font-mono text-xs uppercase tracking-widest shadow-sm">Concept</Badge>
                            </div>
                            <p className="text-charcoal-violet font-sans flex-grow mb-8 text-lg">
                                High-converting promotional platform architecture for Web3/DeFi scaling.
                            </p>
                            <div className="mt-auto">
                                <span className="text-sm font-mono text-royal-purple">Business Dev · Next.js</span>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl border border-silver/50 bg-[image:var(--background-image-watercolor-lavender)] p-10 transition-all duration-500 hover:border-electric-violet/50 shadow-lg bg-white/60">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-3xl font-serif font-bold text-deep-indigo group-hover:text-electric-violet transition-colors">
                                    Project: Obsidian
                                </h4>
                                <Badge variant="outline" className="border-slate-400 text-slate-800 bg-slate-200 font-bold font-mono text-xs uppercase tracking-widest shadow-sm">Drafting</Badge>
                            </div>
                            <p className="text-charcoal-violet font-serif italic flex-grow mb-8 text-lg">
                                &quot;An upcoming sci-fi novella exploring the intersection of AI logic and human frailty.&quot;
                            </p>
                            <div className="mt-auto">
                                <span className="text-sm font-mono text-electric-violet">Creative Writing · Screenplay</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
