const obj = {
  //index:value
  pseudo: "jilvo",
  ville: "Lyon",
  admin: false,

  direBonjour: function () {
    // console.log("Bonjour je suis " + this.pseudo);
  },
  // direBonjour() {
  //   console.log("Bonjour je suis " + obj.pseudo);
  // },
};

//accolades = obj

//ajouter
obj.age = 24;
obj["admin"] = true;

//modifier
obj.pseudo = "LE J";

//supprimer
// delete obj.ville;

//checher si propriété existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

//parcourir l'obet
for (const key in obj) {
  // console.log(key + " : " + obj[key]);
}

//obtenir les clés
const keys = Object.keys(obj);
// console.log(keys);

//obtenir les valeurs
const values = Object.values(obj);
// console.log(values);

const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m85",
  poids: "93kg",
  pseudo: "GANTT",
};

//fusionner objects
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

//empêche les modifications
// const newObj = Object.freeze(obj);
// const newObj = Object.seal(obj);
// newObj.pseudo = "test";
// newObj.adresse = "42 rue du boubou coeur";
// console.log(newObj);

// ----------------
// Construire des objets
// ----------------

// Fonction constructeur

// function User(pseudo, ville) {
//   this.pseudo = pseudo;
//   this.ville = ville;
//   this.getCity = function () {
//     console.log(this.pseudo + " habite à " + this.ville);
//   };
// }

function User(obj) {
  // console.log(obj);
  this.pseudo = obj.pseudo;
  this.ville = obj.ville;
  this.age = obj.age;
  this.getCity = function () {
    // console.log(
    this.pseudo + " habite à " + this.ville + " et il a " + this.age + " ans";
    // );
  };
}

const user1 = new User("GANTT", "Lyon");
const user2 = new User(obj);
// console.log(user2.getCity());
// const user2 = new User("Héra", "Lyon");
// console.log(user2.getCity());

// ----------------
// Factory functions
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}
const user4 = User3("Jilvo", "Lyon");
// console.log(user4);

//------------
// Class
class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.vile = ville;
  }
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}
const user5 = new Utilisateur("Giorgia", "Nice");

Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
};

console.log(user5.sayCity());
Object.assign(Utilisateur.prototype, {
  method1() {
    // Ma méthode
  },
  method2() {
    // Ma méthode
  },
});

// console.log(user5);

//-----------
// L'héritage
//-----------

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("Le chien court !");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("j'ai tué un oiseau");
  }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);
