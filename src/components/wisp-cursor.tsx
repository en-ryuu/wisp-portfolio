"use client";

import { gsap } from "gsap";
import { useTheme } from "next-themes";
import { useTransitionState } from "next-transition-router";
import { useCallback, useEffect, useRef, useState } from "react";

export interface WispCursorProps {
  targetSelector?: string;
  hideDefaultCursor?: boolean;
  magneticStrength?: number;
}

const WispCursor: React.FC<WispCursorProps> = ({
  targetSelector = 'a, button, [role="button"], [onclick], input[type="button"], input[type="submit"], [tabindex="0"], [href]',
  hideDefaultCursor = true,
  magneticStrength = 0.3,
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const wispRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const { stage } = useTransitionState();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Handle hydration and mobile detection
  useEffect(() => {
    setMounted(true);

    // Check if mobile device
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Check for Next.js errors
    const checkForErrors = () => {
      const errorElements = document.querySelectorAll(
        "[data-nextjs-dialog-overlay], [data-nextjs-toast], .nextjs-container-build-error, .nextjs-container-runtime-error"
      );
      setHasError(errorElements.length > 0);
    };

    // Initial check
    checkForErrors();

    // Monitor for error changes
    const observer = new MutationObserver(checkForErrors);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [
        "class",
        "data-nextjs-dialog-overlay",
        "data-nextjs-toast",
      ],
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  // Show only on desktop and when no errors
  const shouldShow = mounted && !isMobile && !hasError;

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x: x,
      y: y,
      duration: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!shouldShow || !cursorRef.current) return;

    // Reset glow shape when transition starts to prevent stuck button-shaped glow
    if (stage === "leaving" || stage === "entering") {
      if (cursorRef.current && glowRef.current) {
        const glow = glowRef.current;
        const outerAura = cursorRef.current.querySelector(".outer-aura");

        // Reset glow back to circular shape
        gsap.to(glow, {
          borderRadius: "50%",
          duration: 0.2,
          ease: "power2.out",
        });

        gsap.to(outerAura, {
          borderRadius: "50%",
          duration: 0.2,
          ease: "power2.out",
        });
      }
    }

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = "none";
    }

    const cursor = cursorRef.current;
    const wisp = wispRef.current;
    const glow = glowRef.current;

    let activeTarget: Element | null = null;
    let currentTargetMove: ((ev: Event) => void) | null = null;
    let currentLeaveHandler: (() => void) | null = null;
    let isAnimatingToTarget = false;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

    const cleanupTarget = (target: Element) => {
      if (currentTargetMove) {
        target.removeEventListener("mousemove", currentTargetMove);
      }
      if (currentLeaveHandler) {
        target.removeEventListener("mouseleave", currentLeaveHandler);
      }
      currentTargetMove = null;
      currentLeaveHandler = null;
    };

    // Initialize cursor position - center the cursor on mouse
    gsap.set(cursor, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    // No idle animation - wisp stays static

    const moveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
    window.addEventListener("mousemove", moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;

      const mouseX = gsap.getProperty(cursorRef.current, "x") as number;
      const mouseY = gsap.getProperty(cursorRef.current, "y") as number;

      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget =
        elementUnderMouse &&
        (elementUnderMouse === activeTarget ||
          elementUnderMouse.closest(targetSelector) === activeTarget);

      if (!isStillOverTarget) {
        if (currentLeaveHandler) {
          currentLeaveHandler();
        }
      }
    };

    window.addEventListener("scroll", scrollHandler, { passive: true });

    const mouseDownHandler = (): void => {
      if (!wisp) return;
      gsap.to(wisp, { scale: 0.8, duration: 0.2 });
      gsap.to(glow, { scale: 0.9, duration: 0.2 });
    };

    const mouseUpHandler = (): void => {
      if (!wisp) return;
      gsap.to(wisp, { scale: 1, duration: 0.3 });
      gsap.to(glow, { scale: 1, duration: 0.3 });
    };

    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    const enterHandler = (e: MouseEvent) => {
      const directTarget = e.target as Element;

      // Find the closest clickable element
      const target = directTarget.closest(targetSelector);
      if (!target || !cursorRef.current || !wisp || !glow) return;

      if (activeTarget === target) return;

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }

      activeTarget = target;

      // Pause floating animation
      gsap.killTweensOf(wisp);

      // Magnetic effect - glow elements move to frame the target
      const updateWispPosition = (mouseX?: number, mouseY?: number) => {
        const rect = target.getBoundingClientRect();
        const cursorRect = cursorRef.current!.getBoundingClientRect();

        const cursorCenterX = cursorRect.left + cursorRect.width / 2;
        const cursorCenterY = cursorRect.top + cursorRect.height / 2;

        // Calculate offsets to position glow elements around the target
        const targetLeft = rect.left - cursorCenterX;
        const targetRight = rect.right - cursorCenterX;
        const targetTop = rect.top - cursorCenterY;
        const targetBottom = rect.bottom - cursorCenterY;

        // Add subtle parallax based on mouse position
        if (mouseX !== undefined && mouseY !== undefined) {
          const targetCenterX = rect.left + rect.width / 2;
          const targetCenterY = rect.top + rect.height / 2;
          const mouseOffsetX = (mouseX - targetCenterX) * 0.0001;
          const mouseOffsetY = (mouseY - targetCenterY) * 0.0001;
          // Parallax values calculated but not currently used
          // Could be used for future parallax effects
          console.debug("Parallax values:", mouseOffsetX, mouseOffsetY);
        }

        // Position glow elements to snap to the target element
        gsap.to(glow, {
          x: (targetLeft + targetRight) / 2, // Center on target
          y: (targetTop + targetBottom) / 2, // Center on target
          width: rect.width + 20, // Add padding
          height: rect.height + 20,
          borderRadius: "8px", // Make it more rectangular
          opacity: 0.8,
          duration: 0.3,
          ease: "power2.out",
        });

        // Position outer aura to snap to target element
        gsap.to(cursor.querySelector(".outer-aura"), {
          x: (targetLeft + targetRight) / 2, // Center on target
          y: (targetTop + targetBottom) / 2, // Center on target
          width: rect.width + 40,
          height: rect.height + 40,
          borderRadius: "12px", // Make it more rectangular
          opacity: 0.6,
          duration: 0.3,
          ease: "power2.out",
        });

        // Keep main wisp centered but smaller
        gsap.to(wisp, {
          scale: 0.7,
          duration: 0.3,
          ease: "power2.out",
        });

        // Add glow effect to the target element
        gsap.to(target as HTMLElement, {
          filter:
            "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      isAnimatingToTarget = true;
      updateWispPosition();

      setTimeout(() => {
        isAnimatingToTarget = false;
      }, 1);

      let moveThrottle: number | null = null;
      const targetMove = (ev: Event) => {
        if (moveThrottle || isAnimatingToTarget) return;
        moveThrottle = requestAnimationFrame(() => {
          const mouseEvent = ev as MouseEvent;
          updateWispPosition(mouseEvent.clientX, mouseEvent.clientY);
          moveThrottle = null;
        });
      };

      const leaveHandler = () => {
        activeTarget = null;
        isAnimatingToTarget = false;

        // Reset glow elements back to cursor center
        gsap.to(glow, {
          x: 0, // Back to cursor center
          y: 0, // Back to cursor center
          width: 80, // Original size (20 * 4)
          height: 80,
          borderRadius: "50%", // Back to circular
          opacity: 0.6,
          duration: 0.4,
          ease: "power3.out",
        });

        // Reset outer aura back to cursor center
        gsap.to(cursor.querySelector(".outer-aura"), {
          x: 0, // Back to cursor center
          y: 0, // Back to cursor center
          width: 96, // Original size (24 * 4)
          height: 96,
          borderRadius: "50%", // Back to circular
          opacity: 0.3,
          duration: 0.4,
          ease: "power3.out",
        });

        // Reset main wisp
        gsap.to(wisp, {
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        });

        // Remove glow effect from target
        gsap.to(target as HTMLElement, {
          filter: "brightness(1) drop-shadow(none)",
          duration: 0.3,
          ease: "power2.out",
        });

        // No floating animation to resume

        resumeTimeout = setTimeout(() => {
          resumeTimeout = null;
        }, 50);

        cleanupTarget(target);
      };

      currentTargetMove = targetMove;
      currentLeaveHandler = leaveHandler;

      target.addEventListener("mousemove", targetMove);
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler);
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      document.body.style.cursor = originalCursor;
    };
  }, [
    shouldShow,
    targetSelector,
    magneticStrength,
    moveCursor,
    hideDefaultCursor,
    stage,
  ]);

  if (!shouldShow || !mounted) return null;

  // Use consistent styles to prevent hydration mismatch
  const isDark = theme === "dark";

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-0 h-0 pointer-events-none z-[9999]"
      style={{
        willChange: "transform",
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer aura - more spread out and mildly defined */}
      <div
        className="outer-aura absolute left-1/2 top-1/2 w-24 h-24 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundColor: isDark
            ? "rgba(255, 255, 255, 0.08)"
            : "rgba(34, 197, 197, 0.12)",
          filter: "blur(20px) brightness(1.4)",
          willChange: "transform",
          boxShadow: isDark
            ? "0 0 25px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.15)"
            : "0 0 30px rgba(34, 197, 197, 0.25), 0 0 60px rgba(34, 197, 197, 0.12)",
        }}
      />

      {/* Main wisp orb - pure white center */}
      <div
        ref={wispRef}
        className="absolute left-1/2 top-1/2 w-8 h-8 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundColor: isDark ? "white" : "rgba(34, 197, 197, 0.7)",
          filter: "blur(6px) brightness(1.8)",
          willChange: "transform",
          boxShadow: isDark
            ? "0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.3)"
            : "0 0 12px rgba(34, 197, 197, 0.5), 0 0 24px rgba(34, 197, 197, 0.25)",
        }}
      />

      {/* Inner core - pure white bright point */}
      <div
        className="absolute left-1/2 top-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundColor: isDark ? "white" : "rgba(34, 197, 197, 0.9)",
          filter: "blur(2px) brightness(2)",
          willChange: "transform",
          boxShadow: isDark
            ? "0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5)"
            : "0 0 6px rgba(34, 197, 197, 0.7), 0 0 12px rgba(34, 197, 197, 0.4)",
        }}
      />

      {/* Magnetic glow - more spread out and mildly defined */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 w-20 h-20 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundColor: isDark
            ? "rgba(255, 255, 255, 0.12)"
            : "rgba(34, 197, 197, 0.15)",
          filter: "blur(16px) brightness(1.5)",
          willChange: "transform",
          boxShadow: isDark
            ? "0 0 20px rgba(255, 255, 255, 0.25), 0 0 40px rgba(255, 255, 255, 0.12)"
            : "0 0 25px rgba(34, 197, 197, 0.2), 0 0 50px rgba(34, 197, 197, 0.1)",
        }}
      />
    </div>
  );
};

export default WispCursor;
