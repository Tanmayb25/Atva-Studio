"use client";

import { motion } from "framer-motion";

function scrollToContact() {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const pricingPlans = [
  {
    name: "Starter",
    price: "$499",
    period: "per project",
    description: "Perfect for small businesses just getting started",
    features: [
      "Single service engagement",
      "Basic reporting",
      "Email support",
      "1 revision round",
    ],
  },
  {
    name: "Growth",
    price: "$1,499",
    period: "per month",
    description: "For businesses ready to scale their digital presence",
    features: [
      "Multi-channel marketing",
      "Weekly analytics reports",
      "Priority support",
      "Unlimited revisions",
      "Strategy sessions",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    description: "Full-service solution for established businesses",
    features: [
      "All services included",
      "Dedicated account manager",
      "24/7 support",
      "Custom AI solutions",
      "Monthly strategy reviews",
      "Performance guarantees",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pricing
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Transparent, flexible pricing that scales with your business
          </p>
        </motion.div>

        {/* Pay-as-you-go banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16 p-6 rounded-2xl bg-[#3C3C3C]/40 border border-[#FF5733]/30 text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            Pay-As-You-Go Model
          </h3>
          <p className="text-white/80 text-sm">
            No long-term contracts. No hidden fees. Flexible engagement that 
            adapts to your needs. Start, pause, or scale anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-[#3C3C3C]/50 border-[#FF5733]/50 shadow-lg shadow-[#FF5733]/10"
                  : "bg-[#3C3C3C]/40 border-[#3C3C3C] hover:border-[#FF5733]/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF5733] text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-white/50 text-sm">/{plan.period}</span>
                </div>
                <p className="text-white/80 text-sm mt-2">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-white"
                  >
                    <span className="text-[#FF5733]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <motion.button
                type="button"
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-full font-medium transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#FF5733] text-white hover:bg-[#FF5733]/90"
                    : "bg-[#3C3C3C] text-white hover:bg-[#3C3C3C]/80"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
