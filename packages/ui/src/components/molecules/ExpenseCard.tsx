import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import { formatARS } from "../../lib/money";
import { CATEGORY_LABELS, Chip, type CategoryKey } from "../atoms/Chip";

/** How the user sent the expense to the bot. */
export type InputFormat = "text" | "photo" | "audio";

const statusCopy: Record<InputFormat, string> = {
  text: "Gasto registrado",
  photo: "Leí tu ticket",
  audio: "Te escuché",
};

export interface Expense {
  /** Amount in pesos. */
  amount: number;
  category: CategoryKey;
  /** Agent-generated, sentence case, e.g. "Compra en supermercado". */
  description: string;
  /** Already formatted for display: "Hoy", "Ayer" or "dd/mm". */
  dateLabel: string;
  format: InputFormat;
}

export interface ExpenseCardProps extends HTMLAttributes<HTMLDivElement>, Expense {
  /** Shown as a resiAI chat reply (tighter bottom-left corner). Defaults to true. */
  inChat?: boolean;
}

/** resiAI's confirmation that an expense was recorded. */
export function ExpenseCard({
  amount,
  category,
  description,
  dateLabel,
  format,
  inChat = true,
  className,
  ...props
}: ExpenseCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2.5 rounded-md bg-surface-000 p-3.5 text-ink shadow-bubble",
        inChat && "self-start rounded-bl-[0.25rem]",
        className,
      )}
      {...props}
    >
      <span className="inline-flex items-center gap-1.5 text-label text-brand">
        <svg
          className="size-4 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m5 12 5 5 9-10" />
        </svg>
        {statusCopy[format]}
      </span>
      <span className="font-display text-amount">{formatARS(amount)}</span>
      <span className="flex flex-wrap gap-1.5">
        <Chip variant={category}>{CATEGORY_LABELS[category]}</Chip>
        <Chip>{dateLabel}</Chip>
      </span>
      <span className="text-label font-normal text-ink-muted">{description}</span>
    </div>
  );
}

const formatTile: Record<InputFormat, { code: string; label: string }> = {
  text: { code: "TXT", label: "Texto" },
  photo: { code: "IMG", label: "Foto" },
  audio: { code: "AUD", label: "Audio" },
};

const tileClasses: Record<CategoryKey, string> = {
  food: "bg-cat-food-bg text-cat-food-fg",
  housing: "bg-cat-housing-bg text-cat-housing-fg",
  transport: "bg-cat-transport-bg text-cat-transport-fg",
  health: "bg-cat-health-bg text-cat-health-fg",
  leisure: "bg-cat-leisure-bg text-cat-leisure-fg",
  services: "bg-cat-services-bg text-cat-services-fg",
  other: "bg-cat-other-bg text-cat-other-fg",
};

export interface ExpenseRowProps extends HTMLAttributes<HTMLLIElement>, Expense {}

/**
 * The same expense as a row in the web panel's list. Render it inside a <ul>;
 * rows are separated by a border, so the list needs no gap.
 */
export function ExpenseRow({
  amount,
  category,
  description,
  dateLabel,
  format,
  className,
  ...props
}: ExpenseRowProps) {
  const tile = formatTile[format];
  return (
    <li
      className={cn(
        "flex items-center gap-3.5 border-b border-border py-3 last:border-b-0",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-sm text-caption font-bold",
          tileClasses[category],
        )}
      >
        <span aria-hidden="true">{tile.code}</span>
        <span className="sr-only">{tile.label}</span>
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="truncate text-label font-medium text-ink">{description}</span>
        <span className="text-caption font-normal text-ink-subtle">
          {CATEGORY_LABELS[category]} · {dateLabel}
        </span>
      </span>
      <span className="text-label tabular-nums text-ink">{formatARS(amount, { decimals: false })}</span>
    </li>
  );
}
