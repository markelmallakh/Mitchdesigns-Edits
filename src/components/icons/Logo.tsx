export function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="48" height="48" fill="#FFDB00" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.9048 40.9604L39.8694 6.40039L24.0839 19.3979L8.90306 6.41873L8.86836 6.40039V6.41114L8.87825 6.40326L8.89707 6.42246L8.80078 40.9604L17.5075 40.937V24.7063L24.0499 31.0666L31.1628 24.3874V40.937L39.9048 40.9604Z"
        fill="#171717"
      />
    </svg>
  );
}
