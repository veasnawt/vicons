import type { IconProps } from "../types";

export function Visibility({
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
      <path d="M2.5 12S6 6.5 12 6.5s9.5 5.5 9.5 5.5-3.5 5.5-9.5 5.5S2.5 12 2.5 12"/><circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
