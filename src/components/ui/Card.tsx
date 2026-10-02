import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  selected?: boolean;
  interactive?: boolean;
};

export function Card({
  className,
  selected = false,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      data-selected={selected || undefined}
      className={cn(
        "rounded-card border border-border bg-bg p-6 transition-colors",
        interactive && "hover:border-fg",
        "data-[selected=true]:border-fg data-[selected=true]:bg-bg-alt",
        className,
      )}
      {...props}
    />
  );
}
