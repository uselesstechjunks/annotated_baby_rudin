```js
(function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.documentElement.classList.add("light");
  }

  function initThemeToggle() {
    const button = document.getElementById("theme-toggle");

    if (!button) {
      return;
    }

    function updateButton() {
      const isLight =
        document.documentElement.classList.contains("light");

      button.textContent = isLight ? "☾ Dark" : "☀ Light";

      button.setAttribute(
        "aria-label",
        isLight
          ? "Switch to dark mode"
          : "Switch to light mode"
      );
    }

    updateButton();

    button.addEventListener("click", function () {
      const isLight =
        document.documentElement.classList.contains("light");

      if (isLight) {
        document.documentElement.classList.remove("light");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
      }

      updateButton();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initThemeToggle
    );
  } else {
    initThemeToggle();
  }
})();
```
