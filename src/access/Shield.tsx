import type { IconProps } from "../types";

export function Shield({
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
      <path d="M12 3 6 5.5V11c0 4.7 2.5 7.7 6 10 3.5-2.3 6-5.3 6-10V5.5z"/>
    </svg>
  );
}
