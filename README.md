# Agent Office

A desktop app that shows the Claude Code sessions running on your machine as people in a small voxel office. Each session is a worker with a card showing what it is doing, and you get a notification when one starts waiting for you. Subagents show up as interns.

**[Download the latest version](https://github.com/Tuplano/agent-office-app-release/releases/latest)**. This repo only holds the releases; the code is private.

## Install

The installers are not signed with a paid certificate, so Windows and macOS warn you before the first run. The warnings are described below.

### Ubuntu and Debian

Download the `.deb` and install it:

```
sudo apt install ./Agent.Office_0.3.2_amd64.deb
```

Or download the `.AppImage`, make it executable (`chmod +x`) and run it. The AppImage needs FUSE 2 (`libfuse2` on Ubuntu 22.04 and 24.04).

Only the AppImage can update itself. With the `.deb`, the app tells you a new version exists and where to download it.

The tray icon needs a desktop that shows tray icons. GNOME does not do so by default; the AppIndicator extension adds it. Without it the app still works, but the icon is not shown: closing the window hides it all the same, and starting the app again brings the window back.

### Windows

Download the `.msi` or the `-setup.exe` and run it. Windows SmartScreen shows "Windows protected your PC". Click "More info", then "Run anyway".

### macOS

Download the `.dmg` for your Mac: `aarch64` for Apple Silicon, `x64` for Intel. Open it and drag the app to Applications.

The app is only ad-hoc signed, not signed by an Apple developer account and not notarized. The first time, macOS refuses to open it. Open System Settings, Privacy & Security, scroll to the message about "Agent Office" being blocked and click "Open Anyway", then confirm. If macOS says the app is damaged, run `xattr -dr com.apple.quarantine "/Applications/Agent Office.app"` once.

## Updates

The app looks for a newer version about 20 seconds after it starts, and when you click "Check for updates" in the tray menu. Nothing is downloaded until you click "Update to vX.Y.Z" in the same place. Updates are signed, and the app only accepts ones signed with the author's key.
