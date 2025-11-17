import { portfolioData } from "@/lib/portfolio-data";

export function Experience() {
  const { experience, internships } = portfolioData;

  return (
    <section id="experience" className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experience.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Work Experience</h3>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="border border-border bg-card p-6"
                  >
                    <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-semibold">{exp.title}</h4>
                      <span className="text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="text-foreground/80">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {internships.length > 0 && (
            <div>
              <h3 className="mb-4 text-xl font-semibold">Internships</h3>
              <div className="space-y-6">
                {internships.map((intern) => (
                  <div
                    key={intern.id}
                    className="border border-border bg-card p-6"
                  >
                    <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-semibold">{intern.title}</h4>
                      <span className="text-sm text-muted-foreground">
                        {intern.period}
                      </span>
                    </div>
                    <p className="mb-2 text-sm text-muted-foreground">
                      {intern.company}
                    </p>
                    <p className="text-foreground/80">{intern.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

