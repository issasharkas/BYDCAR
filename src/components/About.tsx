import { motion } from "framer-motion";

export function About() {
    return (
        <section id="about" className="w-full bg-black py-20 px-7 md:px-12 lg:px-20 lg:py-32 text-primary">
            <div className="max-w-7xl mx-auto flex flex-col items-start w-full">
                {/* Label pattern */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-px w-10 bg-primary/40"></div>
                    <span className="uppercase tracking-widest text-[11px] md:text-xs font-bold text-primary/80">About Us</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl md:text-5xl lg:text-7xl font-bold mb-16 text-balance leading-[1.1] max-w-5xl"
                >
                    Why You Absolutely Should <br />
                    <span className="text-primary/40">Experience Our Electric Range</span>
                </motion.h2>

                {/* Two-column layout */}
                <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-end">
                    {/* Left: 3 images side by side layout */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 flex items-center justify-between gap-4"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-1/3 h-64 flex items-center justify-center bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}images/shape-1.png`}
                                alt="Shape 1"
                                className="w-full h-full object-cover opacity-80 mix-blend-screen"
                                onError={(e) => {
                                    // Fallback if image doesn't exist
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1551276063-e38102ece691?q=80&w=200&auto=format&fit=crop';
                                }}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-1/3 h-64 flex items-center justify-center bg-white/5 border border-white/10 rounded-3xl relative -top-8 overflow-hidden"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}images/shape-2.png`}
                                alt="Shape 2"
                                className="w-full h-full object-cover opacity-80 mix-blend-screen"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1619642055106-444f43407fb9?q=80&w=200&auto=format&fit=crop';
                                }}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-1/3 h-64 flex items-center justify-center bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}images/shape-3.png`}
                                alt="Shape 3"
                                className="w-full h-full object-cover opacity-80 mix-blend-screen"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1620054703816-7243b9df77cb?q=80&w=200&auto=format&fit=crop';
                                }}
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col gap-8 text-primary/70 text-lg md:text-xl leading-relaxed lg:pb-8"
                    >
                        <p className="text-balance">
                            Transitioning to our electric range goes beyond adopting a new energy source — it's about embracing a fundamental shift in how we experience the road. Our vehicles redefine what it means to drive, seamlessly integrating cutting-edge capability with zero-emission efficiency without compromising on the thrill.
                        </p>
                        <p className="text-balance">
                            Every element, from our advanced battery architecture to the meticulously crafted interiors, is designed to elevate your journey. Whether navigating city streets or embarking on cross-country adventures, you can depend on next-generation performance that feels entirely effortless.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
