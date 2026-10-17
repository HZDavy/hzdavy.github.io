/* ============================================================
   HZDavy — 极简黑白站
   i18n（zh-Hans · zh-Hant · en · ja · ko）
   + MiSans 式 canvas 加载器 · 跑马灯 · 1px 线框 · 点阵字墙
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

      "nav.log": "航志",
      "nav.works": "作品",
      "nav.contact": "通讯",

      "hero.eyebrow": "hzdavy // 独立开发 // 纪年 2026",
      "hero.tagline": "独自造物，久居案前。",
      "hero.decrypt": "解其所余",
      "hero.mystery": "已尽言。余下的，睡在稿与案之间。",
      "hero.scroll": "↓ 向下",

      "stat.projects": "所布之作",
      "stat.langs": "语言文字",
      "stat.since": "航行纪年",

      "log.label": "航志 / LOG",
      "log.lede": "此处记录所造之物。",
      "log.line1": "所愿甚多，所成实寡。",
      "log.line2": "已成之稿，皆泊于 GitHub。",

      "works.label": "作品 / WORKS",
      "works.1.name": "OpenMexia · 智能家居中枢",
      "works.1.state": "已布 · 开源",
      "works.2.name": "PlanMonitor · 用量之监",
      "works.2.state": "已布 · 在线",
      "works.3.name": "Foxcam · 摄像头之控",
      "works.3.state": "已布 · 在线",
      "works.4.name": "OpenCode2Trae · 本机之桥",
      "works.4.state": "已布 · 在线",
      "works.5.name": "中外建筑师对照总表",
      "works.5.state": "已布 · 在线",
      "works.6.name": "WORD_FORGE · 文字之炉",
      "works.6.state": "已布 · 在线",
      "works.7.name": "AtypicalDesignLab · 异构之室",
      "works.7.state": "已布 · 在线",

      "contact.label": "通讯 / CONTACT",

      "promo.close": "关闭",
      "promo.flag": "来讯 / INCOMING",
      "promo.desc": "将 Coding Plan 与 Agent Plan 之余量，悬于屏隅。",
      "promo.meta3": "免费 · AGPL-3.0 · 单档",
      "promo.cta": "免费取用",

      "footer.note": "不设追踪 · 不留 Cookie · 纯静态"
    },

    "zh-Hant": {
      "page.title": "HZDavy — 航誌",
      "page.desc": "HZDavy — 獨立開發者，造介面，也造工具。",
      "a11y.skip": "跳至正文",
      "theme.title": "切換配色",

      "nav.log": "航誌",
      "nav.works": "作品",
      "nav.contact": "通訊",

      "hero.eyebrow": "hzdavy // 獨立開發 // 紀年 2026",
      "hero.tagline": "獨自造物，久居案前。",
      "hero.decrypt": "解其所餘",
      "hero.mystery": "已盡言。餘下的，睡在稿與案之間。",
      "hero.scroll": "↓ 向下",

      "stat.projects": "所布之作",
      "stat.langs": "語言文字",
      "stat.since": "航行紀年",

      "log.label": "航誌 / LOG",
      "log.lede": "此處記錄所造之物。",
      "log.line1": "所願甚多，所成實寡。",
      "log.line2": "已成之稿，皆泊於 GitHub。",

      "works.label": "作品 / WORKS",
      "works.1.name": "OpenMexia · 智慧家居中樞",
      "works.1.state": "已布 · 開源",
      "works.2.name": "PlanMonitor · 用量之監",
      "works.2.state": "已布 · 線上",
      "works.3.name": "Foxcam · 攝像頭之控",
      "works.3.state": "已布 · 線上",
      "works.4.name": "OpenCode2Trae · 本機之橋",
      "works.4.state": "已布 · 線上",
      "works.5.name": "中外建築師對照總表",
      "works.5.state": "已布 · 線上",
      "works.6.name": "WORD_FORGE · 文字之爐",
      "works.6.state": "已布 · 線上",
      "works.7.name": "AtypicalDesignLab · 異構之室",
      "works.7.state": "已布 · 線上",

      "contact.label": "通訊 / CONTACT",

      "promo.close": "關閉",
      "promo.flag": "來訊 / INCOMING",
      "promo.desc": "將 Coding Plan 與 Agent Plan 之餘量，懸於屏隅。",
      "promo.meta3": "免費 · AGPL-3.0 · 單檔",
      "promo.cta": "免費取用",

      "footer.note": "不設追蹤 · 不留 Cookie · 純靜態"
    },

    "en": {
      "page.title": "HZDavy — Log",
      "page.desc": "HZDavy — an independent developer crafting interfaces and tools.",
      "a11y.skip": "Skip to content",
      "theme.title": "Toggle theme",

      "nav.log": "Log",
      "nav.works": "Works",
      "nav.contact": "Contact",

      "hero.eyebrow": "hzdavy // independent // est. 2026",
      "hero.tagline": "Building alone, at a quiet desk.",
      "hero.decrypt": "Decrypt the rest",
      "hero.mystery": "That is all. The rest sleeps between drafts and desk.",
      "hero.scroll": "↓ scroll",

      "stat.projects": "Works shipped",
      "stat.langs": "Languages",
      "stat.since": "Since",

      "log.label": "LOG",
      "log.lede": "Here, what I have made is written down.",
      "log.line1": "Much desired, little finished.",
      "log.line2": "What is finished docks at GitHub.",

      "works.label": "WORKS",
      "works.1.name": "OpenMexia · Smart Home Hub",
      "works.1.state": "live · open source",
      "works.2.name": "PlanMonitor · Usage Watch",
      "works.2.state": "live · online",
      "works.3.name": "Foxcam · Camera Control",
      "works.3.state": "live · online",
      "works.4.name": "OpenCode2Trae · Local Bridge",
      "works.4.state": "live · online",
      "works.5.name": "Architects Index · CN & Abroad",
      "works.5.state": "live · online",
      "works.6.name": "WORD_FORGE · Word Foundry",
      "works.6.state": "live · online",
      "works.7.name": "AtypicalDesignLab · Heterogeneous Room",
      "works.7.state": "live · online",

      "contact.label": "CONTACT",

      "promo.close": "Close",
      "promo.flag": "INCOMING",
      "promo.desc": "Keeps the remainder of your Coding Plan and Agent Plan in the corner of the screen.",
      "promo.meta3": "Free · AGPL-3.0 · Single file",
      "promo.cta": "Get it free",

      "footer.note": "No tracking · No cookies · Pure static"
    },

    "ja": {
      "page.title": "HZDavy — 航海日誌",
      "page.desc": "HZDavy — インターフェースと道具をつくる独立開発者。",
      "a11y.skip": "本文へスキップ",
      "theme.title": "配色を切り替え",

      "nav.log": "日誌",
      "nav.works": "作品",
      "nav.contact": "連絡",

      "hero.eyebrow": "hzdavy // 個人開発 // 2026",
      "hero.tagline": "ひとりでつくる、静かな机の上で。",
      "hero.decrypt": "残りを解く",
      "hero.mystery": "もう語り尽くした。残りは、稿と机のあいだで眠っている。",
      "hero.scroll": "↓ 下へ",

      "stat.projects": "公開した作品",
      "stat.langs": "言語",
      "stat.since": "開始",

      "log.label": "日誌 / LOG",
      "log.lede": "ここに、つくったものを記す。",
      "log.line1": "望むことは多く、成すことは少ない。",
      "log.line2": "成した稿は、すべて GitHub に停まる。",

      "works.label": "作品 / WORKS",
      "works.1.name": "OpenMexia · スマートホームの中枢",
      "works.1.state": "公開 · オープンソース",
      "works.2.name": "PlanMonitor · 残量の監視",
      "works.2.state": "公開 · 稼働中",
      "works.3.name": "Foxcam · カメラ制御",
      "works.3.state": "公開 · 稼働中",
      "works.4.name": "OpenCode2Trae · ローカルの橋",
      "works.4.state": "公開 · 稼働中",
      "works.5.name": "中外建築家 対照総表",
      "works.5.state": "公開 · 稼働中",
      "works.6.name": "WORD_FORGE · 文字の炉",
      "works.6.state": "公開 · 稼働中",
      "works.7.name": "AtypicalDesignLab · 異形の部屋",
      "works.7.state": "公開 · 稼働中",

      "contact.label": "連絡 / CONTACT",

      "promo.close": "閉じる",
      "promo.flag": "受信中 / INCOMING",
      "promo.desc": "Coding Plan と Agent Plan の残量を、画面の隅に吊るす。",
      "promo.meta3": "無料 · AGPL-3.0 · 単一ファイル",
      "promo.cta": "無料で入手",

      "footer.note": "追跡なし · Cookie なし · 完全静的"
    },

    "ko": {
      "page.title": "HZDavy — 항해 일지",
      "page.desc": "HZDavy — 인터페이스와 도구를 만드는 독립 개발자.",
      "a11y.skip": "본문으로 건너뛰기",
      "theme.title": "테마 전환",

      "nav.log": "일지",
      "nav.works": "작업",
      "nav.contact": "연락",

      "hero.eyebrow": "hzdavy // 독립 개발 // 2026",
      "hero.tagline": "홀로 만들며, 조용한 책상 위에서.",
      "hero.decrypt": "남은 것을 풀다",
      "hero.mystery": "이미 다 말했다. 나머지는 원고와 책상 사이에서 잠들어 있다.",
      "hero.scroll": "↓ 아래로",

      "stat.projects": "공개한 작업",
      "stat.langs": "언어",
      "stat.since": "시작",

      "log.label": "일지 / LOG",
      "log.lede": "여기에 만든 것을 기록한다.",
      "log.line1": "바라는 것은 많고, 이룬 것은 적다.",
      "log.line2": "이룬 원고는 모두 GitHub에 정박해 있다.",

      "works.label": "작업 / WORKS",
      "works.1.name": "OpenMexia · 스마트홈 허브",
      "works.1.state": "공개 · 오픈소스",
      "works.2.name": "PlanMonitor · 사용량 감시",
      "works.2.state": "공개 · 운영 중",
      "works.3.name": "Foxcam · 카메라 제어",
      "works.3.state": "공개 · 운영 중",
      "works.4.name": "OpenCode2Trae · 로컬 브리지",
      "works.4.state": "공개 · 운영 중",
      "works.5.name": "중외 건축가 대조 총표",
      "works.5.state": "공개 · 운영 중",
      "works.6.name": "WORD_FORGE · 문자 용광로",
      "works.6.state": "공개 · 운영 중",
      "works.7.name": "AtypicalDesignLab · 이형의 방",
      "works.7.state": "공개 · 운영 중",

      "contact.label": "연락 / CONTACT",

      "promo.close": "닫기",
      "promo.flag": "수신 / INCOMING",
      "promo.desc": "Coding Plan과 Agent Plan의 남은 양을 화면 한쪽에 띄운다.",
      "promo.meta3": "무료 · AGPL-3.0 · 단일 파일",
      "promo.cta": "무료로 받기",

      "footer.note": "추적 없음 · 쿠키 없음 · 순수 정적"
    }
  };

  var LANGS = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
  var GREET = {
    "zh-Hans": "你好",
    "zh-Hant": "你好",
    "en": "Hello",
    "ja": "こんにちは",
    "ko": "안녕하세요"
  };

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
     9. 点阵字墙
     --------------------------------------------------------- */
  var WALL_POOL = (
    "天地玄黄宇宙洪荒日月盈昃辰宿列张" +
    "命数序位缘起终静默稿案之间" +
    "壹贰叁肆伍陆柒捌玖拾" +
    "アイウエオカキクケコサシスセソ" +
    "가나다라마바사아자차" +
    "HZDavy"
  ).split("");

  function buildCharwall() {
    var wall = $("#charwall");
    if (!wall) return;

    var cell = window.innerWidth <= 760 ? 52 : 64;
    var width = wall.clientWidth || wall.offsetWidth || 0;
    var cols = Math.max(1, Math.floor(width / cell));
    var rows = 5;

    var frag = document.createDocumentFragment();
    var seed = 20 + cols * 7 + rows;
    var total = cols * rows;
    for (var i = 0; i < total; i++) {
      seed = (seed * 1103515245 + 12345) % 2147483648;
      var s = document.createElement("span");
      s.textContent = WALL_POOL[(seed >>> 9) % WALL_POOL.length];
      frag.appendChild(s);
    }
    wall.textContent = "";
    wall.appendChild(frag);
  }

  var wallTimer = null;
  window.addEventListener("resize", function () {
    if (wallTimer) clearTimeout(wallTimer);
    wallTimer = setTimeout(buildCharwall, 220);
  });

  /* ---------------------------------------------------------
     10. 线框
     --------------------------------------------------------- */
  var EDGES = ["ab-t", "ab-b", "ab-l", "ab-r"];
  var boxes = [];
  var borderIO = null;

  function buildBorders() {
    boxes = document.querySelectorAll("[data-ab]");
    Array.prototype.forEach.call(boxes, function (box) {
      EDGES.forEach(function (cls) {
        var s = document.createElement("span");
        s.className = "ab " + cls;
        box.appendChild(s);
      });
    });

    if (reduce || typeof IntersectionObserver !== "function") {
      Array.prototype.forEach.call(boxes, function (box) {
        box.setAttribute("data-border", "1");
      });
      return;
    }

    borderIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-border", "1");
        borderIO.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.15 });

    Array.prototype.forEach.call(boxes, function (box) { borderIO.observe(box); });
  }

  /* ---------------------------------------------------------
     11. 入场
     --------------------------------------------------------- */
  function buildReveal() {
    var nodes = document.querySelectorAll("[data-reveal]");
    if (reduce || typeof IntersectionObserver !== "function") {
      Array.prototype.forEach.call(nodes, function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.12 });
    Array.prototype.forEach.call(nodes, function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------
     12. canvas 加载器（参照 MiSans 官网）
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
     13. 启动
     --------------------------------------------------------- */
  function start() {
    buildMarquee();
    buildCharwall();
    buildBorders();
    buildReveal();

    applyLang(detectLang());
    applyTheme(read("hzdavy_theme") || "paper");

    runLoader(function () {
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
