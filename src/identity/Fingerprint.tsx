import type { IconProps } from "../types";

export function Fingerprint({
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
      <path d="M12 5c-3.3 0-6 2.7-6 6m6-3a3 3 0 0 0-3 3m3 0a1 1 0 0 0-1 1m7-1a6 6 0 0 0-6-6m6 6c0 4.4-2.7 8-6 8m0 0c-2.8 0-5-2.2-5-5"/>
    </svg>
  );
}
