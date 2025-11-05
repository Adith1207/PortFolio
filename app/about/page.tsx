"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Trophy,
  BookOpen,
  Star,
  Music,
  Camera,
  Code,
  Heart,
} from "lucide-react";
import CosmicBackground from "@/app/components/CosmicBackground";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden text-white">
      <CosmicBackground />

      {/* --- 1️⃣ Quote Section --- */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[70vh] px-8 sm:px-12 lg:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="z-10 max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold italic leading-tight text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text drop-shadow-[0_0_30px_rgba(255,0,255,0.4)]">
            “It ain’t about how hard you can hit — it’s about how hard you can
            get hit and keep moving forward.”
          </h1>
          <p className="mt-6 text-white/80 text-lg bold">
            The quote that drives my life and my code. Every line, every
            project, every challenge — is a step forward.
          </p>
        </motion.div>

        {/* 🥊 Rocky Image — wider but not taller */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-10 md:mt-0 md:-ml-8"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-[-50px] bg-[radial-gradient(circle,rgba(255,0,255,0.15)_0%,transparent_70%)] blur-3xl" />

          {/* Wider, same height ratio */}
          <div className="relative w-[320px] sm:w-[420px] md:w-[420px] overflow-hidden rounded-2xl border-2 border-pink-400/30 shadow-[0_0_40px_rgba(255,0,255,0.25)]">
            <Image
              src="/rocky.jpg"
              alt="Rocky Balboa Boxing"
              width={500}
              height={280}
              className="object-cover w-full h-full opacity-90 hover:opacity-100 transition"
            />
          </div>
        </motion.div>
      </section>

      {/* --- 2️⃣ Education Section --- */}
      <section className="relative py-16 px-8 sm:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
        >
          Education Journey
        </motion.h2>

        {/* 🏫 School Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative md:w-1/2 w-full flex justify-center"
          >
            <div className="absolute inset-[-50px] bg-[radial-gradient(circle,rgba(0,255,255,0.15)_0%,transparent_70%)] blur-3xl" />
            <div className="relative w-[320px] sm:w-[400px] md:w-[850px] overflow-hidden rounded-2xl border-2 border-cyan-400/30 shadow-[0_0_50px_rgba(0,255,255,0.3)]">
              <Image
                src="/school.jpg"
                alt="The ashok Leyland School"
                width={450}
                height={280}
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 w-full z-10 text-left"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text mb-3">
              Schooling
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] mb-4">
              The Ashok Leyland School
            </p>
            <p className="text-white/70 mb-5 leading-relaxed">
              My school years laid the foundation of discipline, curiosity, and
              teamwork — values that continue to drive me every day. From
              leading the school cricket team to serving as Head Boy, I learned
              what true leadership means: balancing empathy with
              decision-making, communication with conviction, and ambition with
              unity. Beyond classrooms and textbooks, science exhibitions and
              team victories taught me that growth happens when we dare to lead,
              learn, and lift others along the way.
            </p>
            <p className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-sm font-semibold text-black/90 shadow-lg">
              Scored 93.8% in 12th Grade
            </p>
          </motion.div>
        </section>

        {/* 🎓 College Section */}
        <section className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative md:w-1/2 w-full flex justify-center"
          >
            <div className="absolute inset-[-50px] bg-[radial-gradient(circle,rgba(255,0,255,0.15)_0%,transparent_70%)] blur-3xl" />
            <div className="relative w-[320px] sm:w-[400px] md:w-[650px] overflow-hidden rounded-2xl border-2 border-pink-400/30 shadow-[0_0_50px_rgba(255,0,255,0.3)]">
              <Image
                src="/college.jpg"
                alt="Kongu Engineering College"
                width={450}
                height={280}
                className="object-cover w-full h-full opacity-90 hover:opacity-100 transition"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-1/2 w-full z-10 text-left"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-400 to-violet-400 bg-clip-text mb-3">
              College
            </h3>
            <p className="text-2xl sm:text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] mb-4">
              Amrita Vishwa Vidyapeetham,Coimbatore
            </p>
            <p className="text-white/70 mb-5 leading-relaxed">
              My years at AVV have been a transformative chapter of exploration
              and innovation. Pursuing Computer Science Engineering wasn’t just
              an academic choice — it was a journey of constant learning,
              late-night coding sessions, and turning ideas into reality. From
              building projects that merged hardware with AI to leading
              hackathon teams, every experience honed my problem-solving mindset
              and creative curiosity. College life taught me the art of
              collaboration, perseverance through failure, and the thrill of
              bringing imagination to life — shaping me into a passionate
              engineer ready to make an impact beyond the classroom.
            </p>
            <p className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-violet-400 text-sm font-semibold text-black/90 shadow-lg">
              Current CGPA: 8.94 / 10
            </p>
          </motion.div>
        </section>
      </section>

      {/* --- 3️⃣ Achievements Section --- */}
      <section className="relative py-24 px-8 sm:px-12 lg:px-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold mb-10 bg-gradient-to-r from-amber-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Achievements
        </motion.h2>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { icon: Trophy, text: "Hackathon Finalist – National Level" },
            { icon: Star, text: "Best Project Award – KEC TechFest 2024" },
            { icon: Code, text: "Developed AI-based Gesture Control System" },
          ].map((ach, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 text-left hover:border-white/20 transition"
            >
              <ach.icon className="w-8 h-8 text-fuchsia-400 mb-3" />
              <p className="text-white/80">{ach.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4️⃣ Hobbies Section --- */}
      <section className="relative py-24 px-8 sm:px-12 lg:px-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold mb-10 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
        >
          Hobbies & Interests
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {[
            { icon: Music, label: "Music" },
            { icon: Camera, label: "Photography" },
            { icon: Code, label: "Programming" },
            { icon: Heart, label: "Fitness & Boxing" },
          ].map((hob, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition"
            >
              <hob.icon className="w-5 h-5 text-cyan-300" />
              <span className="text-white/80 font-medium">{hob.label}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
