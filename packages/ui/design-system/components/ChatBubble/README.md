# ChatBubble

Message bubbles for chat mockups: the user's message, resiAI's typing indicator and resiAI's text reply.

- **User**: right-aligned, `bubble-user` fill, `radius-md` with the bottom-right corner at 4px, `chat` text, max 80% width.
- **resiAI**: left-aligned, `surface-000` fill, `shadow-bubble`, bottom-left corner at 4px.
- **Working**: a resiAI bubble with three 7px `brand` dots (staggered 0.15s) and a status in voseo-neutral Spanish that names the format: "Interpretando el mensaje…", "Leyendo el ticket…", "Transcribiendo el audio…".
- The chat wall behind bubbles is `surface-200`; messages stack with `space-3`.
- A recorded expense reply is an **ExpenseCard**, not a plain bubble.
