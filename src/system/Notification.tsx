import type { IconProps } from "../types";

export function Notification({
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
      <path d="M18 16H6l1.5-2v-3a4.5 4.5 0 1 1 9 0v3zm-7.5 3a1.5 1.5 0 0 0 3 0"/>
    </svg>
  );
}
