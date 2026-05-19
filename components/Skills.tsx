"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "AI / ML",
    icon: "🤖",
    skills: [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI APIs",
      "RAG Pipelines",
      "AI Agents",
      "Prompt Engineering",
      "Hugging Face",
    ],
  },
  {
    title: "Automation",
    icon: "⚙️",
    skills: [
      "Selenium",
      "Playwright",
      "Celery",
      "Task Scheduling",
      "Webhook Systems",
      "Instagram API",
      "Browser Automation",
    ],
  },
  {
    title: "Backend",
    icon: "🔧",
    skills: [
      "Django",
      "FastAPI",
      "Flask",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Microservices",
    ],
  },
  {
    title: "Frontend",
    icon: "✨",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn/ui",
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Vector Databases",
      "Pinecone",
      "MongoDB",
    ],
  },
  {
    title: "DevOps",
    icon: "☁️",
    skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[400px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
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
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB]">
            Technologies I work with
          </h2>
          <p className="text-[#9CA3AF] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Full-stack AI and development expertise spanning LLM orchestration
            to production infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group glass-card rounded-2xl p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-[#E5E7EB] font-semibold group-hover:text-violet-300 transition-colors duration-200">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg border border-white/[0.08] bg-white/[0.03] text-[#9CA3AF] group-hover:border-violet-500/20 group-hover:text-[#E5E7EB] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
