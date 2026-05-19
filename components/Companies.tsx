"use client";

import { motion } from "framer-motion";

const companies = [
  {
    name: "NESCOM",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d0/NESCOM_logo.png",
    website:
      "https://www.nti.org/education-center/facilities/national-engineering-and-scientific-commission-nescom/",
    description:
      "National defense engineering & scientific commission of Pakistan.",
    role: "AI / Automation Engineer",
  },
  {
    name: "Egeeks Global",
    logo: "https://egeeksglobal.com/wp-content/uploads/2025/06/Egeek-Logo.png",
    website: "https://egeeksglobal.com/",
    description: "Digital transformation & full-stack technology solutions.",
    role: "Full Stack AI Developer",
  },
  {
    name: "TrySoft AI",
    logo: "https://trysoftai.com/wp-content/uploads/2024/10/comapny-final-logo-BG-remove-right-side-scaled-e1748262185727.png",
    website: "https://trysoftai.com/",
    description: "AI-powered software solutions for modern businesses.",
    role: "AI Developer & Consultant",
  },
];

export default function Companies() {
  return (
    <section id="companies" className="py-28 px-6 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full opacity-[0.05] blur-[100px] pointer-events-none"
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
            Companies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E7EB]">
            Companies I&apos;ve Worked With
          </h2>
          <p className="text-[#9CA3AF] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Trusted by organizations across defense, digital transformation, and
            AI innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {companies.map((company, i) => (
            <motion.a
              key={company.name}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative glass-card rounded-2xl p-8 transition-all duration-300 overflow-hidden block"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5" />

              {/* Logo area */}
              <div className="h-16 flex items-center justify-center mb-6 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={company.logo}
                  alt={company.name + " logo"}
                  className="max-h-12 max-w-[160px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-100"
                />
              </div>

              <div className="relative z-10 text-center">
                <h3 className="text-[#E5E7EB] font-semibold text-base mb-1">
                  {company.name}
                </h3>
                <p className="text-violet-400/80 text-xs font-medium mb-3 tracking-wide">
                  {company.role}
                </p>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  {company.description}
                </p>

                <div className="mt-5 flex items-center justify-center gap-1.5 text-[#9CA3AF]/40 group-hover:text-cyan-400 transition-colors duration-300 text-xs font-medium">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Visit Website
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
