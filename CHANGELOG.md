# Changelog

All notable changes to Agent Office are listed here, newest first.
Versions follow [Semantic Versioning](https://semver.org/): **major** for big or breaking changes, **minor** for new features, **patch** for fixes.

This file updates itself every time a release is published.

## How to get the newest version

Every version below is an update to the Agent Office app itself. There are no separate in-app content updates: changes to the office, workers and cards always ship as a new app version.

| Installed with | How to update |
| --- | --- |
| Windows (`.exe` / `.msi`), macOS (`.dmg`), Linux AppImage | Click **Check for updates** in the tray menu, then **Update to vX.Y.Z**. The app also checks by itself about 20 seconds after it starts |
| Linux `.deb` / `.rpm` | The app tells you a new version is out. Download it from the [Releases page](https://github.com/Tuplano/agent-office-app-release/releases) and install it over the old one |

Updates are signed, and the app only installs ones signed with the author's key.

---

<!-- releases -->
## [v0.3.2](https://github.com/Tuplano/agent-office-app-release/releases/tag/v0.3.2) · 2026-10-19

First public release of Agent Office for Windows, macOS and Linux.

### Added
- Every Claude Code session on the machine shown as a worker in a voxel office, each with a live status card.
- A notification when a session starts waiting for your input.
- Subagents shown as interns.
- A tray icon with **Check for updates**, plus signed in-app updates for Windows, macOS and the Linux AppImage.
- Installers for Windows (`.exe`, `.msi`), macOS (Apple Silicon and Intel `.dmg`) and Linux (`.deb`, `.rpm`, `.AppImage`).
