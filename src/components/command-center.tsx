"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

/**
 * Command Center — Chapter 4: System Reveal.
 *
 * Half operating system. Half atmospheric intelligence chamber.
 * Feels alive — the system is actively processing.
 *
 * No dashboard density. No analytics cards.
 * Instead: floating cognitive streams, ambient data behavior,
 * and a single, sparse input as the invitation.
 */

const streams = {
  Context: [
    { label: "Working memory", status: "active", value: "94%" },
    { label: "Context depth", status: "active", value: "∞" },
    { label: "Session recall", status: "synthesizing", value: "12.4k tokens" },
  ],
  Inference: [
    { label: "Model state", status: "ready", value: "Loaded" },
    { label: "Reasoning depth", status: "active", value: "Layer 32" },
    { label: "Confidence", status: "active", value: "0.97" },
  ],
  Memory: [
    { label: "Encoded events", status: "active", value: "248k" },
    { label: "Semantic clusters", status: "ready", value: "3,847" },
    { label: "Last indexed", status: "active", value: "0.3s ago" },
  ],
  Network: [
    { label: "Nodes active", status: "active", value: "12" },
    { label: "Latency", status: "ready", value: "8ms" },
    { label: "Bandwidth", status: "active", value: "Saturated" },
  ],
};

type StreamKey = keyof typeof streams;

// Animated data node
function DataNode({ x, y, delay }: { x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.4, 0] }}
      transition={{ duration: 4, delay, repeat: Infinity, repeatDelay: Math.random() * 6 }}
    >
      <div
        className="w-1 h-1 rounded-full"
        style={{ background: "rgba(245,241,232,0.6)" }}
      />
    </motion.div>
  );
}

export function CommandCenter() {
  const [activeStream, setActiveStream] = useState<StreamKey>("Context");
  const [tick, setTick] = useState(0);

  // Live tick for ambient data behavior
  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="system" className="relative w-full py-40 md:py-64 z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16">

        {/* Chapter header — asymmetric, left-weighted */}
        <div className="grid grid-cols-1 md:grid-cols-12 mb-24 md:mb-32">
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-6 h-px bg-aether-text-primary/20" />
              <span className="chapter-label">04 // System Reveal</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-[3.5rem] font-medium tracking-[-0.03em] text-aether-text-primary leading-[1.05]"
            >
              The system is already<br />
              <span style={{ color: "rgba(245,241,232,0.35)" }}>thinking.</span>
            </motion.h2>
          </div>
        </div>

        {/* OS Interface — atmospheric, sparse */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative"
          style={{
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: 20,
            background: "rgba(8,8,8,0.95)",
            overflow: "hidden",
          }}
        >
          {/* Ambient floating data nodes */}
          <div className="absolute inset-0 pointer-events-none z-0">
            {[
              { x: "15%", y: "20%", delay: 0 },
              { x: "80%", y: "15%", delay: 1.2 },
              { x: "60%", y: "65%", delay: 2.5 },
              { x: "25%", y: "75%", delay: 0.8 },
              { x: "90%", y: "50%", delay: 3.1 },
              { x: "45%", y: "30%", delay: 1.7 },
            ].map((node, i) => (
              <DataNode key={i} {...node} />
            ))}
          </div>

          {/* Title bar — minimal */}
          <div
            className="flex items-center justify-between px-6 py-4 relative z-10"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-1.5 h-1.5 rounded-full signal-pulse"
                style={{ background: "rgba(245,241,232,0.5)" }}
              />
              <span className="chapter-label" style={{ color: "rgba(168,164,156,0.3)" }}>
                AETHER // Cognitive Interface
              </span>
            </div>

            {/* Live clock-ish indicator */}
            <motion.span
              key={tick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="chapter-label"
              style={{ color: "rgba(168,164,156,0.2)", fontVariantNumeric: "tabular-nums" }}
            >
              {new Date().toLocaleTimeString("en-US", { hour12: false })}
            </motion.span>
          </div>

          {/* Main layout */}
          <div className="flex flex-col md:flex-row" style={{ minHeight: 480 }}>

            {/* Left sidebar — stream selection */}
            <div
              className="md:w-52 flex flex-col py-8 px-4 relative z-10"
              style={{ borderRight: "1px solid rgba(255,255,255,0.04)" }}
            >
              <span className="chapter-label mb-6 px-2" style={{ color: "rgba(168,164,156,0.2)" }}>
                Streams
              </span>
              {(Object.keys(streams) as StreamKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveStream(key)}
                  className="relative text-left px-3 py-3 transition-all duration-700 group"
                >
                  {activeStream === key && (
                    <motion.div
                      layoutId="activeStream"
                      className="absolute inset-0 rounded-md"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span
                    className="relative font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-700"
                    style={{
                      color: activeStream === key
                        ? "rgba(245,241,232,0.7)"
                        : "rgba(168,164,156,0.25)",
                    }}
                  >
                    {key}
                  </span>
                </button>
              ))}
            </div>

            {/* Main content — atmospheric data view */}
            <div className="flex-1 flex flex-col relative z-10">

              {/* Stream header */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStream}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="p-8 md:p-12 flex-1 flex flex-col"
                >
                  <div className="flex items-baseline gap-6 mb-12">
                    <h3 className="font-sans font-medium text-2xl md:text-3xl text-aether-text-primary tracking-tight">
                      {activeStream}
                    </h3>
                    <span className="chapter-label" style={{ color: "rgba(168,164,156,0.3)" }}>
                      Stream // Active
                    </span>
                  </div>

                  {/* Sparse data entries — not dense cards */}
                  <div className="flex flex-col gap-0">
                    {streams[activeStream].map((entry, i) => (
                      <motion.div
                        key={`${activeStream}-${i}`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center justify-between py-5"
                        style={{
                          borderBottom: i < streams[activeStream].length - 1
                            ? "1px solid rgba(255,255,255,0.04)"
                            : "none",
                        }}
                      >
                        <div className="flex items-center gap-6">
                          {/* Status pulse */}
                          <motion.div
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: "rgba(245,241,232,0.3)" }}
                            animate={{ opacity: [0.3, 0.8, 0.3] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                          />
                          <span className="font-mono text-[10px] tracking-widest text-aether-text-secondary/40">
                            {entry.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="chapter-label" style={{ color: "rgba(168,164,156,0.25)" }}>
                            {entry.status}
                          </span>
                          <span className="font-mono text-xs text-aether-text-primary/50 tabular-nums">
                            {entry.value}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Ambient command input */}
                  <div className="mt-auto pt-8">
                    <div
                      className="flex items-center gap-4 px-5 py-4"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                    >
                      <motion.div
                        className="w-1 h-4"
                        style={{ background: "rgba(245,241,232,0.5)" }}
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                      <span className="font-mono text-[10px] text-aether-text-secondary/20">
                        Awaiting directive_
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
