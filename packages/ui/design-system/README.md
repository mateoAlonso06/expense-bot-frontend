# resiAI

resiAI turns chat messages, receipt photos and voice notes into categorized expenses. This system is extracted from the landing page (Idea 2) and is meant for every other surface: the web panel (history, dashboards, limits), auth screens, emails and social posts.

The look is **clear, friendly and precise**: a green-biased off-white ground, one confident green, generous radii, bold geometric headlines, and money shown big. It should feel like a helpful chat, not a bank.

## Voice and copy

- User-facing copy is **Spanish (Argentina), voseo**: "Anotá", "Mandá", "Vinculá", "¿Tengo que elegir…?". Short, warm, direct.
- Talk about what the person does, not how the system works: "Leí tu ticket", "Te escuché", "Gasto registrado".
- Money is always ARS with Argentine formatting: `$ 23.890,00` (dot thousands, comma decimals, a space after `$`). Lists may drop decimals: `$ 23.890`.
- Category names are the seeded ones: Alimentación, Vivienda, Transporte, Salud, Ocio, Servicios, Otros. The fallback is **Otros**; never ask the user to pick a category.
- Never invent metrics. Mock data is labelled "Datos de ejemplo".
- No emoji anywhere.

## Color

- `surface-100` is the page; `surface-000` lifts cards; `surface-200` is the chat wall and input wells.
- `brand` is the only accent. Use it for the primary action, links, check marks, progress and the "AI" in the wordmark. White text on `brand` passes 4.5:1; `mint` does **not** work as text on light grounds, keep it for `surface-inverse`.
- `surface-inverse` makes one contrast band per page (the panel section) and the primary dark button.
- Category colors (`cat-*-bg` / `cat-*-fg`) are semantic, not decorative: one pair per category, always used together on chips, transaction icons and chart bars.
- `sky`, `lilac`, `brand-tint` are only for the hero's soft radial glows. Keep them subtle, never a full-bleed gradient wash.

## Typography

- **Plus Jakarta Sans** (display, 700–800, tracking −0.02em) for headlines, titles and amounts. **Inter** (400–600) for everything else. Both from Google Fonts.
- Scale: `display-xl` 68 → `display-l` 48 → `display-m` 30 → `title` 24 → `amount` 28 → `body-l` 20 → `body` 16 → `chat` 15 → `label` 14 → `caption` 12.
- Under 820px wide, `display-xl` drops to 44px and `display-l` to 34px.
- `eyebrow` is uppercase, `brand`, letter-spaced 0.08em, above every section title.
- Amounts in lists and tables use `font-variant-numeric: tabular-nums`.

## Layout

- Content max width 1200px with `space-6` side padding (never under 16px).
- Sections breathe: `space-24` or `space-28` vertical padding. Section title to grid: `space-14`.
- Rows are flex/grid with `gap` and wrap to one column on phones. Cards in a row share padding (`space-8`) and radius.

## Shape

- Everything is rounded. Buttons and chips are pills (`radius-pill`); cards `radius-lg`/`radius-xl`; the CTA band `radius-2xl`.
- Chat bubbles use `radius-md` with the tail corner at 4px (bottom-right for the user, bottom-left for resiAI).
- Shadows are rare: `shadow-bubble` for bot bubbles, `shadow-device` only for the phone and the floating panel. Prefer a 1px `border` to a shadow.

## Motion

- Motion explains the product: messages pop in (opacity + 12px rise + 0.97 scale, 0.7s, `cubic-bezier(.22,.8,.3,1)`), a typing indicator with three dots, a scan line over receipts, an animated waveform for audio.
- The chat demo loops one step every 1.5s. Ambient banknotes float over 9–11s.
- Always honor `prefers-reduced-motion`: stop ambient and decorative loops.

## Iconography

- Inline stroke icons, 2–2.4px stroke, round caps and joins, 16–26px, colored with `currentColor` or `brand`.
- Icon tiles: 56px square, `radius-md`, a `*-bg` fill with the matching `*-fg` stroke.

## Background motif

The hero uses soft radial glows (`sky`, `brand-tint`, `lilac`) plus **stylized** Argentine banknotes: a $10.000 with a Sol de Mayo, and a hummingbird drawn in a thin stroke, with guilloche lines in `banknote-ink`. They are inspired motifs, never reproductions of real notes. Keep them at 45–55% opacity, behind content, and switchable off.

## Components

Button, Chip, ChatBubble, ExpenseCard and ProgressBar are documented as static HTML/CSS patterns built on these tokens. There is no JS bundle yet: when the web panel picks a framework, port them as real components and add the bundle here.

## Logo

**Pending.** The current mark (a receipt glyph in `mint` on a `surface-inverse` rounded square, with the wordmark "resi" + "AI" in `brand`) is a placeholder. A new logo will be designed from scratch; until then, use the wordmark only.
