"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SERVICES = [
  "Search & SEO",
  "Web design & development",
  "Google & Meta ads",
  "Content & social",
  "AI & automation",
  "Strategy & analytics",
] as const;

const INTERVAL_MS = 3000;

export default function HeroServiceRotator() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SERVICES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const current = SERVICES[index];

  return (
    <div className="mt-6 w-full max-w-xl">
      <div
        className="relative min-h-[1.35em] min-w-[12.5rem] overflow-hidden sm:min-h-[1.4em] sm:min-w-[17.5rem]"
        aria-label="Services we provide"
      >
        {reduceMotion ? (
          <p className="text-lg font-bold tracking-tight text-[#FF5733] sm:text-xl md:text-2xl">
            SEO, web, paid media, content, AI & strategy
          </p>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={current}
              className="text-lg font-bold tracking-tight text-[#FF5733] drop-shadow-[0_0_24px_rgba(255,87,51,0.2)] sm:text-xl md:text-2xl"
              initial={{ y: 24, opacity: 0, filter: "blur(8px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -20, opacity: 0, filter: "blur(6px)" }}
              transition={{
                duration: 0.42,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {current}
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
