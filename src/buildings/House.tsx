import type { IconProps } from "../types";

export function House({
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
      <path d="M4 10.5 12 4l8 6.5"/><path d="M6 10v10h12V10"/><path d="M10 20v-5a2 2 0 0 1 4 0v5"/>
    </svg>
  );
}
