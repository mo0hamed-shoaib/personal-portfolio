# project-rules

- Use **/docs** as the canonical source of truth.

  - Next.js → `/docs/next-js`

  - UI & animation → `/docs/ui-and-animation`

  - Base UI → `/docs/ui-and-animation/base-ui-and-basecn/base-ui-llms.txt` (or individual files in that folder)

  - Basecn → `/docs/ui-and-animation/base-ui-and-basecn/basecn-llms.txt` (only use this if base-ui has no code for the component you want to create)

  - Animations → `/docs/ui-and-animation/animate-ui`

  - Theme → `/docs/preferred-theme.css`

  - Create a consistent grid system

- Disallow any, permit unknown only when needed, then refine.

- As mentioned above, use Base UI, also do not create custom components, use Base UI whenever is possible.

- No inline CSS.

- Prefer files under 150–200 lines, split by logical responsibility.

- Always include skeleton/loading states.

- Always show success/failure feedback using a consistent system (Toast or Sonner).

- Use pnpm only.

- When I ask "Do you recommend" or "Do you think" you must tell me your unbiased honest raw opinion first.
