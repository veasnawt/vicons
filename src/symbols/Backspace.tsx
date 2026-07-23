import type { IconProps } from "../types";

export function Backspace({
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
      <path d="M9 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-6-7zm2 5 4 4m0-4-4 4"/>
    </svg>
  );
}
