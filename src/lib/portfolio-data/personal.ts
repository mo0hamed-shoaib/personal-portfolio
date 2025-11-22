/**
 * PERSONAL INFORMATION
 * =====================
 *
 * HOW TO EDIT:
 * - Update the fields below to change your personal information
 * - This data is used in: Introduction, Navbar, Footer, and page metadata
 * - All fields are required unless marked as optional
 *
 * TIPS:
 * - Keep the bio concise (1-2 sentences)
 * - Use full URLs for social links (include https://)
 * - Avatar path should be relative to /public directory
 */

export const personal = {
  name: "Mohamed Gamal",
  jobTitle: "Frontend Developer",
  bio: "Passionate frontend developer building modern web experiences with React and Next.js.",
  avatar: "/assets/avatars/portfolio-pfp.jpg",
  availability: {
    status: "Open to work",
    label: "Available for new opportunities",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/mohamed-g-shoaib/",
    github: "https://github.com/mo0hamed-shoaib",
    x: "https://x.com/mo0hamed_gamal",
  },
  cv: "https://drive.google.com/file/d/1CJhC5Ku8wie4-CDmyyIMqc4qGEo2Pg6j/view",
} as const;
