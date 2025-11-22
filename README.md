# Personal Portfolio

A minimal and professional portfolio website built with Next.js, focusing on clean design, performance, and maintainability.

## Overview

This portfolio showcases my work as a frontend developer. The site is built with a focus on simplicity, fast loading times, and easy content management. All portfolio information lives in a single source of truth, making updates straightforward.

## Architecture

The project follows Next.js App Router conventions with a clear separation between server and client components. Most of the UI is rendered on the server to reduce JavaScript bundle size and improve initial load performance. Client components are only used where interactivity is needed, like the theme toggle.

The codebase is organized into logical sections. Components are kept small, typically under 200 lines, and split by responsibility. Each portfolio section is its own component, making the codebase easy to navigate and maintain.

## Problem

When building a portfolio, I wanted something that was easy to update without diving into complex component structures. I also needed a design system that was consistent and accessible out of the box, without having to build everything from scratch. Performance was important too, especially for a portfolio that might be viewed on slower connections.

## Solution

The portfolio uses a single data file that acts as the source of truth for all content. Update one file, and changes reflect across the entire site. The component architecture is modular, so each section can be modified independently without affecting others.

For the UI foundation, I chose Base UI over other options because it provides unstyled primitives that give full control over styling while handling accessibility and behavior. This means I can build exactly what I need without fighting against opinionated styles.

## Tech Stack

**Next.js 16** - The framework handles routing, server rendering, and image optimization. The App Router makes it easy to organize code and leverage React Server Components for better performance.

**React 19** - Used for building the UI. Server Components are the default, which means less JavaScript sent to the browser and faster initial loads.

**TypeScript** - Type safety helps catch errors early and makes the codebase easier to work with, especially when updating portfolio data.

**Tailwind CSS** - Utility-first CSS that makes styling fast and consistent. No need to write custom CSS for most things, and the design system is enforced through utility classes.

**Base UI** - Unstyled component primitives that handle accessibility and behavior. I can style them however I want while getting proper ARIA attributes and keyboard navigation for free.

**Animate UI** - Adds smooth animations to Base UI components using Motion. Animations respect user preferences for reduced motion, so the site stays accessible.

**next-themes** - Handles dark mode switching with proper SSR support and no flash of wrong theme.

**simple-icons** - Provides SVG icons for the tech stack section. Easy to use and keeps the bundle size reasonable.

**Embla Carousel** - Powers the horizontal scrolling carousel for featured projects. Lightweight and performant with smooth scrolling and navigation controls.

## Design Language

The design follows a minimal approach inspired by Swiss design principles. The layout uses a consistent max-width constraint (`max-w-3xl`) across all sections for visual consistency. There are no rounded corners, keeping everything squared and clean.

A global vertical border structure connects all sections, creating a seamless boxy look that defines the content area. Cards feature Swiss-style corner accents—small plus signs positioned precisely on the border strokes—adding subtle visual interest while maintaining the minimal aesthetic.

The color system uses CSS variables that adapt to light and dark themes. An accent color (orange) is used sparingly for interactive elements like the corner plus signs and "Details" links, providing subtle emphasis without overwhelming the design.

Typography is simple and readable, with Geist Mono as the base font for body text and Geist Sans for headings and titles. This combination provides clear hierarchy while maintaining consistency.

Featured projects are displayed in a horizontal scrolling carousel, showing one project at a time with smooth navigation. Experience and certifications use accordion components that expand to reveal detailed information, keeping the initial view clean and scannable.

Animations are subtle and purposeful. They enhance the experience without being distracting, and they respect user preferences for reduced motion. The theme toggle uses smooth transitions, and interactive elements provide clear feedback. Sections reveal on scroll, and the entire page has a minimal viewport reveal animation on initial load.

## Why Base UI Instead of Radix UI

Base UI and Radix UI are both excellent choices for building accessible components. I chose Base UI for a few specific reasons.

Base UI provides unstyled primitives that give complete control over the visual design. Since I wanted a minimal, squared design language, I needed components that wouldn't fight against custom styling. Base UI components are truly unstyled, so I can apply exactly the styles I want without overriding default styles.

The component API is straightforward and flexible. Base UI components are composable, which makes it easy to build exactly what I need. The library also integrates well with Animate UI, which provides animated versions of Base UI components.

Another factor was consistency. Base UI covers all the components I need, so there's no reason to build custom ones or mix in another library.

Radix UI is great, but it comes with more opinionated styling patterns. For this project, I wanted the flexibility to build a completely custom design system without having to override Radix's defaults.

## Project Structure

```
src/
  app/              # Next.js app router pages and layouts
  components/       # React components organized by feature
  lib/              # Utility functions and portfolio data
  hooks/            # Custom React hooks
```

The `lib/portfolio-data.ts` file contains all portfolio content. This is the single source of truth for personal information, projects, tech stack, experience, and certifications. Update this file to change any content across the site.

Components are organized by feature. Each portfolio section has its own folder with a single component file. This keeps the codebase organized and makes it easy to find and modify specific sections.
