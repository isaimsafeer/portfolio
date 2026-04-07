const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "AI Models Deployed" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-snug">
              Building intelligent systems that actually work in production
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I&apos;m a Full Stack AI &amp; ML Engineer with a focus on
                turning complex AI research into practical, scalable
                applications. I work across the full stack — from designing
                LangChain-powered RAG architectures to shipping polished
                React frontends.
              </p>
              <p>
                My work spans intelligent automation bots, document Q&amp;A
                systems, fine-tuned language models, and high-performance
                REST APIs. I care deeply about code quality, system design,
                and building things that last.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-900 border border-zinc-800 rounded-xl px-7 py-6 flex items-center gap-6"
              >
                <span className="text-3xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-zinc-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
