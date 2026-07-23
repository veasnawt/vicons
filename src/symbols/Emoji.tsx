import type { IconProps } from "../types";

export function Emoji({
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
      <circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M9 15c.8 1 1.9 1.5 3 1.5s2.2-.5 3-1.5"/>
    </svg>
  );
}
