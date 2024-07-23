
        async function getRandom() {
            const response =  await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
            const data = await response.json();
            displayRandomMeal(data.meals[0]);

        }
        function displayRandomMeal(meal){
            const mealDiv = document.getElementById('recommendations');
mealDiv.innerHTML = `<p>Name: ${meal.strMeal} </p> <p>Link to YouTube:<a href="${meal.strYoutube}" target="_blank"> ${meal.strYoutube}</a></p> <p>Recipe: ${meal.strInstructions}</p>`;
        }


async function mealLetter(){
    const letterInput = document.getElementById('letter-input').value;
const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letterInput}`);
const data = await response.json();
 displayLetter(data.meals[0]);

}
function displayLetter(meal){
    const mealDiv = document.getElementById('recommendations2');
    const letterInput = document.getElementById('letter-input').value;
  //letterInput[0].toUpperCase();
            mealDiv.innerHTML = `<p>Letter selected: ${letterInput}</p> <p>Name: ${meal.strMeal} </p> <p>Origin of Meal: ${meal.strArea}</p>`;
}

         document.getElementById('getRandom').addEventListener('click', getRandom);
          document.getElementById('mealLetter').addEventListener('click', mealLetter);
