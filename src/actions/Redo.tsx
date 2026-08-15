import type { IconProps } from "../types";

export function Redo({
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
      <path d="M17 8h-6a5 5 0 1 0 4.5 8M17 8l-3-3m3 3-3 3"/>
    </svg>
  );
}
