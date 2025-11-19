// Single source of truth for portfolio data
// Edit this file to update any information across the portfolio

export const portfolioData = {
  personal: {
    name: "Mohamed Gamal",
    jobTitle: "Frontend Developer",
    bio: "Passionate frontend developer building modern web experiences with React and Next.js.",
    avatar: "/placeholder.svg",
    availability: {
      status: "Open to work",
      label: "Available for new opportunities",
    },
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/mohamed-g-shoaib/",
      github: "https://github.com/mo0hamed-shoaib",
      x: "https://x.com/mo0hamed_gamal",
    },
  },
  projects: {
    featured: [
      {
        id: "mo-experiences",
        name: "Mo's Experiences",
        description: "A modern web application showcasing unique experiences.",
        fullDescription:
          "Mo's Experiences is a comprehensive platform designed to showcase and manage unique experiences. The application provides users with an intuitive interface to discover, book, and share memorable experiences.",
        image: "/placeholder.svg",
        websiteUrl: "#",
        repositoryUrl: "https://github.com/mo0hamed-shoaib/mo-experiences",
        architecture:
          "Built with Next.js App Router for optimal performance and SEO. Utilizes Server Components for initial page loads and Client Components for interactive features. Implements a component-based architecture with reusable UI elements.",
        problem:
          "Users needed a centralized platform to discover and book unique experiences, but existing solutions lacked modern UX and performance optimization.",
        solution:
          "Developed a fast, responsive web application with server-side rendering for quick initial loads, client-side interactivity for smooth user experience, and a clean, minimal design that focuses on content.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
      {
        id: "dana-doors",
        name: "Dana Doors",
        description: "E-commerce platform for premium door solutions.",
        fullDescription:
          "Dana Doors is an e-commerce platform specializing in premium door solutions. The platform offers a seamless shopping experience with detailed product catalogs, customization options, and secure checkout processes.",
        image: "/placeholder.svg",
        websiteUrl: "#",
        repositoryUrl: null,
        architecture:
          "E-commerce architecture with product catalog management, shopping cart functionality, and order processing. Uses Next.js for server-side rendering and API routes for backend operations.",
        problem:
          "The client needed a modern e-commerce solution that could handle complex product configurations, multiple variants, and provide an excellent user experience.",
        solution:
          "Created a scalable e-commerce platform with dynamic product pages, real-time inventory management, and an intuitive checkout flow. Implemented responsive design for mobile and desktop users.",
        techStack: ["Next.js", "React", "TypeScript", "Supabase"],
      },
      {
        id: "rootly",
        name: "Rootly",
        description: "Innovative platform for plant enthusiasts.",
        fullDescription:
          "Rootly is an innovative platform designed for plant enthusiasts to track, manage, and learn about their plant collections. Features include plant care reminders, growth tracking, and a community-driven knowledge base.",
        image: "/placeholder.svg",
        websiteUrl: "#",
        repositoryUrl: null,
        architecture:
          "Full-stack application with user authentication, data persistence, and real-time updates. Uses Next.js for the frontend and API routes for backend logic, with a database for storing user data and plant information.",
        problem:
          "Plant enthusiasts lacked a comprehensive tool to track their plant collections, receive care reminders, and access reliable plant care information.",
        solution:
          "Built a user-friendly platform with personalized plant tracking, automated care reminders, and a community-driven knowledge base. Implemented intuitive data visualization for plant growth tracking.",
        techStack: ["Next.js", "React", "TypeScript", "Supabase"],
      },
      {
        id: "marky",
        name: "Marky",
        description: "Creative design and development studio portfolio.",
        fullDescription:
          "Marky is a creative design and development studio portfolio showcasing innovative projects, design processes, and team expertise. The platform serves as both a portfolio and a case study repository.",
        image: "/placeholder.svg",
        websiteUrl: "#",
        repositoryUrl: null,
        architecture:
          "Portfolio website with dynamic content management, project showcases, and interactive case studies. Uses Next.js for optimal performance and SEO, with a focus on visual storytelling and smooth animations.",
        problem:
          "The studio needed a portfolio that could effectively showcase their work, tell compelling stories about their projects, and demonstrate their design and development capabilities.",
        solution:
          "Developed a visually striking portfolio with smooth animations, detailed case studies, and an intuitive navigation system. Implemented a content management approach that makes it easy to add new projects and update content.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
    ],
  },
  techStack: [
    {
      name: "TypeScript",
      description: "Strongly typed programming language",
      longDescription:
        "TypeScript adds static type definitions to JavaScript, providing better tooling, error detection, and code documentation. I use it for type safety and improved developer experience.",
      iconSlug: "typescript",
      websiteUrl: "https://www.typescriptlang.org",
    },
    {
      name: "Next.js",
      description: "React framework for production",
      longDescription:
        "Next.js provides server-side rendering, static site generation, and API routes out of the box. I use it for building performant React applications with optimal SEO and user experience.",
      iconSlug: "nextdotjs",
      websiteUrl: "https://nextjs.org",
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      longDescription:
        "React enables building component-based user interfaces with a declarative approach. I use it for creating reusable UI components and managing application state efficiently.",
      iconSlug: "react",
      websiteUrl: "https://react.dev",
    },
    {
      name: "Supabase",
      description: "Open source Firebase alternative",
      longDescription:
        "Supabase provides a PostgreSQL database, authentication, real-time subscriptions, and storage. I use it for backend services and database management in full-stack applications.",
      iconSlug: "supabase",
      websiteUrl: "https://supabase.com",
    },
  ],
  experience: [
    {
      id: "exp-1",
      title: "Frontend Developer",
      company: "Company Name",
      period: "2024 - Present",
      responsibilities: [
        "Collaborated with designers to translate Figma files into responsive interfaces",
        "Built reusable UI components with Base UI and Tailwind CSS",
        "Implemented theming, accessibility, and dashboard workflows",
      ],
      learnings: [
        "Deeper understanding of React Server Components",
        "Improved performance tuning and Lighthouse scoring",
      ],
      description: "Building modern web applications with React and Next.js",
    },
    {
      id: "exp-2",
      title: "Frontend Engineer",
      company: "Creative Studio",
      period: "2022 - 2024",
      responsibilities: [
        "Delivered responsive marketing websites using Next.js and Motion",
        "Maintained a shared component library for multiple project teams",
        "Integrated analytics, A/B testing, and CMS content models",
      ],
      learnings: [
        "Strengthened design system thinking and documentation",
        "Learned advanced animation patterns and interaction design",
      ],
      description:
        "Delivered responsive interfaces and design systems for marketing websites using Next.js and Tailwind CSS",
    },
  ],
  internships: [
    {
      id: "intern-1",
      title: "Frontend Development Intern",
      company: "Company Name",
      period: "2023 - 2024",
      responsibilities: [
        "Implemented UI tickets under senior developer guidance",
        "Helped document shared components and write unit tests",
      ],
      learnings: [
        "Understood agile workflows and code review best practices",
        "Gained confidence with TypeScript and component-driven development",
      ],
      description: "Learned and contributed to frontend development projects",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Certification Name",
      issuer: "Issuing Organization",
      date: "2024",
      learnings: ["Mastered core React concepts and state management patterns"],
      credentialUrl: null,
    },
    {
      id: "cert-2",
      name: "Advanced React",
      issuer: "React Training",
      date: "2023",
      learnings: [
        "Hook patterns, concurrent rendering, and performance optimizations",
      ],
      credentialUrl: "#",
    },
    {
      id: "cert-3",
      name: "JavaScript Algorithms",
      issuer: "FreeCodeCamp",
      date: "2022",
      learnings: [
        "Data structures, algorithmic thinking, and problem solving techniques",
      ],
      credentialUrl: "#",
    },
  ],
} as const;

