import type { IconProps } from "../types";

export function ScatterChart({
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
      <path d="M5 5v14h14"/><circle cx="8" cy="14" r="1"/><circle cx="11.5" cy="10.5" r="1"/><circle cx="15" cy="16" r="1"/><circle cx="18" cy="8" r="1"/>
    </svg>
  );
}
