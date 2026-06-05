# Pack Opening Prototype Polish Workflow Issue Backlog

This backlog translates `docs/pack-opening-polish-workflow-prd.md` into tracer-bullet implementation slices. GitHub issues have been published with the `ready-for-agent` and `afk` labels. Do not create commits, pushes, or pull requests until the user explicitly approves the relevant gate.

## Published Issues

- #1: `Guard pack generation, Highlight Card placement, and Rare Signal truthfulness`
  - https://github.com/junshelp/game_dev/issues/1
- #2: `Tighten Tear Gesture, Tear Guide, and pack-open transition feel`
  - https://github.com/junshelp/game_dev/issues/2
- #3: `Polish face-up Reveal Swipe after the initial face-down moment`
  - https://github.com/junshelp/game_dev/issues/3
- #4: `Improve Card Stack readability, Prototype Card legibility, and Pack Summary fit`
  - https://github.com/junshelp/game_dev/issues/4
- #5: `Establish behavior checks for the Pack Opening Sequence polish loop`
  - https://github.com/junshelp/game_dev/issues/5

## Proposed Breakdown

1. **Title**: Polish face-up Reveal Swipe after the initial face-down moment  
   **GitHub issue**: #3, https://github.com/junshelp/game_dev/issues/3  
   **Type**: AFK  
   **Blocked by**: None  
   **User stories covered**: 8, 9, 10, 11, 12, 13, 14, 22, 27, 28, 29

2. **Title**: Tighten Tear Gesture, Tear Guide, and pack-open transition feel  
   **GitHub issue**: #2, https://github.com/junshelp/game_dev/issues/2  
   **Type**: AFK  
   **Blocked by**: None  
   **User stories covered**: 1, 2, 3, 4, 5, 6, 27, 29

3. **Title**: Guard pack generation, Highlight Card placement, and Rare Signal truthfulness  
   **GitHub issue**: #1, https://github.com/junshelp/game_dev/issues/1  
   **Type**: AFK  
   **Blocked by**: None  
   **User stories covered**: 15, 16, 17, 18, 19, 26, 28, 30

4. **Title**: Improve Card Stack readability, Prototype Card legibility, and Pack Summary fit  
   **GitHub issue**: #4, https://github.com/junshelp/game_dev/issues/4  
   **Type**: AFK  
   **Blocked by**: #3  
   **User stories covered**: 7, 8, 14, 19, 22, 23, 24, 25, 29, 31

5. **Title**: Establish behavior checks for the Pack Opening Sequence polish loop  
   **GitHub issue**: #5, https://github.com/junshelp/game_dev/issues/5  
   **Type**: AFK  
   **Blocked by**: #3, #2, #1, #4  
   **User stories covered**: 26, 27, 28, 29, 30, 31

## Issue Drafts

### 1. Polish face-up Reveal Swipe after the initial face-down moment

Published as https://github.com/junshelp/game_dev/issues/3

## What to build

Adjust Card Reveal handling so the current card uses the card back only for the first suspense moment when it is drawn into focus. Once the player begins handling the card, the left/right Reveal Swipe movement should primarily show the card face. Preserve the existing satisfying left/right movement, Elastic Return for partial swipes, committed exits in the swipe direction, and advancement to the next card.

## Acceptance criteria

- [ ] The current card begins with a brief face-down suspense moment when it enters focus.
- [ ] The card becomes face-up before or during player handling.
- [ ] Left and right Reveal Swipe movement primarily shows the card face, not the card back.
- [ ] Releasing below the Reveal Swipe threshold returns the face-up current card without losing sequence state.
- [ ] Releasing at or above the Reveal Swipe threshold records exactly one Card Reveal.
- [ ] A committed Reveal Swipe sends the card away in the swipe direction and advances focus to the next card.
- [ ] Prototype Card art, name, and Rarity Treatment remain readable while the card is being moved.

## Blocked by

None - can start immediately

### 2. Tighten Tear Gesture, Tear Guide, and pack-open transition feel

Published as https://github.com/junshelp/game_dev/issues/2

## What to build

Polish the opening half of the Pack Opening Sequence so the sealed Gothic Pack feels touchable, the Tear Guide remains an in-world cue, and the Tear Gesture communicates both incomplete and committed outcomes clearly. The pack-open transition should move into Card Stack rise without visual jumps on portrait mobile viewports.

## Acceptance criteria

- [ ] The sealed Gothic Pack remains the first interactive object in the sequence.
- [ ] The Tear Guide is visible as a subtle cue along the top tear line and does not rely on tutorial text.
- [ ] Dragging across the top of the Gothic Pack tracks smoothly.
- [ ] Releasing below the Tear Gesture threshold uses Elastic Return.
- [ ] Releasing at or above the Tear Gesture threshold clearly opens the pack.
- [ ] The opened pack transitions into Card Stack rise without awkward jumps on tall and short portrait viewports.
- [ ] The sequence remains usable with mouse, touch, or pointer input where the browser supports it.

## Blocked by

None - can start immediately

### 3. Guard pack generation, Highlight Card placement, and Rare Signal truthfulness

Published as https://github.com/junshelp/game_dev/issues/1

## What to build

Protect the anticipation rules behind each Pack Opening Sequence. Each pack should contain exactly five Prototype Cards. When a high-rarity result exists, the pack-level Rare Signal should be truthful but non-spoiling, the Highlight Card should appear in the fourth or fifth reveal position, and the strongest Rare Signal should occur only when that high-rarity Card Reveal completes.

## Acceptance criteria

- [ ] Each Pack Opening Sequence creates exactly five Prototype Cards.
- [ ] A pack-level Rare Signal occurs only when the pack contains a high-rarity result.
- [ ] Pack-level Rare Signal does not reveal exact card identity, reveal position, or rarity tier.
- [ ] A Highlight Card appears in the fourth or fifth reveal position when present.
- [ ] The strongest Rare Signal occurs only after the high-rarity Card Reveal completes.
- [ ] Ordinary Card Reveals do not trigger the strongest Rare Signal.
- [ ] Unsupported audio or vibration does not prevent the Pack Opening Sequence from completing.

## Blocked by

None - can start immediately

### 4. Improve Card Stack readability, Prototype Card legibility, and Pack Summary fit

Published as https://github.com/junshelp/game_dev/issues/4

## What to build

Polish the visual readability of the full reveal loop. The Card Stack should make the current card obvious, Prototype Card art and names should remain readable on mobile, Rarity Treatment should be legible without relying on text, and Pack Summary should show all five Card Reveals while staying focused on review and the next Opening Loop.

## Acceptance criteria

- [ ] Card Stack rise communicates that five Card Reveals are available.
- [ ] The current card is visually unmistakable after each reveal.
- [ ] Prototype Card art and names remain readable in portrait mobile viewports.
- [ ] Gold border and sparkle Rarity Treatment remain visible for rare cards during reveal and summary.
- [ ] Pack Summary appears only after five committed Card Reveals.
- [ ] Pack Summary shows all five revealed cards.
- [ ] Pack Summary does not introduce collection management, deckbuilding, selling, upgrading, or currency actions.
- [ ] Starting another Opening Loop returns to a sealed Gothic Pack and clears prior summary state.

## Blocked by

- #3

### 5. Establish behavior checks for the Pack Opening Sequence polish loop

Published as https://github.com/junshelp/game_dev/issues/5

## What to build

Add a minimal verification pattern for the polished prototype so future tuning does not quietly break gesture thresholds, face-up Reveal Swipe behavior, pack generation, Rare Signal truthfulness, Highlight Card placement, Pack Summary timing, or Opening Loop reset. Tests should focus on externally visible behavior rather than animation internals.

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

## Approval Gate

GitHub issues have been created. The next required approval is user approval before creating a commit.
