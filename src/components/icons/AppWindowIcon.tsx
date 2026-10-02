type Props = { size?: number; className?: string };

export function AppWindowIcon({ size = 24, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
      <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 9h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="7" cy="6" r="1" fill="currentColor"/>
      <circle cx="11" cy="6" r="1" fill="currentColor"/>
    </svg>
  );
}
