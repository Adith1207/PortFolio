"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-6 sm:px-10 md:px-20 overflow-hidden">
      {/* 💫 Left Side - Bio Section */}
      <div className="max-w-xl flex flex-col items-center md:items-start space-y-6 z-10">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="relative text-5xl sm:text-6xl md:text-7xl font-black leading-tight tracking-tight whitespace-nowrap text-center md:text-left drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]"
        >
          <span className="relative">
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
              Adith{" "}
            </span>
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]">
              Narayan{" "}
            </span>
            <span className="text-purple-400 drop-shadow-[0_0_16px_rgba(180,0,255,0.8)]">
              G
            </span>
          </span>
        </motion.h1>

        {/* 🌌 Short Bio */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-white/80 bold italic text-lg sm:text-xl leading-relaxed max-w-md text-center md:text-left"
        >
          I’m a passionate creator who blends{" "}
          <span className="text-cyan-400">logic</span> and{" "}
          <span className="text-pink-400">imagination</span> to build
          experiences that feel alive. From designing interactive interfaces to
          coding real-world systems, I love bringing{" "}
          <span className="text-fuchsia-400">ideas to life</span> that connect
          technology and emotion.
        </motion.p>

        {/* 🚀 Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap items-center gap-4 mt-6"
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
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 text-white/60 mt-10 text-sm sm:text-base"
        >
          <ArrowDownCircle className="w-5 h-5 text-cyan-400" />
          Scroll to explore the Verse
        </motion.div>
      </div>

      {/* 🖼️ Right Side - Image */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="relative mt-12 md:mt-0 md:-ml-32 z-0"
      >
        <div className="relative w-[340px] h-[430px] sm:w-[420px] sm:h-[520px] overflow-hidden rounded-3xl shadow-xl shadow-black/30">
          <Image
            src="/profile2.jpeg"
            alt="Adith Narayan G"
            width={500}
            height={600}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
