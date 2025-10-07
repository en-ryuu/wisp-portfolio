import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface IntersectionRevealOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  from?: "bottom" | "top" | "left" | "right";
  threshold?: number;
  rootMargin?: string;
  reverse?: boolean;
}

export function useIntersectionReveal<T extends HTMLElement = HTMLElement>(
  options: IntersectionRevealOptions = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    ease = "power2.out",
    from = "bottom",
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    reverse = false,
  } = options;

  const ref = useRef<T>(null);
  const isVisible = useRef(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Set initial state immediately when component mounts
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

    const getFinalTransform = () => {
      return { y: 0, x: 0, opacity: 1 };
    };

    // Set initial state immediately
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
        onComplete: () => {
          if (!reverse) {
            gsap.set(element, { clearProps: "all" });
          }
        },
      });
    };

    const animateOut = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(element, {
        ...getInitialTransform(),
        duration,
        delay,
        ease,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.current) {
            isVisible.current = true;
            animateIn();
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
  }, [delay, duration, ease, from, threshold, rootMargin, reverse]);

  return ref;
}

// Hook for image slide-in animation (top to bottom)
export function useImageSlideIn<T extends HTMLElement = HTMLElement>(
  options: Omit<IntersectionRevealOptions, "from"> = {}
) {
  const {
    delay = 0,
    duration = 1.2,
    ease = "power2.out",
    threshold = 0.1,
    rootMargin = "0px 0px -100px 0px",
    reverse = false,
  } = options;

  const ref = useRef<T>(null);
  const isVisible = useRef(false);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Set initial state - image starts as a thin line at the top
    gsap.set(element, {
      clipPath: "inset(0% 0% 100% 0%)", // Start with only top visible
      opacity: 1,
    });

    const animateIn = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(element, {
        clipPath: "inset(0% 0% 0% 0%)", // Expand to fill entire container
        duration,
        delay,
        ease,
        onComplete: () => {
          if (!reverse) {
            gsap.set(element, { clearProps: "all" });
          }
        },
      });
    };

    const animateOut = () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(element, {
        clipPath: "inset(0% 0% 100% 0%)", // Collapse back to thin line
        duration,
        delay,
        ease,
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible.current) {
            isVisible.current = true;
            animateIn();
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
  }, [delay, duration, ease, threshold, rootMargin, reverse]);

  return ref;
}
