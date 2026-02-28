import { Users, Gauge, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Audience() {
    return (
        <section id="audience" className="w-full bg-black py-20 px-7 md:px-12 lg:px-20 lg:py-32 text-primary">
            <div className="max-w-7xl mx-auto flex flex-col items-start w-full">
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-px w-10 bg-primary/40"></div>
                    <span className="uppercase tracking-widest text-[11px] md:text-xs font-bold text-primary/80">For Whom?</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold mb-16 text-balance leading-[1.1] max-w-5xl"
                >
                    Who Should Experience <br />
                    <span className="text-primary/50">Our Electric Range</span>
                </motion.h2>

                {/* 4-column grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16"
                >
                    {/* First card: circular */}
                    <motion.div variants={itemVariants} className="w-full aspect-square rounded-full border border-primary/10 bg-white/5 flex items-center justify-center overflow-hidden relative group">
                        <img
                            src={`${import.meta.env.BASE_URL}images/audience-icon.png`}
                            alt="Audience portrait"
                            className="w-full h-full object-cover object-center grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop';
                            }}
                        />
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={itemVariants} className="w-full aspect-square rounded-3xl border border-primary/10 bg-primary/5 p-8 flex flex-col justify-end gap-6 hover:bg-primary/10 transition-colors duration-300">
                        <Users className="w-12 h-12 text-primary/50" />
                        <h3 className="text-2xl font-semibold text-primary/90">The Visionary Family</h3>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={itemVariants} className="w-full aspect-square rounded-3xl border border-primary/10 bg-primary/5 p-8 flex flex-col justify-end gap-6 hover:bg-primary/10 transition-colors duration-300">
                        <Gauge className="w-12 h-12 text-primary/50" />
                        <h3 className="text-2xl font-semibold text-primary/90">The Performance Purist</h3>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div variants={itemVariants} className="w-full aspect-square rounded-3xl border border-primary/10 bg-primary/5 p-8 flex flex-col justify-end gap-6 hover:bg-primary/10 transition-colors duration-300">
                        <Wrench className="w-12 h-12 text-primary/50" />
                        <h3 className="text-2xl font-semibold text-primary/90">The Tech Enthusiast</h3>
                    </motion.div>
                </motion.div>

                {/* Bottom Info Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 flex items-center justify-center text-center"
                >
                    <p className="text-primary/70 text-lg md:text-xl leading-relaxed max-w-4xl text-balance">
                        Whether you demand uncompromised performance, cutting-edge software integration, or the very best in family safety and comfort, our fully adaptive platform is engineered to adjust to your lifestyle without hesitation.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
