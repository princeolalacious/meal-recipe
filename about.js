export function initabout() {
  function bindAboutLinks() {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      if (link.textContent.trim().toLowerCase() === "about") {
        link.addEventListener("click", (e) => {
          e.preventDefault();

          const mainContainer = document.getElementById("container");
          const newsSection = document.getElementById("news-section");
          const aboutSection = document.getElementById("about-section");
          if (aboutSection) aboutSection.style.display = "none";

          // Hide the other sections
          if (mainContainer) mainContainer.style.display = "none";
          if (newsSection) newsSection.style.display = "none";

          // Show About
          if (aboutSection) aboutSection.style.display = "block";

          // Close mobile sidebar if open
          const sidebar = document.querySelector(".sidebar");
          if (sidebar) sidebar.style.display = "none";

          // Scroll to the top
          window.scrollTo(0, 0);
        });
      }
    });
  }

  // Works whether the page is still loading or already loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindAboutLinks);
  } else {
    bindAboutLinks();
  }
}
