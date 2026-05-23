"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * AmbientBackground — a unified atmospheric environment.
 * Pure obsidian + champagne palette. No blues, no purples.
 * 
 * Layers:
 * 1. Deep void radial at center (subtle champagne warmth)
 * 2. Edge bloom — soft horizon light at top and bottom
 * 3. Volumetric haze pools that breathe slowly
 * 4. Ambient dust particles (canvas-based, minimal)
 * 5. Cursor gravity field — a barely-visible warmth that follows the mouse
 */
export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 });

  // Micro dust particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      opacity: number; size: number;
      life: number; maxLife: number;
    }

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -Math.random() * 0.2 - 0.05,
      opacity: Math.random() * 0.25,
      size: Math.random() * 1.2 + 0.2,
      life: Math.random(),
      maxLife: Math.random() * 0.6 + 0.4,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      // Smooth mouse
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.04;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.04;

      for (const p of particles) {
        p.life += 0.0015;
        if (p.life > p.maxLife) {
          p.x = Math.random() * W;
          p.y = H + 10;
          p.life = 0;
          p.vx = (Math.random() - 0.5) * 0.15;
          p.vy = -Math.random() * 0.2 - 0.05;
        }

        // Gentle cursor attraction
        const dx = mouseRef.current.x * W - p.x;
        const dy = mouseRef.current.y * H - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += (dx / dist) * 0.008;
          p.vy += (dy / dist) * 0.008;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;
        p.x += p.vx;
        p.y += p.vy;

        const fade = Math.sin((p.life / p.maxLife) * Math.PI);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 241, 232, ${p.opacity * fade})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    tick();

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };

    const onMouse = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX / window.innerWidth;
      mouseRef.current.targetY = e.clientY / window.innerHeight;

      // Move cursor dot
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <>
      {/* Custom cursor dot */}
      <div ref={cursorRef} className="cursor-dot" />

      {/* Film grain (fixed, top layer) */}
      <div className="film-grain" />

      {/* Background atmosphere — fixed so it persists through scroll */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        {/* Deep void — pure near-black base */}
        <div className="absolute inset-0 bg-[#050505]" />

        {/* Center warmth — barely perceptible champagne */}
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "80vw",
            height: "80vw",
            maxWidth: 900,
            maxHeight: 900,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,241,232,0.025) 0%, transparent 70%)",
            animation: "hazeBreath 12s ease-in-out infinite",
          }}
        />

        {/* Top edge bloom — horizon light */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: "40vh",
            background: "radial-gradient(ellipse at 50% 0%, rgba(200,195,185,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Bottom edge bloom */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "30vh",
            background: "radial-gradient(ellipse at 50% 100%, rgba(200,195,185,0.03) 0%, transparent 70%)",
          }}
        />

        {/* Volumetric fog pool — left */}
        <motion.div
          className="absolute ambient-haze"
          style={{
            width: "50vw",
            height: "50vw",
            left: "-15vw",
            top: "20vh",
            background: "radial-gradient(circle, rgba(245,241,232,0.018) 0%, transparent 65%)",
          }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Volumetric fog pool — right */}
        <motion.div
          className="absolute ambient-haze"
          style={{
            width: "45vw",
            height: "45vw",
            right: "-10vw",
            top: "40vh",
            background: "radial-gradient(circle, rgba(220,215,205,0.015) 0%, transparent 65%)",
          }}
          animate={{ x: [0, -18, 0], y: [0, 20, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Micro dust canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 1 }}
        />
      </div>
    </>
  );
}
