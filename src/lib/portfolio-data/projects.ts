/**
 * PROJECTS DATA
 * =============
 *
 * HOW TO EDIT:
 * - Add new projects by copying an existing project object
 * - Update existing projects by modifying the fields below
 * - This data is used in: FeaturedProjects component and Projects page
 *
 * REQUIRED FIELDS:
 * - id: Unique identifier (lowercase, use hyphens)
 * - name: Project name
 * - description: Short description (1 sentence)
 * - fullDescription: Detailed description (2-3 sentences)
 * - image: Path to project image (relative to /public)
 * - websiteUrl: Live website URL (or "#" if not available)
 * - repositoryUrl: GitHub repository URL (or null if private)
 * - architecture: Technical architecture description
 * - problem: Problem statement
 * - solution: Solution description
 * - techStack: Array of technologies used
 *
 * TIPS:
 * - Keep descriptions clear and concise
 * - Use null for private repositories
 * - Image paths should be relative to /public directory
 * - Use "/placeholder.svg" for projects without images yet
 * - Separate each project with a clear separator (see below)
 */

export const projects = {
  featured: [
    // ========================================
    // Devloop
    // ========================================
    {
      id: "devloop-agency",
      name: "Devloop Agency",
      description:
        "Agency site with SEO, reusable components, and responsive design.",
      fullDescription:
        "Built the Devloop agency website with reusable components, responsive layout, and SEO-friendly pages for ongoing content updates. Features project showcases, testimonials, and bilingual support.",
      image: "/assets/projects/devloop/devloop.jpg",
      websiteUrl: "https://devloop.software",
      repositoryUrl: null,
      architecture:
        "Next.js App Router with Tailwind CSS for styling, TypeScript for type safety, and Framer Motion for smooth animations. Optimized for RTL/SEO and performance.",
      problem:
        "Needed a professional showcase site to highlight services, case studies, and attract global clients.",
      solution:
        "Created a fast, accessible agency site with dynamic project grids, contact forms, and content management for easy updates.",
      techStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    // ========================================
    // Mo's Experiences
    // ========================================
    {
      id: "mo-experiences",
      name: "Mo's Experiences",
      description:
        "Egyptian travel platform connecting tourists with authentic desert adventures and Nile experiences.",
      fullDescription:
        "A booking platform for Mo's Experiences, an Egyptian tour agency specializing in desert safaris and Nile cruises. Handles custom trip inquiries with real-time notifications, showcases destination packages, and streamlines communication between travelers and guides.",
      image: "/assets/projects/mos-experiences/mosexperiences.jpg",
      websiteUrl: "https://www.mosexperiences.com/",
      repositoryUrl: null,
      architecture:
        "Server-rendered with Next.js 15 App Router. Uses Supabase for inquiry management and TanStack Query for optimized data fetching. Implements Radix UI components for accessible interactions and Recharts for pricing visualization.",
      problem:
        "The tour agency managed bookings through scattered WhatsApp conversations and spreadsheets. No centralized system to track inquiries, showcase packages with pricing, or follow up with potential clients.",
      solution:
        "Built a platform that centralizes all trip inquiries in a dashboard, displays packages with dynamic pricing, and sends real-time notifications for new bookings. Travelers browse destinations and submit custom requests that route directly to the agency's inbox.",
      techStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "TanStack Query",
        "Radix UI",
      ],
    },

    // ========================================
    // Dana Doors
    // ========================================
    {
      id: "dana-doors",
      name: "Dana Doors",
      description:
        "Bilingual showroom for premium doors and windows with optimized image delivery.",
      fullDescription:
        "An online catalog for Dana Doors, a doors and windows manufacturer. Features bilingual Arabic/English support, product galleries with zoom, quote request forms, and SEO optimization for local search visibility.",
      image: "/assets/projects/dana-doors/dana-doors.jpg",
      websiteUrl: "https://www.danadoors.net/",
      repositoryUrl: null,
      architecture:
        "Bilingual Next.js 16 application with internationalization support. Uses Cloudinary for optimized image delivery and Upstash Redis for rate limiting on contact forms. Implements Framer Motion for smooth transitions.",
      problem:
        "The manufacturer had no online presence. Customers couldn't browse products, see pricing ranges, or request quotes without calling. SEO was non-existent for local searches.",
      solution:
        "Created a fast-loading showroom with product categories, high-quality images optimized via Cloudinary, and quote request forms that go straight to sales. Added bilingual SEO to rank for both Arabic and English searches in Egypt.",
      techStack: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Cloudinary",
        "Upstash Redis",
        "Framer Motion",
      ],
    },
    // ========================================
    // Rootly
    // ========================================
    {
      id: "rootly",
      name: "Rootly Notes",
      description:
        "Study tracker with progress charts, streak tracking, and multi-tenant authentication.",
      fullDescription:
        "A learning platform for students to track study sessions, visualize progress with charts, and maintain study streaks. Features secure authentication, offline-capable notes, and real-time progress sync across devices.",
      image: "/assets/projects/rootly-notes/rootly-notes.jpg",
      websiteUrl: "https://rootly-notes-app.vercel.app/",
      repositoryUrl: "https://github.com/mohamed-g-shoaib/rootly-notes-app",
      architecture:
        "Full-stack application with Supabase Auth for multi-tenant user management. Uses Recharts for progress visualization and React Hook Form with Zod for validated data entry. Implements real-time subscriptions for live updates.",
      problem:
        "Students had no way to track their study habits, see progress over time, or stay motivated with streak tracking. Existing tools were either too complex or lacked visual feedback.",
      solution:
        "Built an intuitive study tracker where students log sessions, see understanding metrics in charts, and track daily streaks. Progress syncs in real-time across devices, and notes are accessible offline for studying anywhere.",
      techStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Recharts",
        "React Hook Form",
      ],
    },
    // ========================================
    // Marky
    // ========================================
    {
      id: "marky",
      name: "Marky Editor",
      description:
        "AI-powered mindmap editor that transforms markdown into interactive visual diagrams.",
      fullDescription:
        "A markdown-based mindmap editor with live preview and AI assistance. Users write in markdown, see it rendered as an interactive mindmap in real-time, and can export or share their visual diagrams.",
      image: "/assets/projects/marky-editor/marky-editor.jpg",
      websiteUrl: "https://marky-editor.vercel.app/",
      repositoryUrl: "https://github.com/mohamed-g-shoaib/marky-editor",
      architecture:
        "Next.js 15 application with Markmap library for mindmap rendering. Uses split-panel layout for simultaneous markdown editing and visual preview. Implements error boundaries for graceful handling of invalid markdown.",
      problem:
        "Creating mindmaps required dedicated tools with steep learning curves. Developers wanted to use markdown (which they already know) but needed the visual clarity of mindmaps for presentations.",
      solution:
        "Created an editor where users write markdown on the left and see a live mindmap on the right. Supports collapsing nodes, zooming, and exporting. The markdown-first approach means content is portable and version-controllable.",
      techStack: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Markmap",
        "React Resizable Panels",
      ],
    },
  ],
} as const;
