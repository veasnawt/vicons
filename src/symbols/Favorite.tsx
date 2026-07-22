import type { IconProps } from "../types";

export function Favorite({
  size = 24,
  strokeWidth = 2,
  ...props
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 20.5-7.1-7.1A4.5 4.5 0 0 1 11.3 7l.7.7.7-.7a4.5 4.5 0 1 1 6.4 6.4z"/>
    </svg>
  );
}
