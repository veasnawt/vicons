<p align="left">
  <picture>
    <source
      media="(prefers-color-scheme: dark)"
      srcset="assets/logo-dark.svg"
    />
    <source
      media="(prefers-color-scheme: light)"
      srcset="assets/logo-light.svg"
    />
    <img
      src="assets/logo-light.svg"
      alt="VIcons"
      width="96"
    />
  </picture>
</p>

# VIcons

Beautiful, consistent SVG icons for React.

Designed for modern applications with a clean, minimalist style. VIcons powers BP Studio, VStudio, and Veasna OS's Universe shell, and is built to be fast, tree-shakeable, and easy to use.

<img src="https://vicons-svg-api.veasnawt.workers.dev/globe.svg?color=19A4FF&size=20" width="20" alt="Documentation" /> **Documentation & Icon Browser:** https://veasnawt.github.io/vicons

## <img src="https://vicons-svg-api.veasnawt.workers.dev/star.svg?color=F59E0B&size=24" width="24" alt="" /> Features

- <img src="https://vicons-svg-api.veasnawt.workers.dev/grid.svg?color=8B5CF6&size=20" width="20" alt="" /> **145+ icons**
- <img src="https://vicons-svg-api.veasnawt.workers.dev/art.svg?color=EC4899&size=20" width="20" alt="" /> Minimalist outline icon system
- <img src="https://vicons-svg-api.veasnawt.workers.dev/grid.svg?color=06B6D4&size=20" width="20" alt="" /> Consistent 24×24 grid
- <img src="https://vicons-svg-api.veasnawt.workers.dev/check.svg?color=22C55E&size=20" width="20" alt="" /> Pixel-perfect strokes
- <img src="https://vicons-svg-api.veasnawt.workers.dev/refresh.svg?color=F97316&size=20" width="20" alt="" /> Uses `currentColor`
- <img src="https://vicons-svg-api.veasnawt.workers.dev/code.svg?color=19A4FF&size=20" width="20" alt="" /> React-first API
- <img src="https://vicons-svg-api.veasnawt.workers.dev/split.svg?color=10B981&size=20" width="20" alt="" /> Tree-shakeable
- <img src="https://vicons-svg-api.veasnawt.workers.dev/archive.svg?color=A78BFA&size=20" width="20" alt="" /> ESM + CommonJS
- <img src="https://vicons-svg-api.veasnawt.workers.dev/document.svg?color=3178C6&size=20" width="20" alt="" /> TypeScript support
- <img src="https://vicons-svg-api.veasnawt.workers.dev/gauge.svg?color=F59E0B&size=20" width="20" alt="" /> Lightweight

## <img src="https://vicons-svg-api.veasnawt.workers.dev/install.svg?color=22C55E&size=24" width="24" alt="" /> Installation

```bash
pnpm add @veasnawt/vicons
```

or

```bash
npm install @veasnawt/vicons
```

## <img src="https://vicons-svg-api.veasnawt.workers.dev/code.svg?color=19A4FF&size=24" width="24" alt="" /> Usage

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

## <img src="https://vicons-svg-api.veasnawt.workers.dev/settings.svg?color=8B5CF6&size=24" width="24" alt="" /> Props

| Prop | Type | Default |
|------|------|---------|
| `size` | `number` | `24` |
| `strokeWidth` | `number` | `2` |
| `className` | `string` | — |
| `...props` | `SVGProps<SVGSVGElement>` | — |

## <img src="https://vicons-svg-api.veasnawt.workers.dev/idea.svg?color=F59E0B&size=24" width="24" alt="" /> Philosophy

VIcons is designed around a simple idea:

> **Consistency over quantity.**

Every icon follows the same visual language, making interfaces feel clean, cohesive, and predictable.

## <img src="https://vicons-svg-api.veasnawt.workers.dev/shield.svg?color=22C55E&size=24" width="24" alt="" /> License

MIT © veasnawt
