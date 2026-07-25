import type { IconProps } from "../types";

export function AccessibilityOff({
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
      <path d="m4 4 16 16"/><circle cx="12" cy="5" r="1.5"/><path d="M12 7v5m-4-1.5c1.2-.8 2.6-1.2 4-1.2s2.8.4 4 1.2M12 12l-4 8m4-8 4 8"/>
    </svg>
  );
}
