import type { IconProps } from "../types";

export function Store({
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
      <path d="M4 9h16M5 9l1-4h12l1 4M6 9v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"/><path d="M10 21v-5h4v5M8 5v4m4-4v4m4-4v4"/>
    </svg>
  );
}
