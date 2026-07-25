import type { IconProps } from "../types";

export function Gift({
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
      <path d="M4 10h16v10H4zm8 0v10m-8-6h16m-8-4S9 8.5 9 7a2 2 0 0 1 3-1c1-1 3-.5 3 1s-3 3-3 3"/>
    </svg>
  );
}
