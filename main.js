/* ============================================================
   HZDavy — 极简黑白 · 卡片与微交互
   i18n（zh-Hans · zh-Hant · en · ja · ko）
   加载器 · 打字机 · 解密 · 字之场 · 倾斜聚光卡 · 磁吸 · 光标
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. 文案
     --------------------------------------------------------- */
  var I18N = {
    "zh-Hans": {
      "page.title": "HZDavy — 航志",
      "page.desc": "HZDavy — 独立开发者，造界面，也造工具。",
      "a11y.skip": "跳至正文",
      "theme.title": "切换配色",
      "nav.works": "作品", "nav.lab": "器物", "nav.log": "航志", "nav.contact": "通讯",
      "hero.eyebrow": "hzdavy // 独立开发 // 纪年 2026",
      "hero.tagline": "独自造物，久居案前。",
      "hero.decrypt": "解其所余",
      "hero.mystery": "已尽言。余下的，睡在稿与案之间。",
      "hero.scroll": "↓ 向下",
      "works.label": "作品 / WORKS",
      "works.hint": "悬停，卡片会倾向你。",
      "works.new": "新作",
      "works.1.name": "智能家居中枢", "works.1.state": "已布 · 开源",
      "works.2.name": "用量之监，悬于屏隅", "works.2.state": "已布 · 在线",
      "works.3.name": "摄像头之控", "works.3.state": "已布 · 在线",
      "works.4.name": "本机之桥", "works.4.state": "已布 · 在线",
      "works.5.title": "中外建筑师", "works.5.name": "对照总表", "works.5.state": "已布 · 在线",
      "works.6.name": "文字之炉", "works.6.state": "已布 · 在线",
      "works.7.name": "异构之室", "works.7.state": "已布 · 在线",
      "lab.label": "器物 / LAB",
      "lab.hint": "几件小器，可以动手。",
      "lab.field": "字之场 · 移动光标",
      "lab.weight": "字重 · 拖动",
      "lab.clock": "此刻 · 本地",
      "lab.dots": "点阵 · 点按",
      "log.label": "航志 / LOG",
      "log.lede": "此处记录所造之物。",
      "log.line1": "所愿甚多，所成实寡。",
      "log.line2": "已成之稿，皆泊于 GitHub。",
      "stat.projects": "所布之作", "stat.langs": "语言文字", "stat.since": "航行纪年",
      "contact.label": "通讯 / CONTACT",
      "contact.copy": "点按复制",
      "toast.copied": "已复制邮箱",
      "promo.close": "关闭",
      "promo.flag": "来讯 / INCOMING",
      "promo.desc": "将 Coding Plan 与 Agent Plan 之余量，悬于屏隅。",
      "promo.meta3": "免费 · AGPL-3.0 · 单档",
      "promo.cta": "免费取用",
      "footer.note": "不设追踪 · 不留 Cookie · 纯静态",
      "footer.top": "↑ 回顶"
    },

    "zh-Hant": {
      "page.title": "HZDavy — 航誌",
      "page.desc": "HZDavy — 獨立開發者，造介面，也造工具。",
      "a11y.skip": "跳至正文",
      "theme.title": "切換配色",
      "nav.works": "作品", "nav.lab": "器物", "nav.log": "航誌", "nav.contact": "通訊",
      "hero.eyebrow": "hzdavy // 獨立開發 // 紀年 2026",
      "hero.tagline": "獨自造物，久居案前。",
      "hero.decrypt": "解其所餘",
      "hero.mystery": "已盡言。餘下的，睡在稿與案之間。",
      "hero.scroll": "↓ 向下",
      "works.label": "作品 / WORKS",
      "works.hint": "懸停，卡片會傾向你。",
      "works.new": "新作",
      "works.1.name": "智慧家居中樞", "works.1.state": "已布 · 開源",
      "works.2.name": "用量之監，懸於屏隅", "works.2.state": "已布 · 線上",
      "works.3.name": "攝像頭之控", "works.3.state": "已布 · 線上",
      "works.4.name": "本機之橋", "works.4.state": "已布 · 線上",
      "works.5.title": "中外建築師", "works.5.name": "對照總表", "works.5.state": "已布 · 線上",
      "works.6.name": "文字之爐", "works.6.state": "已布 · 線上",
      "works.7.name": "異構之室", "works.7.state": "已布 · 線上",
      "lab.label": "器物 / LAB",
      "lab.hint": "幾件小器，可以動手。",
      "lab.field": "字之場 · 移動游標",
      "lab.weight": "字重 · 拖動",
      "lab.clock": "此刻 · 本地",
      "lab.dots": "點陣 · 點按",
      "log.label": "航誌 / LOG",
      "log.lede": "此處記錄所造之物。",
      "log.line1": "所願甚多，所成實寡。",
      "log.line2": "已成之稿，皆泊於 GitHub。",
      "stat.projects": "所布之作", "stat.langs": "語言文字", "stat.since": "航行紀年",
      "contact.label": "通訊 / CONTACT",
      "contact.copy": "點按複製",
      "toast.copied": "已複製郵箱",
      "promo.close": "關閉",
      "promo.flag": "來訊 / INCOMING",
      "promo.desc": "將 Coding Plan 與 Agent Plan 之餘量，懸於屏隅。",
      "promo.meta3": "免費 · AGPL-3.0 · 單檔",
      "promo.cta": "免費取用",
      "footer.note": "不設追蹤 · 不留 Cookie · 純靜態",
      "footer.top": "↑ 回頂"
    },
    "en": {
      "page.title": "HZDavy — Log",
      "page.desc": "HZDavy — an independent developer crafting interfaces and tools.",
      "a11y.skip": "Skip to content",
      "theme.title": "Toggle theme",
      "nav.works": "Works", "nav.lab": "Lab", "nav.log": "Log", "nav.contact": "Contact",
      "hero.eyebrow": "hzdavy // independent // est. 2026",
      "hero.tagline": "Building alone, at a quiet desk.",
      "hero.decrypt": "Decrypt the rest",
      "hero.mystery": "That is all. The rest sleeps between drafts and desk.",
      "hero.scroll": "↓ scroll",
      "works.label": "WORKS",
      "works.hint": "Hover. The cards lean toward you.",
      "works.new": "New",
      "works.1.name": "Smart home hub", "works.1.state": "live · open source",
      "works.2.name": "Plan usage, pinned to the corner", "works.2.state": "live · online",
      "works.3.name": "Camera control", "works.3.state": "live · online",
      "works.4.name": "Local bridge", "works.4.state": "live · online",
      "works.5.title": "Architects", "works.5.name": "China & abroad, side by side", "works.5.state": "live · online",
      "works.6.name": "Word foundry", "works.6.state": "live · online",
      "works.7.name": "Heterogeneous room", "works.7.state": "live · online",
      "lab.label": "LAB",
      "lab.hint": "A few small things to touch.",
      "lab.field": "Type field · move cursor",
      "lab.weight": "Weight · drag",
      "lab.clock": "Now · local",
      "lab.dots": "Dots · click",
      "log.label": "LOG",
      "log.lede": "Here, what I have made is written down.",
      "log.line1": "Much desired, little finished.",
      "log.line2": "What is finished docks at GitHub.",
      "stat.projects": "Works shipped", "stat.langs": "Languages", "stat.since": "Since",
      "contact.label": "CONTACT",
      "contact.copy": "Click to copy",
      "toast.copied": "Email copied",
      "promo.close": "Close",
      "promo.flag": "INCOMING",
      "promo.desc": "Keeps the remainder of your Coding Plan and Agent Plan in the corner of the screen.",
      "promo.meta3": "Free · AGPL-3.0 · Single file",
      "promo.cta": "Get it free",
      "footer.note": "No tracking · No cookies · Pure static",
      "footer.top": "↑ Top"
    },

    "ja": {
      "page.title": "HZDavy — 航海日誌",
      "page.desc": "HZDavy — インターフェースと道具をつくる独立開発者。",
      "a11y.skip": "本文へスキップ",
      "theme.title": "配色を切り替え",
      "nav.works": "作品", "nav.lab": "道具", "nav.log": "日誌", "nav.contact": "連絡",
      "hero.eyebrow": "hzdavy // 個人開発 // 2026",
      "hero.tagline": "ひとりでつくる、静かな机の上で。",
      "hero.decrypt": "残りを解く",
      "hero.mystery": "もう語り尽くした。残りは、稿と机のあいだで眠っている。",
      "hero.scroll": "↓ 下へ",
      "works.label": "作品 / WORKS",
      "works.hint": "触れると、カードがこちらへ傾く。",
      "works.new": "新作",
      "works.1.name": "スマートホームの中枢", "works.1.state": "公開 · オープンソース",
      "works.2.name": "残量を、画面の隅に", "works.2.state": "公開 · 稼働中",
      "works.3.name": "カメラ制御", "works.3.state": "公開 · 稼働中",
      "works.4.name": "ローカルの橋", "works.4.state": "公開 · 稼働中",
      "works.5.title": "中外建築家", "works.5.name": "対照総表", "works.5.state": "公開 · 稼働中",
      "works.6.name": "文字の炉", "works.6.state": "公開 · 稼働中",
      "works.7.name": "異形の部屋", "works.7.state": "公開 · 稼働中",
      "lab.label": "道具 / LAB",
      "lab.hint": "小さな道具を、いくつか。",
      "lab.field": "字の場 · カーソルを動かす",
      "lab.weight": "ウェイト · ドラッグ",
      "lab.clock": "いま · ローカル",
      "lab.dots": "点 · クリック",
      "log.label": "日誌 / LOG",
      "log.lede": "ここに、つくったものを記す。",
      "log.line1": "望むことは多く、成すことは少ない。",
      "log.line2": "成した稿は、すべて GitHub に停まる。",
      "stat.projects": "公開した作品", "stat.langs": "言語", "stat.since": "開始",
      "contact.label": "連絡 / CONTACT",
      "contact.copy": "クリックでコピー",
      "toast.copied": "メールをコピーしました",
      "promo.close": "閉じる",
      "promo.flag": "受信中 / INCOMING",
      "promo.desc": "Coding Plan と Agent Plan の残量を、画面の隅に吊るす。",
      "promo.meta3": "無料 · AGPL-3.0 · 単一ファイル",
      "promo.cta": "無料で入手",
      "footer.note": "追跡なし · Cookie なし · 完全静的",
      "footer.top": "↑ 上へ"
    },

    "ko": {
      "page.title": "HZDavy — 항해 일지",
      "page.desc": "HZDavy — 인터페이스와 도구를 만드는 독립 개발자.",
      "a11y.skip": "본문으로 건너뛰기",
      "theme.title": "테마 전환",
      "nav.works": "작업", "nav.lab": "도구", "nav.log": "일지", "nav.contact": "연락",
      "hero.eyebrow": "hzdavy // 독립 개발 // 2026",
      "hero.tagline": "홀로 만들며, 조용한 책상 위에서.",
      "hero.decrypt": "남은 것을 풀다",
      "hero.mystery": "이미 다 말했다. 나머지는 원고와 책상 사이에서 잠들어 있다.",
      "hero.scroll": "↓ 아래로",
      "works.label": "작업 / WORKS",
      "works.hint": "올려 두면, 카드가 당신 쪽으로 기운다.",
      "works.new": "신작",
      "works.1.name": "스마트홈 허브", "works.1.state": "공개 · 오픈소스",
      "works.2.name": "남은 사용량을 화면 한쪽에", "works.2.state": "공개 · 운영 중",
      "works.3.name": "카메라 제어", "works.3.state": "공개 · 운영 중",
      "works.4.name": "로컬 브리지", "works.4.state": "공개 · 운영 중",
      "works.5.title": "중외 건축가", "works.5.name": "대조 총표", "works.5.state": "공개 · 운영 중",
      "works.6.name": "문자 용광로", "works.6.state": "공개 · 운영 중",
      "works.7.name": "이형의 방", "works.7.state": "공개 · 운영 중",
      "lab.label": "도구 / LAB",
      "lab.hint": "만져 볼 수 있는 작은 것들.",
      "lab.field": "글자의 장 · 커서 이동",
      "lab.weight": "굵기 · 드래그",
      "lab.clock": "지금 · 로컬",
      "lab.dots": "점 · 클릭",
      "log.label": "일지 / LOG",
      "log.lede": "여기에 만든 것을 기록한다.",
      "log.line1": "바라는 것은 많고, 이룬 것은 적다.",
      "log.line2": "이룬 원고는 모두 GitHub에 정박해 있다.",
      "stat.projects": "공개한 작업", "stat.langs": "언어", "stat.since": "시작",
      "contact.label": "연락 / CONTACT",
      "contact.copy": "클릭하여 복사",
      "toast.copied": "이메일을 복사했습니다",
      "promo.close": "닫기",
      "promo.flag": "수신 / INCOMING",
      "promo.desc": "Coding Plan과 Agent Plan의 남은 양을 화면 한쪽에 띄운다.",
      "promo.meta3": "무료 · AGPL-3.0 · 단일 파일",
      "promo.cta": "무료로 받기",
      "footer.note": "추적 없음 · 쿠키 없음 · 순수 정적",
      "footer.top": "↑ 맨 위로"
    }
  };

  var LANGS = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
  var GREET = { "zh-Hans": "你好", "zh-Hant": "你好", "en": "Hello", "ja": "こんにちは", "ko": "안녕하세요" };

  /* ---------------------------------------------------------
     2. 小工具
     --------------------------------------------------------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function $(sel) { return document.querySelector(sel); }

  function read(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function write(key, val) {
    try { window.localStorage.setItem(key, val); } catch (e) { /* ignore */ }
  }

  function detectLang() {
    var saved = read("hzdavy_lang");
    if (saved && LANGS.indexOf(saved) !== -1) return saved;
    var tags = navigator.languages || [navigator.language || "zh-Hans"];
    for (var i = 0; i < tags.length; i++) {
      var t = String(tags[i]).toLowerCase();
      if (t.indexOf("zh") === 0) {
        return (t.indexOf("hant") !== -1 || t.indexOf("tw") !== -1 ||
          t.indexOf("hk") !== -1 || t.indexOf("mo") !== -1) ? "zh-Hant" : "zh-Hans";
      }
      if (t.indexOf("ja") === 0) return "ja";
      if (t.indexOf("ko") === 0) return "ko";
      if (t.indexOf("en") === 0) return "en";
    }
    return "zh-Hans";
  }

  var lang = "zh-Hans";

  function t(key) {
    var pack = I18N[lang] || I18N["zh-Hans"];
    return (key in pack) ? pack[key] : (I18N["zh-Hans"][key] || key);
  }

  /* ---------------------------------------------------------
     3. 打字机
     --------------------------------------------------------- */
  var typeEl = $("#type");
  var typeTimer = null;

  function typeTagline(text) {
    if (!typeEl) return;
    if (typeTimer) { clearInterval(typeTimer); typeTimer = null; }
    if (reduce) { typeEl.textContent = text; return; }
    typeEl.textContent = "";
    var i = 0;
    typeTimer = setInterval(function () {
      i += 1;
      typeEl.textContent = text.slice(0, i);
      if (i >= text.length) { clearInterval(typeTimer); typeTimer = null; }
    }, 38);
  }

  /* ---------------------------------------------------------
     4. 语言
     --------------------------------------------------------- */
  var langButtons = document.querySelectorAll("[data-set-lang]");
  var metaDesc = $("#meta-desc");
  var decryptBtn = $("#decrypt");
  var decryptLabel = $("#decrypt-label");
  var revealed = false;

  function applyLang(next) {
    lang = I18N[next] ? next : "zh-Hans";
    write("hzdavy_lang", lang);

    var root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("data-lang", lang);

    document.title = t("page.title");
    if (metaDesc) metaDesc.setAttribute("content", t("page.desc"));
    if (decryptBtn) decryptBtn.setAttribute("title", t("hero.decrypt"));

    var nodes = document.querySelectorAll("[data-i18n]");
    Array.prototype.forEach.call(nodes, function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });

    var attrNodes = document.querySelectorAll("[data-i18n-attr]");
    Array.prototype.forEach.call(attrNodes, function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var kv = pair.split(":");
        if (kv.length === 2) el.setAttribute(kv[0].trim(), t(kv[1].trim()));
      });
    });

    Array.prototype.forEach.call(langButtons, function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
    });

    movePill();

    if (revealed) {
      revealed = false;
      if (decryptBtn) decryptBtn.classList.remove("is-revealed");
      revealMystery();
    }

    typeTagline(t("hero.tagline"));
  }

  function revealMystery() {
    if (!decryptBtn || !decryptLabel) return;
    revealed = true;
    decryptLabel.textContent = t("hero.mystery");
    decryptBtn.classList.add("is-revealed");
  }

  function withTransition(fn) {
    if (reduce || typeof document.startViewTransition !== "function") { fn(); return; }
    document.startViewTransition(fn);
  }

  Array.prototype.forEach.call(langButtons, function (btn) {
    btn.addEventListener("click", function () {
      var next = btn.getAttribute("data-set-lang");
      if (next === lang) return;
      withTransition(function () { applyLang(next); });
    });
  });

  document.addEventListener("keydown", function (e) {
    if (!e.altKey || e.metaKey || e.ctrlKey) return;
    var idx = parseInt(e.key, 10) - 1;
    if (idx >= 0 && idx < LANGS.length) {
      e.preventDefault();
      withTransition(function () { applyLang(LANGS[idx]); });
    }
  });

  /* ---------------------------------------------------------
     5. 主题
     --------------------------------------------------------- */
  var THEMES = { paper: "#ffffff", ink: "#000000" };
  var themeBtn = $("#theme-toggle");
  var metaTheme = $("#meta-theme");

  function applyTheme(name) {
    var th = THEMES[name] ? name : "paper";
    document.documentElement.setAttribute("data-theme", th);
    if (metaTheme) metaTheme.setAttribute("content", THEMES[th]);
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", th === "ink" ? "true" : "false");
      themeBtn.setAttribute("title", t("theme.title"));
    }
    write("hzdavy_theme", th);
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = document.documentElement.getAttribute("data-theme") === "ink" ? "paper" : "ink";
      withTransition(function () { applyTheme(next); });
    });
  }

  /* ---------------------------------------------------------
     6. 解密
     --------------------------------------------------------- */
  var GLYPHS = "命数序位缘起终零壹贰叁肆伍陆柒捌玖拾アカサタナハ0123456789_-?·<>/\\";

  if (decryptBtn && decryptLabel) {
    decryptBtn.addEventListener("click", function () {
      if (revealed) return;
      var target = t("hero.decrypt");
      var len = target.length;
      var ticks = 0;
      var total = Math.max(14, len * 3);

      var timer = setInterval(function () {
        ticks += 1;
        var out = "";
        for (var i = 0; i < len; i++) {
          out += ticks > total - len + i
            ? target.charAt(i)
            : GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
        }
        decryptLabel.textContent = out;
        if (ticks >= total) {
          clearInterval(timer);
          revealMystery();
        }
      }, 20);
    });
  }

  /* ---------------------------------------------------------
     7. 宣传
     --------------------------------------------------------- */
  var promoMask = $("#promo-mask");
  var promoClose = $("#promo-close");
  var promoOpen = false;

  function openPromo() {
    if (!promoMask || promoOpen) return;
    promoOpen = true;
    promoMask.hidden = false;
    requestAnimationFrame(function () { promoMask.classList.add("is-in"); });
  }

  function closePromo() {
    if (!promoMask || !promoOpen) return;
    promoOpen = false;
    promoMask.classList.remove("is-in");
    write("hzdavy_promo", "1");
    window.setTimeout(function () { promoMask.hidden = true; }, 350);
  }

  if (promoClose) promoClose.addEventListener("click", closePromo);
  if (promoMask) {
    promoMask.addEventListener("click", function (e) {
      if (e.target === promoMask) closePromo();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePromo();
  });

  /* ---------------------------------------------------------
     8. 跑马灯
     --------------------------------------------------------- */
  function buildMarquee() {
    var track = $("#marquee-track");
    if (!track || !track.parentElement) return;

    var items = [
      "HZDavy",
      "WORKS 07",
      "EST. 2026",
      "5 LANGUAGES",
      "NO TRACKING",
      "PURE STATIC",
      "hyhdavy@163.com"
    ];

    track.innerHTML = "";
    var viewport = track.parentElement.clientWidth || window.innerWidth;
    var guard = 0;
    while (track.scrollWidth < viewport + 60 && guard < 12) {
      items.forEach(function (txt) {
        var s = document.createElement("span");
        s.textContent = txt;
        track.appendChild(s);
      });
      guard += 1;
    }
    var half = track.innerHTML;
    track.innerHTML = half + half;
  }

  /* ---------------------------------------------------------
     9. 交互：语言滑块 / 标题拆字 / 卡片 / 磁吸 / 光标
     --------------------------------------------------------- */
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var mouse = { x: -9999, y: -9999 };
  window.addEventListener("pointermove", function (e) { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

  function movePill() {
    var pill = $("#lang-pill");
    var btn = document.querySelector('[data-set-lang="' + lang + '"]');
    if (!pill || !btn) return;
    pill.style.width = btn.offsetWidth + "px";
    pill.style.transform = "translateX(" + btn.offsetLeft + "px)";
  }
  window.addEventListener("resize", movePill);

  function buildHeroTitle() {
    var h = $("#hero-title");
    if (!h) return;
    var chars = [];
    "HZDavy".split("").forEach(function (c) {
      var s = document.createElement("span");
      s.className = "ch";
      s.textContent = c;
      s.setAttribute("aria-hidden", "true");
      s.addEventListener("click", function () {
        s.classList.remove("is-pop");
        void s.offsetWidth;
        s.classList.add("is-pop");
      });
      s.addEventListener("animationend", function () { s.classList.remove("is-pop"); });
      h.appendChild(s);
      chars.push(s);
    });
    if (reduce || !finePointer) return;

    var last = "";
    function tick() {
      var key = mouse.x + "," + mouse.y + "," + window.scrollY;
      if (key !== last) {
        last = key;
        chars.forEach(function (s) {
          var r = s.getBoundingClientRect();
          var cx = r.left + r.width / 2;
          var cy = r.top + r.height / 2;
          var d = Math.hypot(mouse.x - cx, mouse.y - cy);
          var k = Math.max(0, 1 - d / 420);
          var w = Math.round(700 - k * 560);
          s.style.fontVariationSettings = '"wght" ' + w;
          s.style.fontWeight = w;
          s.style.setProperty("--y", (-k * 6).toFixed(2) + "%");
        });
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function buildTilt() {
    var cards = document.querySelectorAll(".card");
    Array.prototype.forEach.call(cards, function (card) {
      var tilt = card.hasAttribute("data-tilt") && !reduce && finePointer;
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        card.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
        card.style.setProperty("--my", (py * 100).toFixed(1) + "%");
        if (!tilt) return;
        card.classList.add("is-tilting");
        card.style.setProperty("--rx", ((0.5 - py) * 7).toFixed(2) + "deg");
        card.style.setProperty("--ry", ((px - 0.5) * 9).toFixed(2) + "deg");
        card.style.setProperty("--s", "1.012");
      });
      card.addEventListener("pointerleave", function () {
        if (!tilt) return;
        card.classList.remove("is-tilting");
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--s", "1");
      });
    });
  }

  function buildMagnet() {
    if (reduce || !finePointer) return;
    var els = document.querySelectorAll("[data-magnet]");
    Array.prototype.forEach.call(els, function (el) {
      el.style.transition = "translate .45s cubic-bezier(.34,1.56,.64,1)";
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) * 0.28;
        var dy = (e.clientY - (r.top + r.height / 2)) * 0.36;
        el.style.translate = dx.toFixed(1) + "px " + dy.toFixed(1) + "px";
      });
      el.addEventListener("pointerleave", function () { el.style.translate = "0 0"; });
    });
  }

  function buildCursor() {
    var cur = $("#cursor");
    if (!cur || reduce || !finePointer) return;
    var ring = cur.querySelector(".cursor-ring");
    document.documentElement.classList.add("has-cursor");
    var rx = 0, ry = 0, started = false;
    var HOT = "a, button, input, [data-tilt], .ch";

    document.addEventListener("pointermove", function (e) {
      if (!started) { started = true; rx = e.clientX; ry = e.clientY; }
      cur.classList.add("is-on");
      var hot = e.target.closest && e.target.closest(HOT);
      cur.classList.toggle("is-hover", !!hot);
    }, { passive: true });
    document.addEventListener("pointerdown", function () { cur.classList.add("is-down"); });
    document.addEventListener("pointerup", function () { cur.classList.remove("is-down"); });
    document.documentElement.addEventListener("pointerleave", function () { cur.classList.remove("is-on"); });

    function loop() {
      rx += (mouse.x - rx) * 0.18;
      ry += (mouse.y - ry) * 0.18;
      cur.style.transform = "translate3d(" + mouse.x + "px," + mouse.y + "px,0)";
      if (ring) ring.style.translate = (rx - mouse.x).toFixed(1) + "px " + (ry - mouse.y).toFixed(1) + "px";
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  /* ---------------------------------------------------------
     10. 滚动：进度条 / 导航隐现 / 当前区块
     --------------------------------------------------------- */
  function buildScroll() {
    var bar = $("#progress-bar");
    var nav = document.querySelector(".nav");
    var links = document.querySelectorAll(".nav-links a");
    var lastY = window.scrollY;
    var ticking = false;

    function update() {
      ticking = false;
      var y = window.scrollY;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
      if (nav) nav.classList.toggle("is-hidden", y > lastY && y > 240);
      lastY = y;

      var mid = window.innerHeight * 0.4;
      Array.prototype.forEach.call(links, function (a) {
        var sec = document.querySelector(a.getAttribute("href"));
        if (!sec) return;
        var r = sec.getBoundingClientRect();
        a.classList.toggle("is-active", r.top <= mid && r.bottom > mid);
      });
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  }

  /* ---------------------------------------------------------
     11. 器物：字之场 / 字重 / 时钟 / 点阵
     --------------------------------------------------------- */
  var FIELD_POOL = (
    "天地玄黄宇宙洪荒日月盈昃辰宿列张静默稿案造物" +
    "アイウエオカキクケコ가나다라마바사" +
    "HZDavyAaBbQqRr0123456789"
  ).split("");

  function buildField() {
    var field = $("#field");
    if (!field) return;
    var cols = window.innerWidth <= 760 ? 8 : 12;
    var total = cols * 5;
    var spans = [];
    for (var i = 0; i < total; i++) {
      var s = document.createElement("span");
      s.textContent = FIELD_POOL[(i * 7 + 3) % FIELD_POOL.length];
      field.appendChild(s);
      spans.push(s);
    }
    var card = field.closest(".card");
    var active = false;
    var raf = 0;

    function paint() {
      raf = 0;
      spans.forEach(function (s) {
        var w = 100, hot = false;
        if (active) {
          var r = s.getBoundingClientRect();
          var d = Math.hypot(mouse.x - (r.left + r.width / 2), mouse.y - (r.top + r.height / 2));
          var k = Math.max(0, 1 - d / 150);
          w = Math.round(100 + k * 800);
          hot = k > 0.72;
        }
        s.style.fontVariationSettings = '"wght" ' + w;
        s.style.fontWeight = w;
        s.classList.toggle("is-hot", hot);
      });
    }
    function queue() { if (!raf) raf = requestAnimationFrame(paint); }

    (card || field).addEventListener("pointermove", function (e) {
      mouse.x = e.clientX; mouse.y = e.clientY;
      active = true; queue();
    });
    (card || field).addEventListener("pointerleave", function () { active = false; queue(); });
    field.addEventListener("click", function (e) {
      if (e.target.tagName !== "SPAN") return;
      e.target.textContent = FIELD_POOL[Math.floor(Math.random() * FIELD_POOL.length)];
    });
  }

  function buildWeight() {
    var range = $("#weight-range");
    var out = $("#weight-out");
    var sample = $("#weight-sample");
    if (!range) return;
    function sync() {
      var v = parseInt(range.value, 10);
      if (out) out.textContent = v;
      if (sample) {
        sample.style.fontVariationSettings = '"wght" ' + v;
        sample.style.fontWeight = v;
      }
      range.style.setProperty("--p", ((v - 100) / 8) + "%");
    }
    range.addEventListener("input", sync);
    sync();
  }

  function buildClock() {
    var clock = $("#clock");
    var hand = $("#dial-hand");
    if (!clock) return;
    function pad(n) { return n < 10 ? "0" + n : String(n); }
    function tick() {
      var d = new Date();
      clock.innerHTML = pad(d.getHours()) + ":" + pad(d.getMinutes()) +
        '<span class="clock-s">:' + pad(d.getSeconds()) + "</span>";
      if (hand) hand.style.transform = "rotate(" + (d.getSeconds() * 6) + "deg)";
    }
    tick();
    window.setInterval(tick, 1000);
  }

  function buildDots() {
    var box = $("#dots");
    if (!box) return;
    var COLS = 8, ROWS = 5;
    var dots = [];
    for (var i = 0; i < COLS * ROWS; i++) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "dot " + (i + 1));
      if ((i * 5 + 2) % 7 === 0) b.classList.add("is-on");
      box.appendChild(b);
      dots.push(b);
    }
    box.addEventListener("click", function (e) {
      var idx = dots.indexOf(e.target);
      if (idx < 0) return;
      e.target.classList.toggle("is-on");
      if (reduce) return;
      var ox = idx % COLS, oy = Math.floor(idx / COLS);
      dots.forEach(function (d, j) {
        if (j === idx) return;
        var dist = Math.hypot(j % COLS - ox, Math.floor(j / COLS) - oy);
        window.setTimeout(function () {
          d.classList.add("is-wave");
          window.setTimeout(function () { d.classList.remove("is-wave"); }, 220);
        }, dist * 55);
      });
    });
  }

  /* ---------------------------------------------------------
     12. 计数 / 复制 / 入场
     --------------------------------------------------------- */
  function padNum(n, len) {
    var s = String(n);
    while (s.length < len) s = "0" + s;
    return s;
  }

  function runCount(el) {
    var to = parseInt(el.getAttribute("data-count"), 10) || 0;
    var len = parseInt(el.getAttribute("data-pad"), 10) || String(to).length;
    if (reduce) { el.textContent = padNum(to, len); return; }
    var t0 = 0;
    var dur = 1400;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min(1, (ts - t0) / dur);
      var e = 1 - Math.pow(1 - p, 4);
      el.textContent = padNum(Math.round(to * e), len);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function buildCount() {
    var nodes = document.querySelectorAll("[data-count]");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(nodes, runCount);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        runCount(en.target);
      });
    }, { threshold: 0.6 });
    Array.prototype.forEach.call(nodes, function (n) { io.observe(n); });
  }

  var toastEl = $("#toast");
  var toastTimer = 0;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add("is-in");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () { toastEl.classList.remove("is-in"); }, 1800);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      if (ok) { resolve(); } else { reject(new Error("copy failed")); }
    });
  }

  function buildCopy() {
    var btn = $("#copy-mail");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var mail = btn.getAttribute("data-mail");
      copyText(mail).then(
        function () { toast(t("toast.copied")); },
        function () { window.location.href = "mailto:" + mail; }
      );
    });
  }

  function buildReveal() {
    var nodes = document.querySelectorAll("[data-reveal]");
    Array.prototype.forEach.call(nodes, function (el) {
      var sibs = el.parentElement ? el.parentElement.querySelectorAll(":scope > [data-reveal]") : [];
      var i = Array.prototype.indexOf.call(sibs, el);
      if (i > 0) el.style.setProperty("--d", (Math.min(i, 8) * 0.07).toFixed(2) + "s");
    });
    if (reduce || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(nodes, function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    Array.prototype.forEach.call(nodes, function (el) { io.observe(el); });
  }


  /* ---------------------------------------------------------
     13. canvas 加载器（参照 MiSans 官网）
     --------------------------------------------------------- */
  var FONT = '"Inter","MiSans","PingFang SC","Microsoft YaHei",system-ui,sans-serif';
  var GRID_COLOR = "#ECEAE7";
  var BLUE = "#2050FF";
  var BG = "#000000";

  var WORDS = [
    "设计", "代码", "design", "つくる", "만들다", "系统", "界面", "tool",
    "静", "航行", "craft", "余白", "构筑", "原型", "layout", "工具",
    "稿", "系统", "build", "留白", "线条", "世界", "手作", "kind"
  ];

  var PULSE = ["100", "200", "300", "300", "300", "400", "300", "200", "100"];
  var DURATION = 5000;
  var FADE = 900;

  function loaderConfig(w) {
    if (w >= 1024) return { fs: 20, rg: 14, tg: 48 };
    if (w >= 640) return { fs: 17, rg: 13, tg: 27 };
    return { fs: 15, rg: 12, tg: 13 };
  }

  function runLoader(onDone) {
    var loader = $("#loader");
    var canvas = $("#loader-canvas");
    if (!loader || !canvas) { if (onDone) onDone(); return; }

    if (reduce || !canvas.getContext) {
      loader.classList.add("is-gone");
      if (onDone) onDone();
      return;
    }

    var ctx = canvas.getContext("2d");
    var dpr = 1;
    var W = 0;
    var H = 0;
    var cfg = loaderConfig(window.innerWidth);
    var rowH = cfg.rg + cfg.fs + 6;
    var tagline = t("hero.tagline");
    var greeting = GREET[lang] || "Hello";

    document.documentElement.classList.add("is-loading");

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth || window.innerWidth;
      H = canvas.clientHeight || window.innerHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cfg = loaderConfig(window.innerWidth);
      rowH = cfg.rg + cfg.fs + 6;
    }

    function drawRow(y, seed, weight) {
      ctx.font = weight + " " + cfg.fs + "px " + FONT;
      ctx.fillStyle = GRID_COLOR;
      ctx.textBaseline = "top";
      var x = -(((seed * 41) % 80));
      var k = 0;
      while (x < W) {
        var word = WORDS[Math.abs(seed + k * 3) % WORDS.length];
        ctx.fillText(word, x, y);
        x += ctx.measureText(word).width + cfg.tg;
        k += 1;
        if (k > 200) break;
      }
    }

    function drawStage(elapsed) {
      // 主体：向上滚动的词网格
      var shift = (Math.min(elapsed, DURATION) / DURATION) * rowH * 4;
      var offset = shift % rowH;
      var base = Math.floor(shift / rowH);
      var weight = PULSE[Math.floor(elapsed / 300) % PULSE.length];

      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, W, H);

      var y = -rowH + offset;
      var idx = 0;
      while (y < H + rowH) {
        drawRow(y, base + idx, weight);
        y += rowH;
        idx += 1;
      }

      // 标题与问候
      var titleFade = Math.min(1, Math.max(0, (elapsed - 900) / 800));
      if (titleFade > 0) {
        var titleSize = Math.max(34, cfg.fs * 2.8);
        var greetSize = Math.max(13, cfg.fs * 0.9);

        // 中央柔光，令标题自网格中浮出
        ctx.globalAlpha = titleFade;
        var glow = ctx.createRadialGradient(
          W / 2, H / 2, 0,
          W / 2, H / 2, Math.max(W, H) * 0.46
        );
        glow.addColorStop(0, "rgba(0,0,0,0.94)");
        glow.addColorStop(0.5, "rgba(0,0,0,0.74)");
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, W, H);

        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";

        ctx.font = "700 " + titleSize + "px " + FONT;
        ctx.fillStyle = GRID_COLOR;
        var titleY = H / 2 + titleSize * 0.04;
        ctx.fillText("HZDavy", W / 2, titleY);

        ctx.font = "600 " + greetSize + "px " + FONT;
        ctx.fillStyle = BLUE;
        ctx.fillText(greeting, W / 2, titleY - titleSize * 0.82);

        // 打字机
        if (elapsed > 1800) {
          var chars = Math.floor((elapsed - 1800) / 70);
          var shown = tagline.slice(0, Math.max(0, chars));
          var lineSize = Math.max(13, cfg.fs * 0.92);
          ctx.font = "400 " + lineSize + "px " + FONT;
          ctx.fillStyle = "#ffffff";
          var lineY = titleY + titleSize * 0.72;
          ctx.fillText(shown, W / 2, lineY);

          var textW = ctx.measureText(shown).width;
          if (Math.floor(elapsed / 500) % 2 === 0) {
            ctx.fillStyle = BLUE;
            ctx.fillRect(W / 2 + textW / 2 + 4, lineY - lineSize * 0.78, 2, lineSize);
          }
        }

        ctx.globalAlpha = 1;
        ctx.textAlign = "start";
        ctx.textBaseline = "top";
      }
    }

    var startTs = 0;
    var rafId = 0;
    var finished = false;

    function frame(ts) {
      if (!startTs) startTs = ts;
      var elapsed = ts - startTs;
      drawStage(elapsed);

      if (elapsed >= DURATION && !finished) {
        finished = true;
        window.removeEventListener("resize", resize);
        loader.classList.add("is-out");
        document.documentElement.classList.remove("is-loading");
        window.setTimeout(function () {
          loader.classList.add("is-gone");
          canvas.width = 0;
          canvas.height = 0;
          if (onDone) onDone();
        }, FADE);
        return;
      }
      rafId = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    rafId = requestAnimationFrame(frame);

    // 兜底：极端情况下若 rAF 未回调，确保站点可用
    window.setTimeout(function () {
      if (finished) return;
      finished = true;
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      loader.classList.add("is-out", "is-gone");
      document.documentElement.classList.remove("is-loading");
      if (onDone) onDone();
    }, DURATION + FADE + 1500);
  }

  /* ---------------------------------------------------------
     14. 启动
     --------------------------------------------------------- */
  function start() {
    buildMarquee();
    buildHeroTitle();
    buildField();
    buildDots();
    buildWeight();
    buildClock();
    buildTilt();
    buildMagnet();
    buildCursor();
    buildCount();
    buildCopy();
    buildReveal();
    buildScroll();

    applyLang(detectLang());
    applyTheme(read("hzdavy_theme") || "paper");

    runLoader(function () {
      movePill();
      if (read("hzdavy_promo")) return;
      window.setTimeout(openPromo, 600);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
