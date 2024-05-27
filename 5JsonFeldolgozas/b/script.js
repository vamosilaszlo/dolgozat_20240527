document.addEventListener("DOMContentLoaded", function() {
    
    fetch('http://172.16.16.136:7010/api/Foods')
    //fetch('etelek.json')
        .then(response => response.json())
        .then(data => {
            const foodList = document.getElementById('food-list');
            data.forEach(food => {
                const foodItem = document.createElement('div');
                foodItem.classList.add('food-item');
                
                const foodName = document.createElement('h2');
                foodName.textContent = food.nev;
                
                const foodDescription = document.createElement('p');
                foodDescription.textContent = `Kalória: ${food.kcak} kcal`;
                
                const foodPrice = document.createElement('p');
                foodPrice.textContent = `Ár: ${food.ar} Ft`;
                
                foodItem.appendChild(foodName);
                foodItem.appendChild(foodDescription);
                foodItem.appendChild(foodPrice);
                
                foodList.appendChild(foodItem);
            });
        })
        .catch(error => console.error('Error fetching data from API:', error));
});


