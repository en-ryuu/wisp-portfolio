"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollIndicatorProps {
  className?: string;
  variant?: "default" | "minimal" | "dots" | "arrow";
}

export default function ScrollIndicator({
  className = "",
  variant = "default",
}: ScrollIndicatorProps) {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const goToTopRef = useRef<HTMLButtonElement>(null);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show scroll down indicator only when at top (first screen)
      if (scrollY < windowHeight * 0.1) {
        setShowScrollDown(true);
        setShowGoToTop(false);
      } else if (scrollY > windowHeight * 0.3) {
        // Show go to top button after scrolling past first screen
        setShowScrollDown(false);
        setShowGoToTop(true);
      } else {
        // Hide both when in between
        setShowScrollDown(false);
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useGSAP(() => {
    if (!indicatorRef.current) return;

    // Animate scroll down indicator
    if (showScrollDown) {
      gsap.fromTo(
        indicatorRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      );

      // Continuous animation
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(indicatorRef.current.querySelector(".scroll-line"), {
        scaleY: 0.3,
        duration: 1.5,
        ease: "power2.inOut",
      });
    }

    // Animate go to top button
    if (goToTopRef.current && showGoToTop) {
      gsap.fromTo(
        goToTopRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [showScrollDown, showGoToTop]);

  const renderScrollDown = () => {
    switch (variant) {
      case "minimal":
        return (
          <div className="flex items-center space-x-3">
            <div className="w-1 h-8 bg-foreground/40"></div>
            <div className="w-1 h-1 bg-foreground/60"></div>
          </div>
        );

      case "dots":
        return (
          <div className="flex items-center space-x-2">
            <div className="w-1 h-1 bg-foreground/60"></div>
            <div className="w-1 h-1 bg-foreground/60"></div>
            <div className="w-1 h-1 bg-foreground/60"></div>
          </div>
        );

      case "arrow":
        return (
          <div className="flex items-center space-x-3">
            <div className="w-4 h-4 border-r border-b border-foreground/60 transform rotate-45"></div>
            <span className="text-xs text-foreground/60 tracking-wider uppercase">
              Scroll
            </span>
          </div>
        );

      default:
        return (
          <div className="flex items-center space-x-4">
            <div className="scroll-line w-px h-12 bg-gradient-to-b from-foreground/60 to-foreground/20"></div>
            <div className="flex flex-col space-y-1">
              <div className="w-1 h-1 bg-foreground/60"></div>
              <div className="w-1 h-1 bg-foreground/40"></div>
              <div className="w-1 h-1 bg-foreground/20"></div>
            </div>
            <span className="text-xs text-foreground/60 tracking-wider uppercase">
              Scroll Down
            </span>
          </div>
        );
    }
  };

  return (
    <>
      {/* Scroll Down Indicator */}
      {showScrollDown && (
        <div
          ref={indicatorRef}
          className={`fixed right-8 bottom-8 z-40 transition-opacity duration-500 ${className}`}
        >
          {renderScrollDown()}
        </div>
      )}

      {/* Go to Top Button */}
      {showGoToTop && (
        <button
          ref={goToTopRef}
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 z-40 group transition-all duration-300 hover:scale-105"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-foreground/10 via-foreground/5 to-background rounded-lg flex items-center justify-center group-hover:from-foreground/20 group-hover:via-foreground/10 group-hover:to-foreground/5 transition-all duration-300">
            <div className="w-3 h-3 border-l border-t border-foreground/60 transform rotate-45 group-hover:border-foreground/80 transition-colors duration-300"></div>
          </div>
        </button>
      )}
    </>
  );
}
