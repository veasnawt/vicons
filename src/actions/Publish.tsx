import type { IconProps } from "../types";

export function Publish({
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
      <path d="M20 4 4.8 10.4a1 1 0 0 0 .1 1.9l5.8 1.9 1.9 5.8a1 1 0 0 0 1.9.1zm-9.3 10.2L20 4"/>
    </svg>
  );
}
