"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
}

const projects: Project[] = [
  {
    title: "TechFlow SaaS",
    description: "Complete brand overhaul and 300% increase in organic traffic",
    category: "SEO & Branding",
    problem: "TechFlow had a dated brand identity and was struggling to rank for competitive SaaS keywords. Their organic traffic had plateaued and they were losing market share to newer competitors.",
    solution: "We conducted a comprehensive brand audit and redesigned their visual identity. Implemented a technical SEO overhaul, created a content strategy targeting high-intent keywords, and built authoritative backlinks through strategic outreach.",
    result: "300% increase in organic traffic within 6 months. Brand recognition improved significantly with a 45% increase in branded searches. Lead generation from organic channels grew by 250%.",
  },
  {
    title: "GreenLeaf E-commerce",
    description: "Custom Shopify build with 5x conversion rate improvement",
    category: "Web Design",
    problem: "GreenLeaf's existing website had a 0.8% conversion rate, poor mobile experience, and a checkout process that caused 70% cart abandonment. Revenue was stagnating despite growing traffic.",
    solution: "Designed and developed a custom Shopify theme optimized for conversions. Implemented one-click checkout, improved product photography presentation, added trust signals, and created a seamless mobile-first experience.",
    result: "Conversion rate jumped from 0.8% to 4.2% (5x improvement). Cart abandonment reduced to 35%. Mobile revenue increased by 180%. Overall revenue grew 320% year-over-year.",
  },
  {
    title: "FinanceHub",
    description: "Google Ads campaign delivering 8x ROAS consistently",
    category: "Google Ads",
    problem: "FinanceHub was spending $50K/month on Google Ads with only 2x ROAS. High CPCs in the competitive finance niche were eating into margins, and they couldn't scale profitably.",
    solution: "Restructured campaigns with tight ad groups and negative keyword lists. Implemented smart bidding strategies, created high-converting landing pages, and developed a remarketing funnel to capture warm leads.",
    result: "Achieved consistent 8x ROAS while scaling spend to $150K/month. Cost per acquisition dropped by 60%. Generated $1.2M in attributable revenue within the first quarter.",
  },
  {
    title: "HealthFirst Clinic",
    description: "Local SEO strategy resulting in #1 rankings across 15 keywords",
    category: "SEO",
    problem: "HealthFirst was invisible in local search results, ranking on page 3+ for key terms. Competitors dominated the Google Map Pack, and the clinic was losing patients to nearby practices.",
    solution: "Optimized Google Business Profile, built local citations, implemented schema markup, and created location-specific content. Developed a review generation strategy and built local backlinks from health directories.",
    result: "#1 rankings for 15 high-value local keywords. Appeared in Google Map Pack for all target searches. New patient inquiries increased by 400%. Became the top-rated clinic in the area with 200+ 5-star reviews.",
  },
  {
    title: "AutoMate AI",
    description: "AI-powered workflow automation saving 40 hours weekly",
    category: "AI Consulting",
    problem: "AutoMate's team was drowning in repetitive tasks—data entry, report generation, and customer follow-ups consumed 60+ hours weekly. Growth was limited by operational bottlenecks.",
    solution: "Audited existing workflows and identified automation opportunities. Implemented AI-powered solutions for data processing, built custom GPT integrations for customer communications, and created automated reporting dashboards.",
    result: "Reduced manual work by 40 hours per week. Team productivity increased by 65%. Enabled the company to scale operations without additional hires. ROI achieved within 2 months.",
  },
  {
    title: "StyleBox Fashion",
    description: "Meta Ads scaling from $5K to $50K monthly spend profitably",
    category: "Meta Ads",
    problem: "StyleBox couldn't scale their Meta Ads beyond $5K/month without seeing diminishing returns. Creative fatigue was constant, and audience targeting had become ineffective.",
    solution: "Developed a creative testing framework with 20+ ad variations monthly. Implemented broad targeting with creative-led optimization, built a full-funnel campaign structure, and created UGC-style content that resonated with the audience.",
    result: "Scaled from $5K to $50K monthly spend while maintaining 4x ROAS. Customer acquisition cost remained stable during scaling. Generated $2.4M in revenue from Meta Ads alone in 12 months.",
  },
];

export default function Work() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="work" className="py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              Our Work
            </h2>
            <p className="text-white/70 text-base max-w-2xl mx-auto">
              A selection of projects where we&apos;ve driven exceptional results
            </p>
          </motion.div>
        </div>

        {/* Manually scrollable carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-6 pb-4 cursor-grab scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
          style={{ scrollBehavior: "smooth" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex-shrink-0 w-80 p-7 rounded-2xl bg-[#242424] shadow-lg shadow-black/25 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 group"
            >
              {/* Image placeholder */}
              <div className="aspect-video rounded-xl bg-[#1A1A1A] mb-5 flex items-center justify-center shadow-md shadow-black/20">
                <div className="text-4xl opacity-50">🖼️</div>
              </div>
              <div className="text-xs text-[#FF5733] font-medium mb-2">
                {project.category}
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-[#FF5733] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-5">{project.description}</p>
              
              {/* Explore button */}
              <motion.button
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-xl bg-[#FF5733] text-white text-sm font-semibold hover:bg-[#FF5733]/90 transition-all duration-300 shadow-md shadow-black/20"
              >
                Explore Case Study
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl bg-[#1A1A1A] shadow-2xl shadow-black/50"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Header */}
              <div className="p-8 pb-0">
                <div className="text-xs text-[#FF5733] font-medium mb-3 tracking-wider uppercase">
                  {selectedProject.category}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {selectedProject.description}
                </p>
              </div>

              {/* Content sections */}
              <div className="p-8 space-y-8">
                {/* Problem */}
                <div className="p-6 rounded-2xl bg-[#242424] shadow-lg shadow-black/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h4 className="text-base font-semibold text-white">Problem</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">{selectedProject.problem}</p>
                </div>

                {/* Solution */}
                <div className="p-6 rounded-2xl bg-[#242424] shadow-lg shadow-black/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-base font-semibold text-white">Solution</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">{selectedProject.solution}</p>
                </div>

                {/* Result */}
                <div className="p-6 rounded-2xl bg-[#242424] shadow-lg shadow-black/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FF5733]/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#FF5733]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="text-base font-semibold text-white">Result</h4>
                  </div>
                  <p className="text-white/70 leading-relaxed">{selectedProject.result}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
