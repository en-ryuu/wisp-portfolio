import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface CustomImageRevealOptions {
  delay?: number;
  duration?: number;
  ease?: string;
  reverse?: boolean;
}

export function useCustomImageReveal<T extends HTMLElement = HTMLElement>(
  options: CustomImageRevealOptions = {}
) {
  const {
    delay = 0,
    duration = 1.2,
    ease = "power2.out",
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
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [delay, duration, ease, reverse]);

  return ref;
}
