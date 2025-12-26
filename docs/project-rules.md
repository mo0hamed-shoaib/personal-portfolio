# project-rules

- Use **/docs** as the canonical source of truth.

  - Base UI → `/docs/llms/baseui-llms.txt` (fetch the url content)

  - Shadcn/ui → `/docs/llms/shadcnui-llms.txt` (fetch the url content)

- Disallow any, permit unknown only when needed, then refine.

- As mentioned above, use Base UI, also do not create custom components, use Base UI whenever is possible.

- No inline CSS.

- Prefer files under 150–200 lines, split by logical responsibility.

- Always include skeleton/loading states.

- Always show success/failure feedback using a consistent system (Toast or Sonner).

- Use pnpm only.

- When I ask "Do you recommend" or "Do you think" you must tell me your unbiased honest raw opinion first.
