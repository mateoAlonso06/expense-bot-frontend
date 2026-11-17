# @expense-bot/keycloak-theme

Keycloak themes built with [Keycloakify](https://docs.keycloakify.dev) v11:

- **Login theme** (`src/login`): login, registration, verify email, reset password, etc.
- **Email theme** (`src/email`): native FreeMarker templates provided by `@keycloakify/email-native`.
- Account theme: not implemented (`accountThemeImplementation: "none"`).

Styles come from `@expense-bot/ui` (Tailwind v4 tokens), imported in `src/index.css`.

## Customizing pages

- Preview a page: `pnpm storybook`, or uncomment the mock block in `src/main.tsx` and run `pnpm dev`.
- Add a Storybook story for a page: `pnpm exec keycloakify add-story`.
- Take full control of a page's markup: `pnpm exec keycloakify eject-page`.

## Customizing emails

Files under `src/email` are managed by the extension (see `src/.gitignore`).
To edit one, take ownership first, e.g.:

```bash
pnpm exec keycloakify own --path email/html/email-verification.ftl
```

## Building and testing

- `pnpm build-keycloak-theme` → JARs in `dist_keycloak/` (requires Maven).
- `pnpm exec keycloakify start-keycloak` → local Keycloak in Docker with the theme loaded.

Deploy the JAR into Keycloak's `providers/` directory and select the `expense-bot` theme in the realm settings.
