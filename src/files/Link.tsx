import type { IconProps } from "../types";

export function Link({
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
      <path d="m10 14-1.5 1.5a3.5 3.5 0 1 1-5-5L5 9m9 1 1.5-1.5a3.5 3.5 0 1 1 5 5L19 15M9 15l6-6"/>
    </svg>
  );
}
