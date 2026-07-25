import type { IconProps } from "../types";

export function Castle({
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
      <path d="M5 20V8h3V5h2v3h4V5h2v3h3v12M5 20h14M8 11v2m8-2v2"/><path d="M11 20v-5h2v5M5 8h14"/>
    </svg>
  );
}
