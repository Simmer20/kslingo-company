"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-60 h-0.5 origin-left
                 bg-linear-to-r from-accent-blue via-accent-purple to-accent-green"
    />
  );
}