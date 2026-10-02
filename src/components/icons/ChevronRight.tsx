type Props = { size?: number; className?: string };

export function ChevronRight({ size = 18, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <path d="M6.75 4.5 11.25 9l-4.5 4.5" />
    </svg>
  );
}
