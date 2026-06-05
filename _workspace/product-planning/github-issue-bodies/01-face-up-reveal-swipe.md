## What to build

Adjust Card Reveal handling so the current card uses the card back only for the first suspense moment when it is drawn into focus. Once the player begins handling the card, the left/right Reveal Swipe movement should primarily show the card face. Preserve the existing satisfying left/right movement, Elastic Return for partial swipes, committed exits in the swipe direction, and advancement to the next card.

## Type

AFK

## User stories covered

8, 9, 10, 11, 12, 13, 14, 22, 27, 28, 29

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
