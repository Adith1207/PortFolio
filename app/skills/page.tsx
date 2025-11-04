'use client';

import { motion } from 'framer-motion';
import SkillBadge from '@/app/components/skillBadge';

// Lucide icons (stylized, non-brand)
import {
    Rocket, Cpu, Terminal, Braces, Coffee, PenTool, Database,
    FileCode, Palette, FlaskConical, Atom, Wind, Moon, GitBranch,
    Server, Microscope, Camera, BarChart3, Diamond, PanelsTopLeft
} from 'lucide-react';

// Optional: re-use your CosmicBackground
import CosmicBackground from '@/app/components/CosmicBackground';

const skills = [
    // --- Core / Langs ---
    { name: 'C',           Icon: Braces,        gradient: 'bg-gradient-to-r from-sky-400/30 via-cyan-400/20 to-blue-400/30' },
    { name: 'C++',         Icon: Braces,        gradient: 'bg-gradient-to-r from-blue-400/30 via-violet-400/20 to-fuchsia-400/30' },
    { name: 'Python',      Icon: FileCode,      gradient: 'bg-gradient-to-r from-yellow-300/30 via-emerald-300/20 to-cyan-300/30' },
    { name: 'Bash',        Icon: Terminal,      gradient: 'bg-gradient-to-r from-teal-300/30 via-emerald-300/20 to-lime-300/30' },
    { name: 'Java',        Icon: Coffee,        gradient: 'bg-gradient-to-r from-orange-400/30 via-rose-400/20 to-amber-400/30' },

    // --- Web ---
    { name: 'HTML',        Icon: FileCode,      gradient: 'bg-gradient-to-r from-orange-400/30 via-pink-400/20 to-rose-400/30' },
    { name: 'CSS',         Icon: Palette,       gradient: 'bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-violet-400/30' },
    { name: 'React',       Icon: Atom,          gradient: 'bg-gradient-to-r from-cyan-400/30 via-sky-400/20 to-teal-400/30' },
    { name: 'Tailwind',    Icon: Wind,          gradient: 'bg-gradient-to-r from-teal-400/30 via-cyan-400/20 to-emerald-400/30' },
    { name: 'Next.js',     Icon: Moon,          gradient: 'bg-gradient-to-r from-slate-300/30 via-zinc-300/20 to-neutral-300/30' },
    { name: 'Dart',        Icon: Diamond,       gradient: 'bg-gradient-to-r from-sky-300/30 via-cyan-300/20 to-blue-300/30' },
    { name: 'Flutter',     Icon: PanelsTopLeft, gradient: 'bg-gradient-to-r from-indigo-300/30 via-sky-300/20 to-cyan-300/30' },

    // --- Tools / Design ---
    { name: 'Git',         Icon: GitBranch,     gradient: 'bg-gradient-to-r from-rose-400/30 via-orange-400/20 to-amber-400/30' },
    { name: 'Linux',       Icon: Server,        gradient: 'bg-gradient-to-r from-emerald-400/30 via-teal-400/20 to-sky-400/30' },
    { name: 'Figma',       Icon: PenTool,       gradient: 'bg-gradient-to-r from-fuchsia-400/30 via-pink-400/20 to-rose-400/30' },
    { name: 'Canva',       Icon: Palette,       gradient: 'bg-gradient-to-r from-cyan-400/30 via-sky-400/20 to-indigo-400/30' },

    // --- Data / ML / Embedded vibe ---
    { name: 'MySQL',       Icon: Database,      gradient: 'bg-gradient-to-r from-cyan-400/30 via-blue-400/20 to-indigo-400/30' },
    { name: 'Flask',       Icon: FlaskConical,  gradient: 'bg-gradient-to-r from-violet-400/30 via-fuchsia-400/20 to-pink-400/30' },
    { name: 'PyTorch',     Icon: Microscope,    gradient: 'bg-gradient-to-r from-red-400/30 via-rose-400/20 to-orange-400/30' },
    { name: 'OpenCV',      Icon: Camera,        gradient: 'bg-gradient-to-r from-emerald-400/30 via-teal-400/20 to-cyan-400/30' },
    { name: 'Pandas',      Icon: BarChart3,     gradient: 'bg-gradient-to-r from-amber-400/30 via-lime-400/20 to-emerald-400/30' },

    // --- Bonus vibe ---
    { name: 'Arduino',     Icon: Cpu,           gradient: 'bg-gradient-to-r from-teal-400/30 via-cyan-400/20 to-sky-400/30' },
    { name: 'MATLAB',      Icon: Microscope,    gradient: 'bg-gradient-to-r from-yellow-400/30 via-amber-400/20 to-orange-400/30' },
];

export default function SkillsPage() {
    return (
        <div className="relative min-h-[calc(100vh-6rem)]">
            <CosmicBackground />

            <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
                {/* Hero */}
                <div className="flex items-center gap-3 mb-6">
                    <Rocket className="text-cyan-400 w-6 h-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]" />
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide">
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              Skills Galaxy
            </span>
                    </h1>
                </div>
                <p className="text-white/70 max-w-2xl bold italic">
                    The Journey of Knowledge So Far...
                    A glimpse into everything I’ve learned, explored, and conquered along the way!
                </p>

                {/* Floating “gravity” ring for vibe */}
                <div className="relative mt-10">
                    <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-pink-500/10 blur-3xl" />
                    <motion.div
                        className="pointer-events-none absolute inset-0 rounded-[3rem] border border-white/10"
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Skills Grid (responsive) */}
                    <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
                        {skills.map((s, i) => (
                            <motion.div
                                key={s.name}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.04, duration: 0.4 }}
                            >
                                <SkillBadge name={s.name} Icon={s.Icon} gradient={s.gradient} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
