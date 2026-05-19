export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-[#E5E7EB] font-semibold text-sm">
              <span className="text-violet-400">S</span>aim Safeer
            </p>
            <p className="text-[#9CA3AF]/60 text-xs mt-1">
              AI Developer · Automation Engineer · Full Stack Developer
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: "https://github.com/isaimsafeer" },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/isaimsafeer",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF]/60 hover:text-[#E5E7EB] transition-colors duration-200 text-xs font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[#9CA3AF]/40 text-xs text-center md:text-right">
            © {year} Saim Safeer. Built with Next.js &amp; Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
