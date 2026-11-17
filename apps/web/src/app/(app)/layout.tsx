import type { ReactNode } from "react";

// Authenticated area (dashboard, Telegram linking).
// TODO: enforce the Keycloak session here once auth is wired (src/lib/auth).
export default function AppLayout({ children }: { children: ReactNode }) {
  return <div className="flex flex-1 flex-col">{children}</div>;
}
