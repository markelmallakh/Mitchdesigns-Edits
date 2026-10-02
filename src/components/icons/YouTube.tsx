type Props = { size?: number; className?: string };

export function YouTube({ size = 32, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M29.41 9.26a3.5 3.5 0 0 0-2.46-2.48C24.76 6.2 16 6.2 16 6.2s-8.76 0-10.95.58A3.5 3.5 0 0 0 2.59 9.26C2 11.46 2 16 2 16s0 4.54.59 6.74a3.5 3.5 0 0 0 2.46 2.48C7.24 25.8 16 25.8 16 25.8s8.76 0 10.95-.58a3.5 3.5 0 0 0 2.46-2.48C30 20.54 30 16 30 16s0-4.54-.59-6.74zM13.2 20.2V11.8L21.2 16l-8 4.2z" />
    </svg>
  );
}
