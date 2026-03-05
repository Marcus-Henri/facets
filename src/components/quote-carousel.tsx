"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
    { text: "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and freedom.", author: "Viktor Frankl" },
    { text: "Love your country, but never trust your government.", author: "Robert Novak" },
    { text: "If you steal a dollar from a man you are a thief. But, if steal a dollar from a million men, you are a utility!", author: "Mark Twain" },
    { text: "Be always at war with your vices, at peace with your neighbors, and let each new year find you a better person.", author: "Benjamin Franklin" },
    { text: "It does not take a majority to prevail ... but rather an irate, tireless minority, keen on setting brushfires of freedom in the minds of men.", author: "Samuel Adams" },
    { text: "We are going to relentlessly chase perfection, knowing full well we will not catch it, because nothing is perfect. But we are going to relentlessly chase it, because in the process we will catch excellence. I am not remotely interested in just being good.", author: "Vince Lombardi" },
    { text: "Never regret a day in your life. Good days give happiness, bad days give experiences, worst days give lessons, and best days give memories.", author: "Professor Richard Feynman" },
    { text: "The best way to keep a prisoner from escaping is to make sure he never knows he’s in prison.", author: "Fyodor Dostoyevsky" },
    { text: "They say if you get far enough away, you'll be on your way back home", author: "Tom Waits" },
    { text: "Over the long term, the future is decided by optimists.", author: "Kevin Kelly" },
    { text: "The less you bet, the more you lose when you win.", author: "Wyatt Earp" },
    { text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
    { text: "Never, never, never give up.", author: "Winston Churchill" },
    { text: "To every man upon this earth / Death cometh soon or late. / And how can man die better / Than facing fearful odds, / For the ashes of his fathers, / And the temples of his Gods.", author: "Horatius, by Thomas Macaulay" },
    { text: "We are all in the gutter, but some of us are looking at the stars.", author: "Oscar Wilde" },
    { text: "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).", author: "Mark Twain" },
    { text: "For every minute you are angry you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson" },
    { text: "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.", author: "Haruki Murakami, Norwegian Wood" },
    { text: "I have always imagined that Paradise will be a kind of library.", author: "Jorge Luis Borges" },
    { text: "Life isn't about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
];

export function QuoteCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % quotes.length);
        }, 8000); // Change quote every 8 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 px-6 md:px-12 bg-transparent relative z-10 overflow-hidden flex items-center justify-center min-h-[40vh]">
            {/* Background elements for depth */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-b from-transparent via-prismatic-purple/5 to-transparent"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10 w-full glass-panel facet-border rounded-2xl p-8 md:p-14 shadow-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="flex flex-col items-center justify-center space-y-8"
                    >
                        <span className="text-6xl text-sapphire-glow/40 font-serif leading-none select-none">
                            &ldquo;
                        </span>

                        <p className="text-2xl md:text-4xl font-serif text-white leading-relaxed font-light italic drop-shadow-md">
                            "{quotes[currentIndex].text}"
                        </p>

                        <footer className="flex items-center justify-center gap-4">
                            <div className="h-[1px] w-12 bg-prismatic-blue"></div>
                            <cite className="text-lg md:text-xl font-mono tracking-widest text-prismatic-blue uppercase drop-shadow-[0_0_8px_rgba(79,195,247,0.6)]">
                                {quotes[currentIndex].author}
                            </cite>
                            <div className="h-[1px] w-12 bg-prismatic-blue"></div>
                        </footer>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    {quotes.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-6 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'w-1.5 bg-white/20 hover:bg-white/50'
                                }`}
                            aria-label={`Go to quote ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
