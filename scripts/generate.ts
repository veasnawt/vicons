import { discoverIcons } from "./discover";
import { optimizeSvg } from "./optimize";
import { svgToJsx } from "./jsx";
import { createComponent } from "./component";
import { generateExports } from "./exports";

async function main() {
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

main();