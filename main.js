import { showSidebar, hideSidebar } from "./nav.js";
import { initTheme } from "./theme.js";
import { initFaq } from "./faq.js";
import { initSignup } from "./signup.js";
import { initMealSearch } from "./mealdb.js";
import { initnews } from "./news.js";
import { initabout } from "./about.js";

initTheme();
initFaq();
initSignup();
initMealSearch();
initnews();
initabout();

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", showSidebar);

const hideSidebarBtn = document.querySelector("#hideSidebar");
hideSidebarBtn.addEventListener("click", hideSidebar);
