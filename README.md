# VIcons

Beautiful, consistent SVG icons for React.

Designed for modern applications with a clean, minimalist style. VIcons powers BP Studio and is built to be fast, tree-shakeable, and easy to use.

## Features

- ✨ 130+ icons
- 🎨 Minimalist outline icon system
- 📏 Consistent 24×24 grid
- 🎯 Pixel-perfect strokes
- 🎨 Uses `currentColor`
- ⚛️ React-first API
- 🌳 Tree-shakeable
- 📦 ESM + CommonJS
- 🔷 TypeScript support
- ⚡ Lightweight

## Installation

```bash
pnpm add @veasnawt/vicons
```

or

```bash
npm install @veasnawt/vicons
```

## Usage

```tsx
import { Add, Folder, Idea } from "@veasnawt/vicons";

export default function App() {
  return (
    <div className="flex items-center gap-4">
      <Add />
      <Folder size={20} />
      <Idea size={32} strokeWidth={1.5} />
    </div>
  );
}
```

## Props

| Prop | Type | Default |
|------|------|---------|
| `size` | `number` | `24` |
| `strokeWidth` | `number` | `2` |
| `className` | `string` | — |
| `...props` | `SVGProps<SVGSVGElement>` | — |

## Philosophy

VIcons is designed around a simple idea:

> **Consistency over quantity.**

Every icon follows the same visual language, making interfaces feel clean, cohesive, and predictable.

## License

MIT © Veasnawt