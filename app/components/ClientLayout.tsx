"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  MonitorSmartphone,
} from "lucide-react";
import BrandTitle from "./brandTitle";
import CosmicBackground from "./CosmicBackground";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  // 🧠 Ensure this only runs on the client
  useEffect(() => {
    setHydrated(true);
  }, []);

  // 🧠 Detect mobile + check saved preference
  useEffect(() => {
    if (!hydrated) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const accepted =
      localStorage.getItem("desktop_warning_accepted") === "true";

    setHasAccepted(accepted);
    setShowWarning(isMobile && !accepted);
  }, [hydrated]);

  // ✅ Button click handler
  const handleAccept = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    localStorage.setItem("desktop_warning_accepted", "true");
    setHasAccepted(true);
    setShowWarning(false);

    // ✅ Route to your app’s main page (app/page.tsx → "/")
    setTimeout(() => {
      router.replace("/"); // this goes directly to your homepage
    }, 150);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden text-white">
      <CosmicBackground />

      {/* 🌠 Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 60 }}
        className="sticky top-0 z-40 backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-lg"
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
      <main className="flex-grow px-4 sm:px-6 py-6 sm:py-10 max-w-6xl mx-auto z-10">
        {children}
      </main>

      {/* 🌙 Footer */}
      <footer className="relative py-6 mt-10 border-t border-white/10 backdrop-blur-md bg-white/5 text-sm text-white/70 z-10">
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
              { href: "https://github.com/Adith1207", icon: Github },
              {
                href: "https://www.linkedin.com/in/adith1207/",
                icon: Linkedin,
              },
              { href: "mailto:adithnarayang@gmail.com", icon: Mail },
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

      {/* 🪐 Fullscreen Warning Overlay */}
      <AnimatePresence>
        {hydrated && showWarning && !hasAccepted && (
          <motion.div
            key="warning-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#030014] via-[#0a001e] to-[#000010]"
            style={{ pointerEvents: "auto" }}
          >
            <MonitorSmartphone className="w-16 h-16 text-cyan-400 mb-6 drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]" />

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-pink-400 bg-clip-text"
            >
              Best viewed on Desktop 💻
            </motion.h1>

            <p className="text-white/70 mt-4 max-w-md text-base leading-relaxed">
              This portfolio uses advanced{" "}
              <span className="text-cyan-400">animations</span> and{" "}
              <span className="text-fuchsia-400">cosmic effects</span> that look
              best on larger screens. For the full experience, use a{" "}
              <span className="text-pink-400 font-semibold">
                laptop or desktop
              </span>
              .
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAccept}
              className="mt-8 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-[0_0_25px_rgba(255,0,255,0.4)] hover:shadow-[0_0_35px_rgba(255,0,255,0.6)] transition z-[1000]"
            >
              Okay, Continue Anyway
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
