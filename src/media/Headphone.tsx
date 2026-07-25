import type { IconProps } from "../types";

export function Headphone({
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
      <path d="M5 13a7 7 0 0 1 14 0"/><path d="M5 13v3a2 2 0 0 0 2 2h1v-7H7a2 2 0 0 0-2 2m14 0v3a2 2 0 0 1-2 2h-1v-7h1a2 2 0 0 1 2 2"/>
    </svg>
  );
}
