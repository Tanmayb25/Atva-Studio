"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">
              About atva
            </h2>
            <div className="space-y-4 text-white/75 leading-relaxed text-sm md:text-base">
              <p>
                We&apos;re not your typical agency. At atva, we blend cutting-edge 
                technology with battle-tested marketing strategies to deliver 
                results that matter.
              </p>
              <p>
                Founded on the principle that growth should be measurable and 
                scalable, we partner with ambitious brands ready to dominate 
                their markets. Our lean, results-first approach means no fluff, 
                no vanity metrics—just real business impact.
              </p>
              <p>
                From AI-powered automation to conversion-optimized websites, 
                from data-driven SEO to high-performing ad campaigns—we bring 
                the full arsenal of modern digital marketing to your doorstep.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-xl font-bold text-[#FF5733] mb-1">
                  Data-Driven
                </div>
                <p className="text-sm text-white/70">
                  Every decision backed by analytics and insights
                </p>
              </div>
              <div>
                <div className="text-xl font-bold text-[#FF5733] mb-1">
                  Results-First
                </div>
                <p className="text-sm text-white/70">
                  We measure success by your bottom line
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-[#2A2A2A] p-8 flex items-center justify-center shadow-2xl shadow-black/40">
              <div className="text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#FF5733]/10 shadow-lg shadow-[#FF5733]/10"
                />
                <div className="text-5xl font-bold text-[#FF5733]">
                  atva
                </div>
                <p className="text-white/70 mt-2 text-sm">
                  Growth. Engineered.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF5733]/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF5733]/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
