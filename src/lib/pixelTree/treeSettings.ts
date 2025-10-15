import { Color } from "./Color";

export interface TreeSettings {
  hr: number; // hue rotate
  lt: number; // lifetime
  mnSpT: number; // min split time
  mxSpT?: number; // max split time
  thk: number; // thickness
  gtInitial: number; // gravity initial
  warping: number; // branch warping
  lfGen: number; // leaf generation
  gtPerGen: number; // gravity per generation
  angDif: number; // angle difference
  lfAmount: number; // leaf amount
  lfLength: number; // leaf length
  lfGravity: number; // leaf gravity
  lfThickness: number; // leaf thickness
  sEndMx: number; // split end max
  sMidMx: number; // split mid max
  skipGenMax: number; // skip generation max
  lfSteps: number; // leaf steps
  colorBase: Color; // base color
  colorLeaves: Color; // leaves color
}

export const treeSettings = new Map<string, TreeSettings>([
  [
    "Oak",
    {
      hr: 110,
      lt: 0.7,
      mnSpT: 0.3,
      thk: 8,
      gtInitial: 0.3,
      warping: 5,
      lfGen: 4,
      gtPerGen: 0.35,
      angDif: 1.3,
      lfAmount: 4,
      lfLength: 0.3,
      lfGravity: 0,
      lfThickness: 6,
      sEndMx: 5,
      sMidMx: 4,
      skipGenMax: 0,
      lfSteps: 2,
      colorBase: new Color(55, 45, 35),
      colorLeaves: new Color(60, 110, 40),
    },
  ],
  [
    "Sakura",
    {
      hr: 320,
      lt: 0.5,
      mnSpT: 0.8,
      thk: 10,
      gtInitial: 3,
      warping: 40,
      lfGen: 12,
      gtPerGen: 1,
      angDif: 1,
      lfAmount: 5,
      lfLength: 0.8,
      lfGravity: 0,
      lfThickness: 6,
      sEndMx: 2,
      sMidMx: 2,
      lfSteps: 1,
      colorBase: new Color(50, 30, 30),
      colorLeaves: new Color(220, 140, 150),
    },
  ],
  [
    "Palm",
    {
      hr: 40,
      lt: 1.1,
      mnSpT: 2,
      thk: 7,
      gtInitial: -0.5,
      warping: 3,
      lfGen: 1,
      gtPerGen: 0.5,
      angDif: 0,
      lfAmount: 10,
      lfLength: 0.3,
      lfGravity: -7,
      lfThickness: 6,
      sEndMx: 1,
      sMidMx: 1,
      skipGenMax: 0,
      lfSteps: 3,
      colorBase: new Color(60, 30, 25),
      colorLeaves: new Color(80, 130, 30),
    },
  ],
  [
    "OakWinter",
    {
      hr: 180,
      lt: 0.7,
      mnSpT: 0.3,
      thk: 8,
      gtInitial: 0.3,
      warping: 20,
      lfGen: 5,
      gtPerGen: 0.1,
      angDif: 1.4,
      lfAmount: 1,
      lfLength: 0.5,
      lfGravity: 0,
      lfThickness: 6,
      sEndMx: 4,
      sMidMx: 3,
      skipGenMax: 1,
      lfSteps: 2,
      colorBase: new Color(80, 110, 125),
      colorLeaves: new Color(185, 190, 200),
    },
  ],
  [
    "Birch",
    {
      hr: 80,
      lt: 0.7,
      mnSpT: 0.6,
      thk: 7,
      gtInitial: 0.5,
      warping: 3,
      lfGen: 6,
      gtPerGen: 0.35,
      angDif: 0.9,
      lfAmount: 3,
      lfLength: 2,
      lfGravity: -30,
      lfThickness: 4,
      sEndMx: 4,
      sMidMx: 6,
      skipGenMax: 0,
      lfSteps: 0,
      colorBase: new Color(180, 170, 160),
      colorLeaves: new Color(90, 120, 40),
    },
  ],
]);
