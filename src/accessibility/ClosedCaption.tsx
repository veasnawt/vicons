import type { IconProps } from "../types";

export function ClosedCaption({
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
      <rect width="18" height="14" x="3" y="5" rx="2"/><path d="M10 10H9a2 2 0 1 0 0 4h1m6-4h-1a2 2 0 1 0 0 4h1"/>
    </svg>
  );
}
