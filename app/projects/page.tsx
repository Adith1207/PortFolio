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
    <main className="relative min-h-screen overflow-hidden text-white px-8 sm:px-12 lg:px-24 py-24">
      <CosmicBackground />

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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredProjects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] transition"
          >
            {/* Neon border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition bg-gradient-to-r from-cyan-400/30 via-fuchsia-400/20 to-pink-400/30" />

            {/* Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
              <Image
                src={proj.image}
                alt={proj.title}
                width={500}
                height={280}
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold text-white/90 mb-2">
              {proj.title}
            </h3>
            <p className="text-white/70 text-sm mb-4">{proj.description}</p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-400/30 to-fuchsia-400/30 text-white/90 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={proj.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
