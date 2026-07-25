import type { IconProps } from "../types";

export function Register({
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
      <circle cx="10" cy="8" r="3"/><path d="M4.5 19a5.5 5.5 0 0 1 11 0M18 8v4m-2-2h4"/>
    </svg>
  );
}
