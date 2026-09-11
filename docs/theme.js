(function () {
  const STORAGE_KEY = "theme";

  function getTheme() {
    return localStorage.getItem(STORAGE_KEY) === "light"
      ? "light"
      : "dark";
  }

  function setTheme(theme) {
    const isLight = theme === "light";

    document.documentElement.classList.toggle(
      "light",
      isLight
    );

    const button =
      document.getElementById("theme-toggle");

    if (button) {
      button.textContent =
        isLight ? "☾ Dark" : "☀ Light";

      button.setAttribute(
        "aria-label",
        isLight
          ? "Switch to dark mode"
          : "Switch to light mode"
      );
    }
  }

  function init() {
    setTheme(getTheme());

    const button =
      document.getElementById("theme-toggle");

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      const nextTheme =
        getTheme() === "light"
          ? "dark"
          : "light";

      localStorage.setItem(
        STORAGE_KEY,
        nextTheme
      );

      setTheme(nextTheme);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }
})();
