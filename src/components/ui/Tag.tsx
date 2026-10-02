import { cn } from "@/lib/cn";

type TagProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent";
};

export function Tag({ variant = "default", className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex h-7 items-center rounded-full px-3 text-xs font-medium",
        variant === "default" &&
          "border border-border bg-transparent text-fg",
        variant === "accent" && "bg-accent text-accent-fg",
        className,
      )}
      {...props}
    />
  );
}
