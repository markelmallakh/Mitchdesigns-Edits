type Props = { size?: number; className?: string };

export function Briefcase({ size = 20, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      <rect x="2" y="7" width="16" height="11" rx="2" />
      <path d="M13 7V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2" />
      <path d="M2 12h16" />
    </svg>
  );
}
