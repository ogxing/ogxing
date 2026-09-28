export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
