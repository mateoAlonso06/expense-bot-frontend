import { Button } from "@expense-bot/ui";

// Landing page (statically rendered). Placeholder until the design mockups are implemented.
export default function LandingPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8">
      <h1 className="font-display text-display-l">Expense Bot</h1>
      <p className="text-ink-muted">Landing page placeholder.</p>
      <Button>Get started</Button>
    </main>
  );
}
