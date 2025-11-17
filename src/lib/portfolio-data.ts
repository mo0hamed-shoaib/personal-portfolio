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
      iconSlug: "typescript",
    },
    {
      name: "Next.js",
      description: "React framework for production",
      iconSlug: "nextdotjs",
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      iconSlug: "react",
    },
    {
      name: "Supabase",
      description: "Open source Firebase alternative",
      iconSlug: "supabase",
    },
  ],
  experience: [
    {
      id: "exp-1",
      title: "Frontend Developer",
      company: "Company Name",
      period: "2024 - Present",
      description: "Building modern web applications with React and Next.js",
    },
  ],
  internships: [
    {
      id: "intern-1",
      title: "Frontend Development Intern",
      company: "Company Name",
      period: "2023 - 2024",
      description: "Learned and contributed to frontend development projects",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "Certification Name",
      issuer: "Issuing Organization",
      date: "2024",
      credentialUrl: null,
    },
  ],
} as const;

