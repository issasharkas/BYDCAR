import {
    Gauge, Zap, Shield, Cog, Fuel, Navigation,
    Bluetooth, Wifi, Radio, Car, Wrench, Settings,
    ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";

const ICONS = [Gauge, Zap, Shield, Cog, Fuel, Navigation, Bluetooth, Wifi, Radio, Car, Wrench, Settings];
const BIG_LINKS = ["Find a dealer", "Fleet & lease", "Book a test drive"];

const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 200 } }
};

export function ConnectedSystems() {
    return (
        <section id="connected-systems" className="relative w-full text-primary bg-black">
            {/* Top half: Video Background & Grid */}
            <div className="relative w-full min-h-[800px] flex flex-col justify-center py-16 md:py-24 overflow-hidden">
                {/* Video Bg */}
                <div className="absolute inset-0 w-full h-full -z-10">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="https://cdn.pixabay.com/video/2019/11/05/28833-371589139_large.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="w-full max-w-[1400px] mx-auto z-20 px-7 md:px-12 lg:px-20">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-primary/30 uppercase tracking-widest text-[11px] font-bold mb-8"
                    >
                        Connected Systems
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-balance leading-tight"
                    >
                        Seamlessly Integrate <br />
                        Every System
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-primary/70 max-w-2xl mb-16"
                    >
                        Experience absolute control. Our advanced connectivity ensures your vehicle, devices, and digital life sync effortlessly, delivering unparalleled performance and convenience wherever the road takes you.
                    </motion.p>

                    {/* Icon Grid */}
                    <motion.div
                        variants={iconContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 mb-16 max-w-7xl"
                    >
                        {ICONS.map((Icon, i) => (
                            <motion.div
                                key={i}
                                variants={iconVariants}
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                                className="w-full aspect-square rounded-3xl border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center transition-colors duration-300 cursor-pointer"
                            >
                                <Icon className="w-8 h-8 text-accent-cyan drop-shadow-[0_0_8px_hsl(var(--accent-cyan))]" />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Explore All CTA */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="rounded-full px-8 py-3.5 border border-primary text-primary hover:bg-white hover:text-black transition-all duration-300 font-medium"
                    >
                        Explore All
                    </motion.button>
                </div>
            </div>

            {/* Bottom half: Big Links */}
            <div className="w-full bg-black">
                <div className="flex flex-col w-full">
                    {BIG_LINKS.map((link, i) => (
                        <motion.a
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            key={i}
                            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group flex flex-col w-full border-b border-primary/10 hover:bg-primary/5 transition-colors duration-300"
                        >
                            <div className="w-full flex items-center justify-between py-12 md:py-16 px-7 md:px-12 lg:px-20 overflow-hidden">
                                <h3 className="text-5xl md:text-7xl lg:text-[110px] font-bold tracking-tight text-primary/90 group-hover:text-primary transition-all duration-500 origin-left">
                                    {link}
                                </h3>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <ChevronRight className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 text-primary/30 group-hover:text-primary transition-colors duration-300" />
                                </motion.div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
