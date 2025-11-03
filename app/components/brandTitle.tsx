'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BrandTitle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a static version on server to avoid mismatch
    return (
      <span className="relative text-4xl sm:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-[#f9d8ff] via-[#b3b8ff] to-[#9ffcff] bg-clip-text text-transparent drop-shadow-[0_0_3px_rgba(255,255,255,0.1)]">
        AdithVerse
      </span>
    );
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative text-4xl sm:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-[#f9d8ff] via-[#b3b8ff] to-[#9ffcff] bg-clip-text text-transparent drop-shadow-[0_0_3px_rgba(255,255,255,0.1)]"
    >
      AdithVerse
      <motion.span
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/40 blur-[1.5px] to-transparent bg-[length:300%_100%] bg-no-repeat blur-[1px]"
        animate={{ backgroundPosition: ["-150% 0%", "150% 0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ mixBlendMode: "overlay", opacity: 0.6 }}
      />
    </motion.span>
  );
}
