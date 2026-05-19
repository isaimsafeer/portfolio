"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "AI Developer",
  "Automation Engineer",
  "Full Stack Developer",
  "RAG & AI Agent Developer",
];

function TypewriterRole() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[idx];
    const delay = deleting ? 45 : text.length === full.length ? 1800 : 95;

    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < full.length) {
          setText(full.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIdx((i) => (i + 1) % roles.length);
        }
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="text-cyan-400 font-semibold">
      {text}
      <span className="inline-block w-0.5 h-6 bg-cyan-400 ml-0.5 align-middle animate-pulse" />
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[140px]"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px]"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent)" }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-12">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-medium tracking-[0.12em] uppercase mb-8"
        >
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" style={{ boxShadow: "0 0 6px #4ade80" }} />
          Available for Work
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-5"
        >
          <span className="text-[#E5E7EB]">Hi, I&apos;m </span>
          <span className="gradient-text">Saim Safeer</span>
        </motion.h1>

        {/* Animated role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#9CA3AF] mb-6 h-9 flex items-center justify-center"
        >
          <TypewriterRole />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[#9CA3AF] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build production-ready AI systems, from RAG pipelines and LLM
          agents to full-stack automation platforms that solve real problems at
          scale.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5"
          >
            View My Work
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-violet-500/40 text-[#E5E7EB] rounded-xl font-medium text-sm transition-all duration-300 hover:bg-violet-500/8 hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download CV
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-cyan-500/40 text-[#9CA3AF] hover:text-[#E5E7EB] rounded-xl font-medium text-sm transition-all duration-300 hover:bg-cyan-500/5 hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center items-center gap-5"
        >
          <a
            href="https://github.com/isaimsafeer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors duration-200 text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href="https://www.linkedin.com/in/isaimsafeer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors duration-200 text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#9CA3AF]/40 text-[10px] tracking-[0.2em] uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-violet-500/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
