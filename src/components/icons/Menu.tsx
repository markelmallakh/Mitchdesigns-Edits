type Props = { size?: number; className?: string };

export function Menu({ size = 18, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="M2 5.5h14M2 12.5h14" />
    </svg>
  );
}
