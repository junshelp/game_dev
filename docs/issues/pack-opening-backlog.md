# Pack Opening Sequence Issue Backlog

This backlog translates the PRD into tracer-bullet implementation slices. The repository does not currently expose an issue tracker or triage label vocabulary, so these are written as ready-to-publish issue drafts.

## Proposed Breakdown

1. **Title**: Create the portrait mobile prototype shell
   **Type**: AFK
   **Blocked by**: None
   **User stories covered**: 24

2. **Title**: Implement the Gothic Pack with Tear Guide and Tear Gesture
   **Type**: AFK
   **Blocked by**: 1
   **User stories covered**: 1, 2, 3, 4, 5

3. **Title**: Raise a five-card Card Stack after opening the pack
   **Type**: AFK
   **Blocked by**: 2
   **User stories covered**: 9, 14

4. **Title**: Implement per-card Reveal Swipe with 3D flip and Elastic Return
   **Type**: AFK
   **Blocked by**: 3
   **User stories covered**: 10, 11, 12, 13, 14, 25

5. **Title**: Add Prototype Card assets and gothic Monster Girl Card presentation
   **Type**: HITL
   **Blocked by**: 1
   **User stories covered**: 15, 20, 21, 26

6. **Title**: Add truthful Rare Signal and late Highlight Card placement
   **Type**: AFK
   **Blocked by**: 3, 5
   **User stories covered**: 6, 7, 8, 15, 16, 17

7. **Title**: Add pack, reveal, and rare feedback audio with optional vibration
   **Type**: AFK
   **Blocked by**: 2, 4, 6
   **User stories covered**: 18, 19

8. **Title**: Add Pack Summary and repeatable Opening Loop
   **Type**: AFK
   **Blocked by**: 4, 6
   **User stories covered**: 22, 23

9. **Title**: Add behavioral tests and mobile browser verification
   **Type**: AFK
   **Blocked by**: 2, 4, 6, 8
   **User stories covered**: 24, 25

## Issue Drafts

### 1. Create the portrait mobile prototype shell

## What to build

Create a web-based prototype shell for the Pack Opening Sequence. The first screen should be the prototype experience itself, sized for a portrait mobile viewport and centered sensibly on desktop.

## Acceptance criteria

- [ ] The app runs locally in a browser.
- [ ] The first visible screen is a portrait mobile prototype surface, not a marketing or landing page.
- [ ] Desktop view presents the same mobile-first experience without stretching the interaction area awkwardly.
- [ ] The project has a clear place for interaction logic, visual components, assets, and tests.

## Blocked by

None - can start immediately

### 2. Implement the Gothic Pack with Tear Guide and Tear Gesture

## What to build

Add the sealed Gothic Pack presentation and make it open through a left-to-right Tear Gesture across the top tear line. Include a subtle Tear Guide that communicates direction without tutorial text. Incomplete gestures should use Elastic Return.

## Acceptance criteria

- [ ] The sealed pack visually reads as gothic/dark fantasy.
- [ ] A subtle in-world Tear Guide indicates the left-to-right gesture direction.
- [ ] Dragging across the top tear line tracks the player's pointer or touch movement.
- [ ] Releasing below the commit threshold returns the pack to its sealed state with Elastic Return.
- [ ] Releasing past the commit threshold opens the pack and advances the sequence.

## Blocked by

- Issue 1

### 3. Raise a five-card Card Stack after opening the pack

## What to build

After a successful Tear Gesture, animate a Card Stack of five face-down cards rising from the opened pack. The top card should become the current reveal target.

## Acceptance criteria

- [ ] Exactly five cards are created for each Pack Opening Sequence.
- [ ] Cards appear face-down after the pack opens.
- [ ] The Card Stack rises from the opened pack with a readable transition.
- [ ] The current reveal target is visually clear.
- [ ] The sequence does not skip directly to card fronts or summary.

## Blocked by

- Issue 2

### 4. Implement per-card Reveal Swipe with 3D flip and Elastic Return

## What to build

Allow the current face-down card to be revealed with a left or right Reveal Swipe. Swipe progress should drive a 3D card flip. Incomplete swipes return with Elastic Return. Committed swipes reveal the card, then send it offscreen in the swipe direction and focus the next card.

## Acceptance criteria

- [ ] Left and right Reveal Swipes are both valid.
- [ ] Swipe progress gradually changes the card from back to front using a 3D flip.
- [ ] Releasing below the reveal threshold returns the card to face-down focus.
- [ ] Releasing past the reveal threshold completes the Card Reveal.
- [ ] A revealed card exits in the same direction as the committed swipe.
- [ ] The next card moves into focus after the previous card exits.

## Blocked by

- Issue 3

### 5. Add Prototype Card assets and gothic Monster Girl Card presentation

## What to build

Create or integrate generated Prototype Card art for original adult-looking Monster Girl Cards in a coherent gothic/dark fantasy style. Include at least the five archetypes discussed: vampire, succubus, dullahan, zombie, and demon girl. Rare cards should support gold border and sparkle treatment.

## Acceptance criteria

- [ ] The prototype includes replaceable card image assets.
- [ ] Card art depicts original adult-looking gothic/dark fantasy Monster Girl Cards.
- [ ] The initial card set includes vampire, succubus, dullahan, zombie, and demon girl concepts.
- [ ] Card presentation does not rely on final OCG rules text.
- [ ] Rare card presentation supports gold borders and sparkle overlays.
- [ ] Generated art is visually coherent enough to feel like one card world.

## Blocked by

- Issue 1

### 6. Add truthful Rare Signal and late Highlight Card placement

## What to build

Add high-rarity pack behavior. When a pack contains a Highlight Card, the opened pack should emit a truthful, non-spoiling Rare Signal. The Highlight Card should appear in the fourth or fifth reveal position. Completing that Card Reveal should trigger the strongest Rare Signal.

## Acceptance criteria

- [ ] Packs can be generated with or without a high-rarity result.
- [ ] Pack-level Rare Signal occurs only when the pack contains a high-rarity result.
- [ ] Pack-level Rare Signal does not reveal the exact card, position, or rarity tier.
- [ ] When present, the Highlight Card appears in the fourth or fifth reveal position.
- [ ] Rare card reveals use gold border and sparkle effects.
- [ ] Completing a high-rarity Card Reveal triggers a stronger celebration than normal cards.

## Blocked by

- Issue 3
- Issue 5

### 7. Add pack, reveal, and rare feedback audio with optional vibration

## What to build

Add sensory feedback for the Pack Opening Sequence: pack tear, Card Stack movement, normal reveal, and rare reveal sounds. Add optional vibration for rare reveal when supported by the browser/device.

## Acceptance criteria

- [ ] Pack opening has a distinct tear or magical seal sound.
- [ ] Card Stack movement has a subtle movement sound.
- [ ] Normal Card Reveal has a modest reveal sound.
- [ ] Rare Card Reveal has a stronger sound with clear payoff.
- [ ] Vibration is attempted only when supported.
- [ ] Unsupported vibration does not break the sequence.

## Blocked by

- Issue 2
- Issue 4
- Issue 6

### 8. Add Pack Summary and repeatable Opening Loop

## What to build

After all five Card Reveals complete, show a Pack Summary with the five revealed cards and a single way to start another Opening Loop.

## Acceptance criteria

- [ ] Pack Summary appears only after five committed Card Reveals.
- [ ] Pack Summary shows all five revealed cards.
- [ ] Rare cards remain visually distinct in the summary.
- [ ] The summary does not introduce collection management, deckbuilding, selling, or upgrading.
- [ ] Starting another Opening Loop resets the sequence to a new sealed pack.

## Blocked by

- Issue 4
- Issue 6

### 9. Add behavioral tests and mobile browser verification

## What to build

Add tests and verification for the externally visible behavior of the Pack Opening Sequence. Cover gesture thresholds, state transitions, Highlight Card placement, Rare Signal truthfulness, Pack Summary timing, and Opening Loop reset. Verify the mobile viewport experience in a browser.

## Acceptance criteria

- [ ] Gesture threshold behavior is tested for Tear Gesture and Reveal Swipe.
- [ ] Pack Opening Sequence state transitions are tested through summary.
- [ ] Highlight Card placement is tested for fourth or fifth reveal position.
- [ ] Rare Signal truthfulness is tested.
- [ ] Opening Loop reset is tested.
- [ ] A mobile-sized browser check confirms the prototype is visible, interactive, and not blank.
- [ ] Visual verification confirms card assets, rare borders, sparkle overlays, and portrait layout fit.

## Blocked by

- Issue 2
- Issue 4
- Issue 6
- Issue 8
