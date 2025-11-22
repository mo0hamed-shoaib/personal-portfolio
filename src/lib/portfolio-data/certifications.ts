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
 * - description: Description text about the certification
 * - learnings: Array of learning strings (what you learned)
 * - certificateUrl: URL to view certificate (or null if not available)
 *
 * TIPS:
 * - List certifications in reverse chronological order (most recent first)
 * - Keep learnings specific and relevant
 * - Use null for certificateUrl if verification link is not available
 * - Separate each certification with a clear separator (see below)
 */

export const certifications = [
  // ========================================
  // Full-Stack MERN - Information Technology Institute
  // ========================================
  {
    id: "cert-1",
    name: "Full-Stack MERN",
    issuer: "Information Technology Institute",
    date: "Jul 2025",
    description:
      "Certificate of graduation from the Information Technology Institute (ITI) in Egypt (Feb 2025 - Jul 2025) - 5 months.",
    learnings: [
      "MongoDB, Express.js, React, and Node.js",
      "Full-stack application development and deployment",
    ],
    certificateUrl:
      "https://drive.google.com/file/d/1mu1tMVlfn6hDeHZGgt6L8TpvYYU1q9Mg/view",
  },

  // ========================================
  // Graduation Certificate
  // ========================================
  {
    id: "cert-2",
    name: "Graduation Certificate",
    issuer: "Misr University for Science and Technology",
    date: "June 1, 2021",
    description:
      "Certificate of graduation from Misr University for Science and Technology for my Bachelor's degree in Computer Science (Oct 2017 – Jun 2021).",
    learnings: [
      "Computer Science fundamentals, Operating Systems, and Computer Networks",
      "Software Engineering and system design",
    ],
    certificateUrl:
      "https://drive.google.com/file/d/18-7fbodbrCyFqutgqZncntsCsTH68HnV/view",
  },
] as const;
