/**
 * TECH STACK DATA
 * ===============
 *
 * HOW TO EDIT:
 * - Add new technologies by copying an existing tech object
 * - Update existing technologies by modifying the fields below
 * - This data is used in: TechStack component
 *
 * REQUIRED FIELDS:
 * - name: Technology name (must match simple-icons slug)
 * - description: Short description (1 sentence)
 * - longDescription: Detailed description (2-3 sentences)
 * - iconSlug: simple-icons slug (check https://simpleicons.org/)
 * - websiteUrl: Official website URL
 *
 * TIPS:
 * - Keep descriptions clear and professional
 * - Use the exact icon slug from simple-icons
 * - Separate each technology with a clear separator (see below)
 * - Order technologies by importance or relevance
 */

export const techStack = [
  // ========================================
  // TypeScript
  // ========================================
  {
    name: "TypeScript",
    description: "Type safety catches bugs before they ship.",
    longDescription:
      "TypeScript adds static type definitions to JavaScript, providing better tooling, error detection, and code documentation. I use it for type safety and improved developer experience.",
    iconSlug: "typescript",
    websiteUrl: "https://www.typescriptlang.org",
  },

  // ========================================
  // Next.js
  // ========================================
  {
    name: "Next.js",
    description: "Fullstack React with built-in SSR and routing.",
    longDescription:
      "Next.js provides server-side rendering, static site generation, and API routes out of the box. I use it for building performant React applications with optimal SEO and user experience.",
    iconSlug: "nextdotjs",
    websiteUrl: "https://nextjs.org",
  },

  // ========================================
  // React
  // ========================================
  {
    name: "React",
    description: "My go-to for building interactive UIs, also with Vite.",
    longDescription:
      "React enables building component-based user interfaces with a declarative approach. I use it for creating reusable UI components and managing application state efficiently.",
    iconSlug: "react",
    websiteUrl: "https://react.dev",
  },

  // ========================================
  // Supabase
  // ========================================
  {
    name: "Supabase",
    description: "Postgres + Auth + Realtime in one place.",
    longDescription:
      "Supabase provides a PostgreSQL database, authentication, real-time subscriptions, and storage. I use it for backend services and database management in full-stack applications.",
    iconSlug: "supabase",
    websiteUrl: "https://supabase.com",
  },

  // ========================================
  // Tailwind CSS
  // ========================================
  {
    name: "Tailwind CSS",
    description: "Ship faster without context-switching to CSS files.",
    longDescription:
      "Tailwind CSS provides a comprehensive set of utility classes for rapidly building custom designs. I use it for styling components and creating responsive, modern user interfaces with minimal custom CSS.",
    iconSlug: "tailwindcss",
    websiteUrl: "https://tailwindcss.com",
  },

  // ========================================
  // shadcn/ui
  // ========================================
  {
    name: "shadcn/ui",
    description: "Accessible, customizable components I actually own.",
    longDescription:
      "shadcn/ui provides beautifully designed, customizable React components built on top of Radix UI and Tailwind CSS. I use it for accessible, production-ready UI components that can be easily integrated and modified to match project needs.",
    iconSlug: "shadcnui",
    websiteUrl: "https://ui.shadcn.com",
  },
] as const;
