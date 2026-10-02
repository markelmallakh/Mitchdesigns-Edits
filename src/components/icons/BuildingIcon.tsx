type Props = { size?: number; className?: string };

export function BuildingIcon({ size = 24, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
      <rect x="3" y="3" width="12" height="18" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="15" y="9" width="6" height="12" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 8h4M7 12h4M7 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
