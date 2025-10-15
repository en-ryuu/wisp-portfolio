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
    
    // Add scroll listener to update div detection
    const handleScroll = () => {
      // This will help with div detection when scrolling
      console.log("[PixelTreeCanvas] Scroll detected - div positions may have changed");
    };
    
    window.addEventListener("scroll", handleScroll);

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
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (planterIntervalRef.current) {
        clearInterval(planterIntervalRef.current);
      }
    };
  }, [mounted]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    console.log("[handleClick] Click event triggered - generating Sakura tree");
    
    // Check if click is on an interactive element
    const target = event.target as HTMLElement;
    const isInteractiveElement = target.closest('button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]');
    
    if (isInteractiveElement) {
      console.log("[handleClick] Click on interactive element - ignoring");
      return;
    }

    const treeCanvas = treeCanvasRef.current;
    if (!treeCanvas) {
      console.log("[handleClick] No tree canvas ref");
      return;
    }

    // Use click coordinates directly
    const x = event.clientX;
    const y = event.clientY;

    console.log("[handleClick] Click detected at:", {
      clientX: event.clientX,
      clientY: event.clientY,
      calculatedPos: { x, y },
      dimRef: dimRef.current
    });

    // Always use Sakura tree with random variations
    const baseSettings = treeSettings.get("Sakura")!;
    const modifiedSettings: TreeSettings = {
      ...baseSettings,
      lt: baseSettings.lt * random(0.7, 1.3),
      thk: Math.max(1, baseSettings.thk + randomInt(-2, 2)),
      warping: baseSettings.warping * random(0.5, 1.5),
      gtInitial: baseSettings.gtInitial * random(0.8, 1.2),
      lfAmount: Math.max(0, baseSettings.lfAmount + randomInt(-2, 3)),
      lfLength: baseSettings.lfLength * random(0.7, 1.3),
      lfGravity: baseSettings.lfGravity + randomInt(-10, 10),
      lfThickness: Math.max(1, baseSettings.lfThickness + randomInt(-1, 2)),
    };

    // Random angle for natural growth
    const angle = random(Math.PI / -2 - 0.5, Math.PI / -2 + 0.5);

    console.log("[handleClick] Creating Sakura tree with:", {
      position: { x, y },
      angle,
      settings: modifiedSettings
    });

    const newPlanter = new Planter(
      x,
      y,
      angle,
      modifiedSettings,
      plantersListRef.current,
      particlesListRef.current
    );

    plantersListRef.current.push(newPlanter);
    console.log("[handleClick] Sakura tree created and added. Total planters:", plantersListRef.current.length);

    // Start planter interval if this is the first tree
    if (plantersListRef.current.length === 1 && !planterIntervalRef.current && planterUpdateRef.current) {
      console.log("[handleClick] Starting planter interval for first Sakura tree");
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

  const handleGenerateForest = (forestType: string, count: number) => {
    console.log(`[handleGenerateForest] Generating ${forestType} forest with ${count} trees on visible divs`);
    
    // Find all divs currently visible on screen (including scrolled content)
    const allDivs = document.querySelectorAll('div');
    const visibleDivs = Array.from(allDivs).filter(div => {
      const rect = div.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(div);
      
      // Check if div is currently visible on screen
      const isVisible = rect.top < window.innerHeight && 
                       rect.bottom > 0 && 
                       rect.left < window.innerWidth && 
                       rect.right > 0;
      
      // Check if div is suitable (decorative backgrounds only)
      const hasBlur = computedStyle.backdropFilter !== 'none' || computedStyle.filter.includes('blur');
      const hasGlass = computedStyle.backgroundColor.includes('rgba') && 
                      computedStyle.backgroundColor.includes('0.') || 
                      computedStyle.background.includes('gradient');
      
      // Exclude ALL interactive elements
      const isInteractive = div.tagName === 'BUTTON' || 
                           div.tagName === 'A' ||
                           div.tagName === 'INPUT' ||
                           div.tagName === 'SELECT' ||
                           div.tagName === 'TEXTAREA' ||
                           div.getAttribute('role') === 'button' ||
                           div.getAttribute('role') === 'link' ||
                           div.getAttribute('role') === 'tab' ||
                           div.getAttribute('role') === 'menuitem' ||
                           div.getAttribute('role') === 'option' ||
                           div.classList.contains('button') ||
                           div.classList.contains('btn') ||
                           div.classList.contains('clickable') ||
                           div.classList.contains('interactive') ||
                           div.onclick !== null ||
                           div.onmousedown !== null ||
                           div.onmouseup !== null;
      
      // Exclude ALL headers, navigation, and UI elements
      const isHeader = div.tagName === 'HEADER' || 
                      div.tagName === 'NAV' ||
                      div.tagName === 'FOOTER' ||
                      div.tagName === 'ASIDE' ||
                      div.classList.contains('header') ||
                      div.classList.contains('nav') ||
                      div.classList.contains('navbar') ||
                      div.classList.contains('menu') ||
                      div.classList.contains('navigation') ||
                      div.classList.contains('sidebar') ||
                      div.classList.contains('toolbar') ||
                      div.classList.contains('controls');
      
      // Exclude ALL content areas and important sections
      const isMainContent = div.getAttribute('role') === 'main' ||
                           div.getAttribute('role') === 'banner' ||
                           div.getAttribute('role') === 'navigation' ||
                           div.getAttribute('role') === 'contentinfo' ||
                           div.tagName === 'MAIN' ||
                           div.tagName === 'ARTICLE' ||
                           div.tagName === 'SECTION' ||
                           div.classList.contains('main') ||
                           div.classList.contains('content') ||
                           div.classList.contains('primary') ||
                           div.classList.contains('hero') ||
                           div.classList.contains('section');
      
      // Exclude elements with ANY text content
      const hasText = div.textContent && div.textContent.trim().length > 0;
      
      // Exclude elements that might contain interactive children
      const hasInteractiveChildren = div.querySelector('button, a, input, select, textarea, [role="button"], [role="link"]') !== null;
      
      // Only allow pure decorative background divs with no content or interactions
      return isVisible &&
             rect.width > 50 && 
             rect.height > 50 && 
             !isInteractive &&
             !isHeader &&
             !isMainContent &&
             !hasText &&
             !hasInteractiveChildren &&
             (hasBlur || hasGlass || div.classList.contains('glass') || div.classList.contains('blur') || div.classList.contains('background') || div.classList.contains('decoration'));
    });

    console.log(`[handleGenerateForest] Found ${visibleDivs.length} visible divs`);

    if (visibleDivs.length === 0) {
      console.log("[handleGenerateForest] No suitable divs found, generating trees at random positions");
      // Fallback to random positions if no divs found
      for (let i = 0; i < count; i++) {
        const x = random(50, dimRef.current.x - 50);
        const y = random(50, dimRef.current.y - 50);
        const angle = random(Math.PI / -2 - 0.5, Math.PI / -2 + 0.5);
        
        const baseSettings = treeSettings.get(forestType)!;
        const modifiedSettings: TreeSettings = {
          ...baseSettings,
          lt: baseSettings.lt * random(0.7, 1.3),
          thk: Math.max(1, baseSettings.thk + randomInt(-2, 2)),
          warping: baseSettings.warping * random(0.5, 1.5),
          gtInitial: baseSettings.gtInitial * random(0.8, 1.2),
          lfAmount: Math.max(0, baseSettings.lfAmount + randomInt(-2, 3)),
          lfLength: baseSettings.lfLength * random(0.7, 1.3),
          lfGravity: baseSettings.lfGravity + randomInt(-10, 10),
          lfThickness: Math.max(1, baseSettings.lfThickness + randomInt(-1, 2)),
        };

        const newPlanter = new Planter(
          x,
          y,
          angle,
          modifiedSettings,
          plantersListRef.current,
          particlesListRef.current
        );

        plantersListRef.current.push(newPlanter);
      }
    } else {
      // Generate trees on divs with better distribution
      const treesPerDiv = Math.ceil(count / visibleDivs.length);
      let treeCount = 0;
      
      for (let divIndex = 0; divIndex < visibleDivs.length && treeCount < count; divIndex++) {
        const targetDiv = visibleDivs[divIndex];
        const rect = targetDiv.getBoundingClientRect();
        
        // Calculate how many trees to place on this div
        const treesForThisDiv = Math.min(treesPerDiv, count - treeCount);
        
        for (let treeIndex = 0; treeIndex < treesForThisDiv; treeIndex++) {
          // Determine if tree should grow from center or edge
          const isCenter = random(0, 1) < 0.3; // 30% chance for center growth
          let x, y, angle;
          
          if (isCenter) {
            // Center growth - grows upward and branches out
            x = rect.left + rect.width / 2 + random(-20, 20);
            y = rect.bottom - 10;
            angle = random(Math.PI / -2 - 0.5, Math.PI / -2 + 0.5); // Upward with variation
          } else {
            // Edge growth - randomly choose edge and drip down
            const edge = randomInt(0, 3); // 0=top, 1=right, 2=bottom, 3=left
            
            switch (edge) {
              case 0: // Top edge - drip down
                x = rect.left + random(10, rect.width - 10);
                y = rect.top + 10;
                angle = random(Math.PI / 2 - 0.2, Math.PI / 2 + 0.2); // Growing downward
                break;
              case 1: // Right edge - drip down
                x = rect.right - 10;
                y = rect.top + random(10, rect.height - 10);
                angle = random(Math.PI / 2 - 0.3, Math.PI / 2 + 0.3); // Growing downward
                break;
              case 2: // Bottom edge - grow up
                x = rect.left + random(10, rect.width - 10);
                y = rect.bottom - 10;
                angle = random(Math.PI / -2 - 0.3, Math.PI / -2 + 0.3); // Growing upward
                break;
              case 3: // Left edge - drip down
                x = rect.left + 10;
                y = rect.top + random(10, rect.height - 10);
                angle = random(Math.PI / 2 - 0.3, Math.PI / 2 + 0.3); // Growing downward
                break;
              default:
                x = rect.left + rect.width / 2;
                y = rect.bottom - 10;
                angle = random(Math.PI / -2 - 0.3, Math.PI / -2 + 0.3);
            }
          }

          const baseSettings = treeSettings.get(forestType)!;
          const modifiedSettings: TreeSettings = {
            ...baseSettings,
            lt: baseSettings.lt * random(0.7, 1.3),
            thk: Math.max(1, baseSettings.thk + randomInt(-2, 2)),
            warping: baseSettings.warping * random(0.5, 1.5),
            gtInitial: baseSettings.gtInitial * random(0.8, 1.2),
            lfAmount: Math.max(0, baseSettings.lfAmount + randomInt(-2, 3)),
            lfLength: baseSettings.lfLength * random(0.7, 1.3),
            lfGravity: baseSettings.lfGravity + randomInt(-10, 10),
            lfThickness: Math.max(1, baseSettings.lfThickness + randomInt(-1, 2)),
          };

          const growthType = isCenter ? 'center' : 'edge';
          console.log(`[handleGenerateForest] Creating ${forestType} tree ${treeCount + 1}/${count} on div ${divIndex + 1} (${growthType} growth) at position: (${x.toFixed(1)}, ${y.toFixed(1)})`);

          const newPlanter = new Planter(
            x,
            y,
            angle,
            modifiedSettings,
            plantersListRef.current,
            particlesListRef.current
          );

          plantersListRef.current.push(newPlanter);
          treeCount++;
        }
      }
    }

    // Start planter interval if this is the first forest
    if (plantersListRef.current.length === count && !planterIntervalRef.current && planterUpdateRef.current) {
      console.log(`[handleGenerateForest] Starting planter interval for ${forestType} forest`);
      planterIntervalRef.current = setInterval(planterUpdateRef.current, 10);
    }

    console.log(`[handleGenerateForest] ${forestType} forest generation complete. Total planters: ${plantersListRef.current.length}`);
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

  // Use low z-index to stay behind content but above background
  const canvasZIndex = 0;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: canvasZIndex }}>
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
        onGenerateForest={handleGenerateForest}
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />
    </>
  );
};

export default PixelTreeCanvas;
