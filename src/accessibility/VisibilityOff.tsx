import type { IconProps } from "../types";

export function VisibilityOff({
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
      <path d="m3 3 18 18M10.7 6.6a10 10 0 0 1 1.3-.1c6 0 9.5 5.5 9.5 5.5a18.5 18.5 0 0 1-3.3 3.8m-4.4-2a2 2 0 0 1-3.6-3.6"/><path d="M7.1 7.1A18.7 18.7 0 0 0 2.5 12S6 17.5 12 17.5c1.3 0 2.5-.3 3.6-.8"/>
    </svg>
  );
}
