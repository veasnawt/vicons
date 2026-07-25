import type { IconProps } from "../types";

export function Guest({
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
      <circle cx="12" cy="8" r="3" strokeDasharray="2 2"/><path strokeDasharray="2 2" d="M5.5 19a6.5 6.5 0 0 1 13 0"/>
    </svg>
  );
}
