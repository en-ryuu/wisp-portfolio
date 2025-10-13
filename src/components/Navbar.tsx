"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { gsap } from "gsap";
import { Link as TransitionLink } from "next-transition-router";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// Navigation links configuration
const navigationLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Handle mobile menu animations
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isMobileMenuOpen) {
      // Animate mobile menu in
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    } else {
      // Animate mobile menu out
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside and prevent body scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("[data-mobile-menu-button]")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
          {navigationLinks.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full"></span>
            </TransitionLink>
          ))}
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
        <button
          onClick={toggleMobileMenu}
          data-mobile-menu-button
          className="md:hidden text-foreground/70 hover:text-foreground transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-foreground/10 shadow-lg"
        >
          <div className="px-6 py-8 space-y-6">
            {/* Navigation Links */}
            <div className="space-y-4">
              {navigationLinks.map((link) => (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block text-foreground/70 hover:text-foreground transition-colors duration-300 text-lg font-light"
                >
                  {link.label}
                </TransitionLink>
              ))}
              <button
                onClick={() => {
                  closeMobileMenu();
                  if (pathname === "/") {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  } else {
                    router.push("/#contact");
                  }
                }}
                className="block text-foreground/70 hover:text-foreground transition-colors duration-300 text-lg font-light text-left"
              >
                Contact
              </button>
            </div>

            {/* Theme Toggle */}
            <div className="pt-4 border-t border-foreground/10">
              <div className="flex items-center justify-between">
                <span className="text-foreground/70 text-sm font-light">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
