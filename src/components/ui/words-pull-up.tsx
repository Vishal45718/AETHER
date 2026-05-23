"use client";

import { motion, Variants } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  delay?: number;
}

export function WordsPullUp({ text, className = "", delay = 0 }: WordsPullUpProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1], // Cinematic ease
      },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`flex flex-wrap justify-center gap-x-[0.25em] ${className}`}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={item} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
