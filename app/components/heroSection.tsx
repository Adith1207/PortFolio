"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between 
                 min-h-screen px-4 sm:px-8 md:px-12 overflow-hidden"
      style={{ overscrollBehavior: "none" }}
    >
      {/* 🌌 Left Section */}
      <div
        className="max-w-xl flex flex-col items-center md:items-start space-y-6 z-20 
                   md:-ml-10"
      >
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="relative text-5xl sm:text-6xl md:text-7xl font-black leading-tight 
                     tracking-tight whitespace-nowrap text-center md:text-left 
                     drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]"
        >
          <span className="relative">
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]">
              Adith{" "}
            </span>
            <span
              className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-400 
                         bg-clip-text text-transparent 
                         drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]"
            >
              Narayan{" "}
            </span>
            <span className="text-purple-400 drop-shadow-[0_0_16px_rgba(180,0,255,0.8)]">
              G
            </span>
          </span>
        </motion.h1>

        {/* 💫 Short Bio */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-md 
                     text-center md:text-left"
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
            href="/about"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 
                       text-white font-semibold shadow-[0_0_20px_rgba(255,0,255,0.4)] 
                       hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition"
          >
            More About Me
          </a>

          <a
            href="/projects"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold 
                       hover:bg-white/10 transition"
          >
            View Projects
          </a>
        </motion.div>

        {/* 🧾 DOWNLOAD RESUME */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8"
        >
          <a
            href="/resume.pdf"
            download="Adith_Narayan_Resume.pdf"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-full 
                       bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 
                       text-black font-extrabold text-lg tracking-wide uppercase 
                       shadow-[0_0_35px_rgba(255,165,0,0.5)] 
                       hover:shadow-[0_0_45px_rgba(255,140,0,0.8)] 
                       hover:scale-105 transition-transform duration-300"
          >
            <Download className="w-6 h-6" />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* 🪐 Right Section - Responsive Hero Image */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        className="relative mt-12 md:mt-0 md:-ml-40 z-10"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="
            relative
            w-[85vw] max-w-[430px]
            h-[60vh] max-h-[550px]
            sm:w-[460px] sm:h-[560px]
            lg:w-[540px] lg:h-[640px]
            rounded-[2rem] overflow-hidden border-[3px] border-white/70
            shadow-[0_0_50px_rgba(255,255,255,0.3)]
            before:content-[''] before:absolute before:inset-0 
            before:rounded-[2rem]
            before:bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent_60%)]
            before:z-10
          "
          style={{
            boxShadow:
              "0 0 25px rgba(255,255,255,0.3), 0 0 80px rgba(180,0,255,0.4), inset 0 0 20px rgba(255,255,255,0.1)",
          }}
        >
          <Image
            src="/final_design.png"
            alt="Adith Narayan G"
            fill
            className="object-cover scale-110"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
