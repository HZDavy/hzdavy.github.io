/* ============================================================
   HZDavy — starship cockpit
   i18n (zh-Hans · zh-Hant · en · ja · ko)
   + starfield warp · radar sweep · scroll adventure · ship log
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. translations
     --------------------------------------------------------- */
  var I18N = {
    "zh-Hans": {
      "page.title": "HZDavy — 航志",
      "page.desc": "HZDavy — 独自造界面与工具的开发者，航行于代码之间。",
      "a11y.skip": "跳至正文",
      "theme.title": "切换舷窗",
      "boot.skip": "跳过自检",
      "boot.1": "反应堆点火…",
      "boot.2": "校准星河坐标系…",
      "boot.3": "舷窗开启，欢迎登舰。",
      "nav.notes": "航志",
      "nav.signals": "信号",
      "nav.channels": "通讯",
      "hud.ship": "星舰手记",
      "hud.sys": "系统",
      "hud.core": "核心",
      "hud.nav": "导航",
      "hud.comm": "通讯",
      "hud.traj": "航道",
      "hud.vel": "航速",
      "hud.prox": "近距接触",
      "hud.dist": "航程",
      "hero.eyebrow": "hzdavy // 独立开发 // 航次 2026",
      "hero.tagline": "独自造界面与工具，航行于代码之间。",
      "hero.decrypt": "解其所余",
      "hero.mystery": "已说尽。余下的，睡在稿与案之间。",
      "hero.scroll": "↓ 启航",
      "wp1.tag": "航点 01",
      "wp1.name": "航志",
      "wp2.tag": "航点 02",
      "wp2.name": "信号",
      "wp3.tag": "航点 03",
      "wp3.name": "通讯",
      "notes.label": "航志 / LOG ENTRIES",
      "notes.lede": "此处记录所造之物与近日航程。",
      "notes.line1": "所愿甚多，所成实寡，悉录于此。",
      "notes.line2": "所成之稿，皆泊于 GitHub 之库。",
      "signals.label": "信号 / SIGNALS",
      "signals.1.name": "PlanMonitor — 自造之工具",
      "signals.1.state": "已布 · v1.0",
      "signals.2.name": "记账之器，界面重绘",
      "signals.2.state": "草稿 · 途中",
      "signals.3.name": "为器作画与界面",
      "signals.3.state": "私藏 · 未发",
      "channels.label": "通讯 / CHANNELS",
      "promo.close": "关闭",
      "promo.flag": "来讯 / INCOMING",
      "promo.desc": "把 Coding Plan 与 Agent Plan 的余额，挂在屏幕一角。写码或跑 Agent 时，剩余一眼可见。",
      "promo.meta3": "免费 · AGPL-3.0 · 单文件",
      "promo.cta": "免费取用",
      "log.launch": "离港。推进器已点火。",
      "log.wp1": "抵达航点 01：航志。读取档案。",
      "log.wp2": "航点 02：捕获三枚信号。",
      "log.wp3": "航点 03：通讯阵列上线。",
      "log.idle": "巡航中，一切如常。",
      "log.anomaly1": "轻微引力扰动，已自动补偿。",
      "log.anomaly2": "远处掠过一枚未登记的信标。",
      "log.anomaly3": "宇宙射线微闪，未损及核心。",
      "evt.m1": "航次 2026 · 离港",
      "evt.m2": "抵达 航点 01 · 航志",
      "evt.m3": "抵达 航点 02 · 信号",
      "evt.m4": "抵达 航点 03 · 通讯"
    },
    "zh-Hant": {
      "page.title": "HZDavy — 航誌",
      "page.desc": "HZDavy — 獨自造界面與工具的開發者，航行於代碼之間。",
      "a11y.skip": "跳至正文",
      "theme.title": "切換舷窗",
      "boot.skip": "跳過自檢",
      "boot.1": "反應爐點火…",
      "boot.2": "校準星河座標系…",
      "boot.3": "舷窗開啟，歡迎登艦。",
      "nav.notes": "航誌",
      "nav.signals": "信號",
      "nav.channels": "通訊",
      "hud.ship": "星艦手記",
      "hud.sys": "系統",
      "hud.core": "核心",
      "hud.nav": "導航",
      "hud.comm": "通訊",
      "hud.traj": "航道",
      "hud.vel": "航速",
      "hud.prox": "近距接觸",
      "hud.dist": "航程",
      "hero.eyebrow": "hzdavy // 獨立開發 // 航次 2026",
      "hero.tagline": "獨自造界面與工具，航行於代碼之間。",
      "hero.decrypt": "解其所餘",
      "hero.mystery": "已說盡。餘下的，睡在稿與案之間。",
      "hero.scroll": "↓ 啟航",
      "wp1.tag": "航點 01",
      "wp1.name": "航誌",
      "wp2.tag": "航點 02",
      "wp2.name": "信號",
      "wp3.tag": "航點 03",
      "wp3.name": "通訊",
      "notes.label": "航誌 / LOG ENTRIES",
      "notes.lede": "此處記錄所造之物與近日航程。",
      "notes.line1": "所願甚多，所成實寡，悉錄於此。",
      "notes.line2": "所成之稿，皆泊於 GitHub 之庫。",
      "signals.label": "信號 / SIGNALS",
      "signals.1.name": "PlanMonitor — 自造之工具",
      "signals.1.state": "已佈 · v1.0",
      "signals.2.name": "記帳之器，界面重繪",
      "signals.2.state": "草稿 · 途中",
      "signals.3.name": "為器作畫與界面",
      "signals.3.state": "私藏 · 未發",
      "channels.label": "通訊 / CHANNELS",
      "promo.close": "關閉",
      "promo.flag": "來訊 / INCOMING",
      "promo.desc": "把 Coding Plan 與 Agent Plan 的餘額，掛在螢幕一角。寫碼或跑 Agent 時，剩餘一眼可見。",
      "promo.meta3": "免費 · AGPL-3.0 · 單檔",
      "promo.cta": "免費取用",
      "log.launch": "離港。推進器已點火。",
      "log.wp1": "抵達航點 01：航誌。讀取檔案。",
      "log.wp2": "航點 02：捕獲三枚信號。",
      "log.wp3": "航點 03：通訊陣列上線。",
      "log.idle": "巡航中，一切如常。",
      "log.anomaly1": "輕微引力擾動，已自動補償。",
      "log.anomaly2": "遠處掠過一枚未登記的信標。",
      "log.anomaly3": "宇宙射線微閃，未損及核心。",
      "evt.m1": "航次 2026 · 離港",
      "evt.m2": "抵達 航點 01 · 航誌",
      "evt.m3": "抵達 航點 02 · 信號",
      "evt.m4": "抵達 航點 03 · 通訊"
    },
    en: {
      "page.title": "HZDavy — Ship Log",
      "page.desc": "HZDavy — building interfaces and tools alone, sailing between lines of code.",
      "a11y.skip": "Skip to content",
      "theme.title": "Switch viewport",
      "boot.skip": "Skip diagnostics",
      "boot.1": "Igniting reactor…",
      "boot.2": "Calibrating star charts…",
      "boot.3": "Viewport open. Welcome aboard.",
      "nav.notes": "Log",
      "nav.signals": "Signals",
      "nav.channels": "Channels",
      "hud.ship": "STARSHIP NOTES",
      "hud.sys": "System",
      "hud.core": "Core",
      "hud.nav": "Nav",
      "hud.comm": "Comm",
      "hud.traj": "Trajectory",
      "hud.vel": "Velocity",
      "hud.prox": "Proximity",
      "hud.dist": "Range",
      "hero.eyebrow": "hzdavy // independent developer // voyage 2026",
      "hero.tagline": "Building interfaces and tools on my own, sailing between lines of code.",
      "hero.decrypt": "Decrypt the rest",
      "hero.mystery": "Said enough. The rest sleeps between drafts and desks.",
      "hero.scroll": "↓ launch",
      "wp1.tag": "Waypoint 01",
      "wp1.name": "Log",
      "wp2.tag": "Waypoint 02",
      "wp2.name": "Signals",
      "wp3.tag": "Waypoint 03",
      "wp3.name": "Channels",
      "notes.label": "LOG ENTRIES / SHIP LOG",
      "notes.lede": "Here I record what I build, and the voyage of recent days.",
      "notes.line1": "Much wanted, little finished. What remains, stays here.",
      "notes.line2": "Finished drafts sleep in my GitHub repositories.",
      "signals.label": "SIGNALS / TRACES",
      "signals.1.name": "PlanMonitor — a tool I built myself",
      "signals.1.state": "Released · v1.0",
      "signals.2.name": "Ledger app, interface redrawn",
      "signals.2.state": "Draft · in progress",
      "signals.3.name": "Imagery and interfaces for tools",
      "signals.3.state": "Private · unreleased",
      "channels.label": "CHANNELS / CONTACT",
      "promo.close": "Close",
      "promo.flag": "INCOMING TRANSMISSION",
      "promo.desc": "Keeps your Coding Plan and Agent Plan balances in a corner of the screen — remaining quota at a glance while you code or run agents.",
      "promo.meta3": "Free · AGPL-3.0 · single file",
      "promo.cta": "Get it free",
      "log.launch": "Undocked. Thrusters lit.",
      "log.wp1": "Waypoint 01 reached: log. Reading archives.",
      "log.wp2": "Waypoint 02: three signals acquired.",
      "log.wp3": "Waypoint 03: comm array online.",
      "log.idle": "Cruising. All quiet.",
      "log.anomaly1": "Minor gravity ripple, auto-compensated.",
      "log.anomaly2": "An unregistered beacon drifted past.",
      "log.anomaly3": "Cosmic ray flicker, core unharmed.",
      "evt.m1": "Voyage 2026 · Undocked",
      "evt.m2": "Waypoint 01 reached · Log",
      "evt.m3": "Waypoint 02 reached · Signals",
      "evt.m4": "Waypoint 03 reached · Channels"
    },
    ja: {
      "page.title": "HZDavy — 航海日誌",
      "page.desc": "HZDavy — ひとりで界面と道具をつくる開発者。コードのあいだを航行する。",
      "a11y.skip": "本文へ",
      "theme.title": "舷窓を切り替え",
      "boot.skip": "自診断を飛ばす",
      "boot.1": "反応炉に点火…",
      "boot.2": "星図を較正…",
      "boot.3": "舷窓が開いた。ようこそ。",
      "nav.notes": "航海日誌",
      "nav.signals": "信号",
      "nav.channels": "通信",
      "hud.ship": "星艦の手記",
      "hud.sys": "系統",
      "hud.core": "炉心",
      "hud.nav": "航法",
      "hud.comm": "通信",
      "hud.traj": "軌道",
      "hud.vel": "速度",
      "hud.prox": "近接",
      "hud.dist": "航程",
      "hero.eyebrow": "hzdavy // 独立開発 // 航海 2026",
      "hero.tagline": "ひとりで界面と道具をつくる。コードのあいだを航行する。",
      "hero.decrypt": "残りを解く",
      "hero.mystery": "語り尽くした。残りは、稿と案のあいだに眠る。",
      "hero.scroll": "↓ 出航",
      "wp1.tag": "航路点 01",
      "wp1.name": "航海日誌",
      "wp2.tag": "航路点 02",
      "wp2.name": "信号",
      "wp3.tag": "航路点 03",
      "wp3.name": "通信",
      "notes.label": "航海日誌 / LOG ENTRIES",
      "notes.lede": "ここに記すのは、つくったものと近頃の航程。",
      "notes.line1": "望むことは多く、成ったものは少ない。すべてここに残す。",
      "notes.line2": "成った稿は、GitHub の蔵に眠っている。",
      "signals.label": "信号 / SIGNALS",
      "signals.1.name": "PlanMonitor — 自ら手がけた道具",
      "signals.1.state": "公開 · v1.0",
      "signals.2.name": "会計の道具、界面を描き直す",
      "signals.2.state": "草稿 · 途上",
      "signals.3.name": "道具に図像と界面を",
      "signals.3.state": "私有 · 未公開",
      "channels.label": "通信 / CHANNELS",
      "promo.close": "閉じる",
      "promo.flag": "受信 / INCOMING",
      "promo.desc": "Coding Plan と Agent Plan の残量を、画面の片隅に置いておく道具。書き物や Agent の最中も、残りがひと目で分かる。",
      "promo.meta3": "無料 · AGPL-3.0 · 単体",
      "promo.cta": "無料で入手",
      "log.launch": "離床。推進器に点火。",
      "log.wp1": "航路点 01 に到達：日誌。記録を読む。",
      "log.wp2": "航路点 02：三つの信号を捕捉。",
      "log.wp3": "航路点 03：通信列が起動。",
      "log.idle": "巡航中。変わりなし。",
      "log.anomaly1": "僅かな重力の揺らぎ、自動補正済み。",
      "log.anomaly2": "未登録の標識が遠くを過ぎった。",
      "log.anomaly3": "宇宙線の微かな瞬き、炉心は無事。",
      "evt.m1": "航海 2026 · 離床",
      "evt.m2": "航路点 01 到達 · 日誌",
      "evt.m3": "航路点 02 到達 · 信号",
      "evt.m4": "航路点 03 到達 · 通信"
    },
    ko: {
      "page.title": "HZDavy — 항해 일지",
      "page.desc": "HZDavy — 혼자서 인터페이스와 도구를 만드는 개발자. 코드 사이를 항해한다.",
      "a11y.skip": "본문으로",
      "theme.title": "현창 전환",
      "boot.skip": "자체 점검 건너뛰기",
      "boot.1": "반응로 점화…",
      "boot.2": "항성 좌표계 보정…",
      "boot.3": "현창이 열렸다. 탑승을 환영한다.",
      "nav.notes": "항해 일지",
      "nav.signals": "신호",
      "nav.channels": "통신",
      "hud.ship": "성선의 수기",
      "hud.sys": "시스템",
      "hud.core": "노심",
      "hud.nav": "항법",
      "hud.comm": "통신",
      "hud.traj": "궤도",
      "hud.vel": "속도",
      "hud.prox": "근접",
      "hud.dist": "항정",
      "hero.eyebrow": "hzdavy // 독립 개발 // 항해 2026",
      "hero.tagline": "혼자서 인터페이스와 도구를 만든다. 코드 사이를 항해한다.",
      "hero.decrypt": "나머지를 풀다",
      "hero.mystery": "다 말했다. 나머지는 원고와 책상 사이에 잠들어 있다.",
      "hero.scroll": "↓ 출항",
      "wp1.tag": "항로점 01",
      "wp1.name": "항해 일지",
      "wp2.tag": "항로점 02",
      "wp2.name": "신호",
      "wp3.tag": "항로점 03",
      "wp3.name": "통신",
      "notes.label": "항해 일지 / LOG ENTRIES",
      "notes.lede": "여기에 남기는 것은, 내가 만든 것과 요즘의 항정.",
      "notes.line1": "바라는 것은 많고, 이룬 것은 적다. 모두 여기 남긴다.",
      "notes.line2": "완성된 원고는 GitHub 저장소에 잠들어 있다.",
      "signals.label": "신호 / SIGNALS",
      "signals.1.name": "PlanMonitor — 직접 만든 도구",
      "signals.1.state": "공개 · v1.0",
      "signals.2.name": "회계 앱, 인터페이스 재작업",
      "signals.2.state": "초안 · 진행 중",
      "signals.3.name": "도구를 위한 도상과 인터페이스",
      "signals.3.state": "비공개 · 미출시",
      "channels.label": "통신 / CHANNELS",
      "promo.close": "닫기",
      "promo.flag": "수신 / INCOMING",
      "promo.desc": "Coding Plan 과 Agent Plan 의 잔량을 화면 한쪽에 두는 도구. 코드를 쓰거나 Agent 를 돌리는 동안 남은 양이 한눈에 보인다.",
      "promo.meta3": "무료 · AGPL-3.0 · 단일 파일",
      "promo.cta": "무료로 받기",
      "log.launch": "이륙. 추진기 점화.",
      "log.wp1": "항로점 01 도착: 항해 일지. 기록을 읽는다.",
      "log.wp2": "항로점 02: 신호 세 개 포착.",
      "log.wp3": "항로점 03: 통신 배열 가동.",
      "log.idle": "순항 중. 별일 없다.",
      "log.anomaly1": "미세한 중력 파동, 자동 보정됨.",
      "log.anomaly2": "미등록 표식이 멀리 스쳐 갔다.",
      "log.anomaly3": "우주선 섬광, 노심은 무사하다.",
      "evt.m1": "항해 2026 · 이륙",
      "evt.m2": "항로점 01 도착 · 일지",
      "evt.m3": "항로점 02 도착 · 신호",
      "evt.m4": "항로점 03 도착 · 통신"
    }
  };

  var LANGS = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
  var root = document.documentElement;
  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function write(key, val) {
    try {
      if (val == null) localStorage.removeItem(key);
      else localStorage.setItem(key, val);
    } catch (e) {}
  }
  function t(lang, key) {
    var pack = I18N[lang] || I18N.en;
    return pack[key] != null ? pack[key] : I18N.en[key] != null ? I18N.en[key] : "";
  }
  function detectLang() {
    var saved = read("hzdavy_lang");
    if (saved && I18N[saved]) return saved;
    var nav = (navigator.language || "en").toLowerCase();
    if (nav.indexOf("zh") === 0) {
      if (/hant|tw|hk|mo/.test(nav)) return "zh-Hant";
      return "zh-Hans";
    }
    if (nav.indexOf("ja") === 0) return "ja";
    if (nav.indexOf("ko") === 0) return "ko";
    return "en";
  }

  var currentLang = "en";

  /* ---------------------------------------------------------
     2. typewriter
     --------------------------------------------------------- */
  var typeEl = document.getElementById("type");
  var typeTimer = null;

  function typeTagline(text) {
    if (!typeEl) return;
    if (typeTimer) clearTimeout(typeTimer);
    if (prefersReduced) { typeEl.textContent = text; return; }
    var i = 0;
    (function step() {
      typeEl.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) typeTimer = setTimeout(step, 38);
    })();
  }

  /* ---------------------------------------------------------
     3. ship log
     --------------------------------------------------------- */
  var logEl = document.getElementById("log");
  var logEntries = []; /* {tag, key, warn} */

  function renderLog() {
    if (!logEl) return;
    logEl.innerHTML = logEntries
      .map(function (e) {
        var cls = "log-line" + (e.warn ? " is-warn" : "");
        return (
          '<div class="' + cls + '"><b>[' + e.tag + "]</b> " +
          t(currentLang, e.key) + "</div>"
        );
      })
      .join("");
  }

  function pushLog(tag, key, warn) {
    logEntries.push({ tag: tag, key: key, warn: !!warn });
    if (logEntries.length > 4) logEntries.shift();
    renderLog();
  }

  /* ---------------------------------------------------------
     4. milestone banner
     --------------------------------------------------------- */
  var banner = document.getElementById("banner");
  var bannerText = document.getElementById("banner-text");
  var bannerTimer = null;

  function showBanner(key) {
    if (!banner || !bannerText) return;
    bannerText.textContent = t(currentLang, key);
    banner.classList.add("is-in");
    if (bannerTimer) clearTimeout(bannerTimer);
    bannerTimer = setTimeout(function () {
      banner.classList.remove("is-in");
    }, prefersReduced ? 1200 : 2800);
  }

  /* ---------------------------------------------------------
     5. language
     --------------------------------------------------------- */
  var langButtons = Array.prototype.slice.call(document.querySelectorAll(".lang"));
  var metaDesc = document.getElementById("meta-desc");
  var metaTheme = document.getElementById("meta-theme");
  var decryptBtn = document.getElementById("decrypt");
  var decryptLabel = document.getElementById("decrypt-label");
  var revealed = false;

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    currentLang = lang;
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);

    document.title = t(lang, "page.title");
    if (metaDesc) metaDesc.setAttribute("content", t(lang, "page.desc"));

    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n]"), function (el) {
      var v = t(lang, el.getAttribute("data-i18n"));
      if (v) el.textContent = v;
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-i18n-attr]"), function (el) {
      el.getAttribute("data-i18n-attr").split(",").forEach(function (pair) {
        var bits = pair.split(":");
        if (bits.length === 2) {
          var v = t(lang, bits[1].trim());
          if (v) el.setAttribute(bits[0].trim(), v);
        }
      });
    });

    langButtons.forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-set-lang") === lang ? "true" : "false");
    });

    if (decryptBtn) decryptBtn.setAttribute("title", t(lang, "hero.decrypt"));
    if (themeBtn) themeBtn.setAttribute("title", t(lang, "theme.title"));
    if (revealed && decryptLabel) {
      decryptLabel.textContent = t(lang, "hero.mystery");
      if (decryptBtn) decryptBtn.setAttribute("aria-label", t(lang, "hero.mystery"));
    }

    /* boot lines may still be visible */
    bootLines.forEach(function (el, idx) {
      if (el && el.dataset.typed === "1") el.textContent = t(lang, "boot." + (idx + 1));
    });

    renderLog();
    typeTagline(t(lang, "hero.tagline"));
  }

  function withTransition(fn) {
    if (document.startViewTransition && !prefersReduced) document.startViewTransition(fn);
    else fn();
  }

  function setLang(lang) {
    if (lang === currentLang) return;
    write("hzdavy_lang", lang);
    withTransition(function () { applyLang(lang); });
  }

  langButtons.forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-set-lang")); });
  });

  document.addEventListener("keydown", function (e) {
    if (!e.altKey || e.metaKey || e.ctrlKey) return;
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= LANGS.length) { e.preventDefault(); setLang(LANGS[n - 1]); }
  });

  /* ---------------------------------------------------------
     6. theme
     --------------------------------------------------------- */
  var themeBtn = document.getElementById("theme-toggle");
  var THEMES = { void: "#04100f", ember: "#120a04" };

  function applyTheme(theme) {
    if (!THEMES[theme]) theme = "void";
    root.setAttribute("data-theme", theme);
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", theme === "ember" ? "true" : "false");
      themeBtn.setAttribute("title", t(currentLang, "theme.title"));
    }
    if (metaTheme) metaTheme.setAttribute("content", THEMES[theme]);
    if (window.__hzdavyReadPalette) window.__hzdavyReadPalette();
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "ember" ? "void" : "ember";
      write("hzdavy_theme", next);
      withTransition(function () { applyTheme(next); });
    });
  }

  /* ---------------------------------------------------------
     7. decrypt reveal
     --------------------------------------------------------- */
  var used = false;

  function decrypt(target, text, cb) {
    if (prefersReduced) { target.textContent = text; cb(); return; }
    var glyphs = "アカサタナハ0123456789_-?·<>/\\";
    var len = text.length;
    var round = 0;
    var timer = setInterval(function () {
      var out = "";
      for (var i = 0; i < len; i++) {
        var ch = text.charAt(i);
        if (i <= round || ch === " " || ch === "。" || ch === "，" || ch === ".") out += ch;
        else out += glyphs.charAt(Math.floor(Math.random() * glyphs.length));
      }
      target.textContent = out;
      round++;
      if (round >= len) { clearInterval(timer); cb(); }
    }, 20);
  }

  if (decryptBtn) {
    decryptBtn.addEventListener("click", function () {
      if (used) return;
      used = true;
      revealed = true;
      decryptBtn.disabled = true;
      decryptLabel.textContent = "";
      decrypt(decryptLabel, t(currentLang, "hero.mystery"), function () {
        decryptBtn.classList.add("is-revealed");
        decryptBtn.setAttribute("aria-label", t(currentLang, "hero.mystery"));
        pushLog("SYS", "log.idle");
      });
    });
  }

  /* ---------------------------------------------------------
     8. promo
     --------------------------------------------------------- */
  var promo = document.getElementById("promo-mask");
  var promoClose = document.getElementById("promo-close");
  var promoShown = !!read("hzdavy_promo");

  function openPromo() {
    if (!promo || promo.hasAttribute("open")) return;
    promo.setAttribute("open", "");
    write("hzdavy_promo", "1");
    promo.hidden = false;
    requestAnimationFrame(function () { promo.classList.add("is-in"); });
    var target = promo.querySelector(".promo-cta") || promoClose;
    if (target) target.focus();
  }
  function closePromo() {
    if (!promo || promo.hidden) return;
    promo.classList.remove("is-in");
    var p = promo;
    setTimeout(function () { p.hidden = true; p.removeAttribute("open"); }, prefersReduced ? 0 : 340);
  }
  if (promo) {
    promoClose.addEventListener("click", closePromo);
    promo.addEventListener("click", function (e) { if (e.target === promo) closePromo(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !promo.hidden) closePromo();
    });
  }

  /* ---------------------------------------------------------
     9. starfield warp  (canvas #space)
     --------------------------------------------------------- */
  var space = document.getElementById("space");
  var warpBoost = 0;
  var palette = { accent: "63,224,200", fg: "217,246,240" };

  function hexToRgb(hex) {
    var h = hex.replace("#", "").trim();
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function readPalette() {
    var cs = getComputedStyle(root);
    var accent = hexToRgb(cs.getPropertyValue("--accent").trim() || "#3fe0c8");
    var fg = hexToRgb(cs.getPropertyValue("--fg").trim() || "#d9f6f0");
    palette.accent = accent.join(",");
    palette.fg = fg.join(",");
  }

  if (space && !prefersReduced) {
    var sctx = space.getContext("2d");
    var sDpr = Math.min(window.devicePixelRatio || 1, 2);
    var SW = 0, SH = 0, stars = [];

    function seedStars() {
      var count = Math.min(460, Math.round((SW * SH) / 5200));
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({
          x: (Math.random() * 2 - 1),
          y: (Math.random() * 2 - 1),
          z: Math.random() * 0.95 + 0.05,
          pz: 0
        });
      }
    }
    function sresize() {
      SW = space.clientWidth;
      SH = space.clientHeight;
      space.width = SW * sDpr;
      space.height = SH * sDpr;
      sctx.setTransform(sDpr, 0, 0, sDpr, 0, 0);
      seedStars();
    }

    var speed = 0.0016;

    function sframe() {
      var cx = SW / 2, cy = SH / 2;
      /* fade trail */
      sctx.fillStyle = "rgba(4,16,15,0.34)";
      if (root.getAttribute("data-theme") === "ember") sctx.fillStyle = "rgba(18,10,4,0.34)";
      sctx.fillRect(0, 0, SW, SH);

      var v = speed + warpBoost;
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        s.pz = s.z;
        s.z -= v;
        if (s.z <= 0.03) {
          s.x = (Math.random() * 2 - 1);
          s.y = (Math.random() * 2 - 1);
          s.z = 1;
          s.pz = 1;
        }
        var k = 190;
        var x1 = cx + (s.x / s.z) * k;
        var y1 = cy + (s.y / s.z) * k;
        var x2 = cx + (s.x / s.pz) * k;
        var y2 = cy + (s.y / s.pz) * k;
        if (x1 < -50 || x1 > SW + 50 || y1 < -50 || y1 > SH + 50) continue;
        var depth = 1 - s.z;
        var a = Math.min(1, depth * 1.3) * 0.85;
        sctx.strokeStyle = "rgba(" + palette.fg + "," + a.toFixed(3) + ")";
        sctx.lineWidth = depth > 0.72 ? 1.6 : 1;
        sctx.beginPath();
        sctx.moveTo(x2, y2);
        sctx.lineTo(x1, y1);
        sctx.stroke();
      }
      warpBoost *= 0.93;
      requestAnimationFrame(sframe);
    }

    sresize();
    readPalette();
    window.addEventListener("resize", sresize);
    requestAnimationFrame(sframe);
    window.__hzdavyReadPalette = readPalette;
  } else {
    window.__hzdavyReadPalette = readPalette;
  }

  /* ---------------------------------------------------------
     10. proximity radar  (canvas #radar)
     --------------------------------------------------------- */
  var radar = document.getElementById("radar");
  var contacts = [
    { a: 0, r: 0.55, sp: 0.0016, id: "c1" },
    { a: 2.1, r: 0.78, sp: -0.0011, id: "c2" },
    { a: 4.2, r: 0.34, sp: 0.0009, id: "c3" }
  ];

  if (radar && !prefersReduced) {
    var rctx = radar.getContext("2d");
    var rDpr = Math.min(window.devicePixelRatio || 1, 2);
    var RW = 0, RH = 0, sweep = 0;
    var rAccent = "63,224,200";

    function rresize() {
      RW = radar.clientWidth;
      RH = radar.clientHeight;
      if (!RW || !RH) return;
      radar.width = RW * rDpr;
      radar.height = RH * rDpr;
      rctx.setTransform(rDpr, 0, 0, rDpr, 0, 0);
    }

    function rframe() {
      if (!RW || !RH) { requestAnimationFrame(rframe); return; }
      var cs = getComputedStyle(root).getPropertyValue("--accent").trim();
      if (cs.charAt(0) === "#") rAccent = hexToRgb(cs).join(",");
      var cx = RW / 2, cy = RH / 2, rad = Math.min(cx, cy) - 2;
      rctx.clearRect(0, 0, RW, RH);

      /* grid rings */
      rctx.strokeStyle = "rgba(" + rAccent + ",0.22)";
      rctx.lineWidth = 1;
      [0.34, 0.66, 1].forEach(function (f) {
        rctx.beginPath();
        rctx.arc(cx, cy, rad * f, 0, Math.PI * 2);
        rctx.stroke();
      });
      rctx.beginPath();
      rctx.moveTo(cx - rad, cy); rctx.lineTo(cx + rad, cy);
      rctx.moveTo(cx, cy - rad); rctx.lineTo(cx, cy + rad);
      rctx.stroke();

      /* sweep */
      sweep += 0.018 + warpBoost * 4;
      var grad = rctx.createConicGradient ? null : null;
      rctx.save();
      rctx.translate(cx, cy);
      rctx.rotate(sweep);
      var lg = rctx.createLinearGradient(0, 0, rad, 0);
      lg.addColorStop(0, "rgba(" + rAccent + ",0.55)");
      lg.addColorStop(1, "rgba(" + rAccent + ",0)");
      rctx.strokeStyle = lg;
      rctx.lineWidth = 2;
      rctx.beginPath();
      rctx.moveTo(0, 0);
      rctx.lineTo(rad, 0);
      rctx.stroke();
      rctx.restore();

      /* contacts */
      contacts.forEach(function (c) {
        c.a += c.sp;
        var rr = rad * c.r;
        var x = cx + Math.cos(c.a) * rr;
        var y = cy + Math.sin(c.a) * rr;
        var dist = (c.r * 1200).toFixed(0);
        var el = document.getElementById(c.id);
        if (el) el.textContent = dist + " km";
        rctx.fillStyle = "rgba(" + rAccent + ",0.95)";
        rctx.beginPath();
        rctx.arc(x, y, 2.4, 0, Math.PI * 2);
        rctx.fill();
        rctx.strokeStyle = "rgba(" + rAccent + ",0.35)";
        rctx.beginPath();
        rctx.arc(x, y, 5, 0, Math.PI * 2);
        rctx.stroke();
      });

      requestAnimationFrame(rframe);
    }

    rresize();
    window.addEventListener("resize", rresize);
    requestAnimationFrame(rframe);
  }

  /* ---------------------------------------------------------
     11. scroll adventure
     --------------------------------------------------------- */
  var trajMarker = document.getElementById("traj-marker");
  var velFill = document.getElementById("vel-fill");
  var velEl = document.getElementById("vel");
  var distEl = document.getElementById("dist");
  var coordsEl = document.getElementById("coords");
  var ledPwr = document.getElementById("led-pwr");

  var MAX_KM = 384000;
  var lastY = 0;
  var vel = 0;      /* 0..100 */
  var smoothVel = 0;

  var stateLeds = [
    document.getElementById("sys-state"),
    document.getElementById("nav-state"),
    document.getElementById("comm-state")
  ];
  if (stateLeds[0]) stateLeds[0].classList.add("is-ok");
  if (stateLeds[1]) stateLeds[1].classList.add("is-warn");
  if (stateLeds[2]) stateLeds[2].classList.add("is-warn");

  var reached = {};

  function pad3(n) { return (n < 10 ? "00" : n < 100 ? "0" : "") + n; }

  function onScroll() {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;

    vel = Math.min(100, Math.abs(window.scrollY - lastY) * 1.6);
    lastY = window.scrollY;

    if (trajMarker) trajMarker.style.top = Math.round(p * 100) + "%";
    if (distEl) distEl.textContent = Math.round(p * MAX_KM).toLocaleString("en-US") + " km";
    if (coordsEl) {
      coordsEl.textContent =
        "X " + pad3(Math.round(p * 999)) + " · Y " + pad3(Math.round(p * 360));
    }
  }

  var velLoop = function () {
    smoothVel += (vel - smoothVel) * 0.12;
    vel -= vel * 0.08;
    var shown = Math.round(smoothVel);
    if (velFill) velFill.style.width = Math.min(100, shown) + "%";
    if (velEl) velEl.textContent = shown;
    warpBoost = Math.min(0.05, smoothVel * 0.0005);
    requestAnimationFrame(velLoop);
  };

  if (!prefersReduced) {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    requestAnimationFrame(velLoop);
  } else {
    if (velFill) velFill.style.width = "0%";
  }

  /* waypoint milestones */
  var WP = [
    { key: "log.wp1", evt: "evt.m2", tag: "LOG", led: 0 },
    { key: "log.wp2", evt: "evt.m3", tag: "COM", led: 1 },
    { key: "log.wp3", evt: "evt.m4", tag: "COM", led: 2 }
  ];

  function hitWaypoint(i) {
    if (reached[i]) return;
    reached[i] = true;
    var w = WP[i];
    pushLog(w.tag, w.key);
    showBanner(w.evt);
    if (stateLeds[w.led]) {
      stateLeds[w.led].classList.remove("is-warn");
      stateLeds[w.led].classList.add("is-ok");
    }
  }

  var views = Array.prototype.slice.call(document.querySelectorAll("[data-waypoint]"));
  if (!prefersReduced && "IntersectionObserver" in window) {
    var wio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var idx = parseInt(en.target.getAttribute("data-waypoint"), 10);
          if (idx >= 1) hitWaypoint(idx - 1);
        });
      },
      { threshold: 0.42, rootMargin: "-8% 0px -8% 0px" }
    );
    views.forEach(function (v) { wio.observe(v); });
  } else {
    views.forEach(function (v) {
      var idx = parseInt(v.getAttribute("data-waypoint"), 10);
      if (idx >= 1) hitWaypoint(idx - 1);
    });
  }

  /* random anomalies — the voyage feels alive */
  var anomalies = ["log.anomaly1", "log.anomaly2", "log.anomaly3"];
  if (!prefersReduced) {
    (function scheduleAnomaly() {
      var wait = 14000 + Math.random() * 12000;
      setTimeout(function () {
        if (document.hidden) { scheduleAnomaly(); return; }
        if (banner && banner.classList.contains("is-in")) { scheduleAnomaly(); return; }
        var key = anomalies[Math.floor(Math.random() * anomalies.length)];
        pushLog("WRN", key, true);
        if (ledPwr) {
          ledPwr.classList.add("is-warn");
          setTimeout(function () { ledPwr.classList.remove("is-warn"); }, 1400);
        }
        scheduleAnomaly();
      }, wait);
    })();
  }

  /* ---------------------------------------------------------
     12. reveal on scroll
     --------------------------------------------------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, idx) {
          if (entry.isIntersecting) {
            var el = entry.target;
            setTimeout(function () { el.classList.add("is-in"); }, Math.min(idx * 70, 280));
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------------------------------------------------------
     13. tilt cards
     --------------------------------------------------------- */
  var finePointer = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
  if (finePointer && !prefersReduced) {
    Array.prototype.forEach.call(document.querySelectorAll(".tilt"), function (card) {
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty("--ry", (px * 6).toFixed(2) + "deg");
        card.style.setProperty("--rx", (-py * 6).toFixed(2) + "deg");
      });
      card.addEventListener("pointerleave", function () {
        card.style.setProperty("--ry", "0deg");
        card.style.setProperty("--rx", "0deg");
      });
    });
  }

  /* ---------------------------------------------------------
     14. live clock
     --------------------------------------------------------- */
  var clock = document.getElementById("clock");
  if (clock) {
    var pad2 = function (n) { return (n < 10 ? "0" : "") + n; };
    var tick = function () {
      var d = new Date();
      clock.textContent = pad2(d.getHours()) + ":" + pad2(d.getMinutes()) + ":" + pad2(d.getSeconds());
    };
    tick();
    setInterval(tick, 500);
  }

  /* ---------------------------------------------------------
     15. boot sequence
     --------------------------------------------------------- */
  var boot = document.getElementById("boot");
  var bootLines = [
    document.getElementById("boot-1"),
    document.getElementById("boot-2"),
    document.getElementById("boot-3")
  ];
  var bootFill = document.getElementById("boot-fill");
  var bootSkip = document.getElementById("boot-skip");
  var bootDone = false;

  function runBoot(done) {
    /* lines are filled by applyLang via dataset flag; just type them */
    var idx = 0;
    function next() {
      if (bootDone) return;
      if (idx >= 3) { finish(); return; }
      var el = bootLines[idx];
      var full = t(currentLang, "boot." + (idx + 1));
      el.dataset.typed = "1";
      el.textContent = "";
      if (prefersReduced) {
        el.textContent = full;
        idx++;
        setTimeout(next, 260);
        return;
      }
      var i = 0;
      (function step() {
        if (bootDone) return;
        el.textContent = full.slice(0, i);
        i++;
        if (i <= full.length) setTimeout(step, 26);
        else { idx++; setTimeout(next, 220); }
      })();
    }
    function finish() {
      if (bootDone) return;
      bootDone = true;
      if (bootFill) bootFill.style.width = "100%";
      setTimeout(function () {
        if (boot) boot.classList.add("is-done");
        startVoyage();
        if (!promoShown) setTimeout(openPromo, prefersReduced ? 300 : 1200);
      }, prefersReduced ? 60 : 480);
    }
    next();

    /* progress bar */
    if (bootFill && !prefersReduced) {
      var p = 0;
      var iv = setInterval(function () {
        if (bootDone) { clearInterval(iv); return; }
        p = Math.min(96, p + Math.random() * 9);
        bootFill.style.width = p + "%";
      }, 160);
    }
    return finish;
  }

  var finishBoot = null;

  function startVoyage() {
    pushLog("SYS", "log.launch");
    showBanner("evt.m1");
    if (ledPwr) ledPwr.classList.add("is-ok");
  }

  if (bootSkip) {
    bootSkip.addEventListener("click", function () {
      if (bootDone) return;
      bootDone = true;
      if (boot) boot.classList.add("is-done");
      startVoyage();
      if (!promoShown) setTimeout(openPromo, 300);
    });
  }

  /* ---------------------------------------------------------
     boot
     --------------------------------------------------------- */
  applyTheme(read("hzdavy_theme") || "void");
  applyLang(detectLang());

  if (boot) finishBoot = runBoot();
})();
