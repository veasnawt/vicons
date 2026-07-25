import type { IconProps } from "../types";

export function Office({
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
      <rect width="12" height="18" x="6" y="3" rx="2"/><path d="M9 7h2m2 0h2m-6 4h2m2 0h2m-6 4h2m2 0h2m-4 6v-3h2v3"/>
    </svg>
  );
}
