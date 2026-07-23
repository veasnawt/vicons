import fs from "node:fs/promises";
import path from "node:path";

export async function cleanOutput() {
  const srcDir = path.resolve("src");

  const entries = await fs.readdir(srcDir, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    if (entry.isDirectory()) {
      await fs.rm(path.join(srcDir, entry.name), {
        recursive: true,
        force: true,
      });
    }
  }

  await fs.rm(path.join(srcDir, "index.ts"), {
    force: true,
  });
}