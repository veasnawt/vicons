import type { IconProps } from "../types";

export function Session({
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
      <rect width="16" height="11" x="4" y="5" rx="2"/><path d="M9 20h6m-3-4v4"/><circle cx="12" cy="9" r="2"/><path d="M9.5 13a2.5 2.5 0 0 1 5 0"/>
    </svg>
  );
}
