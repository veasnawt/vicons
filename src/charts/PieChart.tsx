import type { IconProps } from "../types";

export function PieChart({
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
      <path d="M12 3a9 9 0 1 0 9 9h-9z"/><path d="M14 3.3a8.7 8.7 0 0 1 6.7 6.7H14z"/>
    </svg>
  );
}
