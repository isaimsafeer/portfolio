"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95vw] min-w-[380px] max-w-[1440px]">
      {/* Main pill bar */}
      <nav
        className={`relative flex items-center h-16 px-4 ring-2 backdrop-blur-md shadow-[0_10px_20px_-10px_black] transition-all duration-300
          ${darkMode
            ? "bg-black/80 ring-blue-500/40"
            : "bg-white/80 ring-blue-400/50"
          }
          ${menuOpen ? "rounded-3xl" : "rounded-full"}
        `}
      >
        {/* Brand */}
        <div className={`flex items-center gap-2 border rounded-full px-3 py-1.5 absolute left-4 top-1/2 -translate-y-1/2
          ${darkMode
            ? "bg-blue-500/20 border-blue-400/40"
            : "bg-blue-100/80 border-blue-300/60"
          }`}
        >
          {/* Brand icon */}
          <Link
            href="/"
            className={`font-bold text-base tracking-tight whitespace-nowrap ${darkMode ? "text-white" : "text-gray-900"}`}
            onClick={() => setMenuOpen(false)}
          >
            Saim
          </Link>
        </div>

        {/* Desktop nav — centered */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 m-0 p-0 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-200
                  ${darkMode
                    ? "text-blue-100/80 hover:text-white hover:bg-blue-500/25"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-100/70"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Theme toggle + hamburger */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-3">

          {/* Light / Dark toggle pill */}
          <button
            aria-label="Toggle theme"
            onClick={() => setDarkMode((v) => !v)}
            className={`hidden md:flex items-center gap-1 px-2 py-1 rounded-full border text-xs font-medium transition-all duration-200
              ${darkMode
                ? "bg-blue-500/20 border-blue-400/40 text-blue-200 hover:bg-blue-500/35"
                : "bg-blue-100 border-blue-300/60 text-blue-700 hover:bg-blue-200"
              }`}
          >
            {darkMode ? (
              <>
                {/* Sun icon */}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
                Light
              </>
            ) : (
              <>
                {/* Moon icon */}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
                Dark
              </>
            )}
          </button>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            className={`md:hidden transition-colors ${darkMode ? "text-white hover:text-blue-300" : "text-gray-800 hover:text-blue-600"}`}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className={`md:hidden mt-2 mx-2 rounded-2xl backdrop-blur-md ring-2 shadow-[0_10px_20px_-10px_black] px-6 py-4 flex flex-col gap-1
          ${darkMode
            ? "bg-black/90 ring-blue-500/30"
            : "bg-white/95 ring-blue-300/40"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-200
                ${darkMode
                  ? "text-blue-100/80 hover:text-white hover:bg-blue-500/25"
                  : "text-gray-700 hover:text-blue-700 hover:bg-blue-100"
                }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile theme toggle */}
          <div className={`border-t mt-2 pt-3 ${darkMode ? "border-blue-500/20" : "border-blue-200/50"}`}>
            <button
              onClick={() => setDarkMode((v) => !v)}
              className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 w-full
                ${darkMode
                  ? "text-blue-200 hover:bg-blue-500/25"
                  : "text-blue-700 hover:bg-blue-100"
                }`}
            >
              {darkMode ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="12" cy="12" r="5" />
                    <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </svg>
                  Switch to Light
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                  </svg>
                  Switch to Dark
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}