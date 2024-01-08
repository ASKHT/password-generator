let showresult = document.querySelector("#result");
let copclipboard = document.querySelector("#clipboard");
let passwordrange = document.querySelector("#length"); //password length
let lowercase = document.querySelector("#lowercase"); //lowercase
let uppercase = document.querySelector("#uppercase");
let tonumber = document.querySelector("#numbers");
let symbol = document.querySelector("#symbols");
let generate = document.querySelector("#generate");
let changeicon = document.querySelector("#changeicon");
// console.log(changeicon);
// console.log(
//   showresult,
//   copclipboard,
//   passwordrange,
//   lowercase,
//   uppercase,
//   tonumber,
//   symbol,
//   generate
// );
const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const numbers_chars = "0123456789";
const symbols_chars = "!@#$%^&*()";
copclipboard.addEventListener("click", () => {
  const pass = showresult.innerText;
  if (!pass) {
    return;
  }
  navigator.clipboard.writeText(pass);

  alert("password has been copied");
});

generate.addEventListener("click", () => {
  let value = takevalue();
  let first = value[0]; //length of the password
  let second = value[1]; //if password contain lowercase
  let third = value[2]; //if password contain uppercase
  let fourth = value[3]; //if password contain numbers
  let fifth = value[4]; // if password contain symbol

  showresult.innerText = generatepassword(first);
});

function generatepassword(first) {
  let password = "";
  let length = first;
  let chars = "";

  chars += uppercase.checked ? uppercase_chars : "";
  chars += lowercase.checked ? lowercase_chars : "";
  chars += numbers.checked ? numbers_chars : "";
  chars += symbol.checked ? symbols_chars : "";

  for (let i = 0; i < length; i++) {
    let rand = Math.floor(Math.random() * chars.length);
    password += chars.substring(rand, rand + 1);
  }

  return password;
}

function takevalue() {
  let val = +passwordrange.value;
  let islowercase = lowercase.checked;
  let isuppercase = uppercase.checked;
  let isnumber = tonumber.checked;
  let issymbol = symbol.checked;
  return [val, islowercase, isuppercase, isnumber, issymbol]; // because you will
  // not send the multiple values of return so thats why i am sending array of it
  // and later destructure that
}
let randomnumber = Math.floor(Math.random() * 4);
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  // console.log("getRandomSymbol");
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// arrofrandomfunction = [
//   getRandomLower(),
//   getRandomUpper(),
//   getRandomNumber(),
//   getRandomSymbol(),
// ];
// console.log(arrofrandomfunction[0]);
// console.log(arrofrandomfunction[randomnumber]);
