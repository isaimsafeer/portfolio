export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
    >
      <div className="animate-fade-in-up max-w-3xl">
        <span className="inline-block text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          Full Stack AI &amp; ML Engineer
        </span>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
          Hi, I&apos;m{" "}
          <span className="text-blue-400">Saim Safeer</span>
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          I design and build production-ready AI systems — from RAG pipelines
          and LLM applications to full-stack web platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#projects"
            className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-100"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-100"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg
          className="w-5 h-5 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
