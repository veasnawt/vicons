import { IconBrowser } from "@/components/icon-browser";
import { icons } from "@/lib/icons";

export default function IconsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Icons
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Browse the full vicons library. Search by name or category, then copy
          formatted SVG markup, JSX, or a ready-to-use example component.
        </p>
      </div>

      <IconBrowser icons={icons} />
    </div>
  );
}
