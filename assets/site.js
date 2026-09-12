(function () {
  var KEY = "bixel-theme";
  var root = document.documentElement;

  function get() { try { return localStorage.getItem(KEY); } catch(e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch(e) {} }

  function applyTheme(t) {
    root.setAttribute("data-theme", t);
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    var l = btn.querySelector(".lbl-t");
    if (l) l.textContent = t === "dark" ? "Dark" : "Light";
    btn.setAttribute("aria-label", "Switch to " + (t === "dark" ? "light" : "dark") + " theme");
  }

  // apply immediately (before first paint)
  var saved = get();
  var theme = saved || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(theme);

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(get() || theme);
    var btn = document.getElementById("themeToggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        applyTheme(next);
        set(next);
      });
    }

    // OS preference — only if user hasn't chosen
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      var onChange = function(e) {
        if (get()) return;
        applyTheme(e.matches ? "dark" : "light");
      };
      if (mq.addEventListener) mq.addEventListener("change", onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  });
})();
