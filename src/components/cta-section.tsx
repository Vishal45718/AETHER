"use client";

import { motion } from "framer-motion";

/**
 * CTA — Chapter 5: The Invitation.
 *
 * Not a section. Not a card. Not a box.
 * Just open space, one line of text, and silence.
 *
 * The invitation is a system handshake —
 * a single line that asks for nothing and promises everything.
 */
export function CTASection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center z-20 overflow-hidden">

      {/* Very deep centered warmth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(245,241,232,0.018) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">

        {/* Chapter marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex items-center gap-4 mb-24"
        >
          <div className="w-6 h-px bg-aether-text-primary/15" />
          <span className="chapter-label">05 // The Invitation</span>
          <div className="w-6 h-px bg-aether-text-primary/15" />
        </motion.div>

        {/* The statement */}
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-medium tracking-[-0.04em] text-aether-text-primary leading-[0.92]"
          >
            You are already
          </motion.h2>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-medium tracking-[-0.04em] leading-[0.92]"
            style={{ color: "rgba(245,241,232,0.35)", fontStyle: "italic" }}
          >
            inside the system.
          </motion.h2>
        </div>

        {/* Supporting copy — one restrained line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 1.2 }}
          className="mt-10 text-sm text-aether-text-secondary/30 font-light"
        >
          The access list opens when the system is ready for you.
        </motion.p>

        {/* System handshake CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 2 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          {/* The line — clicking it is the handshake */}
          <button className="group flex flex-col items-center gap-5 transition-all duration-700">
            <div
              className="w-40 h-px transition-all duration-700 group-hover:w-56"
              style={{ background: "linear-gradient(to right, transparent, rgba(245,241,232,0.3), transparent)" }}
            />
            <span
              className="font-mono text-[9px] uppercase tracking-[0.35em] transition-colors duration-700"
              style={{ color: "rgba(168,164,156,0.35)" }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "rgba(245,241,232,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "rgba(168,164,156,0.35)";
              }}
            >
              Request Access
            </span>
            <div
              className="w-20 h-px transition-all duration-700 group-hover:w-10"
              style={{ background: "linear-gradient(to right, transparent, rgba(245,241,232,0.15), transparent)" }}
            />
          </button>
        </motion.div>

        {/* Orbital intelligence cue */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mt-32 relative w-32 h-32 flex items-center justify-center"
        >
          {/* Outer ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{ border: "1px solid rgba(255,255,255,0.05)" }}
          />
          {/* Inner ring */}
          <div
            className="absolute w-16 h-16 rounded-full"
            style={{ border: "1px solid rgba(255,255,255,0.04)" }}
          />
          {/* Center node */}
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "rgba(245,241,232,0.4)" }}
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Orbiting node */}
          <motion.div
            className="absolute w-1 h-1 rounded-full"
            style={{ background: "rgba(245,241,232,0.5)" }}
            animate={{
              x: [0, 56, 0, -56, 0],
              y: [-56, 0, 56, 0, -56],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
