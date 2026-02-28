import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative w-full h-[100svh] min-h-[600px] flex items-center overflow-hidden">
            {/* Full Width Video Background */}
            <div className="absolute inset-0 w-full h-full z-0 bg-black overflow-hidden pointer-events-none">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-90 scale-[1.05]"
                >
                    <source src={`${import.meta.env.BASE_URL}videos/byd_seal.mp4`} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 z-10" />
            </div>

            {/* Content wrapper */}
            <div className="relative z-20 mx-auto w-full max-w-7xl px-7 py-16 md:px-12 lg:px-20 flex flex-col items-start justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-[78px] font-bold text-white tracking-tight leading-[1.1] mb-8 text-balance"
                >
                    Drive Beyond. <br />
                    Unlock Pure Power
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                    <a
                        href="#services"
                        className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 font-medium text-lg"
                    >
                        Learn more
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
