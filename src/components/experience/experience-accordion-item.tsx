import {
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
} from "@/components/animate-ui/components/base/accordion";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities?: readonly string[];
  learnings?: readonly string[];
}

interface ExperienceAccordionItemProps {
  item: ExperienceItem;
}

export function ExperienceAccordionItem({
  item,
}: ExperienceAccordionItemProps) {
  return (
    <AccordionItem
      key={item.id}
      value={item.id}
      className="border-0 bg-transparent"
    >
      <div className="relative border-y border-border bg-card">
        <span className="pointer-events-none absolute z-10 left-0 top-0 -translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
          +
        </span>
        <span className="pointer-events-none absolute z-10 right-0 top-0 translate-x-[calc(50%+0.5px)] -translate-y-[calc(50%+1px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
          +
        </span>
        <span className="pointer-events-none absolute z-10 bottom-0 left-0 -translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
          +
        </span>
        <span className="pointer-events-none absolute z-10 bottom-0 right-0 translate-x-[calc(50%+0.5px)] translate-y-[calc(50%-0.5px)] text-[10px] font-mono font-semibold leading-none text-accent-orange">
          +
        </span>
        <AccordionTrigger
          showArrow={false}
          className="group flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3 text-left font-medium transition-colors hover:bg-muted hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&[data-panel-open]>svg]:rotate-45 [&[data-panel-open]>svg]:scale-110"
        >
          <div className="flex-1">
            <h4 className="text-base font-semibold">{item.title}</h4>
            <div className="flex flex-col md:flex-row md:items-center md:gap-2 gap-1 text-sm text-muted-foreground">
              <span>{item.company}</span>
              <span className="hidden md:inline">•</span>
              <span>{item.period}</span>
            </div>
          </div>
          <PlusIcon className="h-3 w-3 shrink-0 transition-transform duration-200" />
        </AccordionTrigger>
        <AccordionPanel className="px-4 pb-4 space-y-4 text-sm text-muted-foreground">
          {item.responsibilities?.length ? (
            <div className="space-y-2">
              <p className="font-medium text-foreground">My Responsibilities</p>
              <ul className="list-disc space-y-1 pl-5">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {item.learnings?.length ? (
            <div className="space-y-2">
              <p className="font-medium text-foreground">What I Learned</p>
              <ul className="list-disc space-y-1 pl-5">
                {item.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </AccordionPanel>
      </div>
    </AccordionItem>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 12 12" fill="currentColor" {...props}>
      <path d="M6.75 0H5.25V5.25H0V6.75L5.25 6.75V12H6.75V6.75L12 6.75V5.25H6.75V0Z" />
    </svg>
  );
}
