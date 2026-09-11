```js
(function () {
  const STORAGE_KEY = "theme";

  function applyTheme(theme) {
    document.documentElement.classList.toggle(
      "light",
      theme === "light"
    );

    const button = document.getElementById("theme-toggle");

    if (button) {
      const isLight = theme === "light";

      button.textContent = isLight ? "☾ Dark" : "☀ Light";

      button.setAttribute(
        "aria-label",
        isLight
          ? "Switch to dark mode"
          : "Switch to light mode"
      );
    }
  }

  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY) === "light"
      ? "light"
      : "dark";
  }

  function init() {
    applyTheme(getSavedTheme());

    const button = document.getElementById("theme-toggle");

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      const currentTheme = getSavedTheme();
      const nextTheme =
        currentTheme === "light" ? "dark" : "light";

      localStorage.setItem(STORAGE_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
```
