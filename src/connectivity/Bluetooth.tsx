import type { IconProps } from "../types";

export function Bluetooth({
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
      <path d="M12 4v16m0-16 5 4-5 4m0 0 5 4-5 4M7 7l10 10M7 17 17 7"/>
    </svg>
  );
}
