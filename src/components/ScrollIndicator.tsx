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
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Reset scroll state when component mounts (new page)
  useEffect(() => {
    // Small delay to ensure smooth transition between pages
    const timer = setTimeout(() => {
      setHasScrolled(false);
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (!indicatorRef.current) return;

    // Initial fade in animation with delay
    gsap.fromTo(
      indicatorRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      }
    );

    // Create fade out timeline
    const fadeOutTl = gsap.timeline({ paused: true });
    fadeOutTl.to(indicatorRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 20,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        setIsVisible(false);
      },
    });

    // Hide indicator when user starts scrolling with smooth fade
    const hideOnScroll = () => {
      if (window.scrollY > 50 && isVisible && !hasScrolled) {
        setHasScrolled(true);
        fadeOutTl.play();
      }
    };

    window.addEventListener("scroll", hideOnScroll);

    // Animate the indicator with continuous animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    if (variant === "default") {
      // Animate the main indicator
      tl.to(indicatorRef.current.querySelector(".scroll-line"), {
        scaleY: 0.3,
        duration: 1.5,
        ease: "power2.inOut",
      });

      // Animate the dots
      tl.to(
        indicatorRef.current.querySelectorAll(".scroll-dot"),
        {
          y: -10,
          opacity: 0.3,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.inOut",
        },
        0
      );
    } else if (variant === "minimal") {
      // Simple fade animation
      tl.to(indicatorRef.current, {
        opacity: 0.3,
        y: -5,
        duration: 1.5,
        ease: "power2.inOut",
      });
    } else if (variant === "dots") {
      // Animate dots in sequence
      tl.to(indicatorRef.current.querySelectorAll(".scroll-dot"), {
        scale: 0.5,
        opacity: 0.3,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.inOut",
      });
    } else if (variant === "arrow") {
      // Bounce animation for arrow
      tl.to(indicatorRef.current.querySelector(".scroll-arrow"), {
        y: -8,
        duration: 1.2,
        ease: "power2.inOut",
      });
    }

    return () => {
      window.removeEventListener("scroll", hideOnScroll);
      tl.kill();
      fadeOutTl.kill();
    };
  }, [variant, isVisible]);

  if (!isVisible) return null;

  const renderIndicator = () => {
    switch (variant) {
      case "minimal":
        return (
          <div className="flex flex-col items-center space-y-2">
            <div className="w-px h-8 bg-foreground/40"></div>
            <div className="w-1 h-1 bg-foreground/60"></div>
          </div>
        );

      case "dots":
        return (
          <div className="flex flex-col items-center space-y-2">
            <div className="scroll-dot w-1 h-1 bg-foreground/60"></div>
            <div className="scroll-dot w-1 h-1 bg-foreground/60"></div>
            <div className="scroll-dot w-1 h-1 bg-foreground/60"></div>
          </div>
        );

      case "arrow":
        return (
          <div className="flex flex-col items-center space-y-2">
            <div className="scroll-arrow w-4 h-4 border-r border-b border-foreground/60 transform rotate-45"></div>
            <span className="text-xs text-foreground/60 tracking-wider uppercase">
              Scroll
            </span>
          </div>
        );

      default:
        return (
          <div className="flex flex-col items-center space-y-3">
            <div className="scroll-line w-px h-12 bg-gradient-to-b from-foreground/60 to-foreground/20"></div>
            <div className="flex flex-col items-center space-y-1">
              <div className="scroll-dot w-1 h-1 bg-foreground/60"></div>
              <div className="scroll-dot w-1 h-1 bg-foreground/40"></div>
              <div className="scroll-dot w-1 h-1 bg-foreground/20"></div>
            </div>
            <span className="text-xs text-foreground/60 tracking-wider uppercase">
              Scroll Down
            </span>
          </div>
        );
    }
  };

  return (
    <div
      ref={indicatorRef}
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-opacity duration-500 ${className}`}
    >
      {renderIndicator()}
    </div>
  );
}
