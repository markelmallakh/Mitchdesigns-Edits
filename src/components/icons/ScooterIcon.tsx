type Props = { size?: number; className?: string };

export function ScooterIcon({ size = 24, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <circle cx="5.5" cy="17.5" r="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="18.5" cy="17.5" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M15 17.5H8M15 17.5L13 10H9L6.5 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 10L15.5 6H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
