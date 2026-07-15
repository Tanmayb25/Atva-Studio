"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ShowcaseBanner() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.5]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[60vh] md:h-[70vh] overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/services.webp"
          alt="Digital Marketing Excellence"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
      </motion.div>

      {/* Gradient Overlays */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-medium tracking-[0.3em] uppercase text-[#FF5733] mb-4"
        >
          What We Do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight"
        >
          Words and Campaigns That
          <span className="block text-[#FF5733] mt-2">Actually convert</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-white/70 max-w-2xl"
        >
          Strategy, design, content, and marketing, all under one roof.
        </motion.p>
      </div>

      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
