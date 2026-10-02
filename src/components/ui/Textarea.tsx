import { cn } from "@/lib/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export function Textarea({ className, invalid, ...props }: TextareaProps) {
  return (
    <textarea
      data-invalid={invalid || undefined}
      className={cn(
        "min-h-32 w-full rounded-card-sm border border-border bg-bg px-5 py-4 text-base text-fg placeholder:text-fg-muted",
        "transition-colors duration-200 ease-[var(--ease-out-soft)]",
        "focus:border-fg focus:outline-none",
        "data-[invalid=true]:border-orderbase-red",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
