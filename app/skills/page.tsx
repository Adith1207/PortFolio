"use client";

import SkillBadge from "@/app/components/skillBadge";
import CosmicBackground from "@/app/components/CosmicBackground";
import {
  Rocket,
  Cpu,
  Terminal,
  Braces,
  Coffee,
  PenTool,
  Database,
  FileCode,
  Palette,
  FlaskConical,
  Atom,
  Wind,
  Moon,
  GitBranch,
  Server,
  Microscope,
  Camera,
  BarChart3,
  Users,
  MessageCircle,
  Target,
  Brain,
  Zap,
  Sparkles,
} from "lucide-react";

const technicalSkills = [
  { name: "C", Icon: Braces, gradient: "c" },
  { name: "C++", Icon: Braces, gradient: "cpp" },
  { name: "Python", Icon: FileCode, gradient: "python" },
  { name: "Bash", Icon: Terminal, gradient: "bash" },
  { name: "Java", Icon: Coffee, gradient: "java" },

  { name: "HTML", Icon: FileCode, gradient: "html" },
  { name: "CSS", Icon: Palette, gradient: "css" },
  { name: "React", Icon: Atom, gradient: "react" },
  { name: "Tailwind", Icon: Wind, gradient: "tailwind" },
  { name: "Next.js", Icon: Moon, gradient: "next" },

  { name: "Git", Icon: GitBranch, gradient: "git" },
  { name: "Linux", Icon: Server, gradient: "linux" },
  { name: "Figma", Icon: PenTool, gradient: "figma" },
  { name: "Canva", Icon: Palette, gradient: "canva" },

  { name: "MySQL", Icon: Database, gradient: "mysql" },
  { name: "Flask", Icon: FlaskConical, gradient: "flask" },
  { name: "PyTorch", Icon: Microscope, gradient: "pytorch" },
  { name: "OpenCV", Icon: Camera, gradient: "opencv" },
  { name: "Pandas", Icon: BarChart3, gradient: "pandas" },

  { name: "Arduino", Icon: Cpu, gradient: "arduino" },
  { name: "MATLAB", Icon: Microscope, gradient: "matlab" },
  { name: "Dart", Icon: FileCode, gradient: "dart" },
  { name: "Flutter", Icon: Atom, gradient: "flutter" },
];

const softSkills = [
  {
    title: "Leadership",
    desc: "Guided teams during hackathons, projects, and as Head Boy — fostering collaboration and vision.",
    icon: Users,
    glow: "from-amber-400/30 via-pink-400/20 to-fuchsia-400/30",
  },
  {
    title: "Communication",
    desc: "Strong public speaker and team communicator — able to convey ideas clearly and inspire people effectively.",
    icon: MessageCircle,
    glow: "from-cyan-400/30 via-blue-400/20 to-fuchsia-400/30",
  },
  {
    title: "Problem Solving",
    desc: "Love breaking down complex challenges into creative, structured solutions — both in code and life.",
    icon: Brain,
    glow: "from-emerald-400/30 via-cyan-400/20 to-sky-400/30",
  },
  {
    title: "Teamwork",
    desc: "Believe in shared success — leading by example while ensuring every voice in the team is heard.",
    icon: Target,
    glow: "from-lime-400/30 via-emerald-400/20 to-cyan-400/30",
  },
  {
    title: "Adaptability",
    desc: "Comfortable learning new tech, adjusting to change, and staying calm under pressure.",
    icon: Zap,
    glow: "from-fuchsia-400/30 via-pink-400/20 to-rose-400/30",
  },
  {
    title: "Creativity",
    desc: "Enjoy merging logic with imagination — crafting unique solutions, designs, and ideas.",
    icon: Sparkles,
    glow: "from-violet-400/30 via-purple-400/20 to-pink-400/30",
  },
];

export default function SkillsPage() {
  return (
    <div className="relative min-h-[calc(100vh-6rem)]">
      <CosmicBackground />

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Rocket className="text-cyan-400 w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]" />
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Skills Galaxy
            </span>
          </h1>
        </div>

        <p className="text-white/70 max-w-2xl italic mb-8">
          The Journey of Knowledge So Far... A glimpse into everything I’ve
          learned, explored, and evolved into along the way!
        </p>

        {/* === TECHNICAL SKILLS === */}
        <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text mb-6">
          Technical Skills
        </h2>

        {/* Glowing cosmic frame */}
        <div className="relative mb-20">
          <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-pink-500/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 rounded-[3rem] border border-white/10 animate-pulse opacity-70" />

          {/* Skills Grid */}
          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
            {technicalSkills.map((s) => (
              <SkillBadge
                key={s.name}
                name={s.name}
                Icon={s.Icon}
                gradient={s.gradient as any}
              />
            ))}
          </div>
        </div>

        {/* === SOFT SKILLS === */}
        <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-400 to-cyan-400 bg-clip-text mb-10">
          Soft Skills
        </h2>

        {/* Soft Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {softSkills.map((skill, i) => (
            <div
              key={skill.title}
              className={`relative p-[2px] rounded-2xl bg-gradient-to-r ${skill.glow} group`}
            >
              <div className="relative rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 h-full text-left overflow-hidden group-hover:border-white/20 transition">
                <div
                  className={`absolute top-0 left-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-40 blur-2xl transition bg-gradient-to-r ${skill.glow}`}
                />
                <div className="relative flex flex-col items-start z-10">
                  <skill.icon className="w-10 h-10 mb-4 text-white/90 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
                  <h3 className="text-xl font-semibold mb-2 text-white/90">
                    {skill.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
