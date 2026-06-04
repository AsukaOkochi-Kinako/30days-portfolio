// ─────────────────────────────────────
//  IMAGE POOL  (ローカル画像 — download_images.py で取得)
//  画像が見つからない場合は onerror で自動スキップされます
// ─────────────────────────────────────
const POOL = [
  // ── 唐揚げ (k01–k08) ──
  { src: 'images/k01.jpg', ans: 'k' },
  { src: 'images/k02.jpg', ans: 'k' },
  { src: 'images/k03.jpg', ans: 'k' },
  { src: 'images/k04.jpg', ans: 'k' },
  { src: 'images/k05.jpg', ans: 'k' },
  { src: 'images/k06.jpg', ans: 'k' },
  { src: 'images/k07.jpg', ans: 'k' },
  { src: 'images/k08.jpg', ans: 'k' },

  // ── 茶色トイプードル (p01–p10) ──
  { src: 'images/p01.jpg', ans: 'p' },
  { src: 'images/p02.jpg', ans: 'p' },
  { src: 'images/p03.jpg', ans: 'p' },
  { src: 'images/p04.jpg', ans: 'p' },
  { src: 'images/p05.jpg', ans: 'p' },
  { src: 'images/p06.jpg', ans: 'p' },
  { src: 'images/p07.jpg', ans: 'p' },
  { src: 'images/p08.jpg', ans: 'p' },
  { src: 'images/p09.jpg', ans: 'p' },
  { src: 'images/p10.jpg', ans: 'p' },
];

// ─────────────────────────────────────
//  STATE
// ─────────────────────────────────────
let score = 0, rounds = 0, timeLeft = 30, ticker = null;
let curAns = null, queue = [], busy = false;
let selTime = 30;
let dragX0 = 0, dragging = false, dragDx = 0;

// ─────────────────────────────────────
//  UTILS
// ─────────────────────────────────────
const $ = id => document.getElementById(id);
const shuffle = a => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  $(id).classList.remove('hidden');
}

// ─────────────────────────────────────
//  TIME SELECTOR
// ─────────────────────────────────────
document.querySelectorAll('.time-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selTime = +btn.dataset.sec;
  });
});

// ─────────────────────────────────────
//  GAME CORE
// ─────────────────────────────────────
function startGame() {
  score = 0; rounds = 0; timeLeft = selTime; busy = false;
  queue = shuffle(POOL);
  $('score-val').textContent = '0';
  $('round-val').textContent = '1';
  $('timer-display').textContent = timeLeft;
  $('timer-display').classList.remove('urgent');
  showScreen('game-screen');
  nextCard();
  clearInterval(ticker);
  ticker = setInterval(tick, 1000);
}

function tick() {
  timeLeft--;
  $('timer-display').textContent = timeLeft;
  const urgentAt = Math.max(5, Math.round(selTime * 0.2));
  $('timer-display').classList.toggle('urgent', timeLeft <= urgentAt);
  if (timeLeft <= 0) { clearInterval(ticker); endGame(); }
}

function nextCard() {
  if (queue.length === 0) queue = shuffle(POOL);
  const item = queue.pop();
  curAns = item.ans;

  const img = $('card-img');
  const card = $('the-card');
  img.style.opacity = '0';
  card.style.transition = 'none';
  card.style.transform = '';
  card.style.opacity = '1';
  card.classList.remove('shake');
  $('tint-L').style.opacity = $('tint-R').style.opacity = '0';
  $('lbl-L').classList.remove('on');
  $('lbl-R').classList.remove('on');
  $('flash').className = 'card-flash';
  $('flash').textContent = '';

  img.onload = () => { img.style.opacity = '1'; };
  img.onerror = () => { if (queue.length > 0) { const nx = queue.pop(); curAns = nx.ans; img.src = nx.src; } };
  img.src = item.src;
}

function answer(choice) {
  if (busy || timeLeft <= 0) return;
  busy = true;
  rounds++;
  const correct = (choice === curAns);
  if (correct) score++;
  $('score-val').textContent = score;
  $('round-val').textContent = rounds + 1;

  // Feedback
  const fl = $('flash');
  fl.className = 'card-flash ' + (correct ? 'ok' : 'ng') + ' pop';
  fl.textContent = correct ? '✓' : '✗';

  if (correct) {
    spawnConfetti();
  } else {
    wrongEffect();
  }

  const card = $('the-card');
  const dir = choice === 'k' ? -1 : 1;
  const delay = correct ? 220 : 430;

  setTimeout(() => {
    card.style.transition = 'transform 0.30s ease, opacity 0.30s ease';
    card.style.transform = `translateX(${dir * 450}px) rotate(${dir * 15}deg)`;
    card.style.opacity = '0';
    setTimeout(() => { busy = false; if (timeLeft > 0) nextCard(); }, 320);
  }, delay);
}

function endGame() {
  showScreen('result-screen');
  const pct = rounds > 0 ? Math.round((score / rounds) * 100) : 0;
  $('res-score').textContent = score;
  $('res-total').textContent = rounds;
  $('res-acc').textContent   = `正答率 ${pct}%`;
  $('res-emoji').textContent = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 55 ? '😊' : pct >= 30 ? '😅' : '🫠';
  $('res-title').textContent = pct === 100 ? '完璧です！' : pct >= 80 ? 'すごい！' : pct >= 55 ? 'なかなか！' : 'もう少し！';
  $('res-comment').textContent =
    pct === 100 ? '唐揚げとトイプードルの見分け方を完全にマスター！もはや達人の域。' :
    pct >= 80   ? 'ほぼ完璧！ほんの少しだけ混乱した瞬間があったようです。' :
    pct >= 55   ? 'まあまあ！でもどちらも同じくらいおいしそうに見えるのでは？' :
    pct >= 30   ? 'うーん…やっぱり似てるよね。仕方ないかも。' :
                  '唐揚げもプードルも、丸くてふわっとしてるもんね。';
}

// ─────────────────────────────────────
//  CORRECT: CONFETTI
// ─────────────────────────────────────
function spawnConfetti() {
  const layer = $('confetti');
  const palette = ['#C4695A','#C4956A','#5F866B','#D4B896','#A88C7E','#fff','#E8D5C0'];
  const rect = $('the-card').getBoundingClientRect();
  const cx = rect.left + rect.width * 0.5;
  const cy = rect.top  + rect.height * 0.4;

  for (let i = 0; i < 42; i++) {
    const el = document.createElement('div');
    el.className = 'cf';
    const w   = 5 + Math.random() * 7;
    const h   = w * (0.45 + Math.random() * 0.9);
    const tx  = (Math.random() - 0.5) * 260;
    const ty  = -(70 + Math.random() * 180);
    const rot = (Math.random() - 0.5) * 600;
    const dur = 0.6 + Math.random() * 0.6;
    const dl  = Math.random() * 0.2;
    el.style.cssText = [
      `left:${cx + (Math.random() - 0.5) * 70}px`,
      `top:${cy}px`,
      `width:${w}px`, `height:${h}px`,
      `background:${palette[Math.floor(Math.random() * palette.length)]}`,
      `border-radius:${Math.random() > 0.45 ? '50%' : '2px'}`,
      `--tx:${tx}px`, `--ty:${ty}px`, `--r:${rot}deg`,
      `--d:${dur}s`, `--dl:${dl}s`,
    ].join(';');
    layer.appendChild(el);
    setTimeout(() => el.remove(), (dur + dl + 0.15) * 1000);
  }
}

// ─────────────────────────────────────
//  WRONG: SHAKE + RED FLASH
// ─────────────────────────────────────
function wrongEffect() {
  $('the-card').classList.add('shake');
  const ov = $('wrong-overlay');
  ov.classList.add('flash');
  setTimeout(() => ov.classList.remove('flash'), 320);
}

// ─────────────────────────────────────
//  DRAG / SWIPE
// ─────────────────────────────────────
const cardEl = $('the-card');

function onDragStart(x) {
  if (busy || timeLeft <= 0) return;
  dragging = true; dragX0 = x; dragDx = 0;
  cardEl.style.transition = 'none';
}
function onDragMove(x) {
  if (!dragging) return;
  dragDx = x - dragX0;
  cardEl.style.transform = `translateX(${dragDx}px) rotate(${dragDx * 0.065}deg)`;
  const r = Math.min(Math.abs(dragDx) / 110, 1);
  if (dragDx < -22) {
    $('tint-L').style.opacity = r * 0.88;
    $('tint-R').style.opacity = '0';
    $('lbl-L').classList.add('on');
    $('lbl-R').classList.remove('on');
  } else if (dragDx > 22) {
    $('tint-R').style.opacity = r * 0.88;
    $('tint-L').style.opacity = '0';
    $('lbl-R').classList.add('on');
    $('lbl-L').classList.remove('on');
  } else {
    $('tint-L').style.opacity = $('tint-R').style.opacity = '0';
    $('lbl-L').classList.remove('on');
    $('lbl-R').classList.remove('on');
  }
}
function onDragEnd() {
  if (!dragging) return;
  dragging = false;
  if      (dragDx < -82) answer('k');
  else if (dragDx >  82) answer('p');
  else {
    cardEl.style.transition = 'transform 0.38s cubic-bezier(.22,1,.36,1)';
    cardEl.style.transform = '';
    $('tint-L').style.opacity = $('tint-R').style.opacity = '0';
    $('lbl-L').classList.remove('on');
    $('lbl-R').classList.remove('on');
  }
}

// Events
cardEl.addEventListener('touchstart', e => onDragStart(e.touches[0].clientX), { passive: true });
cardEl.addEventListener('touchmove',  e => onDragMove(e.touches[0].clientX),  { passive: true });
cardEl.addEventListener('touchend',   onDragEnd);
cardEl.addEventListener('mousedown',  e => onDragStart(e.clientX));
document.addEventListener('mousemove', e => { if (dragging) onDragMove(e.clientX); });
document.addEventListener('mouseup',   onDragEnd);
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft')  answer('k');
  if (e.key === 'ArrowRight') answer('p');
});

$('btn-k').addEventListener('click',   () => answer('k'));
$('btn-p').addEventListener('click',   () => answer('p'));
$('startBtn').addEventListener('click', startGame);
$('retryBtn').addEventListener('click', () => showScreen('start-screen'));
