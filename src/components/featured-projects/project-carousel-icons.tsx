import { Icon } from "@/components/ui/icon";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface ChevronIconProps {
  className?: string;
}

export function ChevronLeftIcon({ className }: ChevronIconProps) {
  return <Icon icon={ArrowLeft01Icon} size={20} className={className} />;
}

export function ChevronRightIcon({ className }: ChevronIconProps) {
  return <Icon icon={ArrowRight01Icon} size={20} className={className} />;
}
