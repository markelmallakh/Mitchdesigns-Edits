type Props = { size?: number; className?: string };

export function Facebook({ size = 32, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M16 2C8.268 2 2 8.268 2 16c0 7.036 5.148 12.863 11.882 13.836V19.914H10.55V16h3.332v-2.895c0-3.29 1.96-5.107 4.957-5.107 1.435 0 2.937.256 2.937.256v3.23h-1.654c-1.63 0-2.136 1.01-2.136 2.048V16h3.637l-.581 3.914h-3.056v9.922C24.852 28.863 30 23.036 30 16 30 8.268 23.732 2 16 2z" />
    </svg>
  );
}
