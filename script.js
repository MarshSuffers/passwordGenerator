//Declare Variables
let output = document.getElementById("password");

let length = document.getElementById("length");
let special = document.getElementById("special");
let numbers = document.getElementById("numbers");
let upperCase = document.getElementById("case");

const letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const specialArray = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "?",
  "<",
  ">",
];
const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let passwordArray = [];

const genBtn = document.getElementById("genBtn");
const specialCheck = document.getElementById("special");
const numbersCheck = document.getElementById("numbers");
const caseCheck = document.getElementById("case");

//Generate Password

genBtn.addEventListener("click", generate);

function generate() {
  shuffle();
  output.innerHTML = `<p>${passwordArray.join("")}</p>`;
}

//Shuffle characters

function shuffle() {
  let fullArray = letterArray;
  if (specialCheck.checked == true) {
    for (let i = 0; i < specialArray.length; i++) {
      fullArray.push(specialArray[i]);
    }
  }
  if (numbersCheck.checked == true) {
    for (let i = 0; i < numberArray.length; i++) {
      fullArray.push(numberArray[i]);
    }
  }
  if (caseCheck.checked == true) {
    for (let i = 0; i < upperArray.length; i++) {
      fullArray.push(upperArray[i]);
    }
  }
  let i = fullArray.length;
  while (i != 0) {
    // Pick a remaining element
    let randomIndex = Math.floor(Math.random() * i);
    i--;

    // And swap it with the current element.
    [fullArray[i], fullArray[randomIndex]] = [
      fullArray[randomIndex],
      fullArray[i],
    ];
  }

  for (let i = 0; i < length.value; i++) {
    passwordArray.push(fullArray[i]);
  }
  console.log(passwordArray);
}
