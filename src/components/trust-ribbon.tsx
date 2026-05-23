"use client";

import { motion } from "framer-motion";

/**
 * Observation — Chapter 2.
 *
 * The trust section should feel like a gallery wall.
 * Institutions. Quiet. Permanent.
 * Not a startup logo ribbon.
 *
 * Large horizontal space. Names in near-invisible opacity.
 * The label above reads like an archive reference.
 */
const institutions = [
  { name: "Sequoia", label: "Capital" },
  { name: "Y Combinator", label: "Research" },
  { name: "OpenAI", label: "Partner" },
  { name: "Anthropic", label: "Consortium" },
  { name: "Stripe", label: "Infrastructure" },
];

export function TrustRibbon() {
  return (
    <section id="observation" className="relative w-full py-40 md:py-56 overflow-hidden z-20">

      {/* Chapter marker — left-anchored */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-20 left-8 md:left-16 flex items-center gap-4"
      >
        <div className="w-6 h-px bg-aether-text-primary/20" />
        <span className="chapter-label">02 // Observation</span>
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-16">

        {/* Section header — asymmetric, left-weighted */}
        <div className="grid grid-cols-1 md:grid-cols-12 mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
            className="md:col-span-6 md:col-start-7"
          >
            <p className="text-aether-text-secondary/30 text-xs md:text-sm font-light leading-relaxed max-w-xs">
              Trusted by the institutions that
              define what comes next.
            </p>
          </motion.div>
        </div>

        {/* Institution gallery — widely spaced, ultra-dim */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 md:gap-0">
          {institutions.map((inst, i) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-2 group cursor-default"
            >
              <span
                className="chapter-label transition-colors duration-700 group-hover:text-aether-text-secondary/30"
                style={{ letterSpacing: "0.2em" }}
              >
                {inst.label}
              </span>
              <span
                className="font-sans font-medium text-base md:text-xl tracking-tight transition-colors duration-700"
                style={{
                  color: "rgba(245,241,232,0.12)",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(245,241,232,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(245,241,232,0.12)";
                }}
              >
                {inst.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Architectural divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="mt-20 h-px origin-left"
          style={{ background: "linear-gradient(to right, rgba(255,255,255,0.06), transparent 70%)" }}
        />
      </div>
    </section>
  );
}
