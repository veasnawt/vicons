import type { IconProps } from "../types";

export function Hearing({
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
      <path d="M17 10a5 5 0 1 0-10 0v2a5 5 0 0 0 5 5m0 0v2a2 2 0 0 1-2 2"/><path d="M11 12c1.5 0 2.5 1 2.5 2.5"/>
    </svg>
  );
}
