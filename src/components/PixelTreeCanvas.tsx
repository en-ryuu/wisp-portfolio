"use client";

import { TreeControlPanel } from "@/components/tree-generator/TreeControlPanel";
import { Button } from "@/components/ui/button";
import { Particle } from "@/lib/pixelTree/Particle";
import { Planter } from "@/lib/pixelTree/Planter";
import type { TreeSettings } from "@/lib/pixelTree/treeSettings";
import { treeSettings } from "@/lib/pixelTree/treeSettings";
import { random, randomInt } from "@/lib/pixelTree/utils";
import { Settings } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState } from "react";

const PixelTreeCanvas: React.FC = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [currentSettings, setCurrentSettings] = useState<TreeSettings>(
    treeSettings.get("Oak")!
  );

  // Keep default tree as Oak for both themes
  const treeCanvasRef = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const plantersListRef = useRef<Planter[]>([]);
  const particlesListRef = useRef<Particle[]>([]);
  const dimRef = useRef({ x: 512, y: 216 });
  const animationFrameRef = useRef<number>();
  const planterIntervalRef = useRef<NodeJS.Timeout>();
  const planterUpdateRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log("[PixelTreeCanvas] useEffect triggered, mounted:", mounted);
    const treeCanvas = treeCanvasRef.current;
    const particleCanvas = particleCanvasRef.current;

    if (!treeCanvas || !particleCanvas || !mounted) {
      console.log("[PixelTreeCanvas] Early return - Canvas refs or mounted check failed", {
        treeCanvas: !!treeCanvas,
        particleCanvas: !!particleCanvas,
        mounted
      });
      return;
    }

    const treeCtx = treeCanvas.getContext("2d");
    const particleCtx = particleCanvas.getContext("2d");

    if (!treeCtx || !particleCtx) {
      console.log("[PixelTreeCanvas] Context creation failed", {
        treeCtx: !!treeCtx,
        particleCtx: !!particleCtx
      });
      return;
    }

    console.log("[PixelTreeCanvas] Contexts obtained successfully");

    const resize = () => {
      // Use full viewport dimensions for the canvas
      dimRef.current = {
        x: window.innerWidth,
        y: window.innerHeight,
      };

      console.log("[PixelTreeCanvas] Canvas resized", {
        windowSize: { w: window.innerWidth, h: window.innerHeight },
        canvasSize: dimRef.current
      });

      treeCanvas.width = dimRef.current.x;
      treeCanvas.height = dimRef.current.y;
      particleCanvas.width = dimRef.current.x;
      particleCanvas.height = dimRef.current.y;

      treeCtx.imageSmoothingEnabled = false;
      particleCtx.imageSmoothingEnabled = false;
    };

    // Initial resize
    resize();

    window.addEventListener("resize", resize);

    let oldTime = Date.now();

    const particleUpdate = () => {
      const newTime = Date.now();
      const deltaTime = (newTime - oldTime) / 1000;
      oldTime = newTime;

      particleCtx.clearRect(0, 0, dimRef.current.x, dimRef.current.y);

      if (particlesListRef.current.length > 0) {
        console.log("[ParticleUpdate] Updating", particlesListRef.current.length, "particles");
      }

      for (let i = particlesListRef.current.length - 1; i >= 0; i--) {
        const particle = particlesListRef.current[i];
        if (particle.enabled) {
          particle.update(deltaTime, dimRef.current.x, dimRef.current.y, particleCtx);
        } else {
          particlesListRef.current.splice(i, 1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(particleUpdate);
    };

    console.log("[PixelTreeCanvas] Starting particle update loop");
    particleUpdate();

    const planterUpdate = () => {
      if (plantersListRef.current.length > 0) {
        console.log("[PlanterUpdate] Running with", plantersListRef.current.length, "planters");
      }

      let planterStepsPerUpdate = 1;
      let planterStepsElapsed = 0;

      const update = () => {
        planterStepsElapsed++;
        for (let i = plantersListRef.current.length - 1; i >= 0; i--) {
          const planter = plantersListRef.current[i];
          if (planter.enabled) {
            console.log("[PlanterUpdate] Updating planter", i, "at position", { x: planter.x, y: planter.y, age: planter.age, lT: planter.lT });
            planter.update(dimRef.current.x, dimRef.current.y, treeCtx);
          } else {
            console.log("[PlanterUpdate] Removing disabled planter", i);
            plantersListRef.current.splice(i, 1);
          }
        }
        if (
          plantersListRef.current.length > 0 &&
          planterStepsElapsed < planterStepsPerUpdate
        ) {
          update();
        }
      };

      update();
    };

    // Store planterUpdate function for use in handleClick
    planterUpdateRef.current = planterUpdate;

    // Planter interval will be started when first tree is generated

    return () => {
      console.log("[PixelTreeCanvas] Cleanup - removing event listeners and intervals");
      window.removeEventListener("resize", resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (planterIntervalRef.current) {
        clearInterval(planterIntervalRef.current);
      }
    };
  }, [mounted]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    console.log("[handleClick] Click event triggered");
    const treeCanvas = treeCanvasRef.current;
    if (!treeCanvas) {
      console.log("[handleClick] No tree canvas ref");
      return;
    }

    // Since canvas matches viewport exactly, use clientX/Y directly
    const x = event.clientX;
    const y = event.clientY;

    console.log("[handleClick] Click detected at:", {
      clientX: event.clientX,
      clientY: event.clientY,
      calculatedPos: { x, y },
      dimRef: dimRef.current
    });

    const angle = random(Math.PI / -2 - 0.3, Math.PI / -2 + 0.3);

    console.log("[handleClick] Creating planter with:", {
      position: { x, y },
      angle,
      settings: {
        lt: currentSettings.lt,
        thk: currentSettings.thk,
        warping: currentSettings.warping,
        gtInitial: currentSettings.gtInitial,
        lfGen: currentSettings.lfGen,
        colorBase: currentSettings.colorBase,
        colorLeaves: currentSettings.colorLeaves
      }
    });

    const newPlanter = new Planter(
      x,
      y,
      angle,
      currentSettings,
      plantersListRef.current,
      particlesListRef.current
    );

    plantersListRef.current.push(newPlanter);
    console.log("[handleClick] Planter created and added. Total planters:", plantersListRef.current.length);
    console.log("[handleClick] New planter details:", {
      x: newPlanter.x,
      y: newPlanter.y,
      fx: newPlanter.fx,
      fy: newPlanter.fy,
      age: newPlanter.age,
      lT: newPlanter.lT,
      enabled: newPlanter.enabled,
      gen: newPlanter.gen
    });

    // Start planter interval if this is the first tree
    if (plantersListRef.current.length === 1 && !planterIntervalRef.current && planterUpdateRef.current) {
      console.log("[handleClick] Starting planter interval for first tree");
      planterIntervalRef.current = setInterval(planterUpdateRef.current, 10);
    }
  };

  const handleGenerateAtCenter = () => {
    console.log("[handleGenerateAtCenter] Generating tree at center");
    const x = dimRef.current.x / 2;
    const y = dimRef.current.y;
    const angle = random(Math.PI / -2 - 0.3, Math.PI / -2 + 0.3);

    console.log("[handleGenerateAtCenter] Center position:", { x, y, dimRef: dimRef.current });
    console.log("[handleGenerateAtCenter] Current settings:", currentSettings);

    const newPlanter = new Planter(
      x,
      y,
      angle,
      currentSettings,
      plantersListRef.current,
      particlesListRef.current
    );

    plantersListRef.current.push(newPlanter);
    console.log("[handleGenerateAtCenter] Planter created. Total planters:", plantersListRef.current.length);
    console.log("[handleGenerateAtCenter] New planter:", {
      x: newPlanter.x,
      y: newPlanter.y,
      fx: newPlanter.fx,
      fy: newPlanter.fy,
      age: newPlanter.age,
      lT: newPlanter.lT,
      enabled: newPlanter.enabled
    });
  };

  const handleClearCanvas = () => {
    console.log("[handleClearCanvas] Clearing canvas");
    const treeCanvas = treeCanvasRef.current;
    const particleCanvas = particleCanvasRef.current;

    if (treeCanvas && particleCanvas) {
      const treeCtx = treeCanvas.getContext("2d");
      const particleCtx = particleCanvas.getContext("2d");

      if (treeCtx && particleCtx) {
        treeCtx.clearRect(0, 0, dimRef.current.x, dimRef.current.y);
        particleCtx.clearRect(0, 0, dimRef.current.x, dimRef.current.y);
        console.log("[handleClearCanvas] Canvas cleared, dimensions:", dimRef.current);
      }
    }

    const oldPlantersCount = plantersListRef.current.length;
    const oldParticlesCount = particlesListRef.current.length;
    plantersListRef.current = [];
    particlesListRef.current = [];
    console.log("[handleClearCanvas] Lists cleared. Removed", oldPlantersCount, "planters and", oldParticlesCount, "particles");
  };

  // Show in both light and dark modes
  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 pointer-events-auto" style={{ zIndex: 1 }}>
        <canvas
          ref={treeCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ imageRendering: "pixelated" }}
        />
        <canvas
          ref={particleCanvasRef}
          className="absolute inset-0 w-full h-full pointer-events-auto"
          style={{ imageRendering: "pixelated" }}
          onClick={handleClick}
        />
      </div>

      {/* Floating Toggle Button */}
      <Button
        onClick={() => setIsPanelOpen(!isPanelOpen)}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-foreground text-background hover:bg-foreground/90 shadow-2xl transition-all duration-300 hover:scale-110 pointer-events-auto"
        size="sm"
        title="Tree Settings"
      >
        <Settings className="w-5 h-5" />
      </Button>

      {/* Control Panel */}
      <TreeControlPanel
        currentSettings={currentSettings}
        onSettingsChange={setCurrentSettings}
        onClearCanvas={handleClearCanvas}
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </>
  );
};

export default PixelTreeCanvas;
