import { portfolioData } from "@/lib/portfolio-data";
import { ProjectCarousel } from "./project-carousel";

export function FeaturedProjects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="border-t border-border pt-16 pb-16">
      <div>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Featured Projects
              </h2>
            </div>

        <ProjectCarousel projects={projects.featured} />
      </div>
    </section>
  );
}

