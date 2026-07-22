import type { IconProps } from "../types";

export function Idea({
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
      <path d="M9 18h6m-5 3h4m-6-6.5a6 6 0 1 1 8 0V16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zM12 8v4m-2-2h4"/>
    </svg>
  );
}
