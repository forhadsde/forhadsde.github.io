/* ==========================================================================
   MD Forhadul Islam, Portfolio
   Vanilla JS: theme toggle, mobile nav, scrollspy, reveal-on-scroll.
   ========================================================================== */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme toggle ---------- */
  var themeToggle = document.querySelector("[data-theme-toggle]");
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      /* storage unavailable, ignore */
    }
  }

  // Initialise from storage or system preference (attribute may already be
  // set by the inline script in <head> to avoid a flash of wrong theme).
  var initialTheme = getStoredTheme();
  if (!initialTheme) {
    initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  applyTheme(initialTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      setStoredTheme(next);
    });
  }

  // Follow the OS if the user hasn't explicitly chosen a theme.
  var colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  colorSchemeQuery.addEventListener("change", function (e) {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

  /* ---------- Mobile navigation ---------- */
  var navToggle = document.querySelector("[data-nav-toggle]");
  var header = document.querySelector("[data-header]");

  if (navToggle && header) {
    navToggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu when a link is chosen.
    header.querySelectorAll(".nav-links a").forEach(function (link) {
      link.addEventListener("click", function () {
        header.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Scrollspy: highlight the active section ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav-links a"));
  var sections = navLinks
    .map(function (link) {
      var id = link.getAttribute("href");
      return id && id.charAt(0) === "#" ? document.querySelector(id) : null;
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var activeId = "#" + entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle("is-active", link.getAttribute("href") === activeId);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* ---------- Reveal-on-scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry, index) {
        if (entry.isIntersecting) {
          // Small stagger for elements revealed together.
          var siblings = entry.target.parentElement
            ? Array.prototype.slice.call(entry.target.parentElement.children).filter(function (el) {
                return el.classList && el.classList.contains("reveal");
              })
            : [entry.target];
          var i = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = (i % 3) * 90 + "ms";
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
