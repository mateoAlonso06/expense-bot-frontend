import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

/** Seeded expense categories. "other" is the fallback category (displayed as "Otros"). */
export type CategoryKey =
  | "food"
  | "housing"
  | "transport"
  | "health"
  | "leisure"
  | "services"
  | "other";

export type ChipVariant = CategoryKey | "neutral" | "status" | "new";

const variantClasses: Record<ChipVariant, string> = {
  food: "bg-cat-food-bg text-cat-food-fg",
  housing: "bg-cat-housing-bg text-cat-housing-fg",
  transport: "bg-cat-transport-bg text-cat-transport-fg",
  health: "bg-cat-health-bg text-cat-health-fg",
  leisure: "bg-cat-leisure-bg text-cat-leisure-fg",
  services: "bg-cat-services-bg text-cat-services-fg",
  other: "bg-cat-other-bg text-cat-other-fg",
  // Dates and labels such as "Hoy" or "Datos de ejemplo".
  neutral: "bg-cat-other-bg text-cat-other-fg font-medium",
  // States such as "Disponible".
  status: "bg-brand-tint text-brand-strong",
  // The "Nuevo" badge.
  new: "bg-brand text-on-brand",
};

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant;
}

/**
 * Small non-interactive pill for a category, date or status.
 * A chip that filters a list must be a <button aria-pressed> instead.
 */
export function Chip({ variant = "neutral", className, ...props }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-2.5 py-1 text-caption",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
