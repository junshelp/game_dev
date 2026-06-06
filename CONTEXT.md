# Idle OCG

Idle OCG is a collectible card game where waiting produces card packs, and the central pleasure is opening those packs to reveal cards.

## Language

**Idle OCG**:
A collectible card game where card acquisition is driven primarily by waiting over time. The game's core loop treats anticipation and reveal as first-class pleasures, not just inventory management.
_Avoid_: idle card game, 방치형 카드게임

**Pack Opening Sequence**:
The interactive moment where a player opens a card pack and reveals its cards one by one. It starts when the unopened pack is presented, requires a deliberate Tear Gesture, and ends when all cards from that pack have been revealed. The prototype assumes a portrait mobile experience.
_Avoid_: pack animation, opening animation, card draw

**Gothic Pack**:
The sealed pack presented at the start of a Pack Opening Sequence. A Gothic Pack should visually belong to the same dark fantasy world as the Monster Girl Cards, using cues such as dark material, metallic seals, wax marks, occult ornament, and colored magical light.
_Avoid_: neutral pack, modern foil pack, generic booster

**Gothic Pack Earning**:
The idle process that produces Gothic Packs over time. An Isometric Idle Expedition may later shorten or improve this process through dungeon events, but time remains the baseline source of packs.
_Avoid_: loot drop, quest reward, manual farming

**Isometric Idle Expedition**:
The idle environment where a character automatically explores a gothic dungeon and turns waiting into progress toward Gothic Packs. It gives the player a visible reason packs are being earned, but it is not a directly controlled dungeon RPG.
_Avoid_: playable dungeon crawler, action RPG, manual exploration

**Expedition View**:
The wide idle screen that presents an Isometric Idle Expedition as the player's default view. It favors a readable desktop or window-sized isometric scene with compact navigation controls, while Pack Opening Sequence remains a focused overlay expansion.
_Avoid_: phone frame, landing page, battle screen

**Borderless Expedition Overlay**:
The target desktop form of an Expedition View, shown above the operating system taskbar without a normal window frame so Expedition Watching feels present while the player works. A small window fallback is acceptable when true borderless overlay behavior is not available.
_Avoid_: full desktop game window, normal app chrome, forced fullscreen

**Expanded Pack Opening View**:
The temporary focused state where a Borderless Expedition Overlay grows upward into a medium Pack Opening Sequence view. It preserves the taskbar-adjacent idle UI position while giving the Gothic Pack enough space for a deliberate Tear Gesture and Card Reveals.
_Avoid_: separate reward window, tiny pack modal, fullscreen takeover

**Procedural Expedition Layout**:
The generated arrangement of rooms, corridors, props, and automatic walking paths shown during an Isometric Idle Expedition. It creates visual variety for Expedition Watching without making dungeon completion the source of Gothic Pack Earning.
_Avoid_: loot dungeon, combat map, player route

**Expedition Watching**:
The player's passive relationship to an Isometric Idle Expedition. The player may observe the character's automatic progress and enter a Pack Opening Sequence when a Gothic Pack is ready, but does not direct movement, attacks, or routing.
_Avoid_: character control, tactical commands, path selection

**Pack Ready Signal**:
A compact interface cue that tells the player one or more Gothic Packs are ready to open while they are viewing the Isometric Idle Expedition. A Pack Ready Signal may appear as a red dot or similar badge on a Pack Navigation Button, but it should not interrupt Expedition Watching by forcing a Pack Opening Sequence.
_Avoid_: forced popup, auto-open prompt, reward claim modal

**Pack Navigation Button**:
A persistent interface control that lets the player leave Expedition Watching and enter an Expanded Pack Opening View when a Gothic Pack is ready. It is a navigation affordance, not the Pack Opening Sequence itself.
_Avoid_: reward claim button, shop button, pack modal

**Collection Codex**:
A future view where the player can review collected cards outside a Pack Opening Sequence. During the Isometric Idle Expedition prototype, a codex button may exist as a placeholder, but collection review is not part of the prototype's core behavior.
_Avoid_: inventory, card management, deck editor

**Tear Gesture**:
A direct left-to-right player gesture across the top tear line of a sealed pack. A Tear Gesture should make the player feel they caused the pack to open, rather than watched an automatic animation.
_Avoid_: tap to open, auto open, skip open

**Tear Guide**:
A subtle directional cue that shows where and how to perform the Tear Gesture. In the prototype, the Tear Guide should read as an in-world arrow or shimmer along the pack's top tear line, not as tutorial text.
_Avoid_: instruction text, tutorial popup, help overlay

**Elastic Return**:
The soft recovery that happens when a Tear Gesture or Reveal Swipe does not pass its commit threshold. Elastic Return communicates an incomplete gesture through motion rather than error text.
_Avoid_: failed input, invalid gesture, error prompt

**Card Reveal**:
The moment when a hidden card becomes known to the player during a Pack Opening Sequence. In the prototype, a Card Reveal begins with a face-down card and completes through a Reveal Swipe.
_Avoid_: card spawn, card result

**Rare Signal**:
A truthful sensory cue that indicates a pack or current card contains a high-rarity result without identifying the exact card, position, or rarity tier. A Pack Opening Sequence may use a light Rare Signal when the pack is torn and a stronger Rare Signal when a high-rarity Card Reveal completes; visual effects and sound are core signals, while vibration is optional when supported.
_Avoid_: rarity spoiler, guaranteed reveal

**Highlight Card**:
The highest-anticipation card in a Card Stack, usually responsible for paying off a Rare Signal. In the prototype, a Highlight Card appears in the fourth or fifth reveal position so the Card Stack keeps tension through its later reveals.
_Avoid_: hit card, jackpot card, rare slot

**Prototype Card**:
A non-final card used to validate the emotional feel of opening packs and revealing cards. A Prototype Card does not need complete game rules or balanced text, but its art and rarity treatment should clearly communicate whether the reveal feels ordinary or exciting.
_Avoid_: final card, rules card, production card

**Monster Girl Card**:
A Prototype Card featuring an original adult-looking gothic or dark fantasy heroine inspired by monsters such as vampires, succubi, dullahans, zombies, and demon girls. Monster Girl Cards should feel like they belong to the same dark fantasy card world rather than separate parody references.
_Avoid_: generic anime girl, existing IP character, schoolgirl card

**Rarity Treatment**:
The visual presentation that makes a card's rarity immediately felt during a Card Reveal. In the prototype, rare cards use gold borders and sparkle effects over the card image.
_Avoid_: stat rarity, metadata rarity

**Reveal Swipe**:
A left or right drag on a face-down card that gradually turns it over with a 3D card flip until the card face is visible. Both directions are valid; when the reveal is committed, the card exits in the swipe direction and the next card in the Card Stack moves into focus.
_Avoid_: tap reveal, flip animation, auto reveal

**Card Stack**:
The ordered group of five face-down cards that rises from an opened pack. A Card Stack presents one card at a time for a Reveal Swipe.
_Avoid_: card list, card results, rewards

**Opening Loop**:
The prototype loop that lets a player start another Pack Opening Sequence after viewing the five revealed cards. Opening Loop exists to validate repeated pack-opening feel, not to model the full idle reward economy.
_Avoid_: idle economy, production loop, shop loop

**Pack Summary**:
The short completion view shown after all five Card Reveals in a Pack Opening Sequence. It shows the revealed cards and offers the next Opening Loop without introducing collection management, deckbuilding, selling, or upgrading.
_Avoid_: collection screen, inventory, reward claim screen

## Example Dialogue

Developer: "Is the Pack Opening Sequence part of the idle loop or a separate reward screen?"
Domain expert: "It is the payoff of the idle loop. The player waits to earn a pack, then the Pack Opening Sequence turns that wait into anticipation and surprise."

Developer: "Can the pack open automatically after the player taps it?"
Domain expert: "No. The opening should require a Tear Gesture so the player feels personally responsible for releasing the cards."

Developer: "Is the isometric dungeon a playable action RPG?"
Domain expert: "No. It is an Isometric Idle Expedition: the character explores automatically, and that visible waiting produces Gothic Packs."

Developer: "Does the player need to clear dungeon rooms to earn packs?"
Domain expert: "No. Gothic Pack Earning is time-based first; dungeon events may later shorten the wait or improve the next pack."

Developer: "What does the player do in the dungeon view?"
Domain expert: "They use Expedition Watching. The character moves and fights automatically, and the player steps in when a Gothic Pack is ready to open."

Developer: "Does a random dungeon room create the pack reward?"
Domain expert: "No. The Procedural Expedition Layout gives the idle scene variety, while Gothic Pack Earning remains based on time."

Developer: "Should the idle dungeon use the same portrait phone frame as the Pack Opening Sequence prototype?"
Domain expert: "No. The Expedition View should be wide and readable for desktop or window-sized watching, then transition into the focused Pack Opening Sequence when opening a pack."

Developer: "Does the desktop companion need to be a normal app window?"
Domain expert: "No. The target is a Borderless Expedition Overlay above the taskbar, with a small window fallback when the operating system cannot support that behavior."

Developer: "Where does the player open a ready pack from the overlay?"
Domain expert: "The overlay expands into an Expanded Pack Opening View, keeping the idle UI anchored near the taskbar while giving the Pack Opening Sequence enough space to feel tactile."

Developer: "Should the pack open on top of the dungeon view?"
Domain expert: "No. A Pack Navigation Button can show a Pack Ready Signal, then the overlay grows into an Expanded Pack Opening View."

Developer: "Does the first idle dungeon prototype need a card collection screen?"
Domain expert: "No. A Collection Codex button can be present as a placeholder, but the prototype should focus on Expedition Watching and opening ready Gothic Packs."

Developer: "What happens if the player drags but does not commit the gesture?"
Domain expert: "Use Elastic Return. The interaction should recover through motion, not scold the player with a message."

Developer: "After the pack opens, do cards reveal automatically?"
Domain expert: "No. The Card Stack should rise face-down, and each Card Reveal should require a Reveal Swipe."

Developer: "Should rare cards only be celebrated after they are fully revealed?"
Domain expert: "No. A light Rare Signal can appear when the pack is torn, but the strongest Rare Signal belongs to the completed Card Reveal."

Developer: "Do Prototype Cards need full OCG rules text?"
Domain expert: "No. They only need enough identity, art, and Rarity Treatment to validate the pleasure of the reveal."

Developer: "What kind of characters should the Prototype Cards show?"
Domain expert: "They should be Monster Girl Cards: original adult-looking gothic or dark fantasy heroines such as vampires, succubi, dullahans, zombies, and demon girls."

Developer: "Does the prototype need the idle reward economy?"
Domain expert: "No. It only needs an Opening Loop so the Pack Opening Sequence can be repeated and judged quickly."

Developer: "What should happen after all five cards are revealed?"
Domain expert: "Show a Pack Summary with the five revealed cards and a way to start the next Opening Loop."
