import type { IconProps } from "../types";

export function Star({
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
      <path d="m12 4.5 2.3 4.7 5.2.8-3.8 3.7.9 5.3-4.6-2.3L7.4 19l.9-5.3L4.5 10l5.2-.8z"/>
    </svg>
  );
}
