import { cleanOutput } from "./clean";
import { createComponent } from "./component";
import { discoverIcons } from "./discover";
import { generateExports } from "./exports";
import { svgToJsx } from "./jsx";
import { optimizeSvg } from "./optimize";

async function main() {
  await cleanOutput();

  const icons = await discoverIcons();

  for (const icon of icons) {
    const svg = await optimizeSvg(icon.sourcePath);
    const jsx = svgToJsx(svg);

    await createComponent({
      icon,
      jsx,
    });

    console.log(`✓ ${icon.componentName}`);
  }

  await generateExports();

  console.log(`\n✨ Generated ${icons.length} icons.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});