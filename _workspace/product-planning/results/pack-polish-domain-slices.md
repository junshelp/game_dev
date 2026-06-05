# Pack Polish Domain Slice Recommendations

## Scope Read

Inspected only the task-listed files:

- `CONTEXT.md`
- `docs/pack-opening-polish-workflow-prd.md`
- `docs/pack-opening-prd.md`
- `docs/issues/pack-opening-backlog.md`
- `prototype/index.html`
- `prototype/app.js`
- `prototype/styles.css`

## Current Prototype Notes

- The prototype already contains a complete Pack Opening Sequence path: sealed Gothic Pack, Tear Guide, Tear Gesture, Card Stack, Reveal Swipe, Rare Signal, Pack Summary, and Opening Loop reset.
- Pack generation already returns five Prototype Cards and places the rare demon card as a Highlight Card in the fourth or fifth position when present.
- The current Reveal Swipe maps drag progress directly to a 3D flip from card back to card front, then exits at `180deg`. This preserves the original PRD behavior but conflicts with the latest feedback: after the first face-down suspense moment, left/right card movement should showcase the card face.
- The existing backlog is implementation-oriented for building the first prototype. The polish backlog should be narrower and should preserve what already feels good while making behavior more trustworthy and verifiable.

## Suggested Vertical Slices

1. **Title**: Polish face-up Reveal Swipe after the initial face-down moment  
   **Type**: AFK  
   **Blocked by**: None  
   **User stories covered**: Polish PRD 8, 9, 10, 11, 12, 13, 14, 22, 27, 28, 29  
   **What it validates**: A player sees a card back only when the current card first enters focus, then handles the card face during left/right Reveal Swipe movement. Partial swipes still use Elastic Return, and committed swipes still exit in the chosen direction and advance the Card Stack.  
   **Acceptance focus**:
   - The current card begins with a brief face-down suspense moment.
   - The card face becomes visible before or during player handling.
   - Left and right Reveal Swipe movement primarily shows the card face, not the back.
   - Partial Reveal Swipe returns the face-up current card without losing sequence state.
   - Committed Reveal Swipe records exactly one Card Reveal and advances to the next card.

2. **Title**: Tighten Tear Gesture, Tear Guide, and pack-open transition feel  
   **Type**: AFK  
   **Blocked by**: None  
   **User stories covered**: Polish PRD 1, 2, 3, 4, 5, 6, 27, 29  
   **What it validates**: The sealed Gothic Pack still starts the Pack Opening Sequence, the Tear Guide remains in-world rather than textual, and committed or uncommitted Tear Gesture outcomes are readable on mobile.  
   **Acceptance focus**:
   - The Tear Guide remains a subtle visual cue along the top tear line.
   - Dragging across the top of the Gothic Pack tracks smoothly.
   - Below-threshold Tear Gesture uses Elastic Return.
   - Above-threshold Tear Gesture clearly opens the pack and transitions into Card Stack rise.
   - The pack-open transition avoids visual jumps on tall and short portrait viewports.

3. **Title**: Guard pack generation, Highlight Card placement, and Rare Signal truthfulness  
   **Type**: AFK  
   **Blocked by**: None  
   **User stories covered**: Polish PRD 15, 16, 17, 18, 19, 26, 28, 30  
   **What it validates**: Pack generation stays aligned with Idle OCG anticipation rules: exactly five Prototype Cards, optional high-rarity result, late Highlight Card placement, truthful non-spoiling pack-level Rare Signal, and stronger card-level Rare Signal only when the high-rarity Card Reveal completes.  
   **Acceptance focus**:
   - Each Pack Opening Sequence creates exactly five Prototype Cards.
   - A pack-level Rare Signal appears only when a high-rarity result exists.
   - Pack-level Rare Signal does not expose exact card identity, reveal position, or rarity tier.
   - Highlight Card appears in fourth or fifth position when present.
   - The strongest Rare Signal occurs only after the high-rarity Card Reveal completes.
   - Unsupported vibration or audio does not block completion.

4. **Title**: Improve Card Stack readability, Prototype Card legibility, and Pack Summary fit  
   **Type**: AFK  
   **Blocked by**: 1  
   **User stories covered**: Polish PRD 7, 8, 14, 19, 22, 23, 24, 25, 29, 31  
   **What it validates**: The player can clearly follow which card is current, read Prototype Card names and Rarity Treatment on a mobile viewport, review all five Card Reveals in Pack Summary, and start the next Opening Loop without drifting into collection management.  
   **Acceptance focus**:
   - Card Stack rise communicates that five Card Reveals are available.
   - The current card is unmistakable after each reveal.
   - Prototype Card name, art, and Rarity Treatment remain readable in portrait mobile viewports.
   - Pack Summary shows all five revealed cards and preserves rare distinction.
   - Pack Summary contains only review and next Opening Loop behavior.
   - Starting another Opening Loop returns to a sealed Gothic Pack and clears prior summary state.

5. **Title**: Establish behavior checks for the Pack Opening Sequence polish loop  
   **Type**: AFK  
   **Blocked by**: 1, 2, 3, 4  
   **User stories covered**: Polish PRD 26, 27, 28, 29, 30, 31  
   **What it validates**: The tuned prototype can keep being adjusted without quietly breaking gesture thresholds, face-up Reveal Swipe behavior, Rare Signal truthfulness, Highlight Card placement, Pack Summary timing, or Opening Loop reset.  
   **Acceptance focus**:
   - Gesture threshold checks cover Tear Gesture and Reveal Swipe below/above threshold behavior.
   - Reveal progression checks cover initial face-down moment, face-up handling, committed reveal, next-card focus, and summary after five reveals.
   - Pack generation checks cover five cards, optional high-rarity result, Highlight Card placement, and no false Rare Signal.
   - Opening Loop reset checks return to sealed Gothic Pack with fresh Card Stack state.
   - Mobile browser verification confirms the prototype is visible, interactive, nonblank, and usable in portrait viewports.

## Risks And Open Questions

- **Face-up movement timing**: The PRD says the card becomes face-up "before or during" handling. The implementation slice should choose the exact timing: automatic flip when the card enters focus, flip on initial touch, or flip after a very small drag distance. This is product-feel sensitive but can be implemented AFK if the orchestrator picks a default.
- **Glossary drift**: `CONTEXT.md` still defines Reveal Swipe as a drag on a face-down card that gradually turns it over. The new feedback modifies prototype behavior. Do not add tooling terms to `CONTEXT.md`; if glossary changes are desired later, treat that as a separate domain-language approval.
- **Test surface**: The prototype currently exposes `window.PackOpeningState`, which can support behavior checks, but deeper testability may require extracting pack generation and sequence transitions behind smaller interfaces.
- **Existing backlog overlap**: The old backlog already has build-from-scratch slices. The polish backlog should not republish those as if the prototype is unbuilt; it should target current behavior.

## Publishing Status

- No GitHub issues created.
- No commits created.
- No pushes performed.
- No pull request opened.
