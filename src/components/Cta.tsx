import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Cta() {
    return (
        <section id="cta" className="w-full bg-black py-20 px-7 md:px-12 lg:px-20 lg:py-32 text-primary">
            <div className="max-w-7xl mx-auto w-full">
                {/* Inner Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full rounded-[2rem] overflow-hidden flex flex-col justify-center py-20 md:py-32 px-8 md:px-16 lg:px-24"
                >
                    {/* Video Background */}
                    <div className="absolute inset-0 w-full h-full -z-10 bg-black">
                        <div className="absolute inset-0 bg-black/50 z-10" />
                        {/* High-quality abstract/futuristic lines or road video */}
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-80 mix-blend-screen">
                            <source src="https://cdn.pixabay.com/video/2016/09/21/5398-183786503_large.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="relative z-20 flex flex-col items-start max-w-3xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 text-balance leading-[1.1]"
                        >
                            Experience the future <br />
                            of driving today.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-primary/70 text-lg md:text-xl mb-12 text-balance leading-relaxed"
                        >
                            Book your test drive — one click, instant access. <br className="hidden md:block" />
                            No commitment, pure electric.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-4 pl-8 pr-2.5 py-2.5 rounded-full bg-white text-black text-lg font-semibold hover:bg-white/90 transition-all duration-300 group"
                        >
                            <span className="text-base sm:text-lg font-medium tracking-tight">Book a Test Drive</span>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white group-hover:bg-accent-cyan group-hover:text-black border border-transparent transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
                            </div>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
