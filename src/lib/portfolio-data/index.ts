/**
 * PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
 * ========================================
 *
 * This file aggregates all portfolio data from separate modules.
 * It maintains backward compatibility by exporting a single `portfolioData` object.
 *
 * HOW TO USE:
 * - Import from this file: `import { portfolioData } from '@/lib/portfolio-data'`
 * - All existing imports will continue to work
 *
 * HOW TO EDIT DATA:
 * - Personal info: Edit `personal.ts`
 * - Projects: Edit `projects.ts`
 * - Tech stack: Edit `tech-stack.ts`
 * - Experience: Edit `experience.ts`
 * - Education: Edit `certifications.ts`
 *
 * Each file contains detailed instructions on how to edit and add data.
 */

import { personal } from "./personal";
import { projects } from "./projects";
import { techStack } from "./tech-stack";
import { experience } from "./experience";
import { education } from "./certifications";

export const portfolioData = {
  personal,
  projects,
  techStack,
  experience,
  education,
} as const;

// Re-export individual modules for direct imports if needed
export { personal, projects, techStack, experience, education };

// Re-export types
export type { ExperienceItem, ExperienceType } from "./experience";
export type { EducationItem } from "./certifications";
