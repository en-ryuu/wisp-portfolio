"use client";

interface PlaceholderImageProps {
  title?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function PlaceholderImage({
  title = "Image Placeholder",
  className = "",
  size = "md",
}: PlaceholderImageProps) {
  const sizeClasses = {
    sm: "w-16 h-16 lg:w-20 lg:h-20",
    md: "w-24 h-24 lg:w-32 lg:h-32",
    lg: "w-32 h-32 lg:w-40 lg:h-40",
    xl: "w-40 h-40 lg:w-48 lg:h-48",
  };

  const iconSizes = {
    sm: "w-6 h-6 lg:w-8 lg:h-8",
    md: "w-8 h-8 lg:w-12 lg:h-12",
    lg: "w-12 h-12 lg:w-16 lg:h-16",
    xl: "w-16 h-16 lg:w-20 lg:h-20",
  };

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${className}`}
    >
      <div className="text-center">
        <div
          className={`${sizeClasses[size]} mx-auto mb-4 lg:mb-6 bg-foreground/20 rounded-full flex items-center justify-center`}
        >
          <div
            className={`${iconSizes[size]} bg-foreground/40 rounded-full`}
          ></div>
        </div>
        <p className="text-foreground/60 text-lg lg:text-xl font-light">
          {title}
        </p>
      </div>
    </div>
  );
}
