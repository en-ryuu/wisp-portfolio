import { Color } from "./Color";
import { random } from "./utils";

export class Particle {
  fx: number;
  fy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  speed = 85;
  age = 0;
  drag = 2;
  enabled = true;
  lT = 20;
  size = 1;
  gt = 50;
  color: string;

  constructor(x: number, y: number, angle: number = random(0, Math.PI * 2)) {
    this.fx = x;
    this.fy = y;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.vx = Math.cos(angle) * this.speed;
    this.vy = Math.sin(angle) * this.speed;
    this.color = new Color(150, 150, 150).randomise(100).toCSS();
  }

  update(deltaTime: number, dimX: number, dimY: number, ctx: CanvasRenderingContext2D): void {
    this.vy *= 1 - this.drag * deltaTime;
    this.vx *= 1 - this.drag * deltaTime;

    if (this.fy >= dimY - 1) {
      this.vy = 0;
    } else {
      this.vx += random(-100, 100) * deltaTime;
      if (this.fy < dimY - 20) this.vy += random(-100, 100) * deltaTime;
      this.vy += this.gt * deltaTime;
      this.vy -= Math.abs(this.vx) / 150;
      this.fx += this.vx * deltaTime;
      this.fy += this.vy * deltaTime;
    }

    if (this.fx >= dimX) this.fx = dimX - 1;
    if (this.fy >= dimY) this.fy = dimY - 1;
    if (this.fx < 0) this.fx = 0;
    if (this.fy < 0) this.fy = 0;

    ctx.fillStyle = this.color;
    ctx.fillRect(
      Math.ceil(this.x - this.size / 2),
      Math.ceil(this.y - this.size / 2),
      this.size,
      this.size
    );

    this.x = Math.floor(this.fx);
    this.y = Math.floor(this.fy);
    this.age += deltaTime;

    if (this.age > this.lT) {
      this.enabled = false;
    }
  }
}
