import { cn } from "@/lib/cn";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="group inline-flex items-center gap-3 select-none"
    >
      <span className="relative grid h-5 w-5 place-items-center">
        <input
          id={id}
          type="checkbox"
          className={cn(
            "peer h-5 w-5 appearance-none rounded-[5px] border border-border bg-bg transition-colors",
            "checked:border-fg checked:bg-fg",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
            "disabled:opacity-50",
            className,
          )}
          {...props}
        />
        <svg
          className="pointer-events-none absolute h-3 w-3 text-bg opacity-0 peer-checked:opacity-100"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 6l3 3 5-6" />
        </svg>
      </span>
      {label ? <span className="text-base text-fg">{label}</span> : null}
    </label>
  );
}
