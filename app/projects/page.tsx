"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { projectsData } from "../data/projectsData";
import CosmicBackground from "@/app/components/CosmicBackground";
import { Github } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  const categories = ["All", "Web", "Embedded", "AI"];

  return (
    <main className="relative min-h-screen overflow-hidden text-white px-6 sm:px-10 lg:px-20 py-24">
      <CosmicBackground />

      {/* 🔭 Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
      >
        Projects Universe 🚀
      </motion.h1>

      {/* 🔮 Filter Bar */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 ${
              filter === cat
                ? "bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 text-black font-bold"
                : "text-white/70 hover:text-white hover:border-white/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 🌌 Projects Grid */}
      <div
        className="
          grid 
          sm:grid-cols-1 
          md:grid-cols-2 
          xl:grid-cols-2 
          gap-14 
          max-w-[1500px] 
          mx-auto 
          md:-translate-x-10 
          xl:-translate-x-16
        "
      >
        {filteredProjects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="
              relative 
              bg-white/5 
              backdrop-blur-md 
              border border-white/10 
              rounded-3xl 
              p-8 
              hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] 
              transition-all 
              w-full 
              flex flex-col 
              items-start
              gap-6
            "
          >
            {/* 🖼️ Image on Top */}
            <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden">
              <Image
                src={proj.image}
                alt={proj.title}
                width={800}
                height={500}
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-700 rounded-2xl"
              />
            </div>

            {/* 📜 Text Below */}
            <div className="flex flex-col justify-between w-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {proj.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-400/30 to-fuchsia-400/30 text-white/90 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={proj.github}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
