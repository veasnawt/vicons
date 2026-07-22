import type { IconProps } from "../types";

export function Globe({
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
      <circle cx="12" cy="12" r="9"/><path d="M3 12h18m-9-9c2.5 2.3 4 5.6 4 9s-1.5 6.7-4 9m0-18c-2.5 2.3-4 5.6-4 9s1.5 6.7 4 9"/>
    </svg>
  );
}
