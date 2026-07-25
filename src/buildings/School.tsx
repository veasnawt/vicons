import type { IconProps } from "../types";

export function School({
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
      <path d="M12 4v3m0-3h3M5 10l7-4 7 4M6 10v10m12-10v10M4 20h16m-10 0v-5a2 2 0 0 1 4 0v5"/>
    </svg>
  );
}
