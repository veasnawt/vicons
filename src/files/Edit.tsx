import type { IconProps } from "../types";

export function Edit({
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
      <path d="M15.5 5.5a2.1 2.1 0 0 1 3 3L9 18l-4 1 1-4zM14 7l3 3"/>
    </svg>
  );
}
