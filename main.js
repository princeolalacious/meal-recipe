import { showSidebar, hideSidebar } from "./nav.js";
import { initTheme } from "./theme.js";
import { initFaq } from "./faq.js";
import { initSignup } from "./signup.js";
import { initMealSearch } from "./mealdb.js";

initTheme();
initFaq();
initSignup();
initMealSearch();

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", showSidebar);

const hideSidebarBtn = document.querySelector("#hideSidebar");
hideSidebarBtn.addEventListener("click", hideSidebar);
