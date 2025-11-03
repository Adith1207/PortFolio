'use client';
import { motion } from "framer-motion";

export default function CosmicBackground() {
    const stars = Array.from({ length: 40 });

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#030014] via-[#0b0026] to-[#090015]">
            {/* Twinkling stars */}
            {stars.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        width: Math.random() * 2 + 1,
                        height: Math.random() * 2 + 1,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.8 + 0.2,
                        filter: "blur(0.5px)",
                    }}
                    animate={{
                        opacity: [0.2, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: Math.random() * 4 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Nebula Gradient */}
            <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#ff4ecd22,transparent_70%),radial-gradient(circle_at_80%_70%,#00e5ff22,transparent_70%)]"
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Floating planets */}
            <motion.div
                className="absolute w-24 h-24 bg-gradient-to-br from-purple-500 to-fuchsia-700 rounded-full blur-md opacity-40"
                animate={{
                    x: [0, 50, 0, -50, 0],
                    y: [0, -30, 0, 30, 0],
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ top: "20%", left: "10%" }}
            />

            <motion.div
                className="absolute w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-700 rounded-full blur-lg opacity-30"
                animate={{
                    x: [0, -40, 0, 40, 0],
                    y: [0, 40, 0, -40, 0],
                    rotate: [360, 0],
                }}
                transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ bottom: "10%", right: "10%" }}
            />
        </div>
    );
}
