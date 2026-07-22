import fs from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";

export async function generateExports() {
    const srcDir = path.resolve("src");

    // Get every category folder
    const categories = await fs.readdir(srcDir, {
        withFileTypes: true,
    });

    const rootExports: string[] = [];

    for (const category of categories) {
        if (!category.isDirectory()) continue;

        const categoryName = category.name;

        const files = await fg("*.tsx", {
            cwd: path.join(srcDir, categoryName),
        });

        // Skip empty categories
        if (files.length === 0) {
            continue;
        }

        const exports = files
            .map((file) => {
                const name = path.basename(file, ".tsx");
                return `export * from "./${name}";`;
            })
            .join("\n");

        await fs.writeFile(
            path.join(srcDir, categoryName, "index.ts"),
            exports + "\n"
        );

        rootExports.push(`export * from "./${categoryName}";`);
    }

    rootExports.push(`export * from "./types";`);

    await fs.writeFile(
        path.join(srcDir, "index.ts"),
        rootExports.join("\n") + "\n"
    );
}