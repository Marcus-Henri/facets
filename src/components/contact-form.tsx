import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
    return (
        <section id="contact" className="py-24 px-6 md:px-12 bg-transparent relative overflow-hidden border-t border-facet-edge-silver z-10">
            {/* Decorative Grid Background - Dark */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(to right, rgba(179,136,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(179,136,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="max-w-3xl mx-auto relative z-10">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 drop-shadow-md">
                        Initiate Contact
                    </h2>
                    <div className="w-20 h-1 bg-prismatic-purple mx-auto mb-6"></div>
                    <p className="text-text-secondary font-sans text-lg font-light">
                        For professional inquiries, strategic partnerships, or creative collaborations.
                    </p>
                </div>

                <div className="glass-panel facet-border rounded-xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative group hover-prismatic transition-all duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sapphire-glow/20 rounded-bl-full pointer-events-none group-hover:bg-prismatic-purple/20 transition-colors duration-500"></div>

                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-prismatic-purple font-mono tracking-wider">
                                    NAME
                                </label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    className="bg-obsidian-base/60 border-facet-edge-silver text-white placeholder:text-text-secondary/50 focus-visible:ring-prismatic-purple focus-visible:border-prismatic-purple rounded-sm shadow-sm transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-prismatic-purple font-mono tracking-wider">
                                    EMAIL
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="bg-obsidian-base/60 border-facet-edge-silver text-white placeholder:text-text-secondary/50 focus-visible:ring-prismatic-purple focus-visible:border-prismatic-purple rounded-sm shadow-sm transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subjectLine" className="text-sm font-medium text-prismatic-purple font-mono tracking-wider">
                                SUBJECT
                            </label>
                            <Input
                                id="subjectLine"
                                placeholder="Inquiry re: Strategic Partnership"
                                className="bg-obsidian-base/60 border-facet-edge-silver text-white placeholder:text-text-secondary/50 focus-visible:ring-prismatic-purple focus-visible:border-prismatic-purple rounded-sm shadow-sm transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-prismatic-purple font-mono tracking-wider">
                                TRANSMISSION
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Enter your message..."
                                className="min-h-[150px] bg-obsidian-base/60 border-facet-edge-silver text-white placeholder:text-text-secondary/50 focus-visible:ring-prismatic-purple focus-visible:border-prismatic-purple rounded-sm resize-none shadow-sm transition-all"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-sapphire-deep border border-facet-edge-silver hover:bg-prismatic-purple hover:border-prismatic-purple text-white font-bold tracking-widest font-mono rounded-sm py-6 transition-all duration-300 group shadow-md hover-prismatic-button"
                        >
                            SEND DIRECTIVE
                            <span className="ml-2 group-hover:translate-x-1 transition-transform text-lg">→</span>
                        </Button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-facet-edge-silver/50 flex justify-center text-xs font-mono text-prismatic-purple/70 uppercase tracking-widest">
                        <span>Encrypted Endpoint // Secure Channel</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
