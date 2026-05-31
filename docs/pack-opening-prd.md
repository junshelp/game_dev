# Pack Opening Sequence PRD

## Problem Statement

The player is making an Idle OCG where the core pleasure is waiting for packs and then opening them. The project needs a focused prototype that validates whether opening a pack, revealing cards one by one, and receiving rare-card signals feels satisfying on a portrait mobile screen.

The prototype should not prove the full idle economy, deckbuilding, card rules, or collection systems. It should prove the emotional loop: anticipation, touch, reveal, payoff, and immediate repeatability.

## Solution

Build a portrait mobile web prototype for the Pack Opening Sequence.

The player sees a Gothic Pack, follows a subtle Tear Guide, performs a left-to-right Tear Gesture across the top tear line, and watches a five-card Card Stack rise from the opened pack. Each card starts face-down. The player performs a left or right Reveal Swipe, which gradually flips the card in 3D. Once committed, the card exits in the swipe direction and the next card moves into focus.

If the pack contains a Highlight Card, the pack emits a truthful but non-spoiling Rare Signal when torn. The Highlight Card appears in the fourth or fifth reveal position. When a high-rarity Card Reveal completes, the prototype plays the strongest Rare Signal using visual effects, sound, and optional vibration where supported.

After all five cards are revealed, the player sees a Pack Summary with the five cards and can start another Opening Loop.

## User Stories

1. As a mobile player, I want to see a sealed Gothic Pack, so that the reward feels like it belongs to a dark fantasy card world.
2. As a mobile player, I want a subtle Tear Guide, so that I understand how to open the pack without reading tutorial text.
3. As a mobile player, I want to drag across the top of the pack, so that I feel personally responsible for opening it.
4. As a mobile player, I want an incomplete Tear Gesture to recover with Elastic Return, so that experimentation feels tactile rather than punitive.
5. As a mobile player, I want the pack to visibly tear open after a committed Tear Gesture, so that the action feels consequential.
6. As a mobile player, I want a light Rare Signal when a rare-containing pack opens, so that anticipation starts before the individual cards are revealed.
7. As a mobile player, I want the Rare Signal to be truthful, so that repeated play builds trust in the effect.
8. As a mobile player, I want the Rare Signal to avoid revealing the exact card, rarity tier, or position, so that the Card Stack keeps tension.
9. As a mobile player, I want five face-down cards to rise from the opened pack, so that I can enjoy a short reveal sequence.
10. As a mobile player, I want to Reveal Swipe each card left or right, so that the reveal rhythm feels comfortable in either hand.
11. As a mobile player, I want the card to flip in 3D as I swipe, so that card discovery feels tied to my finger.
12. As a mobile player, I want an incomplete Reveal Swipe to recover with Elastic Return, so that the card remains playful to manipulate.
13. As a mobile player, I want a committed Reveal Swipe to send the card offscreen in the same direction, so that the sequence flows naturally.
14. As a mobile player, I want the next card to move into focus after the previous card exits, so that I always understand what to do next.
15. As a mobile player, I want rare cards to use gold borders and sparkle effects, so that they feel immediately more valuable.
16. As a mobile player, I want the Highlight Card to appear late in the Card Stack, so that the final reveals keep suspense.
17. As a mobile player, I want the strongest Rare Signal when the rare card is fully revealed, so that the payoff feels earned.
18. As a mobile player, I want sound for tearing, card movement, normal reveals, and rare reveals, so that the sequence feels physical and rewarding.
19. As a mobile player, I want vibration only when supported, so that haptics enhance the experience without breaking unsupported browsers.
20. As a mobile player, I want Monster Girl Cards with a coherent gothic/dark fantasy tone, so that the cards feel collectible as a set.
21. As a mobile player, I want the Prototype Cards to be visually expressive without full OCG rules text, so that the prototype focuses on reveal pleasure.
22. As a mobile player, I want a Pack Summary after five reveals, so that I can briefly review what I opened.
23. As a mobile player, I want a clear way to open another pack, so that the Opening Loop can be tested repeatedly.
24. As a developer, I want the prototype to run in a browser, so that touch interaction and animation tuning can happen quickly.
25. As a developer, I want the reveal state to be isolated from presentation details, so that the sequence can be tested and tuned safely.
26. As a developer, I want generated card art to live as replaceable assets, so that the prototype can improve visually without changing the interaction model.

## Implementation Decisions

- Build a web-based portrait mobile prototype.
- The initial screen is the Pack Opening Sequence, not a landing page.
- Desktop view may present the prototype centered as a phone-sized experience.
- Use a Gothic Pack with dark material, metallic seals, wax marks, occult ornament, and colored magical light.
- Use a subtle Tear Guide along the top tear line instead of tutorial text.
- The Tear Gesture is a left-to-right drag across the top of the pack.
- The Tear Gesture commits only after a threshold; otherwise it uses Elastic Return.
- Each pack contains a Card Stack of five cards.
- Each card reveal is controlled by a left or right Reveal Swipe.
- Reveal Swipe uses swipe progress to drive a 3D card flip.
- Once a Reveal Swipe commits, the card exits in the swipe direction.
- If a pack has a Highlight Card, it appears in the fourth or fifth position.
- A pack-level Rare Signal is truthful: it means a high-rarity result exists somewhere in the pack.
- Pack-level Rare Signal does not reveal exact card identity, position, or rarity tier.
- Card-level Rare Signal is strongest when a high-rarity Card Reveal completes.
- Rare cards use gold borders and sparkle effects over the card image.
- Prototype Cards are Monster Girl Cards: original adult-looking gothic or dark fantasy heroines inspired by vampires, succubi, dullahans, zombies, and demon girls.
- Prototype Cards do not need final OCG rules, balanced stats, deck behavior, or collection persistence.
- Include sound cues for pack tearing, card stack movement, normal reveal, and rare reveal.
- Use vibration only when supported by the browser/device.
- Show a Pack Summary after all five Card Reveals.
- The Pack Summary only shows the five revealed cards and starts the next Opening Loop.

## Testing Decisions

- Test external behavior rather than animation internals.
- Test the Pack Opening Sequence state machine as a deep module: unopened pack, tearing, opened pack, card stack active, card revealing, card exiting, summary.
- Test gesture thresholds as behavior: below threshold returns, above threshold commits.
- Test that a Highlight Card appears only in the fourth or fifth reveal position when present.
- Test that a pack-level Rare Signal is emitted only when the pack contains a high-rarity result.
- Test that Pack Summary appears only after five committed Card Reveals.
- Test that Opening Loop resets the prototype to a new unopened pack.
- Use browser interaction checks for mobile-sized viewport behavior, including tear drag, reveal swipes, Elastic Return, and summary reset.
- Use visual verification for nonblank card assets, gold rare borders, sparkle overlays, and portrait layout fit.
- There is no prior app test structure in the current repo, so the first implementation should establish the testing pattern.

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
- Production-ready card database.
- Final release art.
- Multiplayer or social features.

## Further Notes

- The prototype exists to validate feel before larger game systems are built.
- The key loop is waiting payoff, not card utility.
- The Rare Signal should create trust over repeated openings; it should not become fake decoration.
- No ADR is needed yet for the web prototype choice because it is easy to reverse at this stage.
