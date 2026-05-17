/**
 * Merge class names with Tailwind CSS conflict resolution.
 * Note: clsx and tailwind-merge need to be installed via:
 * npm install clsx tailwind-merge
 */
export function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
}
