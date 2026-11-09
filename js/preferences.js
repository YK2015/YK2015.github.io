(function () {
  "use strict";
  var root = document.documentElement;
  var themeKey = "yk-theme";
  var languageKey = "yk-language";
  var systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  function storedValue(key, allowed) {
    try {
      var value = window.localStorage.getItem(key);
      return allowed.indexOf(value) !== -1 ? value : null;
    } catch (error) {
      return null;
    }
  }
  function remember(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // Preferences still work for this page when browser storage is unavailable.
    }
  }
  function browserLanguage() {
    var preferred = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return /^zh/i.test(preferred) ? "zh-CN" : "en";
  }
  var savedTheme = storedValue(themeKey, ["light", "dark"]);
  var savedLanguage = storedValue(languageKey, ["en", "zh-CN"]);
  var theme = savedTheme || (systemTheme.matches ? "dark" : "light");
  var language = savedLanguage || browserLanguage();

  // Apply before the stylesheet and page content load to avoid a theme flash.
  root.setAttribute("data-theme", theme);
  root.lang = language;
  root.classList.add("js");

  function updateTheme() {
    root.setAttribute("data-theme", theme);
    document.querySelectorAll("[data-theme-choice]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-theme-choice") === theme));
    });
  }
  function updateLanguage() {
    root.lang = language;
    var labels = JSON.parse(document.getElementById("preference-labels").textContent)[language];
    var pageTitle = labels.pages[root.getAttribute("data-page-key")];
    if (pageTitle) document.title = pageTitle + " - " + root.getAttribute("data-site-title");
    document.querySelectorAll("[data-language-choice]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-language-choice") === language));
    });
    document.querySelectorAll("[data-preference-label]").forEach(function (element) {
      var text = labels[element.getAttribute("data-preference-label")];
      element.setAttribute("aria-label", text);
      if (element.tagName === "BUTTON") element.setAttribute("title", text);
    });
  }
  function initialize() {
    var menuButton = document.querySelector(".site-menu-toggle");
    var navigation = document.getElementById("site-navigation");
    menuButton.addEventListener("click", function () {
      var expanded = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(expanded));
      navigation.classList.toggle("is-open", expanded);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navigation.classList.contains("is-open")) {
        navigation.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.focus();
      }
    });
    document.querySelectorAll("[data-theme-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        theme = button.getAttribute("data-theme-choice");
        savedTheme = theme;
        remember(themeKey, theme);
        updateTheme();
      });
    });
    document.querySelectorAll("[data-language-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        language = button.getAttribute("data-language-choice");
        savedLanguage = language;
        remember(languageKey, language);
        updateLanguage();
      });
    });
    updateTheme();
    updateLanguage();
    root.classList.add("preferences-ready");
  }
  function followSystemTheme() {
    if (!savedTheme) {
      theme = systemTheme.matches ? "dark" : "light";
      updateTheme();
    }
  }
  if (systemTheme.addEventListener) systemTheme.addEventListener("change", followSystemTheme);
  else systemTheme.addListener(followSystemTheme);
  window.addEventListener("languagechange", function () {
    if (!savedLanguage) {
      language = browserLanguage();
      updateLanguage();
    }
  });
  window.addEventListener("storage", function (event) {
    if (event.key === themeKey || event.key === null) {
      savedTheme = storedValue(themeKey, ["light", "dark"]);
      theme = savedTheme || (systemTheme.matches ? "dark" : "light");
      updateTheme();
    }
    if (event.key === languageKey || event.key === null) {
      savedLanguage = storedValue(languageKey, ["en", "zh-CN"]);
      language = savedLanguage || browserLanguage();
      updateLanguage();
    }
  });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
  else initialize();
})();
