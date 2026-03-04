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
                return "max-w-5xl mx-auto py-24 px-8 md:px-16 border-l-4 border-deep-indigo bg-white/40 shadow-sm rounded-r-xl my-24";
            case "literary":
                return "text-center max-w-3xl mx-auto py-32 px-6 md:px-12 bg-[image:var(--background-image-watercolor-gold)] bg-cover bg-center rounded-2xl shadow-lg border border-imperial-gold/30 my-24";
            default:
                return "text-center max-w-4xl mx-auto py-24 px-6 md:px-12";
        }
    };

    const getTextStyles = () => {
        switch (variant) {
            case "ethereal":
                return "text-3xl md:text-5xl font-serif text-deep-indigo leading-relaxed font-light italic mb-8 drop-shadow-sm";
            case "modern":
                return "text-2xl md:text-4xl font-sans font-bold text-charcoal-violet uppercase tracking-tight leading-snug mb-8";
            case "literary":
                return "text-2xl md:text-3xl font-serif text-charcoal-violet leading-loose italic mb-10";
            default:
                return "text-3xl md:text-5xl font-serif text-deep-indigo leading-relaxed font-light italic mb-8 drop-shadow-sm";
        }
    };

    const getAuthorStyles = () => {
        switch (variant) {
            case "ethereal":
                return "text-lg font-mono tracking-widest text-royal-purple uppercase";
            case "modern":
                return "text-xl font-sans font-bold text-deep-indigo";
            case "literary":
                return "text-lg font-serif font-bold text-deep-indigo tracking-wide";
            default:
                return "text-lg font-mono tracking-widest text-royal-purple uppercase";
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn("relative z-10", getVariantStyles(), className)}
        >
            <blockquote className="relative">
                {variant === "ethereal" && (
                    <span className="absolute -top-16 -left-8 text-8xl text-soft-lavender/50 font-serif opacity-50 select-none">
                        &ldquo;
                    </span>
                )}
                <p className={cn("relative z-10", getTextStyles())}>
                    "{text}"
                </p>
                <footer className="flex items-center justify-center gap-4">
                    {variant === "modern" && <div className="h-[2px] w-12 bg-royal-purple"></div>}
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
