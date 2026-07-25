import type { IconProps } from "../types";

export function Volume({
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
      <path d="M5 10h3l4-3v10l-4-3H5zm11 0a3 3 0 0 1 0 4m2.5-6.5a6.5 6.5 0 0 1 0 9"/>
    </svg>
  );
}
