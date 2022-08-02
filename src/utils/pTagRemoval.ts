export function pTagRemoval(summary: string): string {
  if (summary.includes("<p>")) {
    return summary.slice(3, summary.length - 4);
  }
  return summary;
}
