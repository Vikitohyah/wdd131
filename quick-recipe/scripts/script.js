// ------------ Footer ------------
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// ------------ Contact Form ------------
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      alert(`Thank you, ${name}! We'll get back to you soon.`);
      localStorage.setItem("userContact", JSON.stringify({ name, email }));
      contactForm.reset();
    });
  }
});

// ------------ Hamburger ------------
const navigation = document.querySelector('nav');
const hamburger = document.querySelector('#menu');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('show');
  hamburger.classList.toggle('show');
});

// ------------ Recipe List ------------
const recipes = [
  {
    id: "1",
    title: "Avocado Toast",
    category: "breakfast",
    image: "images/avocado-toast.jpg",
    cookTime: "4 mins",
    ingredients: ["2 slices bread", "1 ripe avocado", "Salt", "Chili flakes"],
    steps: ["Toast the bread.", "Mash the avocado.", "Spread on toast.", "Sprinkle salt and chili flakes."],
    video: "https://www.youtube.com//embed/AT5Rm60i81o"
  },
  {
    id: "2",
    title: "Chicken Salad",
    category: "lunch",
    image: "images/chicken-salad.jpg",
    cookTime: "10 mins",
    ingredients: ["Cooked chicken", "Lettuce", "Tomatoes", "Dressing"],
    steps: ["Chop all ingredients.", "Mix in a bowl.", "Add dressing.", "Serve chilled."],
    video: "https://www.youtube.com//embed/cSAGdGSdE6k"
  },
  {
    id: "3",
    title: "Pasta Dinner",
    category: "dinner",
    image: "images/pasta.jpg",
    cookTime: "25 mins",
    ingredients: ["Pasta", "Tomato sauce", "Garlic", "Parmesan"],
    steps: ["Boil pasta.", "Heat sauce.", "Combine with pasta.", "Top with cheese."],
    video: "https://www.youtube.com/embed/791FJxFL6uw"
  },
  {
  id: "4",
  title: "Plantain and Egg",
  category: "breakfast",
  image: "images/plantain-egg.png",
  cookTime: "6 mins",
  ingredients: ["2 eggs", "Bell peppers", "Onion", "Salt", "Pepper", "Oil of your choice"],
  steps: [
    "Beat the eggs in a bowl.",
    "Chop veggies and sauté oil.",
    "Pour eggs over veggies and cook till preferred texture.",
    "Peel and Fry your plantain.",
    "Serve plantain with egg with water or any beverage of your choice."
  ],
  video: "https://www.youtube.com/embed/7LI_9YVxoXc"
},
{
  id: "5",
  title: "Grilled Cheese Sandwich",
  category: "lunch",
  image: "images/grilled-cheese.jpg",
  cookTime: "3 mins",
  ingredients: ["2 slices bread", "Butter", "Cheddar cheese"],
  steps: [
    "Butter one side of each bread slice.",
    "Place cheese between unbuttered sides.",
    "Grill until golden on both sides."
  ],
  video: "https://www.youtube.com/embed/bJ71Nfm6frM"
},
{
  id: "6",
  title: "Stuffed Bell Peppers",
  category: "dinner",
  image: "images/stuffed-bell-peppers.jpg",
  cookTime: "30 mins",
  ingredients: ["Bell peppers", "Rice", "Ground beef", "Tomato sauce", "Cheese"],
  steps: [
    "Cut tops off peppers and remove seeds.",
    "Cook beef and mix with rice and sauce.",
    "Stuff peppers, top with cheese.",
    "Bake at 180°C for 20 minutes."
  ],
  video: "https://www.youtube.com/embed/mWYwrUTramk"
},
{
  id: "7",
  title: "Fruit Parfait",
  category: "breakfast",
  image: "images/fruit-parfaits.webp",
  cookTime: "5 mins",
  ingredients: ["Banana", "Berries", "apple", "Yogurt", "Granola"],
  steps: [
    "Chop fruits (any fruits of your choice) into bits.",
    "Add yoghurt in a bowl",
    "Add chopped fruits",
    "Add granola and enjoy."
  ],
  video: "https://www.youtube.com/embed/aYwkYRm12QM"
},
{
  id: "8",
  title: "Chicken Stir-Fried Ramen",
  category: "lunch",
  image: "images/chicken-ramen.jpg",
  cookTime: "20 mins",
  ingredients: ["Chicken breast", "Ramen","Veggies", "Soy sauce", "Garlic", "Oil"],
  steps: [
    "Slice chicken and boil ramen for 1min.",
    "Strain ramen with cold water and keep aside",
    "Sauté garlic and chicken in oil.",
    "Add veggies and soy sauce or ramen seasoning.",
    "Add ramen.",
    "Stir-fry until cooked."
  ],
  video: "https://www.youtube.com/embed/IwgB7PbFUiA"
},
{
  id: "9",
  title: "Goat meat and Yam Pepper soup",
  category: "dinner",
  image: "images/pepper-soup.jpg",
  cookTime: "25 mins",
  ingredients: ["Goat meat", "Yam", "Pepper soup spice", "scent leave"],
  steps: [
    "Wash your meat and slice yam.",
    "Cook washed meat with pepper soup spice and bouillon.",
    "Add chopped yams and allow to cook.",
    "Add scent leave and switch of the stove after one minute."
  ],
  video: "https://www.youtube.com/embed/7dj-n9w_Vhg"
}

];

// ------------ Recipes Page for Load and Filter ------------
const recipeGrid = document.getElementById("recipeGrid");

if (recipeGrid) {
  function renderRecipes(category = "all") {
    recipeGrid.innerHTML = "";
    const filtered = category === "all" ? recipes : recipes.filter(r => r.category === category);

    filtered.forEach(recipe => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
        <h3>${recipe.title}</h3>
        <p>${recipe.cookTime}</p>
        <a href="recipe.html?id=${recipe.id}">View Recipe</a>
      `;
      recipeGrid.appendChild(card);
    });
  }

  renderRecipes();
  document.querySelectorAll(".filters button").forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");
      renderRecipes(category);
    });
  });
}

// ------------ Recipe Detail Page and Add to Favourite Feature ------------
const recipeDetails = document.getElementById("recipeDetails");

if (recipeDetails) {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");
  const recipe = recipes.find(r => r.id === recipeId);

  if (recipe) {
    recipeDetails.innerHTML = `
      <h1>${recipe.title}</h1>
      <img src="${recipe.image}" alt="${recipe.title}">
      <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>

      <button class="favorite-btn" id="favoriteBtn">❤️ Save to Favorites</button>

      <div class="ingredients">
        <h2>Ingredients</h2>
        <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>
      </div>

      <div class="steps">
        <h2>Steps</h2>
        <ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>
      </div>

      <div class="video">
        <h2>Video</h2>
        <iframe width="100%" height="315" src="${recipe.video}" frameborder="0" allowfullscreen></iframe>
      </div>
    `;

    document.getElementById("favoriteBtn").addEventListener("click", () => {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (!favorites.includes(recipe.id)) {
        favorites.push(recipe.id);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert(`${recipe.title} added to favorites!`);
      } else {
        alert("Already in favorites.");
      }
    });
  } else {
    recipeDetails.innerHTML = "<p>Recipe not found.</p>";
  }
}

// ------------ Favorites Page ------------
document.addEventListener("DOMContentLoaded", () => {
  const favoriteRecipesDiv = document.getElementById("favoriteRecipes");
  const favoriteTipsList = document.getElementById("favoriteTipsList");

  // Load and display favorite recipes
  if (favoriteRecipesDiv) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length === 0) {
      favoriteRecipesDiv.innerHTML = "<p>No favorite recipes saved.</p>";
    } else {
      const favoriteData = recipes.filter(recipe => favorites.includes(recipe.id));
      favoriteData.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.title}" loading="lazy">
          <h3>${recipe.title}</h3>
          <p>${recipe.cookTime}</p>
          <a href="recipe.html?id=${recipe.id}">View Recipe</a>
        `;
        favoriteRecipesDiv.appendChild(card);
      });
    }
  }
});