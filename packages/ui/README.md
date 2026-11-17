# @expense-bot/ui

Shared design system consumed by `apps/web` (Next.js) and `apps/keycloak-theme` (Keycloakify).

- `src/styles/theme.css` — design tokens as Tailwind v4 `@theme` variables (placeholders for now).
- `src/styles/index.css` — entry stylesheet; also registers this package as a Tailwind source.
- `src/components/{atoms,molecules,organisms}` — atomic design layers.
- `design-system/` — the reference spec these files implement: brand book (`README.md`), `tokens.json`, and one spec plus HTML preview per component. Reference only, not imported by code.

Shipped as TypeScript source (no build step): Next.js transpiles it via `transpilePackages`, Vite handles it natively.

Usage in an app stylesheet:

```css
@import "tailwindcss";
@import "@expense-bot/ui/styles.css";
```
