"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // 1. The Environment Check
  // We check the active route to determine the exact CSS state required.
  const isLab = pathname?.startsWith("/lab");

  // 2. Dynamic Tailwind Dictionaries
  // These variables swap the entire color palette based on the environment.
  const theme = {
    background: isLab ? "bg-[#FAFAFA]" : "bg-[#0A0A0A]",
    border: isLab ? "border-[#EAEAEA]" : "border-[#222222]",
    textPrimary: isLab ? "text-[#111111]" : "text-white",
    textSecondary: isLab ? "text-gray-500" : "text-gray-400",
    hoverAccent: isLab ? "hover:text-[#0055FF]" : "hover:text-[#FF2A5F]",
    buttonLine: isLab
      ? "border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"
      : "border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <footer className={`w-full border-t ${theme.border} ${theme.background} transition-colors duration-700 py-12`}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Left Side: Identity & Resume Action */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className={`font-mono text-sm tracking-widest uppercase ${theme.textPrimary} transition-colors duration-700`}>
            // Harshit Gupta
          </span>

          {/* Subtle separator line */}
          <div className={`hidden md:block h-4 w-px transition-colors duration-700 ${isLab ? "bg-gray-300" : "bg-[#333333]"}`}></div>

          <a
            href="https://drive.google.com/file/d/1MLmJm_WRpxBKYGKIxDXYwCg1Y7Fxks0k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-xs uppercase tracking-widest px-6 py-3 border rounded-full transition-all duration-300 ${theme.buttonLine}`}
          >
            Download Resume
          </a>
        </div>

        {/* Right Side: Professional Network */}
        <div className={`flex items-center gap-8 font-mono text-sm ${theme.textSecondary}`}>
          <a
            href="mailto:hg9061066@gmail.com"
            className={`transition-colors duration-300 ${theme.hoverAccent}`}
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/harshit-gupta-hg"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${theme.hoverAccent}`}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hg9061066"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${theme.hoverAccent}`}
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/harshit.gupta.hg/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${theme.hoverAccent}`}
          >
            Instagram
          </a>
        </div>

      </div>
    </footer>
  );
}
