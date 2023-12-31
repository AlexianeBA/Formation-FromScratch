// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
//5
const inputElement = document.getElementById("inputSearch");
//7
const btnSort = document.querySelectorAll(".btnSort");
//4
const countriesContainer = document.querySelector(".countries-container");
// 3 - Passer les données à une variable
let countriesData = [];
//7
let sortMethod = "maxToMin";

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
async function fetchCountries() {
  await fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((data) => (countriesData = data));
  console.log(countriesData);
  countriesDisplay();
}
// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP
function countriesDisplay() {
  countriesContainer.innerHTML = countriesData
    //5
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    // 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
    .sort((a, b) => {
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.translations.fra.common.localeCompare(
          b.translations.fra.common
        );
      }
    })
    // 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)
    .slice(0, inputRange.value)
    .map(
      (country) =>
        `
        <div class="card">
        <img src=${country.flags.svg} alt="drapeau ${country.translations.fra.common}">
        <h2>${country.translations.fra.common}</h2>
        <h4>${country.capital}</h4>
        <p>Population:${country.population}</p>
        </div>
    `
    )
    .join("");
}
window.addEventListener("load", fetchCountries);

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);
inputElement.addEventListener("input", countriesDisplay);
//6
inputRange.addEventListener("input", () => {
  countriesDisplay();
  rangeValue.textContent = inputRange.value;
});

//7
btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    countriesDisplay();
  });
});
