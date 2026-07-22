import type { IconProps } from "../types";

export function Game({
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
      <path d="M8 9h8a5 5 0 0 1 4.8 6.4l-.6 2a2.5 2.5 0 0 1-3.9 1.3L14 17h-4l-2.3 1.7a2.5 2.5 0 0 1-3.9-1.3l-.6-2A5 5 0 0 1 8 9m0 4v4m-2-2h4"/><circle cx="16.5" cy="14" r=".5"/><circle cx="18" cy="16" r=".5"/>
    </svg>
  );
}
