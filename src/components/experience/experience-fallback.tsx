interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
}

interface ExperienceFallbackProps {
  items: readonly ExperienceItem[];
}

export function ExperienceFallback({ items }: ExperienceFallbackProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="relative border-y border-border bg-card">
          <div className="px-4 py-3">
            <h4 className="font-semibold">{item.title}</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{item.company}</span>
              <span>•</span>
              <span>{item.period}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
