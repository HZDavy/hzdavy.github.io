/* ============================================================
   HZDavy — main.js
   i18n (zh-Hans · zh-Hant · en · ja · ko) + ambient front-end fx
   ============================================================ */
(function () {
  "use strict";

  /* ---------------------------------------------------------
     1. translations
     --------------------------------------------------------- */
  var I18N = {
    "zh-Hans": {
      "page.title": "HZDavy — 手记",
      "page.desc": "HZDavy — 独自做界面与工具，安静的开发者。",
      "a11y.skip": "跳至正文",
      "nav.notes": "手记",
      "nav.signals": "痕迹",
      "nav.channels": "联络",
      "hero.eyebrow": "davy//2026 — 独立开发",
      "hero.tagline": "独自做界面与工具，安静的开发者。",
      "hero.decrypt": "解其所余",
      "hero.mystery": "已说尽。余下的，睡在稿与案之间。",
      "hero.scroll": "↓ 向下",
      "notes.label": "手记 / FIELD NOTES",
      "notes.lede": "这里记录我做的东西，和最近的事。",
      "notes.line1": "想做的很多，做成的很少，都留在这里。",
      "notes.line2": "做成的稿子，都睡在 GitHub 的仓库里。",
      "signals.label": "痕迹 / SIGNALS",
      "signals.1.name": "PlanMonitor — 自己动手做的工具",
      "signals.1.state": "已发布 · v1.0",
      "signals.2.name": "记账应用，界面重画",
      "signals.2.state": "草稿 · 在路上",
      "signals.3.name": "为工具画图像与界面",
      "signals.3.state": "私下 · 未公开",
      "channels.label": "联络 / CHANNELS",
      "promo.close": "关闭",
      "promo.flag": "新作 / NEW TOOL",
      "promo.desc": "把 Coding Plan 与 Agent Plan 的余额，挂在屏幕一角。写码或跑 Agent 时，剩余一眼可见。",
      "promo.meta3": "免费 · AGPL-3.0 · 单文件",
      "promo.cta": "免费取用",
      "footer.note": "无追踪 · 只留墨迹",
      "theme.title": "切换明暗"
    },
    "zh-Hant": {
      "page.title": "HZDavy — 手記",
      "page.desc": "HZDavy — 獨自做界面與工具，安靜的開發者。",
      "a11y.skip": "跳至正文",
      "nav.notes": "手記",
      "nav.signals": "痕跡",
      "nav.channels": "連絡",
      "hero.eyebrow": "davy//2026 — 獨立開發",
      "hero.tagline": "獨自做界面與工具，安靜的開發者。",
      "hero.decrypt": "解其所餘",
      "hero.mystery": "已說盡。餘下的，睡在稿與案之間。",
      "hero.scroll": "↓ 向下",
      "notes.label": "手記 / FIELD NOTES",
      "notes.lede": "這裡記錄我做的東西，和最近的事。",
      "notes.line1": "想做的很多，做成的很少，都留在這裡。",
      "notes.line2": "做成的稿子，都睡在 GitHub 的倉庫裡。",
      "signals.label": "痕跡 / SIGNALS",
      "signals.1.name": "PlanMonitor — 自己動手做的工具",
      "signals.1.state": "已發佈 · v1.0",
      "signals.2.name": "記帳應用，界面重畫",
      "signals.2.state": "草稿 · 在路上",
      "signals.3.name": "為工具畫圖像與界面",
      "signals.3.state": "私下 · 未公開",
      "channels.label": "連絡 / CHANNELS",
      "promo.close": "關閉",
      "promo.flag": "新作 / NEW TOOL",
      "promo.desc": "把 Coding Plan 與 Agent Plan 的餘額，掛在螢幕一角。寫碼或跑 Agent 時，剩餘一眼可見。",
      "promo.meta3": "免費 · AGPL-3.0 · 單檔",
      "promo.cta": "免費取用",
      "footer.note": "無追蹤 · 只留墨跡",
      "theme.title": "切換明暗"
    },
    en: {
      "page.title": "HZDavy — Field Notes",
      "page.desc": "HZDavy — building interfaces and tools alone, a quiet developer.",
      "a11y.skip": "Skip to content",
      "nav.notes": "Notes",
      "nav.signals": "Signals",
      "nav.channels": "Channels",
      "hero.eyebrow": "davy//2026 — Independent Developer",
      "hero.tagline": "Building interfaces and tools on my own — a quiet developer.",
      "hero.decrypt": "Decrypt the rest",
      "hero.mystery": "Said enough. The rest sleeps between drafts and desks.",
      "hero.scroll": "↓ scroll",
      "notes.label": "NOTES / FIELD NOTES",
      "notes.lede": "Notes on the things I make, and on recent days.",
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
      "promo.flag": "NEW TOOL",
      "promo.desc": "Keeps your Coding Plan and Agent Plan balances in a corner of the screen — remaining quota at a glance while you code or run agents.",
      "promo.meta3": "Free · AGPL-3.0 · single file",
      "promo.cta": "Get it free",
      "footer.note": "No tracking · only traces of ink",
      "theme.title": "Toggle theme"
    },
    ja: {
      "page.title": "HZDavy — 手記",
      "page.desc": "HZDavy — ひとりで界面と道具をつくる、静かな開発者。",
      "a11y.skip": "本文へ",
      "nav.notes": "手記",
      "nav.signals": "痕跡",
      "nav.channels": "連絡",
      "hero.eyebrow": "davy//2026 — 独立開発",
      "hero.tagline": "ひとりで界面と道具をつくる、静かな開発者。",
      "hero.decrypt": "残りを解く",
      "hero.mystery": "語り尽くした。残りは、稿と案のあいだに眠る。",
      "hero.scroll": "↓ 下へ",
      "notes.label": "手記 / FIELD NOTES",
      "notes.lede": "ここに記すのは、つくったものと近頃のこと。",
      "notes.line1": "望むことは多く、成ったものは少ない。すべてここに残す。",
      "notes.line2": "成った稿は、GitHub の蔵に眠っている。",
      "signals.label": "痕跡 / SIGNALS",
      "signals.1.name": "PlanMonitor — 自ら手がけた道具",
      "signals.1.state": "公開 · v1.0",
      "signals.2.name": "会計の道具、界面を描き直す",
      "signals.2.state": "草稿 · 途上",
      "signals.3.name": "道具に図像と界面を",
      "signals.3.state": "私有 · 未公開",
      "channels.label": "連絡 / CHANNELS",
      "promo.close": "閉じる",
      "promo.flag": "新作 / NEW TOOL",
      "promo.desc": "Coding Plan と Agent Plan の残量を、画面の片隅に置いておく道具。書き物や Agent の最中も、残りがひと目で分かる。",
      "promo.meta3": "無料 · AGPL-3.0 · 単体",
      "promo.cta": "無料で入手",
      "footer.note": "追跡なし · ただ墨のあと",
      "theme.title": "明暗を切り替え"
    },
    ko: {
      "page.title": "HZDavy — 수기",
      "page.desc": "HZDavy — 혼자서 인터페이스와 도구를 만드는, 조용한 개발자.",
      "a11y.skip": "본문으로",
      "nav.notes": "수기",
      "nav.signals": "흔적",
      "nav.channels": "연락",
      "hero.eyebrow": "davy//2026 — 독립 개발자",
      "hero.tagline": "혼자서 인터페이스와 도구를 만드는, 조용한 개발자.",
      "hero.decrypt": "나머지를 풀다",
      "hero.mystery": "다 말했다. 나머지는 원고와 책상 사이에 잠들어 있다.",
      "hero.scroll": "↓ 아래로",
      "notes.label": "수기 / FIELD NOTES",
      "notes.lede": "여기에 남기는 것은, 내가 만든 것과 요즘의 일.",
      "notes.line1": "바라는 것은 많고, 이룬 것은 적다. 모두 여기 남긴다.",
      "notes.line2": "완성된 원고는 GitHub 저장소에 잠들어 있다.",
      "signals.label": "흔적 / SIGNALS",
      "signals.1.name": "PlanMonitor — 직접 만든 도구",
      "signals.1.state": "공개 · v1.0",
      "signals.2.name": "회계 앱, 인터페이스 재작업",
      "signals.2.state": "초안 · 진행 중",
      "signals.3.name": "도구를 위한 도상과 인터페이스",
      "signals.3.state": "비공개 · 미출시",
      "channels.label": "연락 / CHANNELS",
      "promo.close": "닫기",
      "promo.flag": "신작 / NEW TOOL",
      "promo.desc": "Coding Plan 과 Agent Plan 의 잔량을 화면 한쪽에 두는 도구. 코드를 쓰거나 Agent 를 돌리는 동안 남은 양이 한눈에 보인다.",
      "promo.meta3": "무료 · AGPL-3.0 · 단일 파일",
      "promo.cta": "무료로 받기",
      "footer.note": "추적 없음 · 다만 먹의 흔적",
      "theme.title": "테마 전환"
    }
  };

  var LANGS = ["zh-Hans", "zh-Hant", "en", "ja", "ko"];
  var root = document.documentElement;
  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function read(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
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

  /* ---------------------------------------------------------
     2. typewriter
     --------------------------------------------------------- */
  var typeEl = document.getElementById("type");
  var typeTimer = null;

  function typeTagline(text) {
    if (!typeEl) return;
    if (typeTimer) clearTimeout(typeTimer);
    if (prefersReduced) {
      typeEl.textContent = text;
      return;
    }
    var i = 0;
    (function step() {
      typeEl.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) typeTimer = setTimeout(step, 40);
    })();
  }

  /* ---------------------------------------------------------
     3. language application
     --------------------------------------------------------- */
  var langButtons = Array.prototype.slice.call(document.querySelectorAll(".lang"));
  var metaDesc = document.getElementById("meta-desc");
  var metaTheme = document.getElementById("meta-theme");
  var decryptBtn = document.getElementById("decrypt");
  var decryptLabel = document.getElementById("decrypt-label");
  var revealed = false;
  var currentLang = "en";

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

    typeTagline(t(lang, "hero.tagline"));
  }

  function withTransition(fn) {
    if (document.startViewTransition && !prefersReduced) {
      document.startViewTransition(fn);
    } else {
      fn();
    }
  }

  function setLang(lang) {
    if (lang === currentLang) return;
    write("hzdavy_lang", lang);
    withTransition(function () {
      applyLang(lang);
    });
  }

  langButtons.forEach(function (b) {
    b.addEventListener("click", function () {
      setLang(b.getAttribute("data-set-lang"));
    });
  });

  /* keyboard: Alt+1 .. Alt+5 */
  document.addEventListener("keydown", function (e) {
    if (!e.altKey || e.metaKey || e.ctrlKey) return;
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= LANGS.length) {
      e.preventDefault();
      setLang(LANGS[n - 1]);
    }
  });

  /* ---------------------------------------------------------
     4. theme
     --------------------------------------------------------- */
  var themeBtn = document.getElementById("theme-toggle");
  var THEMES = { paper: "#f2efe8", ink: "#100f0b" };

  function applyTheme(theme) {
    if (!THEMES[theme]) theme = "paper";
    root.setAttribute("data-theme", theme);
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", theme === "ink" ? "true" : "false");
      themeBtn.setAttribute("title", t(currentLang, "theme.title"));
    }
    if (metaTheme) metaTheme.setAttribute("content", THEMES[theme]);
    if (window.__hzdavyReadInk) window.__hzdavyReadInk();
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "ink" ? "paper" : "ink";
      write("hzdavy_theme", next);
      withTransition(function () {
        applyTheme(next);
      });
    });
  }

  /* ---------------------------------------------------------
     5. decrypt reveal
     --------------------------------------------------------- */
  var used = false;

  function decrypt(target, text, cb) {
    if (prefersReduced) {
      target.textContent = text;
      cb();
      return;
    }
    var glyphs = "アカサタナハ0123456789_-?·";
    var len = text.length;
    var round = 0;
    var timer = setInterval(function () {
      var out = "";
      for (var i = 0; i < len; i++) {
        var ch = text.charAt(i);
        if (i <= round || ch === " " || ch === "。" || ch === "，" || ch === ".") {
          out += ch;
        } else {
          out += glyphs.charAt(Math.floor(Math.random() * glyphs.length));
        }
      }
      target.textContent = out;
      round++;
      if (round >= len) {
        clearInterval(timer);
        cb();
      }
    }, 22);
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
      });
    });
  }

  /* ---------------------------------------------------------
     6. promo modal
     --------------------------------------------------------- */
  var promo = document.getElementById("promo-mask");
  var promoClose = document.getElementById("promo-close");
  var promoShown = !!read("hzdavy_promo");

  function openPromo() {
    if (!promo || promo.hasAttribute("open")) return;
    promo.setAttribute("open", "");
    write("hzdavy_promo", "1");
    promo.hidden = false;
    requestAnimationFrame(function () {
      promo.classList.add("is-in");
    });
    var target = promo.querySelector(".promo-cta") || promoClose;
    if (target) target.focus();
  }

  function closePromo() {
    if (!promo || promo.hidden) return;
    promo.classList.remove("is-in");
    var p = promo;
    setTimeout(function () {
      p.hidden = true;
      p.removeAttribute("open");
    }, prefersReduced ? 0 : 340);
  }

  if (promo) {
    if (!promoShown) setTimeout(openPromo, prefersReduced ? 300 : 1400);
    promoClose.addEventListener("click", closePromo);
    promo.addEventListener("click", function (e) {
      if (e.target === promo) closePromo();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !promo.hidden) closePromo();
    });
  }

  /* ---------------------------------------------------------
     7. dust field (canvas)
     --------------------------------------------------------- */
  var dust = document.getElementById("dust");

  if (dust && !prefersReduced) {
    var ctx = dust.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0;
    var H = 0;
    var particles = [];
    var mx = 0;
    var my = 0;
    var tx = 0;
    var ty = 0;

    function hexToRgb(hex) {
      var h = hex.replace("#", "").trim();
      if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
      var n = parseInt(h, 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    }

    var inkRgb = [23, 21, 15];

    function readInk() {
      var c = getComputedStyle(root).getPropertyValue("--ink").trim();
      if (c.charAt(0) === "#") inkRgb = hexToRgb(c);
    }

    function resize() {
      W = dust.clientWidth;
      H = dust.clientHeight;
      dust.width = W * dpr;
      dust.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.min(80, Math.round((W * H) / 26000));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.4 + 0.3,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          d: Math.random() * 1.6 + 0.4,
          a: Math.random() * 0.4 + 0.12
        });
      }
    }

    function frame() {
      tx += (mx - tx) * 0.05;
      ty += (my - ty) * 0.05;
      ctx.clearRect(0, 0, W, H);
      var rgb = inkRgb;
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -5) p.x = W + 5;
        if (p.x > W + 5) p.x = -5;
        if (p.y < -5) p.y = H + 5;
        if (p.y > H + 5) p.y = -5;
        var px = p.x + tx * p.d * 18;
        var py = p.y + ty * p.d * 18;
        ctx.beginPath();
        ctx.arc(px, py, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + p.a + ")";
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }

    resize();
    readInk();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", function (e) {
      mx = (e.clientX / window.innerWidth) * 2 - 1;
      my = (e.clientY / window.innerHeight) * 2 - 1;
    });
    requestAnimationFrame(frame);
    window.__hzdavyReadInk = readInk;
  }

  /* ---------------------------------------------------------
     8. cursor glow
     --------------------------------------------------------- */
  var glow = document.getElementById("glow");
  var finePointer = window.matchMedia && window.matchMedia("(pointer: fine)").matches;

  if (glow && finePointer && !prefersReduced) {
    document.body.classList.add("has-pointer");
    var gx = window.innerWidth / 2;
    var gy = window.innerHeight / 2;
    var cx = gx;
    var cy = gy;

    window.addEventListener("pointermove", function (e) {
      gx = e.clientX;
      gy = e.clientY;
    });

    (function follow() {
      cx += (gx - cx) * 0.12;
      cy += (gy - cy) * 0.12;
      glow.style.transform = "translate3d(" + cx + "px," + cy + "px,0) translate(-50%,-50%)";
      requestAnimationFrame(follow);
    })();
  }

  /* ---------------------------------------------------------
     9. scroll progress
     --------------------------------------------------------- */
  var bar = document.getElementById("progress-bar");
  if (bar) {
    var onScroll = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var pct = h > 0 ? (window.scrollY / h) * 100 : 0;
      bar.style.width = pct + "%";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* ---------------------------------------------------------
     10. reveal on scroll
     --------------------------------------------------------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, idx) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = Math.min(idx * 60, 240);
            setTimeout(function () {
              el.classList.add("is-in");
            }, delay);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -6% 0px" }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------------------------------------------------------
     11. tilt cards
     --------------------------------------------------------- */
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
     12. live clock
     --------------------------------------------------------- */
  var clock = document.getElementById("clock");
  if (clock) {
    var pad = function (n) {
      return (n < 10 ? "0" : "") + n;
    };
    var tick = function () {
      var d = new Date();
      clock.textContent =
        pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    };
    tick();
    setInterval(tick, 500);
  }

  /* ---------------------------------------------------------
     boot
     --------------------------------------------------------- */
  applyTheme(read("hzdavy_theme") || "paper");
  applyLang(detectLang());
})();
