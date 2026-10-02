type Props = { size?: number; className?: string };

export function LinkedIn({ size = 32, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M27.26 27.262h-4.73v-7.4c0-1.764-.032-4.032-2.454-4.032-2.458 0-2.834 1.92-2.834 3.902v7.53h-4.73V12h4.542v2.08h.062c.632-1.198 2.178-2.459 4.482-2.459 4.794 0 5.682 3.156 5.682 7.258v8.383zM7.12 9.918a2.745 2.745 0 1 1 0-5.49 2.745 2.745 0 0 1 0 5.49zM4.75 27.262h4.74V12H4.75v15.262zM29.626 0H2.37C1.062 0 0 1.037 0 2.317v27.366C0 30.963 1.062 32 2.37 32h27.256C30.938 32 32 30.963 32 29.683V2.317C32 1.037 30.938 0 29.626 0z" />
    </svg>
  );
}
