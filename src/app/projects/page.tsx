import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            All Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive view of all my projects
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.featured.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <Link
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Visit Website
                  </Link>
                  {project.repositoryUrl && (
                    <Link
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      View Source
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

