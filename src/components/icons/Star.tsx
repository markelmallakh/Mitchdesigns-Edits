type Props = { size?: number; filled?: boolean; className?: string };

export function Star({ size = 16, filled = false, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden
      className={className}
    >
      <path d="M8 1l2.2 4.5 4.8.7-3.5 3.4.8 4.8L8 12l-4.3 2.4.8-4.8L1 6.2l4.8-.7L8 1z" />
    </svg>
  );
}
