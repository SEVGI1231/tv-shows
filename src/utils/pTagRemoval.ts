export function pTagRemoval(summary: string): string {
  const withoutTags: string = summary.replace(/<[^<>]+>/g, "");
  return withoutTags;
}
