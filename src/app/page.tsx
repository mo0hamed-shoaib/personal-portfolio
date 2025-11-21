import { Navbar } from "@/components/navbar/navbar";
import { Introduction } from "@/components/introduction/introduction";
import { FeaturedProjects } from "@/components/featured-projects/featured-projects";
import dynamic from "next/dynamic";
import { SkipToMain } from "@/components/skip-to-main/skip-to-main";
import { PageLoadReveal } from "@/components/animations/page-load-reveal";
import { SectionWrapper } from "@/components/animations/section-wrapper";

// Lazy load below-the-fold components to reduce initial bundle size
const TechStack = dynamic(() =>
  import("@/components/tech-stack/tech-stack").then((mod) => ({
    default: mod.TechStack,
  }))
);
const Experience = dynamic(() =>
  import("@/components/experience/experience").then((mod) => ({
    default: mod.Experience,
  }))
);
const Certifications = dynamic(() =>
  import("@/components/certifications/certifications").then((mod) => ({
    default: mod.Certifications,
  }))
);
const AvailabilityStatus = dynamic(() =>
  import("@/components/availability-status/availability-status").then(
    (mod) => ({
      default: mod.AvailabilityStatus,
    })
  )
);
const GitHubActivity = dynamic(() =>
  import("@/components/github-activity/github-activity").then((mod) => ({
    default: mod.GitHubActivity,
  }))
);
const Footer = dynamic(() =>
  import("@/components/footer/footer").then((mod) => ({
    default: mod.Footer,
  }))
);
const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top/scroll-to-top").then((mod) => ({
    default: mod.ScrollToTop,
  }))
);

export default function Home() {
  return (
    <>
      <SkipToMain />
      <Navbar />
      <main id="main-content" className="relative" tabIndex={-1}>
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl border-x border-border">
            {/* Introduction renders immediately for LCP optimization - no animation delay */}
            <Introduction />
            <PageLoadReveal>
              <SectionWrapper delay={0.1}>
                <FeaturedProjects />
              </SectionWrapper>
              <SectionWrapper delay={0.1}>
                <TechStack />
              </SectionWrapper>
              <SectionWrapper delay={0.1}>
                <Experience />
              </SectionWrapper>
              <SectionWrapper delay={0.1}>
                <Certifications />
              </SectionWrapper>
              <SectionWrapper delay={0.1}>
                <AvailabilityStatus />
              </SectionWrapper>
              <SectionWrapper delay={0.1}>
                <GitHubActivity />
              </SectionWrapper>
            </PageLoadReveal>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
