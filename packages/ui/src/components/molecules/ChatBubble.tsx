import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

export type ChatBubbleFrom = "user" | "bot";

export interface ChatBubbleProps extends HTMLAttributes<HTMLDivElement> {
  /** `user` sits on the right in mint, `bot` (resiAI) on the left in white. */
  from: ChatBubbleFrom;
}

// Bubbles have one tighter corner on the speaker's side. There is no 4px radius token.
const fromClasses: Record<ChatBubbleFrom, string> = {
  user: "self-end max-w-[80%] rounded-md rounded-br-[0.25rem] bg-bubble-user",
  bot: "self-start max-w-[86%] rounded-md rounded-bl-[0.25rem] bg-surface-000 shadow-bubble",
};

/**
 * One chat message. Stack bubbles in a flex column with `gap-3` on a
 * `bg-surface-200` wall. A recorded expense reply is an ExpenseCard instead.
 */
export function ChatBubble({ from, className, ...props }: ChatBubbleProps) {
  return (
    <div
      className={cn("px-3.5 py-2.5 text-chat text-ink", fromClasses[from], className)}
      {...props}
    />
  );
}

export interface ChatWorkingProps extends Omit<ChatBubbleProps, "from"> {
  /** Status naming the input format, e.g. "Leyendo el ticket…". */
  children: string;
}

// Inline, because the `animation` shorthand in animate-typing-dot would reset a delay utility.
const dotDelays = ["0ms", "150ms", "300ms"];

/** resiAI bubble shown while a message, photo or audio is being processed. */
export function ChatWorking({ children, className, ...props }: ChatWorkingProps) {
  return (
    <ChatBubble
      from="bot"
      className={cn("flex items-center gap-2.5 text-label font-normal text-ink-muted", className)}
      {...props}
    >
      <span className="flex gap-1" aria-hidden="true">
        {dotDelays.map((delay) => (
          <span
            key={delay}
            className="size-1.75 rounded-pill bg-brand opacity-70 motion-safe:animate-typing-dot"
            style={{ animationDelay: delay }}
          />
        ))}
      </span>
      {children}
    </ChatBubble>
  );
}
