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
        image: "/placeholder.svg",
        websiteUrl: "#",
        repositoryUrl: null, // null if private
      },
      {
        id: "dana-doors",
        name: "Dana Doors",
        description: "E-commerce platform for premium door solutions.",
        image: "/placeholder.svg",
        websiteUrl: "#",
        repositoryUrl: null,
      },
      {
        id: "rootly",
        name: "Rootly",
        description: "Innovative platform for plant enthusiasts.",
        image: "/placeholder.svg",
        websiteUrl: "#",
        repositoryUrl: null,
      },
      {
        id: "marky",
        name: "Marky",
        description: "Creative design and development studio portfolio.",
        image: "/placeholder.svg",
        websiteUrl: "#",
        repositoryUrl: null,
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

