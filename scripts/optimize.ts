import { optimize } from "svgo";
import { readFile } from "./utils";

export async function optimizeSvg(file: string): Promise<string> {
  const svg = await readFile(file);

  const result = optimize(svg, {
    multipass: true,
  });

  if (!("data" in result)) {
    throw new Error(`Failed to optimize ${file}`);
  }

  return result.data;
}