import Link from "next/link";
import { portfolioData } from "@/lib/portfolio-data";

export function Certifications() {
  const { certifications } = portfolioData;

  if (certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Certifications
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="border border-border bg-card p-6"
            >
              <h3 className="mb-1 font-semibold">{cert.name}</h3>
              <p className="mb-2 text-sm text-muted-foreground">
                {cert.issuer}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{cert.date}</span>
                {cert.credentialUrl && (
                  <Link
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    View Credential
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

