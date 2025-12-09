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
      "Evaluated search result quality and relevance for Google Search Engine across thousands of queries",
      "Audited and corrected Google Maps business listings to ensure accurate information and appropriate content",
    ],
    learnings: [
      "Learned how to research and verify information quickly across multiple sources",
      "Developed strong attention to detail and a habit of double-checking my work",
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
      "Built 4 full-stack web applications during training: social platform, e-commerce site, admin dashboard, and API service",
      "Led a 5-person team to deliver a complete MERN project in 3 weeks using Agile methodology",
    ],
    learnings: [
      "Learned how to communicate technical ideas clearly with teammates and supervisors",
      "Developed a practical mindset focused on shipping working features instead of perfect code",
    ],
  },
] as const;
