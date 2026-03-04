import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-pearl-white relative overflow-hidden border-t border-silver/50">
            {/* Decorative Grid Background - Light */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, #6B21A8 1px, transparent 1px), linear-gradient(to bottom, #6B21A8 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-deep-indigo mb-4">
                        Initiate Contact
                    </h2>
                    <div className="w-20 h-1 bg-electric-violet mx-auto mb-6"></div>
                    <p className="text-charcoal-violet font-sans text-lg font-light">
                        For professional inquiries, strategic partnerships, or creative collaborations.
                    </p>
                </div>

                <div className="bg-white/80 border border-silver/50 rounded-xl p-8 md:p-12 shadow-xl backdrop-blur-sm relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-soft-lavender rounded-bl-full pointer-events-none"></div>

                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-electric-violet font-mono tracking-wider">
                                    NAME
                                </label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    className="bg-white/90 border-silver/40 text-deep-indigo placeholder:text-slate-400 focus-visible:ring-royal-purple/50 rounded-sm shadow-sm"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-electric-violet font-mono tracking-wider">
                                    EMAIL
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="bg-white/90 border-silver/40 text-deep-indigo placeholder:text-slate-400 focus-visible:ring-royal-purple/50 rounded-sm shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subjectLine" className="text-sm font-medium text-electric-violet font-mono tracking-wider">
                                SUBJECT
                            </label>
                            <Input
                                id="subjectLine"
                                placeholder="Inquiry re: Strategic Partnership"
                                className="bg-white/90 border-silver/40 text-deep-indigo placeholder:text-slate-400 focus-visible:ring-royal-purple/50 rounded-sm shadow-sm"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-electric-violet font-mono tracking-wider">
                                TRANSMISSION
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Enter your message..."
                                className="min-h-[150px] bg-white/90 border-silver/40 text-deep-indigo placeholder:text-slate-400 focus-visible:ring-royal-purple/50 rounded-sm resize-none shadow-sm"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-royal-purple hover:bg-electric-violet text-white font-bold tracking-widest font-mono rounded-sm py-6 transition-all duration-300 group shadow-md"
                        >
                            SEND DIRECTIVE
                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                        </Button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-silver/30 flex justify-center text-xs font-mono text-royal-purple/70 uppercase tracking-widest">
                        <span>Encrypted Endpoint // Secure Channel</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
