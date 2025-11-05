"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Github,
  Linkedin,
  Mail,
  Home,
  User,
  Code2,
  Laptop2Icon,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import BrandTitle from "./brandTitle";
import CosmicBackground from "./CosmicBackground";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden text-white">
      {/* 🌌 Cosmic Background */}
      <CosmicBackground />

      {/* 🌠 Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 sm:py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center gap-2"
          >
            <Sparkles className="text-pink-500" size={30} />
            <BrandTitle />
          </motion.div>

          {/* Mobile toggle */}
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Desktop nav links */}
          <div className="hidden sm:flex gap-8 text-lg font-semibold tracking-wide">
            {[
              { name: "Home", href: "/", icon: Home },
              { name: "About", href: "/about", icon: User },
              { name: "Skills", href: "/skills", icon: Laptop2Icon },
              { name: "Projects", href: "/projects", icon: Code2 },
            ].map((link) => {
              const active = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 ${
                      active
                        ? "text-cyan-400 drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]"
                        : "text-white/80 hover:text-pink-400 transition-colors"
                    }`}
                  >
                    <link.icon size={18} />
                    {link.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="sm:hidden flex flex-col gap-3 items-center bg-black/70 py-6 border-t border-white/10"
            >
              {[
                { name: "Home", href: "/", icon: Home },
                { name: "About", href: "/about", icon: User },
                { name: "Skills", href: "/skills", icon: Laptop2Icon },
                { name: "Projects", href: "/projects", icon: Code2 },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-2 text-lg ${
                    pathname === link.href
                      ? "text-cyan-400"
                      : "text-white/80 hover:text-pink-400"
                  }`}
                >
                  <link.icon size={18} />
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* 🌍 Page Content */}
      <main className="flex-grow px-4 sm:px-6 py-6 sm:py-10 max-w-6xl mx-auto">
        {children}
      </main>

      {/* 🌙 Footer */}
      <footer className="relative py-6 mt-10 border-t border-white/10 backdrop-blur-md bg-white/5 text-sm text-white/70">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 px-6">
          <motion.div
            className="text-center sm:text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            © 2025 Adith Narayan G • “Keep grinding until your idols become your
            rivals.”
          </motion.div>

          <div className="flex gap-6 sm:gap-8">
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
                whileHover={{ scale: 1.3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-cyan-400 transition"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
