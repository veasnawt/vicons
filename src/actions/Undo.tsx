import type { IconProps } from "../types";

export function Undo({
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
      <path d="M7 8h6a5 5 0 1 1-4.5 8M7 8l3-3M7 8l3 3"/>
    </svg>
  );
}
