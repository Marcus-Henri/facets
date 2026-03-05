"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function ProjectsGallery() {
    return (
        <section id="projects" className="py-24 bg-transparent relative z-10">

            {/* Editorial Header */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-md">
                    Selected Works
                </h2>
                <div className="w-24 h-1 bg-prismatic-blue mb-8"></div>
                <p className="text-text-secondary max-w-3xl font-sans text-xl leading-relaxed">
                    A curated deep-dive into the intersections of history, language, and future technologies. These are not just projects; they are ongoing explorations.
                </p>
            </div>

            {/* Major Projects: Immersive Heroes */}
            <div className="space-y-12">

                {/* Project 1: Heritage Letters */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group relative w-full min-h-[70vh] flex items-center overflow-hidden glass-panel hover-prismatic max-w-7xl mx-auto rounded-3xl"
                >
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/mountain_divinity_light_bg.png"
                            alt="The Heritage Letters Background"
                            fill
                            className="object-cover opacity-60 mix-blend-luminosity group-hover:opacity-80 transition-opacity duration-1000 group-hover:scale-105 ease-in-out"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-base via-obsidian-base/80 to-transparent z-10" />
                    </div>

                    <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="outline" className="border-prismatic-blue/60 text-prismatic-blue font-bold tracking-wider uppercase bg-prismatic-blue/10 hover:bg-prismatic-blue/20 transition-colors font-mono text-xs shadow-[0_0_10px_rgba(79,195,247,0.2)]">History</Badge>
                                <Badge variant="outline" className="border-facet-edge-silver text-white font-bold bg-white/10 font-mono tracking-wider uppercase text-xs">Writing</Badge>
                            </div>

                            <h3 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-md">
                                The Heritage Letters
                            </h3>

                            <p className="text-text-secondary font-serif text-xl md:text-2xl leading-relaxed max-w-xl italic">
                                An archival exploration of history, legacy, and ancient civilizations, brought to life through precise narrative architecture.
                            </p>

                            <Link
                                href="https://vercel.com/marcus-henris-projects/https-theheritageletters"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-sapphire-deep/80 backdrop-blur-md text-white transition-all duration-300 font-sans font-bold tracking-widest uppercase text-sm facet-border hover-prismatic-button"
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
                    className="group relative w-full min-h-[70vh] flex items-center overflow-hidden glass-panel hover-prismatic max-w-7xl mx-auto rounded-3xl"
                >
                    <div className="absolute inset-0 z-0 flex justify-end">
                        <div className="w-full lg:w-3/4 h-full relative">
                            <Image
                                src="/abstract_pastel_light_bg.jpg"
                                alt="G.L.O.S.S. Background"
                                fill
                                className="object-cover opacity-60 mix-blend-luminosity group-hover:opacity-80 transition-opacity duration-1000 group-hover:-translate-x-4 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-obsidian-base/80 to-obsidian-base z-10" />
                        </div>
                    </div>

                    <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <Badge variant="outline" className="border-prismatic-purple/60 text-prismatic-purple font-bold tracking-wider uppercase bg-prismatic-purple/10 hover:bg-prismatic-purple/20 transition-colors font-mono text-xs shadow-[0_0_10px_rgba(179,136,255,0.2)]">Education Tech</Badge>
                                <Badge variant="outline" className="border-facet-edge-silver text-white font-bold tracking-wider uppercase bg-white/10 font-mono text-xs">Next.js</Badge>
                            </div>

                            <h3 className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-md">
                                G.L.O.S.S.
                            </h3>

                            <p className="text-text-secondary font-sans text-lg md:text-xl leading-relaxed max-w-xl">
                                A highly-gamified, technically rigorous platform designed to elevate grammar and vocabulary pedagogy through dynamic visual learning and interactive systems.
                            </p>

                            <Link
                                href="https://marcus-henri.github.io/https-grammar-quiz-/"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-sapphire-deep/80 backdrop-blur-md text-white transition-all duration-300 font-sans font-bold tracking-widest uppercase text-sm facet-border hover-prismatic-button"
                            >
                                Launch Application <span className="text-lg">→</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Minor Projects: Watercolor Cards */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 mt-24">
                <h3 className="text-2xl font-mono tracking-widest text-imperial-gold mb-12 uppercase border-b border-facet-edge-gold pb-4">
                    Upcoming Initiatives
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="group relative overflow-hidden rounded-xl border border-transparent glass-panel p-10 hover-prismatic">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-3xl font-serif font-bold text-white group-hover:text-imperial-gold transition-colors drop-shadow-md">
                                    AIDAv2 Hub
                                </h4>
                                <Badge variant="outline" className="border-prismatic-blue/50 text-prismatic-blue bg-prismatic-blue/10 font-bold font-mono text-xs uppercase tracking-widest shadow-[0_0_10px_rgba(79,195,247,0.2)]">Concept</Badge>
                            </div>
                            <p className="text-text-secondary font-sans flex-grow mb-8 text-lg">
                                High-converting promotional platform architecture for Web3/DeFi scaling.
                            </p>
                            <div className="mt-auto">
                                <span className="text-sm font-mono text-prismatic-blue">Business Dev · Next.js</span>
                            </div>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl border border-transparent glass-panel p-10 hover-prismatic">
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <h4 className="text-3xl font-serif font-bold text-white group-hover:text-prismatic-purple transition-colors drop-shadow-md">
                                    Project: Obsidian
                                </h4>
                                <Badge variant="outline" className="border-prismatic-purple/50 text-prismatic-purple bg-prismatic-purple/10 font-bold font-mono text-xs uppercase tracking-widest shadow-[0_0_10px_rgba(179,136,255,0.2)]">Drafting</Badge>
                            </div>
                            <p className="text-text-secondary font-serif italic flex-grow mb-8 text-lg">
                                &quot;An upcoming sci-fi novella exploring the intersection of AI logic and human frailty.&quot;
                            </p>
                            <div className="mt-auto">
                                <span className="text-sm font-mono text-prismatic-purple">Creative Writing · Screenplay</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}
