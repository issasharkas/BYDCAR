import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, useGLTF } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import * as THREE from "three";

export function CarModel(props: any) {
    const modelPath = `${import.meta.env.BASE_URL}models/2024_byd_seal.glb`.replace('//', '/');
    const { scene } = useGLTF(modelPath);
    const groupRef = useRef<THREE.Group>(null);

    const rotateY = useTransform(props.scrollYProgress, [0, 0.33, 0.66, 1], [Math.PI - 0.5, 0, -Math.PI / 2, -Math.PI / 2]);
    const positionX = useTransform(props.scrollYProgress, [0, 0.33, 0.66, 1], [0, 0, 0, 2]);
    const positionZ = useTransform(props.scrollYProgress, [0, 0.66, 1], [0, 0, 4]);

    useFrame(() => {
        if (!groupRef.current) return;
        groupRef.current.rotation.y = rotateY.get() as number;
        groupRef.current.position.x = positionX.get() as number;
        groupRef.current.position.z = positionZ.get() as number;
    });

    return (
        <group ref={groupRef}>
            <primitive object={scene} scale={1.8} position={[0, -1, 0]} />
            {/* Bake the shadow once (frames=1) and rotate it WITH the car to save massive rendering calculations */}
            <ContactShadows resolution={512} scale={10} blur={2} opacity={0.5} far={10} color="#000000" frames={1} position={[0, -1, 0]} />
        </group>
    );
}

const preloadPath = `${import.meta.env.BASE_URL}models/2024_byd_seal.glb`.replace('//', '/');
useGLTF.preload(preloadPath);

export function CarShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative w-full h-[400vh] bg-black">
            <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

                {/* Text overlays that fade in/out based on scroll */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                    <motion.div style={{ opacity }} className="text-center px-4">
                        <motion.h2
                            style={{
                                opacity: useTransform(scrollYProgress, [0, 0.1, 0.25], [0, 1, 0]),
                                y: useTransform(scrollYProgress, [0, 0.25], [50, -50])
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl font-bold tracking-tighter text-white"
                        >
                            Aggressive Stance
                        </motion.h2>

                        <motion.h2
                            style={{
                                opacity: useTransform(scrollYProgress, [0.25, 0.33, 0.5], [0, 1, 0]),
                                y: useTransform(scrollYProgress, [0.25, 0.5], [50, -50])
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl font-bold tracking-tighter text-white"
                        >
                            Aerodynamic Perfection
                        </motion.h2>

                        <motion.h2
                            style={{
                                opacity: useTransform(scrollYProgress, [0.6, 0.7, 1], [0, 1, 1]),
                                y: useTransform(scrollYProgress, [0.6, 1], [50, -50])
                            }}
                            className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-bold tracking-tighter text-white text-left"
                        >
                            Luxurious <br />
                            <span className="text-accent-cyan">Interior</span>
                        </motion.h2>
                    </motion.div>
                </div>

                {/* 3D Canvas */}
                <div className="absolute inset-0 z-0">
                    {/* Cap DPR at 1.5 to dramatically improve performance on Retina displays */}
                    <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 2, 8], fov: 45 }}>
                        <color attach="background" args={["#000000"]} />
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
                        <Environment preset="city" />

                        <Suspense fallback={null}>
                            <CarModel scrollYProgress={scrollYProgress} />
                        </Suspense>

                        {/* Remove OrbitControls so the user can't break the scroll animation with their mouse, but you can add it back for debugging */}
                        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
                    </Canvas>
                </div>
            </div>
        </section>
    );
}
