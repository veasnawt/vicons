import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-16 sm:px-6">
      <div className="max-w-2xl space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            @veasnawt/vicons
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            Beautiful SVG icons for React.
          </h1>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400">
            A lightweight icon library with consistent stroke styling, typed
            React components, and tree-shakeable exports.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/icons"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Browse icons
          </Link>
          <Link
            href="/docs"
            className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 px-5 text-sm font-medium text-zinc-950 transition hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            Read docs
          </Link>
        </div>
      </div>
    </div>
  );
}
