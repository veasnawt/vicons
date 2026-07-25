import type { IconProps } from "../types";

export function Users({
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
      <circle cx="9" cy="8" r="2.5"/><circle cx="16" cy="9" r="2"/><path d="M4.5 18a4.5 4.5 0 0 1 9 0m.5 0a3.5 3.5 0 0 1 5 0"/>
    </svg>
  );
}
