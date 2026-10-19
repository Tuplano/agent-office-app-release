<div align="center">

# Agent Office

**See every Claude Code session on your machine as a worker in a small voxel office.**

[![Latest release](https://img.shields.io/github/v/release/Tuplano/agent-office-app-release?include_prereleases&label=latest&color=2ea44f)](https://github.com/Tuplano/agent-office-app-release/releases)
[![Downloads](https://img.shields.io/github/downloads/Tuplano/agent-office-app-release/total?color=blue)](https://github.com/Tuplano/agent-office-app-release/releases)
![Platforms](https://img.shields.io/badge/platforms-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey)

**[⬇ Download](https://github.com/Tuplano/agent-office-app-release/releases)** · [What's new](#whats-new) · [Install](#install) · [Changelog](CHANGELOG.md)

</div>

---

## What it does

- **One worker per session.** Every Claude Code session running on your computer shows up as a person at a desk.
- **Live status cards.** Each worker has a card that shows what the session is doing right now.
- **Notifications when you're needed.** When a session stops and waits for your input, you get a notification.
- **Interns for subagents.** Subagents that a session starts show up as interns.

> This repository only holds the installers and release notes. The source code is private.

## What's new

<!-- latest:start -->
### v0.3.2 · 2026-10-19

#### Added
- Every worker wears a badge showing which tool runs their session, on their shirt and on their laptop lid: Claude's orange spark, Gemini's star (also worn by Antigravity), or `>_` for Codex.
- Your character nods off on the floor when nobody has touched the mouse or keyboard for about a minute, and wakes up and carries on when you come back.
- Choose which device the music plays on ("Play on" in Settings). If that device is unplugged, the music plays through your usual output and moves back when it returns.

#### Changed
- Music now plays through the app itself, with its own volume control.

[See every version in the changelog →](CHANGELOG.md)
<!-- latest:end -->

## Download

Open the [Releases page](https://github.com/Tuplano/agent-office-app-release/releases), expand **Assets** under the newest version and pick the file for your system:

| System | File to download | Notes |
| --- | --- | --- |
| **Windows** | `…_x64-setup.exe` | Recommended for most people |
| | `…_x64_en-US.msi` | The same app as an MSI package |
| **macOS (Apple Silicon, M1 and newer)** | `…_aarch64.dmg` | |
| **macOS (Intel)** | `…_x64.dmg` | |
| **Ubuntu / Debian** | `…_amd64.deb` | |
| **Fedora / openSUSE** | `….x86_64.rpm` | |
| **Any Linux** | `…_amd64.AppImage` | The only Linux format that updates itself |

You can ignore the `.sig`, `.tar.gz` and `latest.json` files. The in-app updater uses them.

## Install

> [!NOTE]
> The installers are not signed with a paid certificate, so Windows and macOS show a warning the first time you open the app. This is expected. The steps below show how to get past it.

<details open>
<summary><b>Windows</b></summary>

1. Run the `-setup.exe` (or the `.msi`).
2. If Windows SmartScreen says **"Windows protected your PC"**, click **More info**, then **Run anyway**.

</details>

<details open>
<summary><b>macOS</b></summary>

1. Open the `.dmg` and drag **Agent Office** into **Applications**.
2. The first time you open it, macOS blocks it because the app isn't notarized by Apple.
3. Go to **System Settings → Privacy & Security**, scroll to the message about "Agent Office" and click **Open Anyway**, then confirm.

If macOS says the app **"is damaged and can't be opened"**, run this once in Terminal:

```sh
xattr -dr com.apple.quarantine "/Applications/Agent Office.app"
```

</details>

<details open>
<summary><b>Linux</b></summary>

**Ubuntu / Debian**

```sh
sudo apt install ./Agent.Office_*_amd64.deb
```

**Fedora / openSUSE**

```sh
sudo dnf install ./Agent.Office-*.x86_64.rpm     # Fedora
sudo zypper install ./Agent.Office-*.x86_64.rpm  # openSUSE
```

**AppImage (any distribution)**

```sh
chmod +x Agent.Office_*_amd64.AppImage
./Agent.Office_*_amd64.AppImage
```

The AppImage needs FUSE 2 (the `libfuse2` package on Ubuntu 22.04 and 24.04).

**Tray icon:** the tray icon only appears on desktops that support tray icons. GNOME doesn't show them by default, and the [AppIndicator extension](https://extensions.gnome.org/extension/615/appindicator-support/) adds them. The app works without it: closing the window still hides it, and starting the app again brings the window back.

</details>

## Updating the app

| Installed with | How updates work |
| --- | --- |
| Windows, macOS, AppImage | Updates in the app |
| `.deb` / `.rpm` | The app tells you when a new version is out. Download it and install it again |

- The app checks for a new version about 20 seconds after it starts, and whenever you click **Check for updates** in the tray menu.
- Nothing downloads until you click **Update to vX.Y.Z**.
- Every update is signed, and the app only installs updates signed with the author's key.

## Changelog

Every release and what changed in it is listed in **[CHANGELOG.md](CHANGELOG.md)**.
