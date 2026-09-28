/**
 * Deterministic abstract cover art for posts without an image. Produces a CSS
 * `background` from the post id, so the same post always gets the same art.
 */
function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function coverStyle(seed: string): string {
  const h = hash(seed);
  const h1 = h % 360;
  const h2 = (h1 + 40 + ((h >>> 8) % 60)) % 360;
  const h3 = (h1 + 180 + ((h >>> 16) % 80)) % 360;
  const x1 = 15 + ((h >>> 4) % 40);
  const y1 = 10 + ((h >>> 12) % 40);
  const x2 = 55 + ((h >>> 20) % 40);
  const y2 = 50 + ((h >>> 24) % 45);
  const angle = (h >>> 5) % 360;
  return [
    `radial-gradient(at ${x1}% ${y1}%, hsl(${h1} 90% 78%) 0%, transparent 55%)`,
    `radial-gradient(at ${x2}% ${y2}%, hsl(${h2} 85% 72%) 0%, transparent 60%)`,
    `radial-gradient(at ${100 - x1}% ${100 - y2}%, hsl(${h3} 70% 80%) 0%, transparent 65%)`,
    `linear-gradient(${angle}deg, hsl(${h1} 60% 92%), hsl(${h3} 55% 86%))`,
  ].join(', ');
}
