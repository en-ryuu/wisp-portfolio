"use client";
import { stats } from "@/config/about";
import { useStaggeredTextReveal } from "@/hooks/useTextReveal";

export default function StatsSection() {
  const statsRefs = useStaggeredTextReveal<HTMLDivElement>(stats.length, {
    delay: 1.2,
    stagger: 0.2,
    from: "bottom",
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 text-center">
      {stats.map((stat, index) => (
        <div key={index} ref={statsRefs[index]}>
          <div className="text-5xl font-light text-foreground mb-3">
            {stat.value}
          </div>
          <div className="text-foreground/60 text-lg">{stat.label}</div>
          <div className="text-foreground/40 text-sm mt-2">
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  );
}
