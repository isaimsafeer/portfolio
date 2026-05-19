"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/isaimsafeer",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/isaimsafeer",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/mnjrnlka", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full opacity-[0.05] blur-[120px] pointer-events-none"
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
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB]">
            Let&apos;s work together
          </h2>
          <p className="text-[#9CA3AF] mt-4 max-w-md mx-auto text-sm leading-relaxed">
            Have an AI project in mind, need automation expertise, or want to
            collaborate? Let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card rounded-2xl p-6">
              <p className="text-[#9CA3AF]/60 text-xs uppercase tracking-[0.2em] font-medium mb-2">
                Email
              </p>
              <a
                href="mailto:isaimsafeer@gmail.com"
                className="text-[#E5E7EB] hover:text-violet-400 transition-colors duration-200 font-medium text-sm"
              >
                isaimsafeer@gmail.com
              </a>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <p className="text-[#9CA3AF]/60 text-xs uppercase tracking-[0.2em] font-medium mb-4">
                Social Links
              </p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-2 text-[#9CA3AF] hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-2 h-2 rounded-full bg-green-400"
                  style={{ boxShadow: "0 0 8px #4ade80" }}
                />
                <p className="text-[#E5E7EB] font-medium text-sm">
                  Open to opportunities
                </p>
              </div>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">
                Available for freelance AI projects, consulting engagements, and
                exciting full-time roles in AI/ML development.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4 h-full min-h-[320px]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-[#E5E7EB] font-semibold text-lg">
                    Message sent!
                  </p>
                  <p className="text-[#9CA3AF] text-sm max-w-xs leading-relaxed">
                    Thanks for reaching out. I&apos;ll get back to you as soon
                    as possible.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-7 flex flex-col gap-4"
                >
                  <div>
                    <label className="block text-[#9CA3AF] text-xs mb-1.5 font-medium">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-violet-500/50 outline-none rounded-xl px-4 py-2.5 text-[#E5E7EB] text-sm placeholder-[#9CA3AF]/40 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[#9CA3AF] text-xs mb-1.5 font-medium">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-violet-500/50 outline-none rounded-xl px-4 py-2.5 text-[#E5E7EB] text-sm placeholder-[#9CA3AF]/40 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[#9CA3AF] text-xs mb-1.5 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] focus:border-violet-500/50 outline-none rounded-xl px-4 py-2.5 text-[#E5E7EB] text-sm placeholder-[#9CA3AF]/40 transition-colors duration-200 resize-none"
                    />
                  </div>
                  {error && (
                    <p className="text-red-400 text-xs leading-relaxed -mt-1">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-violet-600 hover:bg-violet-500 disabled:opacity-60 text-white rounded-xl py-3 text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-px mt-1 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
