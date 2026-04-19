"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit - no backend
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            Ready to grow your business? Let&apos;s talk. Fill out the form below 
            and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-7 p-10 rounded-3xl bg-[#242424] shadow-2xl shadow-black/40"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-3">Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF5733]/50 transition-all shadow-md shadow-black/20"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-3">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF5733]/50 transition-all shadow-md shadow-black/20"
              placeholder="john@company.com"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-3">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF5733]/50 transition-all shadow-md shadow-black/20"
              placeholder="Your Company"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-medium text-white/80 mb-3">
              Budget (optional)
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] text-white focus:outline-none focus:ring-2 focus:ring-[#FF5733]/50 transition-all shadow-md shadow-black/20"
            >
              <option value="">Select a range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-50k">$15,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white/80 mb-3">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF5733]/50 transition-all shadow-md shadow-black/20 resize-none"
              placeholder="Tell us about your project and goals..."
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-full bg-[#FF5733] text-white font-semibold text-base hover:bg-[#FF5733]/90 transition-all duration-300 shadow-xl shadow-black/30"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
