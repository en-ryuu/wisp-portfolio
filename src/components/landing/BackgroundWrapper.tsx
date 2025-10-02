import React from "react";

interface BackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Dark spaceish cyan gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom,
            #0a0a0a 0%,
            #0a0f1a 8%,
            #0b1220 16%,
            #0c1526 24%,
            #0d182c 32%,
            #0e1b32 40%,
            #0f1e38 48%,
            #10213e 56%,
            #0f1e38 64%,
            #0e1b32 72%,
            #0d182c 80%,
            #0c1526 88%,
            #0b1220 92%,
            #0a0a0a 100%
          )`,
        }}
      />

      {/* Threads background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, rgba(0, 224, 255, 0.3) 50%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, rgba(0, 224, 255, 0.3) 50%, transparent 51%)
          `,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Subtle cyan overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/8 to-transparent" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
