import fs from "node:fs/promises";
import path from "node:path";

export function toPascalCase(name: string) {
  return name
    .replace(/\.svg$/, "")
    .split(/[-_ ]+/)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
}

export async function ensureDirectory(dir: string) {
  await fs.mkdir(dir, {
    recursive: true,
  });
}

export async function writeFile(
  file: string,
  contents: string
) {
  await ensureDirectory(path.dirname(file));

  await fs.writeFile(file, contents);
}

export async function readFile(file: string) {
  return fs.readFile(file, "utf8");
}