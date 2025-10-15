import { Particle } from "./Particle";
import type { TreeSettings } from "./treeSettings";
import { random, randomInt, rotateAngle } from "./utils";

export const growStepSize = 0.007;

export class Planter {
  fx: number;
  fy: number;
  x: number;
  y: number;
  angle: number;
  stgs: TreeSettings;
  lT: number;
  splitTime: number;
  thk: number;
  gt: number;
  color: string;
  speed = 100;
  age = 0;
  gen = 1;
  enabled = true;

  constructor(
    x: number,
    y: number,
    angle: number,
    stgs: TreeSettings,
    private plantersList: Planter[],
    private particlesList: Particle[]
  ) {
    this.fx = x;
    this.fy = y;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.stgs = stgs;
    this.lT = this.stgs.lt * random(0.5, 1.5);
    this.splitTime =
      this.lT * random(this.stgs.mnSpT, this.stgs.mxSpT ?? this.stgs.mnSpT + 0.1);
    this.thk = this.stgs.thk;
    this.gt = this.stgs.gtInitial;
    this.color = this.stgs.colorBase.randomise(7).toCSS();
  }

  update(dimX: number, dimY: number, ctx: CanvasRenderingContext2D): void {
    this.angle += random(-this.stgs.warping, this.stgs.warping) * growStepSize;
    this.angle = rotateAngle(this.angle, Math.PI / -2, this.gt * growStepSize);
    this.fx += Math.cos(this.angle) * this.speed * growStepSize;
    this.fy += Math.sin(this.angle) * this.speed * growStepSize;

    if (this.fx >= dimX) this.fx = dimX - 1;
    if (this.fy >= dimY) this.fy = dimY - 1;
    if (this.fx < 0) this.fx = 0;
    if (this.fy < 0) this.fy = 0;

    ctx.fillStyle = this.color;
    ctx.fillRect(
      Math.ceil(this.x - this.thk / 2),
      Math.ceil(this.y - this.thk / 2),
      this.thk,
      this.thk
    );

    this.x = Math.floor(this.fx);
    this.y = Math.floor(this.fy);

    this.age += growStepSize;

    if (this.age > this.splitTime) {
      this.split(0, this.stgs.sMidMx);
      this.splitTime += random(this.stgs.mnSpT, this.stgs.mxSpT ?? this.stgs.mnSpT * 2);
    }

    if (this.age > this.lT) {
      this.split(1, this.stgs.sEndMx);
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, 1, 1);
      this.enabled = false;

      if (this.gen > this.stgs.lfGen && random(0, 1) > 0.8) {
        const particle = new Particle(this.x, this.y, this.angle);
        particle.color = this.color;
        this.particlesList.push(particle);
        if (this.particlesList.length > 1000) {
          this.particlesList.shift();
        }
      }
    }
  }

  split(min: number = 0, max: number = 3): void {
    let r = randomInt(min, max);
    let angDif = this.stgs.angDif;

    if (this.gen >= this.stgs.lfGen + (this.stgs.lfSteps ?? 0)) r = 0;
    if (r === 1) angDif = 0.1;
    if (this.gen === this.stgs.lfGen) {
      angDif = 3;
      r = this.stgs.lfAmount;
    }

    for (let i = 0; i < r; i++) {
      const pla = new Planter(
        this.x,
        this.y,
        rotateAngle(this.angle + random(-angDif, angDif), Math.PI / -2, 0.3),
        this.stgs,
        this.plantersList,
        this.particlesList
      );

      pla.thk = Math.max(1, this.thk - 1);
      pla.gen = this.gen + randomInt(1, 1 + (this.stgs.skipGenMax ?? 1));
      pla.lT /= pla.gen;
      pla.splitTime /= pla.gen / pla.gen;
      pla.gt -= pla.gen * this.stgs.gtPerGen;

      if (this.gen >= this.stgs.lfGen) {
        pla.color = this.stgs.colorLeaves.randomise(20).toCSS();
        pla.lT *= this.stgs.lfLength;
        pla.thk = Math.max(1, this.stgs.lfThickness - (pla.gen - this.stgs.lfGen));
        pla.gt = this.stgs.lfGravity;
      }

      this.plantersList.push(pla);
    }
  }
}
