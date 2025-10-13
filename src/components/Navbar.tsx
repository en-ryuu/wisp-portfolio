"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { gsap } from "gsap";
import { Link as TransitionLink } from "next-transition-router";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate navbar in
    tl.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );

    // Stagger logo and links
    tl.fromTo(
      logoRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    );

    if (linksRef.current?.children) {
      tl.fromTo(
        linksRef.current.children,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  // Handle hash navigation
  useEffect(() => {
    if (pathname === "/" && window.location.hash === "#contact") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 1000); // Wait for page animations to complete
    }
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10"
    >
      <div className="flex items-center justify-between px-6 py-6">
        <TransitionLink href="/">
          <div
            ref={logoRef}
            className="text-2xl font-light tracking-wider text-foreground cursor-pointer hover:text-foreground/80 transition-colors duration-300"
          >
            WISP
          </div>
        </TransitionLink>

        <div ref={linksRef} className="hidden md:flex items-center space-x-8">
          <TransitionLink
            href="/about"
            className="text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </TransitionLink>
          <TransitionLink
            href="/services"
            className="text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </TransitionLink>
          <TransitionLink
            href="/projects"
            className="text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </TransitionLink>
          <button
            onClick={() => {
              if (pathname === "/") {
                // If on home page, scroll to contact section
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              } else {
                // If on other pages, navigate to home page with contact hash
                router.push("/#contact");
              }
            }}
            className="text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground/70 hover:text-foreground transition-colors duration-300">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
