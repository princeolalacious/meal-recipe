                                              HEALTHYMEAL RECIPE APP

A vanilla JavaScript project built to explore and apply core JS concepts in a real, working application — a recipe website powered by MealDB.

Live demo: https://healthy-meal-recipe.vercel.app/

                                       About This Project

This project was built as a hands-on learning exercise in vanilla JavaScript — no frameworks, no libraries, just fundamentals [ making the App to load and function without any delay/hanging and function with less network]. It pulls recipe data from a public API [ MealDB ] and renders it dynamically, while also handling navigation, theme, a FAQ section, and a sign-up form with validation.

<S/N> <javaScript Concept> <Usage>

1. Arrays.............. Storing and mapping over lists of meals/recipes fetched from the API
2. Functions............. Modular logic split across “main.js”, “mealdb.js”, “nav.js”, “theme.js”, “faq.js”, “signup.js”.

3. Loops .................. Iterating over recipe arrays to render cards/lists dynamically .
4. Regex ............... Validating form input (e.g. email format) in “signup.js”
5. Json ................ Parsing the JSON response returned by the mealDB API .
6. Async / Await / Fetch API .....Handling asynchronous API calls cleanly in “mealdb.js”. Making HTTP requests to MealDB endpoints to retrieve recipe data .

7. DOM Manipulation .............Dynamically injecting recipe cards, toggling themes, and controlling the FAQ accordion.
8. Event Handling ...............Listening for clicks, form submissions, and navigation interactions

<S/N> <Html & CSS Concept> <Usage>
1 Semantic HTML ...... Structures the app using elements such as header, main, section, article, and footer.
2 Forms & Inputs ...... Provides the meal search field and user input controls.
3 Flexbox ............ Arranges navigation, buttons, recipe details, and other UI elements.
4 CSS Grid ........... Creates the responsive layout for meal/recipe cards.
5 Responsive Design .... Ensures the app works properly across mobile, tablet, and desktop screens.
6 CSS Variables ...... Manages reusable colors, spacing, and theme values.
7 Light & Dark Mode.... Uses CSS variables/classes to switch between light and dark themes.
8 Cards, Images & Typography..... Presents meal images, ingredients, instructions, and text in a clear visual layout.
9 Pseudo-classes, Transitions & Animation...... Adds interactive states such as hover/focus and smooth visual effects.

No build tools or dependencies required — it's pure HTML, CSS, and Vanilla JS.

                                   What I Learned

Building this project helped me solidify how JavaScript fundamentals connect together in a real app — from fetching and parsing external data asynchronously, to validating user input with regular expressions, to manipulating the DOM efficiently without a framework.

                                    Challenge

1.Trying to safeguard API token in frontend without backend, using “.env”, “gitignore”, and “vercel environmental variable”. [though not used in these project, but I lerant it and have use it in subsequent building].

2.Learnt connecting other js file to the "main.js" file using "Module" as value to "Type" property.

3.Got better at linking code challenges to AI for bugs.

4.I became more carful at syntax and made sure spellings corresponds in different files.

5.Hosting Mealrecipe App folder in Vercel from github.

                                       what i'm Upto

React.
Typescript.
Nextjs.
