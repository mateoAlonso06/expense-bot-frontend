# Design source

Reference designs for resiAI, the product name of Expense Bot. They are the source of truth for building the UI: implement screens from these files instead of inventing layouts.

Files here are **reference material, not production code**. Never import them from an app.

## Where things live

| What | Path | Original (claude.ai artifact) |
|---|---|---|
| Design system: brand book, tokens, component specs | [`packages/ui/design-system/`](../packages/ui/design-system/README.md) | https://claude.ai/artifact/RPiCCYJ8GGXq75b7fLbMfP |
| Screens (this folder) | `design/screens/` | https://claude.ai/artifact/PFUUeQ6QxqA3iz5HnQcnpt |

The artifacts may change after this copy was taken. If they differ, ask which one wins before building.

## Screens and the app that implements them

| Screen | File | Target |
|---|---|---|
| Landing page (final version) | `screens/landing/Landing.dc.html` | `apps/web`, public route |
| Log in | `screens/auth/Login.dc.html` | `apps/keycloak-theme`, `login.ftl` |
| Register | `screens/auth/Registro.dc.html` | `apps/keycloak-theme`, `register.ftl` |
| Reset password | `screens/auth/Recuperar.dc.html` | `apps/keycloak-theme`, `login-reset-password.ftl` |
| Check your email | `screens/auth/Verificar.dc.html` | `apps/keycloak-theme`, `login-verify-email.ftl` |
| Verification email | `screens/auth/EmailVerificacion.dc.html` | `apps/keycloak-theme`, email theme `email-verification` |
| Link Telegram (4 states) | `screens/link/Vincular.dc.html` | `apps/web`, authenticated route |

The internal dashboard (history, charts, limits) is not designed yet.

## Reading a `.dc.html` file

Each file is one screen exported from the design canvas:

- Plain HTML with **inline styles and literal hex colors**. Map each hex to its token in `packages/ui/design-system/tokens.json` (for example `#0A7D48` → `brand`, `#F6F8F5` → `surface-100`) and use the Tailwind token classes, never the raw hex.
- The `<helmet>` block holds fonts, keyframes and media queries.
- Canvas-only template syntax: `{{name}}` is a value from `renderVals()`, `<sc-if value>` is a conditional, `<sc-for list as>` is a loop.
- The `<script type="text/x-dc">` block is a small state class (`class Component extends DCLogic`). Read it as behavior documentation: the landing chat loop, the link-code countdown, the link screen states. Rewrite it as React state; do not port the class.
- `href="Other.dc.html"` links are prototype navigation between screens, not real routes.
- `./support.js` is the canvas runtime and does not exist here.

## Behavior notes

- **Landing hero:** the phone chat loops through 6 expenses (text, photo, audio ×2), one step every 1.5 s, with a running "Hoy" total. Background: soft radial glows plus stylized banknote motifs. All ambient motion stops under `prefers-reduced-motion`.
- **Auth:** fields follow Keycloak's default register form (first name, last name, email, password, confirmation). Google is a Keycloak identity provider. Under 900 px the brand panel hides.
- **Link Telegram:** states are start → code → linked, with expired as the fourth state. The code is single-use with a 10-minute TTL and a live countdown. "Abrir Telegram" opens `https://t.me/<bot>?start=<code>`, so the bot receives `/start <code>` (backend issue #5). The panel must detect when linking succeeds, for example by polling.

## Open placeholders

Values in `[BRACKETS]` are undecided: minimum password length `[8]`, link lifetime `[TIEMPO]`, `[EMAIL DE SOPORTE]`, `[DOMINIO]`, `[REALM]`. The bot handle `@resiai_bot` and the 6-character code format are assumptions.

## Pending design work

- Logo: the receipt glyph is a placeholder. Use the "resi" + "AI" wordmark only.
- Error states for auth: wrong password, email already registered, expired link.
- Internal dashboard screens.
- Terms and privacy pages, 404 page, bot reply copy.
