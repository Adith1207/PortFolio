'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-6 sm:px-10 text-center md:text-left">
            {/* 🌠 Glowing Aura behind the image */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.15)_0%,transparent_70%)] blur-3xl animate-pulse" />
            </div>

            {/* 🌕 Your Glowing Portrait */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="relative flex-shrink-0 mb-10 md:mb-0 md:mr-12"
            >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-[0_0_50px_rgba(0,255,255,0.4)]">
                    <Image
                        src="/adith.jpg" // <-- place your image inside /public
                        alt="Adith Narayan G"
                        width={250}
                        height={250}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>
                {/* Glow ring halo */}
                <div className="absolute inset-[-25px] rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.25)_0%,transparent_70%)] blur-3xl" />
            </motion.div>

            {/* 💫 Hero Content */}
            <div className="max-w-xl flex flex-col items-center md:items-start space-y-5">
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide"
                >
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Adith Narayan G
          </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                    className="text-white/70 italic text-lg sm:text-xl"
                >
                    Exploring the intersection of <span className="text-cyan-400">creativity</span>,{' '}
                    <span className="text-pink-400">logic</span>, and the <span className="text-fuchsia-400">cosmos</span>.
                </motion.p>

                {/* 🚀 Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-wrap items-center gap-4 mt-4"
                >
                    <a
                        href="/skills"
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-semibold shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition"
                    >
                        Explore Skills
                    </a>

                    <a
                        href="/projects"
                        className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition"
                    >
                        View Projects
                    </a>
                </motion.div>

                {/* ⬇️ Scroll hint */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex items-center gap-2 text-white/60 mt-10 text-sm sm:text-base"
                >
                    <ArrowDownCircle className="w-5 h-5 text-cyan-400" />
                    Scroll to explore the Verse
                </motion.div>
            </div>
        </section>
    );
}
