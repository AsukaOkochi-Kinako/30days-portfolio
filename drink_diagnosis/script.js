// ===========================
//  お酒データ
// ===========================
const DRINKS = {
  "beer": {
    name: "ビール",
    nameEn: "BEER",
    emoji: "🍺",
    color: "#d4860a",
    tagline: "今夜もこれで乾杯",
    reason: "気分が盛り上がる席や食事との相性が抜群。炭酸のキレが食欲を刺激し、どんな料理とも合わせやすい万能な一杯です。居酒屋からスポーツバーまで、どんな場所でも楽しめます。",
    features: ["麦の豊かな香りと程よい苦み", "炭酸の爽快な喉越し", "どんな料理とも相性が万能"],
    abv: "4〜6%",
    calories: "350ml缶で約140〜175kcal",
    fattening: 3,
    fatNote: "糖質が多め（100mlあたり約3g）で飲みすぎると糖質過多になりやすい。ただしアルコールのカロリーは「エンプティカロリー」で脂肪になりにくいという特性も。プリン体も含まれます。",
    mapsQuery: "ビアバー"
  },
  "highball": {
    name: "ハイボール",
    nameEn: "HIGHBALL",
    emoji: "🥃",
    color: "#c8a055",
    tagline: "スマートな大人の一杯",
    reason: "仕事終わりのリフレッシュや、お酒をスマートに楽しみたいあなたに。糖質ほぼゼロ・低カロリーで飲み疲れしにくく、どんな料理にも合う懐の深い一杯です。",
    features: ["ウイスキーの豊かな香りと炭酸の爽快感", "糖質ほぼゼロで飲みやすい", "焼き鳥・唐揚げなど揚げ物との相性◎"],
    abv: "5〜9%（割り方による）",
    calories: "200mlで約50〜70kcal",
    fattening: 1,
    fatNote: "ウイスキーと炭酸水だけで作られるため糖質ほぼゼロ。アルコールのカロリーはあるが糖質・脂質を含まないため太りにくいお酒の代表格。ダイエット中でも選びやすい。",
    mapsQuery: "ウイスキーバー"
  },
  "red-wine": {
    name: "赤ワイン",
    nameEn: "RED WINE",
    emoji: "🍷",
    color: "#c03040",
    tagline: "大人のひととき",
    reason: "深みある味わいと肉料理との相性はまさに最高の組み合わせ。ゆっくり味わいたい特別な夜に、その複雑な旨みが一層会話を豊かにしてくれます。",
    features: ["タンニンの渋みと豊かな果実味", "ステーキ・チーズとの完璧なペアリング", "ポリフェノールが豊富で美肌効果も"],
    abv: "12〜15%",
    calories: "グラス1杯（150ml）で約105〜135kcal",
    fattening: 2,
    fatNote: "糖質が白ワインより少なく（100mlあたり約1.5g）、ポリフェノールの代謝促進効果も期待できる。度数は高めなのでカロリー自体は多いが、1〜2杯程度なら比較的太りにくい部類。",
    mapsQuery: "ワインバー"
  },
  "white-wine": {
    name: "白ワイン",
    nameEn: "WHITE WINE",
    emoji: "🥂",
    color: "#c8b030",
    tagline: "爽やかな香りと共に",
    reason: "フルーティで爽やかな酸味が好きなあなたにぴったり。魚介料理や野菜料理との相性が抜群で、キンと冷えた一杯が食欲をさらに引き立てます。",
    features: ["爽やかな酸味とフルーティな香り", "魚介・野菜・チーズとの相性抜群", "冷やして飲む爽快感"],
    abv: "10〜13%",
    calories: "グラス1杯（150ml）で約100〜120kcal",
    fattening: 2,
    fatNote: "辛口を選べば糖質は低め（100mlあたり約2〜3g）。赤ワインと比べ糖質がやや高い傾向だが、適量なら問題なし。食事と合わせることでカロリーの吸収が緩やかになる。",
    mapsQuery: "ワインバー 白ワイン"
  },
  "sake": {
    name: "日本酒",
    nameEn: "SAKE",
    emoji: "🍶",
    color: "#a09060",
    tagline: "和の美学、一献",
    reason: "日本の食文化に寄り添い、和食との相性は最高峰。冷やし（冷）でも温燗でも楽しめ、その豊かな旨みがしっぽりとした夜を演出してくれます。",
    features: ["米の旨みとふくよかな香り", "和食・刺身との完璧な調和", "冷・常温・燗と多彩な楽しみ方"],
    abv: "14〜16%",
    calories: "1合（180ml）で約180〜200kcal",
    fattening: 3,
    fatNote: "糖質は種類による（純米系は高め、辛口は低め）。1合180mlで約180kcalと比較的カロリー高め。ただし良質なアミノ酸が豊富で、美肌・血流促進効果もあるとされる。飲みすぎには注意。",
    mapsQuery: "日本酒バー"
  },
  "sour": {
    name: "サワー・チューハイ",
    nameEn: "SOUR",
    emoji: "🍋",
    color: "#70a830",
    tagline: "フルーティに気軽に",
    reason: "お酒が弱い方でも気軽に楽しめる、フルーティな甘酸っぱさが魅力。種類が豊富で自分好みの一杯を見つけやすく、みんなで盛り上がる席でも頼みやすい。",
    features: ["フルーティで飲みやすい", "豊富なフレーバーから選べる", "度数低めで安心して楽しめる"],
    abv: "3〜9%（種類による）",
    calories: "350mlで約50〜120kcal（種類による）",
    fattening: 2,
    fatNote: "甘いフレーバーは糖質が高め（100mlで最大8g程度）。ただし「ゼロ糖質」タイプも豊富。レモンサワーなど辛口タイプなら糖質控えめ。選ぶ種類でカロリーが大きく変わる。",
    mapsQuery: "レモンサワー 居酒屋"
  },
  "sparkling": {
    name: "スパークリングワイン",
    nameEn: "SPARKLING",
    emoji: "🍾",
    color: "#c8a820",
    tagline: "特別な夜に乾杯",
    reason: "おしゃれな気分や記念日にぴったり。繊細な泡とフルーティな香りが、特別なひとときをさらに輝かせてくれます。食前酒から食事中まで幅広く活躍する一本です。",
    features: ["繊細な泡と華やかな香り", "記念日・祝いの席に最高", "食前酒にも食事中にも合う万能さ"],
    abv: "10〜12%",
    calories: "グラス1杯（120ml）で約85〜96kcal",
    fattening: 1,
    fatNote: "辛口スパークリングは糖質が少なく（100mlあたり約1〜2g）カロリーも控えめ。炭酸が満腹感を与えるため過食も防げる。甘口タイプは糖質が高くなるので辛口を選ぶのが◎。",
    mapsQuery: "シャンパンバー"
  },
  "whiskey": {
    name: "ウイスキー",
    nameEn: "WHISKEY",
    emoji: "🥃",
    color: "#b06820",
    tagline: "深夜の独り言に",
    reason: "お酒の深みを知るあなたへ。樽で長年熟成された複雑な香りと長い余韻が、静かな夜をより豊かにしてくれます。少量をじっくり味わう大人の楽しみ方です。",
    features: ["樽熟成の複雑な香りと長い余韻", "少量でじっくり楽しめる贅沢感", "ストレート・ロック・水割りで多彩な変化"],
    abv: "40〜43%（割り方で変動）",
    calories: "シングル（30ml）で約70kcal",
    fattening: 1,
    fatNote: "蒸留酒のため糖質はほぼゼロ。少量でも満足感が得られるため総カロリーを抑えやすい。ただし度数が非常に高いので飲みすぎに注意。ゆっくり少量を楽しむのがベスト。",
    mapsQuery: "ウイスキーバー"
  },
  "cocktail": {
    name: "カクテル",
    nameEn: "COCKTAIL",
    emoji: "🍸",
    color: "#9040a0",
    tagline: "気分に合わせた一杯を",
    reason: "その日の気分にぴったりの一杯を見つけたいあなたに。バーテンダーが作る本格カクテルは見た目も美しく、甘さ・強さを自分好みに選べる自由な楽しみ方が魅力です。",
    features: ["多彩なフレーバーと美しい見た目", "甘さ・アルコール度数を好みで選べる", "バーの雰囲気をより一層楽しめる"],
    abv: "5〜25%（種類による）",
    calories: "1杯で約100〜200kcal（種類による）",
    fattening: 3,
    fatNote: "甘いシロップやジュースを使うカクテルは糖質が高め（1杯で15〜25g程度）。ジントニック・ウォッカソーダなど炭酸系は比較的低カロリー。種類の選び方でかなり変わる。",
    mapsQuery: "カクテルバー"
  }
};

// ===========================
//  質問データ
// ===========================
const QUESTIONS = [
  {
    q: "今夜のムードは？",
    options: [
      { label: "🎉 みんなでわいわい盛り上がりたい", scores: { beer: 3, sour: 2, cocktail: 1 } },
      { label: "🌙 ゆったりしっぽり飲みたい",       scores: { sake: 3, "red-wine": 2, whiskey: 1 } },
      { label: "✨ ちょっとおしゃれな気分",           scores: { sparkling: 3, "white-wine": 2, cocktail: 1 } },
      { label: "💼 仕事終わりにすっきりしたい",       scores: { highball: 3, beer: 2, whiskey: 1 } },
    ]
  },
  {
    q: "好みの味は？",
    options: [
      { label: "🍬 甘くてフルーティが好き",         scores: { cocktail: 3, sour: 2, sparkling: 1 } },
      { label: "🍋 さっぱり爽やかが好き",           scores: { "white-wine": 3, sour: 2, highball: 1 } },
      { label: "🌿 苦み・渋みのある深い味が好き",   scores: { beer: 3, "red-wine": 2, whiskey: 1 } },
      { label: "🍶 旨みやコクのある味が好き",       scores: { sake: 3, "red-wine": 2, whiskey: 1 } },
    ]
  },
  {
    q: "今夜の食事は？",
    options: [
      { label: "🥩 がっつりお肉料理",               scores: { "red-wine": 3, beer: 2, sake: 1 } },
      { label: "🐟 魚介・和食・お刺身",             scores: { sake: 3, "white-wine": 2, beer: 1 } },
      { label: "🧀 チーズ・洋食・イタリアン",       scores: { sparkling: 2, "white-wine": 2, "red-wine": 1 } },
      { label: "🍟 軽いおつまみだけ・食事なし",     scores: { highball: 3, sour: 2, cocktail: 1 } },
    ]
  },
  {
    q: "アルコールの強さは？",
    options: [
      { label: "🌊 弱め（ほろ酔い程度でOK）",       scores: { sour: 3, beer: 2, cocktail: 1 } },
      { label: "⚖️ ちょうどいいくらい",             scores: { "white-wine": 2, highball: 2, beer: 1, sparkling: 1 } },
      { label: "🔥 しっかりしたものを飲みたい",     scores: { "red-wine": 2, sake: 2, whiskey: 3 } },
      { label: "😅 実はお酒はあまり強くない",       scores: { sour: 3, cocktail: 2, beer: 1 } },
    ]
  },
  {
    q: "カロリーや糖質は気になりますか？",
    options: [
      { label: "💪 全然気にしない！",               scores: { sake: 1, beer: 1, cocktail: 1 } },
      { label: "🤔 少しだけ気になる",               scores: { "white-wine": 1, sparkling: 1, sour: 1 } },
      { label: "🌿 できるだけ抑えたい",             scores: { highball: 3, whiskey: 2, sparkling: 1 } },
      { label: "🍇 体にも嬉しいものを選びたい",     scores: { "red-wine": 3, "white-wine": 1, sparkling: 1 } },
    ]
  },
  {
    q: "今夜のシチュエーションは？",
    options: [
      { label: "👫 デートや記念日の特別な夜",       scores: { sparkling: 3, "white-wine": 2, cocktail: 1 } },
      { label: "👥 友達とにぎやかに",               scores: { beer: 3, sour: 2, highball: 1 } },
      { label: "🛋️ 家でひとりリラックス",           scores: { whiskey: 3, sake: 2, "red-wine": 1 } },
      { label: "🍽️ 良いお店でゆっくりディナー",     scores: { "red-wine": 2, sparkling: 2, sake: 1, "white-wine": 1 } },
    ]
  },
];

// ===========================
//  状態
// ===========================
let currentQ = 0;
let scores   = {};

function initScores() {
  scores = {};
  Object.keys(DRINKS).forEach(k => { scores[k] = 0; });
}

// ===========================
//  DOM ユーティリティ
// ===========================
const $ = id => document.getElementById(id);

function show(id) { $(id).classList.remove("hidden"); }
function hide(id) { $(id).classList.add("hidden"); }

// ===========================
//  クイズ表示
// ===========================
function renderQuestion(index) {
  const q = QUESTIONS[index];

  const dotsEl = $("progress-dots");
  dotsEl.innerHTML = "";
  QUESTIONS.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i < index ? " done" : i === index ? " active" : "");
    dotsEl.appendChild(dot);
  });

  $("q-counter").textContent = "Q " + (index + 1) + " / " + QUESTIONS.length;
  $("q-text").textContent = q.q;

  const optionsEl = $("options");
  optionsEl.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.label;
    btn.addEventListener("click", () => handleAnswer(opt.scores, btn));
    optionsEl.appendChild(btn);
  });
}

function handleAnswer(optScores, btn) {
  document.querySelectorAll(".option-btn").forEach(b => {
    b.style.pointerEvents = "none";
    b.style.opacity = "0.5";
  });
  btn.classList.add("selected");
  btn.style.opacity = "1";

  Object.entries(optScores).forEach(([drink, pts]) => {
    scores[drink] = (scores[drink] || 0) + pts;
  });

  currentQ++;

  setTimeout(() => {
    if (currentQ >= QUESTIONS.length) {
      showLoading();
    } else {
      renderQuestion(currentQ);
    }
  }, 280);
}

// ===========================
//  ローディング
// ===========================
function showLoading() {
  hide("quiz-screen");
  show("loading-screen");

  const emojis = ["🍷", "🍺", "🥃", "🍸", "🍾", "🍶"];
  let i = 0;
  const interval = setInterval(() => {
    $("loading-emoji").textContent = emojis[i % emojis.length];
    i++;
  }, 320);

  setTimeout(() => {
    clearInterval(interval);
    showResult(getTopDrink());
  }, 2000);
}

// ===========================
//  結果
// ===========================
function getTopDrink() {
  return Object.entries(scores)
    .sort(([, a], [, b]) => b - a)[0][0];
}

function fatStars(level) {
  return "●".repeat(level) + "○".repeat(5 - level);
}

function showResult(drinkId) {
  hide("loading-screen");

  const d = DRINKS[drinkId];
  document.documentElement.style.setProperty("--drink-color", d.color);

  $("result-emoji").textContent     = d.emoji;
  $("result-name").textContent      = d.name;
  $("result-name-en").textContent   = d.nameEn;
  $("result-tagline").textContent   = d.tagline;
  $("result-reason").textContent    = d.reason;
  $("result-abv").textContent       = d.abv;
  $("result-calories").textContent  = d.calories;
  $("result-fat-stars").textContent = fatStars(d.fattening);
  $("result-fat-note").textContent  = d.fatNote;

  const featEl = $("result-features");
  featEl.innerHTML = "";
  d.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featEl.appendChild(li);
  });

  const mapsUrl = "https://www.google.com/maps/search/" + encodeURIComponent(d.mapsQuery);
  const mapsBtn = $("maps-btn");
  mapsBtn.href = mapsUrl;

  const mapsLabel = $("maps-label");
  mapsLabel.textContent = "近くの" + d.mapsQuery + "を探す";

  show("result-screen");
}

// ===========================
//  リセット
// ===========================
function resetQuiz() {
  hide("result-screen");
  initScores();
  currentQ = 0;
  renderQuestion(0);
  show("quiz-screen");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ===========================
//  イベント
// ===========================
$("btn-start").addEventListener("click", () => {
  hide("start-screen");
  initScores();
  currentQ = 0;
  renderQuestion(0);
  show("quiz-screen");
});

$("btn-retry").addEventListener("click", resetQuiz);
