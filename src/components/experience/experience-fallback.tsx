import { Badge } from "@/components/ui/badge";
import type { ExperienceItem } from "@/lib/portfolio-data";

interface ExperienceFallbackProps {
  items: readonly ExperienceItem[];
}

export function ExperienceFallback({ items }: ExperienceFallbackProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="relative border-y border-border bg-card">
          <div className="px-4 py-3">
            <Badge
              variant="outline"
              className="h-auto text-[10px] px-1.5 py-0 mb-1"
            >
              {item.type === "internship" ? "Internship" : "Work"}
            </Badge>
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
