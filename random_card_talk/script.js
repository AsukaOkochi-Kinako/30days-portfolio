const DATA = {
  l: {
    icons: ['🎂','🐾','🍜','🎮','✈️','🍳','☕','🌸','🛋️','⭐','🎬','🎤','🥦','🏖️','🎁','🎯','🏡','📸','🎥','🌈'],
    qs: [
      '誕生日はいつ？',
      'ペットを飼ったことある？',
      '好きな食べ物は何？',
      '最近ハマってることは？',
      '行ってみたい国はどこ？',
      '得意料理ってある？',
      '朝型？夜型？どっち？',
      '好きな季節は？',
      '休日はどんな\n過ごし方してる？',
      '子供の頃の夢は\n何だった？',
      '好きな映画のジャンルは？',
      'カラオケで必ず\n入れる曲は？',
      '苦手な食べ物はある？',
      '旅行するなら\n海派？山派？',
      '今一番\n欲しいものは何？',
      '特技や趣味を教えて！',
      'コーヒー派？お茶派？',
      '出身はどこ？',
      '最近笑ったこと、\n何かある？',
      '自分をひとことで\n表すとしたら？',
    ],
  },
  v: {
    icons: ['💘','🦋','🌹','🎡','💌','✨','💍','📱','🫶','💬','🗓️','🍽️','🤔','⚡','👀','😊','🌍','💭','😍','🌙'],
    qs: [
      'どんな人がタイプ？',
      '異性のどんな行動に\nドキッとする？',
      '告白するなら\nどんな場所がいい？',
      '付き合ったら\n最初のデートはどこ？',
      '好きな人への\nアプローチ方法は？',
      '「いいな」と思う瞬間は\nどんな時？',
      '理想のプロポーズって？',
      '連絡はこまめにしてほしい派？',
      '嫉妬深い方？\n全然しない方？',
      'LINEの返信、\nどのくらいの頻度がいい？',
      '記念日は大切にする派？',
      '初デートの食事は\n和食・洋食・その他どれ？',
      '付き合う前に\n確認したいことってある？',
      '恋愛と仕事、\n正直どっちを優先する？',
      '一目惚れって信じる？',
      '好きな人ができたら\nすぐバレる？隠せる？',
      '別れた後、\n友達に戻れる？',
      '遠距離恋愛は\nアリ？ナシ？',
      '相手に求める条件を\n3つあげるとしたら？',
      '今まで一番\nドキッとした瞬間は？',
    ],
  },
  f: {
    icons: ['🤝','💬','🏕️','🗺️','🎂','😂','🌟','⏳','🤫','🏆','🫂','🪞','🏝️','🌱','🎯','📞','💝','🎉','🔥','🌻'],
    qs: [
      '友達に「信頼できる！」と\n思う瞬間は？',
      '友達とケンカしたとき\nどうやって仲直りする？',
      '一緒にいて一番落ち着く人は\nどんな人？',
      'グループ旅行で\n担当したい役割は？',
      '友達の誕生日、\nどんなお祝いをしたい？',
      '一番笑った\n思い出のエピソードは？',
      '友達の「ここ尊敬するな」と\n思う部分は？',
      '長い付き合いになる人の\n共通点って何だと思う？',
      '連絡不精だと思う？\nわりとマメ？',
      '友達に絶対言えない秘密\nってある？（言わなくていいよ！）',
      'この中で一番〇〇そうな人は？\n（テーマ決めてみんなで投票！）',
      '友達に支えてもらった\n一番の思い出は？',
      'グループの中で\n自分はどんなキャラだと思う？',
      '無人島に一人だけ連れていくなら\n誰を選ぶ？',
      '友達の「ここは見習いたい」\nと思うところは？',
      '一緒にやってみたいことは何？',
      '友達に言われて\n一番嬉しかった言葉は？',
      '今の自分をひとことで\n表すとしたら？',
      '10年後、このメンバーで\n何してると思う？',
      '今日の集まりで\n一番面白かったことは？',
    ],
  },
};

let mode = 'l';
let barClass = 'bl';
let used = [];

function setMode(m, btnCls, bar) {
  mode = m;
  barClass = bar;
  used = [];

  document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.mode-btn.' + btnCls).classList.add('active');

  const card = document.getElementById('card');
  card.className = 'card init';

  document.getElementById('nbtn').className = 'next-btn ' + bar;

  const pb = document.getElementById('pbar');
  pb.className = 'prog-bar ' + bar;
  pb.style.width = '0%';

  document.getElementById('cnum').textContent = 'QUESTION';
  document.getElementById('cicon').textContent = m === 'l' ? '🎴' : m === 'v' ? '💕' : '🤝';
  document.getElementById('cq').innerHTML = 'シャッフルして<br>話題をゲット！';
  document.getElementById('ptxt').innerHTML = '&nbsp;';
}

function reset() {
  used = [];
  document.getElementById('pbar').style.width = '0%';
  document.getElementById('ptxt').textContent = 'リセットしました！';
  setTimeout(() => {
    document.getElementById('ptxt').innerHTML = '&nbsp;';
  }, 1500);
}

function next() {
  const d = DATA[mode];

  if (used.length >= d.qs.length) used = [];

  const avail = d.qs.map((_, i) => i).filter(i => !used.includes(i));
  const idx = avail[Math.floor(Math.random() * avail.length)];
  used.push(idx);

  const card = document.getElementById('card');
  const modeClass = mode === 'l' ? 'cl' : mode === 'v' ? 'cv' : 'cf';
  card.className = 'card ' + modeClass;
  card.classList.remove('pop');
  void card.offsetWidth; // アニメーションリセット
  card.classList.add('pop');

  document.getElementById('cnum').textContent = 'QUESTION ' + String(used.length).padStart(2, '0');
  document.getElementById('cicon').textContent = d.icons[idx];
  document.getElementById('cq').innerHTML = d.qs[idx].replace(/\n/g, '<br>');

  const pct = Math.round(used.length / d.qs.length * 100);
  document.getElementById('pbar').style.width = pct + '%';
  document.getElementById('ptxt').textContent = used.length + ' / ' + d.qs.length + ' 問';
}
