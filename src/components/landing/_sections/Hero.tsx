import LiquidEther from "@/components/reactbits/LiquidEther";
import { Orbit } from "lucide-react";
import BackgroundContent from "./BackgroundContent";

export default function Hero() {
  return (
    <section className="min-h-screen dark-bg circuit-pattern flex items-center justify-center">
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <LiquidEther
          colors={["#00D1FF", "#40E0D0", "#00CED1", "#48D1CC"]}
          mouseForce={20}
          cursorSize={140}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        <BackgroundContent
          pillText="Wisp Technology"
          pillIcon={<Orbit width={12} height={12} />}
          headline="We build software that works for you."
        />
      </div>
    </section>
  );
}
