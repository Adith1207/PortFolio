'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail, Home, User, Code2, Sparkles } from "lucide-react";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white relative overflow-hidden">
            {/* Animated background blobs */}
            <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                    background: [
                        "radial-gradient(circle at 10% 20%, #ff0080 0%, transparent 60%)",
                        "radial-gradient(circle at 80% 0%, #7928ca 0%, transparent 60%)",
                        "radial-gradient(circle at 80% 80%, #00ffff 0%, transparent 60%)",
                    ],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "mirror",
                }}
            />

            {/* Navbar */}
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 60 }}
                className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-lg"
            >
                <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="flex items-center gap-2 text-lg font-bold tracking-wide"
                    >
                        <Sparkles className="text-pink-400" size={24} />
                        <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AdithVerse
            </span>
                    </motion.div>

                    {/* Nav Links */}
                    <div className="flex gap-6">
                        {[
                            { name: "Home", href: "/", icon: Home },
                            { name: "About", href: "/about", icon: User },
                            { name: "Projects", href: "/projects", icon: Code2 },
                        ].map((link) => {
                            const active = pathname === link.href;
                            return (
                                <motion.div
                                    key={link.name}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative"
                                >
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-2 font-medium ${
                                            active
                                                ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                                                : "text-white/80 hover:text-pink-400 transition-colors"
                                        }`}
                                    >
                                        <link.icon size={18} />
                                        {link.name}
                                    </Link>
                                    {active && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full"
                                        />
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </motion.nav>

            {/* Page Content */}
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-grow px-6 py-10 max-w-6xl mx-auto"
            >
                {children}
            </motion.main>

            {/* Footer */}
            <footer className="relative py-8 mt-10 border-t border-white/10 backdrop-blur-md bg-white/5">
                <motion.div
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                    transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-[length:200%_200%] opacity-30 blur-3xl"
                />

                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-6 text-sm">
                    <div className="text-white/70">
                        © {new Date().getFullYear()} Adith • Built with 💻 & 🚀
                    </div>
                    <div className="flex gap-5">
                        {[
                            { href: "https://github.com/", icon: Github },
                            { href: "https://linkedin.com/", icon: Linkedin },
                            { href: "mailto:someone@example.com", icon: Mail },
                        ].map(({ href, icon: Icon }, i) => (
                            <motion.a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.3, rotate: 10 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-white/80 hover:text-cyan-400 transition"
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}
