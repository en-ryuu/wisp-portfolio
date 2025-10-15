export function randomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function rotateAngle(from: number, to: number, amount: number): number {
  amount = Math.min(1, Math.max(-1, amount));
  const netAngle = (from - to + Math.PI * 2) % (Math.PI * 2);
  const delta = Math.min(Math.abs(netAngle - Math.PI * 2), netAngle, amount);
  const sign = netAngle - Math.PI >= 0 ? 1 : -1;
  from += sign * delta + Math.PI * 2;
  from %= Math.PI * 2;
  return from;
}
