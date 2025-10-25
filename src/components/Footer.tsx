"use client";

import { useTextReveal } from "@/hooks/useTextReveal";

export default function Footer() {
  const footerRef = useTextReveal<HTMLDivElement>({
    delay: 0.2,
    duration: 0.8,
    from: "bottom",
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="relative py-8 px-6 border-t border-foreground/10 bg-background/50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright & Address */}
          <div className="text-center md:text-left space-y-2">
            <p className="text-sm text-foreground/60 font-light">
              © {currentYear} Wisp Technologies. All rights reserved.
            </p>
            <p className="text-xs text-foreground/50 font-light">
              Tinthana-15, Chandragiri, Kathmandu, Nepal
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://x.com/wisptech_np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-foreground/80 transition-colors duration-300 font-light tracking-wider uppercase"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/wisp-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-foreground/80 transition-colors duration-300 font-light tracking-wider uppercase"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/wisp.technology/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-foreground/80 transition-colors duration-300 font-light tracking-wider uppercase"
            >
              Instagram
            </a>
            <a
              href="https://github.com/wisptech-np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/60 hover:text-foreground/80 transition-colors duration-300 font-light tracking-wider uppercase"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
