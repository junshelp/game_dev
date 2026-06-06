# Isometric Idle Expedition Overlay PRD

## Problem Statement

Idle OCG has a strong Pack Opening Sequence, but the larger idle experience is still abstract. The player needs a visible place where waiting feels alive while they work, without turning the game into a directly controlled dungeon RPG.

The next prototype should prove whether Idle OCG can live as a small desktop companion: a Borderless Expedition Overlay above the taskbar where a character automatically explores a gothic dungeon, Gothic Pack Earning progresses over time, and a Pack Ready Signal invites the player into an Expanded Pack Opening View.

The prototype should keep the emotional center on anticipation and pack opening. It should not become a combat game, inventory game, deck editor, or full desktop app implementation.

## Solution

Build a desktop-oriented prototype for an Isometric Idle Expedition that appears as a taskbar-adjacent Borderless Expedition Overlay. The overlay presents a Procedural Expedition Layout with rooms, corridors, props, and an automatic walking path. A small character moves through the scene without player control. The dungeon gives the player something pleasant to watch while waiting, but Gothic Pack Earning remains time-based.

The overlay includes compact navigation controls anchored near the taskbar: a Pack Navigation Button, a Pack Ready Signal when packs are ready, a placeholder Collection Codex button, a Next Pack progress indicator, and a collapse affordance. The player does not direct movement, attacks, routes, or skills.

When the player selects the Pack Navigation Button with a ready pack, the overlay expands upward into an Expanded Pack Opening View. This medium view preserves the taskbar-adjacent UI position while giving the Gothic Pack enough room for the existing Tear Gesture, Card Stack, Reveal Swipe, Rare Signal, Card Reveals, and Pack Summary flow. After the Pack Opening Sequence completes, the prototype returns to the compact Expedition View.

The visual target is the pair of prototype reference images stored in `prototype/assets/`: `borderless-expedition-overlay-reference.jpg` for the taskbar-adjacent idle composition, and `expanded-pack-opening-overlay-concept.png` for the expanded pack-opening composition. These are prototype targets, not pixel-perfect specs.

## User Stories

1. As a desktop player, I want Idle OCG to sit above my taskbar, so that I can keep it present while working.
2. As a desktop player, I want the idle surface to avoid normal app chrome, so that it feels like a companion rather than another work window.
3. As a desktop player, I want a small window fallback, so that the prototype remains usable when true overlay behavior is unavailable.
4. As a desktop player, I want to see a gothic isometric dungeon, so that waiting for packs feels connected to the card world.
5. As a desktop player, I want the character to explore automatically, so that the game remains idle and does not interrupt my work.
6. As a desktop player, I want to avoid movement controls, attack buttons, or skill bars, so that I do not feel pressured to actively play a dungeon RPG.
7. As a desktop player, I want the dungeon layout to vary, so that Expedition Watching does not feel static.
8. As a desktop player, I want rooms, corridors, props, and walking paths to appear procedurally arranged, so that each idle session has a slightly different scene.
9. As a desktop player, I want the character to walk along visible paths, so that the expedition looks purposeful without needing commands.
10. As a desktop player, I want ambient monsters and dungeon events to read as flavor, so that they enrich the scene without becoming required combat.
11. As a desktop player, I want Gothic Pack Earning to progress over time, so that pack rewards preserve the idle premise.
12. As a desktop player, I want dungeon events to be future-friendly, so that they can later shorten or improve pack earning without being required now.
13. As a desktop player, I want a compact Next Pack progress indicator, so that I can understand how close the next Gothic Pack is.
14. As a desktop player, I want a Pack Ready Signal when a pack is ready, so that I can notice it without a forced popup.
15. As a desktop player, I want the Pack Ready Signal to appear on the Pack Navigation Button, so that I know exactly where to act.
16. As a desktop player, I want the pack notification to avoid interrupting me, so that I can choose when to take a work break.
17. As a desktop player, I want a Pack Navigation Button, so that I can enter the Pack Opening Sequence when I am ready.
18. As a desktop player, I want the Collection Codex button to exist only as a placeholder, so that the prototype acknowledges future collection review without adding scope now.
19. As a desktop player, I want compact UI controls to remain anchored near the taskbar, so that the experience feels stable.
20. As a desktop player, I want the overlay to expand upward for pack opening, so that the reward moment gets focus without fully taking over my screen.
21. As a desktop player, I want the Expanded Pack Opening View to preserve the bottom UI position, so that the transition feels connected to the compact overlay.
22. As a desktop player, I want the Gothic Pack to be large enough in the expanded view, so that the Tear Gesture still feels deliberate and tactile.
23. As a desktop player, I want the existing Pack Opening Sequence feel to remain intact, so that opening a pack remains the central pleasure.
24. As a desktop player, I want the expanded view to return to the compact overlay after opening, so that I can resume Expedition Watching.
25. As a desktop player, I want the prototype to avoid fullscreen takeover, so that it remains compatible with working.
26. As a developer, I want a simple time-based pack clock, so that Gothic Pack Earning can be tested without building a full idle economy.
27. As a developer, I want a deterministic procedural layout generator, so that layout behavior can be tested with seeds.
28. As a developer, I want actor movement separated from rendering, so that automatic walking can be tuned safely.
29. As a developer, I want a Canvas 2D isometric renderer, so that the prototype can draw a compact procedural dungeon without a 3D engine.
30. As a developer, I want DOM UI over the Canvas scene, so that buttons, badges, and progress remain readable and testable.
31. As a developer, I want a thin bridge into the existing Pack Opening Sequence, so that the new idle prototype does not rewrite polished opening behavior.
32. As a developer, I want browser checks for the compact overlay and expanded state, so that layout regressions are caught early.

## Implementation Decisions

- Build the first implementation as a prototype, not as a production desktop shell.
- Treat the desired product form as a Borderless Expedition Overlay, with small window fallback allowed.
- Use the latest concept image and provided reference image as prototype targets rather than pixel-perfect requirements.
- Keep the compact overlay anchored above a taskbar-like area in the prototype.
- Use Canvas 2D for the isometric dungeon renderer.
- Use DOM overlay controls for Pack Navigation Button, Collection Codex placeholder, Next Pack progress, Pack Ready Signal, and collapse affordance.
- Keep the Collection Codex as a placeholder only.
- Preserve Expedition Watching: the player observes automatic movement and does not control movement, attacks, routing, or skills.
- Generate a Procedural Expedition Layout containing rooms, corridors, props, and an automatic walking path.
- Keep Procedural Expedition Layout visual and structural only for the first prototype; it does not drive pack rewards.
- Keep Gothic Pack Earning time-based.
- Treat dungeon events that shorten or improve pack earning as future work.
- Add an Expedition Clock deep module that exposes progress, ready pack count, and capped or full state.
- Add a Procedural Expedition Layout Generator deep module that accepts a seed and returns layout geometry plus a walking path.
- Add an Expedition Actor Simulation module that advances the character along the walking path.
- Add an Expedition View Shell that composes the Canvas scene and DOM controls.
- Add a Pack Opening Bridge that enters the Expanded Pack Opening View when a ready Gothic Pack is opened, then returns to the compact overlay after completion.
- Reuse the existing Pack Opening Sequence behavior as much as practical.
- Use an Expanded Pack Opening View of medium size, roughly the visual scale of a 720 by 640 panel, not a tiny modal and not fullscreen.
- Keep Pack Opening Sequence focused on Gothic Pack, Tear Gesture, Card Stack, Reveal Swipe, Rare Signal, Card Reveals, and Pack Summary.
- Avoid adding full desktop shell behaviors in this PRD: true always-on-top, transparent native windows, OS taskbar anchoring, global click-through, tray/menu-bar integration, or cross-OS window management.

## Testing Decisions

- Test external behavior rather than animation internals.
- Test the Expedition Clock as a deep module: time advances progress, progress creates ready packs, and ready count caps correctly.
- Test the Procedural Expedition Layout Generator as a deep module: the same seed returns the same room, corridor, prop, and walking path structure.
- Test that generated layouts include at least one usable walking path for the actor.
- Test the Pack Opening Bridge as a thin integration path: ready pack exists, Pack Navigation Button enters Expanded Pack Opening View, and completion returns to the compact overlay.
- Use a browser visual smoke check for the compact Borderless Expedition Overlay target: nonblank isometric scene, taskbar-adjacent composition, Pack button, Codex placeholder, Next Pack progress, and Pack Ready Signal.
- Use a browser visual smoke check for the Expanded Pack Opening View: medium panel, preserved bottom UI alignment, visible Gothic Pack, visible Tear Guide, and no fullscreen takeover.
- Keep rendering tests light; use deterministic module tests for clock and layout, and browser checks for visual fit.
- Continue to test the existing Pack Opening Sequence behavior separately through its current polish workflow.

## Out of Scope

- Production desktop shell implementation.
- True OS-level borderless transparent window behavior.
- Always-on-top behavior.
- Taskbar, tray, menu-bar, or dock integration.
- Global click-through regions.
- Cross-platform desktop window management.
- Direct player movement.
- Combat commands, attack buttons, skill bars, or tactical routing.
- Dungeon event rules that shorten pack earning.
- Loot tables, equipment, gold, currencies, shops, or monetization.
- Full idle economy.
- Collection Codex implementation beyond a placeholder button.
- Persistent collection inventory.
- Deckbuilding, card upgrades, selling, dusting, merging, or card management.
- Replacing the existing Pack Opening Sequence polish work.
- Pixel-perfect reproduction of the concept images.

## Further Notes

- The concept is viable because it turns waiting into a visible, low-interruption scene while preserving the Pack Opening Sequence as the main payoff.
- The largest product risk is scope drift into a dungeon RPG. The prototype should keep dungeon activity as automatic atmosphere, not as active gameplay.
- The largest implementation risk is confusing the web prototype with the real desktop shell. The PRD intentionally validates layout, timing, and interaction first, then leaves native overlay behavior for a later desktop-shell PRD or ADR.
- The prototype target image is `prototype/assets/expanded-pack-opening-overlay-concept.png`.
- The layout reference image is `prototype/assets/borderless-expedition-overlay-reference.jpg`.
