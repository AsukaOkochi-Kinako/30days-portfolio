// PROJECTS and CAT_LABELS are defined in data.js

// ===== RENDER CARDS =====
function renderCards(filter) {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  const list = (filter === "all" || !filter)
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filter);

  list.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.cat = p.category;
    card.style.cursor = "pointer";

    const top = document.createElement("div");
    top.className = "card-top";
    const emojiEl = document.createElement("span");
    emojiEl.className = "card-emoji";
    emojiEl.textContent = p.emoji;
    const dayEl = document.createElement("span");
    dayEl.className = "card-day";
    dayEl.textContent = `Day ${p.day}`;
    top.append(emojiEl, dayEl);

    const nameEl = document.createElement("div");
    nameEl.className = "card-name";
    nameEl.textContent = p.name;
    const descEl = document.createElement("div");
    descEl.className = "card-desc";
    descEl.textContent = p.desc;
    const tagEl = document.createElement("span");
    tagEl.className = "card-cat-tag";
    tagEl.textContent = CAT_LABELS[p.category];

    card.append(top, nameEl, descEl, tagEl);
    card.addEventListener("click", () => {
      const id = p.dir || `ext_${p.day}`;
      location.href = `detail.html?id=${encodeURIComponent(id)}`;
    });

    grid.appendChild(card);
    setTimeout(() => card.classList.add("visible"), i * 40);
  });
}

// ===== FILTER =====
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCards(btn.dataset.filter);
  });
});

// ===== COUNTER ANIMATION =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current);
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".stat-num").forEach(animateCounter);
      counterObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector(".hero-stats");
if (heroStats) counterObserver.observe(heroStats);

// update stat targets to match actual counts
const statNums = document.querySelectorAll(".stat-num");
if (statNums[1]) statNums[1].dataset.target = PROJECTS.length;

// ===== INIT =====
renderCards("all");
