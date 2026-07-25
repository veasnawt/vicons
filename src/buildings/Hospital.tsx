import type { IconProps } from "../types";

export function Hospital({
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
      <path d="M6 20V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13M4 20h16M12 8v4m-2-2h4"/><path d="M10 20v-4h4v4"/>
    </svg>
  );
}
