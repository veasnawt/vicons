import type { IconProps } from "../types";

export function Unlock({
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
      <path d="M16 10V8a4 4 0 0 0-7-2.8"/><rect width="14" height="10" x="5" y="10" rx="2"/>
    </svg>
  );
}
