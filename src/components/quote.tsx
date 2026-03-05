"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type QuoteVariant = "ethereal" | "modern" | "literary";

interface QuoteProps {
    text: string;
    author: string;
    variant?: QuoteVariant;
    className?: string;
}

export function Quote({ text, author, variant = "ethereal", className }: QuoteProps) {
    const getVariantStyles = () => {
        switch (variant) {
            case "ethereal":
                return "text-center max-w-4xl mx-auto py-24 px-6 md:px-12";
            case "modern":
                return "max-w-5xl mx-auto py-24 px-8 md:px-16 border-l-4 border-prismatic-blue glass-panel rounded-r-xl my-24 facet-border hover-prismatic transition-all duration-500";
            case "literary":
                return "text-center max-w-3xl mx-auto py-32 px-6 md:px-12 bg-obsidian-base/40 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-facet-edge-gold my-24";
            default:
                return "text-center max-w-4xl mx-auto py-24 px-6 md:px-12";
        }
    };

    const getTextStyles = () => {
        switch (variant) {
            case "ethereal":
                return "text-3xl md:text-5xl font-serif text-white leading-relaxed font-light italic mb-8 drop-shadow-md";
            case "modern":
                return "text-2xl md:text-4xl font-sans font-bold text-white uppercase tracking-tight leading-snug mb-8 drop-shadow-sm";
            case "literary":
                return "text-2xl md:text-3xl font-serif text-text-secondary leading-loose italic mb-10";
            default:
                return "text-3xl md:text-5xl font-serif text-white leading-relaxed font-light italic mb-8 drop-shadow-md";
        }
    };

    const getAuthorStyles = () => {
        switch (variant) {
            case "ethereal":
                return "text-lg font-mono tracking-widest text-prismatic-blue uppercase drop-shadow-[0_0_5px_rgba(79,195,247,0.5)]";
            case "modern":
                return "text-xl font-sans font-bold text-white tracking-widest uppercase";
            case "literary":
                return "text-lg font-serif font-bold text-imperial-gold tracking-wide";
            default:
                return "text-lg font-mono tracking-widest text-prismatic-blue uppercase";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className={cn("relative z-10", getVariantStyles(), className)}
        >
            <blockquote className="relative">
                {variant === "ethereal" && (
                    <span className="absolute -top-16 -left-8 text-8xl text-sapphire-glow/50 font-serif opacity-30 select-none">
                        &ldquo;
                    </span>
                )}
                <p className={cn("relative z-10", getTextStyles())}>
                    "{text}"
                </p>
                <footer className="flex items-center justify-center gap-4">
                    {variant === "modern" && <div className="h-[2px] w-12 bg-prismatic-blue"></div>}
                    {variant === "literary" && <span className="text-imperial-gold">~</span>}
                    <cite className={cn(getAuthorStyles())}>
                        {variant !== "literary" && variant !== "modern" && "~ "}
                        {author}
                    </cite>
                </footer>
            </blockquote>
        </motion.div>
    );
}
