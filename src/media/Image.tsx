import type { IconProps } from "../types";

export function Image({
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
      <rect width="16" height="14" x="4" y="5" rx="2"/><circle cx="16.5" cy="9" r="1.5"/><path d="m6 16 4-4 3 3 2-2 3 3"/>
    </svg>
  );
}
