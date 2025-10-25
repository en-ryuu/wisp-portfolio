"use client";

import Loading from "@/components/Loading";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";
import { startTransition, useEffect, useRef, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Auto-stop loading after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoading]); // Reset timer when isLoading changes

  return (
    <TransitionRouter
      auto={true}
      leave={(next) => {
        setIsLoading(true);

        // Fade out current content
        const tl = gsap.timeline({
          onComplete: () => {
            next();
          }
        });

        if (contentRef.current) {
          tl.to(contentRef.current, {
            y: "-30px",
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
          });
        } else {
          // If no content ref, immediately proceed
          next();
        }

        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        // Slide in content from bottom
        const tl = gsap.timeline({
          onComplete: () => {
            next();
          }
        });

        if (contentRef.current) {
          tl.fromTo(
            contentRef.current,
            { y: "100vh", opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
          );
        } else {
          // If no content ref, immediately proceed
          next();
        }

        return () => {
          tl.kill();
        };
      }}
    >
      {/* Loading component - always rendered */}
      <Loading isLoading={isLoading} />

      {/* Main content */}
      <div ref={contentRef} className="relative z-40 mt-12">
        <main>{children}</main>
      </div>
    </TransitionRouter>
  );
}
