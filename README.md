# expense-bot-front

Frontend monorepo for Expense Bot. The backend is a separate Spring Boot REST API.

```
apps/
  web/              Next.js — landing page (public) + dashboard and Telegram linking (authenticated)
  keycloak-theme/   Keycloakify — Keycloak login, registration and email themes
packages/
  ui/               Shared design system (tokens + React components, Tailwind v4)
```

## Requirements

- Node.js >= 24
- pnpm (via Corepack: `corepack enable pnpm`)
- Java + Maven (only to build the Keycloak theme JAR)

## Commands (from the repo root)

| Command | What it does |
|---|---|
| `pnpm install` | Install all workspaces |
| `pnpm dev` | Next.js dev server (http://localhost:3000) |
| `pnpm dev:theme` | Vite dev server for the Keycloak theme |
| `pnpm storybook:theme` | Storybook for Keycloak pages |
| `pnpm build:theme` | Build the Keycloak theme JARs into `apps/keycloak-theme/dist_keycloak` |
| `pnpm build` / `pnpm lint` / `pnpm typecheck` | Run across all workspaces |

## Design system flow

Tokens live in `packages/ui/src/styles/theme.css` and components in
`packages/ui/src/components`. Both apps import `@expense-bot/ui/styles.css`, so a
token change applies to the landing, the dashboard and the Keycloak pages at once.
