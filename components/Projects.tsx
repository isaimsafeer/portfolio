"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Voice Agent System",
    description:
      "Production-grade voice AI agents with real-time speech recognition, LLM processing, and natural TTS synthesis. Handles multi-turn conversations with persistent context memory.",
    techStack: ["Python", "LangChain", "OpenAI", "Twilio", "FastAPI"],
    githubUrl: "https://github.com/isaimsafeer",
    demoUrl: undefined,
    icon: "🎙️",
    accent: "violet",
  },
  {
    title: "Enterprise RAG Application",
    description:
      "Multi-document retrieval-augmented generation pipeline for enterprise knowledge bases. Supports semantic search with re-ranking, citation tracking, and streaming responses.",
    techStack: ["Python", "LangChain", "Pinecone", "OpenAI", "React"],
    githubUrl: "https://github.com/isaimsafeer",
    demoUrl: undefined,
    icon: "🔍",
    accent: "cyan",
  },
  {
    title: "Selenium Automation Suite",
    description:
      "Robust web automation framework for enterprise-scale data extraction, form automation, and workflow testing across complex web applications with anti-detection measures.",
    techStack: ["Python", "Selenium", "Playwright", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/isaimsafeer",
    demoUrl: undefined,
    icon: "⚙️",
    accent: "emerald",
  },
  {
    title: "Instagram Automation Tool",
    description:
      "Intelligent Instagram management system with AI-powered content scheduling, engagement automation, follower analytics, and multi-account management dashboard.",
    techStack: ["Python", "FastAPI", "Instagram API", "Redis", "React"],
    githubUrl: "https://github.com/isaimsafeer",
    demoUrl: undefined,
    icon: "📱",
    accent: "pink",
  },
  {
    title: "AI Ingredient Extraction Model",
    description:
      "Fine-tuned NLP model for extracting structured ingredient data from unstructured text. Processes recipes, product labels, and nutritional content with high accuracy.",
    techStack: ["Python", "Transformers", "spaCy", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/isaimsafeer",
    demoUrl: undefined,
    icon: "🧪",
    accent: "orange",
  },
  {
    title: "CRM + Automation Dashboard",
    description:
      "Full-featured CRM with integrated automation workflows, AI-powered lead scoring, email sequence automation, and real-time analytics with custom reporting.",
    techStack: ["Next.js", "Django", "PostgreSQL", "Celery", "Redis"],
    githubUrl: "https://github.com/isaimsafeer",
    demoUrl: undefined,
    icon: "📊",
    accent: "blue",
  },
  {
    title: "LLM Powered Invoice Automation Webcrawler",
    description:
      "Built an autonomous AI-powered webcrawler capable of logging into registrar portals, intelligently navigating dashboards, and extracting invoices using LLM-driven decision making and automation workflows.",
    techStack: [
      "FastAPI",
      "Playwright",
      "LangChain",
      "PostgreSQL",
      "LLM APIs",
      "Bitwarden CLI",
    ],
    githubUrl: "https://github.com/isaimsafeer",
    demoUrl: undefined,
    icon: "🤖",
    accent: "violet",
  },
];

const accentStyles: Record<
  string,
  { hover: string; badge: string }
> = {
  violet: {
    hover: "hover:border-violet-500/30 hover:bg-violet-500/[0.06]",
    badge: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
  cyan: {
    hover: "hover:border-cyan-500/30 hover:bg-cyan-500/[0.06]",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  emerald: {
    hover: "hover:border-emerald-500/30 hover:bg-emerald-500/[0.06]",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  pink: {
    hover: "hover:border-pink-500/30 hover:bg-pink-500/[0.06]",
    badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",
  },
  orange: {
    hover: "hover:border-orange-500/30 hover:bg-orange-500/[0.06]",
    badge: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  },
  blue: {
    hover: "hover:border-blue-500/30 hover:bg-blue-500/[0.06]",
    badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  },
  teal: {
    hover: "hover:border-teal-500/30 hover:bg-teal-500/[0.06]",
    badge: "bg-teal-500/10 text-teal-300 border-teal-500/20",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB]">
            Things I&apos;ve built
          </h2>
          <p className="text-[#9CA3AF] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Production AI systems, automation tools, and full-stack applications
            shipped for real clients and personal research.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const styles = accentStyles[project.accent];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -5 }}
                className={`group glass-card rounded-2xl p-6 flex flex-col transition-all duration-300 ${styles.hover}`}
              >
                {/* Icon + title */}
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl leading-none mt-0.5">
                    {project.icon}
                  </span>
                  <h3 className="text-[#E5E7EB] font-semibold text-base leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#9CA3AF] text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-0.5 text-[11px] font-medium rounded-md border transition-all duration-200 ${styles.badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#9CA3AF] hover:text-white transition-colors duration-200 text-xs font-medium"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Source Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[#9CA3AF] hover:text-violet-400 transition-colors duration-200 text-xs font-medium"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
