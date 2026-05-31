const stage = document.querySelector("#stage");
const packScene = document.querySelector("#packScene");
const packShell = document.querySelector("#packShell");
const tearFill = document.querySelector("#tearFill");
const cardZone = document.querySelector("#cardZone");
const counter = document.querySelector("#counter");
const rareField = document.querySelector("#rareField");
const summary = document.querySelector("#summary");
const summaryGrid = document.querySelector("#summaryGrid");
const nextPack = document.querySelector("#nextPack");

const TEAR_THRESHOLD = 0.72;
const REVEAL_THRESHOLD = 0.42;
const CARD_NAMES = {
  vampire: "Nocturne Countess",
  succubus: "Velvet Hex Matron",
  dullahan: "Moonless Cavalier",
  zombie: "Stitchbloom Alchemist",
  demon: "Infernal Crown Heiress",
};

const CARD_POOL = [
  { key: "vampire", image: "./assets/card-vampire.png", rarity: "silver" },
  { key: "succubus", image: "./assets/card-succubus.png", rarity: "silver" },
  { key: "dullahan", image: "./assets/card-dullahan.png", rarity: "silver" },
  { key: "zombie", image: "./assets/card-zombie.png", rarity: "silver" },
  { key: "demon", image: "./assets/card-demon.png", rarity: "gold", rare: true },
];

const state = {
  phase: "unopened",
  tearProgress: 0,
  cards: [],
  index: 0,
  revealed: [],
  highlightIndex: -1,
  hasHighlight: false,
  drag: null,
  audio: null,
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makePack() {
  const hasHighlight = Math.random() < 0.72;
  const highlightIndex = hasHighlight ? 3 + Math.floor(Math.random() * 2) : -1;
  const nonRare = shuffle(CARD_POOL.filter((card) => !card.rare));
  const cards = nonRare.slice(0, 4).map((card) => ({ ...card, id: crypto.randomUUID() }));

  if (hasHighlight) {
    cards.splice(highlightIndex, 0, { ...CARD_POOL.find((card) => card.rare), id: crypto.randomUUID() });
  } else {
    cards.push({ ...nonRare[0], id: crypto.randomUUID() });
  }

  return { cards: cards.slice(0, 5), hasHighlight, highlightIndex };
}

function setPhase(phase) {
  state.phase = phase;
  stage.dataset.state = phase;
}

function setTearProgress(progress) {
  state.tearProgress = clamp(progress, 0, 1);
  stage.style.setProperty("--tear-progress", state.tearProgress.toFixed(3));
  tearFill.style.width = `${state.tearProgress * 100}%`;
}

function updateCounter() {
  counter.textContent = `${state.revealed.length} / ${state.cards.length || 5}`;
}

function resetLoop() {
  const pack = makePack();
  packShell.getAnimations().forEach((animation) => animation.cancel());
  packShell.style.transform = "";
  state.cards = pack.cards;
  state.hasHighlight = pack.hasHighlight;
  state.highlightIndex = pack.highlightIndex;
  state.index = 0;
  state.revealed = [];
  state.drag = null;
  setTearProgress(0);
  setPhase("unopened");
  cardZone.replaceChildren();
  summaryGrid.replaceChildren();
  summary.hidden = true;
  updateCounter();
}

function ensureAudio() {
  if (state.audio) return state.audio;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  state.audio = new AudioContext();
  return state.audio;
}

function playTone(kind) {
  const ctx = ensureAudio();
  if (!ctx) return;
  const now = ctx.currentTime;
  const gain = ctx.createGain();
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();

  const settings = {
    tear: { freq: 150, end: 70, type: "sawtooth", dur: 0.16, gain: 0.055 },
    stack: { freq: 240, end: 420, type: "triangle", dur: 0.18, gain: 0.04 },
    reveal: { freq: 330, end: 660, type: "sine", dur: 0.17, gain: 0.05 },
    rare: { freq: 520, end: 1040, type: "triangle", dur: 0.42, gain: 0.09 },
  }[kind];

  osc.type = settings.type;
  osc.frequency.setValueAtTime(settings.freq, now);
  osc.frequency.exponentialRampToValueAtTime(settings.end, now + settings.dur);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(kind === "tear" ? 800 : 1800, now);
  gain.gain.setValueAtTime(settings.gain, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + settings.dur);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + settings.dur + 0.03);
}

function signalRare(strong = false) {
  rareField.classList.remove("active", "big");
  void rareField.offsetWidth;
  rareField.classList.add(strong ? "big" : "active");
  if (strong && navigator.vibrate) navigator.vibrate([28, 36, 44]);
  playTone(strong ? "rare" : "stack");
}

function renderStack(animateIn = true) {
  cardZone.replaceChildren();
  state.cards.slice(state.index).forEach((card, offset) => {
    const el = document.createElement("article");
    el.className = `card ${card.rare ? "rare" : ""}`;
    el.dataset.cardId = card.id;
    el.style.setProperty("--y", `${offset * 11 + (animateIn ? 80 : 0)}px`);
    el.style.setProperty("--scale", `${1 - offset * 0.045}`);
    el.style.zIndex = String(20 - offset);
    el.style.opacity = offset > 3 ? "0" : "1";
    el.innerHTML = `
      <div class="card-face back">
        <img src="./assets/card-back.png" alt="Face-down card" draggable="false">
      </div>
      <div class="card-face front">
        <img src="${card.image}" alt="${CARD_NAMES[card.key]}" draggable="false">
        <div class="card-title">
          <span>${CARD_NAMES[card.key]}</span>
          <span class="rarity">${card.rare ? "Gold" : "Silver"}</span>
        </div>
      </div>
    `;
    cardZone.append(el);

    requestAnimationFrame(() => {
      el.style.setProperty("--y", `${offset * 11}px`);
    });

    if (offset === 0) {
      el.addEventListener("pointerdown", onCardPointerDown);
    }
  });
}

function openPack() {
  setPhase("opened");
  setTearProgress(1);
  playTone("tear");
  packShell.animate(
    [
      { transform: "translateY(0) rotate(0deg) scale(1)" },
      { transform: "translateY(-14px) rotate(-2deg) scale(1.03)" },
      { transform: "translateY(130px) rotate(1deg) scale(.86)" },
    ],
    { duration: 620, easing: "cubic-bezier(.2,.8,.18,1)", fill: "forwards" },
  );
  if (state.hasHighlight) {
    window.setTimeout(() => signalRare(false), 220);
  }
  window.setTimeout(() => {
    setPhase("cards");
    renderStack(true);
    playTone("stack");
  }, 540);
}

function onTearPointerDown(event) {
  if (state.phase !== "unopened") return;
  const rect = packScene.getBoundingClientRect();
  const y = event.clientY - rect.top;
  if (y > 150) return;

  ensureAudio();
  state.drag = {
    type: "tear",
    pointerId: event.pointerId,
    startX: event.clientX,
    width: Math.max(1, rect.width - 32),
  };
  packScene.setPointerCapture(event.pointerId);
}

function onTearPointerMove(event) {
  if (!state.drag || state.drag.type !== "tear" || event.pointerId !== state.drag.pointerId) return;
  const dx = Math.max(0, event.clientX - state.drag.startX);
  setTearProgress(clamp(dx / state.drag.width, 0, 1));
}

function onTearPointerUp(event) {
  if (!state.drag || state.drag.type !== "tear" || event.pointerId !== state.drag.pointerId) return;
  const committed = state.tearProgress >= TEAR_THRESHOLD;
  state.drag = null;
  if (committed) {
    openPack();
  } else {
    stage.animate(
      [
        { "--tear-progress": state.tearProgress },
        { "--tear-progress": 0 },
      ],
      { duration: 260, easing: "cubic-bezier(.2,.85,.2,1)" },
    );
    setTearProgress(0);
  }
}

function currentCardEl() {
  return cardZone.querySelector(".card");
}

function onCardPointerDown(event) {
  if (state.phase !== "cards" && state.phase !== "revealing") return;
  const el = currentCardEl();
  if (!el || event.currentTarget !== el) return;
  ensureAudio();
  setPhase("revealing");
  state.drag = {
    type: "card",
    pointerId: event.pointerId,
    startX: event.clientX,
    width: Math.min(280, stage.clientWidth * 0.58),
    el,
  };
  el.classList.add("dragging");
  el.setPointerCapture(event.pointerId);
}

function setCardDrag(el, progress, dx) {
  const flip = Math.abs(progress) * 180;
  el.style.setProperty("--x", `${dx}px`);
  el.style.setProperty("--rz", `${progress * 8}deg`);
  el.style.setProperty("--flip", `${flip}deg`);
}

function onCardPointerMove(event) {
  if (!state.drag || state.drag.type !== "card" || event.pointerId !== state.drag.pointerId) return;
  const dx = event.clientX - state.drag.startX;
  const progress = clamp(dx / state.drag.width, -1, 1);
  setCardDrag(state.drag.el, progress, dx);
}

function onCardPointerUp(event) {
  if (!state.drag || state.drag.type !== "card" || event.pointerId !== state.drag.pointerId) return;
  const { el, startX, width } = state.drag;
  const dx = event.clientX - startX;
  const progress = clamp(dx / width, -1, 1);
  const committed = Math.abs(progress) >= REVEAL_THRESHOLD;
  const direction = progress < 0 ? -1 : 1;
  el.classList.remove("dragging");
  state.drag = null;

  if (!committed) {
    setCardDrag(el, 0, 0);
    window.setTimeout(() => setPhase("cards"), 230);
    return;
  }

  completeReveal(el, direction);
}

function completeReveal(el, direction) {
  const card = state.cards[state.index];
  state.revealed.push(card);
  updateCounter();
  playTone(card.rare ? "rare" : "reveal");
  if (card.rare) signalRare(true);

  el.classList.add("exiting");
  el.style.setProperty("--x", `${direction * (stage.clientWidth + 180)}px`);
  el.style.setProperty("--rz", `${direction * 18}deg`);
  el.style.setProperty("--flip", "180deg");

  window.setTimeout(() => {
    state.index += 1;
    if (state.index >= state.cards.length) {
      showSummary();
    } else {
      setPhase("cards");
      renderStack(false);
    }
  }, 540);
}

function showSummary() {
  setPhase("summary");
  summaryGrid.replaceChildren();
  state.revealed.forEach((card) => {
    const item = document.createElement("div");
    item.className = `summary-card ${card.rare ? "rare" : ""}`;
    item.innerHTML = `<img src="${card.image}" alt="${CARD_NAMES[card.key]}"><span>${CARD_NAMES[card.key]}</span>`;
    summaryGrid.append(item);
  });
  summary.hidden = false;
}

packScene.addEventListener("pointerdown", onTearPointerDown);
packScene.addEventListener("pointermove", onTearPointerMove);
packScene.addEventListener("pointerup", onTearPointerUp);
packScene.addEventListener("pointercancel", onTearPointerUp);
cardZone.addEventListener("pointermove", onCardPointerMove);
cardZone.addEventListener("pointerup", onCardPointerUp);
cardZone.addEventListener("pointercancel", onCardPointerUp);
nextPack.addEventListener("click", resetLoop);

window.PackOpeningState = {
  state,
  makePack,
  resetLoop,
  thresholds: { tear: TEAR_THRESHOLD, reveal: REVEAL_THRESHOLD },
};

resetLoop();
