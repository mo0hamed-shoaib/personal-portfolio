"use client";

import { useCallback, useEffect, useState, startTransition } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@base-ui-components/react/button";
import { ProjectDetailsDialog } from "./project-details-dialog";
import { ProjectCarouselCard } from "./project-carousel-card";
import { ProjectCarouselContainer } from "./project-carousel-container";
import { ChevronLeftIcon, ChevronRightIcon } from "./project-carousel-icons";

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
  techStack?: string[];
}

interface ProjectCarouselProps {
  projects: readonly Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    startTransition(() => {
      onSelect();
    });
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const handleReadMore = useCallback((project: Project) => {
    setSelectedProject(project);
    setDialogOpen(true);
  }, []);

  return (
    <>
      <ProjectCarouselContainer>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {projects.map((project) => (
              <ProjectCarouselCard
                key={project.id}
                project={project}
                onReadMore={handleReadMore}
              />
            ))}
          </div>
        </div>
      </ProjectCarouselContainer>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
          className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border bg-background p-0 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous project"
        >
          <ChevronLeftIcon />
        </Button>
        <Button
          onClick={scrollNext}
          disabled={nextBtnDisabled}
          className="flex h-10 w-10 cursor-pointer items-center justify-center border border-border bg-background p-0 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next project"
        >
          <ChevronRightIcon />
        </Button>
      </div>

      <ProjectDetailsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        project={selectedProject}
      />
    </>
  );
}
