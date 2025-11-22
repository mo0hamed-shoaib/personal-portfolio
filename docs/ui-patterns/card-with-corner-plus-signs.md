# Card with Corner Plus Signs

A Swiss-style design pattern that adds "+" signs to card corners, positioned precisely on the border strokes.

## Implementation

### HTML Structure

```tsx
<div className="relative border border-border bg-card">
  {/* Top-left corner */}
  <span className="pointer-events-none absolute z-10 left-0 top-0 -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-foreground">
    +
  </span>
  
  {/* Top-right corner */}
  <span className="pointer-events-none absolute z-10 right-0 top-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-foreground">
    +
  </span>
  
  {/* Bottom-left corner */}
  <span className="pointer-events-none absolute z-10 bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-foreground">
    +
  </span>
  
  {/* Bottom-right corner */}
  <span className="pointer-events-none absolute z-10 bottom-0 right-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-foreground">
    +
  </span>
  
  {/* Card content */}
  <div className="p-6">
    {/* Your content here */}
  </div>
</div>
```

## Key Points

### Positioning Values

- **Left corners**: `-translate-x-[calc(50%+0.5px)]` (moves left from edge)
- **Right corners**: `translate-x-[calc(50%+0.5px)]` (moves right from edge)
- **Top corners**: `-translate-y-[calc(50%+1px)]` (moves up from edge)
- **Bottom corners**: `translate-y-[calc(50%-0.5px)]` (moves up from edge)

### Essential Classes

- `pointer-events-none` - Prevents interaction with the "+" signs
- `absolute` - Positions relative to card
- `z-10` - Ensures signs appear above card content
- `text-[10px]` - Small, precise sizing
- `font-mono font-semibold` - Consistent appearance
- `leading-none` - Removes line-height spacing
- `text-foreground` or `text-accent-orange` - Theme-aware color (use accent for emphasis)

### Parent Requirements

- Parent must have `relative` positioning
- Parent must have `border border-border` for proper alignment
- Signs align with 1px border width

## Z-Index Considerations

If signs are behind content, increase z-index:
- Use `z-20` for navbar or overlapping elements
- Adjust based on stacking context

## Notes

- The `0.5px` and `1px` offsets center the "+" precisely on the 1px border stroke
- Values are fine-tuned for visual perfection
- Works with light/dark themes via `text-foreground` or `text-accent-orange` for accent highlights

---

# Global Border Pattern

A design pattern that creates vertical borders connecting all sections, creating a seamless boxy look with content definition.

## Implementation

### Page Structure

```tsx
<main className="relative">
  <div className="container mx-auto px-4">
    <div className="mx-auto max-w-3xl border-x border-border">
      {/* All sections go here */}
      <Section />
      <Section />
    </div>
  </div>
</main>
```

**Important:** The `<main>` element should have **no padding-top** (`pt-4` or similar). This ensures the global border connects seamlessly with the navbar when at the top of the page.

### Section Structure

Sections should have horizontal padding to align with the navbar:

```tsx
<section className="py-16 md:py-24 px-4">
  {/* Section content */}
</section>
```

## Key Points

### Global Border Container

- **Wrapper**: `container mx-auto px-4` - Centers content and provides outer padding
- **Border container**: `mx-auto max-w-3xl border-x border-border` - Creates vertical borders on both sides
- **No padding on border container**: Content sections provide their own `px-4` padding

### Navbar Setup

To prevent content from appearing above the floating navbar when scrolling:

```tsx
<nav className="sticky top-0 z-50 w-full bg-background pt-4">
  <div className="container mx-auto px-4">
    <div className="relative mx-auto max-w-3xl border border-border bg-card">
      {/* Navbar content */}
    </div>
  </div>
</nav>
```

**Important classes:**
- `sticky top-0` - Sticks to top of viewport
- `bg-background` - Solid background prevents content showing through
- `pt-4` - Creates floating effect (4px gap from top)
- `z-50` - Ensures navbar stays above content

### Content Alignment

- **Border container**: No horizontal padding (content touches borders)
- **Sections**: Each section has `px-4` to match navbar padding
- **Navbar**: Uses same `container mx-auto px-4` structure for alignment

## Notes

- The global border creates visual continuity across all sections
- Content appears to slide under the navbar when scrolling (seamless boxy look)
- All sections align perfectly with the navbar's horizontal padding
- The border container width (`max-w-3xl`) must match the navbar card width

