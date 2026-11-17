# expense-bot-front

Frontend monorepo for resiAI (Expense Bot). See `README.md` for the workspace layout and commands. The backend is a separate Spring Boot API.

## Design source (read before building UI)

- `design/README.md`: index of the reference screens, which app implements each one, how to read the `.dc.html` exports, and open placeholders.
- `packages/ui/design-system/README.md`: brand book (voice, color, type, layout, motion). `tokens.json` holds every token with a usage note; `components/<Name>/` holds the spec (`README.md`) and a static HTML preview of each component.
- Build from these files. Do not invent colors, spacing or copy. Use tokens, never raw hex.

## Rules

- User-facing copy is Spanish (Argentina, voseo). Code, comments, docs and commits are in English.
- Money is ARS, formatted `$ 23.890,00`.
