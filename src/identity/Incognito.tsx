import type { IconProps } from "../types";

export function Incognito({
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
      <path d="M6 9h12l-1.5-4h-9z"/><circle cx="9" cy="13" r="2"/><circle cx="15" cy="13" r="2"/><path d="M11 13h2"/>
    </svg>
  );
}
