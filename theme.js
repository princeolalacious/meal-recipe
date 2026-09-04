export function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle.querySelector("i");

  function applyIcon(theme) {
    themeIcon.classList.toggle("fa-moon", theme === "light");
    themeIcon.classList.toggle("fa-sun", theme === "dark");
  }

  const currentTheme =
    document.documentElement.getAttribute("data-theme") || "light";
  applyIcon(currentTheme);

  themeToggle.addEventListener("click", () => {
    const newTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    applyIcon(newTheme);
  });
}
