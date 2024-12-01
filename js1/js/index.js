// 1
let age = 13;
console.log(age);

// 2
let name = "Anton";
console.log(name);

// 3
let isStudent = true;
console.log(isStudent);

// 4
let myString =
  "You tell me good luck. I don't need luck to perform. I decide when to perform. I'm playing to win. And to win, I will destroy you.";
console.log(myString);

//   5
let myNumber = 25;
myNumber = myNumber + 10;
console.log(myNumber);

// 6
let myNull = null;
console.log(myNull);

// 7
let userName = prompt("Введіть ваше ім'я:");
alert("Привіт," + userName + "!🥶");

// 8
let userAccept = confirm("Ви підтверджуєте дію?");
if (userAccept) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

// 9
alert("Увага! Ця дія може бути небезпечною.");
let userNext = confirm("Ви впевнені, що хочете продовжити?");
if (userNext) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
