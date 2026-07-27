"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/lib/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
        >
          vicons
        </Link>

        <nav className="flex items-center gap-1">
          {navigation.map((item) => {
            const isExternal = item.href.startsWith("http");
            const isActive =
              !isExternal &&
              (item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href));

            const className = [
              "rounded-md px-3 py-1.5 text-sm transition-colors",
              isActive
                ? "bg-zinc-100 font-medium text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50"
                : "text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50",
            ].join(" ");

            if (isExternal) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {item.title}
                </a>
              );
            }

            return (
              <Link key={item.href} href={item.href} className={className}>
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
