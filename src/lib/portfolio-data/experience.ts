/**
 * EXPERIENCE DATA
 * ===============
 *
 * HOW TO EDIT:
 * - Add new work experience by copying an existing experience object
 * - Update existing experience by modifying the fields below
 * - This data is used in: Experience component
 *
 * REQUIRED FIELDS:
 * - id: Unique identifier (e.g., "exp-1", "exp-2")
 * - title: Job title
 * - company: Company name
 * - period: Employment period (e.g., "2024 - Present")
 * - responsibilities: Array of responsibility strings (3-5 items)
 * - learnings: Array of learning strings (2-3 items)
 * - description: Brief job description (1 sentence)
 *
 * TIPS:
 * - List experiences in reverse chronological order (most recent first)
 * - Keep responsibilities concise and action-oriented
 * - Focus on learnings that demonstrate growth
 * - Separate each experience with a clear separator (see below)
 */

export const experience = [
  // ========================================
  // Frontend Developer
  // ========================================
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

  // ========================================
  // Frontend Engineer
  // ========================================
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
] as const;

/**
 * INTERNSHIPS DATA
 * ================
 *
 * HOW TO EDIT:
 * - Add new internships by copying an existing internship object
 * - Update existing internships by modifying the fields below
 * - This data is used in: Experience component (separate section)
 *
 * REQUIRED FIELDS:
 * - id: Unique identifier (e.g., "intern-1", "intern-2")
 * - title: Internship title
 * - company: Company name
 * - period: Internship period (e.g., "2023 - 2024")
 * - responsibilities: Array of responsibility strings (2-4 items)
 * - learnings: Array of learning strings (2-3 items)
 * - description: Brief internship description (1 sentence)
 *
 * TIPS:
 * - List internships in reverse chronological order (most recent first)
 * - Focus on learning and growth opportunities
 * - Separate each internship with a clear separator (see below)
 */

export const internships = [
  // ========================================
  // Frontend Development Intern
  // ========================================
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
] as const;

