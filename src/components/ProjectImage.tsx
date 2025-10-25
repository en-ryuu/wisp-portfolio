"use client";

import { useEffect, useState } from "react";
import PlaceholderImage from "./PlaceholderImage";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  objectPosition?: "left" | "center" | "right" | "top" | "bottom";
}

export default function ProjectImage({
  src,
  alt,
  title,
  className = "",
  size = "lg",
  objectPosition = "center",
}: ProjectImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <PlaceholderImage title={title} size={size} />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Real Image */}
      {!imageError && (
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-contain md:object-cover transition-opacity duration-500 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition }}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="eager"
        />
      )}

      {/* Fallback Placeholder - shows while loading or on error */}
      {(!imageLoaded || imageError) && (
        <PlaceholderImage title={title} size={size} />
      )}
    </div>
  );
}
