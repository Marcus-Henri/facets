"use client";

import Giscus from "@giscus/react";

interface GuestbookProps {
    repoId: string;
    category: string;
    categoryId: string;
}

export function Guestbook({ repoId, category, categoryId }: GuestbookProps) {
    return (
        <section className="py-24 px-6 md:px-12 bg-transparent border-t border-facet-edge-silver relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-md">
                        The Symposium & Community Quotes
                    </h2>
                    <div className="w-24 h-1 bg-imperial-gold mx-auto mb-8"></div>
                    <p className="text-text-secondary font-sans text-xl leading-relaxed max-w-2xl mx-auto mb-4">
                        A space for philosophical dialogue, feedback, and shared wisdom.
                    </p>
                    <p className="text-text-primary font-serif italic text-lg max-w-2xl mx-auto border border-facet-edge-gold/30 bg-sapphire-deep/30 p-4 rounded-lg">
                        Do you have a favorite quote or personal philosophy that guides you? Please share it with the community below.
                    </p>
                </div>

                <div className="glass-panel facet-border rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] p-6 md:p-10 min-h-[400px]">
                    <Giscus
                        id="comments"
                        repo="Marcus-Henri/facets"
                        repoId={repoId}
                        category={category}
                        categoryId={categoryId}
                        mapping="pathname"
                        term="Welcome to @giscus/react component!"
                        reactionsEnabled="1"
                        emitMetadata="0"
                        inputPosition="top"
                        theme="transparent_dark"
                        lang="en"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
