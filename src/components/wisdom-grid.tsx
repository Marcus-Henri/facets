"use client";

import { motion } from "framer-motion";

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

// Helper to stagger columns to create a masonry-like feel without a heavy library
const col1 = quotes.filter((_, i) => i % 3 === 0);
const col2 = quotes.filter((_, i) => i % 3 === 1);
const col3 = quotes.filter((_, i) => i % 3 === 2);

const QuoteCard = ({ quote, index }: { quote: { text: string, author: string }, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
        className="glass-panel facet-border p-8 rounded-xl mb-6 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover-prismatic hover:-translate-y-1 transition-all duration-300 relative group"
    >
        <span className="absolute top-4 left-4 text-4xl text-sapphire-glow/40 font-serif leading-none select-none group-hover:text-prismatic-blue/60 transition-colors">
            &ldquo;
        </span>
        <blockquote className="mt-4">
            <p className="text-lg md:text-xl font-serif text-white/90 leading-relaxed font-light italic mb-6 relative z-10">
                "{quote.text}"
            </p>
            <footer className="flex items-center gap-3">
                <div className="h-[1px] w-6 bg-imperial-gold/60"></div>
                <cite className="text-sm font-mono tracking-widest text-imperial-gold/90 uppercase">
                    {quote.author}
                </cite>
            </footer>
        </blockquote>
    </motion.div>
);

export function WisdomGrid() {
    return (
        <section className="py-24 px-6 md:px-12 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-md">
                        A Symphony of Quotes
                    </h2>
                    <div className="w-24 h-1 bg-prismatic-blue mx-auto mb-8"></div>
                    <p className="text-text-secondary font-sans text-xl leading-relaxed max-w-2xl mx-auto">
                        Timeless wisdom, perspectives, and mental frameworks to carry forward.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    <div className="flex flex-col">
                        {col1.map((quote, i) => <QuoteCard key={i} quote={quote} index={i * 3} />)}
                    </div>
                    <div className="flex flex-col lg:pt-12">
                        {col2.map((quote, i) => <QuoteCard key={i} quote={quote} index={i * 3 + 1} />)}
                    </div>
                    <div className="flex flex-col lg:pt-24">
                        {col3.map((quote, i) => <QuoteCard key={i} quote={quote} index={i * 3 + 2} />)}
                    </div>
                </div>
            </div>
        </section>
    );
}
