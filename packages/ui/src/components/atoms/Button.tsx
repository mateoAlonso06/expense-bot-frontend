import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-on-brand hover:bg-brand-strong",
  secondary: "border border-border-strong bg-surface-000 text-ink hover:bg-surface-200",
};

/** Placeholder atom to validate the package wiring. Replace with the design system version. */
export function Button({ variant = "primary", className, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center rounded-pill px-5 text-label transition disabled:opacity-50",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}
