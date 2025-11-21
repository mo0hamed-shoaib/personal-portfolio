/**
 * CERTIFICATIONS DATA
 * ===================
 *
 * HOW TO EDIT:
 * - Add new certifications by copying an existing certification object
 * - Update existing certifications by modifying the fields below
 * - This data is used in: Certifications component
 *
 * REQUIRED FIELDS:
 * - id: Unique identifier (e.g., "cert-1", "cert-2")
 * - name: Certification name
 * - issuer: Issuing organization
 * - date: Year obtained (e.g., "2024")
 * - learnings: Array of learning strings (1-3 items)
 * - credentialUrl: URL to verify credential (or null if not available)
 *
 * TIPS:
 * - List certifications in reverse chronological order (most recent first)
 * - Keep learnings specific and relevant
 * - Use null for credentialUrl if verification link is not available
 * - Separate each certification with a clear separator (see below)
 */

export const certifications = [
  // ========================================
  // Certification Name
  // ========================================
  {
    id: "cert-1",
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "2024",
    learnings: ["Mastered core React concepts and state management patterns"],
    credentialUrl: null,
  },

  // ========================================
  // Advanced React
  // ========================================
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

  // ========================================
  // JavaScript Algorithms
  // ========================================
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
] as const;

