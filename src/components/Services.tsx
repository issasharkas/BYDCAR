import { Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
    return (
        <section id="services-details" className="relative w-full min-h-[100svh] flex items-center justify-center py-20 md:py-32 px-7 md:px-12 lg:px-20 overflow-hidden text-primary">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full -z-10 bg-black">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="https://cdn.pixabay.com/video/2021/04/13/70975-536965851_large.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/30 uppercase tracking-widest text-[11px] font-bold mb-8 backdrop-blur"
                >
                    Next-Gen Driving
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-balance leading-tight max-w-4xl"
                >
                    Design, build and perfect <br />
                    <span className="text-primary/70">every single detail</span>
                </motion.h2>

                {/* Glassmorphism Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-2xl bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 text-left shadow-2xl relative overflow-hidden"
                >
                    {/* Subtle glow effect behind the card */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent-cyan/20 rounded-full blur-[80px] -z-10" />

                    <h3 className="text-2xl md:text-4xl font-bold mb-6 text-balance leading-tight">
                        Effortless, All-Electric <br />
                        Performance
                    </h3>
                    <p className="text-primary/70 text-lg mb-10 leading-relaxed">
                        Experience the pinnacle of engineering with our highly adaptive smart technology. The vehicle's intuitive systems constantly monitor the road, adjusting power distribution to ensure you maintain perfect traction and comfort in every driving condition.
                    </p>

                    <ul className="flex flex-col gap-6">
                        {[
                            "Full-spectrum torque & drivetrain control",
                            "Personalised driving & comfort profiles",
                            "Track range & plan routes easily"
                        ].map((text, i) => (
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                                key={i}
                                className="flex items-start gap-4"
                            >
                                <div className="flex-shrink-0 mt-1">
                                    <Zap className="w-6 h-6 text-accent-cyan drop-shadow-[0_0_8px_hsl(var(--accent-cyan))]" />
                                </div>
                                <span className="text-lg font-medium text-primary/90">{text}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
