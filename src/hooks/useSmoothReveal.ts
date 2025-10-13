import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface SmoothRevealOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  from?: "bottom" | "top" | "left" | "right" | "scale";
  threshold?: number;
  rootMargin?: string;
  reverse?: boolean;
  scale?: number;
}

export function useSmoothReveal<T extends HTMLElement = HTMLElement>(
  options: SmoothRevealOptions = {}
) {
  const {
    delay = 0,
    duration = 1.2,
    ease = "power3.out",
    from = "bottom",
    threshold = 0.15,
    rootMargin = "0px 0px -50px 0px",
    reverse = false,
    scale = 0.95,
  } = options;

  const ref = useRef<T>(null);
  const isVisible = useRef(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Set initial state with better easing
    const getInitialTransform = () => {
      switch (from) {
        case "bottom":
          return { y: 60, opacity: 0, scale: scale };
        case "top":
          return { y: -60, opacity: 0, scale: scale };
        case "left":
          return { x: -60, opacity: 0, scale: scale };
        case "right":
          return { x: 60, opacity: 0, scale: scale };
        case "scale":
          return { scale: scale, opacity: 0 };
        default:
          return { y: 60, opacity: 0, scale: scale };
      }
    };

    const getFinalTransform = () => {
      return { y: 0, x: 0, scale: 1, opacity: 1 };
    };

    // Set initial state
    gsap.set(element, getInitialTransform());

    const animateIn = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(element, {
        ...getFinalTransform(),
        duration,
        delay,
        ease,
        overwrite: true,
      });
    };

    const animateOut = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(element, {
        ...getInitialTransform(),
        duration: duration * 0.6,
        ease: "power2.in",
        overwrite: true,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.current) {
            isVisible.current = true;
            // Add a small delay to make it feel more natural
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

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [delay, duration, ease, threshold, rootMargin, reverse, from, scale]);

  return ref;
}

// Note: useSmoothStaggerReveal removed due to React hooks rules violations
// Use useGSAPStagger instead for better performance and smoother animations
