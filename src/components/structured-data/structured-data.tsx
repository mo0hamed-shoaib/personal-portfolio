import { portfolioData } from "@/lib/portfolio-data";

const siteUrl = "https://mohamedgshoaib.vercel.app";
const { personal, projects, experience, techStack } = portfolioData;

export function StructuredData() {
  // Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: personal.jobTitle,
    description: personal.bio,
    image: `${siteUrl}${personal.avatar}`,
    url: siteUrl,
    sameAs: [
      personal.socialLinks.linkedin,
      personal.socialLinks.github,
      personal.socialLinks.x,
    ],
    knowsAbout: techStack.map((tech) => tech.name),
  };

  // Portfolio/Website schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${personal.name} - Portfolio`,
    url: siteUrl,
    description: personal.bio,
    author: {
      "@type": "Person",
      name: personal.name,
    },
  };

  // Professional Service schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${personal.name} - ${personal.jobTitle}`,
    description: personal.bio,
    provider: {
      "@type": "Person",
      name: personal.name,
      jobTitle: personal.jobTitle,
    },
    areaServed: "Worldwide",
    serviceType: "Frontend Development",
  };

  // Collection of projects
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Projects",
    description: "A collection of featured projects",
    itemListElement: projects.featured.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        url: project.websiteUrl,
        image: `${siteUrl}${project.image}`,
      },
    })),
  };

  const schemas = [
    personSchema,
    websiteSchema,
    professionalServiceSchema,
    itemListSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
