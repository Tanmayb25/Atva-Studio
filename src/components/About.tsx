
"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    quote: "We Build It. We Run It. You Own It.",
    sub: "Full ownership, zero lock-in. Everything we create belongs to you.",
  },
  {
    quote: "Beautiful by Design. Built to Convert.",
    sub: "Aesthetics that stop the scroll, performance that closes the deal.",
  },
  {
    quote: "We Make Your Brand Impossible to Ignore.",
    sub: "In a sea of noise, we make sure your brand is the signal.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF5733]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#FF5733] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-2xl">
            We&apos;re not an agency.{" "}
            <span className="text-white/40">We&apos;re your growth partner.</span>
          </h2>
        </motion.div> */}

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Differentiator quote blocks */}
          <div className="space-y-5">
            <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-[#FF5733] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Who We Are
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-2xl">
            We&apos;re not an agency.{" "}
            <span className="text-white/40">We&apos;re your growth partner.</span>
          </h2>
        </motion.div>
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative pl-5 border-l-2 border-[#FF5733]/30 hover:border-[#FF5733] transition-all duration-300"
              >
                <p className="text-white font-bold text-base md:text-lg leading-snug tracking-tight mb-1.5 group-hover:text-[#FF5733] transition-colors duration-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.sub}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Context + stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Brand mark */}
            <div className="mb-8">
              <img 
                src="/Asset 2.png" 
                alt="atva logo"
                className="w-auto h-auto max-w-full object-contain"
              />
              <p className="text-white/40 text-xs text-right tracking-widest uppercase mt-4">
                Growth. Engineered.
              </p>
            </div>
            {/* Prose */}
            <div className="space-y-4 text-white/65 leading-relaxed text-sm md:text-base">
              <p>
                At atva, we blend cutting-edge technology with battle-tested
                marketing strategies. No fluff, no vanity metrics, just real
                business impact built on measurable, scalable growth.
              </p>
              <p>
                From AI-powered automation to conversion-optimized websites,
                data-driven SEO to high-performing ad campaigns, we bring the
                full arsenal of modern digital marketing and hand the keys
                straight to you.
              </p>
            </div>

            {/* Stats row */}
            {/* <div className="grid grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              {[
                { label: "Data-Driven", desc: "Every decision backed by analytics" },
                { label: "Results-First", desc: "We measure success by your bottom line" },
                { label: "Full Ownership", desc: "Every asset, every account — yours" },
                { label: "Lean & Fast", desc: "No bloat, no bureaucracy" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#1A1A1A] p-5 hover:bg-[#212121] transition-colors duration-200"
                >
                  <div className="text-sm font-bold text-[#FF5733] mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div> */}

            {/* Brand mark */}
            {/* <div className="flex items-center gap-4">
              <div className="">
                <img 
                  src="/Asset 2.png" 
                  alt="atva logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                 <div className="text-white font-bold text-lg tracking-tight">atva</div> 
                <p className="text-white/40 text-xs tracking-widest uppercase">
                  Growth. Engineered.
                </p>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
