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
## [v0.3.3](https://github.com/Tuplano/agent-office-app-release/releases/tag/v0.3.3) · 2026-10-21

### Added
- Dress every worker: pick their hair, accessory, shirt, pants and shoes, each in any colour, or press Randomize for a whole new outfit. What you pick is remembered.
- Choose the office pet: a cat, a dog or a rabbit, in 21 breeds from a pug or a corgi to a Siamese or a lop. Pick "Choose another pet" from the pet's menu.
- Dress the pet too, in one of 12 things in any colour: a collar, a collar and bell, a bandana, a scarf, a bow tie, a bow, a party hat, a crown, a flower, sunglasses, a sweater or a cape.

### Changed
- Clicking a worker opens a bigger panel: their outfit on the left and their session on the right.
- Your own look is now changed the same way: click your name tag in the room. It has moved out of Settings.

## [v0.3.2](https://github.com/Tuplano/agent-office-app-release/releases/tag/v0.3.2) · 2026-10-19

### Added
- Every worker wears a badge showing which tool runs their session, on their shirt and on their laptop lid: Claude's orange spark, Gemini's star (also worn by Antigravity), or `>_` for Codex.
- Your character nods off on the floor when nobody has touched the mouse or keyboard for about a minute, and wakes up and carries on when you come back.
- Choose which device the music plays on ("Play on" in Settings). If that device is unplugged, the music plays through your usual output and moves back when it returns.

### Changed
- Music now plays through the app itself, with its own volume control.

## v0.3.1 · 2026-10-15

_Released before this download page existed, so there is no download for it here. The newest version has everything in it._

### Fixed
- Codex and Antigravity (`agy`) sessions are picked up more reliably, and their tool calls show correctly.

## v0.3.0 · 2026-10-14

_Released before this download page existed, so there is no download for it here. The newest version has everything in it._

### Added
- **You in the room**: a character of your own walks around the office. Click the floor to walk there, and pick your look in Settings.
- Talk to workers, pet the cat, and use the furniture from a menu that appears when you click a piece.
- Start new sessions from the app with **+**: pick Claude Code, Codex, Gemini or Antigravity and a folder, and the session runs in a terminal inside the app. Click its worker to type to it.
- Click any worker to open a side panel that shows its session's conversation live: your prompts, the replies and each tool it calls.
- Codex and Antigravity (`agy`) sessions now show up in the office, alongside Claude Code.
- For sessions started in another terminal, the app can bring that window to the front, such as "Reply in VS Code".

## v0.2.0 · 2026-10-14

_Released before this download page existed, so there is no download for it here. The newest version has everything in it._

### Added
- Music: a calm tune made up on the spot inside the app, with nothing downloaded. Turn it on with the note button.
- Settings for the theme and the music.
- Build walls inside the room: walls, glass walls, half walls and office doors, drawn with a click at each end.
- New furniture: a boss's desk, cubicles, a meeting table that seats twelve, a filing cabinet, a water cooler, a fridge, a vending machine and a whiteboard.
- More ready-made rooms to start from, in other sizes.

## v0.1.0 · 2026-10-13

_Released before this download page existed, so there is no download for it here. The newest version has everything in it._

### Added
- Your Claude Code sessions shown as workers in a voxel office, each with a card showing what it is doing. Subagents show up as interns.
- Workers walk in through the door when a session starts and leave when it ends. Workers without a free chair sit in the lounge or on the floor.
- A notification, and an orange dot on the tray icon, when a session is waiting for you.
- The app keeps running in the tray when its window is closed, with an option to launch at login.
- Edit the room: move, turn, add and remove furniture, resize the room and recolor anything.
- Ready-made rooms to start from, and copy a room as text to paste into another office.
- Bring in your own furniture made in Blender (`.glb`) or MagicaVoxel (`.vox`).
- Signed updates installed from the tray menu.
