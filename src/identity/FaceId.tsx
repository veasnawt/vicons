import type { IconProps } from "../types";

export function FaceId({
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
      <path d="M7 4H5a1 1 0 0 0-1 1v2m13-3h2a1 1 0 0 1 1 1v2m0 10v2a1 1 0 0 1-1 1h-2M4 17v2a1 1 0 0 0 1 1h2"/><circle cx="12" cy="10" r="2"/><path d="M9 16a4 4 0 0 1 6 0"/>
    </svg>
  );
}
