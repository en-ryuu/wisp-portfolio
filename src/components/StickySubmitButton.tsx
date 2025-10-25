"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface StickySubmitButtonProps {
  onClick?: () => void;
}

export default function StickySubmitButton({ onClick }: StickySubmitButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (!contactSection) return;

      const contactRect = contactSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Show button when contact section is in view but form is not at bottom
      const isContactVisible = contactRect.top < windowHeight && contactRect.bottom > 0;
      const isFormBottom = contactRect.bottom < windowHeight;
      
      setShowButton(isContactVisible && !isFormBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (buttonRef.current && showButton) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, x: 50, scale: 0.8 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [showButton]);

  if (!showButton) return null;

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      type="submit"
      className="fixed right-8 bottom-8 z-50 group transition-all duration-300 hover:scale-105"
      aria-label="Send message"
    >
      <div className="px-8 py-4 bg-foreground text-background font-medium tracking-wide rounded-full shadow-lg group-hover:bg-foreground/90 transition-all duration-300 flex items-center gap-3">
        <span>SEND MESSAGE</span>
        <div className="w-5 h-5 flex items-center justify-center">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
