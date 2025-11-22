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
 * - responsibilities: Array of responsibility strings
 * - learnings: Array of learning strings
 *
 * TIPS:
 * - List experiences in reverse chronological order (most recent first)
 * - Keep responsibilities concise and action-oriented
 * - Focus on learnings that demonstrate growth
 * - Separate each experience with a clear separator (see below)
 */

export const experience = [
  // ========================================
  // Search Engine Evaluator
  // ========================================
  {
    id: "exp-1",
    title: "Search Engine Evaluator",
    company: "TELUS International",
    period: "Sep 2019 - May 2024",
    responsibilities: [
      "Evaluated the helpfulness of search results on Google Search Engine",
      "Corrected Google Maps businesses information and moderated their content",
    ],
    learnings: [
      "Learned how to search the internet and find key Information quickly",
      "Grown an attention for detail and eagerness to learn",
    ],
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
 * - responsibilities: Array of responsibility strings
 * - learnings: Array of learning strings
 *
 * TIPS:
 * - List internships in reverse chronological order (most recent first)
 * - Focus on learning and growth opportunities
 * - Separate each internship with a clear separator (see below)
 */

export const internships = [
  // ========================================
  // Full-Stack MERN Developer
  // ========================================
  {
    id: "intern-1",
    title: "Full-Stack MERN Developer",
    company: "Information Technology Institute (ITI)",
    period: "Feb 2025 - Jul 2025",
    responsibilities: [
      "Developed and deployed 4 full-stack web applications during ITI training, including social, e-commerce, and dashboard platforms",
      "Led a 5-member team in building a MERN-based project, delivering it within a 3-week sprint under Agile methodology",
    ],
    learnings: [
      "Learned how to communicate with students and supervisors",
      "Learned how to have a mindset to achieve success",
    ],
  },
] as const;
