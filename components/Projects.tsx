import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Enterprise RAG System",
    description:
      "A production-grade Retrieval-Augmented Generation pipeline that allows enterprises to query private document repositories using natural language. Supports multi-document retrieval with re-ranking.",
    techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "React"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "AI Automation Bot",
    description:
      "Intelligent workflow automation bot that uses LLMs to understand task descriptions and execute multi-step browser and API actions autonomously. Reduced manual operations by 80%.",
    techStack: ["Python", "Playwright", "GPT-4", "Celery", "Redis", "Django"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Multi-Modal Chatbot",
    description:
      "A full-featured conversational AI assistant with support for text, image, and document inputs. Built with streaming responses, conversation memory, and tool use capabilities.",
    techStack: ["Next.js", "TypeScript", "Vercel AI SDK", "PostgreSQL", "Docker"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "ML Model Monitoring Dashboard",
    description:
      "Real-time dashboard for monitoring deployed ML models — tracking prediction drift, latency, accuracy degradation, and data quality over time with automated alerting.",
    techStack: ["Python", "FastAPI", "React", "Recharts", "PostgreSQL", "AWS"],
    githubUrl: "#",
    demoUrl: undefined,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Things I&apos;ve built
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            A selection of AI and full-stack projects I&apos;ve shipped —
            ranging from internal tools to client-facing products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
