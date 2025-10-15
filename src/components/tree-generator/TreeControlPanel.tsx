"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Color } from "@/lib/pixelTree/Color";
import type { TreeSettings } from "@/lib/pixelTree/treeSettings";
import { treeSettings } from "@/lib/pixelTree/treeSettings";
import { ChevronDown, ChevronUp, Settings, X } from "lucide-react";
import { useState } from "react";

interface TreeControlPanelProps {
  currentSettings: TreeSettings;
  onSettingsChange: (settings: TreeSettings) => void;
  onClearCanvas: () => void;
  onGenerateForest: (forestType: string, count: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function TreeControlPanel({
  currentSettings,
  onSettingsChange,
  onClearCanvas,
  onGenerateForest,
  isOpen,
  onClose,
}: TreeControlPanelProps) {
  const [showDocs, setShowDocs] = useState(false);
  const [forestType, setForestType] = useState("Sakura");
  const [treeCount, setTreeCount] = useState(30);

  if (!isOpen) return null;

  const handlePresetChange = (presetName: string) => {
    const preset = treeSettings.get(presetName);
    if (preset) {
      onSettingsChange({ ...preset });
    }
  };

  const updateSetting = <K extends keyof TreeSettings>(
    key: K,
    value: TreeSettings[K]
  ) => {
    onSettingsChange({
      ...currentSettings,
      [key]: value,
    });
  };

  return (
    <div className="fixed top-20 right-6 z-50 max-w-md w-full max-h-[calc(100vh-8rem)] overflow-y-auto">
      <Card className="bg-background/95 backdrop-blur-sm shadow-2xl">
        <CardContent className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Settings className="w-5 h-5 text-foreground/70" />
              <h2 className="text-xl font-light tracking-tight text-foreground">
                Tree Generator
              </h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Tree Type Selector */}
          <div className="space-y-2">
            <Label className="text-sm text-foreground/70">Tree Type</Label>
            <Select onValueChange={handlePresetChange} defaultValue="Oak">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select tree type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Oak">Oak</SelectItem>
                <SelectItem value="Sakura">Sakura</SelectItem>
                <SelectItem value="Palm">Palm</SelectItem>
                <SelectItem value="OakWinter">Oak Winter</SelectItem>
                <SelectItem value="Birch">Birch</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Branch Settings */}
          <div className="space-y-4">
            <h3 className="text-base font-light text-foreground">
              Branch Settings
            </h3>

            {/* Branch Length */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-sm text-foreground/70">
                  Branch Length
                </Label>
                <span className="text-xs text-foreground/60">
                  {currentSettings.lt.toFixed(2)}
                </span>
              </div>
              <Slider
                value={[currentSettings.lt]}
                onValueChange={(value) => updateSetting("lt", value[0])}
                min={0.3}
                max={2.0}
                step={0.1}
                className="w-full"
              />
            </div>

            {/* Branch Thickness */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-sm text-foreground/70">
                  Branch Thickness
                </Label>
                <span className="text-xs text-foreground/60">
                  {currentSettings.thk}
                </span>
              </div>
              <Slider
                value={[currentSettings.thk]}
                onValueChange={(value) => updateSetting("thk", value[0])}
                min={1}
                max={15}
                step={1}
                className="w-full"
              />
            </div>

            {/* Branch Angle Variation */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-sm text-foreground/70">
                  Angle Variation
                </Label>
                <span className="text-xs text-foreground/60">
                  {currentSettings.warping.toFixed(1)}
                </span>
              </div>
              <Slider
                value={[currentSettings.warping]}
                onValueChange={(value) => updateSetting("warping", value[0])}
                min={0}
                max={50}
                step={1}
                className="w-full"
              />
            </div>

            {/* Gravity Effect */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-sm text-foreground/70">
                  Gravity Effect
                </Label>
                <span className="text-xs text-foreground/60">
                  {currentSettings.gtInitial.toFixed(2)}
                </span>
              </div>
              <Slider
                value={[currentSettings.gtInitial]}
                onValueChange={(value) => updateSetting("gtInitial", value[0])}
                min={-2.0}
                max={5.0}
                step={0.1}
                className="w-full"
              />
            </div>
          </div>

          {/* Leaf Settings */}
          <div className="space-y-4">
            <h3 className="text-base font-light text-foreground">
              Leaf Settings
            </h3>

            {/* Leaf Amount */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-sm text-foreground/70">
                  Leaf Amount
                </Label>
                <span className="text-xs text-foreground/60">
                  {currentSettings.lfAmount}
                </span>
              </div>
              <Slider
                value={[currentSettings.lfAmount]}
                onValueChange={(value) => updateSetting("lfAmount", value[0])}
                min={0}
                max={20}
                step={1}
                className="w-full"
              />
            </div>

            {/* Leaf Size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-sm text-foreground/70">Leaf Size</Label>
                <span className="text-xs text-foreground/60">
                  {currentSettings.lfLength.toFixed(2)}
                </span>
              </div>
              <Slider
                value={[currentSettings.lfLength]}
                onValueChange={(value) => updateSetting("lfLength", value[0])}
                min={0.1}
                max={3.0}
                step={0.1}
                className="w-full"
              />
            </div>

            {/* Leaf Gravity */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-sm text-foreground/70">
                  Leaf Gravity
                </Label>
                <span className="text-xs text-foreground/60">
                  {currentSettings.lfGravity}
                </span>
              </div>
              <Slider
                value={[currentSettings.lfGravity]}
                onValueChange={(value) => updateSetting("lfGravity", value[0])}
                min={-50}
                max={50}
                step={1}
                className="w-full"
              />
            </div>
          </div>

          {/* Color Controls */}
          <div className="space-y-4">
            <h3 className="text-base font-light text-foreground">Colors</h3>

            {/* Branch Color */}
            <div className="space-y-2">
              <Label className="text-sm text-foreground/70">
                Branch Color
              </Label>
              <div className="flex gap-3">
                <input
                  type="color"
                  value={`#${currentSettings.colorBase.r.toString(16).padStart(2, "0")}${currentSettings.colorBase.g.toString(16).padStart(2, "0")}${currentSettings.colorBase.b.toString(16).padStart(2, "0")}`}
                  onChange={(e) => {
                    const hex = e.target.value;
                    const r = parseInt(hex.slice(1, 3), 16);
                    const g = parseInt(hex.slice(3, 5), 16);
                    const b = parseInt(hex.slice(5, 7), 16);
                    updateSetting("colorBase", new Color(r, g, b));
                  }}
                  className="h-10 w-20 rounded cursor-pointer"
                />
                <span className="text-xs text-foreground/60 flex items-center">
                  RGB({currentSettings.colorBase.r}, {currentSettings.colorBase.g},{" "}
                  {currentSettings.colorBase.b})
                </span>
              </div>
            </div>

            {/* Leaf Color */}
            <div className="space-y-2">
              <Label className="text-sm text-foreground/70">Leaf Color</Label>
              <div className="flex gap-3">
                <input
                  type="color"
                  value={`#${currentSettings.colorLeaves.r.toString(16).padStart(2, "0")}${currentSettings.colorLeaves.g.toString(16).padStart(2, "0")}${currentSettings.colorLeaves.b.toString(16).padStart(2, "0")}`}
                  onChange={(e) => {
                    const hex = e.target.value;
                    const r = parseInt(hex.slice(1, 3), 16);
                    const g = parseInt(hex.slice(3, 5), 16);
                    const b = parseInt(hex.slice(5, 7), 16);
                    updateSetting("colorLeaves", new Color(r, g, b));
                  }}
                  className="h-10 w-20 rounded cursor-pointer"
                />
                <span className="text-xs text-foreground/60 flex items-center">
                  RGB({currentSettings.colorLeaves.r},{" "}
                  {currentSettings.colorLeaves.g}, {currentSettings.colorLeaves.b})
                </span>
              </div>
            </div>
          </div>

           {/* Forest Generation Settings */}
           <div className="space-y-4">
             <h3 className="text-base font-light text-foreground">
               Forest Generation
             </h3>

             {/* Forest Type */}
             <div className="space-y-2">
               <Label className="text-sm text-foreground/70">Forest Type</Label>
               <Select value={forestType} onValueChange={setForestType}>
                 <SelectTrigger className="w-full">
                   <SelectValue placeholder="Select forest type" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem value="Sakura">Sakura Forest</SelectItem>
                   <SelectItem value="Oak">Oak Forest</SelectItem>
                   <SelectItem value="Palm">Palm Forest</SelectItem>
                   <SelectItem value="OakWinter">Winter Forest</SelectItem>
                   <SelectItem value="Birch">Birch Forest</SelectItem>
                 </SelectContent>
               </Select>
             </div>

             {/* Tree Count */}
             <div className="space-y-2">
               <div className="flex justify-between items-center">
                 <Label className="text-sm text-foreground/70">
                   Tree Count
                 </Label>
                 <span className="text-xs text-foreground/60">
                   {treeCount}
                 </span>
               </div>
               <Slider
                 value={[treeCount]}
                 onValueChange={(value) => setTreeCount(value[0])}
                 min={1}
                 max={100}
                 step={1}
                 className="w-full"
               />
             </div>
           </div>

           {/* Action Buttons */}
           <div className="space-y-3 pt-2">
             <div className="text-sm text-foreground/70 text-center py-2">
               Click anywhere on the canvas to generate trees
             </div>
             <Button
               onClick={() => onGenerateForest(forestType, treeCount)}
               className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
             >
               Generate {forestType} Forest ({treeCount} trees)
             </Button>
             <Button
               onClick={onClearCanvas}
               variant="outline"
               className="w-full transition-all duration-300"
             >
               Clear Canvas
             </Button>
           </div>

          {/* Documentation Toggle */}
          <div className="pt-2">
            <Button
              variant="ghost"
              onClick={() => setShowDocs(!showDocs)}
              className="w-full justify-between"
            >
              <span className="text-sm text-foreground/70">
                Parameter Documentation
              </span>
              {showDocs ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </Button>

            {showDocs && (
              <div className="mt-4 space-y-3 text-xs text-foreground/60 leading-relaxed">
                <div>
                  <strong className="text-foreground/80">Branch Length:</strong>{" "}
                  Controls how long branches grow before splitting
                </div>
                <div>
                  <strong className="text-foreground/80">
                    Branch Thickness:
                  </strong>{" "}
                  Sets the width of branches
                </div>
                <div>
                  <strong className="text-foreground/80">
                    Angle Variation:
                  </strong>{" "}
                  Controls how much branches wobble and bend
                </div>
                <div>
                  <strong className="text-foreground/80">Gravity Effect:</strong>{" "}
                  Pulls branches toward vertical (positive) or horizontal
                  (negative)
                </div>
                <div>
                  <strong className="text-foreground/80">Leaf Amount:</strong>{" "}
                  Number of leaves per branch end
                </div>
                <div>
                  <strong className="text-foreground/80">Leaf Size:</strong> Size
                  multiplier for leaves
                </div>
                <div>
                  <strong className="text-foreground/80">Leaf Gravity:</strong>{" "}
                  Negative values make leaves point upward, positive makes them
                  droop
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
