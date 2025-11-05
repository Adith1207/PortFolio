import HeroSection from "./components/heroSection";
import CosmicBackground from "./components/CosmicBackground";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      <CosmicBackground />
      <HeroSection />
    </main>
  );
}
