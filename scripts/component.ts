import path from "node:path";

import type { ComponentOptions } from "./types";
import { ensureDirectory, writeFile } from "./utils";

export async function createComponent({
  icon,
  jsx,
}: ComponentOptions) {
  // Extract everything inside the <svg>...</svg>
  const body = jsx
    .replace(/^<svg[^>]*>/, "")
    .replace(/<\/svg>$/, "")
    .trim();

  const component = `import type { IconProps } from "../types";

export function ${icon.componentName}({
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
${indent(body, 6)}
    </svg>
  );
}
`;

  await ensureDirectory(path.dirname(icon.outputPath));

  await writeFile(icon.outputPath, component);
}

function indent(text: string, spaces: number) {
  const padding = " ".repeat(spaces);

  return text
    .split("\n")
    .map((line) => padding + line)
    .join("\n");
}