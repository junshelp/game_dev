# Pack Opening Prototype Polish Workflow PRD

## Problem Statement

The current Idle OCG prototype already demonstrates the main Pack Opening Sequence: a Gothic Pack, Tear Gesture, Card Stack, Reveal Swipe, Rare Signal, Pack Summary, and repeatable Opening Loop. The next problem is not inventing a new feature set. The project needs a polish workflow that turns the prototype from "functionally present" into something reliable enough to judge for feel.

The player should be able to repeat Pack Opening Sequences on a portrait mobile screen and trust what the prototype communicates. Gestures should feel intentional, incomplete gestures should recover through Elastic Return, Rare Signal should remain truthful, and the summary should make the five Card Reveals easy to review without drifting into collection management.

The developer also needs the prototype to be easier to tune. The interaction rules, pack generation, sensory feedback, and verification checks should be clear enough that future changes improve the emotional loop without quietly breaking Highlight Card placement, gesture thresholds, or the Opening Loop.

## Solution

Polish the existing Pack Opening Sequence around four outcomes: tactile feel, truthful anticipation, mobile presentation, and verifiable behavior.

The player will still begin on a sealed Gothic Pack. The Tear Guide should read as an in-world cue along the tear line, and the Tear Gesture should feel responsive from first drag through commit or Elastic Return. When the pack opens, the Card Stack should rise cleanly and preserve suspense. The card should appear face-down only at the first moment it is drawn into focus, then reveal to the front before or during the player's handling so the left/right card movement showcases the card face rather than the back. Reveal Swipe should make each Card Reveal feel connected to the player's finger, with a confident commit threshold and smooth exit into the next card.

Rare Signal should be tightened so that it remains truthful and non-spoiling. A pack-level Rare Signal should only indicate that a high-rarity result exists somewhere in the pack. The Highlight Card should continue to appear late in the Card Stack, and the strongest Rare Signal should land only when the high-rarity Card Reveal completes.

The Pack Summary should remain short and focused: show the five revealed Prototype Cards, keep rare cards visually distinct, and offer the next Opening Loop. The polish workflow should also establish behavioral checks for the deep interaction model so the prototype can be tuned without relying only on manual playthroughs.

## User Stories

1. As a mobile player, I want the sealed Gothic Pack to feel immediately touchable, so that I want to begin the Pack Opening Sequence.
2. As a mobile player, I want the Tear Guide to be visible but not textual, so that it helps me without breaking the dark fantasy presentation.
3. As a mobile player, I want the Tear Gesture to track my drag smoothly, so that opening the pack feels personally caused.
4. As a mobile player, I want a partial Tear Gesture to recover with Elastic Return, so that trying the interaction feels forgiving.
5. As a mobile player, I want a committed Tear Gesture to clearly tear the pack open, so that the transition into the Card Stack feels earned.
6. As a mobile player, I want the pack opening motion to avoid visual jumps, so that the prototype feels deliberate rather than rough.
7. As a mobile player, I want the Card Stack to rise in a readable way, so that I understand the pack contains five Card Reveals.
8. As a mobile player, I want the current card to be unmistakable, so that I know where to perform the next Reveal Swipe.
9. As a mobile player, I want Reveal Swipe to work left or right, so that the sequence feels comfortable in either hand.
10. As a mobile player, I want the current card to show its front while I move it left or right, so that the satisfying card movement showcases what I pulled.
11. As a mobile player, I want the card back to appear only when the card is first drawn into focus, so that the Card Reveal still has a moment of suspense without making the swipe feel like moving an unknown back.
12. As a mobile player, I want a partial Reveal Swipe to recover with Elastic Return, so that I can play with the card before committing.
13. As a mobile player, I want a committed Reveal Swipe to send the card away in the same direction, so that the sequence has a satisfying rhythm.
14. As a mobile player, I want the next card to move into focus quickly after a reveal, so that the Pack Opening Sequence keeps momentum.
15. As a mobile player, I want the pack-level Rare Signal to be truthful, so that I learn to trust the prototype's anticipation cues.
16. As a mobile player, I want the pack-level Rare Signal to avoid revealing the exact card, position, or rarity tier, so that suspense survives until the later Card Reveals.
17. As a mobile player, I want the Highlight Card to appear in the fourth or fifth position, so that the Card Stack keeps tension deep into the pack.
18. As a mobile player, I want a high-rarity Card Reveal to feel stronger than an ordinary reveal, so that the payoff matches the anticipation.
19. As a mobile player, I want gold borders and sparkle effects to make rare cards instantly legible, so that Rarity Treatment does not depend on reading text.
20. As a mobile player, I want sound to support tear, stack, ordinary reveal, and rare reveal moments, so that the sequence feels physical.
21. As a mobile player, I want vibration to enhance rare moments only when supported, so that unsupported devices still play correctly.
22. As a mobile player, I want Prototype Card names and art to remain readable on a mobile viewport, so that each Card Reveal feels collectible.
23. As a mobile player, I want the Pack Summary to show all five revealed cards, so that I can review what happened before opening another pack.
24. As a mobile player, I want the Pack Summary to avoid collection-management actions, so that the prototype stays focused on reveal pleasure.
25. As a mobile player, I want the next Opening Loop to reset clearly, so that repeated testing feels immediate.
26. As a developer, I want pack generation rules to be testable, so that Highlight Card placement and Rare Signal truthfulness do not regress.
27. As a developer, I want gesture thresholds to be testable as behavior, so that tuning does not accidentally change commit rules.
28. As a developer, I want the Pack Opening Sequence state model to be isolated enough to test, so that UI polish can happen safely.
29. As a developer, I want mobile viewport checks, so that card layout, text, controls, and summary remain usable on portrait screens.
30. As a developer, I want sensory feedback to degrade gracefully, so that browsers without audio context support or vibration still complete the sequence.
31. As a developer, I want polish changes to preserve the existing scope, so that this workflow does not become idle economy, deckbuilding, or final card production work.

## Implementation Decisions

- Build on the existing portrait mobile web prototype instead of replacing the prototype architecture.
- Keep the first screen as the Pack Opening Sequence, not a landing page or explanation screen.
- Treat the Pack Opening Sequence state model as the main deep module: unopened pack, tearing, opened pack, Card Stack active, revealing, exiting, summary, and reset.
- Treat pack generation as a separate deep module with a simple interface that returns five Prototype Cards, whether a high-rarity result exists, and where the Highlight Card appears.
- Preserve five Card Reveals per Pack Opening Sequence.
- Preserve late Highlight Card placement in the fourth or fifth reveal position when a high-rarity result is present.
- Keep pack-level Rare Signal truthful and non-spoiling.
- Keep the strongest Rare Signal attached to completed high-rarity Card Reveal, not to pack opening alone.
- Tune Tear Gesture and Reveal Swipe thresholds as named behavior, not incidental animation values.
- Use Elastic Return for uncommitted Tear Gesture and Reveal Swipe attempts.
- Preserve left and right Reveal Swipe as valid interactions.
- Change the reveal feel so the active card is face-down only when first drawn into focus, then becomes face-up for the left/right movement.
- Preserve the satisfying left/right card movement while making the card face, not the card back, the main object being moved.
- Keep rare cards visually distinct through Rarity Treatment that works before reading card labels.
- Keep Monster Girl Cards as original adult-looking gothic or dark fantasy Prototype Cards.
- Keep the Pack Summary focused on the five revealed cards and the next Opening Loop.
- Avoid adding collection inventory, deckbuilding, card upgrades, selling, currencies, or idle reward timing.
- Keep audio and optional vibration as progressive enhancement: failure to initialize sensory feedback must not block interaction.
- Improve mobile fit by checking both tall and short portrait viewports.
- Improve desktop fit only enough to present the mobile prototype sensibly; desktop is not a separate experience.
- Prefer stable, testable interfaces for gesture thresholds, pack generation, reveal progression, and loop reset.
- Do not introduce Harness or tooling vocabulary into the Idle OCG glossary as part of this polish work.

## Testing Decisions

- Test external behavior rather than animation internals.
- Test the Pack Opening Sequence state model as the central deep module.
- Test pack generation rules: exactly five cards, optional high-rarity result, late Highlight Card placement, and no false pack-level Rare Signal.
- Test gesture thresholds for Tear Gesture and Reveal Swipe: below threshold returns, at or above threshold commits.
- Test reveal progression: the current card starts with a brief face-down moment, becomes face-up for player handling, a committed Reveal Swipe records one Card Reveal, advances to the next card, and reaches Pack Summary only after five reveals.
- Test Opening Loop reset: starting another loop returns to a sealed Gothic Pack, clears the prior Pack Summary, and creates a fresh Card Stack.
- Test progressive sensory feedback behavior: unsupported audio or vibration does not prevent the Pack Opening Sequence from completing.
- Use mobile browser verification for portrait layout, card readability, Tear Guide visibility, Reveal Swipe usability, Pack Summary fit, and next-loop reset.
- Use visual verification for nonblank Gothic Pack, card back, Prototype Card art, gold rare border, sparkle overlay, and summary cards.
- Because the prototype currently has no established automated test suite, the first polish slice should establish a minimal testing pattern for the interaction model and browser checks.

## Out of Scope

- Full idle reward economy.
- Timed pack generation.
- Shop, gacha pricing, currencies, or monetization.
- Deckbuilding.
- OCG battle rules.
- Card balancing.
- Card upgrade, sell, dust, or merge systems.
- Persistent collection inventory.
- Login or account state.
- Production card database.
- Final release art.
- Replacing the current prototype with a framework migration.
- Publishing GitHub issues.
- Drafting implementation issue slices before this PRD is approved.
- Creating commits, pushes, or pull requests.

## Further Notes

- This PRD is a sample Codex Harness product-planning run artifact and intentionally stops at the PRD draft.
- The current prototype already covers the core emotional loop, so the polish workflow should protect what works while making the experience more trustworthy and easier to tune.
- Approval is required before converting this PRD into vertical issue slices.
