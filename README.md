# 🥗 HealthyMeal - Meal Recipe Finder

**HealthyMeal** is an intuitive, user-friendly web application designed to help home cooks and food enthusiasts discover delicious, healthy recipes effortlessly. Powered by [TheMealDB](https://www.themealdb.com/), users can search for meals by dish name or key ingredients, filter by category, or generate random recipe suggestions for kitchen inspiration.

## Live demo: https://healthy-meal-recipe.vercel.app

## ✨ Features

- **Search by Keyword:** Look up recipes instantly using meal names or ingredients (e.g., _chicken_, _pasta_, _tomato_).
- **Category Filtering:** Filter meals by categories such as Seafood, Vegetarian, Dessert, Breakfast, and more.
- **"Surprise Me" Generator:** Can't decide what to make? Get a randomly selected recipe with a single click.
- **Responsive Layout:** Clean, modern UI designed to look great on desktop, tablet, and mobile browsers.
- **Light / Dark Mode Toggle:** Seamless switching between theme modes for comfortable viewing.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Icons & Fonts:** FontAwesome / Custom SVG Icons
- **API:** [TheMealDB API](https://www.themealdb.com/api.php)

## 📁 Project Structure

HealthyMeal/
├── index.html # Main HTML structure layout
├── style.css # UI styles, theme variables, and layout styles
├── main.js # Application entry point and event orchestrator
├── mealdb.js # TheMealDB API integration and fetch logic
├── nav.js # Navigation and mobile menu management
├── signup.js # User registration and authentication handlers
├── theme.js # Light and dark mode state manager
└── image/ # Static image assets and banners

## About This Project

This project is built as a hands-on learning exercise in vanilla JavaScript — no frameworks, no libraries, just fundamentals [ making the App to load and function without any delay/hanging and function with less network]. It pulls recipe data from a public API [ MealDB ] and renders it dynamically, while also handling navigation, theme, a FAQ section, and a sign-up form with validation. javaScript concept and usage are as follows:

1. Arrays.............. Storing and mapping over lists of meals/recipes fetched from the API
2. Functions............. Modular logic split across “main.js”, “mealdb.js”, “nav.js”, “theme.js”, “faq.js”, “signup.js”.

3. Loops .................. Iterating over recipe arrays to render cards/lists dynamically .
4. Regex ............... Validating form input (e.g. email format) in “signup.js”
5. Json ................ Parsing the JSON response returned by the mealDB API .
6. Async / Await / Fetch API .....Handling asynchronous API calls cleanly in “mealdb.js”. Making HTTP requests to MealDB endpoints to retrieve recipe data .

7. DOM Manipulation .............Dynamically injecting recipe cards, toggling themes, and controlling the FAQ accordion.
8. Event Handling ...............Listening for clicks, form submissions, and navigation interactions

Html and CSS Concept and usage are as follows:

1. Semantic HTML ...... Structures the app using elements such as header, main, section, article, and footer.
2. Forms & Inputs ...... Provides the meal search field and user input controls.
3. Flexbox ............ Arranges navigation, buttons, recipe details, and other UI elements.
4. CSS Grid ........... Creates the responsive layout for meal/recipe cards.
5. Responsive Design .... Ensures the app works properly across mobile, tablet, and desktop screens.
6. CSS Variables ...... Manages reusable colors, spacing, and theme values.
7. Light & Dark Mode.... Uses CSS variables/classes to switch between light and dark themes.
8. Cards, Images & Typography..... Presents meal images, ingredients, instructions, and text in a clear visual layout.
9. Pseudo-classes, Transitions & Animation...... Adds interactive states such as hover/focus and smooth visual effects.

No build tools or dependencies required — it's pure HTML, CSS, and Vanilla JS.

## Running the project locally

**Prerequisites**

- A modern web browser (Chrome, Firefox, Edge, Safari)
- Git installed
- (Optional) VS Code with the Live Server extension

**Installation & Local Setup**
Clone the repository:
Bash (Terminal)
git clone [https://github.com/princeolalacious/healthymeal.git]

Navigate to the project directory:
Bash (Terminal)
cd healthymeal

Open the application:

Open index.html directly in your web browser.

Recommended: Use the Live Server extension in Visual Studio Code to host and test the modular JavaScript files properly.

## 🌐 API Usage

This application uses the free tier of TheMealDB API for fetching meal data.

## What I Learned

Building this project helped me solidify how JavaScript fundamentals connect together in a real app — from fetching and parsing external data asynchronously, to validating user input with regular expressions, to manipulating the DOM efficiently without a framework.

## Challenge

1.Trying to safeguard API token in frontend without backend, using “.env”, “gitignore”, and “vercel environmental variable”. [though not used in these project, but I learnt it and have use it in subsequent building].

2.Learnt connecting other js file to the "main.js" file using "Module" as value to "Type" property.

3.Got better at linking code challenges to AI for bugs.

4.I became more carful at syntax and made sure spellings corresponds in different files.

5.Hosting Mealrecipe App folder in Vercel from github.

## 📄 License

project. Distributed under the MIT License.

## ✍️ Author

Designed and Created with ❤️ by princeUduma

Copyright © 2026 Healthy Meal.
