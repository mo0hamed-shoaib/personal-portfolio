import { Navbar } from "@/components/navbar/navbar";
import { Introduction } from "@/components/introduction/introduction";
import { FeaturedProjects } from "@/components/featured-projects/featured-projects";
import { TechStack } from "@/components/tech-stack/tech-stack";
import { Experience } from "@/components/experience/experience";
import { Certifications } from "@/components/certifications/certifications";
import { AvailabilityStatus } from "@/components/availability-status/availability-status";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Introduction />
        <FeaturedProjects />
        <TechStack />
        <Experience />
        <Certifications />
        <AvailabilityStatus />
      </main>
      <Footer />
    </>
  );
}
