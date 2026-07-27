"use client";

import * as Vicons from "@veasnawt/vicons";
import type { ComponentType } from "react";
import { useMemo, useState } from "react";

import type { IconEntry } from "@/lib/icons";
import { categories } from "@/lib/icons";

type IconComponent = ComponentType<{
  size?: number;
  strokeWidth?: number;
  className?: string;
}>;

const iconComponents = Object.fromEntries(
  Object.entries(Vicons).filter(
    ([name, value]) =>
      name !== "IconProps" && typeof value === "function",
  ),
) as Record<string, IconComponent>;

interface IconBrowserProps {
  icons: IconEntry[];
}

function formatImport(name: string) {
  return `import { ${name} } from "@veasnawt/vicons";`;
}

export function IconBrowser({ icons }: IconBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [copiedName, setCopiedName] = useState<string | null>(null);

  const filteredIcons = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return icons.filter((icon) => {
      const matchesCategory =
        category === "all" || icon.category === category;
      const haystack = `${icon.name} ${icon.category}`.toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 || haystack.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, icons, query]);

  async function copyImport(name: string) {
    await navigator.clipboard.writeText(formatImport(name));
    setCopiedName(name);
    window.setTimeout(() => setCopiedName(null), 1500);
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search icons by name or category..."
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-950 outline-none ring-zinc-950/10 transition focus:ring-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:ring-zinc-50/10"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <CategoryButton
            active={category === "all"}
            onClick={() => setCategory("all")}
            label="All"
          />
          {categories.map((item) => (
            <CategoryButton
              key={item}
              active={category === item}
              onClick={() => setCategory(item)}
              label={item}
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        {filteredIcons.length} icon{filteredIcons.length === 1 ? "" : "s"}
        {query ? ` matching "${query}"` : ""}
        {category !== "all" ? ` in ${category}` : ""}
      </p>

      {filteredIcons.length === 0 ? (
        <div className="rounded-xl border border-dashed border-zinc-200 px-6 py-16 text-center dark:border-zinc-800">
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            No icons found
          </p>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Try a different search term or category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredIcons.map((icon) => {
            const Icon = iconComponents[icon.name];

            return (
              <button
                key={`${icon.category}-${icon.name}`}
                type="button"
                onClick={() => copyImport(icon.name)}
                className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 text-left transition hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-50 text-zinc-950 transition group-hover:bg-white dark:bg-zinc-900 dark:text-zinc-50 dark:group-hover:bg-zinc-800">
                  {Icon ? (
                    <Icon size={24} strokeWidth={2} />
                  ) : (
                    <span className="text-xs text-zinc-400">?</span>
                  )}
                </span>

                <span className="w-full text-center">
                  <span className="block truncate text-sm font-medium text-zinc-950 dark:text-zinc-50">
                    {icon.name}
                  </span>
                  <span className="mt-0.5 block truncate text-xs capitalize text-zinc-500 dark:text-zinc-400">
                    {icon.category}
                  </span>
                </span>

                <span className="text-[11px] font-medium text-zinc-400 transition group-hover:text-zinc-600 dark:group-hover:text-zinc-300">
                  {copiedName === icon.name ? "Copied" : "Click to copy"}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function CategoryButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-3 py-1.5 text-xs font-medium capitalize transition",
        active
          ? "bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950"
          : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
