```js
(function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.documentElement.classList.add("light");
  }

  window.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
      return;
    }

    function updateThemeButton() {
      const isLight =
        document.documentElement.classList.contains("light");

      themeToggle.textContent =
        isLight ? "☾ Dark" : "☀ Light";

      themeToggle.setAttribute(
        "aria-label",
        isLight
          ? "Switch to dark mode"
          : "Switch to light mode"
      );
    }

    updateThemeButton();

    themeToggle.addEventListener("click", () => {
      const isLight =
        document.documentElement.classList.contains("light");

      document.documentElement.classList.toggle(
        "light",
        !isLight
      );

      localStorage.setItem(
        "theme",
        !isLight ? "light" : "dark"
      );

      updateThemeButton();
    });
  });
})();
```
