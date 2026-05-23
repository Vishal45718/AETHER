"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Navbar — floating, transparent, architectural.
 *
 * No backdrop blur. No glass. No border on load.
 * Becomes slightly more defined on scroll — but never heavy.
 * The mark is a pixel-precise square, not a logo.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        scrolled ? "py-5" : "py-8"
      }`}
      style={{
        background: scrolled ? "rgba(5,5,5,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.04)" : "none",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 flex justify-between items-center">

        {/* Mark */}
        <Link href="/" className="group flex items-center gap-3">
          <div
            className="w-[14px] h-[14px] border border-aether-text-primary/40 group-hover:border-aether-text-primary/80 transition-colors duration-700"
            style={{ borderRadius: 1 }}
          />
          <span
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-aether-text-primary/60 group-hover:text-aether-text-primary/90 transition-colors duration-700"
          >
            AETHER
          </span>
        </Link>

        {/* Navigation — invisible until scrolled, then subtle */}
        <nav className="hidden md:flex items-center gap-14">
          {[
            { label: "System", href: "#system" },
            { label: "Architecture", href: "#architecture" },
            { label: "Intelligence", href: "#intelligence" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-[9px] uppercase tracking-[0.25em] text-aether-text-secondary/40 hover:text-aether-text-secondary/80 transition-colors duration-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Access — the quietest possible CTA */}
        <div className="flex items-center gap-3">
          <div className="w-px h-3 bg-aether-text-primary/15" />
          <button
            className="font-mono text-[9px] uppercase tracking-[0.25em] text-aether-text-secondary/40 hover:text-aether-text-secondary/80 transition-colors duration-700"
          >
            Request Access
          </button>
        </div>
      </div>
    </motion.header>
  );
}
