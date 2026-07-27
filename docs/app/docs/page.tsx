export default function DocsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
            Documentation
          </h1>
          <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            Install vicons and use the React components in your app.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            Installation
          </h2>
          <pre className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
            <code>{`pnpm add @veasnawt/vicons`}</code>
          </pre>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            Usage
          </h2>
          <pre className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50">
            <code>{`import { Settings } from "@veasnawt/vicons";

export function Example() {
  return <Settings size={24} strokeWidth={2} className="text-zinc-900" />;
}`}</code>
          </pre>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-medium text-zinc-950 dark:text-zinc-50">
            Props
          </h2>
          <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="min-w-full divide-y divide-zinc-200 text-sm dark:divide-zinc-800">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-medium text-zinc-950 dark:text-zinc-50">
                    Prop
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-zinc-950 dark:text-zinc-50">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-zinc-950 dark:text-zinc-50">
                    Default
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
                <tr>
                  <td className="px-4 py-3 font-mono text-zinc-950 dark:text-zinc-50">
                    size
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                    number
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                    24
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-mono text-zinc-950 dark:text-zinc-50">
                    strokeWidth
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                    number
                  </td>
                  <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">
                    2
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Icons also accept standard SVG props such as{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-900">
              className
            </code>
            ,{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-900">
              aria-label
            </code>
            , and{" "}
            <code className="rounded bg-zinc-100 px-1 py-0.5 dark:bg-zinc-900">
              onClick
            </code>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
