"use client";

import { useRef } from "react";
import {
  Dialog,
  DialogPopup,
  DialogHeader,
  DialogTitle,
} from "@/components/animate-ui/components/base/dialog";
import { Separator } from "@base-ui-components/react/separator";
import Link from "next/link";
import { useDialogScrollReset } from "@/hooks/use-dialog-scroll-reset";

interface ProjectDetails {
  id: string;
  name: string;
  fullDescription?: string;
  image: string;
  websiteUrl: string;
  repositoryUrl: string | null;
  architecture?: string;
  problem?: string;
  solution?: string;
  techStack?: readonly string[];
}

interface ProjectDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: ProjectDetails | null;
}

export function ProjectDetailsDialog({
  open,
  onOpenChange,
  project,
}: ProjectDetailsDialogProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Reset scroll position when dialog opens
  useDialogScrollReset({ isOpen: open });

  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPopup
        showCloseButton={true}
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        from="top"
        initialFocus={titleRef}
      >
        <DialogHeader className="relative mb-0 flex flex-row items-center justify-between gap-0 pr-8 text-left">
          <DialogTitle ref={titleRef} className="text-2xl font-semibold leading-none">
            {project.name}
          </DialogTitle>
        </DialogHeader>

        <Separator orientation="horizontal" className="mt-2 mb-2 h-px bg-border" />

        <div className="space-y-6">
          {project.fullDescription && (
            <div>
              <h3 className="mb-2 text-lg font-semibold">Description</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.fullDescription}
              </p>
            </div>
          )}

          {project.problem && (
            <div>
              <h3 className="mb-2 text-lg font-semibold">Problem</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </div>
          )}

          {project.solution && (
            <div>
              <h3 className="mb-2 text-lg font-semibold">Solution</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </div>
          )}

          {project.architecture && (
            <div>
              <h3 className="mb-2 text-lg font-semibold">Architecture</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.architecture}
              </p>
            </div>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <div>
              <h3 className="mb-2 text-lg font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border bg-card px-3 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-4">
            <Link
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm font-bold text-accent-orange transition-colors hover:text-accent-orange/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Website
            </Link>
            {project.repositoryUrl && (
              <Link
                href={project.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-sm font-bold text-accent-orange transition-colors hover:text-accent-orange/80 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Repository
              </Link>
            )}
          </div>
        </div>
      </DialogPopup>
    </Dialog>
  );
}

