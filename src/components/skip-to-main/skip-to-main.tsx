/**
 * Skip to Main Content Link
 *
 * Provides keyboard users with a way to skip navigation and jump directly
 * to the main content. This improves accessibility and user experience.
 */
export function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-50 -translate-y-full rounded-md bg-primary px-4 py-2 text-primary-foreground opacity-0 transition-transform focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      Skip to main content
    </a>
  );
}
