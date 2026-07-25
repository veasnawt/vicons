import type { IconProps } from "../types";

export function Gauge({
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
      <path d="M5 16a7 7 0 0 1 14 0"/><circle cx="12" cy="16" r="1"/><path d="m12 16 4-4"/>
    </svg>
  );
}
