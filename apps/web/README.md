# @expense-bot/web

Next.js app containing the public landing page and the authenticated dashboard.

```
src/
  app/
    (marketing)/   public pages, statically rendered (landing at /)
    (app)/         authenticated area: /dashboard, /telegram
  features/        feature modules (screaming architecture): landing, dashboard, telegram-link
  lib/
    api/           Spring REST API client (server-side)
    auth/          Keycloak OIDC session handling (BFF: tokens stay on the server)
```

Login, registration and verification emails are NOT rendered here: they live in
`apps/keycloak-theme` and are served by Keycloak.

## Scripts

- `pnpm dev` — dev server on http://localhost:3000
- `pnpm build` — production build
- `pnpm lint` / `pnpm typecheck`

Copy `.env.example` to `.env.local` and fill in the values.
