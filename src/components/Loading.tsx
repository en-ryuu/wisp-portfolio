"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);
  const linesAnimationRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const lines = linesRef.current;
      const title = titleRef.current;
      const subtitle = subtitleRef.current;

      if (!container || !lines || !title || !subtitle) return;

      if (isLoading) {
        // Reset to initial state and start animations
        gsap.set(container, { opacity: 0 });
        gsap.set(title, { y: 30, opacity: 0, clipPath: "inset(100% 0 0 0)" });
        gsap.set(subtitle, {
          y: 20,
          opacity: 0,
          clipPath: "inset(100% 0 0 0)",
        });
        gsap.set(lines, { x: "0%" });

        // Start animations when loading begins
        const tl = gsap.timeline();
        animationRef.current = tl;

        // Simple fade in for container
        tl.fromTo(
          container,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        );

        // Text reveal animation
        tl.fromTo(
          title,
          {
            y: 30,
            opacity: 0,
            clipPath: "inset(100% 0 0 0)",
          },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.2"
        );

        tl.fromTo(
          subtitle,
          {
            y: 20,
            opacity: 0,
            clipPath: "inset(100% 0 0 0)",
          },
          {
            y: 0,
            opacity: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.6"
        );

        // Simple ultra slow movement from right to left
        const linesAnimation = gsap.to(lines, {
          x: "-200%",
          duration: 200, // Ultra slow - 200 seconds
          ease: "none",
          repeat: -1,
        });
        linesAnimationRef.current = linesAnimation;
      } else {
        // Fade out container smoothly
        if (container) {
          gsap.to(container, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
              // Stop all animations after fade out completes
              if (animationRef.current) {
                animationRef.current.kill();
                animationRef.current = null;
              }
              if (linesAnimationRef.current) {
                linesAnimationRef.current.kill();
                linesAnimationRef.current = null;
              }
            },
          });
        }
      }
    },
    { dependencies: [isLoading] }
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (linesAnimationRef.current) {
        linesAnimationRef.current.kill();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-30 flex items-center justify-center bg-background"
      style={{
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? "auto" : "none",
      }}
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px), linear-gradient(-45deg, hsl(var(--foreground) / 0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* 4 lines with uneven spacing */}
      <div ref={linesRef} className="absolute inset-0 overflow-hidden">
        {/* Line 1 - Slanted */}
        <div
          className="absolute w-0.5 h-full bg-foreground/15 transform rotate-8"
          style={{ left: "12%" }}
        ></div>
        {/* Line 2 - Straight */}
        <div
          className="absolute w-0.5 h-full bg-foreground/10"
          style={{ left: "35%" }}
        ></div>
        {/* Line 3 - Slanted opposite */}
        <div
          className="absolute w-0.5 h-full bg-foreground/15 transform -rotate-4"
          style={{ left: "68%" }}
        ></div>
        {/* Line 4 - Straight */}
        <div
          className="absolute w-0.5 h-full bg-foreground/12"
          style={{ left: "88%" }}
        ></div>
      </div>

      {/* Center text with modern font */}
      <div className="relative z-10 text-center">
        <h1
          ref={titleRef}
          className="text-6xl font-black tracking-tight text-foreground/90 mb-3"
          style={{
            fontFamily:
              "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          WISP
        </h1>
        <p
          ref={subtitleRef}
          className="text-sm font-medium text-foreground/60 tracking-[0.2em]"
          style={{
            fontFamily: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
            fontWeight: 500,
          }}
        >
          TECHNOLOGIES
        </p>
      </div>
    </div>
  );
}
