"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Intelligence Architecture — Chapter 3: Awakening.
 *
 * No glass cards. No dashboard aesthetics.
 * Instead: pure editorial asymmetry.
 *
 * The architecture is described through contrast:
 * - One massive statement that defines the system
 * - Three sparse, poetic capsules
 * - Ambient waveform as intelligence cue
 */

// Restrained intelligence cue — a waveform
function IntelligenceWaveform() {
  const bars = Array.from({ length: 28 }, (_, i) => ({
    delay: i * 0.08,
    duration: 1.8 + Math.sin(i * 0.7) * 0.8,
    height: 0.3 + Math.abs(Math.sin(i * 0.4)) * 0.7,
  }));

  return (
    <div className="flex items-end gap-[2px] h-12 opacity-40">
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          className="w-[2px] bg-aether-text-secondary rounded-full origin-bottom"
          style={{ height: `${bar.height * 100}%` }}
          animate={{ scaleY: [bar.height, 1, bar.height * 0.4, 0.9, bar.height] }}
          transition={{
            duration: bar.duration,
            delay: bar.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Signal sweep — a single horizontal line that passes through
function SignalSweep() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(245,241,232,0.08), transparent)" }}
        initial={{ left: "-1px" }}
        animate={{ left: "100%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "linear",
        }}
      />
    </div>
  );
}

const pillars = [
  {
    index: "001",
    label: "Cognitive Engine",
    title: "Silent Intelligence",
    body: "Operating implicitly. No loading states. No processing bars. Immediate contextual readiness, always.",
  },
  {
    index: "002",
    label: "Data Manifold",
    title: "Infinite Context",
    body: "Your entire creative history, encoded as living semantic memory. It persists across sessions, across devices.",
  },
  {
    index: "003",
    label: "Security Fabric",
    title: "Zero-Knowledge",
    body: "Cryptographically isolated at the hardware boundary. The system learns. It never observes.",
  },
];

export function ArchitectureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const labelOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section
      id="architecture"
      ref={sectionRef}
      className="relative w-full py-40 md:py-64 z-20 overflow-hidden"
    >
      <SignalSweep />

      <div className="max-w-[1400px] mx-auto px-8 md:px-16">

        {/* Chapter marker */}
        <motion.div
          style={{ opacity: labelOpacity }}
          className="flex items-center gap-4 mb-24 md:mb-40"
        >
          <div className="w-6 h-px bg-aether-text-primary/20" />
          <span className="chapter-label">03 // Intelligence Awakening</span>
        </motion.div>

        {/* Primary statement — the dominant H2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 md:mb-56">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="md:col-span-10 md:col-start-2"
          >
            <h2 className="text-3xl md:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-medium tracking-[-0.04em] text-aether-text-primary leading-[1.0]">
              A neural architecture built<br />
              <span style={{ color: "rgba(245,241,232,0.4)" }}>for the absolute scale</span><br />
              of human ambition.
            </h2>
          </motion.div>
        </div>

        {/* Intelligence cue — waveform */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
          className="mb-20 md:mb-32 pl-2"
        >
          <IntelligenceWaveform />
          <p className="chapter-label mt-3" style={{ color: "rgba(168,164,156,0.25)" }}>
            Cognitive signal // Active
          </p>
        </motion.div>

        {/* Three pillars — open, breathing layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 1.8,
                delay: i * 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative py-12 md:py-16"
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
                paddingLeft: i === 0 ? 0 : "3rem",
                paddingRight: i === 2 ? 0 : "3rem",
              }}
            >
              {/* Hover reveal — barely visible top edge */}
              <motion.div
                className="absolute top-0 left-0 h-px"
                style={{ background: "linear-gradient(to right, rgba(245,241,232,0.3), transparent 60%)" }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <span className="chapter-label">{pillar.label}</span>
                  <span className="chapter-label" style={{ color: "rgba(168,164,156,0.2)" }}>
                    {pillar.index}
                  </span>
                </div>
                <h3
                  className="font-sans font-medium text-xl md:text-2xl text-aether-text-primary tracking-tight leading-tight"
                >
                  {pillar.title}
                </h3>
                <p className="text-aether-text-secondary/40 text-sm leading-relaxed font-light">
                  {pillar.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
