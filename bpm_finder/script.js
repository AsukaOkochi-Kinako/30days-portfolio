// =====================
//  楽曲データベース（BPM付き）
// =====================
const SONGS = [
  // Pop
  { title: "Shape of You",            artist: "Ed Sheeran",               bpm: 96,  genre: "pop" },
  { title: "Blinding Lights",         artist: "The Weeknd",               bpm: 171, genre: "pop" },
  { title: "Starboy",                 artist: "The Weeknd",               bpm: 186, genre: "pop" },
  { title: "Bad Guy",                 artist: "Billie Eilish",            bpm: 135, genre: "pop" },
  { title: "Uptown Funk",             artist: "Bruno Mars",               bpm: 115, genre: "pop" },
  { title: "Can't Stop the Feeling", artist: "Justin Timberlake",        bpm: 113, genre: "pop" },
  { title: "Happy",                   artist: "Pharrell Williams",        bpm: 160, genre: "pop" },
  { title: "Shake It Off",            artist: "Taylor Swift",             bpm: 160, genre: "pop" },
  { title: "Cruel Summer",            artist: "Taylor Swift",             bpm: 170, genre: "pop" },
  { title: "Anti-Hero",               artist: "Taylor Swift",             bpm: 97,  genre: "pop" },
  { title: "Blank Space",             artist: "Taylor Swift",             bpm: 96,  genre: "pop" },
  { title: "Bad Blood",               artist: "Taylor Swift",             bpm: 172, genre: "pop" },
  { title: "Rolling in the Deep",     artist: "Adele",                    bpm: 105, genre: "pop" },
  { title: "Someone Like You",        artist: "Adele",                    bpm: 68,  genre: "pop" },
  { title: "Hello",                   artist: "Adele",                    bpm: 80,  genre: "pop" },
  { title: "Royals",                  artist: "Lorde",                    bpm: 86,  genre: "pop" },
  { title: "Pompeii",                 artist: "Bastille",                 bpm: 126, genre: "pop" },
  { title: "Counting Stars",          artist: "OneRepublic",              bpm: 122, genre: "pop" },
  { title: "Riptide",                 artist: "Vance Joy",                bpm: 96,  genre: "pop" },
  { title: "Cheap Thrills",           artist: "Sia",                      bpm: 93,  genre: "pop" },
  { title: "Chandelier",              artist: "Sia",                      bpm: 124, genre: "pop" },
  { title: "Stay With Me",            artist: "Sam Smith",                bpm: 84,  genre: "pop" },
  { title: "Roar",                    artist: "Katy Perry",               bpm: 90,  genre: "pop" },
  { title: "Firework",                artist: "Katy Perry",               bpm: 124, genre: "pop" },
  { title: "Thinking Out Loud",       artist: "Ed Sheeran",               bpm: 79,  genre: "pop" },
  { title: "Perfect",                 artist: "Ed Sheeran",               bpm: 95,  genre: "pop" },
  { title: "Castle on the Hill",      artist: "Ed Sheeran",               bpm: 132, genre: "pop" },
  { title: "Budapest",                artist: "George Ezra",              bpm: 89,  genre: "pop" },
  { title: "Take Me to Church",       artist: "Hozier",                   bpm: 130, genre: "pop" },
  { title: "Somebody That I Used to Know", artist: "Gotye",              bpm: 129, genre: "pop" },
  { title: "Watermelon Sugar",        artist: "Harry Styles",             bpm: 95,  genre: "pop" },
  { title: "As It Was",               artist: "Harry Styles",             bpm: 174, genre: "pop" },
  { title: "Levitating",              artist: "Dua Lipa",                 bpm: 103, genre: "pop" },
  { title: "Don't Start Now",         artist: "Dua Lipa",                 bpm: 124, genre: "pop" },
  { title: "Physical",                artist: "Dua Lipa",                 bpm: 138, genre: "pop" },
  { title: "Dynamite",                artist: "BTS",                      bpm: 114, genre: "pop" },
  { title: "Butter",                  artist: "BTS",                      bpm: 110, genre: "pop" },
  { title: "Permission to Dance",     artist: "BTS",                      bpm: 136, genre: "pop" },
  { title: "DNA",                     artist: "BTS",                      bpm: 148, genre: "pop" },
  { title: "Kill This Love",          artist: "BLACKPINK",                bpm: 126, genre: "pop" },
  { title: "How You Like That",       artist: "BLACKPINK",                bpm: 130, genre: "pop" },
  { title: "DDU-DU DDU-DU",           artist: "BLACKPINK",                bpm: 128, genre: "pop" },
  { title: "Pink Venom",              artist: "BLACKPINK",                bpm: 130, genre: "pop" },
  { title: "Fancy",                   artist: "TWICE",                    bpm: 125, genre: "pop" },
  { title: "Feel Special",            artist: "TWICE",                    bpm: 93,  genre: "pop" },
  { title: "Good 4 U",                artist: "Olivia Rodrigo",           bpm: 166, genre: "pop" },
  { title: "drivers license",         artist: "Olivia Rodrigo",           bpm: 72,  genre: "pop" },
  { title: "Stay",                    artist: "The Kid LAROI & Justin Bieber", bpm: 170, genre: "pop" },
  { title: "Sorry",                   artist: "Justin Bieber",            bpm: 100, genre: "pop" },
  { title: "Love Yourself",           artist: "Justin Bieber",            bpm: 111, genre: "pop" },
  { title: "What Do You Mean",        artist: "Justin Bieber",            bpm: 87,  genre: "pop" },

  // Hip-Hop
  { title: "HUMBLE.",                 artist: "Kendrick Lamar",           bpm: 150, genre: "hip-hop" },
  { title: "God's Plan",              artist: "Drake",                    bpm: 77,  genre: "hip-hop" },
  { title: "Hotline Bling",           artist: "Drake",                    bpm: 88,  genre: "hip-hop" },
  { title: "One Dance",               artist: "Drake",                    bpm: 104, genre: "hip-hop" },
  { title: "In My Feelings",          artist: "Drake",                    bpm: 84,  genre: "hip-hop" },
  { title: "Nice For What",           artist: "Drake",                    bpm: 130, genre: "hip-hop" },
  { title: "Sicko Mode",              artist: "Travis Scott",             bpm: 155, genre: "hip-hop" },
  { title: "Rockstar",                artist: "Post Malone",              bpm: 160, genre: "hip-hop" },
  { title: "Sunflower",               artist: "Post Malone",              bpm: 90,  genre: "hip-hop" },
  { title: "Congratulations",         artist: "Post Malone",              bpm: 120, genre: "hip-hop" },
  { title: "Psycho",                  artist: "Post Malone",              bpm: 138, genre: "hip-hop" },
  { title: "Old Town Road",           artist: "Lil Nas X",                bpm: 136, genre: "hip-hop" },
  { title: "INDUSTRY BABY",           artist: "Lil Nas X",                bpm: 99,  genre: "hip-hop" },
  { title: "Lucid Dreams",            artist: "Juice WRLD",               bpm: 84,  genre: "hip-hop" },
  { title: "Legends Never Die",       artist: "Juice WRLD",               bpm: 168, genre: "hip-hop" },
  { title: "Lose Yourself",           artist: "Eminem",                   bpm: 171, genre: "hip-hop" },
  { title: "Without Me",              artist: "Eminem",                   bpm: 108, genre: "hip-hop" },
  { title: "Rap God",                 artist: "Eminem",                   bpm: 154, genre: "hip-hop" },
  { title: "Stronger",                artist: "Kanye West",               bpm: 104, genre: "hip-hop" },
  { title: "Gold Digger",             artist: "Kanye West",               bpm: 116, genre: "hip-hop" },
  { title: "Power",                   artist: "Kanye West",               bpm: 88,  genre: "hip-hop" },
  { title: "All of the Lights",       artist: "Kanye West",               bpm: 100, genre: "hip-hop" },
  { title: "Savage",                  artist: "Megan Thee Stallion",      bpm: 91,  genre: "hip-hop" },
  { title: "Bodak Yellow",            artist: "Cardi B",                  bpm: 130, genre: "hip-hop" },
  { title: "WAP",                     artist: "Cardi B ft. Megan Thee Stallion", bpm: 91, genre: "hip-hop" },
  { title: "Formation",               artist: "Beyoncé",                  bpm: 154, genre: "hip-hop" },

  // Electronic
  { title: "Levels",                  artist: "Avicii",                   bpm: 128, genre: "electronic" },
  { title: "Wake Me Up",              artist: "Avicii",                   bpm: 124, genre: "electronic" },
  { title: "The Nights",              artist: "Avicii",                   bpm: 130, genre: "electronic" },
  { title: "Hey Brother",             artist: "Avicii",                   bpm: 128, genre: "electronic" },
  { title: "Animals",                 artist: "Martin Garrix",            bpm: 128, genre: "electronic" },
  { title: "In the Name of Love",     artist: "Martin Garrix & Bebe Rexha", bpm: 128, genre: "electronic" },
  { title: "Clarity",                 artist: "Zedd ft. Foxes",           bpm: 128, genre: "electronic" },
  { title: "The Middle",              artist: "Zedd, Maren Morris & Grey",bpm: 98,  genre: "electronic" },
  { title: "Titanium",                artist: "David Guetta ft. Sia",     bpm: 126, genre: "electronic" },
  { title: "Without You",             artist: "David Guetta ft. Usher",   bpm: 128, genre: "electronic" },
  { title: "Hey Mama",                artist: "David Guetta ft. Nicki Minaj", bpm: 113, genre: "electronic" },
  { title: "Get Lucky",               artist: "Daft Punk ft. Pharrell",   bpm: 116, genre: "electronic" },
  { title: "Around the World",        artist: "Daft Punk",                bpm: 121, genre: "electronic" },
  { title: "One More Time",           artist: "Daft Punk",                bpm: 123, genre: "electronic" },
  { title: "Harder Better Faster Stronger", artist: "Daft Punk",         bpm: 123, genre: "electronic" },
  { title: "Instant Crush",           artist: "Daft Punk ft. Julian Casablancas", bpm: 98, genre: "electronic" },
  { title: "Sandstorm",               artist: "Darude",                   bpm: 136, genre: "electronic" },
  { title: "Summer",                  artist: "Calvin Harris",            bpm: 128, genre: "electronic" },
  { title: "Feel So Close",           artist: "Calvin Harris",            bpm: 125, genre: "electronic" },
  { title: "This Is What You Came For", artist: "Calvin Harris ft. Rihanna", bpm: 124, genre: "electronic" },
  { title: "How Deep Is Your Love",   artist: "Calvin Harris & Disciples",bpm: 119, genre: "electronic" },
  { title: "Outside",                 artist: "Calvin Harris ft. Ellie Goulding", bpm: 125, genre: "electronic" },
  { title: "Lean On",                 artist: "Major Lazer & DJ Snake",   bpm: 98,  genre: "electronic" },
  { title: "Blue (Da Ba Dee)",        artist: "Eiffel 65",                bpm: 136, genre: "electronic" },
  { title: "What Is Love",            artist: "Haddaway",                 bpm: 135, genre: "electronic" },
  { title: "Freed from Desire",       artist: "Gala",                     bpm: 131, genre: "electronic" },
  { title: "Midnight City",           artist: "M83",                      bpm: 119, genre: "electronic" },
  { title: "Ghosts 'n' Stuff",        artist: "deadmau5",                 bpm: 128, genre: "electronic" },
  { title: "Strobe",                  artist: "deadmau5",                 bpm: 128, genre: "electronic" },
  { title: "Scary Monsters and Nice Sprites", artist: "Skrillex",        bpm: 140, genre: "electronic" },
  { title: "Bangarang",               artist: "Skrillex ft. Sirah",       bpm: 110, genre: "electronic" },

  // Dance
  { title: "Don't You Worry Child",   artist: "Swedish House Mafia",      bpm: 128, genre: "dance" },
  { title: "Save the World",          artist: "Swedish House Mafia",      bpm: 128, genre: "dance" },
  { title: "Can't Hold Us",           artist: "Macklemore & Ryan Lewis",  bpm: 146, genre: "dance" },
  { title: "Thrift Shop",             artist: "Macklemore & Ryan Lewis",  bpm: 97,  genre: "dance" },
  { title: "Turn Down for What",      artist: "DJ Snake & Lil Jon",       bpm: 100, genre: "dance" },
  { title: "Taki Taki",               artist: "DJ Snake ft. Selena Gomez",bpm: 100, genre: "dance" },
  { title: "We Found Love",           artist: "Rihanna ft. Calvin Harris", bpm: 128, genre: "dance" },
  { title: "Run the World (Girls)",   artist: "Beyoncé",                  bpm: 127, genre: "dance" },
  { title: "Work Work",               artist: "Britney Spears",           bpm: 136, genre: "dance" },
  { title: "Toxic",                   artist: "Britney Spears",           bpm: 143, genre: "dance" },
  { title: "Womanizer",               artist: "Britney Spears",           bpm: 136, genre: "dance" },

  // Rock
  { title: "Seven Nation Army",       artist: "The White Stripes",        bpm: 124, genre: "rock" },
  { title: "Mr. Brightside",          artist: "The Killers",              bpm: 148, genre: "rock" },
  { title: "Human",                   artist: "The Killers",              bpm: 131, genre: "rock" },
  { title: "Somebody Told Me",        artist: "The Killers",              bpm: 135, genre: "rock" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana",                  bpm: 117, genre: "rock" },
  { title: "Come as You Are",         artist: "Nirvana",                  bpm: 120, genre: "rock" },
  { title: "Lithium",                 artist: "Nirvana",                  bpm: 120, genre: "rock" },
  { title: "Don't Stop Me Now",       artist: "Queen",                    bpm: 156, genre: "rock" },
  { title: "We Will Rock You",        artist: "Queen",                    bpm: 81,  genre: "rock" },
  { title: "Bohemian Rhapsody",       artist: "Queen",                    bpm: 72,  genre: "rock" },
  { title: "Under Pressure",          artist: "Queen & David Bowie",      bpm: 110, genre: "rock" },
  { title: "Highway to Hell",         artist: "AC/DC",                    bpm: 116, genre: "rock" },
  { title: "Back in Black",           artist: "AC/DC",                    bpm: 92,  genre: "rock" },
  { title: "Thunderstruck",           artist: "AC/DC",                    bpm: 133, genre: "rock" },
  { title: "You Shook Me All Night Long", artist: "AC/DC",               bpm: 127, genre: "rock" },
  { title: "Welcome to the Jungle",   artist: "Guns N' Roses",            bpm: 128, genre: "rock" },
  { title: "Sweet Child O' Mine",     artist: "Guns N' Roses",            bpm: 122, genre: "rock" },
  { title: "Paradise City",           artist: "Guns N' Roses",            bpm: 113, genre: "rock" },
  { title: "Eye of the Tiger",        artist: "Survivor",                 bpm: 109, genre: "rock" },
  { title: "Don't Stop Believin'",    artist: "Journey",                  bpm: 119, genre: "rock" },
  { title: "Livin' on a Prayer",      artist: "Bon Jovi",                 bpm: 122, genre: "rock" },
  { title: "Jump",                    artist: "Van Halen",                bpm: 131, genre: "rock" },
  { title: "Here I Go Again",         artist: "Whitesnake",               bpm: 131, genre: "rock" },
  { title: "I Love Rock 'n' Roll",    artist: "Joan Jett",                bpm: 132, genre: "rock" },
  { title: "Kickstart My Heart",      artist: "Mötley Crüe",              bpm: 152, genre: "rock" },

  // R&B
  { title: "No Scrubs",               artist: "TLC",                      bpm: 93,  genre: "r&b" },
  { title: "Crazy in Love",           artist: "Beyoncé",                  bpm: 100, genre: "r&b" },
  { title: "Halo",                    artist: "Beyoncé",                  bpm: 68,  genre: "r&b" },
  { title: "Irreplaceable",           artist: "Beyoncé",                  bpm: 94,  genre: "r&b" },
  { title: "Umbrella",                artist: "Rihanna",                  bpm: 88,  genre: "r&b" },
  { title: "Work",                    artist: "Rihanna",                  bpm: 92,  genre: "r&b" },
  { title: "Stay",                    artist: "Rihanna",                  bpm: 64,  genre: "r&b" },
  { title: "Diamonds",                artist: "Rihanna",                  bpm: 126, genre: "r&b" },
  { title: "Kiss",                    artist: "Prince",                   bpm: 111, genre: "r&b" },
  { title: "Purple Rain",             artist: "Prince",                   bpm: 113, genre: "r&b" },
  { title: "Billie Jean",             artist: "Michael Jackson",          bpm: 117, genre: "r&b" },
  { title: "Beat It",                 artist: "Michael Jackson",          bpm: 139, genre: "r&b" },
  { title: "Thriller",                artist: "Michael Jackson",          bpm: 118, genre: "r&b" },
  { title: "Smooth Criminal",         artist: "Michael Jackson",          bpm: 118, genre: "r&b" },
  { title: "Don't Stop 'Til You Get Enough", artist: "Michael Jackson",   bpm: 112, genre: "r&b" },
  { title: "P.Y.T.",                  artist: "Michael Jackson",          bpm: 97,  genre: "r&b" },
  { title: "The Way You Make Me Feel",artist: "Michael Jackson",          bpm: 117, genre: "r&b" },
  { title: "Waterfalls",              artist: "TLC",                      bpm: 88,  genre: "r&b" },

  // J-Pop / Anime
  { title: "紅蓮華",                   artist: "LiSA",                     bpm: 150, genre: "j-pop" },
  { title: "炎 (Homura)",              artist: "LiSA",                     bpm: 130, genre: "j-pop" },
  { title: "残酷な天使のテーゼ",        artist: "高橋洋子",                  bpm: 138, genre: "j-pop" },
  { title: "夜に駆ける",               artist: "YOASOBI",                  bpm: 128, genre: "j-pop" },
  { title: "アイドル",                 artist: "YOASOBI",                  bpm: 182, genre: "j-pop" },
  { title: "群青",                     artist: "YOASOBI",                  bpm: 143, genre: "j-pop" },
  { title: "うっせぇわ",               artist: "Ado",                      bpm: 163, genre: "j-pop" },
  { title: "新時代",                   artist: "Ado",                      bpm: 119, genre: "j-pop" },
  { title: "踊",                       artist: "Ado",                      bpm: 94,  genre: "j-pop" },
  { title: "Lemon",                   artist: "米津玄師",                  bpm: 92,  genre: "j-pop" },
  { title: "KICK BACK",               artist: "米津玄師",                  bpm: 133, genre: "j-pop" },
  { title: "ピースサイン",             artist: "米津玄師",                  bpm: 130, genre: "j-pop" },
  { title: "馬と鹿",                   artist: "米津玄師",                  bpm: 164, genre: "j-pop" },
  { title: "Pretender",               artist: "Official髭男dism",          bpm: 93,  genre: "j-pop" },
  { title: "Cry Baby",                artist: "Official髭男dism",          bpm: 160, genre: "j-pop" },
  { title: "Subtitle",                artist: "Official髭男dism",          bpm: 89,  genre: "j-pop" },
  { title: "I LOVE...",               artist: "Official髭男dism",          bpm: 90,  genre: "j-pop" },
  { title: "Bling-Bang-Bang-Born",    artist: "Creepy Nuts",              bpm: 134, genre: "j-pop" },
  { title: "SPECIALZ",                artist: "King Gnu",                 bpm: 128, genre: "j-pop" },
  { title: "マリーゴールド",           artist: "あいみょん",                bpm: 95,  genre: "j-pop" },
  { title: "シルエット",               artist: "KANA-BOON",                bpm: 144, genre: "j-pop" },
  { title: "GO!",                     artist: "FLOW",                     bpm: 150, genre: "j-pop" },
  { title: "紅蓮の弓矢",               artist: "Linked Horizon",           bpm: 160, genre: "j-pop" },
  { title: "BUTTER-FLY",              artist: "和田光司",                  bpm: 140, genre: "j-pop" },
  { title: "haruka kanata",           artist: "ASIAN KUNG-FU GENERATION", bpm: 175, genre: "j-pop" },
  { title: "ループ",                   artist: "ASIAN KUNG-FU GENERATION", bpm: 188, genre: "j-pop" },
  { title: "君という花",               artist: "ASIAN KUNG-FU GENERATION", bpm: 163, genre: "j-pop" },
  { title: "ソルファ",                 artist: "ASIAN KUNG-FU GENERATION", bpm: 168, genre: "j-pop" },
  { title: "私は最強",                 artist: "Ado",                      bpm: 136, genre: "j-pop" },
  { title: "逆夢",                     artist: "King Gnu",                 bpm: 94,  genre: "j-pop" },
];

// =====================
//  定数
// =====================
const GENRE_ICONS = {
  "pop":        "🎤",
  "hip-hop":    "🎧",
  "electronic": "🎛️",
  "dance":      "💃",
  "rock":       "🎸",
  "r&b":        "🎙️",
  "j-pop":      "🌸",
};

const GENRE_CLASS = {
  "pop":        "pop",
  "hip-hop":    "hip-hop",
  "electronic": "electronic",
  "dance":      "dance",
  "rock":       "rock",
  "r&b":        "rb",
  "j-pop":      "jpop",
};

const PACE_LABELS = [
  { min: 0,   max: 100, label: "ウォーキング 🚶" },
  { min: 100, max: 125, label: "スロージョグ 🏃" },
  { min: 125, max: 145, label: "ジョギング 🏃"   },
  { min: 145, max: 165, label: "ランニング 🏃‍♂️"   },
  { min: 165, max: 180, label: "本気ラン ⚡"      },
  { min: 180, max: 999, label: "ダッシュ 🔥"      },
];

// =====================
//  状態
// =====================
let currentBpm   = 140;
let tolerance    = 5;
let shuffleSeed  = 0;

// =====================
//  楽曲フィルター
// =====================
function searchSongs(bpm, tol, genres) {
  const useAll = genres.includes("all") || genres.length === 0;

  return SONGS
    .filter(s => {
      const bpmOk   = Math.abs(s.bpm - bpm) <= tol;
      const genreOk = useAll || genres.includes(s.genre);
      return bpmOk && genreOk;
    })
    .sort((a, b) => Math.abs(a.bpm - bpm) - Math.abs(b.bpm - bpm));
}

// フィッシャー–イェーツシャッフル（seed付き）
function shuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(s) % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// =====================
//  UI ヘルパー
// =====================
function getPaceLabel(bpm) {
  return (PACE_LABELS.find(p => bpm >= p.min && bpm < p.max) || PACE_LABELS[0]).label;
}

function getSelectedGenres() {
  return [...document.querySelectorAll("#genre-chips .chip.active")]
    .map(el => el.dataset.genre);
}

function ytUrl(title, artist) {
  return `https://music.youtube.com/search?q=${encodeURIComponent(title + " " + artist)}`;
}

function showError(msg) {
  const el = document.getElementById("error-banner");
  el.textContent = "⚠ " + msg;
  el.classList.remove("hidden");
}

function hideError() {
  document.getElementById("error-banner").classList.add("hidden");
}

// =====================
//  BPM 表示更新
// =====================
function updateBpmDisplay(bpm) {
  currentBpm = bpm;
  document.getElementById("bpm-number").textContent = bpm;
  document.getElementById("bpm-slider").value = bpm;
  document.getElementById("pace-label").textContent = getPaceLabel(bpm);
}

// =====================
//  結果レンダリング
// =====================
function renderResults(songs) {
  const list = document.getElementById("track-list");
  list.innerHTML = "";

  if (!songs.length) {
    list.innerHTML = `
      <div class="no-results">
        <p>😢 <strong>${currentBpm} BPM ±${tolerance}</strong> に一致する曲が見つかりませんでした。<br>
        許容範囲を広げるか、別のジャンルを試してください。</p>
      </div>`;
    return;
  }

  songs.forEach(s => {
    const card = document.createElement("a");
    card.className  = "track-card";
    card.href       = ytUrl(s.title, s.artist);
    card.target     = "_blank";
    card.rel        = "noopener";

    const icon      = GENRE_ICONS[s.genre] || "🎵";
    const iconClass = GENRE_CLASS[s.genre] ? "icon-" + GENRE_CLASS[s.genre] : "icon-default";

    card.innerHTML = `
      <div class="track-icon ${iconClass}">${icon}</div>
      <div class="track-info">
        <div class="track-name">${escHtml(s.title)}</div>
        <div class="track-artist">${escHtml(s.artist)}</div>
      </div>
      <div class="track-meta">
        <span class="bpm-badge">${s.bpm} BPM</span>
        <span class="yt-badge"><span class="yt-icon">▶</span>YT Music</span>
      </div>`;
    list.appendChild(card);
  });
}

function escHtml(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

// =====================
//  検索実行
// =====================
function doSearch(reshuffle = false) {
  hideError();

  const genres = getSelectedGenres();
  if (genres.length === 0) {
    showError("ジャンルをひとつ以上選択してください");
    return;
  }

  if (reshuffle) shuffleSeed++;

  let results = searchSongs(currentBpm, tolerance, genres);

  // 20曲を上限にシャッフルで表示（再検索で変わる）
  if (results.length > 20) {
    results = shuffle(results, shuffleSeed).slice(0, 20)
      .sort((a, b) => Math.abs(a.bpm - currentBpm) - Math.abs(b.bpm - currentBpm));
  }

  document.getElementById("results-tag").textContent =
    `${currentBpm} BPM ±${tolerance} の曲 (${results.length}件)`;
  renderResults(results);

  const sec = document.getElementById("results-section");
  sec.classList.remove("hidden");
  sec.scrollIntoView({ behavior: "smooth", block: "start" });
}

// =====================
//  イベントリスナー
// =====================
function initEvents() {
  // スライダー
  document.getElementById("bpm-slider").addEventListener("input", e => {
    updateBpmDisplay(parseInt(e.target.value));
  });

  // ±ボタン（長押し対応）
  let holdTimer = null, holdInterval = null;
  function startHold(dir) {
    holdTimer = setTimeout(() => {
      holdInterval = setInterval(() => {
        updateBpmDisplay(Math.max(60, Math.min(210, currentBpm + dir)));
      }, 80);
    }, 400);
  }
  function stopHold() { clearTimeout(holdTimer); clearInterval(holdInterval); }

  [["btn-bpm-minus", -1], ["btn-bpm-plus", 1]].forEach(([id, dir]) => {
    const btn = document.getElementById(id);
    btn.addEventListener("click",      () => updateBpmDisplay(Math.max(60, Math.min(210, currentBpm + dir))));
    btn.addEventListener("mousedown",  () => startHold(dir));
    btn.addEventListener("touchstart", () => startHold(dir), { passive: true });
    ["mouseup","mouseleave","touchend"].forEach(ev => btn.addEventListener(ev, stopHold));
  });

  // 許容範囲
  document.getElementById("tolerance-group").addEventListener("click", e => {
    const btn = e.target.closest(".toggle-btn");
    if (!btn) return;
    document.querySelectorAll(".toggle-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    tolerance = parseInt(btn.dataset.value);
  });

  // ジャンルチップ
  document.getElementById("genre-chips").addEventListener("click", e => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    if (chip.dataset.genre === "all") {
      // ALL を押したら他を全解除
      document.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    } else {
      document.querySelector(".chip[data-genre='all']").classList.remove("active");
      chip.classList.toggle("active");
      // 何も選択されなくなったら ALL に戻す
      if (!document.querySelector(".chip.active")) {
        document.querySelector(".chip[data-genre='all']").classList.add("active");
      }
    }
  });

  // 検索 & シャッフル
  document.getElementById("btn-search").addEventListener("click", () => doSearch(false));
  document.getElementById("btn-refresh").addEventListener("click", () => doSearch(true));
}

// =====================
//  初期化
// =====================
function init() {
  initEvents();
  updateBpmDisplay(currentBpm);
}

init();
