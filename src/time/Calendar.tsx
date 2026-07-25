import type { IconProps } from "../types";

export function Calendar({
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
      <path d="M7 3v4m10-4v4"/><rect width="16" height="16" x="4" y="5" rx="2"/><path d="M4 9h16"/>
    </svg>
  );
}
