const ATTRIBUTE_MAP: Record<string, string> = {
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "fill-rule": "fillRule",
  "clip-rule": "clipRule",
  "clip-path": "clipPath",
  "stroke-miterlimit": "strokeMiterlimit",
  "stroke-dasharray": "strokeDasharray",
  "stroke-dashoffset": "strokeDashoffset",
  "stroke-opacity": "strokeOpacity",
  "fill-opacity": "fillOpacity",
  "class": "className",
};

export function svgToJsx(svg: string) {
  let jsx = svg;

  for (const [svgAttr, jsxAttr] of Object.entries(ATTRIBUTE_MAP)) {
    jsx = jsx.replace(
      new RegExp(svgAttr, "g"),
      jsxAttr
    );
  }

  return jsx;
}