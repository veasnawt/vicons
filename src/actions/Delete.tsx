import type { IconProps } from "../types";

export function Delete({
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
      <path d="M8 6h8m-6-3h4M6 6l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13m-8 4v6m4-6v6"/>
    </svg>
  );
}
