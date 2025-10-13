import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface GSAPStaggerOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  from?: "bottom" | "top" | "left" | "right" | "scale";
  threshold?: number;
  rootMargin?: string;
  reverse?: boolean;
  scale?: number;
  y?: number;
  x?: number;
}

export function useGSAPStagger<T extends HTMLElement = HTMLElement>(
  options: GSAPStaggerOptions = {}
) {
  const {
    delay = 0,
    duration = 1.0,
    ease = "power3.out",
    from = "bottom",
    threshold = 0.1,
    rootMargin = "0px 0px -50px 0px",
    reverse = false,
    scale = 0.95,
    stagger = 0.1,
    y = 60,
    x = 60,
  } = options;

  const containerRef = useRef<T>(null);
  const isVisible = useRef(false);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elements = container.querySelectorAll('[data-stagger-item]') as NodeListOf<HTMLElement>;
    
    if (elements.length === 0) return;

    // Set initial state for all elements
    const getInitialTransform = () => {
      switch (from) {
        case "bottom":
          return { y: y, opacity: 0, scale: scale };
        case "top":
          return { y: -y, opacity: 0, scale: scale };
        case "left":
          return { x: -x, opacity: 0, scale: scale };
        case "right":
          return { x: x, opacity: 0, scale: scale };
        case "scale":
          return { scale: scale, opacity: 0 };
        default:
          return { y: y, opacity: 0, scale: scale };
      }
    };

    // Set initial state
    gsap.set(elements, getInitialTransform());

    const animateIn = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.timeline({ delay });
      animationRef.current.to(elements, {
        y: 0,
        x: 0,
        scale: 1,
        opacity: 1,
        duration,
        ease,
        stagger: {
          amount: stagger * elements.length,
          from: "start",
        },
        overwrite: true,
      });
    };

    const animateOut = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.timeline();
      animationRef.current.to(elements, {
        ...getInitialTransform(),
        duration: duration * 0.6,
        ease: "power2.in",
        stagger: {
          amount: stagger * elements.length * 0.5,
          from: "end",
        },
        overwrite: true,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.current) {
            isVisible.current = true;
            // Small delay to ensure smooth start
            setTimeout(() => {
              animateIn();
            }, 50);
          } else if (!entry.isIntersecting && isVisible.current && reverse) {
            isVisible.current = false;
            animateOut();
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [delay, duration, ease, threshold, rootMargin, reverse, from, scale, stagger, y, x]);

  return containerRef;
}
