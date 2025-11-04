'use client';

import SkillBadge from '@/app/components/skillBadge';
import CosmicBackground from '@/app/components/CosmicBackground';
import {
    Rocket, Cpu, Terminal, Braces, Coffee, PenTool, Database,
    FileCode, Palette, FlaskConical, Atom, Wind, Moon, GitBranch,
    Server, Microscope, Camera, BarChart3
} from 'lucide-react';

const skills = [
    { name: 'C', Icon: Braces, gradient: 'c' },
    { name: 'C++', Icon: Braces, gradient: 'cpp' },
    { name: 'Python', Icon: FileCode, gradient: 'python' },
    { name: 'Bash', Icon: Terminal, gradient: 'bash' },
    { name: 'Java', Icon: Coffee, gradient: 'java' },

    { name: 'HTML', Icon: FileCode, gradient: 'html' },
    { name: 'CSS', Icon: Palette, gradient: 'css' },
    { name: 'React', Icon: Atom, gradient: 'react' },
    { name: 'Tailwind', Icon: Wind, gradient: 'tailwind' },
    { name: 'Next.js', Icon: Moon, gradient: 'next' },

    { name: 'Git', Icon: GitBranch, gradient: 'git' },
    { name: 'Linux', Icon: Server, gradient: 'linux' },
    { name: 'Figma', Icon: PenTool, gradient: 'figma' },
    { name: 'Canva', Icon: Palette, gradient: 'canva' },

    { name: 'MySQL', Icon: Database, gradient: 'mysql' },
    { name: 'Flask', Icon: FlaskConical, gradient: 'flask' },
    { name: 'PyTorch', Icon: Microscope, gradient: 'pytorch' },
    { name: 'OpenCV', Icon: Camera, gradient: 'opencv' },
    { name: 'Pandas', Icon: BarChart3, gradient: 'pandas' },

    { name: 'Arduino', Icon: Cpu, gradient: 'arduino' },
    { name: 'MATLAB', Icon: Microscope, gradient: 'matlab' },
    { name: 'Dart', Icon: FileCode, gradient: 'dart' },
    { name: 'Flutter', Icon: Atom, gradient: 'flutter' },
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

                <p className="text-white/70 max-w-2xl italic">
                    The Journey of Knowledge So Far...
                    A glimpse into everything I’ve learned, explored, and conquered along the way!
                </p>

                {/* Glowing cosmic frame */}
                <div className="relative mt-10">
                    <div className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-pink-500/10 blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 rounded-[3rem] border border-white/10 animate-pulse opacity-70" />

                    {/* Skills Grid */}
                    <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
                        {skills.map((s) => (
                            <SkillBadge key={s.name} name={s.name} Icon={s.Icon} gradient={s.gradient as any} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
