import prettier from "prettier/standalone";
import * as prettierPluginBabel from "prettier/plugins/babel";
import * as prettierPluginEstree from "prettier/plugins/estree";
import * as prettierPluginTypescript from "prettier/plugins/typescript";

const prettierPlugins = [
  prettierPluginBabel,
  prettierPluginEstree,
  prettierPluginTypescript,
];

export interface IconCopyProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const DEFAULT_SIZE = 24;
const DEFAULT_STROKE_WIDTH = 2;

function buildJsxProps(props?: IconCopyProps) {
  const attributes: string[] = [];

  if (props?.size !== undefined && props.size !== DEFAULT_SIZE) {
    attributes.push(`size={${props.size}}`);
  }

  if (
    props?.strokeWidth !== undefined &&
    props.strokeWidth !== DEFAULT_STROKE_WIDTH
  ) {
    attributes.push(`strokeWidth={${props.strokeWidth}}`);
  }

  if (props?.className) {
    attributes.push(`className="${props.className}"`);
  }

  return attributes.length > 0 ? ` ${attributes.join(" ")}` : "";
}

async function formatWithPrettier(code: string, parser: "babel" | "typescript") {
  return (
    await prettier.format(code, {
      parser,
      plugins: prettierPlugins,
      semi: true,
      singleQuote: false,
    })
  ).trim();
}

export async function formatJsxSnippet(
  name: string,
  props?: IconCopyProps
) {
  return `<${name}${buildJsxProps(props)} />`;
}

export async function formatExampleSnippet(name: string, props?: IconCopyProps) {
  const jsx = `<${name}${buildJsxProps(props)} />`;
  const code = `import { ${name} } from "@veasnawt/vicons";

export default function Example() {
  return ${jsx};
}`;

  return formatWithPrettier(code, "typescript");
}
