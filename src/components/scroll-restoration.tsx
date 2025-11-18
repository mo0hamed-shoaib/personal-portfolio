"use client";

import { useLayoutEffect } from "react";

export function ScrollRestoration() {
  useLayoutEffect(() => {
    // Disable browser scroll restoration and ensure page starts at top
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
}

