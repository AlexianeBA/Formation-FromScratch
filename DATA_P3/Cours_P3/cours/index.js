// Tableau
let array = ["Bordeaux", "Toulouse", "Nantes"];
// console.log(array[1][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

// objet.adresse = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];

// console.log(data[2].pseudo);

//-----------------
//Les structure de contrôle
//---------------------------
if (data[0].age > data[1].age) {
  //console.log(data[0].pseudo + " est plus âgé que " + data[1].pseudo);
} else {
  //Valeur si faux
}

//While
let w = 0;
while (w < 10) {
  w++;
  //console.log("La valeur de w est de : " + w);
}

//Do while
let d = 0;

do {
  d++;
  //console.log(d);
} while (d < 5);

//Les boucles for
for (const user of data) {
  //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
}

//on déclare la valeur de i | jusqu'où on boucle | on incrémente i si la condition de n'est pas remplie
for (i = 0; i < data.length; i++) {
  //console.log(i);
  //console.log(data[i].technos[0]);
  //document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
}

//Switch
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;

    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//Méthodes String
let string2 = "Javascript est un langage orienté objet";
// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string2));
// console.log(string2.length);
// console.log(string2[string2.length - 1]);

// console.log(string2.indexOf("langage")); //retourne -1 si il ne connaît pas

//découpe la chaîne de caractère
// let newString = string2.slice(5, 17);
// console.log(newString);

//permet de redécomposer les choses
// console.log(string2.split("i"));

//mettre en minuscule
// console.log(string2.toLowerCase());
//mettre en majuscule
//console.log(string2.toUpperCase());

//remplacer un mot par un autre
//console.log(string2.replace("Javascript", "PHP"));

//---------------------------------

//Méthodes numbers

let number2 = 42.1234;
let numberString = "42.12 est un chiffre";
//nombre de chiffres après la virgule
//console.log(number2.toFixed(2));

//Changer une chaine de caractère par un number
//console.log(parseInt("43"));
//garde le premier nombre
//console.log(parseInt(numberString));
//garde le nombre en entier (virgule comprise)
//console.log(parseFloat(numberString));

//------------------------
//Math
//console.log(Math.PI);
//arrondir tout court
//console.log(Math.round(4.5));
//arrondi au plus petit
//console.log(Math.floor(4.9));
//arondi au plus grand
//console.log(Math.ceil(4.1));
//faire des puissance ou **
//console.log(Math.pow(2, 7));
//racine carrée
//console.log(Math.sqrt(16));

//console.log(Math.floor(Math.random() * 50));

//-------------------

//Méthodes Arrays

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);
//console.log(newArr);

//let newArray = [...array3, ...array4];
//console.log(newArray);

//console.log(array3.join(" "));

//console.log(newArray.slice(2, 3));

//console.log(array3.indexOf("Python"));

//array3.forEach((languages) => console.log(languages));

//console.log(array3.every((language) => language === "Php"));
//console.log(array3.some((language) => language == "Php"));

//permet d'enlever le 1er élement du tableau
//let shift = array3.shift();
//console.log(array3);

//retire le dernier élements
//console.log(array3.pop());

//remplacer un éléments
//const restArray = array3.splice(0, 2, ...array4);
//console.log(array3);

//IMPORTANT //

let arrayNumber = [4, 74, 28, 12, 1];
//console.log(arrayNumber.reduce((x, y) => x + y));

//Ajouter un élément dans un tableau
arrayNumber.push(17);
//console.log(arrayNumber);

//FILTER, SORT, MAP

//FILTER
//console.log(arrayNumber.filter((number) => number > 10));

//SORT=TRIER
//console.log(arrayNumber.sort());
//Classer du plus grand au plus petit
//console.log(arrayNumber.sort((a, b) => b - a));
//Classer du plus petit au plus grand
//console.log(arrayNumber.sort((a, b) => a - b));

//console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b));

//MAP
// document.body.innerHTML = arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");

//----------------------
//Méthodes Objects
//----------------------
// document.body.innerHTML = data

//   .filter((user) => user.pseudo.includes("i"))
//   .sort((a, b) => b.age - a.age)
//   .map(
//     (user) => ` <div class="user-card>
// <h2>${user.pseudo}</h2>
// <p>Age : ${user.age}</p>
// <p>Statuts : ${user.admin ? "Modérateur" : "Membre"}</p>
// </div>`
//   )
//   .join("");

//-----------------
//Les Dates

// Date classique
let date = new Date();

//Timestamp
let timestamp = Date.parse(date);
//console.log(timestamp);

//IsoString
let iso = date.toISOString;
//onsole.log(date.toISOString());

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  });
  return newDate;
}

// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

//---------------
//Destructuring

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData;
// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
// console.log(array5[0]);
// console.log(array5[1]);
// console.log(array5[2]);

let [x, y, z] = array5;
// console.log(x);
// console.log(y);
// console.log(z);

//--------
//Les Datasets

const h3js = document.getElementById("javascript");
//console.log(h3js.dataset.lang);

const h3 = document.querySelector("h3");
// h3.forEach((language) => console.log(language.dataset.lang));

//----------
//Les Regex
let mail = "jilvo@gmail.com";
// console.log(mail.search(/jilvo/));

// console.log(mail.replace(/jilvo/, "boubou"));
// console.log(mail.match(/jilvo/));
// console.log(mail.match(/[jiov]/));
// console.log(mail.match(/[0]/));

//Tous les chiffres
// console.log(mail.match(/\d/));

//Matcher toutes les lettre
// console.log(mail.match(/[a-z]/));

// console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 265264849;
// console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
