'use client';

import { type ElementType } from 'react';

// ✅ NEW: Predefined accent color mapping (Tailwind needs to see all of them at build time)
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

type SkillBadgeProps = {
    name: string;
    Icon: ElementType;
    gradient: string;
    accent?: string; // accent key (must match one of the above)
};

export default function SkillBadge({
                                       name,
                                       Icon,
                                       gradient,
                                       accent = 'cyan', // default accent
                                   }: SkillBadgeProps) {
    // ✅ CHANGE: pick the Tailwind-safe class from our static map
    const accentClass = accentClasses[accent] || accentClasses['cyan'];

    return (
        <div
            className={`group relative rounded-2xl p-[1px] overflow-hidden 
                  animate-float transition-transform duration-300 hover:scale-[1.06]`}
            aria-label={name}
        >
            {/* border glow */}
            <div
                className={`absolute inset-0 rounded-2xl opacity-60 blur-xl transition-opacity duration-300 
                    group-hover:opacity-90 ${gradient}`}
            />

            {/* Card inner */}
            <div
                className="relative z-10 rounded-2xl bg-white/5 backdrop-blur-xl
                   border border-white/10 px-4 py-5 flex items-center gap-3
                   transition-all duration-300 group-hover:border-white/20"
            >
                <div className="relative">
                    <Icon className="w-7 h-7 text-white/90 group-hover:text-cyan-300 transition-colors duration-300" />

                    {/* ✅ FIXED: use static, Tailwind-known class instead of dynamic string interpolation */}
                    <div
                        className={`absolute -inset-2 rounded-full blur-md opacity-30 
                        group-hover:opacity-60 transition-opacity duration-300 
                        ${accentClass}`}
                    />
                </div>

                <span className="font-semibold tracking-wide text-white/90 group-hover:text-white transition-all duration-300">
          {name}
        </span>
            </div>
        </div>
    );
}
