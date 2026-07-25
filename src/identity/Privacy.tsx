import type { IconProps } from "../types";

export function Privacy({
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
      <path d="M12 3 6 5.5V11c0 4.7 2.5 7.7 6 10 3.5-2.3 6-5.3 6-10V5.5z"/><path d="M8.5 12S9.9 9.8 12 9.8s3.5 2.2 3.5 2.2-1.4 2.2-3.5 2.2S8.5 12 8.5 12"/><circle cx="12" cy="12" r="1"/>
    </svg>
  );
}
