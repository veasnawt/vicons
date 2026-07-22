import fg from "fast-glob";
import path from "node:path";

import { toPascalCase } from "./utils";
import type { IconFile } from "./types";

export async function discoverIcons(): Promise<IconFile[]> {
  const files = await fg("assets/source/**/*.svg");

  return files.map((file) => {
    const category = path.basename(path.dirname(file));

    const fileName = path.basename(file);

    const componentName = toPascalCase(fileName);

    return {
      componentName,
      fileName,
      category,
      sourcePath: file,
      outputPath: path.join(
        "src",
        category,
        `${componentName}.tsx`
      ),
    };
  });
}