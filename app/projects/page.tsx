"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import CosmicBackground from "@/app/components/CosmicBackground";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const categories = ["All", "Web", "Embedded", "AI", "Algorithms"];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === filteredProjects.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  if (!isClient) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center text-white flex-grow">
        <p className="text-white/50 text-lg animate-pulse">
          Initializing Projects Universe 🚀...
        </p>
      </div>
    );
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction > 0 ? 45 : -45,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.8,
        rotateY: direction < 0 ? 45 : -45,
      };
    },
  };

  return (
    <div className="relative w-full h-full flex-grow flex flex-col items-center justify-center text-white py-4 sm:py-8 lg:py-12 z-20">
      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center mb-6 lg:mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_25px_rgba(255,105,180,0.4)] tracking-tight mb-4 text-center"
        >
          My Universe 🚀
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-neutral-400 text-lg md:text-xl max-w-2xl text-center"
        >
          Explore the constellations of code I&apos;ve built across various domains.
        </motion.p>
      </div>

      {/* Enhanced Filter Bar */}
      <div className="relative z-10 flex flex-wrap justify-center gap-3 mb-8 lg:mb-10 max-w-3xl mx-auto">
        <div className="bg-white/5 p-2 rounded-full backdrop-blur-md border border-white/10 flex flex-wrap justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="relative px-6 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300"
            >
              {filter === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/80 to-purple-600/80 shadow-[0_0_20px_rgba(168,85,247,0.5)] -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  filter === cat
                    ? "text-white drop-shadow-md"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {cat}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto perspective-1000">
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/50 text-xl font-light text-center"
          >
            No projects found in this sector.
          </motion.div>
        ) : (
          <div className="relative w-full flex items-center justify-between gap-3 lg:gap-6 px-1 lg:px-2">
            {/* Prev Button Desktop */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="hidden md:flex flex-shrink-0 z-20 items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md transition-all drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-white/80" />
            </motion.button>

            {/* Display the Current Project Card */}
            <div className="relative flex-grow flex justify-center items-center w-0">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    rotateY: { duration: 0.5 },
                  }}
                  className="w-full flex justify-center"
                >
                  <div className="relative w-full bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-xl border border-white/[0.15] rounded-[2rem] p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] lg:shadow-[0_0_100px_rgba(139,92,246,0.15)] overflow-hidden group max-w-5xl">
                    {/* Inner glowing orb effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px] -z-10 group-hover:bg-cyan-500/30 transition-colors duration-700 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[120px] -z-10 group-hover:bg-fuchsia-500/20 transition-colors duration-700 pointer-events-none" />

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-center">
                      {/* Image Side */}
                      <div className="w-full lg:w-1/2 flex-shrink-0">
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/20 shadow-2xl">
                          <Image
                            src={filteredProjects[currentIndex].image}
                            alt={filteredProjects[currentIndex].title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                            className="object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                          />
                          {/* Dark gradient overlay for a slight vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-6">
                        <div>
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="flex items-center gap-3 mb-4"
                          >
                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                              {filteredProjects[currentIndex].category}
                            </span>
                            <span className="text-white/40 text-sm font-medium">
                              Project {currentIndex + 1} of {filteredProjects.length}
                            </span>
                          </motion.div>

                          {(() => {
                            const fullTitle = filteredProjects[currentIndex].title;
                            let main = fullTitle;
                            let sub = null;
                            const separators = [" – ", " - ", ": ", " — "];
                            for (const sep of separators) {
                              if (fullTitle.includes(sep)) {
                                const parts = fullTitle.split(sep);
                                main = parts[0];
                                sub = parts.slice(1).join(sep);
                                break;
                              }
                            }
                            if (!sub && fullTitle.includes(" using ")) {
                              const parts = fullTitle.split(" using ");
                              main = parts[0];
                              sub = "using " + parts.slice(1).join(" using ");
                            }

                            return (
                              <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="mb-6 flex flex-col gap-2"
                              >
                                <h3 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-md">
                                  {main}
                                </h3>
                                {sub && (
                                  <h4 className="text-xl md:text-2xl text-cyan-400 font-bold leading-snug drop-shadow-md">
                                    {sub}
                                  </h4>
                                )}
                              </motion.div>
                            );
                          })()}

                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-neutral-300 text-base md:text-lg leading-relaxed line-clamp-4 md:line-clamp-6"
                          >
                            {filteredProjects[currentIndex].description}
                          </motion.p>
                        </div>

                        {/* Tech Stack Bubbles */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          className="flex flex-wrap gap-2 pt-2"
                        >
                          {filteredProjects[currentIndex].tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1.5 text-xs md:text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-white/80 backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                            >
                              {t}
                            </span>
                          ))}
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.6, duration: 0.5 }}
                          className="pt-4"
                        >
                          <a
                            href={filteredProjects[currentIndex].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                          >
                            <Github className="w-5 h-5" /> View on GitHub
                          </a>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button Desktop */}
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="hidden md:flex flex-shrink-0 z-20 items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 backdrop-blur-md transition-all drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-white/80" />
            </motion.button>
          </div>
        )}

        {/* Mobile Navigation Controls & Pips */}
        {filteredProjects.length > 0 && (
          <div className="flex items-center justify-center gap-6 mt-6 lg:mt-8 z-20">
            {/* Mobile Prev */}
            <button
              onClick={handlePrev}
              className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6 text-white/80" />
            </button>

            {/* Pips */}
            <div className="flex gap-2.5">
              {filteredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 ease-out ${
                    currentIndex === idx
                      ? "w-8 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                      : "w-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile Next */}
            <button
              onClick={handleNext}
              className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all active:scale-90"
            >
              <ChevronRight className="w-6 h-6 text-white/80" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
