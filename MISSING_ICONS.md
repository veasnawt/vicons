# Missing icons

Icons a consumer needed but that don't exist in `@veasnawt/vicons` yet, so the caller fell back to a
plain emoji, Unicode glyph, or a hand-rolled inline SVG in the meantime. Once an icon below is added
(`pnpm generate && pnpm build` in this package), its consumer can swap the fallback for the real
`<Icon />` — search the consumer file for "MISSING_ICONS.md" to find the exact spot (not every
consumer has that comment yet — added going forward as files are touched).

This list was compiled by a full sweep of the monorepo (2026-08-14): every studio, `packages/*`,
`apps/desktop`, `services/*`, and `integrations/*` were checked for non-vicons icon usage. Most of the
repo has no UI at all yet (studios/art, gamedev, language, music, settings, games; most of
`packages/*`; all of `services/*`/`integrations/*` are empty placeholders). The two real UI codebases
found were `packages/vstudio` (already thoroughly migrated — see the table below for its remaining
gaps) and `packages/universe` (the Universe desktop-shell UI — window chrome, taskbar, file manager,
browser, Rixie chat, settings — by far the largest surface area, not yet migrated to vicons at all).

Add new entries to the bottom of the table as they come up; remove a row once the icon exists and its
consumer has been switched over.

## Quick list (name + category only)

One name picked per icon (the full table below has the alternates each was chosen from).

| Name | Category |
|---|---|
| Restore | actions |
| Brightness | status |
| VolumeOff | status |
| Info | status |
| Pdf | files |
| Attach | actions |
| Loading | status |
| Palette | design |
| ExitFullscreen | actions |

## Full detail

| Requested name (suggestion, not binding) | Suggested category | Used for | Current fallback | Consumer |
|---|---|---|---|---|
| Restore / Windowed | actions or design | Un-maximize a window back to its floating size | Hand-rolled inline SVG (two overlapping squares) | `packages/universe/src/components/WindowChrome.tsx` — `Maximize` now exists but is deliberately NOT wired in yet: it's part of a matched Minimize/Maximize/Restore/Close button set the original author hand-tuned for pixel alignment (see the file's own comment), and swapping only one of four would look inconsistent. Convert the whole set together once `Restore` exists too. |
| Brightness / Sun | status | System tray brightness control | Hand-rolled inline SVG (`SunIcon`: circle + rays) | `packages/universe/src/components/SystemTrayControls.tsx` |
| VolumeOff / VolumeMute | status | Muted-volume state (distinct from the general `Volume` icon) | Hand-rolled inline SVG (`SpeakerIcon` with no wave arcs) | `packages/universe/src/components/SystemTrayControls.tsx` |
| Info / About | status | "About this OS" app icon | Hand-rolled inline SVG (circle + "i") | `packages/universe/src/components/AboutOSIcon.tsx` |
| Pdf / DocumentPdf | files | File Manager / Taskbar / Search icon for `.pdf` files (distinct from the generic `Document` icon) | Hand-rolled inline SVG (`PdfIcon`) | `packages/universe/src/components/PdfIcon.tsx`, wired via `src/utils/fileTypes.ts` |
| Attach / Paperclip | actions | Attach a file to a Rixie chat message | `lucide-react`'s `Paperclip` | `packages/universe/src/components/RixieWindow.tsx` |
| Loading / Spinner | status | An in-progress/loading state (distinct from `Refresh`/`Sync`, which mean "reload", not "please wait") | `lucide-react`'s `Loader2` | `packages/universe/src/components/RixieWindow.tsx`, `InstallSoftwareDialog.tsx` |
| Palette / Theme / Appearance | design | Browser panel's theme/appearance picker (distinct from `Art`, which represents an image file type) | Hand-rolled inline SVG (artist's palette) | `packages/universe/src/components/BrowserPanel.tsx` |
| ExitFullscreen / Compress / Minimize2 | actions | The Preview panel's fullscreen toggle button, once ALREADY in fullscreen (a "shrink the four corners inward" glyph, the standard visual pair to `Maximize`'s "expand outward") | `Maximize` reused for both directions — only the tooltip/aria-label ("Fullscreen" vs "Exit fullscreen") tells them apart, no visual change on click | `packages/vstudio/src/ui/Preview.tsx` (transport bar) |

## Duplicate implementations (icon already exists — just needs converting, not a new request)

Found during the same sweep: spots where a vicons icon with an exact or near-exact semantic match
ALREADY EXISTS, but the consumer built (or imported from `lucide-react`) its own version instead of
using it — presumably predating that icon's addition to vicons, or from before that consumer had
adopted vicons at all. Not tracked as new icon requests; tracked here so a future cleanup pass has a
ready-made list. Not converted as part of this sweep — `packages/universe` is a large, actively-used
codebase this pass only read, never modified.

| Concept | Existing vicons icon | Consumer(s) |
|---|---|---|
| Remove item from a list | `Close` | `packages/vstudio/src/ui/MediaLibrary.tsx` — **fixed** |
| Dropdown expand indicator | `ChevronDown` | `packages/vstudio/src/ui/Dropdown.tsx` — **fixed** |
| Close (window / dialog / tab / bookmark row) | `Close` | `packages/universe/src/components/WindowChrome.tsx`, `Window.tsx`, `BrowserPanel.tsx`, `StudioDetailCard.tsx`; `lucide-react`'s `X` in `RixieWindow.tsx`/`InstallSoftwareDialog.tsx` |
| Minimize window | `Minus` | `packages/universe/src/components/WindowChrome.tsx` |
| Checkbox / checked state | `Check` | `packages/universe/src/components/DesktopContextMenu.tsx`, `SettingsPanel.tsx`; `lucide-react`'s `Check` in `InstallSoftwareDialog.tsx` |
| Submenu / back / forward chevron | `ChevronRight` / `ChevronLeft` | `packages/universe/src/components/DesktopContextMenu.tsx`, `BrowserPanel.tsx` (browser nav back/forward) |
| Search (magnifying glass) | `Search` | `packages/universe/src/components/Taskbar.tsx`, `SearchOverlay.tsx` |
| Reload / refresh | `Refresh` (or `Sync`) | `packages/universe/src/components/BrowserPanel.tsx`, `OSUpdateIcon.tsx` |
| Home | `Home` / `House` | `packages/universe/src/components/BrowserPanel.tsx` |
| Bookmark / favorite toggle | `Bookmark` (or `Favorite`/`Star`) | `packages/universe/src/components/BrowserPanel.tsx` |
| Bookmarks list | `List` | `packages/universe/src/components/BrowserPanel.tsx` |
| New tab (plus) | `Add` / `Plus` | `packages/universe/src/components/Window.tsx` |
| Task Manager app icon | `BarChart` (close match) | `packages/universe/src/components/TaskManagerIcon.tsx` |
| Video file icon | `Video` | `packages/universe/src/components/VideoIcon.tsx` |
| Browser app icon (globe) | `Globe` | `packages/universe/src/components/BrowserIcon.tsx` |
| Terminal app icon | `Terminal` | `packages/universe/src/components/TerminalIcon.tsx` |
| DevTools / inspect | `Code` | `packages/universe/src/components/BrowserPanel.tsx` |
| New chat / delete conversation / copy message / hide message | `Plus`, `Delete`, `Copy`, `VisibilityOff` | `lucide-react` imports in `packages/universe/src/components/RixieWindow.tsx` |
| Download / install progress | `Download` | `lucide-react` import in `packages/universe/src/components/InstallSoftwareDialog.tsx` |

Also noted but not tracked as either a request or a duplicate: `studios/bp` has three spots using
plain `←`/`→` text characters for "back"/"forward" navigation links, and one decorative `👋` emoji —
`ArrowLeft`/`ArrowRight` already cover the concepts if/when those get converted, but as plain link
text (not icon-shaped buttons) converting them is lower priority.
