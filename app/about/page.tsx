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

      {/* --- 🌟 Experience Section --- */}
      <section className="relative py-20 px-8 sm:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
        >
          Internship Experience
        </motion.h2>

        <div className="relative max-w-4xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-[3px] before:bg-gradient-to-b before:from-cyan-400 via-fuchsia-400 to-pink-400">
          {[
            {
              company: "Axiatix Consulting Services",
              role: "Software Product Development Intern",
              duration: "May 27 – June 30 2025",
              desc: [
                "Developed backend services using Flask with API creation and integration.",
                "Built responsive cross-platform apps in Flutter using PyTorch and Dart.",
                "Integrated LLMs and RAG pipelines for intelligent language-based features.",
              ],
              glow: "from-cyan-400 via-blue-400 to-fuchsia-400",
            },
            {
              company: "Qualitrix",
              role: "Marketing & Web Development Intern",
              duration: "april 30 - june 26 2025",
              desc: [
                "Collaborated with marketing team to enhance company outreach.",
                "Proposed & organized hackathons to attract developer engagement.",
                "Designed and coded my imagination of a promotional event webpage into reality.",
              ],
              glow: "from-pink-400 via-fuchsia-400 to-violet-400",
            },
          ].map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative mb-16 flex flex-col md:flex-row items-center ${
                i % 2 === 0 ? "md:pl-[55%]" : "md:pr-[55%]"
              }`}
            >
              {/* Glowing node */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r ${exp.glow} shadow-[0_0_20px_rgba(255,255,255,0.6)] border-2 border-white/40`}
              />

              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition w-full md:w-[80%]">
                <h3
                  className={`text-2xl font-bold bg-gradient-to-r ${exp.glow} bg-clip-text text-transparent`}
                >
                  {exp.company}
                </h3>
                <p className="text-lg font-semibold text-white mt-1">
                  {exp.role}
                </p>
                <p className="text-sm text-white/60 mb-4">{exp.duration}</p>
                <ul className="list-disc list-inside space-y-2 text-white/80 text-sm">
                  {exp.desc.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3️⃣ Achievements Section (Full + Matching Hobbies Style) --- */}
      <section className="relative py-28 px-8 sm:px-12 lg:px-24 text-center overflow-hidden">
        {/* Cosmic backdrop */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_35%,rgba(0,255,255,0.08)_0%,transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,0,255,0.06)_0%,transparent_70%)] blur-3xl" />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-extrabold mb-20 bg-gradient-to-r from-amber-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Achievements
        </motion.h2>

        {/* 3 per row layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              img: "/Certificates/Innoventure.jpeg",
              title: "Innoventure",
              desc: "Top 200 in National Level Innoventure Innovation Challenge.",
              glow: "from-cyan-400/30 via-blue-400/20 to-fuchsia-400/30",
            },
            {
              img: "/Certificates/Maths_olympiad.jpeg",
              title: "International Maths Olympiad",
              desc: "Bronze Medalist – for excellence in analytical problem-solving.",
              glow: "from-pink-400/30 via-fuchsia-400/20 to-violet-400/30",
            },
            {
              img: "/Certificates/Ted_ed.jpeg",
              title: "TED-Ed Speaker",
              desc: "Delivered an international TED-Ed talk on recycling semi-conductor chips which was a burning issue back then in COVID.",
              glow: "from-emerald-400/30 via-cyan-400/20 to-sky-400/30",
            },
            {
              img: "/Certificates/Business_proposal.jpeg",
              title: "School Enterprise Challenge",
              desc: "Created a sustainable business initiative during high school.",
              glow: "from-lime-400/30 via-emerald-400/20 to-cyan-400/30",
            },
            {
              img: "/Certificates/cricket.jpeg",
              title: "U-14 Cricket Champion",
              desc: "Led the district team as captain to victory in the U-14 tournament.",
              glow: "from-amber-400/30 via-rose-400/20 to-red-400/30",
            },
            {
              img: "/Certificates/cmca.jpeg",
              title: "Active CMCA Member",
              desc: "Contributed to civic and ethical leadership programs in 9th grade.",
              glow: "from-teal-400/30 via-cyan-400/20 to-fuchsia-400/30",
            },
            {
              img: "/Certificates/art.jpeg",
              title: "Zonal Art Competition",
              desc: "2nd Place in Rainbow Art & Craft Organisation’s zonal contest.",
              glow: "from-pink-400/30 via-purple-400/20 to-violet-400/30",
            },
            {
              img: "/Certificates/leader.jpeg",
              title: "School Head Boy",
              desc: "Elected democratically as Head Boy – leading 1200+ students.",
              glow: "from-fuchsia-400/30 via-pink-400/20 to-rose-400/30",
            },
          ].map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: "easeOut" }}
              className="relative p-[2px] rounded-2xl bg-gradient-to-r group"
              style={{
                backgroundImage: `linear-gradient(to right, ${ach.glow
                  .replace("from-", "")
                  .replace("to-", "")
                  .replace("via-", "")})`,
              }}
            >
              {/* Glass card */}
              <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4 h-full text-left overflow-hidden group-hover:border-white/20 transition">
                {/* Glow on hover */}
                <div
                  className={`absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition bg-gradient-to-r ${ach.glow}`}
                />

                {/* Thumbnail */}
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={ach.img}
                    alt={ach.title}
                    width={500}
                    height={280}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold mb-2 text-white/90">
                    {ach.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 4️⃣ Hobbies Section --- */}
      <section className="relative py-24 px-8 sm:px-12 lg:px-24 text-center overflow-hidden">
        {/* Subtle nebula background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,255,0.08)_0%,transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,0,255,0.06)_0%,transparent_70%)] blur-3xl" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent"
        >
          Hobbies & Interests
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: "🎧",
              title: "Music",
              desc: "I’m deeply connected to rhythm and melody — music fuels my creativity and helps me focus.",
              glow: "from-cyan-400/30 via-blue-400/20 to-fuchsia-400/30",
            },
            {
              icon: "📸",
              title: "Photography",
              desc: "Capturing moments that tell stories. I love framing light, mood, and emotion in every shot.",
              glow: "from-pink-400/30 via-fuchsia-400/20 to-violet-400/30",
            },
            {
              icon: "💻",
              title: "Programming",
              desc: "Turning ideas into digital reality. From embedded systems to AI, coding is my creative art form.",
              glow: "from-emerald-400/30 via-cyan-400/20 to-sky-400/30",
            },
            {
              icon: "🥊",
              title: "Fitness & Boxing",
              desc: "Discipline and resilience come alive here — the boxing ring keeps me grounded and unstoppable.",
              glow: "from-amber-400/30 via-rose-400/20 to-red-400/30",
            },
            {
              icon: "🚴‍♂️",
              title: "Cycling",
              desc: "The open road clears my mind. Cycling gives me rhythm, endurance, and time to think freely.",
              glow: "from-lime-400/30 via-emerald-400/20 to-cyan-400/30",
            },
          ].map((hob, i) => (
            <motion.div
              key={hob.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative p-[2px] rounded-2xl bg-gradient-to-r group"
              style={{
                backgroundImage: `linear-gradient(to right, ${hob.glow
                  .replace("from-", "")
                  .replace("to-", "")
                  .replace("via-", "")})`,
              }}
            >
              {/* inner content */}
              <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 h-full text-left overflow-hidden group-hover:border-white/20 transition">
                {/* glow behind icon */}
                <div
                  className={`absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition bg-gradient-to-r ${hob.glow}`}
                />

                <div className="relative flex flex-col items-start z-10">
                  <div className="text-5xl mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    {hob.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white/90">
                    {hob.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {hob.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
