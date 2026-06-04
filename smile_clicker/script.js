// =====================
//  ゲームデータ定義
// =====================

const TITLES = [
  { name: "無名の者",         req: 0,           emoji: "😶" },
  { name: "笑顔の芽",         req: 1,           emoji: "🌱" },
  { name: "ほんわか初心者",   req: 10,          emoji: "😊" },
  { name: "にこにこ見習い",   req: 50,          emoji: "😄" },
  { name: "スマイル使い",     req: 100,         emoji: "😁" },
  { name: "笑顔の修行者",     req: 500,         emoji: "🥋" },
  { name: "スマイルマスター", req: 1_000,       emoji: "🎓" },
  { name: "笑顔の達人",       req: 5_000,       emoji: "⭐" },
  { name: "スマイル伝説",     req: 10_000,      emoji: "🌟" },
  { name: "笑顔の皇帝",       req: 50_000,      emoji: "👑" },
  { name: "スマイル神",       req: 100_000,     emoji: "⚡" },
  { name: "笑顔の宇宙神",     req: 500_000,     emoji: "🌌" },
  { name: "😃の化身",         req: 1_000_000,   emoji: "✨" },
  { name: "宇宙の笑顔",       req: 10_000_000,  emoji: "🚀" },
];

const UPGRADES = [
  { id: "auto1", name: "自動笑顔",         emoji: "🤖", desc: "1秒ごとに +1 😃",   baseCost: 10,     cps: 1,   type: "auto", owned: 0 },
  { id: "auto2", name: "笑顔工場",         emoji: "🏭", desc: "1秒ごとに +5 😃",   baseCost: 100,    cps: 5,   type: "auto", owned: 0 },
  { id: "auto3", name: "笑顔王国",         emoji: "🏰", desc: "1秒ごとに +20 😃",  baseCost: 500,    cps: 20,  type: "auto", owned: 0 },
  { id: "auto4", name: "笑顔銀河",         emoji: "🌠", desc: "1秒ごとに +100 😃", baseCost: 3_000,  cps: 100, type: "auto", owned: 0 },
  { id: "auto5", name: "笑顔ブラックホール", emoji: "🕳️", desc: "1秒ごとに +500 😃", baseCost: 20_000, cps: 500, type: "auto", owned: 0 },
  { id: "mult1", name: "笑顔強化 Lv1",     emoji: "💪", desc: "クリック×2",         baseCost: 50,     mult: 2,  type: "mult", owned: 0, max: 1 },
  { id: "mult2", name: "笑顔強化 Lv2",     emoji: "🔥", desc: "クリック×5",         baseCost: 1_000,  mult: 5,  type: "mult", owned: 0, max: 1 },
  { id: "mult3", name: "笑顔強化 Lv3",     emoji: "⚡", desc: "クリック×10",        baseCost: 10_000, mult: 10, type: "mult", owned: 0, max: 1 },
];

// =====================
//  ゲーム状態
// =====================

const state = { count: 0, totalCount: 0, clickMult: 1 };

// =====================
//  オービット定数
// =====================

const MAX_ORBITERS      = 500;
const ORBITERS_PER_RING = 25;

function getRingRadius(ring) {
  const base = window.innerWidth < 480 ? 56 : window.innerWidth < 900 ? 68 : 80;
  return base + ring * 36;
}

const orbiters = [];

// =====================
//  ゲーム計算
// =====================

function getCost(upg) {
  return Math.floor(upg.baseCost * Math.pow(1.5, upg.owned));
}

function getCurrentCPS() {
  return UPGRADES.filter(u => u.type === "auto").reduce((s, u) => s + u.cps * u.owned, 0);
}

function getCurrentTitle() {
  let t = TITLES[0];
  for (const title of TITLES) {
    if (state.totalCount >= title.req) t = title;
  }
  return t;
}

// =====================
//  フォーマット
// =====================

function formatNum(n) {
  n = Math.floor(n);
  if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(2) + "B";
  if (n >= 1_000_000)     return (n / 1_000_000).toFixed(2) + "M";
  if (n >= 1_000)         return (n / 1_000).toFixed(2) + "K";
  return n.toLocaleString();
}

// =====================
//  UI 更新
// =====================

function updateStats() {
  document.getElementById("count-display").textContent = formatNum(state.count);
  const cps = getCurrentCPS();
  document.getElementById("per-sec").textContent = `毎秒 +${formatNum(cps)} 😃`;
  document.getElementById("click-mult-display").textContent = `×${state.clickMult}`;
  document.getElementById("auto-display").textContent = formatNum(cps);
  const t = getCurrentTitle();
  document.getElementById("current-title-display").textContent = t.emoji + " " + t.name;
}

function renderTitles() {
  const list = document.getElementById("title-list");
  list.innerHTML = "";
  for (const t of TITLES) {
    const div = document.createElement("div");
    div.className = "title-item" + (state.totalCount >= t.req ? " unlocked" : "");
    div.innerHTML = `
      <div class="t-name">${t.emoji} ${t.name}</div>
      <div class="t-req">${t.req >= 1000 ? formatNum(t.req) : t.req} 😃 で解放</div>
    `;
    list.appendChild(div);
  }
}

function initUpgradeButtons() {
  const list = document.getElementById("upgrade-list");
  for (const upg of UPGRADES) {
    const btn = document.createElement("button");
    btn.className = "upgrade-btn";
    btn.dataset.id = upg.id;
    btn.addEventListener("click", () => buyUpgrade(upg.id));
    list.appendChild(btn);
  }
}

function renderUpgrades() {
  const list = document.getElementById("upgrade-list");
  for (let i = 0; i < UPGRADES.length; i++) {
    const upg = UPGRADES[i];
    const btn = list.children[i];
    if (!btn) continue;
    const isMax = upg.max && upg.owned >= upg.max;
    const cost  = getCost(upg);
    btn.disabled = isMax;
    btn.classList.toggle("cant-afford", !isMax && state.count < cost);
    btn.innerHTML = `
      <div class="u-top">
        <span>${upg.emoji} ${upg.name}</span>
        <span class="u-cost">${isMax ? "MAX" : "😃" + formatNum(cost)}</span>
      </div>
      <div class="u-desc">${upg.desc}</div>
      <div class="u-owned">所持数: ${upg.owned}${upg.max ? "/" + upg.max : ""}</div>
    `;
  }
}

// =====================
//  称号チェック & トースト
// =====================

let lastTitle  = TITLES[0];
let toastQueue = [];
let toastActive = false;

function checkTitle() {
  const now = getCurrentTitle();
  if (now.req !== lastTitle.req) {
    lastTitle = now;
    toastQueue.push(now);
    renderTitles();
    if (!toastActive) drainToast();
  }
}

function drainToast() {
  if (!toastQueue.length) { toastActive = false; return; }
  toastActive = true;
  const t = toastQueue.shift();
  document.getElementById("toast-emoji").textContent  = t.emoji;
  document.getElementById("toast-title").textContent  = t.name;
  const el = document.getElementById("achievement-toast");
  el.classList.add("show");
  setTimeout(() => {
    el.classList.remove("show");
    setTimeout(drainToast, 600);
  }, 2500);
}

// =====================
//  クリック処理
// =====================

function handleClick(e) {
  const gain = state.clickMult;
  state.count      += gain;
  state.totalCount += gain;
  updateStats();
  checkTitle();
  renderUpgrades();
  spawnFloat(e.clientX, e.clientY, "+" + formatNum(gain) + " 😃");

  const btn = document.getElementById("main-emoji");
  btn.classList.remove("clicked");
  void btn.offsetWidth;
  btn.classList.add("clicked");
}

function spawnFloat(x, y, text) {
  const el = document.createElement("div");
  el.className = "float-text";
  el.textContent = text;
  el.style.left = (x - 30 + Math.random() * 40) + "px";
  el.style.top  = (y - 10) + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

// =====================
//  アップグレード購入
// =====================

function buyUpgrade(id) {
  const upg = UPGRADES.find(u => u.id === id);
  if (!upg) return;
  if (upg.max && upg.owned >= upg.max) return;
  const cost = getCost(upg);
  if (state.count < cost) return;
  state.count -= cost;
  upg.owned++;
  if (upg.type === "mult") state.clickMult *= upg.mult;
  updateStats();
  renderUpgrades();
}

// =====================
//  オービットシステム
// =====================

function getTargetOrbitCount() {
  const c = Math.floor(state.totalCount);
  if (c <= 0) return 0;
  return Math.min(MAX_ORBITERS, c);
}

function syncOrbiters() {
  const target    = getTargetOrbitCount();
  const container = document.getElementById("orbit-wrapper");

  while (orbiters.length < target) {
    const i         = orbiters.length;
    const ring      = Math.floor(i / ORBITERS_PER_RING);
    const posInRing = i % ORBITERS_PER_RING;
    const dir       = (ring % 2 === 0) ? 1 : -1;
    const speed     = Math.max(0.04, 0.9 * Math.pow(0.75, ring)) * dir;
    const el        = document.createElement("div");
    el.className = "orbiter pop";
    el.textContent = "😃";
    container.appendChild(el);
    setTimeout(() => el.classList.remove("pop"), 400);
    orbiters.push({
      angle: (posInRing / ORBITERS_PER_RING) * Math.PI * 2,
      speed,
      ring,
      el,
    });
  }

  while (orbiters.length > target) {
    const orb = orbiters.pop();
    if (orb.el) orb.el.remove();
  }
}

function animateOrbit(dt) {
  const container = document.getElementById("orbit-wrapper");
  const cx = container.offsetWidth  / 2;
  const cy = container.offsetHeight / 2;

  for (const orb of orbiters) {
    orb.angle += orb.speed * dt;
    const r = getRingRadius(orb.ring);
    orb.el.style.left = (cx + r * Math.cos(orb.angle)) + "px";
    orb.el.style.top  = (cy + r * Math.sin(orb.angle)) + "px";
  }
}

// =====================
//  自動生成スマイルの噴出
// =====================

let autoSmileAcc  = 0;
let lastAutoSpawn = 0;

function spawnAutoSmile() {
  const wrapper = document.getElementById("orbit-wrapper");
  const cx = wrapper.offsetWidth  / 2;
  const cy = wrapper.offsetHeight / 2;
  const r = getRingRadius(0);
  const angle = Math.random() * Math.PI * 2;

  const el = document.createElement("div");
  el.className = "auto-smile-burst";
  el.textContent = "😃";
  el.style.setProperty("--tx", (Math.cos(angle) * r) + "px");
  el.style.setProperty("--ty", (Math.sin(angle) * r) + "px");
  el.style.left = cx + "px";
  el.style.top  = cy + "px";
  wrapper.appendChild(el);
  setTimeout(() => el.remove(), 700);
}

// =====================
//  ゲームループ
// =====================

let lastTick    = null;
let lastUITick  = 0;

function gameTick(timestamp) {
  if (lastTick === null) lastTick = timestamp;
  const dt = Math.min((timestamp - lastTick) / 1000, 0.1);
  lastTick = timestamp;

  const cps = getCurrentCPS();
  if (cps > 0) {
    state.count      += cps * dt;
    state.totalCount += cps * dt;

    autoSmileAcc += cps * dt;
    if (autoSmileAcc >= 1 && timestamp - lastAutoSpawn > 200) {
      const bursts = Math.min(Math.floor(autoSmileAcc), 3);
      for (let i = 0; i < bursts; i++) spawnAutoSmile();
      autoSmileAcc -= bursts;
      lastAutoSpawn = timestamp;
    }
  }

  if (timestamp - lastUITick > 100) {
    updateStats();
    checkTitle();
    renderUpgrades();
    lastUITick = timestamp;
  }

  syncOrbiters();
  animateOrbit(dt);

  requestAnimationFrame(gameTick);
}

// =====================
//  初期化
// =====================

document.getElementById("main-emoji").addEventListener("click", handleClick);

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(c => c.classList.add("hidden"));
    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.remove("hidden");
  });
});

renderTitles();
initUpgradeButtons();
renderUpgrades();
updateStats();
requestAnimationFrame(gameTick);
