const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// ---------- ELEMENT REFERENCES ----------

const input = document.getElementById("input");
const searchBtn = document.getElementById("searchBtn");
const randomBtn = document.getElementById("randomBtn");
const categoryBtn = document.getElementById("categoryBtn");
const categoryList = document.getElementById("categoryList");

const resultsContainer = document.getElementById("resultsContainer");
const emptyBox = document.getElementById("what-are-you-hungry-for-box");
const loadingMsg = document.getElementById("loadingMsg");
const errorMsg = document.getElementById("errorMsg");

const recipeModal = document.getElementById("recipeModal");
const closeRecipeBtn = document.getElementById("closeRecipe");
const recipeTitle = document.getElementById("recipeTitle");
const recipeImage = document.getElementById("recipeImage");
const recipeIngredients = document.getElementById("recipeIngredients");
const recipeInstructions = document.getElementById("recipeInstructions");

// ---------- INIT ----------

// This is the function main.js calls to turn everything on
function initMealSearch() {
  searchBtn.addEventListener("click", handleSearch);
  randomBtn.addEventListener("click", handleRandom);
  categoryBtn.addEventListener("click", toggleCategoryList);

  resultsContainer.addEventListener("click", handleMealClick);
  closeRecipeBtn.addEventListener("click", () => recipeModal.close());
}

// ---------- EVENT HANDLERS ----------

function handleSearch() {
  const searchTerm = input.value.trim();

  if (!searchTerm) {
    showError("Please type something to search.");
    return;
  }

  searchMeals(searchTerm);
}

function handleRandom() {
  getRandomMeal();
}

// Show/hide the category dropdown. Load categories the first time it's opened.
function toggleCategoryList() {
  categoryList.classList.toggle("hidden");

  // If the list is empty, this is the first time it's been opened — go fetch categories
  if (categoryList.children.length === 0) {
    loadCategories();
  }
}

function handleMealClick(event) {
  const card = event.target.closest(".meal-card");
  if (!card) return;

  const id = card.dataset.id;
  getMealById(id);
}

// ---------- API CALLS ----------

async function searchMeals(query) {
  showLoading();

  try {
    const response = await fetch(
      `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`,
    );
    const data = await response.json();

    hideLoading();

    if (!data.meals) {
      showError("No meals found. Try a different search.");
      return;
    }

    renderMeals(data.meals);
  } catch (error) {
    hideLoading();
    showError("Something went wrong. Please try again.");
    console.error("Search failed:", error);
  }
}

async function getRandomMeal() {
  showLoading();

  try {
    const response = await fetch(`${BASE_URL}/random.php`);
    const data = await response.json();

    hideLoading();
    renderMeals(data.meals);
  } catch (error) {
    hideLoading();
    showError("Something went wrong. Please try again.");
    console.error("Random meal fetch failed:", error);
  }
}

async function loadCategories() {
  try {
    const response = await fetch(`${BASE_URL}/list.php?c=list`);
    const data = await response.json();

    renderCategoryList(data.meals);
  } catch (error) {
    console.error("Loading categories failed:", error);
  }
}

async function filterByCategory(category) {
  showLoading();

  try {
    const response = await fetch(
      `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`,
    );
    const data = await response.json();

    hideLoading();

    if (!data.meals) {
      showError("No meals found in this category.");
      return;
    }

    renderMeals(data.meals);
  } catch (error) {
    hideLoading();
    showError("Something went wrong. Please try again.");
    console.error("Category filter failed:", error);
  }
}

async function getMealById(id) {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await response.json();

    if (!data.meals) return;

    renderRecipeModal(data.meals[0]);
  } catch (error) {
    console.error("Fetching recipe details failed:", error);
  }
}

// ---------- RENDERING ----------

function renderMeals(meals) {
  emptyBox.classList.add("hidden");
  errorMsg.classList.add("hidden");

  resultsContainer.innerHTML = meals
    .map(
      (meal) => `
        <div class="meal-card" data-id="${meal.idMeal}">
          <img
            src="${meal.strMealThumb}"
            alt="${meal.strMeal}"
            loading="lazy"
            onerror="this.src='https://via.placeholder.com/200x140?text=No+Image'"
          >
          <h3>${meal.strMeal}</h3>
        </div>
      `,
    )
    .join("");
}

function renderCategoryList(categories) {
  categoryList.innerHTML = categories
    .map(
      (cat) => `<li data-category="${cat.strCategory}">${cat.strCategory}</li>`,
    )
    .join("");

  // One click listener handles every category item (event delegation)
  categoryList.addEventListener("click", (event) => {
    const category = event.target.dataset.category;
    if (!category) return;

    filterByCategory(category);
    categoryList.classList.add("hidden");
  });
}

function renderRecipeModal(meal) {
  recipeTitle.textContent = meal.strMeal;
  recipeImage.src = meal.strMealThumb;
  recipeImage.alt = meal.strMeal;
  recipeInstructions.textContent = meal.strInstructions;

  // Ingredients are stored as strIngredient1..20 / strMeasure1..20
  let ingredientsHtml = "";
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredientsHtml += `<li>${measure} ${ingredient}</li>`;
    }
  }
  recipeIngredients.innerHTML = ingredientsHtml;

  recipeModal.showModal();
}

// ---------- UI HELPERS ----------

function showLoading() {
  loadingMsg.classList.remove("hidden");
  errorMsg.classList.add("hidden");
}

function hideLoading() {
  loadingMsg.classList.add("hidden");
}

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.classList.remove("hidden");
  resultsContainer.innerHTML = "";
}

export { initMealSearch };
