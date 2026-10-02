import { cn } from "@/lib/cn";

/**
 * Icon — wraps an inline SVG. Pass children as <path>/<g>/etc, or use the
 * `name` prop once an SVG sprite is set up at /public/icons/sprite.svg.
 *
 * Two patterns supported:
 * 1. <Icon size={20}><path d="..." /></Icon>           — inline children
 * 2. <Icon name="arrow-right" size={20} />              — sprite reference
 */
type IconProps = React.SVGAttributes<SVGSVGElement> & {
  size?: number | string;
  name?: string;
};

export function Icon({
  size = 20,
  name,
  className,
  children,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
      {...props}
    >
      {name ? <use href={`/icons/sprite.svg#${name}`} /> : children}
    </svg>
  );
}
