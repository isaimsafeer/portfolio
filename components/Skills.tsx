type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    title: "AI / ML",
    icon: "⬡",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "LangChain",
      "OpenAI API",
      "Hugging Face",
      "RAG Pipelines",
      "Vector DBs",
      "Prompt Engineering",
    ],
  },
  {
    title: "Frontend",
    icon: "◻",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: "◈",
    skills: [
      "Django",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Redis",
      "Docker",
      "REST APIs",
      "AWS",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technologies I work with
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-7 hover:border-zinc-600 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-blue-400 text-xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-lg">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium rounded-md transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
