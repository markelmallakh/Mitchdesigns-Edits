type Props = { size?: number; className?: string };

export function RouteIcon({ size = 24, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
      <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="2"/>
      <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M6 9v2a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
