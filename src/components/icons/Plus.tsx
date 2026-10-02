type Props = { size?: number; className?: string };

export function Plus({ size = 14, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden
      className={className}
    >
      <path d="M7 1v12M1 7h12" />
    </svg>
  );
}
