"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@base-ui-components/react/separator";

interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription?: string;
  image: string;
  websiteUrl: string;
  repositoryUrl: string | null;
  architecture?: string;
  problem?: string;
  solution?: string;
  techStack?: readonly string[];
}

interface ProjectCarouselCardProps {
  project: Project;
  onReadMore: (project: Project) => void;
}

export function ProjectCarouselCard({
  project,
  onReadMore,
}: ProjectCarouselCardProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="relative flex min-w-0 flex-[0_0_100%] flex-col">
      <div className="relative flex h-full flex-col border-y border-border bg-card">
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="h-8 w-8 animate-pulse rounded border border-border bg-card" />
            </div>
          )}
          <Image
            src={project.image}
            alt={project.name}
            fill
            className={`object-cover transition-opacity duration-300 ${
              imageLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={() => setImageLoading(false)}
            onError={() => setImageLoading(false)}
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-2 text-lg font-semibold">{project.name}</h3>
          <p className="mb-4 min-h-[2.5rem] text-sm text-muted-foreground">
            {project.description}
          </p>

          <Separator orientation="horizontal" className="mb-4 h-px bg-border" />

          <div className="mt-auto flex items-center justify-between">
            <Link
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Website
            </Link>
            {project.repositoryUrl && (
              <Link
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Repository
              </Link>
            )}
            <button
              onClick={() => onReadMore(project)}
              className="cursor-pointer text-sm font-semibold text-accent-orange transition-colors hover:text-accent-orange/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
