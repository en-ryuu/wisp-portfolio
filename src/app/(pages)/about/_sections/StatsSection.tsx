"use client";
import { useStaggeredTextReveal } from "@/hooks/useTextReveal";

export default function StatsSection() {
  const statsRefs = useStaggeredTextReveal<HTMLDivElement>(3, {
    delay: 1.2,
    stagger: 0.2,
    from: "bottom",
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 text-center">
      <div ref={statsRefs[0]}>
        <div className="text-5xl font-light text-foreground mb-3">99.7%</div>
        <div className="text-foreground/60 text-lg">ACCURACY</div>
      </div>
      <div ref={statsRefs[1]}>
        <div className="text-5xl font-light text-foreground mb-3">10TB</div>
        <div className="text-foreground/60 text-lg">DATA PROCESSED</div>
      </div>
      <div ref={statsRefs[2]}>
        <div className="text-5xl font-light text-foreground mb-3">24/7</div>
        <div className="text-foreground/60 text-lg">OPERATIONAL</div>
      </div>
    </div>
  );
}
