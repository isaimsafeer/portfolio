"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Companies", href: "#companies" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));

    const detectActive = () => {
      const threshold = 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= threshold) {
          current = id;
        }
      }
      setActive(current);
    };

    detectActive();
    window.addEventListener("scroll", detectActive, { passive: true });
    return () => window.removeEventListener("scroll", detectActive);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div className="max-w-7xl mx-auto">
        <nav
          className={`flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-[#0B0F19]/80 border-violet-500/20 backdrop-blur-xl shadow-xl shadow-black/30"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="text-[#E5E7EB] font-bold text-base tracking-tight shrink-0"
          >
            <span className="text-violet-400">S</span>aim{" "}
            <span className="text-[#9CA3AF] font-medium">Safeer</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    active === link.href.slice(1)
                      ? "text-white"
                      : "text-[#9CA3AF] hover:text-[#E5E7EB]"
                  }`}
                >
                  {active === link.href.slice(1) && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-violet-500/20 rounded-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-px shrink-0"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-[#9CA3AF] hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden mt-2 bg-[#0B0F19]/95 border border-violet-500/20 backdrop-blur-xl rounded-2xl px-3 py-3"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors duration-200 ${
                    active === link.href.slice(1)
                      ? "text-white bg-violet-500/20"
                      : "text-[#9CA3AF] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-white/[0.07]">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl text-center transition-colors"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
