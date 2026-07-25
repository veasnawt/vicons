import type { IconProps } from "../types";

export function Grid({
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
      <rect width="5" height="5" x="5" y="5" rx="1"/><rect width="5" height="5" x="14" y="5" rx="1"/><rect width="5" height="5" x="5" y="14" rx="1"/><rect width="5" height="5" x="14" y="14" rx="1"/>
    </svg>
  );
}
