// PROJECTS and CAT_LABELS are defined in data.js

const TECH_LABELS = {
  html:     { icon: "🌐", label: "HTML / CSS / JS" },
  nextjs:   { icon: "▲",  label: "Next.js" },
  python:   { icon: "🐍", label: "Python" },
  system:   { icon: "⚙️", label: "GitHub Actions" },
  external: { icon: "🔗", label: "External" },
  googleai: { icon: "✦",  label: "Google AI Studio" },
};

function getParam(key) {
  return new URLSearchParams(location.search).get(key);
}

function findProject(id) {
  return PROJECTS.find(p => (p.dir === id) || (`ext_${p.day}` === id));
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

function render(project) {
  document.title = `${project.name} — 30 Days of Building with Claude`;

  const idx = PROJECTS.indexOf(project);
  const prev = PROJECTS[idx - 1] || null;
  const next = PROJECTS[idx + 1] || null;

  // Nav — shared between header (PC) and bottom bar (SP)
  const prevId = prev ? (prev.dir || `ext_${prev.day}`) : null;
  const nextId = next ? (next.dir || `ext_${next.day}`) : null;

  function buildNavItems() {
    const prevA = document.createElement("a");
    prevA.className = "nav-btn" + (prev ? "" : " disabled");
    prevA.textContent = "← Prev";
    if (prev) prevA.href = `detail.html?id=${encodeURIComponent(prevId)}`;

    const counter = document.createElement("span");
    counter.className = "nav-counter";
    counter.textContent = `${idx + 1} / ${PROJECTS.length}`;

    const nextA = document.createElement("a");
    nextA.className = "nav-btn" + (next ? "" : " disabled");
    nextA.textContent = "Next →";
    if (next) nextA.href = `detail.html?id=${encodeURIComponent(nextId)}`;

    return [prevA, counter, nextA];
  }

  document.getElementById("detailNav").append(...buildNavItems());
  document.getElementById("detailNavBottom").append(...buildNavItems());

  // Main
  const main = document.getElementById("detailMain");
  while (main.firstChild) main.removeChild(main.firstChild);

  // Hero
  const hero = document.createElement("div");
  hero.className = "detail-hero";

  // Row 1: Day badge + category tag
  const badgeRow = document.createElement("div");
  badgeRow.className = "detail-badge-row";

  const dayBadge = document.createElement("div");
  dayBadge.className = "detail-day-badge";
  dayBadge.textContent = `Day ${project.day} of 30`;

  const catTag = document.createElement("span");
  catTag.className = "detail-cat-tag";
  catTag.dataset.cat = project.category;
  catTag.textContent = CAT_LABELS[project.category];

  badgeRow.append(dayBadge, catTag);

  // Row 2: emoji + title
  const titleRow = document.createElement("div");
  titleRow.className = "detail-title-row";

  const emojiEl = document.createElement("span");
  emojiEl.className = "detail-emoji";
  emojiEl.textContent = project.emoji;

  const titleEl = document.createElement("h1");
  titleEl.className = "detail-title";
  titleEl.textContent = project.name;

  titleRow.append(emojiEl, titleEl);

  // Row 3: description
  const descEl = document.createElement("p");
  descEl.className = "detail-desc";
  descEl.textContent = project.desc;

  hero.append(badgeRow, titleRow, descEl);

  if (project.deployUrl) {
    const deployBtn = document.createElement("a");
    deployBtn.className = "detail-deploy-btn";
    deployBtn.textContent = "🌐 公開サイトを開く";
    deployBtn.href = project.deployUrl;
    deployBtn.target = "_blank";
    deployBtn.rel = "noopener noreferrer";
    hero.appendChild(deployBtn);
  }

  main.appendChild(hero);

  // Media section — video first (.mp4 / .mov), fallback to image (.png)
  const mediaKey = project.dir || `ext_${project.day}`;
  const mediaWrap = document.createElement("div");
  mediaWrap.className = "detail-video-wrap";
  mediaWrap.style.display = "none";
  main.appendChild(mediaWrap); // DOM に先に追加しておく

  const mediaLabel = document.createElement("div");
  mediaLabel.className = "detail-section-label";
  mediaLabel.textContent = "Demo";

  function showMediaWrap() {
    mediaWrap.prepend(mediaLabel);
    mediaWrap.style.display = "";
    if (!project.htmlFile) {
      const noPreviewWrap = main.querySelector(".detail-preview-wrap");
      if (noPreviewWrap) noPreviewWrap.remove();
    }
  }

  // Step1: try video (.mp4 → .mov)
  // <source> の error を個別に数えて全滅したら画像へ（video.error は複数 source 時に不安定）
  const video = document.createElement("video");
  video.className = "detail-video";
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";

  const videoExts = ["mp4", "mov"];
  let sourceFails = 0;

  function tryImage() {
    if (mediaWrap.contains(video)) mediaWrap.removeChild(video);
    const imgEl = document.createElement("img");
    imgEl.className = "detail-screenshot";
    imgEl.onload  = () => { mediaWrap.appendChild(imgEl); showMediaWrap(); };
    imgEl.onerror = () => { mediaWrap.remove(); };
    imgEl.src = `videos/${mediaKey}.png`;
  }

  videoExts.forEach(ext => {
    const src = document.createElement("source");
    src.src = `videos/${mediaKey}.${ext}`;
    src.addEventListener("error", () => {
      sourceFails++;
      if (sourceFails === videoExts.length) tryImage();
    });
    video.appendChild(src);
  });

  mediaWrap.appendChild(video);

  video.addEventListener("loadedmetadata", () => {
    showMediaWrap();
  }, { once: true });

  // Preview section
  const previewWrap = document.createElement("div");
  previewWrap.className = "detail-preview-wrap";
  const previewLabel = document.createElement("div");
  previewLabel.className = "detail-section-label";
  previewLabel.textContent = "Preview";
  previewWrap.appendChild(previewLabel);

  if (project.htmlFile) {
    // dir がない場合は htmlFile をそのまま使う（Day30 の自己参照など）
    const iframePath = project.dir ? `${project.dir}/${project.htmlFile}` : project.htmlFile;
    const phoneWrapper = document.createElement("div");
    phoneWrapper.className = "detail-phone-wrapper";
    const phoneMockup = document.createElement("div");
    phoneMockup.className = "detail-phone-mockup";
    const container = document.createElement("div");
    container.className = "detail-iframe-container";
    const iframe = document.createElement("iframe");
    iframe.src = iframePath;
    iframe.title = project.name;
    iframe.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
    container.appendChild(iframe);
    phoneMockup.appendChild(container);
    phoneWrapper.appendChild(phoneMockup);
    previewWrap.appendChild(phoneWrapper);
  } else {
    const noPreview = document.createElement("div");
    noPreview.className = "detail-no-preview";

    const icon = document.createElement("div");
    icon.className = "no-preview-icon";
    const titleNP = document.createElement("div");
    titleNP.className = "no-preview-title";
    const descNP = document.createElement("p");
    descNP.className = "no-preview-desc";
    noPreview.append(icon, titleNP, descNP);

    if (project.tech === "nextjs") {
      icon.textContent = "▲";
      titleNP.textContent = "Next.js アプリ";
      descNP.textContent = "このプロジェクトはNext.jsで動いています。プロジェクトフォルダで npm run dev を実行してご覧ください。";
      const folderBtn = document.createElement("a");
      folderBtn.className = "detail-link-btn ghost";
      folderBtn.textContent = "📁 フォルダを開く";
      folderBtn.href = `../${project.dir}/`;
      noPreview.appendChild(folderBtn);
    } else if (project.tech === "system") {
      icon.textContent = "⚙️";
      titleNP.textContent = "システム自動化ツール";
      descNP.textContent = "このプロジェクトはGitHub ActionsやCLIで動作するシステムです。READMEを参照してセットアップしてください。";
      const readmeBtn = document.createElement("a");
      readmeBtn.className = "detail-link-btn ghost";
      readmeBtn.textContent = "📄 READMEを読む";
      readmeBtn.href = `../${project.dir}/README.md`;
      noPreview.appendChild(readmeBtn);
    } else if (project.tech === "external" && project.tweetUrl) {
      icon.textContent = "🐶";
      titleNP.textContent = "X（Twitter）でシェア済み";
      descNP.textContent = "このプロジェクトはローカルフォルダが存在しない外部公開作品です。Xの投稿からご覧ください。";
      const tweetBtn = document.createElement("a");
      tweetBtn.className = "detail-link-btn orange";
      tweetBtn.textContent = "🔗 Xの投稿を見る";
      tweetBtn.href = project.tweetUrl;
      tweetBtn.target = "_blank";
      tweetBtn.rel = "noopener noreferrer";
      noPreview.appendChild(tweetBtn);
    } else {
      icon.textContent = "🔧";
      titleNP.textContent = "プレビュー非対応";
      descNP.textContent = "このプロジェクトはブラウザプレビューに対応していません。";
    }

    previewWrap.appendChild(noPreview);
  }
  main.appendChild(previewWrap);

  // Info grid
  const tech = TECH_LABELS[project.tech] || { icon: "📦", label: project.tech };
  const infoGrid = document.createElement("div");
  infoGrid.className = "detail-info-grid";

  const infoItems = [
    { label: "Day", value: `${project.day} / 30` },
    { label: "カテゴリ", value: CAT_LABELS[project.category] },
    { label: "技術スタック", value: `${tech.icon} ${tech.label}` },
  ];

  infoItems.forEach(({ label, value }) => {
    const card = document.createElement("div");
    card.className = "detail-info-card";
    const lbl = document.createElement("div");
    lbl.className = "info-label";
    lbl.textContent = label;
    const val = document.createElement("div");
    val.className = "info-value";
    {
      val.textContent = value;
    }
    card.append(lbl, val);
    infoGrid.appendChild(card);
  });

  main.appendChild(infoGrid);
}

// ===== INIT =====
const id = getParam("id");
if (id) {
  const project = findProject(id);
  if (project) {
    render(project);
  } else {
    const main = document.getElementById("detailMain");
    while (main.firstChild) main.removeChild(main.firstChild);
    const msg = document.createElement("p");
    msg.style.cssText = "text-align:center;color:var(--text-muted);padding:80px 0;";
    msg.textContent = "プロジェクトが見つかりませんでした。";
    main.appendChild(msg);
  }
} else {
  location.href = "index.html";
}
