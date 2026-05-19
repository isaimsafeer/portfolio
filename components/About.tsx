"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "AI Models Deployed" },
  { value: "5+", label: "Enterprise Clients" },
];

const technologies = [
  "Python",
  "LangChain",
  "LangGraph",
  "OpenAI APIs",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Flask",
  "Django",
  "Selenium",
  "PostgreSQL",
  "Supabase",
  "Vector Databases",
  "RAG Pipelines",
  "AI Agents",
  "Automation Systems",
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-violet-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB]">
            Building intelligent systems that scale
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — text + tech tags */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-4 text-[#9CA3AF] leading-relaxed mb-8">
              <p className="text-[#E5E7EB]/90 text-lg leading-relaxed">
                I&apos;m an AI Developer and Automation Engineer with 3+ years
                of experience turning complex AI research into
                production-ready systems.
              </p>
              <p>
                I specialize in building RAG architectures, voice AI agents,
                and end-to-end automation solutions that solve real business
                problems. My work spans intelligent voice agents, document
                Q&amp;A systems, Selenium automation pipelines, and full-stack
                web platforms.
              </p>
              <p>
                I&apos;ve collaborated with enterprises and startups across
                defense, tech, and digital services — from NESCOM to cutting-edge
                AI companies. I care deeply about production quality, system
                design, and building things that last.
              </p>
            </div>

            <div>
              <p className="text-[#9CA3AF]/50 text-xs uppercase tracking-[0.2em] font-medium mb-3">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 hover:border-violet-400/40 hover:bg-violet-500/10 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 transition-all duration-300"
              >
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-[#9CA3AF] text-sm">{stat.label}</div>
              </motion.div>
            ))}

            {/* Extra card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="col-span-2 glass-card rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px #4ade80" }} />
                <span className="text-[#E5E7EB] font-medium text-sm">
                  Currently Available
                </span>
              </div>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Open to freelance projects, consulting engagements, and
                full-time AI/automation roles.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
