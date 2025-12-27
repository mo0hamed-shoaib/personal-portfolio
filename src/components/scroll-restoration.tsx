"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser scroll restoration
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll to top whenever the pathname changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Scroll immediately without animation to prevent seeing the old scroll position
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname]);

  return null;
}
