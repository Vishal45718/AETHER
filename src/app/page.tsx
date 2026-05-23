import { AmbientBackground } from "@/components/ambient-background";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustRibbon } from "@/components/trust-ribbon";
import { ArchitectureSection } from "@/components/architecture-section";
import { CommandCenter } from "@/components/command-center";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

/**
 * Page flow — cinematic narrative arc:
 *
 * 1. Arrival      — Hero (monolith, headline)
 * 2. Observation  — Trust (institutions, quiet authority)
 * 3. Awakening    — Architecture (intelligence systems)
 * 4. System Reveal — Command Center (the OS interface)
 * 5. Invitation   — CTA (the system handshake)
 * 6. Epilogue     — Footer (utility, silence)
 */
export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#050505", color: "#F5F1E8" }}>
      <AmbientBackground />
      <Navbar />
      <Hero />
      <TrustRibbon />
      <ArchitectureSection />
      <CommandCenter />
      <CTASection />
      <Footer />
    </main>
  );
}
