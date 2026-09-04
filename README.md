# 🥗 Healthy Meal Recipe App

A vanilla JavaScript project built to explore and apply core JS concepts in a real, working application — a recipe browser powered by [TheMealDB API](https://www.themealdb.com/api.php).

🔗 **Live demo:** [https://healthy-meal-recipe.vercel.app/](#)

---

## 📖 About This Project

This project was built as a hands-on learning exercise in vanilla JavaScript — no frameworks, no libraries, just fundamentals. It pulls recipe data from a public API and renders it dynamically, while also handling navigation, theming, a FAQ section, and a signup form with validation.

---

## 🧠 JavaScript Concepts Practiced

| Concept              | Where it's used                                                                                |
| -------------------- | ---------------------------------------------------------------------------------------------- |
| **Arrays**           | Storing and mapping over lists of meals/recipes fetched from the API                           |
| **Functions**        | Modular logic split across `main.js`, `mealdb.js`, `nav.js`, `theme.js`, `faq.js`, `signup.js` |
| **Loops**            | Iterating over recipe arrays to render cards/lists dynamically                                 |
| **Regex**            | Validating form input (e.g. email format) in `signup.js`                                       |
| **JSON**             | Parsing the JSON response returned by the MealDB API                                           |
| **Async / Await**    | Handling asynchronous API calls cleanly in `mealdb.js`                                         |
| **Fetch API**        | Making HTTP requests to TheMealDB endpoints to retrieve recipe data                            |
| **DOM Manipulation** | Dynamically injecting recipe cards, toggling themes, and controlling the FAQ accordion         |
| **Event Handling**   | Listening for clicks, form submissions, and navigation interactions                            |

---

## 📂 Project Structure

```
meal-recipe/
├── Image/              # App icons and background images
├── index.html          # Main HTML structure
├── style.css           # Styling
├── main.js             # Core app logic / entry point
├── mealdb.js           # Fetch + async logic for TheMealDB API
├── nav.js              # Navigation behavior
├── theme.js            # Light/dark theme toggle
├── faq.js              # FAQ accordion logic
└── signup.js           # Signup form + validation (regex)
```

---

## ⚙️ How It Works

1. On load, `mealdb.js` sends a `fetch` request to TheMealDB API.
2. The response (JSON) is parsed and converted into JS objects.
3. `main.js` loops through the returned array of meals and builds DOM elements for each recipe.
4. `nav.js` and `theme.js` handle UI interactions (navigation, dark/light mode).
5. `signup.js` validates user input using regex before allowing form submission.
6. `faq.js` manages expand/collapse behavior for frequently asked questions.

---

## 🚀 Running Locally

```bash
git clone https://github.com/princeolalacious/meal-recipe.git
cd meal-recipe
# then just open index.html in your browser
```

No build tools or dependencies required — it's pure HTML, CSS, and JS.

---

## 🌱 What I Learned

Building this project helped solidify how JavaScript fundamentals connect together in a real app — from fetching and parsing external data asynchronously, to validating user input with regular expressions, to manipulating the DOM efficiently without a framework.

## challenge

Trying to safeguard API in frontend without backend, thogh learnt it throgh .env and specifying git ignore.

Learnt connecting other js file to the "main.js" file using "Module" as value to "Type" property.

Got better at linking code challenges to AI for bugs.

I became more carful at syntax and made sure spellings correspondsin different files.

---

## 📌 Future Improvements

- Add loading states/error handling for failed API calls
- Add a search/filter feature for recipes
- Improve form validation feedback (inline error messages)
- Moving to React properly
