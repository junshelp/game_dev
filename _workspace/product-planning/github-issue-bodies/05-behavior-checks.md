## What to build

Add a minimal verification pattern for the polished prototype so future tuning does not quietly break gesture thresholds, face-up Reveal Swipe behavior, pack generation, Rare Signal truthfulness, Highlight Card placement, Pack Summary timing, or Opening Loop reset. Tests should focus on externally visible behavior rather than animation internals.

## Type

AFK

## User stories covered

26, 27, 28, 29, 30, 31

## Acceptance criteria

- [ ] Gesture threshold checks cover Tear Gesture below-threshold return and at-or-above-threshold commit.
- [ ] Gesture threshold checks cover Reveal Swipe below-threshold return and at-or-above-threshold commit.
- [ ] Reveal progression checks cover the brief face-down moment, face-up handling, committed reveal, next-card focus, and summary after five reveals.
- [ ] Pack generation checks cover exactly five cards, optional high-rarity result, late Highlight Card placement, and no false pack-level Rare Signal.
- [ ] Opening Loop reset checks return to a sealed Gothic Pack with fresh Card Stack state.
- [ ] Progressive sensory feedback checks confirm unsupported audio or vibration does not block completion.
- [ ] Mobile browser verification confirms the prototype is visible, interactive, nonblank, and usable in portrait viewports.

## Blocked by

- #3
- #2
- #1
- #4
