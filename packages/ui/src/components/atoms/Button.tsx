import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type ButtonVariant = "primary" | "dark" | "secondary";
export type ButtonSize = "md" | "lg";

export interface ButtonStyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  // One per view: the main action.
  primary: "bg-brand text-on-brand hover:not-disabled:bg-brand-strong",
  // Nav CTA, e.g. "Empezar gratis".
  dark: "bg-surface-inverse text-ink-inverse hover:not-disabled:bg-ink-muted",
  secondary:
    "border border-border-strong bg-surface-000 text-ink hover:not-disabled:bg-surface-200",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-label", // 44px, default touch target
  lg: "min-h-13 px-6.5 text-body font-semibold", // 52px, hero and form CTAs
};

/**
 * Class names for a button-styled element. Use it to style links as buttons
 * (for example a Next.js <Link>), since navigation must be an <a>, not a <button>.
 */
export function buttonClasses({ variant = "primary", size = "md" }: ButtonStyleOptions = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-pill transition-[background-color,scale] duration-150",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    "motion-safe:active:not-disabled:scale-97",
    "disabled:cursor-not-allowed disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
  );
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyleOptions {}

/** Pill-shaped action. For navigation, apply `buttonClasses()` to a link instead. */
export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonClasses({ variant, size }), className)} {...props} />;
}
