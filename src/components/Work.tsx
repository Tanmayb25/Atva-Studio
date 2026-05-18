"use client";

import { motion, AnimatePresence } from "framer-motion";
import { data } from "framer-motion/client";
import { useRef, useState } from "react";

interface Project {
  title: string;
  description: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  liveLink?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Helios Investment",
    description: "Modern brand identity and website for investment firm.",
    category: "Brand Website",
    problem: `Helios Investments, a new financial advisory firm, needed a professional digital presence to attract and onboard clients for personal and small business portfolio management services. The firm required a comprehensive website that could:

• Qualify leads through an interactive financial assessment quiz
• Capture and organize client data for follow-up
• Demonstrate expertise through educational content
• Provide practical financial tools
• Build trust and credibility with potential clients`,
    solution: `Developed a full-featured website with the following components:

Lead Generation & Qualification
• Interactive Financial Assessment Quiz: Custom questionnaire evaluating client needs, risk tolerance, and investment gaps
• Automated Data Capture: Quiz responses and contact information automatically stored in Google Sheets for admin review
• Lead Management System: Structured data pipeline enabling advisors to efficiently follow up with qualified prospects

Content & Tools
• Educational Blog: Finance and investment articles written by firm owner to establish thought leadership
• SIP Calculator: Interactive tool for clients to calculate potential returns on systematic investment plans
• Service Pages: Detailed information about portfolio management and advisory services

Trust Building
• Professional Homepage: Firm overview, team credentials, and client testimonials
• Process Transparency: Clear roadmap showing how the firm works with clients
• Responsive Design: Optimized experience across all devices

Technical Implementation
• Modern Tech Stack: Next.js with TypeScript for performance and maintainability
• Seamless Integration: Google Sheets API for efficient data management
• User Experience: Smooth interactions and intuitive navigation

The solution provides Helios Investments with a scalable platform to attract, qualify, and convert leads while establishing their expertise in the financial advisory space.`, 
    result: `Successfully launched a comprehensive digital platform that generated 150+ qualified leads in the first quarter. Client conversion rate increased by 65%.`,
    image: "/work_helios.png",
    liveLink: "https://heliosinvestments.in/",
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
              {/* Project image */}
              <div className="aspect-video rounded-xl bg-[#1A1A1A] mb-5 overflow-hidden shadow-md shadow-black/20">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} Project`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl opacity-50">🖼️</div>
                  </div>
                )}
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
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-[#FF5733] hover:text-[#FF5733]/80 transition-colors"
                    >
                      <span>View Live Website</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
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
                  <p className="text-white/70 leading-relaxed whitespace-pre-line">{selectedProject.problem}</p>
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
                  <p className="text-white/70 leading-relaxed whitespace-pre-line">{selectedProject.solution}</p>
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
