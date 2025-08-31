/* let elements = document.querySelectorAll(
  "a.dictLink.featured, a.dictLink"
);
let arrayList = [...elements];

let rawWords = [];
let previousList = [];
let finalList = [];

rawWords = arrayList.map((word) => word.textContent);
previousList = rawWords.map((word) => word.split(" ")[0]);
finalList = previousList.filter((word) => word !== rawWords[0]);

console.log(finalList.length);
console.log(finalList.join("\n")); */

/* let elements = document.querySelectorAll(
  "a.dictLink.featured, a.dictLink"
);
let arrayList = [...elements];

let rawWords = [];
let previousList = [];
let finalList = [];

// const exclude = /algo\/a|algo|algn\.|\(.*\)|lgn\.|algo\/a algn\./g;
const exclude = /algo\/a|algo|a algn\.|\(.*\)|lgn\.|algo\/a algn\.|a algo\/a algn./g;

rawWords = arrayList.map((word) => word.textContent);

previousList = rawWords.map((word) => {
  return word.replace(exclude, "").replace(/\s+/g, " ").trim();
});

const firstWord = rawWords[0].split(" ")[0];

finalList = previousList.filter((item) => {
  return !item.includes(firstWord);
});

console.clear();
console.log(finalList.length);
console.log(finalList.join("\n"));

setInterval(() => {
  console.clear();
}, 6000); */

const filterWords = () => {
  let arrayList = $$("a.dictLink.featured, a.dictLink");

  let rawWords = [];
  let previousList = [];
  let finalList = [];

  const exclude =
    /algo\/a|algo|a algn\.|\(.*\)|lgn\.|algo\/a algn\.|a algo\/a algn./g;

  rawWords = arrayList.map((word) => word.textContent);

  previousList = rawWords.map((word) => {
    return word.replace(exclude, "").replace(/\s+/g, " ").trim();
  });

  const firstWord = rawWords[0].split(" ")[0];

  finalList = previousList.filter((item) => {
    return !item.includes(firstWord);
  });

  console.clear();
  console.log(finalList.length);
  console.log(finalList.join("\n"));

  copy(finalList.join("\n"))
  return finalList.join("\n");
};

filterWords();

/* const filterWords = () => {
  let arrayList = $$("a.dictLink.featured, a.dictLink");

  let rawWords = [];
  let previousList = [];
  let finalList = [];

  const exclude =
    /algo\/a|algo|a algn\.|\(.*\)|lgn\.|algo\/a algn\.|a algo\/a algn./g;

  rawWords = arrayList.map((word) => word.textContent);

  previousList = rawWords.map((word) => {
    return word.replace(exclude, "").replace(/\s+/g, " ").trim();
  });

  const firstWord = rawWords[0].split(" ")[0];

  finalList = previousList.filter((item) => {
    // return !item.includes(firstWord);
    return item.split(/\\b${firstWord}\\b/g);
  });

  console.clear();
  console.log(finalList.length);
  console.log(finalList.join("\n"));

  copy(finalList.join("\n"));
  return finalList.join("\n");
};

filterWords(); */
