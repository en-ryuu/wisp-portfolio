export class Color {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    this.r = Math.floor(r);
    this.g = Math.floor(g);
    this.b = Math.floor(b);
  }

  randomise(amount: number): Color {
    return new Color(
      Math.max(0, Math.min(255, this.r + this.random(-amount, amount))),
      Math.max(0, Math.min(255, this.g + this.random(-amount, amount))),
      Math.max(0, Math.min(255, this.b + this.random(-amount, amount)))
    );
  }

  toCSS(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  private random(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
