import type { IconProps } from "../types";

export function Wheelchair({
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
      <circle cx="10.5" cy="5" r="1.5"/><circle cx="14" cy="16" r="4"/><path d="M10.5 6.5V11h3m0 0 2.5 5m-5.5-5-2 3m5.5 6a4 4 0 0 1-4-4"/>
    </svg>
  );
}
