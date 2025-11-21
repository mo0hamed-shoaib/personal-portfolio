import { useEffect, useRef, type RefObject } from 'react';

interface UseDialogScrollResetOptions {
  /**
   * Whether the dialog is open
   */
  isOpen: boolean;
  /**
   * Optional ref to the scrollable container element
   * If not provided, will attempt to find the element by data-slot attribute
   */
  containerRef?: RefObject<HTMLElement>;
  /**
   * Data slot attribute to find the scrollable element
   * @default 'dialog-popup'
   */
  dataSlot?: string;
}

/**
 * Custom hook to reset scroll position when a dialog opens
 * Follows React 19 best practices with proper cleanup and refs
 */
export function useDialogScrollReset({
  isOpen,
  containerRef,
  dataSlot = 'dialog-popup',
}: UseDialogScrollResetOptions): void {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const resetScroll = (): void => {
      let element: HTMLElement | null = null;

      if (containerRef?.current) {
        element = containerRef.current;
      } else {
        const foundElement = document.querySelector<HTMLElement>(
          `[data-slot="${dataSlot}"]`,
        );
        element = foundElement;
      }

      if (element) {
        element.scrollTop = 0;
      }
    };

    // Use requestAnimationFrame to ensure the element is fully rendered
    // This is especially important for animated dialogs
    const rafId = requestAnimationFrame(() => {
      resetScroll();
    });

    // Fallback timeout in case requestAnimationFrame doesn't fire
    timeoutRef.current = setTimeout(() => {
      resetScroll();
    }, 100);

    return () => {
      cancelAnimationFrame(rafId);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isOpen, containerRef, dataSlot]);
}

