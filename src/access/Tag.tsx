import type { IconProps } from "../types";

export function Tag({
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
      <path d="M11 4H7a2 2 0 0 0-2 2v4l8 8a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8l-8-8Z"/><circle cx="8.5" cy="8.5" r="1"/>
    </svg>
  );
}
