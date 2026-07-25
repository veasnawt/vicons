import type { IconProps } from "../types";

export function Warehouse({
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
      <path d="m3 10 9-5 9 5v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M8 21v-6h8v6m-6-6h4"/>
    </svg>
  );
}
