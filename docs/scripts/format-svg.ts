const JSX_ATTR_TO_SVG: Record<string, string> = {
  strokeWidth: "stroke-width",
  strokeLinecap: "stroke-linecap",
  strokeLinejoin: "stroke-linejoin",
};

function toSvgAttrName(name: string): string {
  return JSX_ATTR_TO_SVG[name] ?? name;
}

function normalizeAttrValue(name: string, value: string): string {
  if (value === "size") return "24";
  if (value === "strokeWidth") return "2";
  return value;
}

function parseAttributes(source: string): Array<{ name: string; value: string }> {
  const attributes: Array<{ name: string; value: string }> = [];
  const attrRegex = /([\w-]+)(?:=\{([^}]+)\}|="([^"]*)")/g;
  let match: RegExpExecArray | null;

  while ((match = attrRegex.exec(source)) !== null) {
    const name = match[1];
    const rawValue = match[2] ?? match[3] ?? "";
    attributes.push({
      name: toSvgAttrName(name),
      value: normalizeAttrValue(name, rawValue),
    });
  }

  return attributes;
}

function formatAttributes(attributes: Array<{ name: string; value: string }>) {
  return attributes
    .map((attribute) => `  ${attribute.name}="${attribute.value}"`)
    .join("\n");
}

function parseChildElements(children: string) {
  const elements: Array<{ tag: string; attributes: string }> = [];
  const elementRegex = /<([a-zA-Z]+)\s*([^>]*?)\s*\/?>/g;
  let match: RegExpExecArray | null;

  while ((match = elementRegex.exec(children)) !== null) {
    elements.push({
      tag: match[1],
      attributes: match[2].trim(),
    });
  }

  return elements;
}

function formatChildElement(tag: string, attributes: string) {
  if (!attributes) {
    return `<${tag} />`;
  }

  return `<${tag} ${attributes} />`;
}

export function formatSvgFromTsx(content: string): string {
  const svgMatch = content.match(/<svg[\s\S]*?<\/svg>/);
  if (!svgMatch) {
    throw new Error("SVG element not found in icon source.");
  }

  let svgSource = svgMatch[0].replace(/\s*\{\.\.\.props\}/g, "");
  const openTagEnd = svgSource.indexOf(">", svgSource.indexOf("<svg"));
  const closeTagStart = svgSource.lastIndexOf("</svg>");
  const openTag = svgSource.slice(0, openTagEnd + 1);
  const children = svgSource.slice(openTagEnd + 1, closeTagStart).trim();
  const openTagInner = openTag.replace(/^<svg\s*/, "").replace(/>$/, "");
  const rootAttributes = parseAttributes(openTagInner);
  const formattedChildren = parseChildElements(children)
    .map((element) => formatChildElement(element.tag, element.attributes))
    .map((element) => `  ${element}`)
    .join("\n");

  const lines = ["<svg", formatAttributes(rootAttributes), ">"];

  if (formattedChildren) {
    lines.push(formattedChildren);
  }

  lines.push("</svg>");

  return `${lines.join("\n")}\n`;
}
