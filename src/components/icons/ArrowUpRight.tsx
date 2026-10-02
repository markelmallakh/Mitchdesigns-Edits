type Props = { size?: number; className?: string };

export function ArrowUpRight({ size = 16, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="M4 12L12 4M5 4h7v7" />
    </svg>
  );
}
