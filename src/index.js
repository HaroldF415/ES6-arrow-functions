import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

// console.log("Number array: " + numbers);
////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

// const newNums1 = numbers.map(x => x * x);
// console.log("New Num 001 - Squared: " + newNums1);

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

// const newNums2 = numbers.filter(num => num < 10);
// console.log("New Num 002 - Filter < 10: " + newNums2);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

// const newNums3 = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );
// console.log("New Num 003 - Reduce: " + newNums3);

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

// const newNums4 = numbers.find(num => num > 10);
// console.log("New Num 004 - Find > 10: " + newNums4);

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })

// const newNums5 = numbers.findIndex(num => num > 10);
// console.log("New Num 005 - FindIndex > 10: " + newNums5);
