import type { IconProps } from "../types";

export function Battery({
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
      <rect width="17" height="10" x="3" y="7" rx="2"/><path d="M20 10h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1"/>
    </svg>
  );
}
