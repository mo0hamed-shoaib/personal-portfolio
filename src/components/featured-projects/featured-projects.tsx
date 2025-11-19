import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";
import { ProjectCarousel } from "./project-carousel";

export function FeaturedProjects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24">
      <div>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of projects I've worked on
          </p>
        </div>

        <ProjectCarousel projects={projects.featured} />

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

