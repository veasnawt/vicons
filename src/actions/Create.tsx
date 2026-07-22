import type { IconProps } from "../types";

export function Create({
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
      <path d="M12 5v4m0 6v4m-7-7h4m6 0h4M9.5 9.5l5 5m0-5-5 5"/>
    </svg>
  );
}
