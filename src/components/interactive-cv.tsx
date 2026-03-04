"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function InteractiveCV() {
    const experiences = [
        {
            year: "Present",
            role: "APAC Head of Business Development",
            company: "AIDAv2.com",
            location: "Hong Kong / Remote",
            description:
                "Leading strategic growth, partnerships, and market expansion across the Asia-Pacific region for a next-generation DeFi platform.",
            skills: ["Strategy", "Web3", "Leadership"],
        },
        {
            year: "2010 - 2023",
            role: "Senior Director, Asian Markets",
            company: "Various Tech & Finance Firms",
            location: "Hong Kong & Thailand",
            description:
                "Spearheaded regional operations and high-value client acquisitions. Focused on emerging markets and cross-border initiatives.",
            skills: ["Operations", "Client Acquisition", "Emerging Markets"],
        },
        {
            year: "1994 - 2010",
            role: "Director of Business Development",
            company: "Enterprise Solutions Asia",
            location: "Tokyo, Japan",
            description:
                "Built and managed international sales teams, expanding the company footprint into Japan and Southeast Asia during pivotal economic shifts.",
            skills: ["Sales Management", "International Expansion", "Negotiation"],
        },
    ];

    return (
        <section id="cv" className="py-24 px-6 md:px-12 bg-pearl-white relative">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-deep-indigo mb-6 tracking-tight">
                        The Journey
                    </h2>
                    <div className="w-24 h-1 bg-royal-purple mx-auto mb-8"></div>
                    <p className="text-charcoal-violet font-sans text-xl leading-relaxed max-w-2xl mx-auto">
                        30 years of executive leadership operating as <span className="font-serif italic text-deep-indigo font-semibold">Mark Henry Saft</span> across Japan, Thailand, and Hong Kong.
                    </p>
                </div>

                <div className="relative border-l-2 border-slate-300 ml-4 md:ml-0">
                    {/* Animated vertical line overlay */}
                    <motion.div
                        className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-royal-purple origin-top"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                    />
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="mb-16 relative pl-8 md:pl-16 group"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-6 h-4 w-4 rounded-full bg-soft-lavender border-4 border-pearl-white group-hover:bg-electric-violet group-hover:scale-125 transition-all duration-300 z-10 shadow-sm" />

                            <div className="bg-[image:var(--background-image-watercolor-lavender)] rounded-xl p-8 border border-silver/30 shadow-lg group-hover:border-royal-purple/30 transition-all duration-300 relative overflow-hidden bg-white/60 backdrop-blur-sm">
                                <div className="relative z-10">
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 mb-4">
                                        <span className="text-electric-violet font-mono font-bold tracking-widest text-sm shrink-0 uppercase">
                                            {exp.year}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-deep-indigo leading-tight">
                                            {exp.role}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-3 mb-6 text-charcoal-violet font-sans text-sm tracking-wide">
                                        <span className="font-bold text-deep-indigo uppercase">{exp.company}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-imperial-gold"></span>
                                        <span className="uppercase tracking-wider">{exp.location}</span>
                                    </div>

                                    <p className="text-deep-indigo/90 font-sans mb-8 max-w-2xl text-lg leading-relaxed font-normal">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map(skill => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="bg-royal-purple/10 border border-royal-purple/30 text-deep-indigo font-bold hover:bg-royal-purple/20 font-mono text-xs rounded-sm px-3 py-1 shadow-sm transition-colors"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
