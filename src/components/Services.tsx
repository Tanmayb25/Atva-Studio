"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

/** Sans label: sidebar nav + start of each service h3. `PILLAR_NAV_ROW_PX` must match Tailwind `h-14`. */
const PILLAR_NAME_CLASS = "font-sans font-semibold uppercase tracking-[0.2em]";

const PILLAR_NAV_ROW_PX = 56;

export default function Services() {
  const pillars = useMemo(
    () => [
      {
        id: "strategy",
        leftLabel: "STRATEGY",
        title: "STRATEGY",
        subtitle: "The intelligence engine behind your growth.",
        accentClass: "text-[#FF5733]",
        items: [
          "Market Research & ICP Definition",
          "Campaign Planning & Roadmapping",
          "Data analytics, dashboards & optimization",
          "AI consulting, workflows & AI-native strategy",
        ],
      },
      {
        id: "design",
        leftLabel: "DESIGN",
        title: "DESIGN",
        subtitle: "Experiences that convert and stay memorable",
        accentClass: "text-[#FF5733]",
        items: [
          "Brand identity, visual design, logos & motion",
          "Website Design & Development",
          "Marketing collateral — Magazines, print & signage",
        ],
      },
      {
        id: "content",
        leftLabel: "CONTENT",
        title: "CONTENT",
        subtitle: "Your voice, engineered to attract and influence",
        accentClass: "text-[#FF5733]",
        items: [
          "SEO for Google, AI search & local visibility",
          "Content strategy, calendars & formats",
          "Blog Posts & Long-form Content",
          "Video & Multimedia Production",
          "Email campaigns & lifecycle flows",
          "Social Media Content",
          "Community Management",
        ],
      },
      {
        id: "marketing",
        leftLabel: "MARKETING",
        title: "MARKETING",
        subtitle: "Execution that turns attention into revenue",
        accentClass: "text-[#FF5733]",
        items: [
          "Google Ads Management",
          "Meta Ads",
          "Marketing Automation (Based on client requirements)",
          "Analytics & Reporting",
          "Social Media Management",
        ],
      },
    ],
    [],
  );

  const [activeId, setActiveId] = useState(pillars[0]?.id ?? "strategy");
  const contentRefs = useRef<Record<string, HTMLElement | null>>({});

  // Track active pillar based on scroll
  useEffect(() => {
    const els = pillars
      .map((p) => contentRefs.current[p.id])
      .filter(Boolean) as HTMLElement[];

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        const top = visible[0];
        if (!top) return;
        const id = (top.target as HTMLElement).dataset.pillarId;
        if (id) setActiveId(id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: "-35% 0px -45% 0px",
      },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pillars]);

  const scrollTo = (id: string) => {
    const el = contentRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="services" className="relative py-30 px-6">
      {/* Mobile: horizontal pillar nav */}
      <div className="lg:hidden mb-8 overflow-x-auto">
        <nav className="flex gap-8 pb-4">
          {pillars.map((p) => {
            const isActive = activeId === p.id;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => scrollTo(p.id)}
                className={[
                  PILLAR_NAME_CLASS,
                  "shrink-0 py-1 text-base leading-none transition-colors duration-200 md:text-lg",
                  isActive ? "text-[#FF5733]" : "text-white/30 hover:text-white/60",
                ].join(" ")}
              >
                {p.leftLabel}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mx-auto w-full max-w-7xl">
        {/*
          Sticky sidebar: left column stretches to match content height (default flex stretch).
          Native sticky releases smoothly at section end—no fixed ↔ absolute snap.
        */}
        <div className="lg:flex lg:gap-10 lg:items-stretch">
          <aside className="relative z-40 mb-10 hidden w-[300px] shrink-0 lg:mb-0 lg:block">
            <nav className="relative sticky top-28 flex flex-col gap-0 pr-8">
              <motion.div
                className="absolute left-0 h-14 w-1 rounded-full bg-[#FF5733]"
                initial={false}
                animate={{
                  y: pillars.findIndex((p) => p.id === activeId) * PILLAR_NAV_ROW_PX,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              {pillars.map((p) => {
                const isActive = activeId === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => scrollTo(p.id)}
                    className={[
                      PILLAR_NAME_CLASS,
                      "flex h-14 w-full items-center pl-5 text-left text-base leading-none transition-colors duration-200 md:text-lg lg:text-xl",
                      isActive ? "text-[#FF5733]" : "text-white/30 hover:text-white/60",
                    ].join(" ")}
                  >
                    {p.leftLabel}
                  </button>
                );
              })}
            </nav>
          </aside>

          <div className="min-w-0 flex-1">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center lg:text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Services that make business{" "}
                <span className="relative inline-block px-2 font-serif italic text-[#FF5733]">
                  sense
                </span>
              </h2>
            </motion.div>

            <div className="space-y-16">
              {pillars.map((p) => (
                <motion.section
                  key={p.id}
                  ref={(el) => {
                    contentRefs.current[p.id] = el;
                  }}
                  data-pillar-id={p.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl bg-[#242424] p-10 shadow-xl shadow-black/30"
                >
                  <div className="relative">
                    <div
                      className="pointer-events-none absolute -left-3 top-1 hidden h-[calc(100%-0.25rem)] w-px bg-gradient-to-b from-[#FF5733]/70 via-[#FF5733]/25 to-transparent md:block"
                      aria-hidden
                    />
                    <h3 className="max-w-5xl text-balance md:pl-5">
                      <span
                        className={[
                          PILLAR_NAME_CLASS,
                          "inline align-baseline text-base leading-none text-white md:text-lg lg:text-xl",
                        ].join(" ")}
                      >
                        {p.title}
                      </span>
                      <span
                        className={[
                          "mx-2.5 inline align-baseline font-sans text-2xl font-extralight leading-none md:mx-3.5 md:text-3xl lg:mx-4 lg:text-4xl",
                          p.accentClass,
                        ].join(" ")}
                        aria-hidden
                      >
                        —
                      </span>
                      <span className="inline align-baseline font-serif text-xl font-light italic leading-snug tracking-[-0.015em] text-white/[0.82] md:text-2xl md:leading-[1.4] lg:text-3xl lg:leading-[1.35]">
                        {p.subtitle}
                      </span>
                    </h3>
                  </div>

                  <div className="mt-10 space-y-5">
                    {p.items.map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <span className="mt-2.5 inline-block h-2 w-2 rounded-full bg-[#FF5733] shadow-sm shadow-[#FF5733]/30" />
                        <p className="text-sm text-white/75 md:text-base leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
