"use client";

import dynamic from "next/dynamic";
import CosmicBackground from "@/app/components/CosmicBackground";

// ⚡ Dynamically load the HeroSection on the client only
const HeroSection = dynamic(() => import("@/app/components/heroSection"), {
  ssr: false, // disables server-side rendering for this component
  loading: () => (
    <div className="flex justify-center items-center h-screen text-white/60 text-lg">
      Initializing AdithVerse...
    </div>
  ),
});

export default function Home() {
  return (
    <>
      {/* 🌌 Background is still SSR-rendered */}
      <CosmicBackground />

      {/* 🚀 Hero Section - rendered only on client to avoid hydration mismatch */}
      <HeroSection />
    </>
  );
}
