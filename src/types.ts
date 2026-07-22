import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon size in pixels.
   * @default 24
   */
  size?: number;

  /**
   * Stroke width.
   * @default 2
   */
  strokeWidth?: number;
}