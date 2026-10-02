import { cn } from "@/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  invalid?: boolean;
};

export function Input({ className, invalid, ...props }: InputProps) {
  return (
    <input
      data-invalid={invalid || undefined}
      className={cn(
        "h-14 w-full rounded border border-grey-200 bg-bg px-5 text-base text-fg placeholder:text-fg-muted",
        "transition-colors duration-200 ease-[var(--ease-out-soft)]",
        "focus:outline-none",
        "data-[invalid=true]:border-orderbase-red",
        "disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
