'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Flame } from "lucide-react";

interface Star {
    top: string;
    left: string;
    size: number;
    opacity: number;
    duration: number;
}

export default function CosmicBackground() {
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        // Generate stars only on the client to prevent hydration mismatch
        const starArray = Array.from({ length: 80 }).map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 0.8,
            opacity: Math.random() * 0.9 + 0.1,
            duration: Math.random() * 5 + 3,
        }));
        setStars(starArray);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#030014] via-[#06001c] to-[#000010]">
            {/* 🌠 Twinkling stars */}
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: star.size,
                        height: star.size,
                        top: star.top,
                        left: star.left,
                        opacity: star.opacity,
                        filter: "drop-shadow(0 0 3px rgba(255,255,255,0.7))",
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.3],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
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

            {/* 🚀 Rocket 1 */}
            <motion.div
                initial={{ x: "-10vw", y: "70vh", rotate: -10, opacity: 0.8 }}
                animate={{ x: "120vw", y: "40vh", rotate: 10, opacity: 1 }}
                transition={{
                    duration: 55,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
                className="absolute"
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
                        duration: 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Flame className="text-orange-400 w-8 h-8 blur-[2px] drop-shadow-[0_0_12px_rgba(255,120,0,0.7)]" />
                </motion.div>
            </motion.div>

            {/* 🚀 Rocket 2 */}
            <motion.div
                initial={{ x: "120vw", y: "80vh", rotate: 15, opacity: 0.6, scale: 0.9 }}
                animate={{ x: "-20vw", y: "50vh", rotate: 5, opacity: 1 }}
                transition={{
                    duration: 70,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
                className="absolute"
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
                        duration: 0.5,
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
