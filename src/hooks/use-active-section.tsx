import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Track if user has scrolled more than 100px
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setHasScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Only start tracking sections after user has scrolled
    if (!hasScrolled) {
      setActiveSection(null);
      return;
    }

    // Create intersection observer options
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
      threshold: 0,
    };

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      // Find the first entry that's intersecting
      const intersectingEntry = entries.find((entry) => entry.isIntersecting);

      if (intersectingEntry) {
        setActiveSection(intersectingEntry.target.id);
      }
    }, observerOptions);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, hasScrolled]);

  return activeSection;
}
