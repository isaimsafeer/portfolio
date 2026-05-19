"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "TrySoft AI",
    logo: "🤖",
    role: "AI Developer & Consultant",
    period: "2024 — Present",
    type: "Full-time",
    description:
      "Building production AI systems including voice agents, RAG pipelines, and automation tools. Leading AI integration projects for enterprise clients across multiple verticals.",
    highlights: [
      "Developed multi-modal AI voice agents with real-time LLM processing",
      "Designed and deployed RAG architectures for enterprise knowledge bases",
      "Built intelligent automation workflows reducing manual operations by 70%+",
    ],
    website: "https://trysoftai.com/",
    accent: "violet",
  },
  {
    company: "Egeeks Global",
    logo: "⚡",
    role: "Full Stack AI Developer",
    period: "2023 — 2024",
    type: "Full-time",
    description:
      "Developed full-stack web applications with AI-powered features. Built automation systems and integrated LLM capabilities into existing business workflows.",
    highlights: [
      "Delivered 10+ client projects with AI/ML components",
      "Built CRM and automation dashboard with intelligent lead scoring",
      "Integrated OpenAI APIs into existing enterprise platforms",
    ],
    website: "https://egeeksglobal.com/",
    accent: "cyan",
  },
  {
    company: "NESCOM",
    logo: "🛡️",
    role: "AI / Automation Engineer",
    period: "2022 — 2023",
    type: "Contract",
    description:
      "Worked on scientific computing and automation projects for Pakistan's National Engineering & Scientific Commission. Implemented Geant4 simulations and data processing pipelines.",
    highlights: [
      "Developed Geant4 Monte Carlo simulations for particle physics research",
      "Built automated data processing and analysis pipelines",
      "Collaborated with research teams on computational physics projects",
    ],
    website:
      "https://www.nti.org/education-center/facilities/national-engineering-and-scientific-commission-nescom/",
    accent: "emerald",
  },
  {
    company: "Freelance",
    logo: "🚀",
    role: "Independent AI Developer",
    period: "2021 — Present",
    type: "Freelance",
    description:
      "Independent consulting and development for startups and small businesses. Specializing in AI agent development, RAG systems, and intelligent automation solutions.",
    highlights: [
      "Delivered 15+ AI/automation projects for international clients",
      "Specialized in Instagram & social media automation systems",
      "Built ingredient extraction models and NLP solutions for food-tech clients",
    ],
    website: "#",
    accent: "orange",
  },
];

const accentLine: Record<string, string> = {
  violet: "bg-violet-500",
  cyan: "bg-cyan-500",
  emerald: "bg-emerald-500",
  orange: "bg-orange-500",
};

const accentBadge: Record<string, string> = {
  violet: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  orange: "bg-orange-500/10 text-orange-300 border-orange-500/20",
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB]">
            Work History
          </h2>
          <p className="text-[#9CA3AF] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            My professional journey building AI systems, automation tools, and
            full-stack applications.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-6 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`w-3.5 h-3.5 rounded-full ${accentLine[exp.accent]} ring-2 ring-[#0B0F19] ring-offset-0 z-10`}
                    style={{ boxShadow: `0 0 12px currentColor` }}
                  />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card rounded-2xl p-6 transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{exp.logo}</span>
                      <div>
                        <h3 className="text-[#E5E7EB] font-semibold text-base">
                          {exp.company}
                        </h3>
                        <p className="text-[#9CA3AF] text-sm">{exp.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-lg border ${accentBadge[exp.accent]}`}
                      >
                        {exp.type}
                      </span>
                      <span className="text-[#9CA3AF]/60 text-xs">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-[#9CA3AF] text-sm"
                      >
                        <span className="text-violet-400 mt-1 shrink-0 text-xs">
                          ▸
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
