document.addEventListener("DOMContentLoaded", function () {
    const foods = [
        { id: 1, nev: "Spaghetti Bolognese", kcak: 450, ar: 1800 },
        { id: 2, nev: "Caesar Saláta", kcak: 350, ar: 1200 },
        { id: 3, nev: "Grillezett Csirkemell", kcak: 220, ar: 1600 },
        { id: 4, nev: "Hamburger", kcak: 600, ar: 2000 },
        { id: 5, nev: "Sushi", kcak: 200, ar: 2500 },
        { id: 6, nev: "Gulyásleves", kcak: 400, ar: 1000 },
        { id: 7, nev: "Rántott Sajt", kcak: 500, ar: 1400 },
        { id: 8, nev: "Vegetáriánus Wrap", kcak: 350, ar: 1300 },
        { id: 9, nev: "Lasagna", kcak: 550, ar: 1900 },
        { id: 10, nev: "Rántott Csirke", kcak: 400, ar: 1500 },
        { id: 11, nev: "Párolt Zöldségek", kcak: 150, ar: 800 },
        { id: 12, nev: "Kebap", kcak: 650, ar: 1700 },
        { id: 13, nev: "Tofu Stir-Fry", kcak: 300, ar: 1400 },
        { id: 14, nev: "Pho Leves", kcak: 350, ar: 1600 },
        { id: 15, nev: "Pad Thai", kcak: 500, ar: 1800 },
        { id: 16, nev: "Burrito", kcak: 700, ar: 1900 },
        { id: 17, nev: "Taco", kcak: 250, ar: 800 },
        { id: 18, nev: "Falafel", kcak: 300, ar: 1200 },
        { id: 19, nev: "Ratatouille", kcak: 200, ar: 1100 },
    ];

    const foodContainer = document.getElementById("food-list");
    foods.forEach((food) => {
        const foodItem = createfoodItem(food);
        foodContainer.appendChild(foodItem);
    });

    function createfoodItem(food) {
        const foodItem = document.createElement("div");
        foodItem.classList.add("food-item");

        const foodName = document.createElement("h2");
        foodName.textContent = food.nev;

        const foodDescription = document.createElement("p");
        foodDescription.textContent = `Kalória: ${food.kcak} kcal`;

        const foodPrice = document.createElement("p");
        foodPrice.textContent = `Ár: ${food.ar} Ft`;

        foodItem.appendChild(foodName);
        foodItem.appendChild(foodDescription);
        foodItem.appendChild(foodPrice);

        return foodItem;
    }
});
