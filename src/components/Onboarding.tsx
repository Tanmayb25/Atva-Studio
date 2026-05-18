"use client";

import { motion } from "framer-motion";

const onboardingSteps = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We start with a 30-minute call to understand your business, goals, challenges, and vision for growth.",
  },
  {
    step: 2,
    title: "Proposal & Strategy",
    description:
      "Within 48 hours, you receive a detailed proposal with our recommended strategy, timeline, and transparent pricing.",
  },
  {
    step: 3,
    title: "Kickoff",
    description:
      "Once approved, we schedule a kickoff meeting to align on deliverables, communication, and project milestones.",
  },
  {
    step: 4,
    title: "Execution Begins",
    description:
      "Our team gets to work. You'll receive regular updates and have direct access to your dedicated project lead.",
  },
  {
    step: 5,
    title: "Review & Iterate",
    description:
      "We present results, gather feedback, and continuously optimize to ensure we exceed your expectations.",
  },
];

export default function Onboarding() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Onboarding Process
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Getting started is simple. Here&apos;s what to expect when you partner with atva.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF5733] via-[#FF5733]/50 to-[#FF5733] hidden md:block" />

          <div className="space-y-8">
            {onboardingSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 md:gap-10"
              >
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-[#1A1A1A] border-2 border-[#FF5733] flex items-center justify-center">
                  <span className="text-xl font-bold text-[#FF5733]">
                    {item.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
