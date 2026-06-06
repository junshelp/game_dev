## Parent

- #6

## What to build

Add thin verification for the Isometric Idle Expedition Overlay prototype. Tests should cover the core time, layout, and bridge behavior, while browser checks should confirm compact and expanded visual states remain usable and close to the approved concept.

## Acceptance criteria

- [ ] Expedition Clock tests cover progress, ready pack count, and capped or full state.
- [ ] Procedural Expedition Layout tests cover deterministic output for a fixed seed.
- [ ] Pack Opening Bridge tests cover ready pack entry into Expanded Pack Opening View and return to compact Expedition View.
- [ ] Browser check confirms compact overlay is visible, nonblank, taskbar-adjacent, and has Pack, Codex placeholder, Next Pack progress, Pack Ready Signal, and collapse affordance.
- [ ] Browser check confirms Expanded Pack Opening View is medium-sized, preserves bottom UI alignment, shows a Gothic Pack and Tear Guide, and avoids fullscreen takeover.
- [ ] Checks avoid asserting animation internals or pixel-perfect concept-image matching.

## Blocked by

- #8
- #9
- #10
