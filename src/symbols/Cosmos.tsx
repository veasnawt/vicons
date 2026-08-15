import type { IconProps } from "../types";

export function Cosmos({
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
      <circle cx="12" cy="12" r="1.5"/><path d="M5 12c1.8-3.2 4.3-5 7-5s5.2 1.8 7 5c-1.8 3.2-4.3 5-7 5s-5.2-1.8-7-5m1.5-5.5h.01m10.99 11h.01M18 7h.01"/>
    </svg>
  );
}
