"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";
import { ProjectDetailsDialog } from "@/components/featured-projects/project-details-dialog";

export default function ProjectsPage() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects.featured)[number] | null
  >(null);
  const [dialogOpen, setDialogOpen] = useState(false);

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
              className="relative border border-border bg-card"
            >
              <span className="pointer-events-none absolute z-10 left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono font-semibold leading-none text-foreground">
                +
              </span>
              <span className="pointer-events-none absolute z-10 right-0 top-0 translate-x-1/2 -translate-y-1/2 text-[10px] font-mono font-semibold leading-none text-foreground">
                +
              </span>
              <span className="pointer-events-none absolute z-10 bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-[10px] font-mono font-semibold leading-none text-foreground">
                +
              </span>
              <span className="pointer-events-none absolute z-10 bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-[10px] font-mono font-semibold leading-none text-foreground">
                +
              </span>
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <Link
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      Visit Website
                    </Link>
                    {project.repositoryUrl && (
                      <Link
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        View Source
                      </Link>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setDialogOpen(true);
                    }}
                    className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        project={selectedProject}
      />
    </div>
  );
}

