import type { IconProps } from "../types";

export function History({
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
      <path d="M18.5 9a7 7 0 1 0 .5 5"/><path d="M18.5 5.5V9H15m-3-1v4l-2.5 2"/>
    </svg>
  );
}
