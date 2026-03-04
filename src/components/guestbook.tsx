"use client";

import Giscus from "@giscus/react";

interface GuestbookProps {
    repoId: string;
    category: string;
    categoryId: string;
}

export function Guestbook({ repoId, category, categoryId }: GuestbookProps) {
    // We don't have next-themes installed natively yet, but we'll default to light
    // since this is a highly customized Ethereal Renaissance light theme.

    return (
        <section className="py-24 px-6 md:px-12 bg-soft-lavender/20 border-t border-silver/50 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-deep-indigo mb-6 tracking-tight">
                        The Symposium
                    </h2>
                    <div className="w-24 h-1 bg-royal-purple mx-auto mb-8"></div>
                    <p className="text-charcoal-violet font-sans text-xl leading-relaxed max-w-2xl mx-auto">
                        A space for philosophical dialogue, feedback, and continued conversation. Please leave your thoughts below.
                    </p>
                </div>

                <div className="bg-white/60 backdrop-blur-md rounded-2xl border border-silver/50 shadow-xl p-6 md:p-10 min-h-[400px]">
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
                        theme="light"
                        lang="en"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
