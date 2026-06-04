const CATEGORY_META = {
  "全身":  { emoji: "💪", colorVar: "#FF6B35" },
  "胸":   { emoji: "🔥", colorVar: "#E63946" },
  "背中":  { emoji: "🏋️", colorVar: "#457B9D" },
  "腕":   { emoji: "💥", colorVar: "#2D6A4F" },
  "肩":   { emoji: "🎯", colorVar: "#9B5DE5" },
  "脚":   { emoji: "🦵", colorVar: "#F4A261" },
  "腹筋":  { emoji: "⚡", colorVar: "#06D6A0" },
  "上半身": { emoji: "🚀", colorVar: "#F72585" },
};

let activeCategory = null;

function pickRandom(arr, count) {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, arr.length));
}

function init() {
  renderCategoryButtons();
  renderEmpty();
}

function renderCategoryButtons() {
  const grid = document.getElementById("category-grid");
  grid.innerHTML = "";

  Object.keys(WORKOUT_DATA).forEach(name => {
    const meta = CATEGORY_META[name] || { emoji: "💪", colorVar: "#FF6B35" };
    const btn = document.createElement("button");
    btn.className = "category-btn";
    btn.dataset.category = name;
    btn.style.setProperty("--btn-color", meta.colorVar);
    btn.innerHTML = `<span class="btn-emoji">${meta.emoji}</span>${name}`;
    btn.addEventListener("click", () => selectCategory(name));
    grid.appendChild(btn);
  });
}

function selectCategory(name) {
  activeCategory = name;

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === name);
  });

  renderResults(name);
}

function renderResults(name) {
  const data = WORKOUT_DATA[name];
  const meta = CATEGORY_META[name] || { emoji: "💪", colorVar: "#FF6B35" };
  const results = document.getElementById("results");
  const picked = pickRandom(data.exercises, data.pickCount);

  results.style.setProperty("--active-color", meta.colorVar);
  results.innerHTML = `
    <div class="results-header">
      <div class="results-header-row1">
        <span class="results-badge" style="background:${meta.colorVar}">${meta.emoji} ${name}</span>
        <span class="exercise-count">${data.exercises.length}種目から${picked.length}種目を抽選</span>
      </div>
      <div class="results-description">${data.description}</div>
    </div>
    <button class="reshuffle-btn" id="reshuffle-btn" style="--active-color:${meta.colorVar}">
      🔀 別の組み合わせを見る
    </button>
    <div class="exercise-list" id="exercise-list"></div>
  `;

  document.getElementById("reshuffle-btn").addEventListener("click", () => {
    reshuffleList(data, meta.colorVar);
  });

  renderExerciseList(picked, meta.colorVar);
}

function reshuffleList(data, color) {
  const btn = document.getElementById("reshuffle-btn");
  btn.disabled = true;
  btn.classList.add("pressed");
  setTimeout(() => btn.classList.remove("pressed"), 120);

  setTimeout(() => {
    const picked = pickRandom(data.exercises, data.pickCount);
    renderExerciseList(picked, color);
    btn.disabled = false;
  }, 300);
}

function renderExerciseList(exercises, color) {
  const list = document.getElementById("exercise-list");
  list.classList.add("list-exit");

  setTimeout(() => {
    list.innerHTML = "";
    exercises.forEach((ex, i) => {
      list.appendChild(createExerciseCard(ex, i + 1, color));
    });
    list.classList.remove("list-exit");
    list.classList.add("list-enter");
    setTimeout(() => list.classList.remove("list-enter"), 300);
  }, 150);
}

function createExerciseCard(exercise, index, color) {
  const card = document.createElement("div");
  card.className = "exercise-card";

  card.innerHTML = `
    <div class="card-header">
      <div class="card-number" style="background:${color}">${index}</div>
      <div class="card-title">
        <h3>${exercise.name}</h3>
        <div class="muscles-tag">${exercise.muscles}</div>
      </div>
      <div class="set-info">
        <div class="set-main">${exercise.sets}×${exercise.reps}回</div>
        <div class="set-sub">${exercise.sets}セット</div>
      </div>
      <span class="chevron">▼</span>
    </div>
    <div class="card-detail">
      <div class="detail-grid">
        <div class="detail-row-pair">
          <div class="detail-item">
            <div class="detail-label">セット数</div>
            <div class="detail-value">${exercise.sets} セット</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">レップ数</div>
            <div class="detail-value">${exercise.reps} 回</div>
          </div>
        </div>
        <div class="detail-item">
          <div class="detail-label">対象筋肉</div>
          <div class="detail-value">${exercise.muscles}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">フォーム・注意点</div>
          <div class="detail-value">${exercise.tips}</div>
        </div>
      </div>
    </div>
  `;

  card.querySelector(".card-header").addEventListener("click", () => {
    card.classList.toggle("expanded");
  });

  return card;
}

function renderEmpty() {
  const results = document.getElementById("results");
  results.innerHTML = `
    <div class="empty-state">
      <span class="empty-icon">🏋️</span>
      <h2>部位を選んでトレーニングを始めよう</h2>
      <p>上のボタンから鍛えたい部位を選ぶと<br>おすすめのトレーニングセットが表示されます。</p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", init);
