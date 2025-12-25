"use client";

import { useCallback, useEffect, useState, startTransition } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@base-ui/react/button";
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
  techStack?: readonly string[];
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
  const [selectedIndex, setSelectedIndex] = useState(0);
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
    setSelectedIndex(emblaApi.selectedScrollSnap());
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

      <div className="mt-6 flex flex-col items-center gap-2">
        <div className="flex items-center justify-center gap-2">
          <Button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="flex h-11 min-w-[88px] cursor-pointer items-center justify-center gap-1.5 border border-border bg-background px-3 py-2 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed md:min-w-[100px] md:gap-2 md:px-4 md:text-sm"
            aria-label="Previous project"
          >
            <ChevronLeftIcon className="h-4 w-4 md:h-5 md:w-5" />
            <span>Back</span>
          </Button>
          <Button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="flex h-11 min-w-[88px] cursor-pointer items-center justify-center gap-1.5 border border-border bg-background px-3 py-2 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed md:min-w-[100px] md:gap-2 md:px-4 md:text-sm"
            aria-label="Next project"
          >
            <span>Next</span>
            <ChevronRightIcon className="h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </div>
        <span className="text-xs text-muted-foreground md:text-sm">
          ({selectedIndex + 1} of {projects.length})
        </span>
      </div>

      <ProjectDetailsDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        project={selectedProject}
      />
    </>
  );
}
