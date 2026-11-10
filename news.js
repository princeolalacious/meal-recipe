export function initnews() {
  // ---------- Settings ----------
  const RSS_FEED_URL = "https://www.seriouseats.com/feed"; // check this returns valid RSS
  const NEWS_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_FEED_URL)}`;
  const RECIPE_API = "https://www.themealdb.com/api/json/v1/1/random.php";
  const FALLBACK_IMG = "Image/yyyyy.png";

  // So we only load once (not every time News is clicked)
  let newsLoaded = false;
  let recipesLoaded = false;

  // ---------- Small helper: set an image with a safe fallback ----------
  function setImage(img, src, altText) {
    img.alt = altText || "";
    img.onerror = function () {
      img.onerror = null; // stops an endless loop if the fallback also fails
      img.src = FALLBACK_IMG;
    };
    img.src = src || FALLBACK_IMG;
  }

  // ---------- Popup (modal) ----------
  const modal = document.getElementById("news-modal");
  const modalBody = document.getElementById("news-modal-body");
  const modalClose = document.getElementById("news-modal-close");

  function openModal(content) {
    modalBody.innerHTML = "";
    modalBody.appendChild(content);
    modal.hidden = false;
  }

  function closeModal() {
    modal.hidden = true;
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);

  // Click on the dark background closes it
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Escape key closes it
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // ---------- NEWS ----------
  async function fetchFoodNews() {
    if (newsLoaded) return;

    const loadingElement = document.getElementById("news-loading");
    const newsGrid = document.getElementById("news-grid");

    try {
      const response = await fetch(NEWS_API);
      const data = await response.json();

      if (data.status === "ok" && data.items && data.items.length > 0) {
        showNews(data.items.slice(0, 6));
        newsLoaded = true;
      } else {
        throw new Error("Invalid RSS structure or empty items");
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      showNews(getFallbackNews()); // show sample cards so the page still looks good
    }

    if (loadingElement) loadingElement.style.display = "none";

    function showNews(articles) {
      newsGrid.innerHTML = "";
      articles.forEach((article) => {
        newsGrid.appendChild(createNewsCard(article));
      });
    }
  }

  function createNewsCard(article) {
    const card = document.createElement("div");
    card.className = "news-card";

    // Empty card layout first, then we fill in the text safely
    card.innerHTML = `
      <div class="news-image-wrapper"><img></div>
      <div class="news-content">
        <span class="news-date"></span>
        <h3></h3>
        <p></p>
        <button class="read-more-btn" type="button">Read here &rarr;</button>
      </div>
    `;

    const date = new Date(article.pubDate || Date.now()).toLocaleDateString();

    // Remove HTML tags from the description for the short preview
    const shortText = article.description
      ? article.description.replace(/<[^>]*>?/gm, "").substring(0, 100)
      : "Discover the latest tips, tricks, and delicious trends from the kitchen.";

    setImage(
      card.querySelector("img"),
      article.thumbnail || (article.enclosure && article.enclosure.link),
      article.title,
    );
    card.querySelector(".news-date").textContent = date;
    card.querySelector("h3").textContent = article.title;
    card.querySelector("p").textContent = shortText + "...";

    // Open the popup when the button is clicked
    card.querySelector(".read-more-btn").addEventListener("click", () => {
      openArticle(article);
    });

    return card;
  }

  function openArticle(article) {
    const box = document.createElement("div");
    box.innerHTML = `
      <h2></h2>
      <small></small>
      <div class="news-modal-text"></div>
      <a class="source-link" target="_blank" rel="noopener noreferrer">Continue on source &#8599;</a>
    `;

    box.querySelector("h2").textContent = article.title;
    box.querySelector("small").textContent = new Date(
      article.pubDate || Date.now(),
    ).toLocaleDateString();

    // DOMPurify cleans the HTML so it is safe to show
    const html = article.content || article.description || "";
    box.querySelector(".news-modal-text").innerHTML = DOMPurify.sanitize(html);

    box.querySelector(".source-link").href =
      article.link || "https://www.seriouseats.com";

    openModal(box);
  }

  // Sample cards, used only if the news API fails
  function getFallbackNews() {
    return [
      {
        title: "10 Quick & Healthy Weeknight Dinners",
        description:
          "Looking for fast meals that don't compromise on flavor? Here are 10 foolproof recipes for busy evenings.",
        pubDate: Date.now(),
        link: "https://www.seriouseats.com",
      },
      {
        title: "The Secret to Mastering Knife Skills",
        description:
          "Upgrade your cooking game instantly by learning how professional chefs handle their blades.",
        pubDate: Date.now(),
        link: "https://www.seriouseats.com",
      },
    ];
  }

  // ---------- RECIPES (TheMealDB) ----------
  async function fetchRecipes() {
    if (recipesLoaded) return;

    const recipeGrid = document.getElementById("recipe-grid");

    try {
      // Ask for 6 random meals at the same time
      const requests = [];
      for (let i = 0; i < 6; i++) {
        requests.push(fetch(RECIPE_API).then((res) => res.json()));
      }
      const results = await Promise.all(requests);

      // Remove duplicates (the same meal can come back twice)
      const seen = {};
      const meals = [];
      results.forEach((result) => {
        const meal = result.meals[0];
        if (!seen[meal.idMeal]) {
          seen[meal.idMeal] = true;
          meals.push(meal);
        }
      });

      recipeGrid.innerHTML = "";
      meals.forEach((meal) => {
        recipeGrid.appendChild(createRecipeCard(meal));
      });
      recipesLoaded = true;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      recipeGrid.innerHTML =
        "<p>Could not load recipes right now. Please try again later.</p>";
    }
  }

  function createRecipeCard(meal) {
    const card = document.createElement("div");
    card.className = "news-card";

    card.innerHTML = `
      <div class="news-image-wrapper"><img></div>
      <div class="news-content">
        <span class="news-date"></span>
        <h3></h3>
        <p></p>
        <button class="read-more-btn" type="button">View recipe &rarr;</button>
      </div>
    `;

    setImage(card.querySelector("img"), meal.strMealThumb, meal.strMeal);
    card.querySelector(".news-date").textContent =
      meal.strArea + " • " + meal.strCategory;
    card.querySelector("h3").textContent = meal.strMeal;
    card.querySelector("p").textContent =
      meal.strInstructions.substring(0, 100) + "...";

    card.querySelector(".read-more-btn").addEventListener("click", () => {
      openRecipe(meal);
    });

    return card;
  }

  function openRecipe(meal) {
    const box = document.createElement("div");
    box.innerHTML = `
      <h2></h2>
      <small></small>
      <img>
      <h4>Ingredients</h4>
      <ul class="ingredient-list"></ul>
      <h4>Instructions</h4>
      <div class="instructions"></div>
    `;

    box.querySelector("h2").textContent = meal.strMeal;
    box.querySelector("small").textContent =
      meal.strArea + " • " + meal.strCategory;
    setImage(box.querySelector("img"), meal.strMealThumb, meal.strMeal);

    // Ingredients are stored as strIngredient1 ... strIngredient20
    const list = box.querySelector(".ingredient-list");
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal["strIngredient" + i];
      const measure = meal["strMeasure" + i];
      if (ingredient && ingredient.trim() !== "") {
        const li = document.createElement("li");
        li.textContent =
          (measure ? measure.trim() + " " : "") + ingredient.trim();
        list.appendChild(li);
      }
    }

    // Each new line of the instructions becomes its own paragraph
    const instructionsBox = box.querySelector(".instructions");
    meal.strInstructions.split("\n").forEach((line) => {
      if (line.trim() !== "") {
        const p = document.createElement("p");
        p.textContent = line.trim();
        instructionsBox.appendChild(p);
      }
    });

    // Optional YouTube link
    if (meal.strYoutube) {
      const video = document.createElement("a");
      video.href = meal.strYoutube;
      video.target = "_blank";
      video.rel = "noopener noreferrer";
      video.className = "source-link";
      video.textContent = "Watch video ↗";
      box.appendChild(video);
    }

    openModal(box);
  }

  // ---------- Open the News section when the "News" link is clicked ----------
  function bindNewsLinks() {
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
      if (link.textContent.trim().toLowerCase() === "news") {
        link.addEventListener("click", (e) => {
          e.preventDefault();

          const mainContainer = document.getElementById("container");
          const newsSection = document.getElementById("news-section");

          if (mainContainer) mainContainer.style.display = "none";
          if (newsSection) {
            newsSection.style.display = "block";
            fetchRecipes();
            fetchFoodNews();
          }

          // Close mobile sidebar if open
          const sidebar = document.querySelector(".sidebar");
          if (sidebar) sidebar.style.display = "none";
        });
      }
    });
  }

  // Works whether the page is still loading or already loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindNewsLinks);
  } else {
    bindNewsLinks();
  }
}
