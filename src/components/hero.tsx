"use client";

import { motion } from "framer-motion";
import { MonolithScene } from "./monolith-scene";
import { useRef, useEffect, useState } from "react";

/**
 * Hero — the arrival.
 *
 * Chapter 1: Arrival
 * The user enters the field. The monolith is already there.
 * Ancient. Silent. Inevitable.
 *
 * The CTA is a system handshake, not a button.
 * It appears late — after the atmosphere has settled.
 */
export function Hero() {
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const [systemState, setSystemState] = useState<"observing" | "ready">("observing");

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // System state transition
  useEffect(() => {
    const t = setTimeout(() => setSystemState("ready"), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

      {/* 3D Scene — fills behind */}
      <MonolithScene mouseX={mouseX} mouseY={mouseY} />

      {/* Bottom fog — merges scene into page */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "35%",
          background: "linear-gradient(to top, #050505 0%, transparent 100%)",
        }}
      />

      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "20%",
          background: "linear-gradient(to bottom, #050505 0%, transparent 100%)",
        }}
      />

      {/* ── Chapter Label ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
        className="absolute top-36 left-8 md:left-16 z-20"
      >
        <span className="chapter-label">
          System // Arrival
        </span>
      </motion.div>

      {/* ── System state indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        className="absolute top-36 right-8 md:right-16 z-20 flex items-center gap-3"
      >
        <motion.div
          className="w-1 h-1 rounded-full bg-aether-text-secondary"
          animate={{ opacity: systemState === "ready" ? [0.4, 1, 0.4] : 0.2 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="chapter-label">
          {systemState === "observing" ? "Observing" : "Ready"}
        </span>
      </motion.div>

      {/* ── Primary Content ── */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">

        {/* Pre-headline — microscopic utility label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="chapter-label" style={{ letterSpacing: "0.35em", color: "rgba(168,164,156,0.35)" }}>
            AETHER // Intelligence OS
          </span>
        </motion.div>

        {/* Primary Headline — the dominant typographic statement */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-medium leading-[0.88] tracking-[-0.04em] text-aether-text-primary"
          >
            The interface between
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-medium leading-[0.88] tracking-[-0.04em] text-aether-pearl"
            style={{ fontStyle: "italic" }}
          >
            thought
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-medium leading-[0.88] tracking-[-0.04em] text-aether-text-primary"
          >
            and creation.
          </motion.h1>
        </div>

        {/* Supporting line — restrained */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 2.8, ease: "easeOut" }}
          className="mt-10 text-sm md:text-base text-aether-text-secondary/50 max-w-sm leading-relaxed text-center font-light"
        >
          An AI-native operating system. Built for those who create.
        </motion.p>

        {/* CTA — system handshake, appears after atmosphere */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 3.5, ease: "easeOut" }}
          className="mt-16 flex items-center gap-8"
        >
          {/* Primary — minimal, architectural */}
          <button
            className="group flex items-center gap-4 transition-all duration-700"
            aria-label="Initialize AETHER"
          >
            <div className="w-px h-8 bg-aether-text-primary/20 group-hover:bg-aether-text-primary/60 transition-colors duration-700" />
            <span
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-aether-text-secondary/60 group-hover:text-aether-text-primary transition-colors duration-700"
            >
              Enter the System
            </span>
          </button>

          {/* Separator */}
          <div className="w-px h-4 bg-aether-text-primary/10" />

          {/* Secondary — even quieter */}
          <button
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-aether-text-dim hover:text-aether-text-secondary/50 transition-colors duration-700"
          >
            Request Access
          </button>
        </motion.div>
      </div>

      {/* ── Scroll Choreography Cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 4.5, ease: "easeOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, rgba(245,241,232,0.3), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
