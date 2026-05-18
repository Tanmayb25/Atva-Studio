"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type StorySectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function StorySection({ children, className }: StorySectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.985, 1.005]);
  // Fade in as the block enters; stay visible through exit so content never “blinks out” mid-scroll
  const opacity = useTransform(scrollYProgress, [0, 0.14, 1], [0, 1, 1]);

  const glowOpacity = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0, 0.5, 0.5, 0]);
  const glowY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={
          reduceMotion
            ? undefined
            : {
                opacity,
                y,
                scale,
              }
        }
        className="relative z-10"
      >
        <motion.div
          aria-hidden
          style={reduceMotion ? undefined : { opacity: glowOpacity, y: glowY }}
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -inset-x-10 -top-24 h-56 bg-gradient-to-r from-[#FF5733]/10 via-[#FF5733]/5 to-[#FF5733]/10 blur-3xl" />
          <div className="absolute -inset-x-10 -bottom-24 h-56 bg-gradient-to-r from-[#FF5733]/10 via-[#FF5733]/5 to-[#FF5733]/10 blur-3xl" />
        </motion.div>
        {children}
      </motion.div>
    </div>
  );
}
