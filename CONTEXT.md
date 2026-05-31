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
