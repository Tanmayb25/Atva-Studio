// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     budget: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Placeholder submit - no backend
//     console.log("Form submitted:", formData);
//     alert("Thanks for reaching out! We'll be in touch soon.");
//     setFormData({ name: "", email: "", company: "", budget: "", message: "" });
//   };

//   return (
//     <section id="contact" className="py-32 px-6">
//       <div className="max-w-4xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
//             Contact Us
//           </h2>
//           <p className="text-white/70 text-base max-w-xl mx-auto">
//             Ready to grow your business? Let&apos;s talk. Fill out the form below 
//             and we&apos;ll get back to you within 24 hours.
//           </p>
//         </motion.div>

//         <motion.form
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-7 p-10 rounded-3xl bg-[#242424] shadow-2xl shadow-black/40"
//         >
//           {/* Name */}
//           <div>
//             <label className="block text-sm font-medium text-white/80 mb-3">Name *</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF5733]/50 transition-all shadow-md shadow-black/20"
//               placeholder="John Doe"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-white/80 mb-3">Email *</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF5733]/50 transition-all shadow-md shadow-black/20"
//               placeholder="john@company.com"
//             />
//           </div>

//           {/* Company */}
//           <div>
//             <label className="block text-sm font-medium text-white/80 mb-3">Company</label>
//             <input
//               type="text"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF5733]/50 transition-all shadow-md shadow-black/20"
//               placeholder="Your Company"
//             />
//           </div>

//           {/* Budget */}
//           <div>
//             <label className="block text-sm font-medium text-white/80 mb-3">
//               Budget (optional)
//             </label>
//             <select
//               name="budget"
//               value={formData.budget}
//               onChange={handleChange}
//               className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] text-white focus:outline-none focus:ring-2 focus:ring-[#FF5733]/50 transition-all shadow-md shadow-black/20"
//             >
//               <option value="">Select a range</option>
//               <option value="under-5k">Under $5,000</option>
//               <option value="5k-15k">$5,000 - $15,000</option>
//               <option value="15k-50k">$15,000 - $50,000</option>
//               <option value="50k+">$50,000+</option>
//             </select>
//           </div>

//           {/* Message */}
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-white/80 mb-3">
//               Message *
//             </label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows={5}
//               className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#FF5733]/50 transition-all shadow-md shadow-black/20 resize-none"
//               placeholder="Tell us about your project and goals..."
//             />
//           </div>

//           {/* Submit */}
//           <div className="md:col-span-2">
//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="w-full py-4 rounded-full bg-[#FF5733] text-white font-semibold text-base hover:bg-[#FF5733]/90 transition-all duration-300 shadow-xl shadow-black/30"
//             >
//               Send Message
//             </motion.button>
//           </div>
//         </motion.form>
//       </div>
//     </section>
//   );
// }

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitError(null);
    setSubmitSuccess(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || "Failed to send message");
      }

      setSubmitSuccess("Thanks for reaching out! We'll be in touch soon.");
      setFormData({ name: "", email: "", company: "", budget: "", message: "" });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-white/80 max-w-xl mx-auto">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800"
        >
          {(submitError || submitSuccess) && (
            <div className="md:col-span-2">
              {submitError && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {submitError}
                </div>
              )}
              {submitSuccess && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                  {submitSuccess}
                </div>
              )}
            </div>
          )}
          {/* Name */}
          <div>
            <label className="block text-sm text-white/80 mb-2">Name *</label>
            <input
              suppressHydrationWarning
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-fire transition-colors"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-white/80 mb-2">Email *</label>
            <input
              suppressHydrationWarning
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-ember transition-colors"
              placeholder="john@company.com"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm text-white/80 mb-2">Company</label>
            <input
              suppressHydrationWarning
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-ember transition-colors"
              placeholder="Your Company"
            />
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm text-white/80 mb-2">
              Budget (optional)
            </label>
            <select
              suppressHydrationWarning
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:border-ember transition-colors"
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
            <label className="block text-sm text-white/80 mb-2">
              Message *
            </label>
            <textarea
              suppressHydrationWarning
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-ember transition-colors resize-none"
              placeholder="Tell us about your project and goals..."
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <motion.button
              suppressHydrationWarning
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full py-4 rounded-full bg-gradient-to-r from-ember to-fire text-white font-semibold hover:from-amber hover:to-fire transition-all duration-300 shadow-lg shadow-ember/25 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}