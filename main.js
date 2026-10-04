(function () {
  "use strict";

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- typewriter tagline ---------- */
  var TAGLINE = "造一些安静的、未完成的事物。";
  var typeEl = document.getElementById("type");

  function typeTagline() {
    if (prefersReduced) {
      typeEl.textContent = TAGLINE;
      return;
    }
    var i = 0;
    (function step() {
      typeEl.textContent = TAGLINE.slice(0, i);
      i++;
      if (i <= TAGLINE.length) setTimeout(step, 42);
    })();
  }

  /* ---------- decrypt reveal ---------- */
  var MYSTERY = "至于被藏起来的那些，连我自己也不知道答案。";
  var decryptBtn = document.getElementById("decrypt");
  var decryptLabel = document.getElementById("decrypt-label");
  var used = false;

  function decrypt(target, text, cb) {
    if (prefersReduced) {
      target.textContent = text;
      cb();
      return;
    }
    var glyphs = "造事在代码文字与缝隙之间_?·";
    var len = text.length;
    var round = 0;
    var resolved = 0;
    var timer = setInterval(function () {
      var out = "";
      for (var i = 0; i < len; i++) {
        if (
          i <= round ||
          text.charAt(i) === " " ||
          text.charAt(i) === "。" ||
          text.charAt(i) === "，"
        ) {
          out += text.charAt(i);
        } else {
          out += glyphs.charAt(Math.floor(Math.random() * glyphs.length));
        }
      }
      target.textContent = out;
      round++;
      if (round >= len) {
        clearInterval(timer);
        target.textContent = "";
        cb();
      }
    }, 24);
  }

  decryptBtn.addEventListener("click", function () {
    if (used) return;
    used = true;
    decryptBtn.disabled = true;
    decryptLabel.textContent = "";
    decrypt(decryptLabel, MYSTERY, function () {
      decryptBtn.innerHTML = "";
      decryptBtn.setAttribute("aria-label", "已解开");
    });
  });

  /* ---------- live clock ---------- */
  var clock = document.getElementById("clock");
  if (clock) {
    function pad(n) {
      return (n < 10 ? "0" : "") + n;
    }
    function tick() {
      var d = new Date();
      clock.textContent =
        pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
    }
    tick();
    setInterval(tick, 500);
  }

  /* ---------- reveal on scroll ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (prefersReduced || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  }

  /* start the show */
  typeTagline();

  /* ---------- promo modal ---------- */
  var promo = document.getElementById("promo-mask");
  var promoClose = document.getElementById("promo-close");
  var promoShown = (function () {
    try {
      return !!sessionStorage.getItem("hzdavy_promo");
    } catch (e) {
      return false;
    }
  })();

  function openPromo() {
    if (!promo || promoShown || promo.hasAttribute("open")) return;
    promo.setAttribute("open", "");
    try {
      sessionStorage.setItem("hzdavy_promo", "1");
    } catch (e) {}
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
    }, prefersReduced ? 0 : 320);
  }

  if (promo) {
    if (!promoShown && !prefersReduced) setTimeout(openPromo, 1200);
    else if (!promoShown) setTimeout(openPromo, 300);

    promoClose.addEventListener("click", closePromo);
    promo.addEventListener("click", function (e) {
      if (e.target === promo) closePromo();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && promo && !promo.hidden) closePromo();
    });
  }
})();