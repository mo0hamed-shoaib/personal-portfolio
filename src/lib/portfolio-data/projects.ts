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
 * - Separate each project with a clear separator (see below)
 */

export const projects = {
  featured: [
    // ========================================
    // Mo's Experiences
    // ========================================
    {
      id: "mo-experiences",
      name: "Mo's Experiences",
      description: "A modern web application showcasing unique experiences.",
      fullDescription:
        "Mo's Experiences is a comprehensive platform designed to showcase and manage unique experiences. The application provides users with an intuitive interface to discover, book, and share memorable experiences.",
      image: "/assets/projects/mos-experiences/mosexperiences.jpg",
      websiteUrl: "https://www.mosexperiences.com/",
      repositoryUrl: null,
      architecture:
        "Built with Next.js App Router for optimal performance and SEO. Utilizes Server Components for initial page loads and Client Components for interactive features. Implements a component-based architecture with reusable UI elements.",
      problem:
        "Users needed a centralized platform to discover and book unique experiences, but existing solutions lacked modern UX and performance optimization.",
      solution:
        "Developed a fast, responsive web application with server-side rendering for quick initial loads, client-side interactivity for smooth user experience, and a clean, minimal design that focuses on content.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },

    // ========================================
    // Dana Doors
    // ========================================
    {
      id: "dana-doors",
      name: "Dana Doors",
      description: "E-commerce platform for premium door solutions.",
      fullDescription:
        "Dana Doors is an e-commerce platform specializing in premium door solutions. The platform offers a seamless shopping experience with detailed product catalogs, customization options, and secure checkout processes.",
      image: "/assets/projects/dana-doors/dana-doors.jpg",
      websiteUrl: "https://www.danadoors.net/",
      repositoryUrl: null,
      architecture:
        "E-commerce architecture with product catalog management, shopping cart functionality, and order processing. Uses Next.js for server-side rendering and API routes for backend operations.",
      problem:
        "The client needed a modern e-commerce solution that could handle complex product configurations, multiple variants, and provide an excellent user experience.",
      solution:
        "Created a scalable e-commerce platform with dynamic product pages, real-time inventory management, and an intuitive checkout flow. Implemented responsive design for mobile and desktop users.",
      techStack: ["Next.js", "React", "TypeScript", "Supabase"],
    },

    // ========================================
    // Rootly
    // ========================================
    {
      id: "rootly",
      name: "Rootly",
      description: "Innovative platform for plant enthusiasts.",
      fullDescription:
        "Rootly is an innovative platform designed for plant enthusiasts to track, manage, and learn about their plant collections. Features include plant care reminders, growth tracking, and a community-driven knowledge base.",
      image: "/assets/projects/rootly-notes/rootly-notes.jpg",
      websiteUrl: "https://rootly-notes-app.vercel.app/",
      repositoryUrl: "https://github.com/mo0hamed-shoaib/rootly-notes-app",
      architecture:
        "Full-stack application with user authentication, data persistence, and real-time updates. Uses Next.js for the frontend and API routes for backend logic, with a database for storing user data and plant information.",
      problem:
        "Plant enthusiasts lacked a comprehensive tool to track their plant collections, receive care reminders, and access reliable plant care information.",
      solution:
        "Built a user-friendly platform with personalized plant tracking, automated care reminders, and a community-driven knowledge base. Implemented intuitive data visualization for plant growth tracking.",
      techStack: ["Next.js", "React", "TypeScript", "Supabase"],
    },

    // ========================================
    // Marky
    // ========================================
    {
      id: "marky",
      name: "Marky",
      description: "Creative design and development studio portfolio.",
      fullDescription:
        "Marky is a creative design and development studio portfolio showcasing innovative projects, design processes, and team expertise. The platform serves as both a portfolio and a case study repository.",
      image: "/assets/projects/marky-editor/marky-editor.jpg",
      websiteUrl: "https://marky-editor.vercel.app/",
      repositoryUrl: "https://github.com/mo0hamed-shoaib/marky-editor",
      architecture:
        "Portfolio website with dynamic content management, project showcases, and interactive case studies. Uses Next.js for optimal performance and SEO, with a focus on visual storytelling and smooth animations.",
      problem:
        "The studio needed a portfolio that could effectively showcase their work, tell compelling stories about their projects, and demonstrate their design and development capabilities.",
      solution:
        "Developed a visually striking portfolio with smooth animations, detailed case studies, and an intuitive navigation system. Implemented a content management approach that makes it easy to add new projects and update content.",
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
  ],
} as const;

