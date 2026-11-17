# ProgressBar

Thin pill bar for spending against a limit and for per-category shares.

- Track: `surface-200` (or `cat-other-bg` inside white cards), `radius-pill`. Height 8px for limits, 6px for category rows.
- Fill: `brand` for a limit; the category's `cat-*-fg` for category rows.
- Always pair it with the numbers in text ("$ 412.380 de un límite de $ 550.000"); the bar never carries the information alone.
- Expose it as `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`.
- Over-limit states are not designed yet (v1 budgets): define them before shipping limits.
