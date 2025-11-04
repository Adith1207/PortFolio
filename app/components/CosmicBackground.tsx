'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Flame } from "lucide-react";

export default function CosmicBackground() {
    const [stars, setStars] = useState<
        { top: string; left: string; size: number; opacity: number; delay: number }[]
    >([]);

    // ⭐ Generate stars only on client side — prevents SSR hydration mismatch
    useEffect(() => {
        const generated = Array.from({ length: 70 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 0.8,
            opacity: Math.random() * 0.8 + 0.2,
            delay: Math.random() * 4,
        }));
        setStars(generated);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#030014] via-[#06001c] to-[#000010]">
            {/* 🌠 CSS-based twinkling stars */}
            {stars.map((s, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        top: s.top,
                        left: s.left,
                        opacity: s.opacity,
                        animationDelay: `${s.delay}s`,
                    }}
                />
            ))}

            {/* 🌌 Nebula / cosmic gradient */}
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,#ff4ecd22,transparent_70%),radial-gradient(circle_at_80%_70%,#00e5ff22,transparent_70%)] blur-3xl"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                    opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* 🌕 Glowing Moon */}
            <div className="absolute top-23 right-32 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full bg-gradient-to-b from-gray-100 via-gray-300 to-gray-700 shadow-[0_0_80px_40px_rgba(200,200,255,0.2)] border border-white/10 overflow-hidden">
                {/* subtle craters */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_10%,transparent_40%),radial-gradient(circle_at_70%_60%,rgba(0,0,0,0.1)_10%,transparent_30%)] opacity-70" />
                {/* soft halo */}
                <div className="absolute inset-[-40px] rounded-full bg-[radial-gradient(circle,rgba(180,180,255,0.25)_0%,transparent_70%)] blur-3xl" />
                {/* shimmer light */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"
                    animate={{ backgroundPosition: ["-200% 0%", "200% 0%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        backgroundSize: "200% 100%",
                        mixBlendMode: "overlay",
                        opacity: 0.4,
                    }}
                />
            </div>

            {/* 🚀 Rocket 1 */}
            <motion.div
                initial={{ x: "-10vw", y: "70vh", rotate: -10, opacity: 0.8 }}
                animate={{ x: "120vw", y: "40vh", rotate: 10, opacity: 1 }}
                transition={{
                    duration: 65,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
                className="absolute will-change-transform"
            >
                <Rocket className="text-cyan-300 w-14 h-14 drop-shadow-[0_0_25px_rgba(0,255,255,0.7)]" />
                <motion.div
                    className="absolute bottom-[-6px] left-1/2 -translate-x-1/2"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 1, 0.5],
                        y: [0, 3, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Flame className="text-orange-400 w-8 h-8 blur-[2px] drop-shadow-[0_0_12px_rgba(255,120,0,0.7)]" />
                </motion.div>
            </motion.div>

            {/* 🚀 Rocket 2 (smaller & farther) */}
            <motion.div
                initial={{ x: "120vw", y: "80vh", rotate: 15, opacity: 0.6, scale: 0.9 }}
                animate={{ x: "-20vw", y: "50vh", rotate: 5, opacity: 1 }}
                transition={{
                    duration: 75,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
                className="absolute will-change-transform"
            >
                <Rocket className="text-fuchsia-300 w-12 h-12 drop-shadow-[0_0_20px_rgba(255,0,255,0.5)]" />
                <motion.div
                    className="absolute bottom-[-5px] left-1/2 -translate-x-1/2"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.4, 0.9, 0.4],
                        y: [0, 3, 0],
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Flame className="text-amber-400 w-7 h-7 blur-[2px] drop-shadow-[0_0_10px_rgba(255,150,0,0.5)]" />
                </motion.div>
            </motion.div>
        </div>
    );
}
