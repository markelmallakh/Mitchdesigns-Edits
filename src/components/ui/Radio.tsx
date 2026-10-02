import { cn } from "@/lib/cn";

type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Radio({ label, className, id, ...props }: RadioProps) {
  return (
    <label
      htmlFor={id}
      className="group inline-flex items-center gap-3 select-none"
    >
      <span className="relative grid h-5 w-5 place-items-center">
        <input
          id={id}
          type="radio"
          className={cn(
            "peer h-5 w-5 appearance-none rounded-full border border-border bg-bg transition-colors",
            "checked:border-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
            "disabled:opacity-50",
            className,
          )}
          {...props}
        />
        <span className="pointer-events-none absolute h-2.5 w-2.5 rounded-full bg-fg opacity-0 peer-checked:opacity-100" />
      </span>
      {label ? <span className="text-base text-fg">{label}</span> : null}
    </label>
  );
}
