import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

interface TextRevealOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  from?: "bottom" | "top" | "left" | "right";
}

export function useTextReveal<T extends HTMLElement = HTMLElement>(
  options: TextRevealOptions = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    ease = "power2.out",
    from = "bottom",
  } = options;

  const ref = useRef<T>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const element = ref.current;

      // Set initial state based on direction
      const getInitialTransform = () => {
        switch (from) {
          case "bottom":
            return { y: 50, opacity: 0 };
          case "top":
            return { y: -50, opacity: 0 };
          case "left":
            return { x: -50, opacity: 0 };
          case "right":
            return { x: 50, opacity: 0 };
          default:
            return { y: 50, opacity: 0 };
        }
      };

      // Set initial state
      gsap.set(element, getInitialTransform());

      // Create timeline with proper delay
      const tl = gsap.timeline({
        delay,
        onComplete: () => {
          // Ensure final state is set
          gsap.set(element, { clearProps: "all" });
        },
      });

      // Animate in
      tl.to(element, {
        y: 0,
        x: 0,
        opacity: 1,
        duration,
        ease,
      });
    },
    { dependencies: [delay, duration, ease, from] }
  );

  return ref;
}

// Hook for multiple elements with stagger
export function useStaggeredTextReveal<T extends HTMLElement = HTMLElement>(
  count: number,
  options: TextRevealOptions = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.2,
    ease = "power2.out",
    from = "bottom",
  } = options;

  // Create refs using a stable approach that doesn't violate hook rules
  const refs = useRef<React.RefObject<T>[]>([]);

  // Initialize refs if needed - this is safe as it's not calling hooks
  if (refs.current.length !== count) {
    refs.current = Array.from(
      { length: count },
      () => ({ current: null as T | null } as React.RefObject<T>)
    );
  }

  useGSAP(
    () => {
      const elements = refs.current.map((ref) => ref.current).filter(Boolean);
      if (elements.length === 0) return;

      // Set initial state for all elements
      const getInitialTransform = () => {
        switch (from) {
          case "bottom":
            return { y: 50, opacity: 0 };
          case "top":
            return { y: -50, opacity: 0 };
          case "left":
            return { x: -50, opacity: 0 };
          case "right":
            return { x: 50, opacity: 0 };
          default:
            return { y: 50, opacity: 0 };
        }
      };

      elements.forEach((element) => {
        gsap.set(element, getInitialTransform());
      });

      // Create timeline with delay
      const tl = gsap.timeline({ delay });

      // Animate all elements with stagger
      tl.to(elements, {
        y: 0,
        x: 0,
        opacity: 1,
        duration,
        ease,
        stagger,
        onComplete: () => {
          // Clean up transforms after animation
          elements.forEach((element) => {
            gsap.set(element, { clearProps: "all" });
          });
        },
      });
    },
    { dependencies: [delay, duration, stagger, ease, from, count] }
  );

  return refs.current;
}
