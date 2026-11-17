/** Joins truthy class names. Swap for clsx + tailwind-merge if conflicts appear. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
