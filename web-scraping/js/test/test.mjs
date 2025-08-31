/* let elements = document.querySelectorAll(
  "a.dictLink.featured, a.dictLink"
);
let newArray = [];

for (let i = 0; i < elements.length; i++) {
  let text = elements[i].textContent;
  //console.log(texto);

  newArray = [...newArray, text];
  console.log(newArray);
  // console.log(newArray.join(" "));
} */

// Método 2 --- Mejorado  👈👀
/* let elements = document.querySelectorAll(
  "a.dictLink.featured, a.dictLink"
);

let rawWords = [];
let deletedWords = [];
let previousList = [];
let separateWords = [];
let finalList = [];

for (let i = 0; i < elements.length; i++) {
  let text = elements[i].textContent;

  rawWords = [...rawWords, text];
}

rawWords.map((word) => {
  let divide = word.includes("algo");

  word != rawWords[0] && !divide
    ? (previousList = [...previousList, word])
    : (deletedWords = [...deletedWords, word]);

  if (divide) {
    let separate = word.split(" ")[0];
    separateWords = [...separateWords, separate];
    finalList = [...previousList, ...separateWords];
    // console.log(separateWords);
  }
});

console.log(rawWords);
console.log(deletedWords);
console.log(previousList);
console.log(finalList); */

// Método 3 --- Mejorado  👈👀
// NodeList vs Array List
/* let elements = document.querySelectorAll(
  "a.dictLink.featured, a.dictLink"
);
let arrayList = [...elements];

let rawWords = [];
let previousList = [];
let deletedWords = [];
let separateWords = [];
let finalList = [];

rawWords = arrayList.map((word) => word.textContent);

previousList = rawWords.filter((word) => {
  return word != rawWords[0] && !word.includes("algo");
});

deletedWords = rawWords.filter((word) => word.includes("algo"));
separateWords = deletedWords.map((word) => word.split(" ")[0]);
finalList = [...previousList, ...separateWords];

console.log(previousList);
console.log(deletedWords);
console.log(separateWords);
console.log(finalList); */

// Método 4 --- Mejorado 👈👀

/* let elements = document.querySelectorAll(
  "a.dictLink.featured, a.dictLink"
);
let arrayList = [...elements];

let rawWords = [];
let previousList = [];
let deletedWords = [];
let separateWords = [];
let finalList = [];

rawWords = arrayList.map((word) => word.textContent);

// previousList = rawWords.filter((word) => {
//   return (
//     word != rawWords[0] &&
//     !word.includes("algo") &&
//     !word.includes("a algn.")
//   );
// });

previousList = rawWords.filter((word) => {
  return (
    word !== rawWords[0] &&
    !["algo", "a algn."].some((keyword) => word.includes(keyword))
  );
});

// deletedWords = rawWords.filter(
//   (word) => word.includes("algo") || word.includes("a algn.")
// );

deletedWords = rawWords.filter((word) => {
  return ["algo", "a algn."].some((keyword) => word.includes(keyword));
});
separateWords = deletedWords.map((word) => word.split(" ")[0]);
finalList = [...previousList, ...separateWords];

// console.log(previousList);
// console.log(deletedWords);
// console.log(separateWords);
console.log(finalList); */

/* 
El método some() es una función de orden superior en JavaScript que se utiliza para verificar si al menos un elemento de un array cumple con una determinada condición. Devuelve un valor booleano (true o false) según el resultado de la evaluación.
*/

// Método 5 --- Mejorado 👈👀

/* let elements = document.querySelectorAll(
  "a.dictLink.featured, a.dictLink"
);
let arrayList = [...elements];

let rawWords = [];
let previousList = [];
let deletedWords = [];
let separateWords = [];
let finalList = [];

rawWords = arrayList.map((word) => word.textContent);

previousList = rawWords.filter((word) => {
  return (
    word !== rawWords[0] &&
    !["algo", "a algn."].some((keyword) => word.includes(keyword))
  );
});

deletedWords = rawWords.filter((word) => {
  return ["algo", "a algn."].some((keyword) => word.includes(keyword));
});

separateWords = deletedWords.map((word) => word.split(" ")[0]);
finalList = [...previousList, ...separateWords];

console.log(finalList.length);
console.log(finalList.join("\n")); */

// Método 6 --- Mejorado 👈👀
// Expresiones regulares

/* const newArray = array.map((element) => {
  return element.replace(/algo\/a|algo|algn\./g, "").trim();
}); */

/* import { data } from "../data.mjs";

const newArray = data.map((element) => {
  return element
    .replace(/algo\/a|algo|algn\./g, "")
    .replace(/\s+/g, " ")
    .trim();
});

console.log(newArray); */

import { data } from "../data.mjs";

// que sea estricto
const exclude = /algo\/a|algo|algn\.|\(.*\)|lgn\.|algo\/a algn\./g;

const previousList = data.map((word) => {
  return word.replace(exclude, "").replace(/\s+/g, " ").trim();
});

const firstWord = data[0].split(" ")[0];

const finalList = previousList.filter((item) => {
  return !item.includes(firstWord);
});

console.log(previousList, finalList);

/* 
El método replace() se utiliza para buscar y reemplazar parte de una cadena de texto por otra. Toma dos argumentos: el primero es el patrón de búsqueda (que puede ser una cadena de texto o una expresión regular), y el segundo es la cadena de reemplazo.
*/

/* let newArray = [];

for (let key in spaceship.crew) {
  newArray.push(
    `${key}: ${spaceship.crew[key].name} - ${spaceship.crew[key].degree}`
  );
} */
