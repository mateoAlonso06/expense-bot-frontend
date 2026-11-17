import type { ProgressHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import type { CategoryKey } from "./Chip";

export type ProgressTone = "brand" | CategoryKey;

const toneClasses: Record<ProgressTone, string> = {
  brand: "[--progress-fill:var(--color-brand)]",
  food: "[--progress-fill:var(--color-cat-food-fg)]",
  housing: "[--progress-fill:var(--color-cat-housing-fg)]",
  transport: "[--progress-fill:var(--color-cat-transport-fg)]",
  health: "[--progress-fill:var(--color-cat-health-fg)]",
  leisure: "[--progress-fill:var(--color-cat-leisure-fg)]",
  services: "[--progress-fill:var(--color-cat-services-fg)]",
  other: "[--progress-fill:var(--color-cat-other-fg)]",
};

export interface ProgressBarProps
  extends Omit<ProgressHTMLAttributes<HTMLProgressElement>, "value" | "max"> {
  value: number;
  max?: number;
  /** Fill color: `brand` for a spending limit, the category for category shares. */
  tone?: ProgressTone;
  /** `md` (8px) for limits, `sm` (6px) for category rows. */
  size?: "md" | "sm";
  /** Track color: `surface` on the page, `card` inside white cards. */
  track?: "surface" | "card";
}

/**
 * Determinate progress on a native <progress>, so assistive tech announces it.
 * Always show the numbers as text next to it, and name it with `aria-label`,
 * `aria-labelledby` or a <label>.
 */
export function ProgressBar({
  value,
  max = 100,
  tone = "brand",
  size = "md",
  track = "surface",
  className,
  ...props
}: ProgressBarProps) {
  return (
    <progress
      value={value}
      max={max}
      className={cn(
        "block w-full appearance-none overflow-clip rounded-pill border-0",
        size === "md" ? "h-2" : "h-1.5",
        track === "surface" ? "bg-surface-200" : "bg-cat-other-bg",
        toneClasses[tone],
        // Each engine needs its own pseudo-element rule; they must not be grouped.
        "[&::-webkit-progress-bar]:bg-transparent",
        "[&::-webkit-progress-value]:rounded-pill [&::-webkit-progress-value]:bg-(--progress-fill)",
        "motion-safe:[&::-webkit-progress-value]:transition-[inline-size] motion-safe:[&::-webkit-progress-value]:duration-300",
        "[&::-moz-progress-bar]:rounded-pill [&::-moz-progress-bar]:bg-(--progress-fill)",
        className,
      )}
      {...props}
    />
  );
}
