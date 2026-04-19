"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Step = {
  id: string;
  number: string;
  title: string;
  description: string;
  badges: string[];
};

const STEPS: Step[] = [
  {
    id: "strategy",
    number: "01",
    title: "Strategy",
    description:
      "We uncover the highest-leverage opportunities across your market, audience, and funnel — then turn them into a roadmap built for growth.",
    badges: ["ICP Defined", "Positioning Clear", "Roadmap Built"],
  },
  {
    id: "execution",
    number: "02",
    title: "Execution",
    description:
      "We bring the strategy to life through design, content, campaigns, and systems that move your brand from planning to performance.",
    badges: ["Assets Delivered", "Systems Live", "Campaigns Running"],
  },
  {
    id: "optimization",
    number: "03",
    title: "Optimization",
    description:
      "We measure what matters, test continuously, and refine every touchpoint to improve conversion, efficiency, and ROI.",
    badges: ["Performance Tracked", "Conversion Improved", "ROI Refined"],
  },
  {
    id: "scale",
    number: "04",
    title: "Scale",
    description:
      "Once the engine is working, we double down on what performs — expanding reach, accelerating growth, and compounding results.",
    badges: ["Growth Accelerated", "ROI Scaled", "Momentum Compounding"],
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const els = STEPS.map((_, i) => cardRefs.current[i]).filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const top = visible[0];
        if (!top?.target) return;
        const idx = Number((top.target as HTMLElement).dataset.stepIndex);
        if (!Number.isNaN(idx)) setActiveIndex(idx);
      },
      {
        root: null,
        threshold: [0.15, 0.35, 0.5, 0.65, 0.85],
        rootMargin: "-38% 0px -38% 0px",
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-[#070707] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-10%,rgba(255,87,51,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_28%,transparent_72%,rgba(0,0,0,0.4)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center md:max-w-4xl lg:max-w-5xl">
        <motion.header
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-3xl md:mb-20 lg:mb-24"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#FF5733]/90">
            How we work
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
          Building growth engines, not just marketing campaigns
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/55 md:text-lg md:leading-relaxed">
            Just Clarity. No Guessing.
          </p>
        </motion.header>

        <div className="relative mx-auto max-w-4xl lg:max-w-5xl">
          {/* Thin vertical timeline — desktop */}
          <div
            className="pointer-events-none absolute left-[11px] top-8 bottom-8 hidden w-px md:block lg:left-[13px]"
            aria-hidden
          >
            <div className="h-full w-full bg-gradient-to-b from-white/[0.14] via-white/[0.07] to-white/[0.03]" />
            <motion.div
              className="absolute left-0 top-0 w-full origin-top bg-gradient-to-b from-[#FF5733] via-[#FF5733]/70 to-[#FF5733]/25"
              initial={false}
              animate={{
                height: `${((activeIndex + 0.55) / STEPS.length) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 28 }}
            />
          </div>

          <ul className="relative m-0 list-none space-y-6 p-0 md:space-y-7 md:pl-8 lg:pl-10">
            {STEPS.map((step, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;

              return (
                <li key={step.id} className="relative">
                  <motion.article
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    data-step-index={index}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={
                      isActive
                        ? { y: -2 }
                        : {
                            y: -6,
                            transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                          }
                    }
                    className={[
                      "group relative rounded-2xl border",
                      "bg-gradient-to-br from-white/[0.06] to-white/[0.02]",
                      "shadow-[0_4px_32px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.05)_inset]",
                      "px-6 py-7 transition-[box-shadow,border-color,transform] duration-300 md:px-8 md:py-8",
                      "md:rounded-[1.25rem]",
                      isActive
                        ? "border-[#FF5733]/35 shadow-[0_8px_48px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,87,51,0.22)_inset,0_0_80px_-20px_rgba(255,87,51,0.28)]"
                        : "border-white/[0.07] hover:border-white/[0.12] hover:shadow-[0_12px_48px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)_inset]",
                    ].join(" ")}
                  >
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                      <div className="flex shrink-0 items-baseline gap-3 md:flex-col md:gap-1">
                        <span
                          className={[
                            "font-mono text-3xl font-bold tabular-nums tracking-tighter transition-colors duration-300 md:text-4xl",
                            isActive ? "text-[#FF5733]" : isPast ? "text-[#FF5733]/55" : "text-white/15",
                          ].join(" ")}
                        >
                          {step.number}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1 space-y-4">
                        <div>
                          <h3
                            className={[
                              "text-xl font-semibold tracking-tight transition-colors duration-300 md:text-2xl",
                              isActive ? "text-white" : "text-white/55 group-hover:text-white/80",
                            ].join(" ")}
                          >
                            {step.title}
                          </h3>
                          <p
                            className={[
                              "mt-3 max-w-2xl text-pretty text-sm leading-relaxed transition-colors duration-300 md:text-base md:leading-relaxed",
                              isActive ? "text-white/72" : "text-white/45 group-hover:text-white/58",
                            ].join(" ")}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap justify-center gap-2 md:mt-7 md:gap-2.5">
                      {step.badges.map((badge) => (
                        <span
                          key={badge}
                          className={[
                            "inline-flex items-center rounded-full border px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em] transition-colors duration-300 md:px-3.5 md:py-1.5 md:text-[0.7rem]",
                            isActive
                              ? "border-[#FF5733]/35 bg-[#FF5733]/[0.12] text-[#FFAB96]"
                              : "border-white/[0.08] bg-white/[0.03] text-white/45 group-hover:border-[#FF5733]/20 group-hover:text-white/60",
                          ].join(" ")}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
