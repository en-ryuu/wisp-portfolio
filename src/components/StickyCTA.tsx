"use client";

import { useContactNavigation } from "@/hooks/useContactNavigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function StickyCTA() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showButton, setShowButton] = useState(false);
  const navigateToContact = useContactNavigation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show button after scrolling past the first screen
      if (scrollY > windowHeight * 0.5) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (buttonRef.current && showButton) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, x: 50, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [showButton]);

  if (!showButton) return null;

  return (
    <button
      ref={buttonRef}
      onClick={navigateToContact}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 group transition-all duration-300 hover:scale-105"
      aria-label="Get in touch"
    >
      <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-foreground/10 via-foreground/5 to-background rounded-full shadow-lg group-hover:from-foreground/20 group-hover:via-foreground/10 group-hover:to-foreground/5 transition-all duration-300 border border-foreground/10 group-hover:border-foreground/20">
        <span className="text-foreground/80 font-medium tracking-wide text-sm hidden lg:block group-hover:text-foreground transition-colors duration-300">
          GET IN TOUCH
        </span>
        <div className="w-5 h-5 flex items-center justify-center">
          <div className="w-2 h-2 bg-foreground/60 rounded-full group-hover:bg-foreground/80 transition-colors duration-300"></div>
        </div>
      </div>
    </button>
  );
}
