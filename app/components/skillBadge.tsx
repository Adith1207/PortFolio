'use client';

import { type ElementType } from 'react';

// 🎨 Static accent color mapping (Tailwind-safe)
const accentClasses: Record<string, string> = {
    cyan: 'bg-cyan-400/60',
    blue: 'bg-blue-400/60',
    pink: 'bg-pink-400/60',
    violet: 'bg-violet-400/60',
    emerald: 'bg-emerald-400/60',
    rose: 'bg-rose-400/60',
    amber: 'bg-amber-400/60',
    lime: 'bg-lime-400/60',
    sky: 'bg-sky-400/60',
    fuchsia: 'bg-fuchsia-400/60',
};

// 🌈 Static gradient map — no runtime strings, Tailwind-safe
const gradientClasses: Record<string, string> = {
    c: 'bg-gradient-to-r from-sky-400/30 via-cyan-400/20 to-blue-400/30',
    cpp: 'bg-gradient-to-r from-blue-400/30 via-violet-400/20 to-fuchsia-400/30',
    python: 'bg-gradient-to-r from-yellow-300/30 via-emerald-300/20 to-cyan-300/30',
    bash: 'bg-gradient-to-r from-teal-300/30 via-emerald-300/20 to-lime-300/30',
    java: 'bg-gradient-to-r from-orange-400/30 via-rose-400/20 to-amber-400/30',

    html: 'bg-gradient-to-r from-orange-400/30 via-pink-400/20 to-rose-400/30',
    css: 'bg-gradient-to-r from-blue-400/30 via-indigo-400/20 to-violet-400/30',
    react: 'bg-gradient-to-r from-cyan-400/30 via-sky-400/20 to-teal-400/30',
    tailwind: 'bg-gradient-to-r from-teal-400/30 via-cyan-400/20 to-emerald-400/30',
    next: 'bg-gradient-to-r from-slate-300/30 via-zinc-300/20 to-neutral-300/30',

    git: 'bg-gradient-to-r from-rose-400/30 via-orange-400/20 to-amber-400/30',
    linux: 'bg-gradient-to-r from-emerald-400/30 via-teal-400/20 to-sky-400/30',
    figma: 'bg-gradient-to-r from-fuchsia-400/30 via-pink-400/20 to-rose-400/30',
    canva: 'bg-gradient-to-r from-cyan-400/30 via-sky-400/20 to-indigo-400/30',

    mysql: 'bg-gradient-to-r from-cyan-400/30 via-blue-400/20 to-indigo-400/30',
    flask: 'bg-gradient-to-r from-violet-400/30 via-fuchsia-400/20 to-pink-400/30',
    pytorch: 'bg-gradient-to-r from-red-400/30 via-rose-400/20 to-orange-400/30',
    opencv: 'bg-gradient-to-r from-emerald-400/30 via-teal-400/20 to-cyan-400/30',
    pandas: 'bg-gradient-to-r from-amber-400/30 via-lime-400/20 to-emerald-400/30',

    arduino: 'bg-gradient-to-r from-teal-400/30 via-cyan-400/20 to-sky-400/30',
    matlab: 'bg-gradient-to-r from-yellow-400/30 via-amber-400/20 to-orange-400/30',
    dart: 'bg-gradient-to-r from-cyan-400/30 via-sky-400/20 to-blue-400/30',
    flutter: 'bg-gradient-to-r from-blue-400/30 via-cyan-400/20 to-teal-400/30',
};

type SkillBadgeProps = {
    name: string;
    Icon: ElementType;
    gradient: keyof typeof gradientClasses; // strictly typed gradient key
    accent?: keyof typeof accentClasses;
};

export default function SkillBadge({
                                       name,
                                       Icon,
                                       gradient,
                                       accent = 'cyan',
                                   }: SkillBadgeProps) {
    const accentClass = accentClasses[accent];
    const gradientClass = gradientClasses[gradient];

    return (
        <div
            className="group relative rounded-2xl p-[1px] overflow-hidden
                 animate-float transition-transform duration-300 hover:scale-[1.06]"
            aria-label={name}
        >
            {/* Border glow */}
            <div
                className={`absolute inset-0 rounded-2xl opacity-60 blur-xl transition-opacity duration-300 
                    group-hover:opacity-90 ${gradientClass}`}
            />

            {/* Card inner */}
            <div
                className="relative z-10 rounded-2xl bg-white/5 backdrop-blur-xl
                   border border-white/10 px-4 py-5 flex items-center gap-3
                   transition-all duration-300 group-hover:border-white/20"
            >
                <div className="relative">
                    <Icon className="w-7 h-7 text-white/90 group-hover:text-cyan-300 transition-colors duration-300" />
                    <div
                        className={`absolute -inset-2 rounded-full blur-md opacity-30 
                        group-hover:opacity-60 transition-opacity duration-300 ${accentClass}`}
                    />
                </div>

                <span className="font-semibold tracking-wide text-white/90 group-hover:text-white transition-all duration-300">
          {name}
        </span>
            </div>
        </div>
    );
}
