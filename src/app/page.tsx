import { Navbar } from "@/components/navbar/navbar";
import { Introduction } from "@/components/introduction/introduction";
import { FeaturedProjects } from "@/components/featured-projects/featured-projects";
import { TechStack } from "@/components/tech-stack/tech-stack";
import { Experience } from "@/components/experience/experience";
import { Certifications } from "@/components/certifications/certifications";
import { AvailabilityStatus } from "@/components/availability-status/availability-status";
import { Footer } from "@/components/footer/footer";
import { ScrollToTop } from "@/components/scroll-to-top/scroll-to-top";
import { PageLoadReveal } from "@/components/animations/page-load-reveal";
import { SectionWrapper } from "@/components/animations/section-wrapper";

export default function Home() {
  return (
    <PageLoadReveal>
      <Navbar />
      <main className="relative">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl border-x border-border">
            <SectionWrapper>
              <Introduction />
            </SectionWrapper>
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
        </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </PageLoadReveal>
  );
}
